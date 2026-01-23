function CategoryTabs({ categories, activeCategory, onChange }) {
  return (
    <div className="flex gap-3 overflow-x-auto py-4 border-b border-white/10">
      <button
        onClick={() => onChange(null)}
        className={`px-5 py-2 rounded-full whitespace-nowrap ${
          activeCategory === null
            ? "bg-green-400 text-black"
            : "bg-[#111] text-white/70 hover:text-white"
        } font-semibold transition`}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`px-5 py-2 rounded-full whitespace-nowrap ${
            activeCategory === cat.id
              ? "bg-green-400 text-black"
              : "bg-[#111] text-white/70 hover:text-white"
          } font-semibold transition`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;
