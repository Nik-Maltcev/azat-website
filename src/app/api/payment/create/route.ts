import { NextRequest, NextResponse } from "next/server";
import { createOrder } from "@/lib/strapi";

/**
 * POST /api/payment/create
 * 
 * Создаёт заказ в Strapi и инициирует платёж через ЮKassa.
 * 
 * Body: {
 *   customerName: string,
 *   customerPhone: string,
 *   customerEmail: string,
 *   deliveryAddress: string,
 *   items: [{ productId, quantity, price }],
 *   totalAmount: number
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { customerName, customerPhone, customerEmail, deliveryAddress, items, totalAmount } = body;

    // Валидация
    if (!customerName || !customerPhone || !items?.length || !totalAmount) {
      return NextResponse.json(
        { error: "Заполните все обязательные поля" },
        { status: 400 }
      );
    }

    // 1. Создаём заказ в Strapi
    const order = await createOrder({
      customerName,
      customerPhone,
      customerEmail,
      deliveryAddress,
      items,
      totalAmount,
    });

    const orderId = order.data.id;

    // 2. Создаём платёж в ЮKassa
    const payment = await createYookassaPayment({
      amount: totalAmount,
      orderId,
      description: `Заказ #${orderId} — ARD-AGRO`,
      customerEmail,
    });

    return NextResponse.json({
      orderId,
      paymentUrl: payment.confirmation.confirmation_url,
    });
  } catch (error) {
    console.error("Payment creation error:", error);
    return NextResponse.json(
      { error: "Ошибка при создании платежа" },
      { status: 500 }
    );
  }
}

/**
 * Создание платежа через ЮKassa API
 * Документация: https://yookassa.ru/developers/api#create_payment
 */
async function createYookassaPayment({
  amount,
  orderId,
  description,
  customerEmail,
}: {
  amount: number;
  orderId: number;
  description: string;
  customerEmail: string;
}) {
  const shopId = process.env.YOOKASSA_SHOP_ID;
  const secretKey = process.env.YOOKASSA_SECRET_KEY;
  const returnUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  if (!shopId || !secretKey) {
    throw new Error("ЮKassa credentials not configured");
  }

  const idempotenceKey = `order-${orderId}-${Date.now()}`;

  const res = await fetch("https://api.yookassa.ru/v3/payments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Idempotence-Key": idempotenceKey,
      Authorization: `Basic ${Buffer.from(`${shopId}:${secretKey}`).toString("base64")}`,
    },
    body: JSON.stringify({
      amount: {
        value: amount.toFixed(2),
        currency: "RUB",
      },
      confirmation: {
        type: "redirect",
        return_url: `${returnUrl}/order/success?orderId=${orderId}`,
      },
      capture: true,
      description,
      metadata: {
        order_id: orderId,
      },
      receipt: {
        customer: {
          email: customerEmail,
        },
        items: [
          {
            description: description.slice(0, 128),
            quantity: "1",
            amount: {
              value: amount.toFixed(2),
              currency: "RUB",
            },
            vat_code: 1, // Без НДС. Поменяй на 2-6 если есть НДС
            payment_subject: "commodity",
            payment_mode: "full_payment",
          },
        ],
      },
    }),
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`YooKassa API error: ${res.status} ${errorBody}`);
  }

  return res.json();
}
