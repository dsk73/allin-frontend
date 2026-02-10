// src/components/category/CategoryTabs.jsx
import { useState } from "react";

function CategoryTabs({ categories, activeCategory, onChange }) {
  const [open, setOpen] = useState(false);

  const activeCat = categories.find((c) => c.id === activeCategory);

  const handleSelect = (id) => {
    onChange(id);
    setOpen(false);
  };

  return (
    <div className="mt-6">
      {/* ================= TOP BAR ================= */}
      <div className="flex flex-wrap items-center gap-3">
        {/* ALL PRODUCTS */}
        <button
          onClick={() => {
            onChange(null);
            setOpen(false);
          }}
          className={`
            px-6 py-3 rounded-full border
            transition font-semibold
            ${
              activeCategory === null
                ? "bg-green-400 text-black border-green-400"
                : "border-white/20 text-white/70 hover:text-white"
            }
          `}
        >
          All products
        </button>

        {/* ACTIVE CATEGORY (only when selected) */}
        {activeCat && (
          <button
            onClick={() => {
              onChange(null);
              setOpen(false);
            }}
            className="
              px-6 py-3 rounded-full
              bg-green-400 text-black
              font-semibold
              flex items-center gap-2
            "
          >
            {activeCat.name}
            <span className="text-black/70">✕</span>
          </button>
        )}

        {/* TOGGLE */}
        <button
          onClick={() => setOpen((p) => !p)}
          className={`
            px-6 py-3 rounded-full border
            transition font-semibold
            ${
              open
                ? "bg-white/5 border-white/30 text-white"
                : "border-white/20 text-white/70 hover:text-white"
            }
          `}
        >
          {open ? "View all products" : "Explore by category"}
        </button>
      </div>

      {/* ================= DROPDOWN ================= */}
      {open && (
        <div
          className="
            mt-4 p-6
            bg-[#0b0b0b]
            border border-white/10
            rounded-2xl
          "
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelect(cat.id)}
                  className={`
                    text-left px-4 py-3 rounded-xl
                    border transition
                    ${
                      isActive
                        ? "bg-white/5 border-green-400 text-green-400 font-semibold"
                        : "border-white/10 text-white/70 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryTabs;
