// src/components/home/FeaturedProducts.jsx
import ProductCard from "../product/ProductCard";

function FeaturedProducts({ products }) {
  const featured = products.filter((p) => p.isFeatured);

  if (featured.length === 0) return null;

  return (
    <section className="mt-8">
      {/* ================= HEADER ================= */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Featured Drops</h2>
        <p className="text-white/60 mt-2">
          Curated merchandise for serious players.
        </p>
      </div>

      {/* ================= HORIZONTAL SCROLL ================= */}
      <div
        className="
    flex gap-2
    overflow-x-auto
    pb-4
    -mx-6 px-6
    snap-x snap-mandatory
    scrollbar-hide
  "
      >
        {featured.map((product) => (
          <div
            key={product.id}
            className="min-w-[60%] md:min-w-[25%] snap-start"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
