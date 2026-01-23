import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";

import ProductGallery from "../components/product/ProductGallery";
import Reviews from "../components/product/Reviews";
import ReviewForm from "../components/product/ReviewForm";
import RelatedProducts from "../components/product/RelatedProducts";
import useCartStore from "../store/cartStore";

function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);

  /* ================= FETCH PRODUCT ================= */
  useEffect(() => {
    api
      .get(
        `/products?filters[slug][$eq]=${slug}` +
          `&populate[category]=true` +
          `&populate[product_reviews]=true` +
          `&populate[product_medias][populate]=ProductMedia`,
      )
      .then((res) => {
        setProduct(res.data.data[0]);
      })
      .catch((err) => {
        console.error("Product fetch error:", err);
      });
  }, [slug]);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center text-white/60">
        Loading product…
      </div>
    );
  }

  /* ================= CART IMAGE ================= */
  const primaryMedia =
    product.product_medias?.find((m) => m.isPrimary) ||
    product.product_medias?.[0];

  const imagePath =
    primaryMedia?.ProductMedia?.formats?.medium?.url ||
    primaryMedia?.ProductMedia?.url ||
    null;

  const imageUrl = imagePath ? `http://localhost:1337${imagePath}` : null;

  /* ================= REVIEWS ================= */
  const approvedReviews =
    product.product_reviews?.filter((r) => r.approved) || [];

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

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* ================= PRODUCT TOP ================= */}
      <div className="grid md:grid-cols-2 gap-16">
        <ProductGallery medias={product.product_medias || []} />

        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>

          <p className="text-green-400 text-2xl font-bold mt-4">
            ₹{product.price}
          </p>

          <p className="text-white/70 mt-6 leading-relaxed">
            {product.description}
          </p>

          {product.category && (
            <div className="mt-4 text-sm text-white/50">
              Category:{" "}
              <span className="text-white">{product.category.name}</span>
            </div>
          )}

          <button
            onClick={handleAddToCart}
            className="mt-10 px-10 py-4 bg-green-400 text-black 
                       rounded-full font-semibold text-lg 
                       hover:bg-green-300 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* ================= REVIEWS ================= */}
      <Reviews reviews={approvedReviews} />

      {/* ================= REVIEW FORM ================= */}
      <ReviewForm productId={product.id} />

      {/* ================= RELATED PRODUCTS ================= */}
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
