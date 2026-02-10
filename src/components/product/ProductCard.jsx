//src/components/product/ProductCard.jsx
import { Link } from "react-router-dom";
import { resolveImageUrl } from "../../utils/media";
import ProductBadge from "./ProductBadge";
import ProductRating from "./ProductRating";

function ProductCard({ product }) {
  const {
    name,
    price,
    launchStatus,
    slug,
    isFeatured,
    product_medias = [],
    product_reviews = [],
  } = product;

  /* ================= IMAGE ================= */
  const primaryMedia =
    product_medias.find((m) => m.isPrimary) || product_medias[0];

  const imagePath =
    primaryMedia?.ProductMedia?.formats?.medium?.url ||
    primaryMedia?.ProductMedia?.url;

  const imageUrl = resolveImageUrl(imagePath);

  /* ================= BADGE TYPE ================= */
  let badgeType = "NEW";
  if (launchStatus === "coming_soon") badgeType = "COMING_SOON";
  else if (isFeatured) badgeType = "FEATURED";

  return (
    <Link
      to={`/product/${slug}`}
      className="
        block h-full
        bg-[#111] rounded-2xl overflow-hidden
        border border-white/10 hover:border-green-400/60
        transition transform hover:-translate-y-1
      "
    >
      {/* ================= IMAGE (UNCHANGED) ================= */}
      <div className="relative aspect-square bg-black">
        <ProductBadge type={badgeType} />
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-4 flex flex-col flex-1">
        <h3
          className="
    text-lg font-semibold text-white
    line-clamp-2
    min-h-[3rem]
  "
        >
          {name}
        </h3>

        <div className="mt-1">
          <ProductRating reviews={product_reviews} />
        </div>

        {price && <p className="text-green-400 font-bold mt-2">₹{price}</p>}

        {/* Spacer ensures equal card height */}
        <div className="flex-1" />

        <p className="text-xs text-white/50 mt-2">
          {launchStatus === "coming_soon" ? "Coming Soon" : "In Stock"}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
