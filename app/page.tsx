import { HeroSection } from "@/components/landing/hero-section"
import { CombosSection } from "@/components/landing/combos-section"
import { SocialProofSection } from "@/components/landing/social-proof-section"
import { LogisticsSection } from "@/components/landing/logistics-section"
import { Footer } from "@/components/landing/footer"
import { StickyCTA } from "@/components/landing/sticky-cta"
import { CartProvider } from "@/contexts/cart-context"
import { FloatingCart } from "@/components/landing/floating-cart"

export default function HomePage() {
  return (
    <CartProvider>
      <main className="min-h-screen bg-[#121212]">
        {/* Secao 1: Hero - O Gancho de 5 Segundos */}
        <HeroSection />

        {/* Secao 2: Combos Campeoes da Madrugada */}
        <CombosSection />

        {/* Secao 3: Prova Social e Infraestrutura */}
        <SocialProofSection />

        {/* Secao 4: Logistica e Eliminacao de Friccao */}
        <LogisticsSection />

        {/* Secao 5: Rodape Minimalista */}
        <Footer />

        {/* CTA Fixo - Aparece apos rolar */}
        <StickyCTA />

        {/* Carrinho Flutuante */}
        <FloatingCart />
      </main>
    </CartProvider>
  )
}
