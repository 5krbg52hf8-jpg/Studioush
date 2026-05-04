import { cn } from '../../lib/utils'

interface LogoProps {
  className?: string
  size?: number
}

export function Logo({ className, size = 40 }: LogoProps) {
  return (
    <div className={cn(
      "flex items-center justify-center rounded-full border border-white/20 bg-white/5 group-hover:bg-white/10 transition-all duration-500",
      className
    )} style={{ width: size, height: size }}>
      <span className="font-serif font-medium text-white" style={{ fontSize: size * 0.45 }}>U</span>
    </div>
  )
}
