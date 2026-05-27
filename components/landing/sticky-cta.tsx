"use client"

import { useEffect, useState } from "react"
import { WhatsAppButton } from "./whatsapp-button"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero section (approx 100vh)
      const heroHeight = window.innerHeight
      setIsVisible(window.scrollY > heroHeight * 0.8)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-[#121212] via-[#121212]/95 to-transparent transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-lg mx-auto">
        <WhatsAppButton 
          size="lg" 
          className="w-full py-4 text-lg shadow-2xl shadow-[#25D366]/30"
        >
          🍻 PEDIR AGORA! 🚀
        </WhatsAppButton>
      </div>
    </div>
  )
}
