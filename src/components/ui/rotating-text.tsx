"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

interface RotatingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export function RotatingText({
  words,
  interval = 3000,
  className,
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

    return (
    <div className={cn("relative inline-flex items-center justify-center overflow-hidden h-[1.3em] w-auto align-bottom px-4", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1], // Custom spring-like easing
          }}
          className="absolute left-0 right-0 whitespace-nowrap text-white/90 text-center"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible placeholder to maintain width based on the longest word */}
      <span className="invisible whitespace-nowrap" aria-hidden="true">
        {words.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
    </div>
  );
}
