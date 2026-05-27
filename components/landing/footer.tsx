"use client"

import { Instagram, Facebook, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-[#0A0A0A] border-t border-[#1E1E1E]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          {/* Logo/Brand */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">
              Rota do Gole
            </h3>
            <p className="text-[#A0A0A0] text-sm max-w-md mx-auto">
              Distribuidora 24h & Mercearia Completa. Tudo o que você precisa em um só lugar.
            </p>
          </div>

          {/* Address */}
          <div className="flex items-center justify-center gap-2 text-[#A0A0A0] text-sm">
            <MapPin className="w-4 h-4 text-[#FF2C2C]" />
            <span>R. Jaguapitã, 1006 – Boa Vista, Ponta Grossa – PR</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://instagram.com/rota_do_gole" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#A0A0A0] hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@rota_do_gole</span>
            </a>
            <a 
              href="https://facebook.com/rota.do.gole.2025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#A0A0A0] hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span className="text-sm">rota.do.gole.2025</span>
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#1E1E1E]" />

          {/* Copyright */}
          <p className="text-[#666666] text-xs">
            © {new Date().getFullYear()} Rota do Gole. Todos os direitos reservados.
          </p>
          <p className="text-[#666666] text-xs">
            Beba com moderação. Venda proibida para menores de 18 anos.
          </p>
        </div>
      </div>
    </footer>
  )
}
