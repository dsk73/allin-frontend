//src/pages/Category.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";

import ProductCard from "../components/product/ProductCard";

function Category() {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(
        `/categories?filters[slug][$eq]=${slug}&populate[products][populate][product_medias][populate]=ProductMedia&populate[products][populate][product_reviews]=true`,
      )
      .then((res) => {
        const cat = res.data.data[0];
        setCategory(cat);
        setProducts(cat?.products || []);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="h-[60vh] flex items-center justify-center text-white/60">
        Loading category…
      </div>
    );
  }

  if (!category) {
    return (
      <div className="h-[60vh] flex items-center justify-center text-white/60">
        Category not found.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">{category.name}</h1>

      {products.length === 0 ? (
        <p className="text-white/50 mt-10">
          No products available in this category.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Category;
