import React from 'react'
import { motion, useScroll, useTransform, animate } from 'framer-motion'
import { Marquee } from '../ui/marquee'
import { ShinyButton } from '../ui/shiny-button'
import { MagneticButton } from '../ui/magnetic-button'
import { cn } from '../../lib/utils'
import { Logo } from '../ui/logo'
import { TopographyPattern } from '../ui/topography-pattern'
import { RotatingText } from '../ui/rotating-text'

function AnimatedCounter({ from, to, duration = 2, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) {
    const nodeRef = React.useRef<HTMLSpanElement>(null);

    React.useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;

        const controls = animate(from, to, {
            duration: duration,
            ease: "easeOut",
            onUpdate(value: number) {
                node.textContent = value.toFixed(0) + suffix;
            },
        });

        return () => controls.stop();
    }, [from, to, duration, suffix]);

    return <span ref={nodeRef}>{from}{suffix}</span>;
}

// --- Tech Stack Icons ---
const NextIcon = () => (
    <svg viewBox="0 0 256 256" className="w-8 h-8 fill-white/40 group-hover:fill-white transition-colors">
        <defs>
            <mask id="next-mask-icon">
                <rect width="256" height="256" fill="white" />
                <path d="M84 70v116m88-116v84M84 70l112 168" stroke="black" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </mask>
        </defs>
        <circle cx="128" cy="128" r="126" fill="currentColor" mask="url(#next-mask-icon)" />
    </svg>
)

const ViteIcon = () => (
    <svg viewBox="0 0 256 256" className="w-8 h-8 fill-white/40 group-hover:fill-white transition-colors">
        <polygon points="0,64 80,45 70,250" fill="currentColor" />
        <polygon points="100,42 256,0 78,256" fill="currentColor" />
    </svg>
)

const ReactIcon = () => (
    <svg viewBox="-11.5 -10.232 23 20.463" className="w-8 h-8 fill-none stroke-white/40 group-hover:stroke-white transition-colors" strokeWidth="1">
        <circle r="2.05" fill="currentColor"/>
        <g stroke="currentColor">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
    </svg>
)

const FramerIcon = () => (
    <svg viewBox="0 0 256 384" className="w-6 h-8 fill-white/40 group-hover:fill-white transition-colors">
        <path d="M0 0h256v128H128L0 0Zm0 128h128l128 128H128v128L0 256V128Z"/>
    </svg>
)

const TypeScriptIcon = () => (
    <svg viewBox="0 0 256 256" className="w-8 h-8 fill-white/40 group-hover:fill-white transition-colors">
        <path d="M256 0v256H0V0h256z" fill="currentColor" opacity=".1"/>
        <path d="M150.5 200.5v27.6c4.5 2.3 9.8 4 15.9 5.2 6.1 1.2 12.6 1.7 19.4 1.7 6.6 0 12.9-.6 18.9-1.9 6-1.3 11.2-3.4 15.7-6.3 4.5-2.9 8-6.7 10.7-11.4 2.6-4.7 3.9-10.5 3.9-17.4 0-5-.7-9.4-2.2-13.2a30.7 30.7 0 00-6.5-10.1c-2.8-2.9-6.2-5.6-10.1-7.9-3.9-2.3-8.4-4.5-13.3-6.6-3.6-1.5-6.9-2.9-9.8-4.4-2.9-1.4-5.3-2.8-7.3-4.3-2-1.5-3.6-3-4.7-4.7-1.1-1.6-1.6-3.5-1.6-5.6 0-1.9.5-3.6 1.5-5.1s2.4-2.8 4.1-3.9c1.8-1.1 4-1.9 6.6-2.5 2.6-.6 5.5-.9 8.6-.9 2.3 0 4.7.2 7.3.5 2.6.3 5.1.9 7.7 1.6 2.6.7 5.1 1.6 7.6 2.7 2.5 1.1 4.7 2.4 6.8 3.8v-25.8c-4.2-1.6-8.8-2.8-13.8-3.6-5-.8-10.7-1.2-17.1-1.2-6.6 0-12.8.7-18.7 2.1-5.9 1.4-11 3.6-15.5 6.6-4.5 3-8 6.8-10.6 11.4-2.6 4.6-3.9 10.2-3.9 16.6 0 8.2 2.4 15.2 7.1 21.1 4.8 5.8 12 10.7 21.6 14.8a291.5 291.5 0 0110.6 4.6c3.3 1.5 6.1 3 8.5 4.7 2.4 1.6 4.3 3.4 5.7 5.3 1.4 1.9 2.1 4 2.1 6.5 0 2.1-.4 3.8-1.3 5-.9 1.5-2.2 2.8-3.9 4-1.8 1.1-3.9 2-6.6 2.6-2.6.6-5.7 1-9.2 1-6 0-11.9-1.1-17.8-3.2-5.9-2.1-11.3-5.3-16.3-9.5L150.5 200.5zM104.5 131.7V233h-28.1V131.7H41V109h99v22.7h-35.5z" fill="currentColor"/>
    </svg>
)


const TailwindIcon = () => (
    <svg viewBox="0 0 128 128" className="w-10 h-6 fill-white/40 group-hover:fill-white transition-colors">
        <path d="M64 32C48 32 38 40 34 56c6-8 13-11 21-9 5 1 8 5 12 9 6 6 12 14 23 14 16 0 26-8 30-24-6 8-13 11-21 9-5-1-8-5-12-9-6-6-12-14-23-14zM34 80c-16 0-26 8-30 24 6-8 13-11 21-9 5 1 8 5 12 9 6 6 12 14 23 14 16 0 26-8 30-24-6 8-13 11-21 9-5-1-8-5-12-9-6-6-12-14-23-14z" />
    </svg>
)

