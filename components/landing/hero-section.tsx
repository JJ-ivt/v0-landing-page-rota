"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { WhatsAppButton } from "./whatsapp-button"
import { Star, Clock, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Hero Background - Bebidas Premium Cinematograficas */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-premium.png"
          alt="Bebidas geladas premium com condensacao e iluminacao neon"
          fill
          className="object-cover object-center"
          priority
          quality={95}
        />
        {/* Cinematic Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#121212]" />
        {/* Subtle Red/Yellow Neon Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FF2C2C]/10 via-transparent to-[#FFC107]/5" />
      </div>

      {/* Status Badge - Floating Top */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute top-4 left-4 right-4 z-20 flex justify-center"
      >
        <div className="flex items-center gap-2 bg-[#1E1E1E]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#25D366]/30">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
          </span>
          <span className="text-white text-sm font-medium">
            ABERTO AGORA - ENTREGA RAPIDA
          </span>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pb-24 pt-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              <span className="text-white">A Madrugada</span>
              <br />
              <span className="text-[#FF2C2C]">Nao Precisa Acabar.</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto text-pretty"
          >
            Bebidas geladas, conveniencia e entrega rapida em minutos direto na sua casa.
          </motion.p>

          {/* Mini Trust Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 text-white/70 text-sm"
          >
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-[#FFC107] fill-[#FFC107]" />
              <span>4.8 no Google</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#25D366]" />
              <span>Aberto 24h</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#FF2C2C]" />
              <span>Entrega Rapida</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-2"
          >
            <WhatsAppButton 
              size="lg" 
              className="w-full sm:w-auto px-10 py-5 text-lg shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-shadow duration-300"
            >
              PEDIR AGORA
            </WhatsAppButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs uppercase tracking-widest">Explorar</span>
          <div className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center p-1.5">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-white/50 rounded-full" 
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
