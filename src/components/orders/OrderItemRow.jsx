//src/components/orders/OrderItemRow.jsx
import { useNavigate } from "react-router-dom";
import { resolveImageUrl } from "../../utils/media";

function OrderItemRow({ item }) {
  const navigate = useNavigate();
  const data = item.product || item.productSnapshot;
  if (!data) return null;

  const image = data.thumbnail || data.image || data.images?.[0];

  const slug = data.slug;
  const subtotal = item.price * item.quantity;

  return (
    <div className="flex gap-4 py-4">
      {/* IMAGE */}
      <div
        className="w-16 h-16 rounded-lg bg-black/40 overflow-hidden cursor-pointer"
        onClick={() => slug && navigate(`/product/${slug}`)}
      >
        {image && (
          <img
            src={resolveImageUrl(image)}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* DETAILS */}
      <div className="flex-1">
        <h4
          onClick={() => slug && navigate(`/product/${slug}`)}
          className="font-medium text-sm cursor-pointer hover:underline"
        >
          {data.name}
        </h4>

        <p className="text-xs text-white/60 mt-1">
          Qty {item.quantity} × ₹{item.price}
        </p>
      </div>

      {/* PRICE */}
      <div className="text-sm font-semibold">₹{subtotal}</div>
    </div>
  );
}

export default OrderItemRow;
