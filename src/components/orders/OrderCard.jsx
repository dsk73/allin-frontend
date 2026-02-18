// src/components/orders/OrderCard.jsx
import { useNavigate } from "react-router-dom";
import OrderStatusBadge from "./OrderStatusBadge";
import useCartStore from "../../store/cartStore";
import { resolveImageUrl } from "../../utils/media";

function OrderCard({ item }) {
  const navigate = useNavigate();
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);

  const medias = item.product.product_medias || [];
  const primary = medias.find((m) => m.isPrimary) || medias[0];

  const imageUrl = resolveImageUrl(
    primary?.ProductMedia?.formats?.medium?.url || primary?.ProductMedia?.url,
  );

  const handleReorder = () => {
    addItem({
      id: item.product.id,
      name: item.product.name,
      price: item.price,
      image: imageUrl,
    });
    openCart();
  };

  const orderedDate =
    item.createdAt && !Number.isNaN(new Date(item.createdAt).getTime())
      ? new Date(item.createdAt).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : null;

  return (
    <div
      className="
        bg-[#111]
        border border-white/10
        rounded-2xl

        /* HEIGHT & SPACING */
        p-4 md:p-6
        min-h-[120px] md:min-h-[160px]

        flex gap-4 md:gap-6
        items-center
      "
    >
      {/* IMAGE */}
      <div
        onClick={() => navigate(`/product/${item.product.slug}`)}
        className="
          w-20 h-20
          md:w-28 md:h-28
          bg-black/40
          rounded-xl
          overflow-hidden
          cursor-pointer
          flex-shrink-0
        "
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt={item.product.name}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* DETAILS */}
      <div className="flex-1">
        {/* Order ID */}
        <p className="text-xs md:text-sm text-white/60 font-medium">
          ID: <span className="text-white/70">{item.orderId}</span>
        </p>

        {/* Product */}
        <h4
          onClick={() => navigate(`/product/${item.product.slug}`)}
          className="
            mt-1
            text-sm md:text-lg
            font-semibold
            cursor-pointer
            hover:underline
          "
        >
          {item.product.name}
        </h4>

        {/* Date */}
        {orderedDate && (
          <p className="text-xs md:text-sm text-white/50 mt-1">{orderedDate}</p>
        )}
      </div>

      {/* RIGHT */}
      <div className="text-right flex flex-col items-end gap-2">
        <OrderStatusBadge status={item.status} />

        <p className="text-base md:text-lg font-semibold">₹{item.price}</p>

        <button
          onClick={handleReorder}
          className="
            text-xs md:text-sm
            font-semibold
            text-black
            bg-green-400
            rounded-full
            px-3 py-1
            md:px-4 md:py-1.5
            hover:bg-green-300
            transition
          "
        >
          Order Again
        </button>
      </div>
    </div>
  );
}

export default OrderCard;
