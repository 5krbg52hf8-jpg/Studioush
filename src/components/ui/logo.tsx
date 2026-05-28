import { cn } from '../../lib/utils'

interface LogoProps {
  className?: string
  size?: number
}

export function Logo({ className, size }: LogoProps) {
  return (
    <div 
      className={cn(
        "flex items-center justify-center transition-all duration-500 relative",
        className
      )} 
      style={size ? { height: size } : {}}
    >
      <div className="relative h-full w-auto flex items-center justify-center">
        {/* Logo Base (ligeramente opacado durante el descanso para dar contraste al brillo) */}
        <img 
          src="/studio-ush-logo.svg" 
          alt="Studio Ush" 
          className="h-full w-auto object-contain drop-shadow-sm pointer-events-none opacity-90"
          style={size ? { height: size } : {}}
        />

        {/* Capa de Brillo Metálico Premium con Máscara */}
        <div 
          className="absolute inset-0 pointer-events-none mix-blend-plus-lighter logo-gold-shimmer"
          style={{
            maskImage: 'url(/studio-ush-logo.svg)',
            WebkitMaskImage: 'url(/studio-ush-logo.svg)',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
            height: size ? size : '100%',
            width: '100%'
          }}
        />
      </div>
    </div>
  )
}
