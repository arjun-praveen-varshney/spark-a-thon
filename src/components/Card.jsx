import { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ text, bgColor = "bg-secondary", desc="" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="min-h-60 w-[90%] mx-auto md:w-1/3 cursor-pointer relative"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <div
          className={`rounded-[10px] absolute ${bgColor} text-center px-3 text-white flex items-center justify-center font-[900] text-[32px] leading-[48px] tracking-[10%] h-full w-full`}
          style={{
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            backfaceVisibility: "hidden",
          }}
        >
          {text}
        </div>
        <div
          className={`rounded-[10px] absolute ${bgColor} text-center px-3 text-white w-full h-full flex items-center justify-center font-[900] text-[32px] leading-[48px] tracking-[10%]`}
          style={{
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {desc}
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
