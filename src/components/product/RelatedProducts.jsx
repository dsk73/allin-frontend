import { useEffect, useState } from "react";
import { api } from "../../services/api";
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
          `&populate[product_medias][populate]=ProductMedia`,
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
    <section className="mt-28">
      <h2 className="text-2xl font-bold mb-8">Related Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
