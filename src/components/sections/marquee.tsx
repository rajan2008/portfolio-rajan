import React from "react";
import { motion } from "framer-motion";

const MarqueeSection = () => {
  const text = "CREATIVE ENGINEERING  •  SYSTEMS ARCHITECTURE  •  INTERACTIVE DESIGN  •  FULL STACK DEVELOPMENT  •  ";
  
  return (
    <div className="w-full relative overflow-hidden py-10 bg-brand text-black dark:bg-white dark:text-black mt-[-5vh] z-20 transform -rotate-2 scale-105 shadow-2xl">
      <div className="flex w-[200%] md:w-[150%]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15,
          }}
          className="flex whitespace-nowrap"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest pl-4">
            {text}{text}{text}{text}
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeSection;
