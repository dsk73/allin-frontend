import { useEffect, useState } from "react";
import { fetchProducts } from "../services/products";
import { fetchCategories } from "../services/categories";

import Hero from "../components/hero/Hero";
import CategoryTabs from "../components/category/CategoryTabs";
import ProductCard from "../components/product/ProductCard";
import FeaturedProducts from "../components/home/FeaturedProducts";
import CategoryBlocks from "../components/home/CategoryBlocks";

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

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-white/70">
        Loading ALLiN…
      </div>
    );
  }

  return (
    <>
      {/* ================= HERO ================= */}
      <Hero />

      <main className="max-w-7xl mx-auto px-6">
        {/* ================= FEATURED ================= */}
        <section className="mt-24">
          <FeaturedProducts products={products} />
        </section>

        {/* ================= CATEGORY BLOCKS ================= */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold mb-3">Shop by Category</h2>
          <p className="text-white/60 mb-10 max-w-xl">
            Premium poker merchandise designed for players who know when to go
            ALLiN.
          </p>

          <CategoryBlocks
            categories={categories}
            onSelect={setActiveCategory}
          />
        </section>

        {/* ================= ALL PRODUCTS ================= */}
        <section className="mt-36 pb-32">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">Explore the Collection</h2>
            <p className="text-white/60">Built for players who never fold.</p>
          </div>

          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
