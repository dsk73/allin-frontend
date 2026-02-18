function OrderStatusBadge({ status }) {
  const map = {
    pending: "bg-yellow-400/15 text-yellow-400",
    shipped: "bg-purple-400/15 text-purple-400",
    delivered: "bg-green-400/15 text-green-400",
    cancelled: "bg-red-400/15 text-red-400",
  };

  return (
    <span
      className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
        map[status] || "bg-white/10 text-white/60"
      }`}
    >
      {status}
    </span>
  );
}

export default OrderStatusBadge;
