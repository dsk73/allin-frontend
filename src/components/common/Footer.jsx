import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16 text-sm text-white/70">
        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid grid-cols-5 gap-12">
          {/* BRAND */}
          <div>
            <h4 className="text-xl font-bold text-white mb-3">
              ALL<span className="text-green-400">iN</span>
            </h4>
            <p className="max-w-xs">
              Poker culture. Apparel. Mindset. Built for players who never fold.
            </p>
          </div>

          {/* SHOP */}
          <div>
            <h5 className="text-white font-semibold mb-3">Shop</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="hover:text-white transition">
                  All Products
                </Link>
              </li>
              <li className="opacity-60">Hoodies</li>
              <li className="opacity-60">T-Shirts</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h5 className="text-white font-semibold mb-3">Company</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* FOLLOW */}
          <div>
            <h5 className="text-white font-semibold mb-3">Follow</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Twitter (X)
                </a>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h5 className="text-white font-semibold mb-3">Legal</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/legal/terms" className="hover:text-white transition">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  to="/legal/privacy"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/legal/trademark"
                  className="hover:text-white transition"
                >
                  Trademark
                </Link>
              </li>
              <li>
                <Link
                  to="/legal/promotions"
                  className="hover:text-white transition"
                >
                  Promotion Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= MOBILE LAYOUT ================= */}
        <div className="md:hidden">
          {/* BRAND */}
          <div className="mb-10">
            <h4 className="text-xl font-bold text-white mb-3">
              ALL<span className="text-green-400">iN</span>
            </h4>
            <p>
              Poker culture. Apparel. Mindset. Built for players who never fold.
            </p>
          </div>

          {/* LINKS GRID (2x2) */}
          <div className="grid grid-cols-2 gap-8">
            {/* SHOP */}
            <div>
              <h5 className="text-white font-semibold mb-3">Shop</h5>
              <ul className="space-y-2">
                <li>
                  <Link to="/shop" className="hover:text-white transition">
                    All Products
                  </Link>
                </li>
                <li className="opacity-60">Hoodies</li>
                <li className="opacity-60">T-Shirts</li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h5 className="text-white font-semibold mb-3">Company</h5>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* FOLLOW */}
            <div>
              <h5 className="text-white font-semibold mb-3">Follow</h5>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    Twitter (X)
                  </a>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h5 className="text-white font-semibold mb-3">Legal</h5>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/legal/terms"
                    className="hover:text-white transition"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    to="/legal/privacy"
                    className="hover:text-white transition"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/legal/trademark"
                    className="hover:text-white transition"
                  >
                    Trademark
                  </Link>
                </li>
                <li>
                  <Link
                    to="/legal/promotions"
                    className="hover:text-white transition"
                  >
                    Promotions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="text-center text-xs text-white/40 pb-6">
        © {new Date().getFullYear()} ALLiN. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
