"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface ShinyBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const ShinyBadge: React.FC<ShinyBadgeProps> = ({ children, className }) => {
  return (
    <div className={cn("relative group cursor-default", className)}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="px-4 py-1.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center gap-3 overflow-hidden relative"
      >
        {/* Shiny moving beam */}
        <motion.div
          animate={{
            left: ["-100%", "200%"],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2,
          }}
          className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]"
        />
        
        <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
        <span className="text-white/90 text-[10px] tracking-[0.3em] uppercase font-medium relative z-10">
          {children}
        </span>
      </motion.div>
    </div>
  );
};
