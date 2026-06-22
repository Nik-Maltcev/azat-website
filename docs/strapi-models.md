# Модели данных Strapi для ARD-AGRO

## Как настроить

После установки Strapi (`npx create-strapi-app@latest strapi --quickstart`)
создай следующие Content Types через админку (Content-Type Builder):

---

## 1. Product (Товар)

| Поле | Тип | Описание |
|------|-----|----------|
| name | Text (required) | Название товара |
| slug | UID (from name) | URL-slug для SEO |
| sku | Text (unique) | Артикул |
| price | Number (integer) | Цена в рублях |
| description | Rich Text | Описание товара |
| profileType | Enumeration: triangle, lemon, star | Тип профиля |
| splinesCount | Number (integer) | Количество шлицов |
| length | Number (integer) | Длина в мм |
| torque | Number (integer) | Крутящий момент в Нм |
| inStock | Boolean (default: true) | В наличии |
| images | Media (multiple) | Фото товара |
| category | Relation → Category (many-to-one) | Категория |
| brands | Relation → Brand (many-to-many) | Совместимые бренды |

---

## 2. Category (Категория)

| Поле | Тип | Описание |
|------|-----|----------|
| name | Text (required) | Название (Крестовины, Вилки, ...) |
| slug | UID (from name) | URL-slug |
| description | Text (long) | Описание категории |
| icon | Text | Material icon name |
| image | Media (single) | Фото для карточки |
| products | Relation → Product (one-to-many) | Товары в категории |

---

## 3. Brand (Бренд)

| Поле | Тип | Описание |
|------|-----|----------|
| name | Text (required) | Название (CLAAS, John Deere, ...) |
| slug | UID (from name) | URL-slug |
| logo | Media (single) | Логотип |
| products | Relation → Product (many-to-many) | Товары бренда |

---

## 4. Order (Заказ)

| Поле | Тип | Описание |
|------|-----|----------|
| orderNumber | Text (unique) | Номер заказа (генерируется) |
| status | Enumeration: pending, paid, shipped, delivered, cancelled | Статус |
| customerName | Text | Имя покупателя |
| customerPhone | Text | Телефон |
| customerEmail | Email | Email |
| deliveryAddress | Text (long) | Адрес доставки |
| items | JSON | Массив товаров [{productId, quantity, price}] |
| totalAmount | Number (integer) | Сумма заказа |
| paymentId | Text | ID платежа ЮKassa |
| paidAt | DateTime | Дата оплаты |

---

## Настройки Strapi

### Permissions (Settings → Roles → Public)
Разрешить для Public role:
- Product: find, findOne
- Category: find, findOne
- Brand: find, findOne

Orders — только для authenticated (админки).

### Media Upload
По умолчанию Strapi хранит файлы локально в `./public/uploads/`.
Для продакшена это ок — фото будут на том же сервере.

### API URL
По умолчанию: `http://localhost:1337/api`
- GET /api/products?populate=*&filters[profileType][$eq]=triangle
- GET /api/categories?populate=image
- GET /api/brands

### Фильтрация (примеры запросов)
```
GET /api/products?filters[splinesCount][$eq]=8&filters[torque][$gte]=200&filters[torque][$lte]=500&populate=images,category
```
