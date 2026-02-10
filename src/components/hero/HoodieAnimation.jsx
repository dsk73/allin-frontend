// src/components/hero/HoodieAnimation.jsx
import Lottie from "lottie-react";
import hoodieAnimation from "../../animations/hoodie.json";

function HoodieAnimation() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="
          w-[260px]
          sm:w-[320px]
          md:w-[380px]
          lg:w-[420px]
          animate-hoodie-float
        "
      >
        <Lottie
          animationData={hoodieAnimation}
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <style>
        {`
          @keyframes hoodie-float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-14px);
            }
          }
          .animate-hoodie-float {
            animation: hoodie-float 5s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}

export default HoodieAnimation;
