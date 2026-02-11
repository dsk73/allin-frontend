// src/components/product/RelatedProducts.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { resolveImageUrl } from "../../utils/media";
import ProductCard from "./ProductCard";

function RelatedProducts({ categoryId, currentProductId }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!categoryId) return;

    api
      .get(
        `/products?` +
          `filters[category][id][$eq]=${categoryId}` +
          `&filters[id][$ne]=${currentProductId}` +
          `&populate[product_medias][populate]=ProductMedia` +
          `&populate[product_reviews]=true`,
      )
      .then((res) => {
        setProducts(res.data.data || []);
      })
      .catch((err) => {
        console.error("Related products error:", err);
      });
  }, [categoryId, currentProductId]);

  if (!products.length) return null;

  return (
    <section className="mt-24 md:mt-28">
      <h2 className="text-2xl font-bold mb-6 md:mb-8">Related Products</h2>

      {/* ================= MOBILE LIST ================= */}
      <div className="space-y-4 md:hidden">
        {products.map((product) => {
          const primaryMedia =
            product.product_medias?.find((m) => m.isPrimary) ||
            product.product_medias?.[0];

          const imageUrl = resolveImageUrl(
            primaryMedia?.ProductMedia?.formats?.small?.url ||
              primaryMedia?.ProductMedia?.url,
          );

          return (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="
                flex gap-4
                bg-[#111]
                border border-white/10
                rounded-2xl
                p-3
                hover:border-green-400/60
                transition
              "
            >
              {/* IMAGE */}
              <div className="w-24 h-24 rounded-xl overflow-hidden bg-black flex-shrink-0">
                <img
                  src={imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* INFO */}
              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div>
                  <h3 className="text-sm font-semibold line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="text-xs text-white/60 mt-1">
                    ⭐ {product.product_reviews?.length || 0} reviews
                  </p>
                </div>

                <div>
                  <p className="text-green-400 font-bold">₹{product.price}</p>

                  <p className="text-xs text-white/50">
                    {product.launchStatus === "coming_soon"
                      ? "Coming Soon"
                      : "In Stock"}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* ================= DESKTOP GRID ================= */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
