// src/components/product/StickyAddToCart.jsx
import { useEffect, useState } from "react";

function StickyAddToCart({ product, onAddToCart }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerEl = document.getElementById("main-add-to-cart");
      if (!triggerEl) return;

      const rect = triggerEl.getBoundingClientRect();
      // If main button is out of viewport → show sticky bar
      setVisible(rect.bottom < 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Product info */}
        <div className="min-w-0">
          <p className="text-sm font-semibold truncate">{product.name}</p>
          <p className="text-green-400 font-bold text-sm">₹{product.price}</p>
        </div>

        {/* CTA */}
        <button
          onClick={onAddToCart}
          className="
            px-8 py-3
            bg-green-400 text-black
            rounded-full
            font-bold text-sm
            shadow-lg shadow-green-400/30
            transition-all duration-300
            hover:bg-green-300 hover:-translate-y-0.5
            active:translate-y-0 active:shadow-md
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-green-400
            focus-visible:ring-offset-2 focus-visible:ring-offset-black
            whitespace-nowrap
          "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default StickyAddToCart;
