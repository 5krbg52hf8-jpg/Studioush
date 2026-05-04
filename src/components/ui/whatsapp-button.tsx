import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function WhatsAppFloating() {
    const [isHovered, setIsHovered] = useState(false)
    const whatsappNumber = "5491112345678" // User should change this
    const message = encodeURIComponent("Hola Studio Ush, me gustaría consultar por un proyecto web premium.")
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] pointer-events-auto"
        >
            <motion.div 
                className="relative flex items-center bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
                animate={{ 
                    width: isHovered ? "auto" : "64px",
                    paddingRight: isHovered ? "24px" : "0px"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                {/* Background Glow during hover */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent pointer-events-none"
                        />
                    )}
                </AnimatePresence>

                {/* Icon Circle */}
                <div className="w-16 h-16 flex items-center justify-center shrink-0">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-xl">
                        <MessageCircle size={20} strokeWidth={2.5} />
                    </div>
                </div>
                
                {/* Label Text */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.span 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="text-white text-[11px] uppercase tracking-[0.25em] font-medium whitespace-nowrap"
                        >
                            Hablemos
                        </motion.span>
                    )}
                </AnimatePresence>

                {/* Subtle Pulse Effect when NOT hovered */}
                <AnimatePresence>
                    {!isHovered && (
                        <motion.div 
                            className="absolute inset-0 rounded-full border border-white/20"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.a>
    )
}
