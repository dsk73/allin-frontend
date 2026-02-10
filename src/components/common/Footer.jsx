import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16 text-sm text-white/70">
        {/* ================= GRID ================= */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* ================= BRAND ================= */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-bold text-white mb-3">
              ALL<span className="text-green-400">iN</span>
            </h4>
            <p className="max-w-xs">
              Poker culture. Apparel. Mindset. Built for players who never fold.
            </p>
          </div>

          {/* ================= NAV GROUP (MOBILE 3 COLS) ================= */}
          <div className="grid grid-cols-3 gap-6 md:col-span-3">
            {/* Shop */}
            <div>
              <h5 className="text-white font-semibold mb-3">Shop</h5>
              <ul className="space-y-2">
                <li>
                  <Link to="/shop" className="hover:text-white transition">
                    All Products
                  </Link>
                </li>
                <li className="opacity-60 cursor-not-allowed">Hoodies</li>
                <li className="opacity-60 cursor-not-allowed">T-Shirts</li>
              </ul>
            </div>

            {/* Company */}
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
                <li className="opacity-60 cursor-not-allowed">Privacy</li>
              </ul>
            </div>

            {/* Follow */}
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
