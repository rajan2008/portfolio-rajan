"use client";
import React from "react";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="w-full py-24 z-10 px-4 md:px-12 text-foreground">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Get in Touch
        </h2>
        <p className="text-muted-foreground">
          Interested in working together or have a question? Leave a message.
        </p>
      </div>
      
      <div className="max-w-xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
        <div className="mb-8 text-center text-sm text-muted-foreground">
           Or email me directly at{" "}
           <a href={`mailto:${config.email}`} className="text-brand hover:underline">
             {config.email}
           </a>
        </div>
        <ContactForm />
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
