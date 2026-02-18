// src/services/orders.js
import api from "./api";

/**
 * Fetch order items for the logged-in user
 * - Fetch orders via users/me (Strapi-safe)
 * - Flatten to order items
 * - Deduplicate strictly by OrderItem ID
 * - Sort by order createdAt DESC
 */
export async function getMyOrders() {
  const res = await api.get(
    "/users/me?populate[orders][populate][order_items][populate][product][populate][product_medias][populate]=ProductMedia",
  );

  const orders = res.data?.orders || [];

  const seenItemIds = new Set();
  const items = [];

  for (const order of orders) {
    const orderCreatedAt = order.createdAt;

    for (const item of order.order_items || []) {
      // 🚫 HARD dedupe (this is what was causing 4 cards instead of 2)
      if (seenItemIds.has(item.id)) continue;
      seenItemIds.add(item.id);

      if (!item.product) continue;

      items.push({
        id: item.id, // unique OrderItem id
        orderId: order.orderId,
        status: order.orderstatus,
        price: item.price,
        quantity: item.quantity,
        createdAt: orderCreatedAt, // 👈 IMPORTANT (order date, not item)
        product: item.product,
      });
    }
  }

  // Latest orders first
  items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return items;
}