// --- Tech Stack for Authority Ribbon ---
const TechStackContent = () => (
    <>
        <div className="flex items-center gap-4 group cursor-default">
            <NextIcon />
            <span className="text-white/40 text-xl font-medium tracking-widest uppercase group-hover:text-white transition-colors">Next.js</span>
        </div>
        <div className="flex items-center gap-4 group cursor-default">
            <ReactIcon />
            <span className="text-white/40 text-xl font-medium tracking-widest uppercase group-hover:text-white transition-colors">React</span>
        </div>
        <div className="flex items-center gap-4 group cursor-default">
            <TypeScriptIcon />
            <span className="text-white/40 text-xl font-medium tracking-widest uppercase group-hover:text-white transition-colors">TypeScript</span>
        </div>
        <div className="flex items-center gap-4 group cursor-default">
            <TailwindIcon />
            <span className="text-white/40 text-xl font-medium tracking-widest uppercase group-hover:text-white transition-colors">Tailwind CSS</span>
        </div>
        <div className="flex items-center gap-4 group cursor-default">
            <FramerIcon />
            <span className="text-white/40 text-xl font-medium tracking-widest uppercase group-hover:text-white transition-colors">Framer</span>
        </div>
        <div className="flex items-center gap-4 group cursor-default">
            <ViteIcon />
            <span className="text-white/40 text-xl font-medium tracking-widest uppercase group-hover:text-white transition-colors">Vite</span>
        </div>
    </>
)

const TechStack = () => (
    <div className="flex gap-24 items-center shrink-0">
        <TechStackContent />
        <TechStackContent />
        <TechStackContent />
    </div>
)

export function AuthorityRibbon() {
    return (
        <section className="w-full bg-[#050505] py-12 border-b border-white/5 relative z-20">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-semibold">
                    Ingeniería de Alto Rendimiento
                </p>
            </div>
            <Marquee speed={40} direction="left" className="opacity-60">
                <TechStack />
            </Marquee>
        </section>
    )
}

