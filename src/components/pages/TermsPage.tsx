import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { HeroHeader } from '../blocks/HeroSection'
import { FooterSection } from '../blocks/LandingSections'
import { TopographyPattern } from '../ui/topography-pattern'

export function TermsPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20 selection:text-white">
            <HeroHeader />
            
            <main className="pt-40 pb-20 relative overflow-hidden">
                <TopographyPattern className="opacity-10 pointer-events-none" />
                
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-light mb-4 uppercase tracking-tighter">
                            Términos y <span className="font-serif italic text-white/60">Condiciones</span>
                        </h1>
                        <p className="text-white/40 text-sm uppercase tracking-widest mb-16">Última actualización: Mayo 2026 • Ushuaia, Argentina</p>
                        
                        <div className="space-y-12 text-white/70 font-light leading-relaxed">
                            <section>
                                <h2 className="text-white text-xl uppercase tracking-widest mb-6 font-medium">1. Información General</h2>
                                <p>
                                    Este sitio web es operado por Studio Ush, una agencia de diseño digital con domicilio legal en la Ciudad de Ushuaia, Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur, República Argentina. En todo el sitio, los términos "nosotros", "nos" y "nuestro" se refieren a Studio Ush.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-xl uppercase tracking-widest mb-6 font-medium">2. Aceptación de los Términos</h2>
                                <p>
                                    Al acceder o utilizar cualquier parte de nuestro sitio, usted acepta quedar vinculado por estos Términos y Condiciones. Si no está de acuerdo con todos los términos y condiciones de este acuerdo, entonces no debe acceder al sitio web ni utilizar nuestros servicios.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-xl uppercase tracking-widest mb-6 font-medium">3. Propiedad Intelectual</h2>
                                <p>
                                    Todo el contenido incluido en este sitio, como texto, gráficos, logotipos, iconos de botones, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad de Studio Ush o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual de la República Argentina (Ley 11.723 y concordantes) e internacionales.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-xl uppercase tracking-widest mb-6 font-medium">4. Protección de Datos Personales</h2>
                                <p>
                                    En cumplimiento con la Ley 25.326 de Protección de Datos Personales, Studio Ush se compromete a proteger la privacidad de sus usuarios. Cualquier información proporcionada a través de nuestros formularios de contacto será tratada con confidencialidad y utilizada únicamente para los fines para los cuales fue suministrada.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-xl uppercase tracking-widest mb-6 font-medium">5. Limitación de Responsabilidad</h2>
                                <p>
                                    Studio Ush no garantiza que el sitio web esté libre de errores o que el acceso al mismo sea ininterrumpido. En ningún caso Studio Ush será responsable por cualquier daño directo, indirecto, incidental, punitivo o consecuente de cualquier tipo que surja de su uso de este sitio.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-xl uppercase tracking-widest mb-6 font-medium">6. Ley Aplicable y Jurisdicción</h2>
                                <p>
                                    Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de la República Argentina. Para cualquier controversia que pudiera surgir, las partes se someten a la jurisdicción de los Tribunales Ordinarios de la Ciudad de Ushuaia, renunciando a cualquier otro fuero o jurisdicción que pudiera corresponderles.
                                </p>
                            </section>

                            <section className="pt-8 border-t border-white/10">
                                <p className="text-sm">
                                    Para consultas legales adicionales, puede contactarnos directamente a través de nuestros canales de comunicación oficiales.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>
            
            <FooterSection />
        </div>
    )
}
