// src/components/common/Navbar.jsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "/logo.png";
import useCartStore from "../../store/cartStore";

function Navbar() {
  const openCart = useCartStore((s) => s.openCart);
  const totalItems = useCartStore((s) => s.totalItems());
  const [open, setOpen] = useState(false);

  // lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="ALLiN" className="h-10 w-auto" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-white/70">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/shop" className="hover:text-white">
            Shop
          </Link>
          <Link to="/contact" className="hover:text-white">
            Contact
          </Link>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* CART */}
          <button
            onClick={openCart}
            className="relative px-4 py-2 rounded-full border border-white/20 hover:border-green-400 transition"
          >
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-400 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white/80 text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
            <img src={logo} alt="ALLiN" className="h-10" />
            <button
              onClick={() => setOpen(false)}
              className="text-white text-2xl"
            >
              ✕
            </button>
          </div>

          <nav className="flex-1 flex flex-col items-center justify-center gap-8 text-xl font-semibold">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/shop" onClick={() => setOpen(false)}>
              Shop
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
