"use client"

import { CreditCard, Banknote, QrCode, Zap } from "lucide-react"

function PaymentMethod({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 bg-[#1E1E1E] rounded-xl p-4 border border-[#333333]">
      <Icon className="w-8 h-8 text-white" />
      <span className="text-white text-sm font-medium">{label}</span>
    </div>
  )
}

export function LogisticsSection() {
  const paymentMethods = [
    { icon: QrCode, label: "PIX" },
    { icon: CreditCard, label: "Cartão" },
    { icon: Banknote, label: "Dinheiro" }
  ]

  return (
    <section className="py-16 px-4 bg-[#121212]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            🚀 ENTREGA RELÂMPAGO
          </h2>
          <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
            Logística pensada para você não ficar esperando.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Map Container */}
          <div className="relative aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden border border-[#333333]">
            <div className="absolute inset-0 bg-[#1E1E1E]">
              {/* Stylized Map Placeholder - Dark Theme */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.7!2d-50.1636!3d-25.0915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA1JzI5LjQiUyA1MMKwMDknNDkuMCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(90%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Rota do Gole"
              />
              {/* Overlay with delivery radius indicator */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-48 h-48 rounded-full border-2 border-[#FF2C2C] border-dashed opacity-50 animate-pulse" />
                <div className="absolute w-4 h-4 bg-[#FF2C2C] rounded-full animate-ping" />
                <div className="absolute w-4 h-4 bg-[#FF2C2C] rounded-full" />
              </div>
            </div>
          </div>

          {/* Info Container */}
          <div className="space-y-8">
            {/* Delivery Speed Banner */}
            <div className="bg-gradient-to-r from-[#FF2C2C] to-[#CC2323] rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Zap className="w-8 h-8 text-white" />
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  TEMPO MÉDIO DE ENTREGA
                </span>
              </div>
              <p className="text-4xl sm:text-5xl font-bold text-white">
                7 a 15 minutos
              </p>
              <p className="text-white/80 mt-2">
                direto na sua casa!
              </p>
            </div>

            {/* Payment Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white text-center">
                💳 Formas de Pagamento
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {paymentMethods.map((method, index) => (
                  <PaymentMethod key={index} {...method} />
                ))}
              </div>
            </div>

            {/* Delivery Area */}
            <div className="bg-[#1E1E1E] rounded-xl p-4 border border-[#333333] text-center">
              <p className="text-[#A0A0A0] text-sm">
                📍 Área de entrega: <span className="text-white font-semibold">Toda Ponta Grossa</span>
              </p>
              <p className="text-[#A0A0A0] text-sm mt-1">
                Bairro Boa Vista e região com entrega expressa!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