export function ProblemSection() {
    return (
        <section id="agency" className="w-full bg-[#050505] py-20 md:py-32 relative z-20 overflow-hidden border-b border-white/5">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(232,197,71,0.02)_0%,transparent_60%)] pointer-events-none blur-3xl mix-blend-screen" />
            <TopographyPattern className="opacity-[0.03] pointer-events-none mix-blend-overlay" />

            <div className="mx-auto max-w-3xl lg:max-w-6xl px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16 md:mb-24"
                >
                    <div className="w-fit mb-6 mx-auto">
                        <span className="rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold border border-gold/20 bg-gold/5 text-gold">
                            El Estándar Premium
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight mb-6">
                        No competimos por precio.<br className="hidden md:block"/>
                        <span className="font-serif italic text-gold">Competimos por autoridad.</span>
                    </h2>
                    <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                        A diferencia de opciones genéricas que hunden tu posicionamiento, desarrollamos herramientas digitales diseñadas para dominar tu mercado.
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-6 gap-4">
                        
                        {/* Card 1: 0% Plantillas */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="relative col-span-full flex flex-col justify-center overflow-hidden rounded-[2rem] bg-[#080808] border border-white/5 shadow-2xl lg:col-span-2 group hover:border-gold/20 transition-colors duration-500 min-h-[300px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                            <div className="relative m-auto size-fit p-8 flex flex-col items-center w-full">
                                <div className="relative flex h-24 w-56 items-center justify-center">
                                    <svg className="absolute inset-0 size-full text-white/5" viewBox="0 0 254 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <motion.path
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                                            d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                                            stroke="url(#paint0_linear_gold)"
                                            strokeWidth="2"
                                        />
                                        <defs>
                                            <linearGradient id="paint0_linear_gold" x1="127" y1="0" x2="127" y2="104" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#D4AF37" />
                                                <stop offset="1" stopColor="#D4AF37" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <span className="mx-auto block w-fit text-5xl font-light text-white z-10 group-hover:scale-110 transition-transform duration-500">
                                        0<span className="text-gold">%</span>
                                    </span>
                                </div>
                                <div className="mt-8 text-center">
                                    <h3 className="text-xl font-medium text-white mb-2">0% Plantillas Genéricas</h3>
                                    <p className="text-white/50 text-sm leading-relaxed max-w-[250px]">
                                        Diseño artesanal. Cada línea de código es exclusiva y está calculada para proyectar la máxima autoridad de tu marca.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Arquitectura Persuasiva (Radar/Funnel Animation) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative col-span-full overflow-hidden rounded-[2rem] bg-[#080808] border border-white/5 shadow-2xl sm:col-span-3 lg:col-span-2 group hover:border-gold/20 transition-colors duration-500 min-h-[300px] flex flex-col items-center justify-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                            <div className="p-8 flex flex-col items-center justify-center w-full">
                                <div className="relative flex aspect-square size-28 items-center justify-center mb-8">
                                    {/* Target Rings */}
                                    <motion.div 
                                        animate={{ scale: [1, 1.8, 2.5], opacity: [0.8, 0, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                        className="absolute inset-0 rounded-full border border-gold/50" 
                                    />
                                    <motion.div 
                                        animate={{ scale: [1, 1.8, 2.5], opacity: [0.8, 0, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
                                        className="absolute inset-0 rounded-full border border-gold/50" 
                                    />
                                    <div className="absolute inset-0 rounded-full border border-white/20 bg-white/[0.02]" />
                                    {/* Center Core */}
                                    <div className="size-10 rounded-full bg-gradient-to-tr from-gold to-yellow-200 shadow-[0_0_25px_rgba(212,175,55,0.6)] z-10 flex items-center justify-center">
                                         <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" className="size-5"><path d="M5 12l5 5L20 7"/></svg>
                                    </div>
                                    
                                    {/* Particles moving towards center */}
                                    {[...Array(6)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ x: Math.cos(i * Math.PI/3) * 70, y: Math.sin(i * Math.PI/3) * 70, opacity: 0, scale: 0.5 }}
                                            animate={{ x: 0, y: 0, opacity: [0, 1, 0], scale: 1 }}
                                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.25 }}
                                            className="absolute size-2 rounded-full bg-white/80 z-20 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                                        />
                                    ))}
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-medium text-white mb-2">Arquitectura Persuasiva</h3>
                                    <p className="text-white/50 text-sm leading-relaxed max-w-[250px] mx-auto">
                                        Eliminamos la fricción y transformamos visitas en leads calificados mediante flujos de conversión de alto rendimiento.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3: Propiedad (Shield/Icon) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative col-span-full overflow-hidden rounded-[2rem] bg-[#080808] border border-white/5 shadow-2xl sm:col-span-3 lg:col-span-2 group hover:border-gold/20 transition-colors duration-500 min-h-[300px] flex flex-col items-center justify-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                            <div className="p-8 flex flex-col items-center text-center">
                                <div className="relative flex aspect-square size-24 rounded-full border border-white/10 before:absolute before:-inset-3 before:rounded-full before:border before:border-white/5 mb-8 items-center justify-center group-hover:scale-110 transition-transform duration-500 bg-white/[0.02]">
                                    <div className="absolute inset-0 rounded-full bg-gold/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="size-10 text-white/80 group-hover:text-gold transition-colors duration-500 relative z-10"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                </div>
                                <h3 className="text-xl font-medium text-white mb-2">Propiedad Absoluta</h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    Sin ataduras a plataformas SaaS restrictivas. Tu código fuente, base de datos y diseño te pertenecen al 100%.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 4: Escalabilidad (Lightning) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative col-span-full overflow-hidden rounded-[2rem] bg-[#080808] border border-white/5 shadow-2xl lg:col-span-3 group hover:border-gold/20 transition-colors duration-500 min-h-[250px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                            <div className="grid h-full sm:grid-cols-2">
                                <div className="relative z-10 flex flex-col justify-between space-y-8 p-8 md:p-10">
                                    <div className="relative flex aspect-square size-14 rounded-full border border-white/10 before:absolute before:-inset-2 before:rounded-full before:border before:border-white/5 bg-white/[0.02] items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="size-6 text-white group-hover:text-gold transition-colors duration-500"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-medium text-white transition">Escalabilidad Extrema</h3>
                                        <p className="text-white/50 text-sm leading-relaxed">Infraestructura ultra-rápida preparada para crecer y soportar picos masivos de tráfico exponencial.</p>
                                    </div>
                                </div>
                                <div className="relative -mb-6 -mr-6 mt-6 h-fit border-l border-t border-white/5 p-6 py-6 sm:ml-6 rounded-tl-[2rem] overflow-hidden">
                                    <div className="absolute left-4 top-4 flex gap-1.5">
                                        <span className="block size-2 rounded-full bg-white/20"></span>
                                        <span className="block size-2 rounded-full bg-white/20"></span>
                                        <span className="block size-2 rounded-full bg-white/20"></span>
                                    </div>
                                    <svg className="w-[150%] mt-8 opacity-40 group-hover:opacity-100 transition-opacity duration-700" viewBox="0 0 366 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <motion.path
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                                            className="text-gold"
                                            d="M1 179.796L4.05663 172.195V183.933L7.20122 174.398L8.45592 183.933L10.0546 186.948V155.455L12.6353 152.613V145.122L15.3021 134.71V149.804V155.455L16.6916 160.829L18.1222 172.195V158.182L19.8001 152.613L21.4105 148.111V137.548L23.6863 142.407V126.049L25.7658 127.87V120.525L27.2755 118.066L29.1801 112.407V123.822L31.0426 120.525V130.26L32.3559 134.71L34.406 145.122V137.548L35.8982 130.26L37.1871 126.049L38.6578 134.71L40.659 138.977V130.26V126.049L43.7557 130.26V123.822L45.972 112.407L47.3391 103.407V92.4726L49.2133 98.4651V106.053L52.5797 89.7556L54.4559 82.7747L56.1181 87.9656L58.9383 89.7556V98.4651L60.7617 103.407L62.0545 123.822L63.8789 118.066L65.631 122.082L68.5479 114.229L70.299 109.729L71.8899 118.066L73.5785 123.822V130.26L74.9446 134.861L76.9243 127.87L78.352 134.71V138.977L80.0787 142.407V152.613L83.0415 142.407V130.26L86.791 123.822L89.0121 116.645V122.082L90.6059 127.87L92.3541 131.77L93.7104 123.822L95.4635 118.066L96.7553 122.082V137.548L99.7094 140.988V131.77L101.711 120.525L103.036 116.645V133.348L104.893 136.218L106.951 140.988L108.933 134.71L110.797 130.26L112.856 140.988V148.111L115.711 152.613L117.941 145.122L119.999 140.988L121.501 148.111L123.4 152.613L125.401 158.182L127.992 152.613L131.578 146.76V155.455L134.143 158.182L135.818 164.629L138.329 158.182L140.612 160.829L144.117 166.757L146.118 155.455L147.823 149.804L151.02 152.613L154.886 145.122L158.496 140.988V133.348L161.295 127.87V122.082L162.855 116.645V109.729L164.83 103.407L166.894 109.729L176.249 98.4651L178.254 106.169L180.77 98.4651V81.045L182.906 69.1641L184.8 56.8669L186.477 62.8428L187.848 79.7483L188.849 106.169L191.351 79.7483L193.485 75.645V98.4651L196.622 94.4523L198.623 87.4228V79.7483L200.717 75.645L202.276 81.045V89.3966L203.638 113.023L205.334 99.8037L207.164 94.4523L208.982 98.4651V102.176L211.267 107.64L212.788 81.045L214.437 66.0083L216.19 62.8428L217.941 56.8669V73.676V79.7483L220.28 75.645L222.516 66.0083V73.676H226.174V84.8662L228.566 98.4651L230.316 75.645L233.61 94.4523V104.25L236.882 102.176L239.543 113.023L241.057 98.4651L243.604 94.4523L244.975 106.169L245.975 87.4228L247.272 89.3966L250.732 84.8662L251.733 96.7549L254.644 94.4523L257.452 99.8037L259.853 91.3111L261.193 84.8662L264.162 75.645L265.808 87.4228L267.247 58.4895L269.757 66.0083L276.625 13.5146L273.33 58.4895L276.25 67.6563L282.377 20.1968L281.37 58.4895V66.0083L283.579 75.645L286.033 56.8669L287.436 73.676L290.628 77.6636L292.414 84.8662L294.214 61.3904L296.215 18.9623L300.826 0.947876L297.531 56.8669L299.973 62.8428L305.548 22.0598L299.755 114.956L301.907 105.378L304.192 112.688V94.9932L308.009 80.0829L310.003 94.9932L311.004 102.127L312.386 105.378L315.007 112.688L316.853 98.004L318.895 105.378L321.257 94.9932L324.349 100.81L325.032 80.0829L327.604 61.5733L329.357 74.9864L332.611 52.6565L334.352 48.5552L335.785 55.2637L338.377 59.5888V73.426L341.699 87.5181L343.843 93.4347L347.714 82.1171L350.229 78.6821L351.974 89.7556L353.323 94.9932L355.821 93.4347L357.799 102.127L360.684 108.794L363.219 98.004L365 89.7556"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 5: Conectividad (Users/Systems) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="relative col-span-full overflow-hidden rounded-[2rem] bg-[#080808] border border-white/5 shadow-2xl lg:col-span-3 group hover:border-gold/20 transition-colors duration-500 min-h-[250px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                            <div className="grid h-full sm:grid-cols-2">
                                <div className="relative z-10 flex flex-col justify-between space-y-8 p-8 md:p-10">
                                    <div className="relative flex aspect-square size-14 rounded-full border border-white/10 before:absolute before:-inset-2 before:rounded-full before:border before:border-white/5 bg-white/[0.02] items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="size-6 text-white group-hover:text-gold transition-colors duration-500"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M21 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-medium text-white transition">Sistemas Integrados</h3>
                                        <p className="text-white/50 text-sm leading-relaxed">Conectamos tus ecosistemas vitales: analítica web, píxeles de marketing y sistemas de reservas top.</p>
                                    </div>
                                </div>
                                <div className="relative mt-6 sm:-my-6 sm:-mr-6 flex items-center justify-center py-6 border-t sm:border-t-0 sm:border-l border-white/5">
                                    <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                                    
                                    <div className="relative flex w-full flex-col justify-center space-y-8 z-10">
                                        <motion.div 
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.8 }}
                                            className="relative flex w-[calc(50%+1.5rem)] items-center justify-end gap-3"
                                        >
                                            <span className="block h-fit rounded-lg border border-white/10 bg-[#111] px-3 py-1.5 text-xs text-white shadow-sm font-medium">Meta Pixel</span>
                                            <div className="size-10 rounded-full border border-white/10 p-2 bg-[#050505] flex items-center justify-center">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-500"><path d="M20.25 10.63a8.91 8.91 0 00-6.19-2.58c-2.45 0-4.7 1-6.27 2.65-1.57 1.66-2.53 3.93-2.53 6.3 0 2.37.96 4.64 2.53 6.3 1.57 1.66 3.82 2.65 6.27 2.65 2.1 0 4.02-.75 5.56-2.02A10.05 10.05 0 0112 19.5c-2.07 0-3.95-.83-5.3-2.18A7.51 7.51 0 014.5 12c0-2.07.83-3.95 2.18-5.3A7.51 7.51 0 0112 4.5c2.07 0 3.95.83 5.3 2.18.66.66 1.19 1.43 1.58 2.26H20.25z"/></svg>
                                            </div>
                                        </motion.div>

                                        <motion.div 
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 1 }}
                                            className="relative ml-[calc(50%-1.5rem)] flex items-center gap-3"
                                        >
                                            <div className="size-10 rounded-full border border-white/10 p-2 bg-[#050505] flex items-center justify-center">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="text-gold"><path d="M13.111 11.23h3.555v11.54h-3.555zM20.444 4.544h3.556v18.225h-3.556zM5.778 15.674h3.555v7.095H5.778zM0 19.11h3.556v3.66H0z"/></svg>
                                            </div>
                                            <span className="block h-fit rounded-lg border border-white/10 bg-[#111] px-3 py-1.5 text-xs text-white shadow-sm font-medium">Google Analytics</span>
                                        </motion.div>

                                        <motion.div 
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 1.2 }}
                                            className="relative flex w-[calc(50%+1.5rem)] items-center justify-end gap-3"
                                        >
                                            <span className="block h-fit rounded-lg border border-white/10 bg-[#111] px-3 py-1.5 text-xs text-white shadow-sm font-medium">Calendly</span>
                                            <div className="size-10 rounded-full border border-white/10 p-2 bg-[#050505] flex items-center justify-center">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="text-indigo-400"><path d="M19.117 0H4.883C2.185 0 0 2.185 0 4.883v14.234C0 21.815 2.185 24 4.883 24h14.234C21.815 24 24 21.815 24 19.117V4.883C24 2.185 21.815 0 19.117 0zM12 18.066a6.066 6.066 0 1 1 0-12.132 6.066 6.066 0 0 1 0 12.132zm7.65-10.457h-3.21v-3.21h3.21v3.21z"/></svg>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export function StatsSection() {
    return (
        <section id="filosofia" className="w-full bg-[#050505] py-32 md:py-48 relative z-20 overflow-hidden border-y border-white/5">
            <TopographyPattern className="opacity-20" />
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-8">
                            En el mercado premium, una web lenta <span className="font-serif italic text-gold">te cuesta ventas todos los días.</span>
                        </h2>
                        <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
                            Las plantillas genéricas destruyen tu posicionamiento. Desarrollamos con ingeniería de ultra-rendimiento para que la experiencia digital de tus clientes esté a la altura de tu servicio real.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Stat 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
                        >
                            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col justify-center glass backdrop-blur-md h-full hover:border-[var(--gold)]/30 hover:shadow-[0_0_40px_rgba(232,197,71,0.15)] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden cursor-default">
                                <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <p className="text-6xl md:text-7xl font-light text-white mb-2 group-hover:text-gold transition-colors duration-500 relative z-10 flex items-center">
                                    +<AnimatedCounter from={0} to={40} suffix="%" />
                                </p>
                                <p className="text-xs uppercase tracking-widest text-white/50 font-medium relative z-10">Retención de Usuarios</p>
                            </div>
                        </motion.div>

                        {/* Stat 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.3 }}
                        >
                            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col justify-center glass backdrop-blur-md h-full hover:border-[var(--gold)]/30 hover:shadow-[0_0_40px_rgba(232,197,71,0.15)] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden cursor-default">
                                <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <p className="text-6xl md:text-7xl font-light text-white mb-2 group-hover:text-gold transition-colors duration-500 relative z-10">24/7</p>
                                <p className="text-xs uppercase tracking-widest text-white/50 font-medium relative z-10">Captación de Leads</p>
                            </div>
                        </motion.div>

                        {/* Stat 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.3 }}
                            className="md:col-span-2"
                        >
                            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col justify-center glass backdrop-blur-md h-full hover:border-[var(--gold)]/30 hover:shadow-[0_0_40px_rgba(232,197,71,0.15)] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden cursor-default">
                                <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <p className="text-6xl md:text-7xl font-light text-white mb-2 group-hover:text-gold transition-colors duration-500 relative z-10 flex items-center justify-center">
                                    <AnimatedCounter from={0} to={100} suffix="%" />
                                </p>
                                <p className="text-xs uppercase tracking-widest text-white/50 font-medium text-center relative z-10">Enfoque Total en Ventas</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function WaaSSection() {
    const services = [
        {
            title: "Diseño Web a Medida",
            desc: "Tu web diseñada desde cero, sin plantillas genéricas. Pensada para que te posiciones como el líder indiscutido de tu sector desde el primer click.",
            span: "col-span-1 md:col-span-2",
            gradient: "from-white/[0.08] to-transparent",
            extra: (
                <div className="absolute inset-x-0 top-0 bottom-0 opacity-40 group-hover:opacity-100 transition-all duration-700 pointer-events-none flex flex-col items-center justify-start hidden md:flex overflow-hidden pt-12">
                    {/* Abstract Browser/App Window */}
                    <div className="w-[80%] max-w-lg h-[120%] rounded-t-xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl relative shadow-2xl flex flex-col transform group-hover:scale-105 transition-transform duration-700 ease-out translate-y-8 group-hover:translate-y-2">
                        {/* Top Bar */}
                        <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02]">
                            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            <div className="ml-4 h-2 w-1/3 rounded-full bg-white/5" />
                        </div>
                        {/* Content Area */}
                        <div className="flex-1 p-6 flex gap-6">
                            {/* Sidebar mock */}
                            <div className="w-1/4 h-full rounded-lg border border-white/5 flex flex-col gap-3 p-3 bg-white/[0.01]">
                                <div className="h-2 w-full rounded-full bg-white/10" />
                                <div className="h-2 w-3/4 rounded-full bg-white/10" />
                                <div className="h-2 w-5/6 rounded-full bg-white/10" />
                                <div className="mt-8 h-20 w-full rounded-md border border-white/5 bg-white/[0.02]" />
                            </div>
                            {/* Main content mock */}
                            <div className="flex-1 h-full flex flex-col gap-4">
                                <div className="h-32 w-full rounded-lg border border-white/5 bg-gradient-to-br from-white/[0.05] to-transparent relative overflow-hidden">
                                    <div className="absolute bottom-4 left-4 w-1/2 h-3 rounded-full bg-white/10" />
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-24 flex-1 rounded-lg border border-white/5 bg-white/[0.02]" />
                                    <div className="h-24 flex-1 rounded-lg border border-white/5 bg-white/[0.02]" />
                                </div>
                            </div>
                        </div>
                        
                        {/* Ambient Glow behind the window */}
                        <div className="absolute -inset-20 bg-white/5 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    </div>
                </div>
            )
        },
        {
            title: "Velocidad Extrema",
            desc: "Una web lenta te hace perder ventas. Usamos la mejor tecnología para que tu página cargue al instante y funcione perfecta en todos los dispositivos.",
            span: "col-span-1",
            gradient: "from-white/[0.05] to-transparent",
            extra: null
        },
        {
            title: "Textos que Venden",
            desc: "No se trata solo de que se vea linda. Escribimos mensajes claros y persuasivos para que tus visitas sientan confianza y se conviertan en clientes reales.",
            span: "col-span-1",
            gradient: "from-white/[0.04] to-transparent",
            extra: null
        },
        {
            title: "Nos Encargamos de Todo",
            desc: "Vos dedicate a hacer crecer tu negocio y atender a tus clientes. Nosotros nos ocupamos del código, el servidor y el mantenimiento para que no te preocupes por nada.",
            span: "col-span-1 md:col-span-2",
            gradient: "from-white/[0.03] via-white/[0.05] to-transparent",
            extra: (
                <div className="absolute inset-x-0 top-0 bottom-0 opacity-40 group-hover:opacity-100 transition-all duration-700 pointer-events-none flex flex-col items-center justify-start hidden md:flex overflow-hidden pt-12">
                    {/* Abstract Server/Infrastructure Graphic */}
                    <div className="w-[80%] max-w-lg h-[120%] rounded-t-xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl relative shadow-2xl flex flex-col transform group-hover:scale-105 transition-transform duration-700 ease-out translate-y-8 group-hover:translate-y-2 p-6 gap-4">
                        {/* Server Rack 1 */}
                        <div className="w-full h-16 rounded-lg border border-white/10 bg-gradient-to-r from-white/[0.05] to-transparent relative overflow-hidden flex items-center px-6 gap-4">
                            <div className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                            <div className="w-2 h-2 rounded-full bg-white/20" />
                            <div className="w-2 h-2 rounded-full bg-white/20" />
                            <div className="flex-1" />
                            <div className="h-2 w-1/3 rounded-full bg-white/5" />
                        </div>
                        {/* Server Rack 2 */}
                        <div className="w-full h-16 rounded-lg border border-white/10 bg-gradient-to-r from-white/[0.05] to-transparent relative overflow-hidden flex items-center px-6 gap-4">
                            <div className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" style={{ animationDelay: '0.5s' }} />
                            <div className="w-2 h-2 rounded-full bg-white/20" />
                            <div className="w-2 h-2 rounded-full bg-white/20" />
                            <div className="flex-1" />
                            <div className="h-2 w-1/4 rounded-full bg-white/5" />
                        </div>
                        {/* Server Rack 3 */}
                        <div className="w-full h-16 rounded-lg border border-white/10 bg-gradient-to-r from-white/[0.05] to-transparent relative overflow-hidden flex items-center px-6 gap-4">
                            <div className="w-2 h-2 rounded-full bg-blue-500/50 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" style={{ animationDelay: '1s' }} />
                            <div className="w-2 h-2 rounded-full bg-white/20" />
                            <div className="w-2 h-2 rounded-full bg-white/20" />
                            <div className="flex-1" />
                            <div className="h-2 w-1/2 rounded-full bg-white/5" />
                        </div>
                        {/* Code snippets */}
                        <div className="mt-4 flex flex-col gap-3">
                            <div className="h-2 w-1/2 rounded-full bg-white/10" />
                            <div className="h-2 w-3/4 rounded-full bg-white/5" />
                        </div>
                        
                        {/* Ambient Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    </div>
                </div>
            )
        }
    ]

    return (
        <section id="servicios" className="w-full bg-[#050505] py-32 relative z-20 overflow-hidden">
            <TopographyPattern className="opacity-15" />
            {/* Topography/Wind lines simulated via SVG background or gradient */}
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_60%)] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="mb-20 text-center md:text-left"
                >
                    <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-semibold mb-6">Nuestra Metodología</p>
                    <h2 className="text-4xl md:text-6xl font-light text-white">Dominio <span className="font-serif italic text-gold">Digital</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: i * 0.15 }}
                            className={cn(service.span)}
                        >
                            <div className={cn(
                                "group relative overflow-hidden rounded-[2rem] bg-white/[0.02] border border-white/10 p-10 md:p-14 transition-all duration-700 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-sm flex flex-col justify-end h-full"
                            )}>
                                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0", service.gradient)} />
                                {service.extra}
                                
                                <h3 className="text-2xl md:text-3xl text-white font-medium mb-6 relative z-10 flex items-start justify-between gap-4">
                                    <span>{service.title}</span>
                                    <span className="text-white/20 font-serif italic text-sm group-hover:text-white/60 transition-colors shrink-0">0{i + 1}</span>
                                </h3>
                                <p className="text-white/50 text-lg font-light leading-relaxed max-w-2xl relative z-10 group-hover:text-white/80 transition-colors duration-500">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 flex justify-center"
                >
                    <MagneticButton distance={0.3}>
                        <a 
                            href="https://wa.me/5492901584322?text=Quiero%20mas%20informacion%20sobre%20el%20servicio%20de%20dise%C3%B1o%20web%20premium" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group relative flex items-center gap-4 bg-white/[0.03] border border-white/10 px-10 py-5 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-500 glass"
                        >
                            <span className="text-white text-[11px] uppercase tracking-[0.3em] font-medium">Quiero mi Web Premium</span>
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-500">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </a>
                    </MagneticButton>
                </motion.div>
            </div>
        </section>
    )
}

