import { useRef } from "react";
import type { FC, ReactNode } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const words = text.split(" ");

  // Fade in when entering, fade out when leaving — text visible during scroll
  const panelOpacity = useTransform(scrollYProgress, [0, 0.05, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[300vh]", className)}>
      {/* Fixed panel — replaces sticky to avoid overflow ancestor issues */}
      <motion.div
        style={{ opacity: panelOpacity }}
        className="fixed top-0 left-0 right-0 h-[100dvh] flex items-center justify-center z-30 pointer-events-none bg-[#0a0a0a]"
      >
        <p className="flex flex-wrap max-w-5xl p-5 text-3xl font-light text-white/20 md:p-8 md:text-5xl lg:p-10 lg:text-6xl xl:text-7xl">
          {words.map((word, i) => {
            // Map each word to a compressed range (15%-85% of scroll)
            // This makes the text illuminate faster
            const wordStart = 0.15 + (i / words.length) * 0.7;
            const wordEnd = wordStart + (1 / words.length) * 0.7;
            return (
              <Word key={i} progress={scrollYProgress} range={[wordStart, wordEnd]}>
                {word}
              </Word>
            );
          })}
        </p>
      </motion.div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className="absolute opacity-10">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className="text-white drop-shadow-lg will-change-[opacity]"
      >
        {children}
      </motion.span>
    </span>
  );
};
