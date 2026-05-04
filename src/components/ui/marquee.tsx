import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: 'left' | 'right'
}

export function Marquee({
  children,
  className,
  speed = 40,
  direction = 'left',
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "flex w-full overflow-hidden bg-transparent select-none",
        className
      )}
    >
      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-12 sm:gap-24 px-6 sm:px-12"
        animate={{
          x: direction === 'left' ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-12 sm:gap-24 px-6 sm:px-12"
        aria-hidden="true"
        animate={{
          x: direction === 'left' ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
