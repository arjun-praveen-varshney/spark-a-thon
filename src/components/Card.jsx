import { useState } from "react";
import { motion } from "framer-motion";

// Variants for the card flip animation
const cardVariants = {
  initial: { rotateY: 0 },
  flipped: { rotateY: 180 },
};

// Variants for the staggered content animation on the back of the card
const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.3, // Delay starts after the card flip
      duration: 0.5,
    },
  }),
};

/**
 * An impressive, flipping card with a glassmorphism "aurora" effect on the back.
 * Flips on hover to reveal more details with a staggered animation.
 * @param {string} img - URL for the card's front image.
 * @param {string} text - The main title text on the front of the card.
 * @param {string[]} [desc=[]] - An array of strings for the bullet points on the back.
 */
const Card = ({ img, text, desc = [] }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-[28rem] w-full cursor-pointer group"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        variants={cardVariants}
        initial="initial"
        animate={isFlipped ? "flipped" : "initial"}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        whileHover={{ scale: 1.05, z: 20 }} // Adds a "lift" effect
      >
        {/* ======================= FRONT FACE ======================= */}
        <div
          className="absolute w-full h-full rounded-2xl overflow-hidden shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={img}
            alt={text}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-white text-2xl md:text-3xl font-bold" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.5)" }}>
              {text}
            </h3>
          </div>
        </div>

        {/* ======================= BACK FACE ======================= */}
        <div
          className="absolute w-full h-full rounded-2xl p-6 bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center text-left">
            <h4 className="text-white text-2xl font-semibold mb-4 border-b-2 border-white/30 pb-2 self-start w-full">
              Key Features
            </h4>
            <ul className="space-y-3 text-white/90 text-base font-light w-full">
              {desc.map((item, index) => (
                <motion.li
                  key={index}
                  custom={index} // Pass index to custom prop for stagger
                  variants={contentVariants}
                  initial="hidden"
                  animate={isFlipped ? "visible" : "hidden"}
                  className="flex items-start"
                >
                  <span className="mr-3 mt-1 text-cyan-300">✦</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;