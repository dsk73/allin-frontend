function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] flex items-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 right-[-160px] w-[520px] h-[520px] bg-green-400/20 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-8 md:py-12">
        {/* DESKTOP */}
        <div className="hidden md:grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50 mb-3">
              ALL IN • PREMIUM POKER WEAR
            </p>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
              Built for the table. <br />
              <span className="text-green-400">Styled for life.</span>
            </h1>

            <p className="mt-5 text-lg xl:text-xl text-white/70 max-w-xl">
              Premium apparel for players who never fold — on the table and
              beyond.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="px-10 py-4 rounded-full bg-green-400 text-black font-bold text-lg">
                Shop New Drops
              </button>
              <button className="px-10 py-4 rounded-full border border-white/20 text-white font-semibold text-lg">
                Lookbook
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="w-[520px] animate-hero-crazy">
              <img src="/hero-product.png" alt="ALLiN Premium Hoodie" />
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">
            ALL IN • PREMIUM POKER WEAR
          </p>

          <h1 className="text-4xl font-extrabold leading-tight">
            Built for the table. <br />
            <span className="text-green-400">Styled for life.</span>
          </h1>

          <p className="mt-4 text-base text-white/70 max-w-sm">
            Premium apparel for players who never fold — on the table and
            beyond.
          </p>

          <div className="mt-10 w-[320px] animate-hero-crazy">
            <img src="/hero-product.png" alt="ALLiN Premium Hoodie" />
          </div>

          <div className="mt-6 flex gap-3">
            <button className="px-6 py-3 rounded-full bg-green-400 text-black font-bold text-sm">
              Shop
            </button>
            <button className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm">
              Lookbook
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroCrazy {
          0% { transform: translateY(0) rotate(0) scale(1); }
          50% { transform: translateY(-18px) rotate(2deg) scale(1.06); }
          100% { transform: translateY(0) rotate(0) scale(1); }
        }
        .animate-hero-crazy {
          animation: heroCrazy 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero;
