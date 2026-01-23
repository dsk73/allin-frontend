function CategoryBlocks({ categories, onSelect }) {
  return (
    <section className="mt-24">
      <div className="mb-10">
        <h2 className="text-3xl font-bold">Shop by Category</h2>
        <p className="text-white/60 mt-2">Find what fits your game.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className="cursor-pointer bg-[#111] rounded-2xl p-6 border border-white/10 
                       hover:border-green-400/60 hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-semibold">{cat.name}</h3>
            <p className="text-sm text-white/60 mt-2">Explore {cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryBlocks;
