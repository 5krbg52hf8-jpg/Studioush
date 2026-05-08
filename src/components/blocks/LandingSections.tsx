import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Marquee } from '../ui/marquee'
import { ShinyButton } from '../ui/shiny-button'
import { MagneticButton } from '../ui/magnetic-button'
import { cn } from '../../lib/utils'
import { Logo } from '../ui/logo'
import { TopographyPattern } from '../ui/topography-pattern'
import { TextRevealByWord } from '../ui/text-reveal'

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
        <section id="agency" className="w-full bg-[#0a0a0a] relative z-20">
            <TopographyPattern className="opacity-15" />
            <TextRevealByWord text="Tu marca es de primer nivel. Pero si tu web no transmite esa autoridad, le estás regalando tus mejores clientes a la competencia." />
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
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col justify-center glass backdrop-blur-md h-full">
                                <p className="text-6xl font-light text-white mb-2">0%</p>
                                <p className="text-xs uppercase tracking-widest text-white/50 font-medium">Plantillas Genéricas</p>
                            </div>
                        </motion.div>

                        {/* Stat 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col justify-center glass backdrop-blur-md h-full">
                                <p className="text-6xl font-light text-white mb-2">&lt; 3s</p>
                                <p className="text-xs uppercase tracking-widest text-white/50 font-medium">Tiempo de Carga</p>
                            </div>
                        </motion.div>

                        {/* Stat 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="md:col-span-2"
                        >
                            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col justify-center glass backdrop-blur-md h-full">
                                <p className="text-6xl font-light text-white mb-2">100%</p>
                                <p className="text-xs uppercase tracking-widest text-white/50 font-medium">Arquitectura Digital a Medida</p>
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
            title: "Tu Vidriera 24/7",
            desc: "Diseñamos experiencias inmersivas que comunican autoridad al instante. Cero plantillas, 100% visuales a medida para que te perciban como el referente que sos.",
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
            title: "Ingeniería de Alto Rendimiento",
            desc: "El prestigio exige rapidez. Programamos tu web desde cero con las tecnologías más rápidas del mercado para garantizar tiempos de carga milimétricos.",
            span: "col-span-1",
            gradient: "from-white/[0.05] to-transparent",
            extra: null
        },
        {
            title: "Estrategia de Conversión",
            desc: "No alcanza con una web linda. Redactamos textos persuasivos que filtran curiosos y convierten a visitantes en clientes decididos a pagar lo que valés.",
            span: "col-span-1",
            gradient: "from-white/[0.04] to-transparent",
            extra: null
        },
        {
            title: "Soporte Evolutivo",
            desc: "Nos encargamos del código, la seguridad y los servidores. Vos dedicate a escalar tu negocio, nosotros nos aseguramos de que tu tecnología nunca falle.",
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
    const { scrollYProgress } = useScroll({ target: targetRef })
    
    // Transform vertical scroll to horizontal scroll
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

    const [isDesktop, setIsDesktop] = React.useState(true)
    React.useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 768)
        checkDesktop()
        window.addEventListener('resize', checkDesktop)
        return () => window.removeEventListener('resize', checkDesktop)
    }, [])

    return (
        <section id="portfolio" ref={targetRef} className={cn("w-full bg-[#050505] relative z-20", isDesktop ? "h-[300vh]" : "py-24")}>
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

                    <h2 className="text-5xl md:text-7xl font-light text-white tracking-tight mb-8 drop-shadow-2xl">
                        Dejá de competir por precio.<br/>
                        <span className="font-serif italic text-gold">Empezá a competir por autoridad.</span>
                    </h2>
                    <p className="text-white/50 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-16">
                        Trabajamos con dueños de negocio que entienden el valor de una primera impresión impecable. Si buscás una web que justifique tus tarifas, hablemos.
                    </p>
                    
                    <MagneticButton distance={0.5}>
                        <a href="https://wa.me/5492901584322?text=Quiero%20mas%20informacion%20sobre%20el%20servicio%20de%20dise%C3%B1o%20web%20premium" target="_blank" rel="noopener noreferrer" className="block bg-white/5 rounded-full p-2 border border-white/10 glass backdrop-blur-md hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-700">
                            <ShinyButton className="px-10 py-4 text-sm uppercase tracking-widest font-medium">Hablemos de tu Proyecto</ShinyButton>
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
