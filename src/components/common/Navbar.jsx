//src/components/common/Navbar.jsx
import { Link } from "react-router-dom";
import logo from "/logo.png";
import useCartStore from "../../store/cartStore";

function Navbar() {
  const openCart = useCartStore((s) => s.openCart);
  const totalItems = useCartStore((s) => s.totalItems());

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="ALLiN" className="h-12 w-auto" />
        </Link>

        <nav className="hidden md:flex gap-8 text-lg text-white/70">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/shop" className="hover:text-white">
            Shop
          </Link>
          <span className="cursor-not-allowed opacity-40">Articles</span>
          <span className="cursor-not-allowed opacity-40">Contact</span>
        </nav>

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
      </div>
    </header>
  );
}

export default Navbar;
