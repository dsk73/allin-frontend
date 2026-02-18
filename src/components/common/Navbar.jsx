import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Home,
  ShoppingBag,
  Mail,
  ChevronRight,
  X,
  LogOut,
  User,
} from "lucide-react";
import logo from "/logo.png";

import useCartStore from "../../store/cartStore";
import useAuth from "../../context/useAuth";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();
  const profileRef = useRef(null);

  const openCart = useCartStore((s) => s.openCart);
  const totalItems = useCartStore((s) => s.totalItems());

  const { user, logout } = useAuth();

  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    logout();
    setProfileOpen(false);
    closeMenu();
    navigate("/", { replace: true });
  };

  /* Close profile dropdown on outside click (desktop) */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ================= TOP NAVBAR ================= */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="ALLiN" className="h-10 w-auto" />
          </Link>

          {/* CENTER NAV (DESKTOP) */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-10 text-white/70">
            <NavLink to="/" className="hover:text-white">
              Home
            </NavLink>
            <NavLink to="/shop" className="hover:text-white">
              Shop
            </NavLink>
            <NavLink to="/contact" className="hover:text-white">
              Contact
            </NavLink>
          </nav>

          {/* RIGHT: CART + AUTH (DESKTOP) */}
          <div className="hidden md:flex items-center gap-4">
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

            {/* AUTH DROPDOWN */}
            {user ? (
              <div
                ref={profileRef}
                className="relative"
                onMouseEnter={() => setProfileOpen(true)}
                onMouseLeave={() => setProfileOpen(false)}
              >
                <button className="flex items-center gap-2 hover:text-white">
                  <User size={16} />
                  <span className="font-semibold">{user.username}</span>
                </button>

                {profileOpen && (
                  <div className="absolute right-0 top-full pt-2 z-50">
                    <div className="w-44 rounded-xl bg-[#111] border border-white/10 shadow-xl overflow-hidden">
                      <Link
                        to="/profile"
                        className="block px-4 py-3 text-sm hover:bg-white/5"
                      >
                        Profile
                      </Link>

                      <Link
                        to="/profile/orders"
                        className="block px-4 py-3 text-sm hover:bg-white/5"
                      >
                        Orders
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-white/5"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink to="/login" className="hover:text-white">
                Login
              </NavLink>
            )}
          </div>

          {/* MOBILE: CART + TOGGLE */}
          <div className="md:hidden ml-auto flex items-center gap-2">
            <button
              onClick={openCart}
              className="relative px-3 py-2 rounded-full border border-white/20"
            >
              🛒
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-400 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="p-2 rounded-full border border-white/20"
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
                onClick={closeMenu}
              />
              <Divider />
              <MobileLink
                to="/shop"
                icon={<ShoppingBag size={18} />}
                label="Shop"
                onClick={closeMenu}
              />
              <Divider />
              <MobileLink
                to="/contact"
                icon={<Mail size={18} />}
                label="Contact"
                onClick={closeMenu}
              />
              {user && (
                <>
                  <Divider />
                  <MobileLink
                    to="/profile"
                    icon={<User size={18} />}
                    label="Profile"
                    onClick={closeMenu}
                  />
                  <Divider />
                  <MobileLink
                    to="/profile/orders"
                    icon={<ShoppingBag size={18} />}
                    label="Orders"
                    onClick={closeMenu}
                  />
                </>
              )}
            </div>

            <p className="px-6 pt-6 pb-2 text-xs font-semibold tracking-widest text-white/40">
              ACCOUNT
            </p>

            <div className="mx-4 bg-[#111] rounded-2xl overflow-hidden border border-white/10">
              {!user ? (
                <MobileLink
                  to="/login"
                  icon={<User size={18} />}
                  label="Login"
                  onClick={closeMenu}
                />
              ) : (
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-between px-5 py-4 text-red-400 active:bg-white/5"
                >
                  <span className="flex items-center gap-3">
                    <LogOut size={16} />
                    Logout
                  </span>
                  <ChevronRight size={18} className="text-white/40" />
                </button>
              )}
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

function MobileLink({ to, icon, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className="flex items-center justify-between px-5 py-4 text-white/80 hover:bg-white/5"
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
