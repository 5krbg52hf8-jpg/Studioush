"use client";

import React from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

const animationProps = {
  initial: { "--x": "100%", scale: 1 },
  animate: { "--x": "-100%" },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "tween",
    ease: "linear",
    duration: 1.5,
  },
} as any;

interface ShinyButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.button
      {...animationProps}
      {...props}
      className={cn(
        "relative rounded-full px-8 py-3 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] bg-white text-black",
        className
      )}
    >
      <span
        className="relative block size-full text-sm uppercase tracking-widest font-semibold"
        style={{
          maskImage:
            "linear-gradient(-75deg, black calc(var(--x) + 20%), transparent calc(var(--x) + 30%), black calc(var(--x) + 100%))",
          WebkitMaskImage:
            "linear-gradient(-75deg, black calc(var(--x) + 20%), transparent calc(var(--x) + 30%), black calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
          WebkitMask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          WebkitMaskComposite: "xor",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,rgba(255,255,255,0.1)_calc(var(--x)+20%),rgba(255,255,255,0.5)_calc(var(--x)+25%),rgba(255,255,255,0.1)_calc(var(--x)+100%))] p-px"
      ></span>
    </motion.button>
  );
};
