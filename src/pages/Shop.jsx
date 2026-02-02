// src/pages/Shop.jsx
import { useEffect, useState } from "react";
import { api } from "../services/api";

import ProductCard from "../components/product/ProductCard";
import CategoryFilter from "../components/shop/CategoryFilter";

function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  // 🔍 Search + Sort state
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");

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

  /* ================= FILTER BY CATEGORY ================= */
  let visibleProducts = activeCategory
    ? products.filter((p) => p.category && p.category.id === activeCategory)
    : [...products];

  /* ================= SEARCH ================= */
  if (search.trim()) {
    visibleProducts = visibleProducts.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  /* ================= SORT ================= */
  visibleProducts.sort((a, b) => {
    if (sort === "latest") {
      return b.id - a.id;
    }

    if (sort === "price_low") {
      return (a.price || 0) - (b.price || 0);
    }

    if (sort === "price_high") {
      return (b.price || 0) - (a.price || 0);
    }

    if (sort === "rating") {
      const avgRating = (p) => {
        const approved = p.product_reviews?.filter((r) => r.approved) || [];
        if (!approved.length) return 0;
        return approved.reduce((sum, r) => sum + r.rating, 0) / approved.length;
      };
      return avgRating(b) - avgRating(a);
    }

    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <h1 className="text-4xl font-bold mb-4">Shop</h1>
      <p className="text-white/60 mb-8">
        Explore premium poker merchandise crafted for players who go ALL IN.
      </p>

      {/* ================= CONTROLS ================= */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-10">
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 bg-black border border-white/20 rounded-full px-5 py-3 focus:outline-none focus:border-green-400"
        />

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full md:w-56 bg-black border border-white/20 rounded-full px-5 py-3 focus:outline-none focus:border-green-400"
        >
          <option value="latest">Sort: Latest</option>
          <option value="price_low">Price: Low → High</option>
          <option value="price_high">Price: High → Low</option>
          <option value="rating">Rating: High → Low</option>
        </select>
      </div>

      {/* CATEGORY FILTER */}
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      {/* PRODUCTS GRID */}
      {visibleProducts.length === 0 ? (
        <p className="text-white/50 mt-10">No products found.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Shop;
