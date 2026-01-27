import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import { resolveImageUrl } from "../utils/media";

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
      });
  }, [slug]);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center">Loading…</div>
    );
  }

  const primaryMedia =
    product.product_medias?.find((m) => m.isPrimary) ||
    product.product_medias?.[0];

  const imageUrl = resolveImageUrl(
    primaryMedia?.ProductMedia?.formats?.medium?.url ||
      primaryMedia?.ProductMedia?.url,
  );

  const approvedReviews =
    product.product_reviews?.filter((r) => r.approved) || [];

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
      <div className="grid md:grid-cols-2 gap-16">
        <ProductGallery medias={product.product_medias || []} />

        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>
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

      <Reviews reviews={approvedReviews} />
      <ReviewForm productId={product.id} />

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
