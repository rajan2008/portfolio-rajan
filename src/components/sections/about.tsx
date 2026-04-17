"use client"
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/section-wrapper";

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="flex flex-col items-center justify-center py-24 px-6 md:px-12 text-foreground z-10 w-full relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-medium tracking-tight text-foreground/90 leading-relaxed"
        >
          My goal is to build digital products that are <span className="text-brand">blazingly fast</span>, highly scalable, and accessible to everyone. 
        </motion.p>
        
        <motion.p
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           viewport={{ once: true }}
           className="text-lg text-muted-foreground max-w-2xl"
        >
           I specialize in modern JavaScript frameworks, creative graphic design, and smooth interactive frontend experiences. When I'm not coding, I'm crafting visual identities and exploring digital art.
        </motion.p>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
