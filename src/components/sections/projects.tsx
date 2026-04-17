"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import projects, { Skill } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import SectionWrapper from "../ui/section-wrapper";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="w-full py-24 md:py-32 z-10 px-4 md:px-12 relative text-foreground">
      <div className="flex flex-col mb-16 md:mb-20 max-w-7xl mx-auto items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A showcase of my creative web engineering and professional graphic design projects.
        </p>
      </div>

      {/* Marquee Strip - Re-integrated */}
      <div className="w-full overflow-hidden whitespace-nowrap py-12 border-y border-border/50 bg-background/50 backdrop-blur-sm relative z-10 mb-20 rotate-1">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="inline-flex gap-8 text-7xl md:text-9xl font-black uppercase tracking-tighter opacity-[0.035] dark:opacity-[0.07] select-none"
        >
          <span>{config.author} • WEB DEVELOPMENT • GRAPHIC DESIGN • FULL STACK • UI/UX •</span>
          <span>{config.author} • WEB DEVELOPMENT • GRAPHIC DESIGN • FULL STACK • UI/UX •</span>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
        {projects.map((project, index) => {
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1, 
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              className="relative group flex flex-col justify-between rounded-3xl border border-border bg-card/40 backdrop-blur-md p-10 transition-all hover:bg-card/60 hover:border-brand/50 hover:shadow-[0_20px_40px_-15px_rgba(var(--brand),0.3)] min-h-[480px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <span className="text-brand text-xs font-black uppercase tracking-[0.2em] bg-brand/5 px-3 py-1.5 rounded-full border border-brand/10">
                  {project.category}
                </span>
                <Link href={project.live} target="_blank">
                  <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-brand hover:text-white transition-all transform group-hover:rotate-12 border border-border">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </Link>
              </div>

              {/* Project Preview Image with Glass Overlay - Adjusted for visibility */}
              <div className="relative w-full h-56 mb-10 overflow-hidden rounded-2xl border border-border/50 bg-black/5 flex items-center justify-center z-10">
                <img 
                  src={project.src} 
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="flex flex-col gap-4 relative z-10 mt-auto">
                <h3 className="text-4xl font-black tracking-tighter text-foreground leading-none group-hover:text-brand transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {[...(project.skills.frontend || []), ...(project.skills.backend || [])].map(
                    (skill: Skill, i: number) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border bg-muted/40 text-muted-foreground text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm transition-all hover:bg-brand hover:text-white hover:border-brand"
                      >
                         <span className="text-brand/80 group-hover:text-white transition-colors">{skill.icon}</span>
                         {skill.title}
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
