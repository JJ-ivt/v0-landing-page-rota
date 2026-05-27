"use client"

import Image from "next/image"
import { WhatsAppButton } from "./whatsapp-button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Hero Background Image - Fachada da Loja */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fachada.jpg"
          alt="Fachada da Rota do Gole - Distribuidora 24h"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#121212]" />
      </div>

      {/* Status Badge - Floating */}
      <div className="absolute top-4 right-4 z-20">
        <div className="flex items-center gap-2 bg-[#1E1E1E]/90 backdrop-blur-sm px-4 py-2 rounded-full border border-[#333333]">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
          </span>
          <span className="text-white text-sm font-medium">
            🟢 ABERTO AGORA | Entrega Rápida em toda a Cidade
          </span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pb-20 pt-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
            <span className="text-white">A Bebida Acabou e a Sede Ficou?</span>
            <br />
            <span className="text-[#FF2C2C]">Nós Resolvemos em Minutos.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto text-pretty">
            Peça agora pelo WhatsApp e receba sem sair de casa ou da festa. 
            Aberto 24h todos os dias. O maior estoque de Ponta Grossa na sua porta.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <WhatsAppButton 
              size="lg" 
              className="w-full sm:w-auto px-12 py-6 text-xl"
            >
              PEDIR AGORA 🍻
            </WhatsAppButton>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
