function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* ================= HEADER ================= */}
      <div className="max-w-2xl mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Get in <span className="text-green-400">Touch</span>
        </h1>
        <p className="mt-4 text-white/70">
          Questions, collaborations, or just want to say hi? We’d love to hear
          from you.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* ================= LEFT – FORM ================= */}
        <form className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-8 space-y-6">
          <div>
            <label className="block text-sm mb-2 text-white/60">
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-green-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-white/60">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-green-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-white/60">Message</label>
            <textarea
              rows="5"
              placeholder="Tell us what’s on your mind…"
              className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-green-400 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-green-400 text-black rounded-full font-bold text-lg hover:bg-green-300 transition"
          >
            Send Message
          </button>
        </form>

        {/* ================= RIGHT – INFO + MAP ================= */}
        <div className="flex flex-col gap-8">
          {/* ===== ROW 1: INFO ===== */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-white/60">support@allin.store</p>
              <p className="text-xs text-white/40 mt-2">
                We usually respond within 24 hours
              </p>
            </div>

            <div className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2">Socials</h3>
              <ul className="text-white/60 space-y-1">
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

          {/* ===== ROW 2: MAP ===== */}
          <div className="bg-[#0b0b0b] border border-white/10 rounded-2xl overflow-hidden">
            <div className="p-4 border-b border-white/10">
              <h3 className="text-lg font-semibold">Our Office</h3>
              <p className="text-sm text-white/60">Phoenix Marketcity Pune</p>
            </div>

            <div className="w-full h-[280px]">
              <iframe
                title="ALLiN Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613169408332!2d73.91669429999999!3d18.56225400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1770712059109!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
