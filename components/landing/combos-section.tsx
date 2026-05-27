"use client"

import Image from "next/image"
import { WhatsAppButton } from "./whatsapp-button"

interface ComboCardProps {
  title: string
  description: string
  price: string
  imageSrc?: string
  imageAlt: string
}

function ComboCard({ title, description, price, imageSrc, imageAlt }: ComboCardProps) {
  const whatsappMessage = `Olá! Gostaria de pedir: ${title} - ${price}`

  return (
    <div className="group relative bg-[#1E1E1E] rounded-2xl overflow-hidden border border-[#333333] hover:border-[#FF2C2C]/50 transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-square w-full bg-[#2A2A2A] overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-[#333333] flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-[#666666] text-sm">Adicione uma imagem</p>
          </div>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white leading-tight">
            {title}
          </h3>
          <p className="text-[#A0A0A0] text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-2xl font-bold text-white">
            {price}
          </span>
          <WhatsAppButton 
            size="sm" 
            message={whatsappMessage}
            className="flex-shrink-0"
          >
            Adicionar ao WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </div>
  )
}

export function CombosSection() {
  const combos = [
    {
      title: 'Combo "Kit Rota do Gole"',
      description: "Energético + Vodka + Gelo de Coco + Copo.",
      price: "R$ 49,90",
      imageSrc: "", // Deixar vazio para placeholder editável
      imageAlt: "Kit Rota do Gole - Combo especial"
    },
    {
      title: 'Combo "Salva Narguilé" 🥩',
      description: "Descrição editável do combo",
      price: "R$ XX,XX",
      imageSrc: "", // Deixar vazio para placeholder editável
      imageAlt: "Combo Salva Narguilé"
    },
    {
      title: 'Combo "Noite Premium"',
      description: "Descrição editável do combo",
      price: "R$ XX,XX",
      imageSrc: "",
      imageAlt: "Combo Noite Premium"
    },
    {
      title: 'Combo "Churrasco Completo"',
      description: "Descrição editável do combo",
      price: "R$ XX,XX",
      imageSrc: "",
      imageAlt: "Combo Churrasco Completo"
    }
  ]

  return (
    <section className="py-16 px-4 bg-[#121212]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            🔥 COMBOS CAMPEÕES DA MADRUGADA
          </h2>
          <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
            Os combos mais pedidos pelos nossos clientes. Praticidade e economia em um só lugar.
          </p>
        </div>

        {/* Combos Grid - Mobile: 1 column, Desktop: 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {combos.map((combo, index) => (
            <ComboCard key={index} {...combo} />
          ))}
        </div>
      </div>
    </section>
  )
}
