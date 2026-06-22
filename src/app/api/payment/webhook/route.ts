import { NextRequest, NextResponse } from "next/server";
import { updateOrderStatus } from "@/lib/strapi";

/**
 * POST /api/payment/webhook
 * 
 * Webhook от ЮKassa — вызывается при изменении статуса платежа.
 * Настроить в личном кабинете ЮKassa:
 * URL: https://your-domain.ru/api/payment/webhook
 * События: payment.succeeded, payment.canceled
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { event, object: payment } = body;

    // Проверяем что это реальный webhook (в проде добавить проверку IP ЮKassa)
    if (!event || !payment) {
      return NextResponse.json({ error: "Invalid webhook payload" }, { status: 400 });
    }

    const orderId = payment.metadata?.order_id;

    if (!orderId) {
      console.error("Webhook: no order_id in metadata", payment.id);
      return NextResponse.json({ error: "No order_id" }, { status: 400 });
    }

    switch (event) {
      case "payment.succeeded":
        // Платёж прошёл — обновляем статус заказа
        await updateOrderStatus(orderId, "paid", payment.id);
        console.log(`Order ${orderId} paid. Payment: ${payment.id}`);
        break;

      case "payment.canceled":
        // Платёж отменён
        await updateOrderStatus(orderId, "cancelled");
        console.log(`Order ${orderId} cancelled. Payment: ${payment.id}`);
        break;

      default:
        console.log(`Unhandled webhook event: ${event}`);
    }

    // ЮKassa ожидает 200 OK
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook processing error:", error);
    // Возвращаем 200 чтобы ЮKassa не повторяла запрос бесконечно
    return NextResponse.json({ success: false });
  }
}
