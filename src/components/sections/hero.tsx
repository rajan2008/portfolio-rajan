"use client";
import React from "react";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <SectionWrapper id="hero" className="w-full min-h-[90vh] flex flex-col justify-center items-center py-20 px-6 sm:px-12 relative z-10 text-foreground">
      <div className="max-w-4xl w-full text-center flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="inline-flex py-1 px-4 rounded-full border border-border bg-muted/50 backdrop-blur-md mb-8 text-sm text-brand font-mono font-medium tracking-wide"
        >
          AVAILABLE FOR NEW OPPORTUNITIES
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground tracking-[-0.04em] leading-[0.95] mb-8"
        >
          Designing <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40 pb-2">
             The Future.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto mb-14 leading-tight tracking-tight"
        >
          I'm <strong className="text-foreground">{config.author}</strong>. Bridging the gap between <strong className="text-foreground">Full-Stack Development</strong>, <strong className="text-foreground">Graphic Design</strong> & <strong className="text-foreground">Artistic Sketching</strong>.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link href="#projects" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 transition-opacity duration-200 flex items-center justify-center gap-2">
              Explore Work
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <Link href="#contact" className="w-full sm:w-auto">
             <button className="w-full sm:w-auto px-8 py-4 border border-border bg-muted/40 backdrop-blur-md text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors duration-200">
               Contact Me
             </button>
          </Link>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
