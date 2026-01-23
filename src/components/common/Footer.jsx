function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10 text-sm text-white/70">
        <div>
          <h4 className="text-xl font-bold text-white mb-3">
            ALL<span className="text-green-400">iN</span>
          </h4>
          <p>Poker culture. Apparel. Mindset.</p>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-3">Shop</h5>
          <ul className="space-y-2">
            <li>Hoodies</li>
            <li>T-Shirts</li>
            <li>Caps</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-3">Company</h5>
          <ul className="space-y-2">
            <li>About</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-3">Follow</h5>
          <ul className="space-y-2">
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-white/40 pb-6">
        © {new Date().getFullYear()} ALLiN. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
