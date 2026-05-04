import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { HeroHeader } from '../blocks/HeroSection'
import { FooterSection } from '../blocks/LandingSections'
import { TopographyPattern } from '../ui/topography-pattern'

export function PrivacyPage() {
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
                            Políticas de <span className="font-serif italic text-white/60">Privacidad</span>
                        </h1>
                        <p className="text-white/40 text-sm uppercase tracking-widest mb-16">Última actualización: Mayo 2026 • Ushuaia, Argentina</p>
                        
                        <div className="space-y-12 text-white/70 font-light leading-relaxed">
                            <section>
                                <h2 className="text-white text-xl uppercase tracking-widest mb-6 font-medium">1. Responsable del Tratamiento</h2>
                                <p>
                                    Studio Ush, con domicilio en la Ciudad de Ushuaia, Tierra del Fuego, Argentina, es el responsable del tratamiento de los datos personales recolectados a través de este sitio web, de conformidad con la Ley N° 25.326 de Protección de Datos Personales.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-xl uppercase tracking-widest mb-6 font-medium">2. Datos Recolectados</h2>
                                <p>
                                    Recolectamos información técnica de navegación (cookies) y datos proporcionados voluntariamente por usted a través de nuestros canales de contacto (WhatsApp o formularios), tales como nombre y número de teléfono, con el único fin de gestionar sus consultas y ofrecerle nuestros servicios premium.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-xl uppercase tracking-widest mb-6 font-medium">3. Finalidad del Tratamiento</h2>
                                <p>
                                    Sus datos personales serán utilizados para:
                                </p>
                                <ul className="list-disc pl-6 mt-4 space-y-2">
                                    <li>Responder a solicitudes de información y presupuestos.</li>
                                    <li>Personalizar y mejorar su experiencia de usuario en nuestro sitio.</li>
                                    <li>Envío de comunicaciones comerciales relacionadas con nuestros servicios (solo con su consentimiento previo).</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-white text-xl uppercase tracking-widest mb-6 font-medium">4. Sus Derechos (Derechos ARCO)</h2>
                                <p>
                                    Usted tiene derecho a acceder a sus datos personales, así como a solicitar la rectificación, actualización o supresión de los mismos en cualquier momento, de forma gratuita, enviándonos una notificación formal a nuestros canales de contacto oficiales.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-xl uppercase tracking-widest mb-6 font-medium">5. Seguridad de la Información</h2>
                                <p>
                                    Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración. Sus datos son almacenados en entornos seguros y el acceso a los mismos está estrictamente limitado.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-xl uppercase tracking-widest mb-6 font-medium">6. Cookies</h2>
                                <p>
                                    Este sitio utiliza cookies para analizar el tráfico y mejorar la funcionalidad. Usted puede configurar su navegador para rechazar todas las cookies, aunque esto podría afectar el correcto funcionamiento de algunas secciones de la web.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-xl uppercase tracking-widest mb-6 font-medium">7. Autoridad de Aplicación</h2>
                                <p>
                                    La Agencia de Acceso a la Información Pública (AAIP) es el órgano de control de la Ley N° 25.326 y tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.
                                </p>
                            </section>

                            <section className="pt-8 border-t border-white/10">
                                <p className="text-sm">
                                    Para cualquier duda sobre estas políticas, por favor contáctenos a través de nuestro botón de WhatsApp oficial.
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
