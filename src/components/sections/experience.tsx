"use client";
import React from "react";
import { EXPERIENCE, SkillNames, SKILLS } from "@/data/constants";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/section-wrapper";

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience" className="w-full py-24 z-10 px-4 md:px-12 text-foreground">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Work Experience
        </h2>
        <p className="text-muted-foreground">
          Professional timeline of my roles and contributions.
        </p>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-4 md:gap-8 bg-card border border-border p-6 md:p-8 rounded-2xl hover:border-brand/30 transition-colors shadow-sm"
          >
            <div className="flex-shrink-0 md:w-48 text-muted-foreground text-sm font-mono mt-1">
              {exp.startDate} - {exp.endDate}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-foreground tracking-tight">
                {exp.title} 
                <span className="text-brand font-medium ml-2">@ {exp.company}</span>
              </h3>
              <ul className="text-muted-foreground text-sm md:text-base mt-2 list-disc ml-4 space-y-1">
                {exp.description.map((desc, i) => (
                   <li key={i}>{desc}</li>
                ))}
              </ul>
              {exp.skills && exp.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skillKey, idx) => (
                    <span key={idx} className="bg-muted border border-border text-foreground px-3 py-1 text-xs rounded-full">
                      {SKILLS[skillKey]?.label || skillKey}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
