import React, { useRef, useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/button'
import { AnimatedGroup } from '../ui/animated-group'
import { RotatingText } from '../ui/rotating-text'
import { ShinyButton } from '../ui/shiny-button'
import { ShinyBadge } from '../ui/shiny-badge'
import { MagneticButton } from '../ui/magnetic-button'
import { Logo } from '../ui/logo'
import { TopographyPattern } from '../ui/topography-pattern'
import { cn } from '../../lib/utils'
import { motion, useScroll, useTransform, AnimatePresence, type Variants } from 'framer-motion'

const transitionVariants: { item: Variants, container?: Variants } = {
    item: {
        hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
        visible: {
            opacity: 1, filter: 'blur(0px)', y: 0,
            transition: { type: 'spring', bounce: 0.3, duration: 1.5 },
        },
    },
}

export function HeroSection() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    // Parallax effect on scroll
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])

    const rotatingOptions = [
        "Webs Premium",
        "Diseño a Medida",
        "Tiendas Online",
        "Sitios Exclusivos"
    ]

    return (
        <>
            <HeroHeader />
            <main ref={containerRef} className="relative min-h-[100dvh] bg-[#0a0a0a] flex flex-col justify-center pt-24 pb-12 md:pt-20 md:pb-24 overflow-hidden">
                {/* Backgrounds - Ushuaia & Dark Overlay */}
                <motion.div 
                    style={{ y, opacity }}
                    className="absolute inset-0 w-full h-full z-0 overflow-hidden"
                >
                    <motion.div 
                        initial={{ scale: 1.02 }}
                        animate={{ scale: 1.1 }}
                        transition={{ duration: 40, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/mount-olivia-mobile.jpg')] md:bg-[url('/ushuaia-desktop.jpg')]"
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-brightness-75" />
                    <TopographyPattern className="opacity-15 pointer-events-none" />
                </motion.div>
                
                <section className="w-full relative z-10 flex flex-col items-center justify-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.8)_0%,transparent_70%)] pointer-events-none -z-10" />

                    <div className="relative pt-4 md:pt-24 pb-16 md:pb-32 w-full">
                        <div className="mx-auto max-w-7xl px-6 relative z-10">
                            <div className="text-center sm:mx-auto">
                                <AnimatedGroup variants={transitionVariants}>
                                    <div className="mx-auto w-fit mb-6 md:mb-8">
                                        <ShinyBadge>AGENCIA DIGITAL • 54°48'S 68°18'W</ShinyBadge>
                                    </div>
                                </AnimatedGroup>

                                <AnimatedGroup variants={transitionVariants}>
                                    <h1 className="mt-4 md:mt-6 max-w-5xl mx-auto text-center text-[1.85rem] leading-[1.2] sm:text-5xl md:text-7xl lg:mt-12 xl:text-[5.5rem] font-medium tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
                                        <span className="block mb-1 sm:mb-0">Desarrollamos</span>
                                        <RotatingText words={rotatingOptions} className="text-gold my-1 sm:my-0" />
                                        <span className="block mt-1 sm:mt-0">desde el Fin del Mundo.</span>
                                    </h1>
                                </AnimatedGroup>

                                <AnimatedGroup variants={transitionVariants}>
                                    <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-balance text-sm md:text-xl text-white font-light leading-relaxed drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                                        Diseño web a medida y posicionamiento premium para negocios que no compiten por precio.
                                    </p>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: { visible: { transition: { staggerChildren: 0.1, delayChildren: 0.8 } } },
                                        ...transitionVariants,
                                    }}
                                    className="mt-8 md:mt-12 flex flex-col items-center justify-center gap-4 md:gap-6 md:flex-row">
                                    <MagneticButton distance={0.4}>
                                        <div key={1} className="bg-white/5 rounded-full p-1 border border-white/10 glass backdrop-blur-md">
                                            <ShinyButton><a href="https://wa.me/5492901584322?text=Quiero%20mas%20informacion%20sobre%20el%20servicio%20de%20dise%C3%B1o%20web%20premium" onClick={openWhatsApp}>Solicitar Información</a></ShinyButton>
                                        </div>
                                    </MagneticButton>
                                    <MagneticButton distance={0.3}>
                                        <a href="#portfolio" key={2} className="relative inline-flex items-center justify-center rounded-full px-8 py-3 bg-white/5 backdrop-blur-3xl border border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-xs uppercase tracking-[0.2em] font-medium group overflow-hidden">
                                            <span className="absolute inset-0 w-full h-full bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <span className="relative z-10 text-nowrap">Ver Casos de Éxito</span>
                                        </a>
                                    </MagneticButton>
                                </AnimatedGroup>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export const menuItems = [
    { name: 'Visión', href: '#filosofia' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Método', href: '#proceso' },
    { name: 'Portfolio', href: '#portfolio' },
]

export const openWhatsApp = (e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (e) e.preventDefault()
    const whatsappUrl = "https://wa.me/5492901584322?text=Quiero%20mas%20informacion%20sobre%20el%20servicio%20de%20dise%C3%B1o%20web%20premium"
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
}

export const HeroHeader = () => {
    const [menuState, setMenuState] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        setMenuState(false)
        
        // Small delay to allow the menu close animation to start
        setTimeout(() => {
            const targetId = href.replace('#', '')
            const elem = document.getElementById(targetId)
            if (elem) {
                const offset = 80 // Offset for the fixed header
                const bodyRect = document.body.getBoundingClientRect().top
                const elementRect = elem.getBoundingClientRect().top
                const elementPosition = elementRect - bodyRect
                const offsetPosition = elementPosition - offset

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                })
            }
        }, 100)
    }
    
    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full pointer-events-none">
            {/* The Dynamic Island Container */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={cn(
                    "pointer-events-auto relative flex flex-col items-center justify-between transition-all duration-500 ease-in-out",
                    "rounded-[2.5rem] border border-white/15 shadow-[0_16px_64px_rgba(0,0,0,0.6)] bg-black/40 backdrop-blur-3xl",
                    menuState ? "w-[92%] lg:w-[700px] p-4 lg:p-5 overflow-visible" : (isScrolled ? "w-[90%] lg:max-w-[850px] px-5 lg:px-8 py-1.5 overflow-hidden" : "w-[90%] lg:max-w-[850px] px-6 lg:px-10 py-2 lg:py-2.5 overflow-hidden")
                )}
            >
                {/* Top Row (Always visible) */}
                <div className="flex items-center justify-between w-full h-full gap-4 lg:gap-8">
                    {/* Brand */}
                    <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.scrollTo(0,0); }} aria-label="home" className="flex items-center group shrink-0">
                        <Logo className={isScrolled ? "h-[40px] md:h-[50px] lg:h-[75px]" : "h-[55px] md:h-[70px] lg:h-[100px]"} />
                    </a>

                    {/* Desktop Links (Hidden on mobile/tablet) */}
                    <div className="hidden lg:flex items-center gap-6 lg:gap-10">
                        <ul className="flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-medium text-white/70">
                            {menuItems.map(item => (
                                <li key={item.name}>
                                    <a 
                                        href={item.href} 
                                        onClick={(e) => scrollToSection(e, item.href)}
                                        className="hover:text-white transition-colors duration-300"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <MagneticButton distance={0.2}>
                            <Button asChild size="sm" className="rounded-full bg-white text-black hover:bg-gray-200 shadow-lg text-[10px] uppercase tracking-widest px-6 transition-transform hover:scale-105">
                                <a href="https://wa.me/5492901584322?text=Quiero%20mas%20informacion%20sobre%20el%20servicio%20de%20dise%C3%B1o%20web%20premium" onClick={openWhatsApp}>Agendar Sesión</a>
                            </Button>
                        </MagneticButton>
                    </div>

                    {/* Mobile/Tablet Toggle Button */}
                    <button 
                        onClick={() => setMenuState(!menuState)} 
                        className="lg:hidden flex items-center justify-center p-2 text-white/80 hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        {menuState ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile/Tablet Expanded Menu (Morphing animation) */}
                <AnimatePresence>
                    {menuState && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="w-full lg:hidden flex flex-col overflow-visible"
                        >
                             <div className="border-t border-white/10 w-full pt-8 mt-4 flex flex-col gap-8 pb-6">
                                <ul className="flex flex-col gap-6 text-center">
                                    {menuItems.map(item => (
                                        <li key={item.name}>
                                            <a 
                                                href={item.href} 
                                                onClick={(e) => scrollToSection(e, item.href)}
                                                className="text-white/80 hover:text-white text-base uppercase tracking-[0.3em] font-medium transition-colors"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <Button asChild className="rounded-full bg-white text-black w-full text-xs uppercase tracking-widest py-5 font-bold shadow-2xl mt-2">
                                    <a href="https://wa.me/5492901584322?text=Quiero%20mas%20informacion%20sobre%20el%20servicio%20de%20dise%C3%B1o%20web%20premium" onClick={openWhatsApp}>Agendar Sesión</a>
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </header>
    )
}
