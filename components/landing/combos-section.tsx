"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useCart } from "@/contexts/cart-context"
import { Plus, ShoppingCart } from "lucide-react"

interface ComboCardProps {
  id: string
  title: string
  description: string
  price: number
  priceFormatted: string
  imageSrc?: string
  imageAlt: string
}

function ComboCard({ id, title, description, price, priceFormatted, imageSrc, imageAlt }: ComboCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id,
      title,
      price,
      priceFormatted,
      imageSrc,
    })
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-[#1E1E1E] rounded-2xl overflow-hidden border border-[#333333] hover:border-[#FF2C2C]/50 transition-all duration-300"
    >
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
            {priceFormatted}
          </span>
          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[#FF2C2C] hover:bg-[#e02525] text-white font-bold px-5 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-red-500/20 hover:shadow-red-500/40"
          >
            <Plus className="w-5 h-5" />
            <span className="hidden sm:inline">Adicionar</span>
            <ShoppingCart className="w-5 h-5 sm:hidden" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export function CombosSection() {
  const combos = [
    {
      id: "combo-kit-rota",
      title: 'Combo "Kit Rota do Gole"',
      description: "Energetico + Vodka + Gelo de Coco + Copo.",
      price: 49.90,
      priceFormatted: "R$ 49,90",
      imageSrc: "",
      imageAlt: "Kit Rota do Gole - Combo especial"
    },
    {
      id: "combo-salva-narguile",
      title: 'Combo "Salva Narguile"',
      description: "Descricao editavel do combo",
      price: 0,
      priceFormatted: "R$ XX,XX",
      imageSrc: "",
      imageAlt: "Combo Salva Narguile"
    },
    {
      id: "combo-noite-premium",
      title: 'Combo "Noite Premium"',
      description: "Descricao editavel do combo",
      price: 0,
      priceFormatted: "R$ XX,XX",
      imageSrc: "",
      imageAlt: "Combo Noite Premium"
    },
    {
      id: "combo-churrasco",
      title: 'Combo "Churrasco Completo"',
      description: "Descricao editavel do combo",
      price: 0,
      priceFormatted: "R$ XX,XX",
      imageSrc: "",
      imageAlt: "Combo Churrasco Completo"
    }
  ]

  return (
    <section className="py-16 px-4 bg-[#121212]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            COMBOS CAMPEOES DA MADRUGADA
          </h2>
          <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
            Os combos mais pedidos pelos nossos clientes. Praticidade e economia em um so lugar.
          </p>
        </motion.div>

        {/* Combos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {combos.map((combo) => (
            <ComboCard key={combo.id} {...combo} />
          ))}
        </div>
      </div>
    </section>
  )
}
