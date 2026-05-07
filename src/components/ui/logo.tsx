import { cn } from '../../lib/utils'

interface LogoProps {
  className?: string
  size?: number
}

export function Logo({ className, size = 40 }: LogoProps) {
  return (
    <div 
      className={cn(
        "flex items-center justify-center transition-all duration-500",
        className
      )} 
      style={{ height: size }}
    >
      <img 
        src="/studio-ush-logo.png" 
        alt="Studio Ush" 
        className="h-full w-auto object-contain drop-shadow-sm pointer-events-none"
        style={{ height: size }}
      />
    </div>
  )
}
