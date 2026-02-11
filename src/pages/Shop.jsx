// src/pages/Shop.jsx
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Link } from "react-router-dom";

import ProductCard from "../components/product/ProductCard";
import CategoryTabs from "../components/category/CategoryTabs";
import Breadcrumbs from "../components/common/Breadcrumbs";
import ProductRating from "../components/product/ProductRating";

function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

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

  let visibleProducts = activeCategory
    ? products.filter((p) => p.category && p.category.id === activeCategory)
    : [...products];

  if (search.trim()) {
    visibleProducts = visibleProducts.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  visibleProducts.sort((a, b) => {
    if (sort === "latest") return b.id - a.id;
    if (sort === "price_low") return (a.price || 0) - (b.price || 0);
    if (sort === "price_high") return (b.price || 0) - (a.price || 0);
    if (sort === "rating") {
      const avg = (p) => {
        const r = p.product_reviews?.filter((x) => x.approved) || [];
        if (!r.length) return 0;
        return r.reduce((s, x) => s + x.rating, 0) / r.length;
      };
      return avg(b) - avg(a);
    }
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Shop", to: "/shop" },
        ]}
      />

      {/* CONTROLS */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-10">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 bg-black border border-white/20 rounded-full px-5 py-3 focus:outline-none focus:border-green-400"
        />

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

      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      {visibleProducts.length === 0 ? (
        <p className="text-white/50 mt-10">No products found.</p>
      ) : (
        <>
          {/* ================= MOBILE ROW LAYOUT ================= */}
          <div className="mt-10 space-y-4 md:hidden">
            {visibleProducts.map((product) => {
              const primaryMedia =
                product.product_medias?.find((m) => m.isPrimary) ||
                product.product_medias?.[0];

              const imageUrl =
                primaryMedia?.ProductMedia?.formats?.small?.url ||
                primaryMedia?.ProductMedia?.url;

              return (
                <Link
                  key={product.id}
                  to={`/product/${product.slug}`}
                  className="flex gap-4 bg-[#111] rounded-2xl
                             border border-white/10 p-3
                             hover:border-green-400/60 transition"
                >
                  {/* IMAGE */}
                  <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-black">
                    <img
                      src={imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* INFO */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-semibold line-clamp-2">
                        {product.name}
                      </h3>

                      {/* ⭐ Rating – same as desktop */}
                      <div className="mt-1 scale-[0.9] origin-left">
                        <ProductRating reviews={product.product_reviews} />
                      </div>
                    </div>

                    <div>
                      <p className="text-green-400 font-bold">
                        ₹{product.price}
                      </p>
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
          <div className="hidden md:grid mt-10 gap-2 md:grid-cols-3 lg:grid-cols-4">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Shop;
