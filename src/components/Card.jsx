import { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ img, text, bgColor = "bg-secondary", desc = [] }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h-[28rem] mx-auto w-full cursor-pointer relative z-10"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        {/* Front Face */}
        <div
          className={`absolute w-full h-full rounded-lg ${bgColor} ${bgColor === "bg-[#FAF3DD]" ? "text-slate-600" : "text-white"}
                     flex flex-col items-center justify-between p-6 text-center font-semibold md:text-2xl`}
          style={{ backfaceVisibility: "hidden", textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          <img src={img} alt={text} className="w-full h-48 object-cover rounded-md" />
          <span>{text}</span>
        </div>
        {/* Back Face */}
        <div
          className={`absolute w-full h-full rounded-lg ${bgColor} ${bgColor === "bg-[#FAF3DD]" ? "text-slate-600" : "text-white"}
                     flex items-center justify-center p-6 font-normal text-base overflow-auto`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          <ul className="list-disc pl-6 space-y-3 text-left">
            {desc.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
