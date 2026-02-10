// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { fetchProducts } from "../services/products";
import { fetchCategories } from "../services/categories";
import { Link } from "react-router-dom";

import Hero from "../components/hero/Hero";
import CategoryTabs from "../components/category/CategoryTabs";
import ProductCard from "../components/product/ProductCard";
import FeaturedProducts from "../components/home/FeaturedProducts";
import ProductRating from "../components/product/ProductRating";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchProducts(), fetchCategories()])
      .then(([productsData, categoriesData]) => {
        setProducts(productsData);
        setCategories(categoriesData);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = activeCategory
    ? products.filter((p) => p.category && p.category.id === activeCategory)
    : products;

  const homeProducts = filteredProducts.slice(0, 10);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-white/70">
        Loading ALLiN…
      </div>
    );
  }

  return (
    <>
      <Hero />

      <main className="max-w-7xl mx-auto px-6">
        {/* ================= FEATURED ================= */}
        <section className="mt-4">
          <FeaturedProducts products={products} />
        </section>

        {/* ================= DIVIDER ================= */}
        <div className="mt-12 border-t border-white/4 pt-12" />

        {/* ================= EXPLORE COLLECTION ================= */}
        <section className="pb-32">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Explore the Collection</h2>
            <p className="text-white/60">Built for players who never fold.</p>
          </div>

          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

          {/* ================= MOBILE ROW LAYOUT ================= */}
          <div className="mt-14 space-y-4 md:hidden">
            {homeProducts.map((product) => {
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

                      {/* ⭐ Rating – same logic as desktop */}
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
          <div className="hidden md:grid mt-8 grid-cols-3 lg:grid-cols-5 gap-10">
            {homeProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* ================= VIEW MORE ================= */}
          <div className="mt-16 text-center">
            <Link
              to="/shop"
              className="inline-block px-10 py-4 rounded-full
                         border border-white/20 text-white/80
                         font-semibold hover:bg-white/5 transition"
            >
              View more products →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
