#!/bin/bash
# ============================================
# ARD-AGRO — установка на чистый VPS (Ubuntu 22.04)
# Запуск: bash setup.sh твой-домен.ru
# ============================================

set -e

DOMAIN=$1

if [ -z "$DOMAIN" ]; then
  echo "❌ Укажи домен! Пример: bash setup.sh ard-agro.ru"
  exit 1
fi

echo ""
echo "🚀 Начинаю установку ARD-AGRO на домен: $DOMAIN"
echo "=================================================="
echo ""

# --- 1. Обновляем систему ---
echo "📦 [1/8] Обновляю систему..."
apt update && apt upgrade -y -q

# --- 2. Node.js 20 ---
echo "📦 [2/8] Устанавливаю Node.js 20..."
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
npm install -g pm2

# --- 3. Nginx + Certbot ---
echo "📦 [3/8] Устанавливаю Nginx + Certbot..."
apt install -y nginx certbot python3-certbot-nginx
systemctl enable nginx

# --- 4. Клонируем сайт ---
echo "📦 [4/8] Клонирую проект..."
mkdir -p /var/www
cd /var/www
git clone https://github.com/Nik-Maltcev/azat-website.git
cd azat-website
npm install

# Создаём .env
cat > .env << EOF
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_SITE_URL=https://$DOMAIN
YOOKASSA_SHOP_ID=ЗАПОЛНИ_ПОЗЖЕ
YOOKASSA_SECRET_KEY=ЗАПОЛНИ_ПОЗЖЕ
EOF

# Собираем
npm run build
pm2 start npm --name "nextjs" -- start

# --- 5. Ставим Strapi ---
echo "📦 [5/8] Устанавливаю Strapi..."
cd /var/www
npx create-strapi-app@latest strapi --quickstart --no-run
cd strapi
pm2 start npm --name "strapi" -- run develop

# --- 6. Nginx конфиг ---
echo "📦 [6/8] Настраиваю Nginx..."
cat > /etc/nginx/sites-available/ard-agro << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    client_max_body_size 50M;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_cache_bypass \$http_upgrade;
    }
}

server {
    listen 80;
    server_name admin.$DOMAIN;
    client_max_body_size 50M;

    location / {
        proxy_pass http://127.0.0.1:1337;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

ln -sf /etc/nginx/sites-available/ard-agro /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

# --- 7. SSL ---
echo "📦 [7/8] Получаю SSL-сертификат..."
certbot --nginx -d $DOMAIN -d www.$DOMAIN -d admin.$DOMAIN --non-interactive --agree-tos --register-unsafely-without-email || echo "⚠️  SSL не удалось (проверь DNS). Позже запусти: certbot --nginx -d $DOMAIN -d www.$DOMAIN -d admin.$DOMAIN"

# --- 8. Автозапуск ---
echo "📦 [8/8] Настраиваю автозапуск..."
pm2 save
pm2 startup | tail -1 | bash

echo ""
echo "============================================"
echo "✅ ГОТОВО!"
echo "============================================"
echo ""
echo "🌐 Сайт:    https://$DOMAIN"
echo "🔧 Админка: https://admin.$DOMAIN/admin"
echo "   (при первом входе создай аккаунт)"
echo ""
echo "⚠️  Не забудь:"
echo "   1. В DNS добавь A-записи для $DOMAIN, www.$DOMAIN, admin.$DOMAIN → $(curl -s ifconfig.me)"
echo "   2. Заполни ЮKassa ключи: nano /var/www/azat-website/.env"
echo "   3. Создай модели товаров в Strapi (см. docs/strapi-models.md)"
echo ""
