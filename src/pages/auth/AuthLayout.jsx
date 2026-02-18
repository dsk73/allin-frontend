function AuthLayout({ title, children }) {
  return (
    <div
      className="
        relative bg-black overflow-hidden
        min-h-[calc(100vh-24rem)]
        pt-20 pb-20
        flex items-center justify-center
        px-6
      "
    >
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-green-400/20 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute top-1/4 -right-40 h-[26rem] w-[26rem] rounded-full bg-emerald-500/10 blur-3xl animate-float-fast" />

      {/* Auth Card */}
      <div
        className="
          relative z-10 w-full max-w-md
          rounded-2xl p-8
          bg-white/5 backdrop-blur-xl
          border border-white/10
          shadow-[0_0_45px_-10px_rgba(0,255,128,0.25)]
          animate-auth-in
        "
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-white">
          {title}
        </h1>

        {children}
      </div>

      {/* Local animations */}
      <style>
        {`
          @keyframes authIn {
            0% {
              opacity: 0;
              transform: translateY(40px) scale(0.96);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .animate-auth-in {
            animation: authIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          @keyframes floatSlow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(30px);
            }
          }

          @keyframes floatFast {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-25px);
            }
          }

          .animate-float-slow {
            animation: floatSlow 10s ease-in-out infinite;
          }

          .animate-float-fast {
            animation: floatFast 7s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}

export default AuthLayout;
