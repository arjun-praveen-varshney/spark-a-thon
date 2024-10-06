import { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ img, text, bgColor = "bg-secondary", desc = [] }) => {
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
      className="h-[28rem] mx-auto w-full cursor-pointer relative"
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
          className={`rounded-[10px] absolute ${bgColor} text-center px-3 ${
            bgColor === "bg-[#FAF3DD]" ? "text-slate-600" : "text-white"
          } flex flex-col items-center justify-between py-6 font-semibold md:text-[28px] md:leading-[44px] h-full w-full`}
          style={{
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src={img}
            alt=""
            className="md:w-[371.45px] w-full md:h-[247.76px]"
          />
          {text}
        </div>
        <div
          className={`rounded-[10px] absolute ${bgColor} text-center px-3 ${
            bgColor === "bg-[#FAF3DD]" ? "text-slate-600" : "text-white"
          } w-full h-full flex items-center justify-center font-normal text-base overflow-auto`}
          style={{
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <ul className="list-disc pl-4 lg:pl-6 lg:py-6 space-y-2 lg:space-y-5 text-left">
            {desc.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
