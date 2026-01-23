import Lottie from "lottie-react";
import hoodieAnimation from "../../animations/hoodie.json";

function HoodieAnimation() {
  return (
    <div className="absolute inset-0 flex justify-center pointer-events-none opacity-30">
      <div className="w-[500px] md:w-[700px]">
        <Lottie animationData={hoodieAnimation} loop autoplay />
      </div>
    </div>
  );
}

export default HoodieAnimation;
