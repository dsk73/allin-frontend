function Hero() {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden -mt-16">
      {/* HERO-ONLY BACKGROUND (distinct from rest of site) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e0e0e] via-[#0a0a0a] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/60 mb-4">
              ALL IN • Premium Poker Wear
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Built for the table. <br />
              <span className="text-green-400">Styled for life.</span>
            </h1>

            <p className="mt-6 text-lg text-white/70 max-w-xl">
              Minimal. Powerful. Designed for poker players who never fold — on
              the table and beyond.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="px-8 py-4 rounded-full bg-green-400 text-black font-semibold text-lg hover:bg-green-300 transition">
                Shop New Arrivals
              </button>

              <button className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:border-white/40 transition">
                View Lookbook
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE (REDUCED SIZE) */}
          <div className="relative flex justify-center md:justify-end">
            <div className="w-[260px] sm:w-[320px] md:w-[360px] lg:w-[400px]">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/hero-product.png"
                  alt="ALLIN Premium Hoodie"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
