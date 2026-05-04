"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie, X } from "lucide-react"
import { Button } from "./button"

/**
 * CookieBanner - A premium, glassmorphic cookie consent component.
 * Designed to fit the Studio Ush luxury aesthetic.
 */
export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check for existing consent
    const consent = localStorage.getItem("studio-ush-cookies")
    
    if (!consent) {
      // Premium feel: slight delay before appearing
      const timer = setTimeout(() => setIsVisible(true), 2500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAction = (type: 'accept' | 'decline') => {
    localStorage.setItem("studio-ush-cookies", type)
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ y: 20, opacity: 0, scale: 0.98, filter: "blur(5px)" }}
          transition={{ 
            type: "spring", 
            damping: 28, 
            stiffness: 150,
            duration: 0.8
          }}
          className="fixed bottom-6 left-6 right-6 z-[1000] mx-auto max-w-[420px] md:bottom-10 md:right-10 md:left-auto"
        >
          <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 p-7 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] backdrop-blur-[20px]">
            {/* Animated Ambient Light */}
            <motion.div 
              animate={{ 
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-[80px] pointer-events-none" 
            />
            
            <div className="relative z-10 flex flex-col gap-6">
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white shadow-inner">
                  <Cookie size={22} strokeWidth={1.5} className="text-white/80" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-serif text-xl tracking-tight text-white leading-none">Visión Personalizada</h3>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 mt-1.5 font-medium">Experiencia Digital</span>
                </div>
              </div>
              
              {/* Body */}
              <p className="text-[13px] leading-[1.6] text-white/50 font-light text-pretty">
                En Studio Ush, cada detalle importa. Utilizamos cookies para refinar nuestra entrega creativa y asegurar que tu viaje por nuestro universo digital sea tan exclusivo como nuestras marcas.
              </p>
              
              {/* Actions */}
              <div className="flex flex-col gap-3 sm:flex-row mt-2">
                <Button 
                  onClick={() => handleAction('accept')}
                  className="flex-1 rounded-full bg-white text-black hover:bg-gray-200 h-12 text-[10px] uppercase tracking-[0.2em] font-bold shadow-xl transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Abrazar Todo
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => handleAction('decline')}
                  className="flex-1 rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 h-12 text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-500"
                >
                  Lo Escencial
                </Button>
              </div>
              
              {/* Footer Link */}
              <div className="text-center">
                <a href="#privacy" className="text-[9px] uppercase tracking-[0.15em] text-white/20 hover:text-white/60 transition-colors duration-300">
                  Explorar Política de Privacidad
                </a>
              </div>
            </div>
            
            {/* Close Button */}
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute right-6 top-6 text-white/10 hover:text-white/40 transition-colors duration-300"
              aria-label="Cerrar"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
