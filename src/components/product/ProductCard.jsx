// src/components/product/ProductCard.jsx
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

  if (launchStatus === "coming_soon") {
    badgeType = "COMING_SOON";
  } else if (isFeatured) {
    badgeType = "FEATURED";
  }

  return (
    <Link
      to={`/product/${slug}`}
      className="block bg-[#111] rounded-2xl overflow-hidden 
                 border border-white/10 hover:border-green-400/60 
                 transition transform hover:-translate-y-1"
    >
      {/* IMAGE + BADGE */}
      <div className="relative aspect-square bg-black">
        <ProductBadge type={badgeType} />
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{name}</h3>

        {/* ⭐ Rating (consistent with ProductDetail) */}
        <div className="mt-1">
          <ProductRating reviews={product_reviews} />
        </div>

        {price && <p className="text-green-400 font-bold mt-1">₹{price}</p>}

        <p className="text-xs text-white/50 mt-1">
          {launchStatus === "coming_soon" ? "Coming Soon" : "In Stock"}
        </p>

        <div className="mt-4">
          <span
            className="inline-block w-full text-center py-2 rounded-lg 
                       bg-green-400 text-black font-semibold 
                       hover:bg-green-300 transition"
          >
            View Product
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
