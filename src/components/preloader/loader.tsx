"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";
import { cn } from "@/lib/utils";
import { usePreloader } from ".";

const steps = [
  "10%",
  "20%",
  "30%",
  "40%",
  "50%",
  "60%",
  "70%",
  "80%",
  "90%",
  "100%",
];

export default function Index() {
  const { isLoading, loadingPercent } = usePreloader();
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == steps.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  // Removed buggy curve path logic to ensure clean transition


  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={cn(styles.introduction, "bg-background flex flex-col items-center justify-center p-0")}
    >
      <div className="flex flex-col items-center gap-4">
        <motion.p 
          variants={opacity} 
          initial="initial" 
          animate="enter"
          className="text-6xl md:text-9xl font-black tracking-tighter text-foreground"
        >
          {(loadingPercent - (loadingPercent % 5)).toFixed(0)}%
        </motion.p>
        <div className="w-48 h-1 bg-muted rounded-full overflow-hidden relative">
           <motion.div 
             className="absolute inset-y-0 left-0 bg-primary"
             style={{ width: `${loadingPercent}%` }}
           />
        </div>
      </div>
    </motion.div>
  );
}