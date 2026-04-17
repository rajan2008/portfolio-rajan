"use client";
import { Check, ChevronRight, Loader2, X } from "lucide-react";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/ace-input";
import { Textarea } from "./ui/ace-textarea";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) return "Please enter a valid email address.";

    const blockedDomains = ["test.com", "example.com", "temp.com", "fake.com"];
    const domain = email.split("@")[1];
    if (blockedDomains.includes(domain)) return "Please use a real email address.";

    return "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const emailError = validateEmail(email);
    if (emailError) {
      setError(emailError);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, message }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setShowSuccess(true);
      setFullName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError("Failed to send message. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-6">
          <LabelInputContainer>
            <Label htmlFor="fullname" className="text-foreground/80 font-semibold">Full Name</Label>
            <Input
              id="fullname"
              placeholder="Your name"
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-muted/50 dark:bg-muted/30 border-2 border-border/50 focus:border-brand transition-all text-foreground placeholder:text-muted-foreground/50 h-12"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="email" className="text-foreground/80 font-semibold">Email Address</Label>
            <Input
              id="email"
              placeholder="email@example.com"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-muted/50 dark:bg-muted/30 border-2 border-border/50 focus:border-brand transition-all text-foreground placeholder:text-muted-foreground/50 h-12"
            />
          </LabelInputContainer>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="content" className="text-foreground/80 font-semibold">Your Message</Label>
          <Textarea
            placeholder="Tell me about your project or just say hi!"
            id="content"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-muted/50 dark:bg-muted/30 border-2 border-border/50 focus:border-brand transition-all resize-none text-foreground placeholder:text-muted-foreground/50"
          />
        </div>

        {error && (
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-red-500 text-sm font-medium flex items-center gap-2"
          >
            <X className="w-4 h-4" /> {error}
          </motion.p>
        )}

        <Button
          disabled={loading}
          className="w-full h-14 bg-brand hover:bg-brand/90 text-white rounded-2xl font-black text-xl shadow-lg shadow-brand/40 transition-all hover:scale-[1.01] active:scale-[0.99] border-none"
          type="submit"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="w-6 h-6 animate-spin" />
              Sending Message...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              Send Message <ChevronRight className="w-6 h-6 ml-2" />
            </div>
          )}
        </Button>
      </form>

      {/* LUXURY SUCCESS MODAL */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-6 bg-black/60 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white dark:bg-card border-2 border-brand/20 dark:border-brand/30 p-10 rounded-[40px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-brand/20 text-center flex flex-col items-center overflow-hidden"
            >
              {/* Animated Background Glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent" />

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-24 h-24 bg-brand rounded-full flex items-center justify-center mb-8 shadow-xl shadow-brand/40"
              >
                <Check className="w-12 h-12 text-white stroke-[4px]" />
              </motion.div>

              <h3 className="text-4xl font-black tracking-tight mb-4 text-foreground">Message Sent!</h3>
              <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
                Thank you, Rajan will get back to you shortly. A confirmation will be sent to your email.
              </p>

              <Button
                onClick={() => setShowSuccess(false)}
                className="w-full h-14 rounded-2xl bg-muted dark:bg-muted/80 hover:bg-muted/60 text-foreground font-bold transition-all border-border/50 border"
              >
                Done
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

