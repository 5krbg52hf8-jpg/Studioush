import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { PricingBackground } from "../ui/pricing-background";

const plans = [
  {
    name: "Para Arrancar",
    description: "Ideal si necesitás estar en internet ya mismo con una imagen impecable.",
    price: 120,
    yearlyPrice: 1200,
    buttonText: "Comenzar Ahora",
    popular: false,
    includes: [
      "Web de una sola página (Landing Page)",
      "Velocidad de carga ultra rápida",
      "Hosting de alta gama y SSL",
      "Responsive en cualquier dispositivo",
      "Botón de WhatsApp siempre a mano",
      "Soporte técnico y mantenimiento",
      "2 cambios de contenido al mes",
    ],
    notIncluded: [
      "Actualizaciones ilimitadas",
      "Medición de visitas y publicidad (Píxeles)",
      "Web de varias secciones",
      "Tu pedido va primero (Prioridad 24hs)",
      "Diseño de banners e imágenes",
      "Conexión con sistemas de reservas o turnos",
    ]
  },
  {
    name: "Crecimiento",
    description: "El plan que eligen los que quieren que su web sea su mejor vendedor.",
    price: 200,
    yearlyPrice: 2000,
    buttonText: "Comenzar Ahora",
    popular: true,
    includes: [
      "Web Completa (Varias secciones)",
      "Velocidad de carga ultra rápida",
      "Hosting de alta gama y SSL",
      "Responsive en cualquier dispositivo",
      "Botón de WhatsApp siempre a mano",
      "Soporte técnico y mantenimiento",
      "Actualizaciones Ilimitadas",
      "Píxeles para anuncios (Meta/Google)",
      "Optimización para Google (SEO básico)",
      "Conexión con tus sistemas (Turnos, reservas o chats automáticos)",
    ],
    notIncluded: [
      "Tu pedido va primero (Prioridad 24hs)",
      "Diseño de banners e imágenes",
    ]
  },
  {
    name: "Tranquilidad Total",
    description: "Para empresas que no tienen tiempo que perder y quieren un socio tecnológico.",
    price: 400,
    yearlyPrice: 4000,
    buttonText: "Consultar VIP",
    popular: false,
    includes: [
      "Web Completa sin límite de secciones",
      "Velocidad de carga ultra rápida",
      "Hosting de alta gama y SSL",
      "Responsive en cualquier dispositivo",
      "Botón de WhatsApp siempre a mano",
      "Soporte técnico y mantenimiento",
      "Actualizaciones Ilimitadas",
      "Píxeles para anuncios (Meta/Google)",
      "Optimización avanzada para buscadores",
      "Resolución prioritaria (< 24hs)",
      "Diseño de banners y promos",
      "Conexiones avanzadas y automatizaciones entre plataformas",
    ],
    notIncluded: []
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (isYearly: boolean) => void }) => {
  const [selected, setSelected] = useState(false);

  const handleSwitch = (value: boolean) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center z-10 relative">
      <div className="relative mx-auto flex w-fit rounded-full bg-black/50 border border-white/10 p-1 backdrop-blur-md">
        <button
          onClick={() => handleSwitch(false)}
          className={cn(
            "relative z-10 w-fit h-10 rounded-full sm:px-6 px-4 font-medium transition-colors duration-300",
            !selected ? "text-black" : "text-white/60 hover:text-white"
          )}
        >
          {!selected && (
            <motion.span
              layoutId="pricing-switch"
              className="absolute inset-0 rounded-full bg-white"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-20">Mensual</span>
        </button>

        <button
          onClick={() => handleSwitch(true)}
          className={cn(
            "relative z-10 w-fit h-10 rounded-full sm:px-6 px-4 font-medium transition-colors duration-300",
            selected ? "text-black" : "text-white/60 hover:text-white"
          )}
        >
          {selected && (
            <motion.span
              layoutId="pricing-switch"
              className="absolute inset-0 rounded-full bg-gold"
              style={{ backgroundColor: 'var(--gold)' }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-20 flex items-center gap-2">
            Anual
            <span className={cn(
                "text-[10px] px-2 py-0.5 rounded-full border whitespace-nowrap",
                selected ? "border-black/20 text-black/80" : "border-white/20 text-white/50"
            )}>
              2 Meses Gratis
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

// Animated Number Component
const AnimatedPrice = ({ price }: { price: number }) => {
  return (
    <div className="flex h-[1.2em] overflow-hidden relative leading-none">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={price}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="inline-block"
        >
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(price)}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="planes" className="w-full bg-[#030303] py-32 md:py-48 relative z-20 overflow-hidden border-t border-white/5">
      {/* New WebGL Shader Background */}
      <PricingBackground />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <article className="text-center mb-16 max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-semibold mb-6">Inversión Transparente</p>
            <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
              Planes que se adaptan a tu <span className="font-serif italic text-gold">crecimiento</span>
            </h2>
            <p className="text-white/50 text-lg font-light leading-relaxed mb-10 drop-shadow-md">
              Olvidate de los problemas técnicos. Nosotros nos encargamos de todo mientras vos vendés.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
          >
            <PricingSwitch onSwitch={setIsYearly} />
          </motion.div>
        </article>

        <div className="grid md:grid-cols-3 max-w-6xl gap-8 py-6 mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={cn(
                "relative flex flex-col rounded-3xl overflow-hidden glass bg-[#050505]/60 hover:scale-[1.02] transition-transform duration-500",
                plan.popular 
                  ? "border-[var(--gold)]/40 shadow-[0_0_80px_-20px_rgba(212,168,68,0.25)] bg-[#0a0a0a]/80" 
                  : "border-white/10"
              )}
            >
              {/* Popular indicator badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
              )}
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-[var(--gold)]/20 border border-[var(--gold)]/50 text-[var(--gold-light)] text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-medium">
                  Más Elegido
                </div>
              )}

              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <h3 className="text-2xl text-white font-medium mb-3">{plan.name}</h3>
                <p className="text-white/50 text-sm font-light mb-8 h-10">{plan.description}</p>
                
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-light text-white tracking-tight">
                    <AnimatedPrice price={isYearly ? plan.yearlyPrice : plan.price} />
                  </span>
                  <span className="text-white/40 ml-2 relative top-[-6px]">
                    / {isYearly ? "año" : "mes"}
                  </span>
                </div>

                <div className="flex-1 space-y-8 mb-10 flex flex-col">
                  {/* Incluido */}
                  <div>
                    <p className={cn("text-xs uppercase tracking-widest mb-4 font-semibold", plan.popular ? "text-[var(--gold)]" : "text-white/80")}>Lo que incluye</p>
                    <ul className="space-y-4">
                      {plan.includes.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 group">
                          <div className={cn(
                            "mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors",
                            plan.popular ? "bg-[var(--gold)]/20 shadow-[0_0_10px_rgba(212,168,68,0.2)]" : "bg-white/10"
                          )}>
                            <svg className={cn("w-3 h-3", plan.popular ? "text-[var(--gold)]" : "text-white/80")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className={cn("text-sm font-medium transition-colors", plan.popular ? "text-white group-hover:text-[var(--gold-light)]" : "text-white/80 group-hover:text-white")}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* No Incluido */}
                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <div className="border-t border-white/5 pt-6">
                      <p className="text-xs uppercase tracking-widest text-white/30 mb-4 font-semibold">No incluido</p>
                      <ul className="space-y-4">
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3 opacity-50">
                            <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center">
                              <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </div>
                            <span className="text-sm font-light text-white/60 line-through decoration-white/20">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <a 
                  href={`https://wa.me/5492901584322?text=Quiero%20consultar%20por%20el%20plan%20${plan.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-auto w-full py-4 rounded-xl text-center font-medium text-sm transition-all duration-300 uppercase tracking-wider",
                    plan.popular
                      ? "bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold-light)] text-black hover:shadow-[0_0_30px_rgba(212,168,68,0.4)] hover:scale-105"
                      : "bg-white/[0.03] text-white border border-white/10 hover:bg-white/10 hover:scale-105"
                  )}
                >
                  {plan.buttonText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="mt-20 max-w-3xl mx-auto text-center"
        >
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 glass flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            <div>
              <h4 className="text-white text-lg font-medium mb-2">¿Necesitás algo más complejo?</h4>
              <p className="text-white/50 text-sm font-light">Si lo tuyo es un E-commerce con carrito de compras o una plataforma con funciones especiales, armamos un presupuesto a tu medida.</p>
            </div>
            <a 
              href="https://wa.me/5492901584322?text=Necesito%20un%20proyecto%20web%20a%20medida"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3 bg-white text-black rounded-xl text-sm font-bold hover:scale-105 transition-transform"
            >
              Agendar charla
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
