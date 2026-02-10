import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Home, ShoppingBag, Mail, ChevronRight, X } from "lucide-react";
import logo from "/logo.png";
import useCartStore from "../../store/cartStore";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const openCart = useCartStore((s) => s.openCart);
  const totalItems = useCartStore((s) => s.totalItems());

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ================= TOP NAVBAR ================= */}
      <header
        className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10"
        style={{ "--nav-h": "64px" }} // ✅ SINGLE SOURCE OF TRUTH
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="ALLiN" className="h-10 w-auto" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-white/70">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white font-semibold" : "hover:text-white"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "text-white font-semibold" : "hover:text-white"
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-white font-semibold" : "hover:text-white"
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* ACTIONS */}
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

            {/* MOBILE MENU */}
            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="md:hidden p-2 rounded-full border border-white/20 hover:border-white/40 transition"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={20} /> : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black">
          <div className="absolute top-16 left-0 right-0 bg-[#0b0b0b] pb-6 animate-slideDown border-t border-white/10">
            <p className="px-6 pt-5 pb-2 text-xs font-semibold tracking-widest text-white/40">
              NAVIGATION
            </p>

            <div className="mx-4 bg-[#111] rounded-2xl overflow-hidden border border-white/10">
              <MobileLink
                to="/"
                icon={<Home size={18} />}
                label="Home"
                active={location.pathname === "/"}
                onClick={closeMenu}
              />
              <Divider />
              <MobileLink
                to="/shop"
                icon={<ShoppingBag size={18} />}
                label="Shop"
                active={location.pathname.startsWith("/shop")}
                onClick={closeMenu}
              />
              <Divider />
              <MobileLink
                to="/contact"
                icon={<Mail size={18} />}
                label="Contact"
                active={location.pathname === "/contact"}
                onClick={closeMenu}
              />
            </div>

            <p className="px-6 pt-6 pb-2 text-xs font-semibold tracking-widest text-white/40">
              EXPLORE
            </p>

            <div className="mx-4 bg-[#111] rounded-2xl overflow-hidden border border-white/10">
              <Link
                to="/shop"
                onClick={closeMenu}
                className="flex items-center justify-between px-5 py-4 text-white/80 active:bg-white/5"
              >
                <span>Shop All Products</span>
                <ChevronRight size={18} className="text-white/40" />
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideDown {
          animation: slideDown 0.25s ease-out;
        }
      `}</style>
    </>
  );
}

/* ================= HELPERS ================= */

function MobileLink({ to, icon, label, active, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={`flex items-center justify-between px-5 py-4 transition
        ${active ? "text-green-400 font-semibold" : "text-white/80"}
        active:bg-white/5
      `}
    >
      <div className="flex items-center gap-3">
        <span className="text-white/50">{icon}</span>
        {label}
      </div>
      <ChevronRight size={18} className="text-white/40" />
    </NavLink>
  );
}

function Divider() {
  return <div className="h-px bg-white/10 mx-5" />;
}

export default Navbar;
