"use client"

import { cn } from "@/lib/utils"
import { MessageCircle } from "lucide-react"

interface WhatsAppButtonProps {
  children: React.ReactNode
  className?: string
  size?: "default" | "lg" | "sm"
  message?: string
}

const WHATSAPP_NUMBER = "5542999999999" // Substituir pelo número real
const DEFAULT_MESSAGE = "Olá! Gostaria de fazer um pedido."

export function WhatsAppButton({ 
  children, 
  className, 
  size = "default",
  message = DEFAULT_MESSAGE 
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-bold text-white bg-[#25D366] rounded-xl transition-all duration-300 hover:bg-[#20BD5A] hover:scale-105 active:scale-95 animate-pulse-whatsapp",
        size === "sm" && "px-4 py-2 text-sm",
        size === "default" && "px-6 py-3 text-base",
        size === "lg" && "px-8 py-4 text-lg",
        className
      )}
    >
      <MessageCircle className="w-5 h-5" />
      {children}
    </button>
  )
}
