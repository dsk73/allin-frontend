import HoodieAnimation from "./HoodieAnimation";

function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      {/* animation */}
      <HoodieAnimation />

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Poker isn’t luck. <br />
          <span className="text-green-400">It’s ALL IN.</span>
        </h1>

        <p className="mt-6 text-lg text-white/70 max-w-2xl">
          Premium poker merchandise for players who live the game — on the table
          and beyond.
        </p>

        <div className="mt-10">
          <button className="px-8 py-4 rounded-full bg-green-400 text-black font-semibold text-lg hover:bg-green-300 transition">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
