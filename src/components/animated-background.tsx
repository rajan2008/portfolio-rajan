import React from "react";
import Particles from "./Particles";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background w-full h-full">
      {/* Interactive Particles Layer */}
      <Particles
        className="absolute inset-0 z-0 h-full"
        quantity={100}
        staticity={30}
        ease={50}
      />

      {/* Primary Brand Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand/20 dark:bg-brand/30 blur-[150px] rounded-full animate-pulse pointer-events-none opacity-50" />
      
      {/* Secondary Accent Glow */}
      <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 dark:bg-blue-600/15 blur-[150px] rounded-full animate-pulse delay-700 pointer-events-none opacity-50" />
      
      {/* Grid Pattern with subtle mask */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_60%,transparent_100%)] opacity-30 pointer-events-none"
      />
    </div>
  );
};

export default AnimatedBackground;
