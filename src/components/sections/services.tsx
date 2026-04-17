"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionWrapper from "../ui/section-wrapper";
import { ArrowDownRight } from "lucide-react";

export const ServicesSection = () => {
  return (
    <SectionWrapper id="services" className="w-full relative z-10 px-4 md:px-12 py-24 md:py-32 mix-blend-difference text-white dark:text-white">
      <div className="flex flex-col mb-16 md:mb-24 relative">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.8] mb-4">
          Capabilities
        </h2>
        <p className="text-white/60 font-mono text-lg max-w-xl">
          What I bring to the technical architecture.
        </p>
      </div>

      <div className="w-full border-t border-white/10">
        {[
          { text: "Full Stack Engineering", id: "01" },
          { text: "AI & LLM Integration", id: "02" },
          { text: "Interactive UI/UX", id: "03" },
          { text: "Database Architecture", id: "04" },
        ].map((item, i) => (
          <div key={i} className="group relative w-full border-b border-white/10 overflow-hidden cursor-pointer">
            {/* Hover Background Reveal */}
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.23,1,0.32,1] z-0" />
            
            <div className="relative z-10 flex items-center justify-between py-10 md:py-16 px-4 md:px-8 group-hover:text-black transition-colors duration-500">
              <div className="flex items-start md:items-center gap-6 md:gap-12 w-full">
                <span className="font-mono text-xl md:text-2xl text-white/50 group-hover:text-black/50 transition-colors duration-500">
                   {item.id}
                </span>
                <span className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">
                  {item.text}
                </span>
              </div>
              <ArrowDownRight className="w-10 h-10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:block" />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
