"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "@/contexts/cart-context"
import { ShoppingCart, X, Plus, Minus, Trash2, MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "5542999345915"

export function FloatingCart() {
  const {
    items,
    totalItems,
    totalPriceFormatted,
    isOpen,
    toggleCart,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart()

  const generateWhatsAppMessage = () => {
    if (items.length === 0) return ""

    let message = "Ola! Gostaria de fazer um pedido:\n\n"
    
    items.forEach((item) => {
      message += `${item.quantity}x ${item.title} - ${item.priceFormatted}\n`
    })
    
    message += `\n*TOTAL: ${totalPriceFormatted}*`
    
    return encodeURIComponent(message)
  }

  const handleCheckout = () => {
    const message = generateWhatsAppMessage()
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
    window.open(url, "_blank", "noopener,noreferrer")
    clearCart()
    closeCart()
  }

  return (
    <>
      {/* Floating Cart Button */}
      <motion.button
        onClick={toggleCart}
        className="fixed bottom-24 right-4 z-50 w-16 h-16 bg-[#FF2C2C] hover:bg-[#e02525] rounded-full flex items-center justify-center shadow-2xl shadow-red-500/40 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <ShoppingCart className="w-7 h-7 text-white" />
        {totalItems > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-6 h-6 bg-[#25D366] text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg"
          >
            {totalItems}
          </motion.span>
        )}
      </motion.button>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCart}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            />

            {/* Cart Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-[#1A1A1A] shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-[#333333]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FF2C2C] rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Seu Pedido</h2>
                    <p className="text-sm text-[#A0A0A0]">{totalItems} {totalItems === 1 ? "item" : "itens"}</p>
                  </div>
                </div>
                <button
                  onClick={closeCart}
                  className="w-10 h-10 rounded-full bg-[#2A2A2A] hover:bg-[#333333] flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                <AnimatePresence mode="popLayout">
                  {items.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col items-center justify-center h-full py-12 text-center"
                    >
                      <div className="w-20 h-20 bg-[#2A2A2A] rounded-full flex items-center justify-center mb-4">
                        <ShoppingCart className="w-10 h-10 text-[#666666]" />
                      </div>
                      <p className="text-[#A0A0A0] text-lg">Seu carrinho esta vazio</p>
                      <p className="text-[#666666] text-sm mt-2">Adicione combos para fazer seu pedido</p>
                    </motion.div>
                  ) : (
                    items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50, height: 0 }}
                        className="bg-[#242424] rounded-xl p-4 border border-[#333333]"
                      >
                        <div className="flex justify-between items-start gap-3">
                          <div className="flex-1">
                            <h3 className="text-white font-semibold leading-tight">{item.title}</h3>
                            <p className="text-[#FF2C2C] font-bold mt-1">{item.priceFormatted}</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="w-8 h-8 rounded-full bg-[#2A2A2A] hover:bg-red-500/20 hover:text-red-500 flex items-center justify-center transition-colors text-[#666666]"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-3 bg-[#1A1A1A] rounded-full p-1">
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-9 h-9 rounded-full bg-[#2A2A2A] hover:bg-[#333333] flex items-center justify-center transition-colors"
                            >
                              <Minus className="w-4 h-4 text-white" />
                            </motion.button>
                            <span className="w-8 text-center text-white font-bold">{item.quantity}</span>
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-9 h-9 rounded-full bg-[#FF2C2C] hover:bg-[#e02525] flex items-center justify-center transition-colors"
                            >
                              <Plus className="w-4 h-4 text-white" />
                            </motion.button>
                          </div>
                          <span className="text-white font-bold">
                            {(item.price * item.quantity).toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </span>
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>

              {/* Footer - Checkout */}
              {items.length > 0 && (
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="p-5 border-t border-[#333333] bg-[#1A1A1A] space-y-4"
                >
                  {/* Total */}
                  <div className="flex items-center justify-between">
                    <span className="text-[#A0A0A0] text-lg">Total</span>
                    <span className="text-2xl font-bold text-white">{totalPriceFormatted}</span>
                  </div>

                  {/* Checkout Button */}
                  <motion.button
                    onClick={handleCheckout}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-lg py-4 rounded-2xl flex items-center justify-center gap-3 shadow-2xl shadow-green-500/30 transition-colors"
                  >
                    <MessageCircle className="w-6 h-6" />
                    FINALIZAR PEDIDO
                  </motion.button>
                  <p className="text-center text-[#666666] text-xs">
                    Voce sera redirecionado para o WhatsApp
                  </p>
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
