import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import { resolveImageUrl } from "../utils/media";

import ProductGallery from "../components/product/ProductGallery";
import ProductBadge from "../components/product/ProductBadge";
import ProductRating from "../components/product/ProductRating";
import Reviews from "../components/product/Reviews";
import ReviewForm from "../components/product/ReviewForm";
import RelatedProducts from "../components/product/RelatedProducts";
import useCartStore from "../store/cartStore";

function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);

  useEffect(() => {
    api
      .get(
        `/products?filters[slug][$eq]=${slug}` +
          `&populate[category]=true` +
          `&populate[product_reviews]=true` +
          `&populate[product_medias][populate]=ProductMedia`
      )
      .then((res) => {
        setProduct(res.data.data[0]);
      });
  }, [slug]);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading…
      </div>
    );
  }

  /* ================= IMAGE ================= */
  const primaryMedia =
    product.product_medias?.find((m) => m.isPrimary) ||
    product.product_medias?.[0];

  const imageUrl = resolveImageUrl(
    primaryMedia?.ProductMedia?.formats?.medium?.url ||
      primaryMedia?.ProductMedia?.url
  );

  /* ================= BADGE ================= */
  let badgeType = "NEW";
  if (product.launchStatus === "coming_soon") badgeType = "COMING_SOON";
  else if (product.isFeatured) badgeType = "FEATURED";

  /* ================= REVIEWS (NEWEST FIRST) ================= */
  const approvedReviews = (
    product.product_reviews?.filter((r) => r.approved) || []
  ).sort((a, b) => b.id - a.id);

  const visibleReviews = showAllReviews
    ? approvedReviews
    : approvedReviews.slice(0, 3);

  /* ================= CART ================= */
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: imageUrl,
    });
    openCart();
  };

  /* ================= SCROLL ================= */
  const scrollToReviews = () => {
    const el = document.getElementById("reviews");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* ================= TOP ================= */}
      <div className="grid md:grid-cols-2 gap-16">
        <div className="relative">
          <ProductBadge type={badgeType} />
          <ProductGallery medias={product.product_medias || []} />
        </div>

        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>

          <div className="mt-2">
            <ProductRating
              reviews={approvedReviews}
              size="lg"
              onClick={scrollToReviews}
            />
          </div>

          <p className="text-green-400 text-2xl font-bold mt-4">
            ₹{product.price}
          </p>

          <p className="text-white/70 mt-6">{product.description}</p>

          {product.category && (
            <div className="mt-4 text-sm text-white/50">
              Category:{" "}
              <span className="text-white">{product.category.name}</span>
            </div>
          )}

          <button
            onClick={handleAddToCart}
            className="mt-10 px-10 py-4 bg-green-400 text-black rounded-full font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* ================= REVIEWS ================= */}
      <div id="reviews" className="mt-24">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold">
            Reviews ({approvedReviews.length})
          </h3>

          <button
            onClick={() => setShowReviewForm((p) => !p)}
            className="px-4 py-2 rounded-full text-sm font-semibold
                       border border-green-400 text-green-400
                       hover:bg-green-400 hover:text-black transition"
          >
            {showReviewForm ? "Close review form" : "Post a review"}
          </button>
        </div>

        {showReviewForm && (
          <div className="mb-16">
            <ReviewForm
              productId={product.documentId}   
              onSubmitted={() => setShowReviewForm(false)}
            />
          </div>
        )}

        <Reviews reviews={visibleReviews} />

        {approvedReviews.length > 3 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAllReviews((p) => !p)}
              className="text-green-400 font-semibold hover:underline"
            >
              {showAllReviews ? "Show less reviews" : "View all reviews"}
            </button>
          </div>
        )}
      </div>

      {/* ================= RELATED ================= */}
      {product.category && (
        <RelatedProducts
          categoryId={product.category.id}
          currentProductId={product.id}
        />
      )}
    </div>
  );
}

export default ProductDetail;
