"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Star, Clock, Shield, Truck, CreditCard } from "lucide-react"

interface TestimonialProps {
  name: string
  rating: number
  comment: string
}

function Testimonial({ name, rating, comment }: TestimonialProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#1E1E1E] rounded-2xl p-5 border border-[#333333] hover:border-[#444444] transition-colors"
    >
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#FFC107] text-[#FFC107]" />
        ))}
      </div>
      <p className="text-white/90 text-sm leading-relaxed mb-4">
        {`"${comment}"`}
      </p>
      <p className="text-[#888888] text-sm font-medium">
        - {name}
      </p>
    </motion.div>
  )
}

function TrustBadge({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 bg-[#1E1E1E]/50 backdrop-blur-sm rounded-xl p-4 border border-[#333333]/50">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FF2C2C]/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-[#FF2C2C]" />
      </div>
      <div>
        <h4 className="text-white font-semibold text-sm">{title}</h4>
        <p className="text-[#888888] text-sm">{description}</p>
      </div>
    </div>
  )
}

export function SocialProofSection() {
  const trustBadges = [
    {
      icon: MapPin,
      title: "Localizacao",
      description: "R. Jaguapita, 1006 - Boa Vista"
    },
    {
      icon: Star,
      title: "Avaliacao",
      description: "4,8 de 5 no Google"
    },
    {
      icon: Clock,
      title: "Horario",
      description: "Aberto 24 Horas"
    },
    {
      icon: Shield,
      title: "Seguranca",
      description: "Ambiente monitorado"
    },
    {
      icon: Truck,
      title: "Entrega",
      description: "Rapida em toda PG"
    },
    {
      icon: CreditCard,
      title: "Pagamento",
      description: "PIX, Cartao, Dinheiro"
    }
  ]

  const testimonials = [
    {
      name: "Lucas M.",
      rating: 5,
      comment: "Entrega super rapida! Pedi as 2h da manha e chegou em 15 minutos. Produtos sempre gelados."
    },
    {
      name: "Amanda S.",
      rating: 5,
      comment: "Salvou nossa festa! Quando a bebida acabou, eles entregaram rapidinho. Super recomendo!"
    },
    {
      name: "Rafael C.",
      rating: 5,
      comment: "Precos justos, variedade enorme e entrega impecavel. O combo do gole e sensacional!"
    }
  ]

  return (
    <section className="py-16 bg-[#0D0D0D] overflow-hidden">
      {/* Facade Section - Prova Visual da Marca */}
      <div className="relative mb-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              NOSSA ESTRUTURA
            </h2>
            <p className="text-[#888888] text-lg max-w-2xl mx-auto">
              Mais que uma distribuidora. A experiencia da madrugada em um so lugar.
            </p>
          </motion.div>
        </div>

        {/* Facade Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[21/9] max-w-5xl mx-auto px-4"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#333333]">
            <Image
              src="/images/fachada-noturna.png"
              alt="Fachada da Rota do Gole - Distribuidora 24h"
              fill
              className="object-cover object-center"
              quality={90}
            />
            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-40" />
          </div>
        </motion.div>

        {/* Trust Badges over/below facade */}
        <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {trustBadges.map((badge, index) => (
              <TrustBadge key={index} {...badge} />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            O QUE NOSSOS CLIENTES DIZEM
          </h3>
          <p className="text-[#888888]">
            Confianca comprovada por milhares de clientes satisfeitos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
