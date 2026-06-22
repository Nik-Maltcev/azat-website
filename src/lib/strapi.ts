/**
 * Хелпер для работы со Strapi API.
 * Базовый URL берётся из переменной окружения NEXT_PUBLIC_STRAPI_URL.
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface StrapiItem<T> {
  id: number;
  attributes: T;
}

/**
 * Базовый fetch к Strapi API
 */
async function fetchStrapi<T>(
  endpoint: string,
  params?: Record<string, string>
): Promise<StrapiResponse<T>> {
  const url = new URL(`/api${endpoint}`, STRAPI_URL);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  const res = await fetch(url.toString(), {
    next: { revalidate: 60 }, // ISR: обновлять кэш каждые 60 секунд
  });

  if (!res.ok) {
    throw new Error(`Strapi error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

/**
 * Получить список товаров с фильтрами
 */
export async function getProducts(filters?: {
  profileType?: string;
  splinesCount?: number;
  minLength?: number;
  maxLength?: number;
  minTorque?: number;
  maxTorque?: number;
  categorySlug?: string;
}) {
  const params: Record<string, string> = {
    "populate": "images,category,brands",
  };

  if (filters?.profileType) {
    params["filters[profileType][$eq]"] = filters.profileType;
  }
  if (filters?.splinesCount) {
    params["filters[splinesCount][$eq]"] = String(filters.splinesCount);
  }
  if (filters?.minLength) {
    params["filters[length][$gte]"] = String(filters.minLength);
  }
  if (filters?.maxLength) {
    params["filters[length][$lte]"] = String(filters.maxLength);
  }
  if (filters?.minTorque) {
    params["filters[torque][$gte]"] = String(filters.minTorque);
  }
  if (filters?.maxTorque) {
    params["filters[torque][$lte]"] = String(filters.maxTorque);
  }
  if (filters?.categorySlug) {
    params["filters[category][slug][$eq]"] = filters.categorySlug;
  }

  return fetchStrapi("/products", params);
}

/**
 * Получить один товар по slug
 */
export async function getProductBySlug(slug: string) {
  return fetchStrapi("/products", {
    "filters[slug][$eq]": slug,
    "populate": "images,category,brands",
  });
}

/**
 * Получить все категории
 */
export async function getCategories() {
  return fetchStrapi("/categories", {
    "populate": "image",
  });
}

/**
 * Получить все бренды
 */
export async function getBrands() {
  return fetchStrapi("/brands", {
    "populate": "logo",
  });
}

/**
 * Создать заказ
 */
export async function createOrder(orderData: {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  deliveryAddress: string;
  items: Array<{ productId: number; quantity: number; price: number }>;
  totalAmount: number;
}) {
  const res = await fetch(`${STRAPI_URL}/api/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: orderData }),
  });

  if (!res.ok) {
    throw new Error(`Failed to create order: ${res.status}`);
  }

  return res.json();
}

/**
 * Обновить статус заказа (для webhook от ЮKassa)
 */
export async function updateOrderStatus(
  orderId: number,
  status: string,
  paymentId?: string
) {
  const data: Record<string, unknown> = { status };
  if (paymentId) {
    data.paymentId = paymentId;
    data.paidAt = new Date().toISOString();
  }

  const res = await fetch(`${STRAPI_URL}/api/orders/${orderId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });

  if (!res.ok) {
    throw new Error(`Failed to update order: ${res.status}`);
  }

  return res.json();
}

/**
 * Получить URL картинки из Strapi
 */
export function getStrapiImageUrl(path: string | null): string | null {
  if (!path) return null;
  if (path.startsWith("http")) return path;
  return `${STRAPI_URL}${path}`;
}
