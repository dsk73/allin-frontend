function CategoryFilter({ categories, activeCategory, onChange }) {
  return (
    <div className="flex gap-3 flex-wrap mb-10">
      {/* ALL */}
      <button
        onClick={() => onChange(null)}
        className={`px-5 py-2 rounded-full text-sm font-semibold border transition
          ${
            activeCategory === null
              ? "bg-green-400 text-black border-green-400"
              : "border-white/20 text-white/70 hover:border-green-400"
          }`}
      >
        All
      </button>

      {/* CATEGORY BUTTONS */}
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`px-5 py-2 rounded-full text-sm font-semibold border transition
            ${
              activeCategory === cat.id
                ? "bg-green-400 text-black border-green-400"
                : "border-white/20 text-white/70 hover:border-green-400"
            }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
