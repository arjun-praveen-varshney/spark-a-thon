import React from 'react';
import { motion } from 'framer-motion';

const PixelButton = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      className={`relative px-6 py-3 font-pixel text-2xl text-white bg-red-600 border-4 border-b-8 border-r-8 border-red-800 rounded-lg shadow-lg
                  hover:bg-red-500 active:translate-y-0.5 active:border-b-4 active:border-r-4 transition-all duration-100 ease-out group
                  ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
        {children}
      </span>
      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{boxShadow: '0 0 15px rgba(255,255,255,0.4)'}}></span>
    </motion.button>
  );
};

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  // --- NEW & IMPROVED PIXEL HEART ICON --- ❤️
  const pixelHeart = (
    <svg className="w-14 h-14 md:w-14 md:h-14 text-red-500 drop-shadow-[0_3px_2px_rgba(0,0,0,0.5)]" fill="currentColor" viewBox="0 0 24 24">
        <path stroke="#a22c2c" strokeWidth="1.5" d="M16 4h-3l-1.1 1.1L11 4H8l-4 4v3l8 8 8-8V8l-4-4z" />
    </svg>
  );

const trophyIcon = (
    <div className="w-16 h-16 md:w-20 md:h-20 flex items-end justify-center drop-shadow-[rgba(0,0,0,0.5)]">
      {/* Robot Body/Head */}
      <div className="relative w-full h-[80%] bg-gray-300 rounded-t-xl rounded-b-md shadow-lg border-b-2 border-gray-400">
        {/* Robot Eyes (glowing) */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 flex space-x-3">
          <div className="w-4 h-4 md:w-5 md:h-5 bg-cyan-400 rounded-full shadow-[0_0_8px_theme(colors.cyan.400),_0_0_15px_theme(colors.cyan.200)]"></div>
          <div className="w-4 h-4 md:w-5 md:h-5 bg-cyan-400 rounded-full shadow-[0_0_8px_theme(colors.cyan.400),_0_0_15px_theme(colors.cyan.200)]"></div>
        </div>
        {/* Neck connector */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-2.5 bg-gray-400 rounded-b-sm"></div>
      </div>
    </div>
  );



  return (
    <div id="home" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center font-pixel py-16 px-4">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid.png')] opacity-20"></div>
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]"
          initial={{ backgroundPosition: '0% 0%' }}
          animate={{ backgroundPosition: '100% 100%' }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
        />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-white text-center p-3 bg-black bg-opacity-60 rounded-xl border-4 border-purple-500 shadow-2xl max-w-4xl w-full mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex items-center justify-between w-full mb-8 text-white text-lg md:text-xl px-4"
          variants={itemVariants}
        >
          <div className="flex space-x-2">{pixelHeart}{pixelHeart}{pixelHeart}</div>
          <div className="flex space-x-4">{trophyIcon}</div>
        </motion.div>

        <motion.h1
          className="font-extrabold mb-8 uppercase whitespace-nowrap arcade-title-responsive"
          style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.8), 8px 8px 0px rgba(255,0,255,0.7)' }}
          variants={itemVariants}
        >
          Spark-A-Thon
        </motion.h1>
        <motion.p
          className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 uppercase"
          style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.8), 8px 8px 0px rgba(0,255,255,0.7)' }}
          variants={itemVariants}
        >
          2025-2026
        </motion.p>

        <a
  href="https://forms.gle/2FYmQhNiXeueocbo8"
  className="no-underline"
  target="_blank"
  rel="noopener noreferrer"
>
        <motion.div
          className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mb-10 bg-gradient-to-br from-green-500 to-green-700 p-2 rounded-lg border-4 border-yellow-400 shadow-inset-glow"
          variants={itemVariants}
        >
          <div className="bg-black p-1 rounded-md border-2 border-green-400">
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl text-yellow-400 font-bold uppercase"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut", repeatType: "reverse" }}
              style={{ textShadow: '2px 2px 0px rgba(130, 34, 34, 0.8), 2px 2px 0px rgba(54, 231, 51, 0.7)' }}
            >
              REGISTER NOW
            </motion.h2>
          </div>
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(0,0,0,0)_50%,_rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] animate-scanlines"></div>
        </motion.div>
        </a>

        <motion.div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-1" variants={itemVariants}>
          <PixelButton onClick={() => console.log("Start Game!")}>15 OCTOBER 2025 </PixelButton>
          <PixelButton onClick={() => console.log("Start Game!")}>9:00 AM to 4:00 PM</PixelButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;