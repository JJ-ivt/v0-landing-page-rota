"use client"

import { MapPin, Star, Clock, Shield } from "lucide-react"

interface TestimonialProps {
  name: string
  rating: number
  comment: string
}

function Testimonial({ name, rating, comment }: TestimonialProps) {
  return (
    <div className="bg-[#1E1E1E] rounded-2xl p-5 border border-[#333333]">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-white/90 text-sm leading-relaxed mb-4">
        {`"${comment}"`}
      </p>
      <p className="text-[#A0A0A0] text-sm font-medium">
        — {name}
      </p>
    </div>
  )
}

function TrustBadge({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4 bg-[#1E1E1E] rounded-xl p-4 border border-[#333333]">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FF2C2C]/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-[#FF2C2C]" />
      </div>
      <div>
        <h4 className="text-white font-semibold text-sm">{title}</h4>
        <p className="text-[#A0A0A0] text-sm">{description}</p>
      </div>
    </div>
  )
}

export function SocialProofSection() {
  const trustBadges = [
    {
      icon: MapPin,
      title: "Localização",
      description: "R. Jaguapitã, 1006 – Boa Vista, Ponta Grossa/PR"
    },
    {
      icon: Star,
      title: "Avaliação",
      description: "4,8 de 5 Estrelas no Google"
    },
    {
      icon: Clock,
      title: "Disponibilidade",
      description: "Aberto 24 Horas, todos os dias"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Ambiente seguro e monitorado"
    }
  ]

  const testimonials = [
    {
      name: "Lucas M.",
      rating: 5,
      comment: "Entrega super rápida! Pedi às 2h da manhã e chegou em menos de 15 minutos. Produtos sempre gelados. Melhor distribuidora de PG!"
    },
    {
      name: "Amanda S.",
      rating: 5,
      comment: "Salvou nossa festa! Quando a bebida acabou, eles entregaram rapidinho. Atendimento excelente pelo WhatsApp. Super recomendo!"
    },
    {
      name: "Rafael C.",
      rating: 5,
      comment: "Preços justos, variedade enorme e entrega impecável. Sempre peço aqui, nunca me decepcionou. O combo do gole é sensacional!"
    }
  ]

  return (
    <section className="py-16 px-4 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            ⭐ POR QUE ESCOLHER A ROTA DO GOLE?
          </h2>
          <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
            Confiança comprovada por milhares de clientes satisfeitos em Ponta Grossa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Trust Badges Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              📍 Nossa Estrutura
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustBadges.map((badge, index) => (
                <TrustBadge key={index} {...badge} />
              ))}
            </div>
          </div>

          {/* Testimonials Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              💬 O que nossos clientes dizem
            </h3>
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
