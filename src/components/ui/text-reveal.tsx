import { useRef } from "react";
import type { FC } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "../../lib/utils";
import { SparklesText } from "./sparkles-text";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

/**
 * Ultra-premium cinematic text reveal with SparklesText effect.
 * 
 * Features:
 * - Line-by-line blur→clear reveal with stagger
 * - Animated golden sparkle particles on highlighted phrases
 * - Gold shimmer gradient + sparkles on key emotional lines
 * - Animated ambient gold glow backdrop
 * - Uniform text sizing — no jarring size differences
 * - Compact vertical padding — no excessive whitespace
 * 
 * Mobile-first: all text sizes are generous and readable.
 */
export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const lines = splitIntoLines(text);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 w-full bg-[#0a0a0a] py-20 sm:py-24 md:py-32 lg:py-40 overflow-hidden",
        className
      )}
    >
      {/* Animated ambient glow — warm gold radial */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(212,168,68,0.07) 0%, rgba(212,168,68,0.03) 40%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col items-center text-center gap-1 sm:gap-2 md:gap-3">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                filter: "blur(14px)",
                y: 35,
                scale: 0.96,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      filter: "blur(0px)",
                      y: 0,
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.9,
                delay: 0.1 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block will-change-[filter,opacity,transform]"
            >
              {line.highlight ? (
                <SparklesText
                  text={line.text}
                  className={cn(
                    "text-gold-shimmer font-serif italic font-medium",
                    "text-[1.6rem] sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl",
                    "leading-[1.3] tracking-tight"
                  )}
                />
              ) : (
                <span
                  className={cn(
                    "text-white font-light",
                    "text-[1.6rem] sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl",
                    "leading-[1.3] tracking-tight"
                  )}
                >
                  {line.text}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Decorative animated gold line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{
            duration: 1.8,
            delay: lines.length * 0.15 + 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-10 sm:mt-12 md:mt-16 w-20 h-px origin-center"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(212,168,68,0.5), transparent)",
          }}
        />
      </div>
    </div>
  );
};

interface LineData {
  text: string;
  highlight: boolean;
}

/**
 * Splits the agency message into balanced line fragments.
 * Optimized for mobile readability — no orphaned single words.
 * Key emotional phrases are highlighted with sparkles + gold shimmer.
 */
function splitIntoLines(text: string): LineData[] {
  if (text.includes("primer nivel")) {
    return [
      { text: "Tu marca es de primer nivel.", highlight: false },
      { text: "Pero si tu web no transmite", highlight: false },
      { text: "esa autoridad,", highlight: true },
      { text: "le estás regalando tus mejores", highlight: false },
      { text: "clientes a la competencia.", highlight: true },
    ];
  }

  // Fallback
  const words = text.split(" ");
  const chunkSize = Math.ceil(words.length / 4);
  const lines: LineData[] = [];
  for (let i = 0; i < words.length; i += chunkSize) {
    lines.push({
      text: words.slice(i, i + chunkSize).join(" "),
      highlight: i === chunkSize,
    });
  }
  return lines;
}
