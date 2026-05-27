"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "@/contexts/cart-context"
import { Plus, ShoppingCart } from "lucide-react"

interface Product {
  id: string
  title: string
  description: string
  price: number
  priceFormatted: string
  imageSrc?: string
  imageAlt: string
  category: string
}

function ProductCard({ id, title, description, price, priceFormatted, imageSrc, imageAlt }: Omit<Product, "category">) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({ id, title, price, priceFormatted, imageSrc })
  }

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-[#1E1E1E] rounded-2xl overflow-hidden border border-[#333333] hover:border-[#FF2C2C]/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10"
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
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
            <div className="w-16 h-16 rounded-full bg-[#333333] flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-[#555555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-[#555555] text-xs">Adicionar imagem</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="space-y-1.5">
          <h3 className="text-base font-bold text-white leading-tight line-clamp-2">
            {title}
          </h3>
          <p className="text-[#888888] text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 pt-1">
          <span className="text-xl font-bold text-white">
            {priceFormatted}
          </span>
          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[#FF2C2C] hover:bg-[#e02525] text-white font-semibold px-4 py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-red-500/20 hover:shadow-red-500/40 text-sm"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Adicionar</span>
            <ShoppingCart className="w-4 h-4 sm:hidden" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

const categories = [
  { id: "combos", label: "Combos" },
  { id: "cervejas", label: "Cervejas" },
  { id: "premium", label: "Premium" },
  { id: "churrasco", label: "Churrasco" },
  { id: "conveniencia", label: "Conveniencia" },
]

const products: Product[] = [
  // Combos
  {
    id: "combo-kit-rota",
    title: "Kit Rota do Gole",
    description: "Energetico + Vodka + Gelo Saborizado + Copo Personalizado",
    price: 49.90,
    priceFormatted: "R$ 49,90",
    imageSrc: "",
    imageAlt: "Kit Rota do Gole",
    category: "combos"
  },
  {
    id: "combo-madrugada",
    title: "Kit Madrugada",
    description: "Whisky + 2 Energeticos + Gelo Premium",
    price: 89.90,
    priceFormatted: "R$ 89,90",
    imageSrc: "",
    imageAlt: "Kit Madrugada",
    category: "combos"
  },
  {
    id: "combo-resenha",
    title: "Kit Resenha",
    description: "12 Cervejas Variadas + Gelo + Snacks",
    price: 79.90,
    priceFormatted: "R$ 79,90",
    imageSrc: "",
    imageAlt: "Kit Resenha",
    category: "combos"
  },
  {
    id: "combo-churras",
    title: "Kit Churras Premium",
    description: "Carvao + 12 Brahma + 6 Heineken + Gelo",
    price: 119.90,
    priceFormatted: "R$ 119,90",
    imageSrc: "",
    imageAlt: "Kit Churras Premium",
    category: "combos"
  },
  // Cervejas
  {
    id: "heineken-12",
    title: "Heineken 12 Pack",
    description: "12 Long Necks 330ml - Sempre Geladas",
    price: 69.90,
    priceFormatted: "R$ 69,90",
    imageSrc: "",
    imageAlt: "Heineken 12 Pack",
    category: "cervejas"
  },
  {
    id: "brahma-12",
    title: "Brahma 12 Pack",
    description: "12 Latoes 473ml - Geladas",
    price: 54.90,
    priceFormatted: "R$ 54,90",
    imageSrc: "",
    imageAlt: "Brahma 12 Pack",
    category: "cervejas"
  },
  {
    id: "skol-12",
    title: "Skol 12 Pack",
    description: "12 Latoes 473ml - Redondinha",
    price: 49.90,
    priceFormatted: "R$ 49,90",
    imageSrc: "",
    imageAlt: "Skol 12 Pack",
    category: "cervejas"
  },
  {
    id: "budweiser-12",
    title: "Budweiser 12 Pack",
    description: "12 Long Necks 330ml - King of Beers",
    price: 64.90,
    priceFormatted: "R$ 64,90",
    imageSrc: "",
    imageAlt: "Budweiser 12 Pack",
    category: "cervejas"
  },
  // Premium
  {
    id: "whisky-jack",
    title: "Jack Daniels 1L",
    description: "Tennessee Whiskey Original",
    price: 159.90,
    priceFormatted: "R$ 159,90",
    imageSrc: "",
    imageAlt: "Jack Daniels",
    category: "premium"
  },
  {
    id: "whisky-red",
    title: "Red Label 1L",
    description: "Johnnie Walker Blended Scotch",
    price: 119.90,
    priceFormatted: "R$ 119,90",
    imageSrc: "",
    imageAlt: "Red Label",
    category: "premium"
  },
  {
    id: "vodka-absolut",
    title: "Absolut Vodka 1L",
    description: "Vodka Sueca Premium",
    price: 89.90,
    priceFormatted: "R$ 89,90",
    imageSrc: "",
    imageAlt: "Absolut Vodka",
    category: "premium"
  },
  {
    id: "energetico-red",
    title: "Red Bull 4 Pack",
    description: "4 Latas 250ml - Energy Drink",
    price: 39.90,
    priceFormatted: "R$ 39,90",
    imageSrc: "",
    imageAlt: "Red Bull 4 Pack",
    category: "premium"
  },
  // Churrasco
  {
    id: "carvao-5kg",
    title: "Carvao Premium 5kg",
    description: "Carvao de Eucalipto Selecionado",
    price: 29.90,
    priceFormatted: "R$ 29,90",
    imageSrc: "",
    imageAlt: "Carvao Premium",
    category: "churrasco"
  },
  {
    id: "gelo-5kg",
    title: "Gelo 5kg",
    description: "Gelo em Cubos - Sempre Disponivel",
    price: 12.90,
    priceFormatted: "R$ 12,90",
    imageSrc: "",
    imageAlt: "Gelo 5kg",
    category: "churrasco"
  },
  {
    id: "sal-grosso",
    title: "Sal Grosso 1kg",
    description: "Para Churrasco Perfeito",
    price: 6.90,
    priceFormatted: "R$ 6,90",
    imageSrc: "",
    imageAlt: "Sal Grosso",
    category: "churrasco"
  },
  {
    id: "kit-churrasco",
    title: "Kit Acendedor",
    description: "Acendedor + Alcool Gel",
    price: 19.90,
    priceFormatted: "R$ 19,90",
    imageSrc: "",
    imageAlt: "Kit Acendedor",
    category: "churrasco"
  },
  // Conveniencia
  {
    id: "cigarro-marlboro",
    title: "Cigarro Variados",
    description: "Diversas Marcas Disponiveis",
    price: 0,
    priceFormatted: "Consulte",
    imageSrc: "",
    imageAlt: "Cigarros",
    category: "conveniencia"
  },
  {
    id: "essencia-narguile",
    title: "Essencia Narguile",
    description: "Diversas Marcas e Sabores",
    price: 0,
    priceFormatted: "Consulte",
    imageSrc: "",
    imageAlt: "Essencia Narguile",
    category: "conveniencia"
  },
  {
    id: "agua-gelo",
    title: "Agua Mineral 1.5L",
    description: "Agua Gelada Sempre",
    price: 4.90,
    priceFormatted: "R$ 4,90",
    imageSrc: "",
    imageAlt: "Agua Mineral",
    category: "conveniencia"
  },
  {
    id: "refrigerante-2l",
    title: "Refrigerante 2L",
    description: "Coca-Cola, Guarana, Fanta",
    price: 11.90,
    priceFormatted: "R$ 11,90",
    imageSrc: "",
    imageAlt: "Refrigerante",
    category: "conveniencia"
  },
]

export function CombosSection() {
  const [activeCategory, setActiveCategory] = useState("combos")

  const filteredProducts = products.filter(p => p.category === activeCategory)

  return (
    <section className="py-16 px-4 bg-[#121212]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            NOSSOS PRODUTOS
          </h2>
          <p className="text-[#888888] text-lg max-w-2xl mx-auto">
            Selecione uma categoria e monte seu pedido
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-8 hide-scrollbar justify-start sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#FF2C2C] text-white shadow-lg shadow-red-500/30"
                  : "bg-[#1E1E1E] text-[#888888] hover:text-white hover:bg-[#2A2A2A] border border-[#333333]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
