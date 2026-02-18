import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

import OrderCard from "../../components/orders/OrderCard";
import { getMyOrders } from "../../services/orders";

function Orders() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function fetchOrders() {
      try {
        setLoading(true);
        setError("");

        const data = await getMyOrders();
        if (mounted) setItems(data);
      } catch {
        if (mounted) {
          setError("Failed to load orders. Please try again.");
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchOrders();
    return () => {
      mounted = false;
    };
  }, []);

  // ✅ DEV-ONLY debug (safe to remove later)
  console.table(
    items.map((i) => ({
      reactKey: i.id,
      orderId: i.orderId,
      productId: i.product.id,
      productName: i.product.name,
      createdAt: i.createdAt,
    })),
  );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">My Orders</h1>
      <p className="text-white/60 mb-8 md:mb-10">
        Track, return, or reorder your purchases
      </p>

      {/* LOADING */}
      {loading && (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-28 md:h-32 rounded-2xl bg-[#111] border border-white/10 animate-pulse"
            />
          ))}
        </div>
      )}

      {/* ERROR */}
      {!loading && error && (
        <div className="bg-red-400/10 border border-red-400/30 rounded-2xl p-6 text-red-400">
          {error}
        </div>
      )}

      {/* EMPTY */}
      {!loading && !error && items.length === 0 && (
        <div className="bg-[#111] border border-white/10 rounded-2xl p-10 text-center">
          <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-green-400/10 flex items-center justify-center text-green-400">
            <ShoppingBag size={26} />
          </div>

          <h3 className="text-lg font-semibold mb-1">No orders yet</h3>
          <p className="text-white/60 text-sm">
            Looks like you haven’t placed any orders.
          </p>
        </div>
      )}

      {/* ORDER ITEMS */}
      {!loading && !error && items.length > 0 && (
        <div className="space-y-4 md:space-y-6">
          {items.map((item) => (
            <OrderCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
