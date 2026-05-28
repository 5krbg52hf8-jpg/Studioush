"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

interface RotatingTextProps {
  words: string[];
  /** ms between transitions. Default 5000 (5 s — slow, cinematic) */
  interval?: number;
  className?: string;
}

export function RotatingText({
  words,
  interval = 5000,
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
    /*
     * overflow-visible so descenders (g, y, j, p, q) are never clipped.
     * pb-2 reserves extra room at the bottom for descending glyphs.
     * min-h + leading-[1.15] prevent layout jumps between words.
     */
    <div
      className={cn(
        "relative flex items-center justify-center overflow-visible w-full pb-2",
        className
      )}
      style={{ minHeight: "1.15em" }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 28, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0,  opacity: 1, filter: "blur(0px)"  }}
          exit={{   y: -28, opacity: 0, filter: "blur(10px)" }}
          transition={{
            duration: 1.2,                    // ← more cinematic, less rushed
            ease: [0.22, 1, 0.36, 1],         // custom expo-out feel
          }}
          className="text-gold text-center whitespace-nowrap inline-block leading-[1.15]"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
