import { useEffect, useState } from "react";
import { api } from "../services/api";

import ProductCard from "../components/product/ProductCard";
import CategoryFilter from "../components/shop/CategoryFilter";

function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get(
        `/products?populate[product_medias][populate]=ProductMedia&populate[product_reviews]=true&populate[category]=true`,
      ),
      api.get(`/categories`),
    ])
      .then(([productsRes, categoriesRes]) => {
        setProducts(productsRes.data.data || []);
        setCategories(categoriesRes.data.data || []);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="h-[60vh] flex items-center justify-center text-white/60">
        Loading products…
      </div>
    );
  }

  /* ================= FILTER PRODUCTS ================= */
  const filteredProducts = activeCategory
    ? products.filter((p) => p.category && p.category.id === activeCategory)
    : products;

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Shop</h1>
      <p className="text-white/60 mb-8">
        Explore premium poker merchandise crafted for players who go ALL IN.
      </p>

      {/* CATEGORY FILTER */}
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      {filteredProducts.length === 0 ? (
        <p className="text-white/50">No products found.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Shop;
