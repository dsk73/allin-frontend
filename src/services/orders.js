// src/services/orders.js
import api from "./api";

/**
 * FINAL LOGIC (PRODUCTION SAFE):
 * - Fetch all orders (already user-scoped by backend auth)
 * - Flatten order_items
 * - Deduplicate by: orderId + product.name
 * - Sort by createdAt DESC
 */
export async function getMyOrders() {
  const res = await api.get(
    "/orders?populate[order_items][populate][product][populate][product_medias][populate]=ProductMedia&sort=createdAt:desc",
  );

  const orders = res.data?.data || [];

  const seen = new Set();
  const items = [];

  for (const order of orders) {
    const orderItems = order.order_items || [];

    for (const item of orderItems) {
      if (!item.product) continue;

      // 🔑 TRUE business-unique key
      const key = `${order.orderId}_${item.product.name}`;

      if (seen.has(key)) continue;
      seen.add(key);

      items.push({
        id: key, // stable React key
        orderId: order.orderId,
        status: order.orderstatus,
        price: item.price,
        quantity: item.quantity,
        createdAt: order.createdAt,
        product: item.product,
      });
    }
  }

  // Latest first
  items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return items;
}
