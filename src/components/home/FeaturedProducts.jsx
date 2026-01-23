import ProductCard from "../product/ProductCard";

function FeaturedProducts({ products }) {
  const featured = products.filter((p) => p.isFeatured);

  if (featured.length === 0) return null;

  return (
    <section className="mt-24">
      <div className="mb-10">
        <h2 className="text-3xl font-bold">Featured Drops</h2>
        <p className="text-white/60 mt-2">
          Curated merchandise for serious players.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
