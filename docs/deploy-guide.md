# Деплой ARD-AGRO на VPS — пошаговая инструкция

## Что нужно перед началом

- VPS (Ubuntu 22.04, 2 ГБ RAM, 30 ГБ SSD)
- Домен (например, ard-agro.ru), направленный на IP сервера (A-запись в DNS)
- SSH доступ к серверу (логин/пароль или ключ)

---

## Шаг 1. Подключаемся к серверу

```bash
ssh root@твой_ip_сервера
```

---

## Шаг 2. Обновляем систему и ставим Node.js

```bash
# Обновляем пакеты
apt update && apt upgrade -y

# Ставим Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Проверяем
node -v   # должно быть v20.x
npm -v
```

---

## Шаг 3. Ставим PM2 (менеджер процессов)

```bash
npm install -g pm2
```

---

## Шаг 4. Ставим Nginx

```bash
apt install -y nginx
systemctl enable nginx
systemctl start nginx
```

---

## Шаг 5. Клонируем проект

```bash
# Создаём папку для сайтов
mkdir -p /var/www
cd /var/www

# Клонируем репозиторий
git clone https://github.com/Nik-Maltcev/azat-website.git
cd azat-website

# Устанавливаем зависимости
npm install

# Создаём .env файл
cp .env.example .env
nano .env
```

В `.env` заполни:
```
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_SITE_URL=https://твой-домен.ru
YOOKASSA_SHOP_ID=твой_shop_id
YOOKASSA_SECRET_KEY=твой_secret_key
```

Сохрани: `Ctrl+O`, `Enter`, `Ctrl+X`

---

## Шаг 6. Собираем и запускаем Next.js

```bash
# Собираем production-билд
npm run build

# Запускаем через PM2
pm2 start npm --name "nextjs" -- start

# Проверяем что работает
pm2 status
```

---

## Шаг 7. Устанавливаем Strapi

```bash
cd /var/www

# Создаём Strapi проект (SQLite — без отдельной БД)
npx create-strapi-app@latest strapi --quickstart --no-run

cd strapi

# Запускаем через PM2
pm2 start npm --name "strapi" -- run develop
```

После запуска Strapi:
1. Открой в браузере: `http://твой_ip:1337/admin`
2. Создай аккаунт администратора
3. Создай Content Types по инструкции из `docs/strapi-models.md`

Когда всё настроишь, переключи Strapi в production:
```bash
pm2 stop strapi
pm2 start npm --name "strapi" -- run start
```

---

## Шаг 8. Настраиваем Nginx (проксирование + SSL)

```bash
nano /etc/nginx/sites-available/ard-agro
```

Вставь конфиг:

```nginx
# Основной сайт (Next.js)
server {
    listen 80;
    server_name твой-домен.ru www.твой-домен.ru;

    # Максимальный размер загрузки (для фото товаров)
    client_max_body_size 50M;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}

# Strapi админка (на поддомене или /strapi)
server {
    listen 80;
    server_name admin.твой-домен.ru;

    client_max_body_size 50M;

    location / {
        proxy_pass http://127.0.0.1:1337;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Активируем:
```bash
ln -s /etc/nginx/sites-available/ard-agro /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default
nginx -t          # проверка синтаксиса
systemctl reload nginx
```

---

## Шаг 9. SSL-сертификат (HTTPS бесплатно)

```bash
apt install -y certbot python3-certbot-nginx

# Получаем сертификат (замени на свой домен)
certbot --nginx -d твой-домен.ru -d www.твой-домен.ru -d admin.твой-домен.ru

# Автообновление (уже настроено автоматически)
certbot renew --dry-run
```

---

## Шаг 10. Автозапуск при перезагрузке сервера

```bash
pm2 save
pm2 startup
```

PM2 выведет команду — скопируй и выполни её.

---

## Шаг 11. Настройка ЮKassa

1. Зарегистрируйся на https://yookassa.ru (нужен ИП/ООО)
2. В личном кабинете → Настройки → API:
   - Скопируй `shopId` → в `.env` как `YOOKASSA_SHOP_ID`
   - Создай секретный ключ → в `.env` как `YOOKASSA_SECRET_KEY`
3. Настройки → HTTP-уведомления:
   - URL: `https://твой-домен.ru/api/payment/webhook`
   - События: `payment.succeeded`, `payment.canceled`

---

## Готово! Проверяем

- `https://твой-домен.ru` — сайт (лендинг + каталог)
- `https://admin.твой-домен.ru` — Strapi админка (управление товарами)
- ЮKassa обрабатывает оплату и шлёт webhook

---

## Полезные команды

```bash
# Статус процессов
pm2 status

# Логи
pm2 logs nextjs
pm2 logs strapi

# Перезапуск после обновления кода
cd /var/www/azat-website
git pull
npm run build
pm2 restart nextjs

# Перезапуск Strapi
cd /var/www/strapi
pm2 restart strapi
```

---

## Настройка DNS (у регистратора домена)

Добавь A-записи:

| Тип | Имя | Значение |
|-----|-----|----------|
| A | @ | IP твоего VPS |
| A | www | IP твоего VPS |
| A | admin | IP твоего VPS |

Записи применятся в течение 5-60 минут.
