// src/components/hero/Hero.jsx
function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-16 md:pt-0 md:-mt-16 flex items-center overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 right-[-160px] w-[520px] h-[520px] bg-green-400/20 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-2 pb-4">
        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
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

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="px-10 py-4 rounded-full bg-green-400 text-black font-bold text-lg hover:bg-green-300 transition">
                Shop New Drops
              </button>

              <button className="px-10 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:border-white/40 transition">
                Lookbook
              </button>
            </div>
          </div>

          {/* RIGHT – BIGGER IMAGE */}
          <div className="flex justify-end">
            <div className="w-[520px] animate-hero-crazy">
              <img
                src="/hero-product.png"
                alt="ALLiN Premium Hoodie"
                className="w-full h-auto select-none"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* ================= MOBILE STACK ================= */}
        <div className="md:hidden flex flex-col items-center text-center">
          {/* TEXT */}
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

          {/* IMAGE */}
          <div className="mt-12 w-[350px] animate-hero-crazy">
            <img
              src="/hero-product.png"
              alt="ALLiN Premium Hoodie"
              className="w-full h-auto select-none"
              draggable={false}
            />
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-3">
            <button className="px-6 py-3 rounded-full bg-green-400 text-black font-bold text-sm hover:bg-green-300 transition">
              Shop
            </button>

            <button className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-white/40 transition">
              Lookbook
            </button>
          </div>
        </div>
      </div>

      {/* ================= ANIMATION ================= */}
      <style>
        {`
          @keyframes heroCrazy {
            0% {
              transform: translateY(0px) rotate(0deg) scale(1);
            }
            20% {
              transform: translateY(-35px) rotate(-3deg) scale(1.04);
            }
            50% {
              transform: translateY(15px) rotate(3deg) scale(1.08);
            }
            80% {
              transform: translateY(-25px) rotate(-2deg) scale(1.04);
            }
            100% {
              transform: translateY(0px) rotate(0deg) scale(1);
            }
          }

          .animate-hero-crazy {
            animation: heroCrazy 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}

export default Hero;