export function ProcessSection() {
    const steps = [
        {
            num: "01",
            title: "Descubrimiento & Estrategia",
            desc: "Analizamos tu mercado y competencia. No diseñamos ni programamos nada sin tener clara la estrategia para captar a tu cliente ideal."
        },
        {
            num: "02",
            title: "Arquitectura Visual",
            desc: "Diseñamos flujos orientados a la conversión. Cada detalle está pensado para retener la atención y proyectar estatus."
        },
        {
            num: "03",
            title: "Código Custom",
            desc: "Desarrollo desde cero. Animaciones fluidas y optimización extrema para que la percepción de calidad sea instantánea en cualquier dispositivo."
        },
        {
            num: "04",
            title: "Lanzamiento & Escala",
            desc: "El lanzamiento es solo el principio. Monitoreamos y mantenemos tu web para asegurar que siempre estés un paso por delante."
        }
    ]

    return (
        <section id="proceso" className="w-full bg-[#0a0a0a] py-32 md:py-48 relative z-20 border-t border-white/5">
            <TopographyPattern className="opacity-10" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                
                {/* Left side: Sticky Title */}
                <div className="relative">
                    <div className="md:sticky md:top-40">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1 }}
                        >
                            <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-semibold mb-6">El Método Ush</p>
                            <h2 className="text-4xl md:text-6xl font-light text-white leading-tight mb-8">
                                Precisión <br/><span className="font-serif italic text-gold">Quirúrgica.</span>
                            </h2>
                            <p className="text-white/60 text-lg font-light leading-relaxed max-w-sm">
                                Un proceso probado para transformar marcas ordinarias en referencias absolutas de su sector.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Right side: The Steps */}
                <div className="flex flex-col gap-24 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent hidden md:block" />

                    {steps.map((step, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="relative flex gap-8 md:gap-16"
                        >
                            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center relative z-10 glass backdrop-blur-md">
                                <span className="text-sm font-medium text-white/40 group-hover:text-white transition-colors">{step.num}</span>
                            </div>
                            <div className="pt-2">
                                <h3 className="text-2xl text-white font-medium mb-4">{step.title}</h3>
                                <p className="text-white/60 text-lg font-light leading-relaxed">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-32 flex justify-center"
                >
                    <MagneticButton distance={0.3}>
                        <a 
                            href="https://wa.me/5492901584322?text=Quiero%20mas%20informacion%20sobre%20el%20servicio%20de%20dise%C3%B1o%20web%20premium" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="relative px-10 py-5 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform duration-500 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
                        >
                            Agendar Consulta Gratuita
                        </a>
                    </MagneticButton>
                </motion.div>
            </div>
        </section>
    )
}

export function PortfolioSection() {
    const targetRef = React.useRef(null)
    const { scrollYProgress } = useScroll({ 
        target: targetRef,
        offset: ["start start", "end end"]
    })
    
    // Transform vertical scroll to horizontal scroll — move exactly one project width
    const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-65vw"])

    const [isDesktop, setIsDesktop] = React.useState(true)
    React.useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 768)
        checkDesktop()
        window.addEventListener('resize', checkDesktop)
        return () => window.removeEventListener('resize', checkDesktop)
    }, [])

    return (
        <section id="portfolio" ref={targetRef} className={cn("w-full bg-[#050505] relative z-20", isDesktop ? "h-[400vh]" : "py-24")}>
            <div className={cn("flex flex-col justify-center overflow-hidden", isDesktop ? "sticky top-0 h-screen" : "relative")}>
                <TopographyPattern className="opacity-15" />
                
                <div className="max-w-7xl mx-auto px-6 w-full mb-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                    >
                        <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-semibold mb-6">Selección de Proyectos</p>
                        <h2 className="text-4xl md:text-6xl font-light text-white">Casos de <span className="font-serif italic text-gold">Éxito</span></h2>
                    </motion.div>
                </div>

                <div className="flex items-center px-6 md:px-[10vw]">
                    <motion.div style={isDesktop ? { x } : {}} className={cn("flex w-full", isDesktop ? "gap-8 md:gap-16" : "flex-col gap-12")}>
                        {/* Project 1 */}
                        <div className="group relative w-full md:w-[60vw] h-[60vh] md:h-[70vh] shrink-0 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl flex flex-col justify-end">
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-700 z-10" />
                            <img 
                                src="/portfolio-1.jpg" 
                                alt="Arakur Hospitality" 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                            />
                            <div className="relative z-20 p-8 md:p-16 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent">
                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
                                    <div>
                                        <p className="text-white/70 tracking-[0.3em] uppercase text-[10px] mb-3 md:mb-4 font-semibold">Hospitalidad Premium</p>
                                        <h3 className="text-3xl md:text-5xl text-white font-medium mb-4 md:mb-6">Arakur Resort</h3>
                                        <p className="text-white/60 font-light max-w-lg leading-relaxed text-sm md:text-base">Rediseño integral de la experiencia de reserva. Se incrementaron las reservas directas en un 42% reduciendo la dependencia de agencias de terceros.</p>
                                    </div>
                                    <div className="text-left md:text-right shrink-0 mt-4 md:mt-0">
                                        <p className="text-4xl md:text-5xl font-light text-white mb-1 md:mb-2">+42%</p>
                                        <p className="text-[10px] uppercase tracking-widest text-white/50">Conversión Directa</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="group relative w-full md:w-[60vw] h-[60vh] md:h-[70vh] shrink-0 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl flex flex-col justify-end">
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-700 z-10" />
                            <img 
                                src="/portfolio-2.jpg" 
                                alt="Ice & Fire Watches" 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                            />
                            <div className="relative z-20 p-8 md:p-16 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent">
                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
                                    <div>
                                        <p className="text-white/70 tracking-[0.3em] uppercase text-[10px] mb-3 md:mb-4 font-semibold">E-Commerce Premium</p>
                                        <h3 className="text-3xl md:text-5xl text-white font-medium mb-4 md:mb-6">Ice & Fire</h3>
                                        <p className="text-white/60 font-light max-w-lg leading-relaxed text-sm md:text-base">Plataforma e-commerce inmersiva con renderizado 3D de productos. El tiempo medio en la página aumentó a 4 minutos.</p>
                                    </div>
                                    <div className="text-left md:text-right shrink-0 mt-4 md:mt-0">
                                        <p className="text-4xl md:text-5xl font-light text-white mb-1 md:mb-2">4m</p>
                                        <p className="text-[10px] uppercase tracking-widest text-white/50">Tiempo de Retención</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export function TestimonialSection() {
    return (
        <section className="w-full bg-[#0a0a0a] py-32 md:py-48 relative z-20 border-y border-white/5 overflow-hidden">
            <TopographyPattern className="opacity-15" />
            
            {/* Ambient subtle light for testimonial */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="w-3 h-3 bg-white/30 rotate-45 mx-auto mb-12" />
                    <p className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-white leading-tight mb-16 drop-shadow-2xl max-w-5xl mx-auto">
                        "Nuestro filtro es claro: si no podemos desarrollar la mejor web de tu sector, <span className="text-gold">no tomamos el proyecto</span>."
                    </p>
                    <div className="inline-flex flex-col items-center">
                        <div className="w-px h-12 bg-white/20 mb-6" />
                        <p className="text-white font-medium tracking-[0.3em] uppercase text-xs mb-2">Nuestro Estándar</p>
                        <p className="text-white/40 text-sm font-light">Studio Ush</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export function FooterSection() {
    return (
        <footer id="contact" className="w-full bg-[#050505] pt-32 pb-12 relative z-20 overflow-hidden">
            <TopographyPattern className="opacity-15 pointer-events-none" />

            {/* Viento Polar / Aurora effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[600px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none opacity-60" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="text-center mb-32"
                >

                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-light text-white tracking-tight mb-8 drop-shadow-2xl text-center flex flex-col items-center">
                        <span className="block mb-2 sm:mb-4">Dejá de competir por precio.</span>
                        <span className="font-serif italic text-gold flex flex-col md:flex-row items-center justify-center gap-y-2 md:gap-x-3 w-full">
                            <span>Empezá a competir por</span>
                            <span className="inline-block w-[6em] text-center md:text-left">
                                <RotatingText 
                                    words={["autoridad.", "calidad.", "presencia.", "impacto.", "excelencia."]} 
                                    interval={2500}
                                    className="!h-[1.2em] text-gold w-full"
                                />
                            </span>
                        </span>
                    </h2>
                    <p className="text-white/50 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-16">
                        Trabajamos con negocios que entienden el valor de una primera impresión impecable. Si buscás una web que trabaje por vos, hablemos.
                    </p>
                    
                    <MagneticButton distance={0.5}>
                        <a href="https://wa.me/5492901584322?text=Quiero%20mas%20informacion%20sobre%20el%20servicio%20de%20dise%C3%B1o%20web%20premium" target="_blank" rel="noopener noreferrer" className="block bg-white/5 rounded-full p-1 border border-white/10 glass backdrop-blur-md hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-700">
                            <ShinyButton className="px-6 py-3 sm:px-10 sm:py-4 text-xs sm:text-sm uppercase tracking-widest font-medium">Hablemos de tu Web</ShinyButton>
                        </a>
                    </MagneticButton>
                </motion.div>

                {/* Footer Links */}
                <div className="w-full border-t border-white/10 pt-16 pb-8 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6 relative">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <a href="/" className="flex items-center group">
                            <Logo size={96} className="group-hover:scale-105 transition-transform duration-500" />
                        </a>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mt-2">
                            © {new Date().getFullYear()} Studio Ush.
                        </p>
                    </div>
                    
                    <div className="flex flex-col items-center md:items-end gap-6">
                        <div className="flex gap-6 text-white/50">
                            <a href="https://instagram.com/studio_ush" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:-translate-y-1 transition-all duration-300">
                                <span className="sr-only">Instagram</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="https://facebook.com/studioush." target="_blank" rel="noopener noreferrer" className="hover:text-white hover:-translate-y-1 transition-all duration-300">
                                <span className="sr-only">Facebook</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="#" className="hover:text-white hover:-translate-y-1 transition-all duration-300">
                                <span className="sr-only">Behance</span>
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
                            </a>
                        </div>
                        <div className="flex gap-4 text-[10px] uppercase tracking-wider text-white/30">
                            <a href="#privacy" className="hover:text-white/70 transition-colors">Políticas de Privacidad</a>
                            <span>|</span>
                            <a href="#terms" className="hover:text-white/70 transition-colors">Términos y Condiciones</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
