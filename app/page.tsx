import { HeroSection } from "@/components/landing/hero-section"
import { CombosSection } from "@/components/landing/combos-section"
import { SocialProofSection } from "@/components/landing/social-proof-section"
import { LogisticsSection } from "@/components/landing/logistics-section"
import { Footer } from "@/components/landing/footer"
import { StickyCTA } from "@/components/landing/sticky-cta"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#121212]">
      {/* Seção 1: Hero - O Gancho de 5 Segundos */}
      <HeroSection />

      {/* Seção 2: Combos Campeões da Madrugada */}
      <CombosSection />

      {/* Seção 3: Prova Social e Infraestrutura */}
      <SocialProofSection />

      {/* Seção 4: Logística e Eliminação de Fricção */}
      <LogisticsSection />

      {/* Seção 5: Rodapé Minimalista */}
      <Footer />

      {/* CTA Fixo - Aparece após rolar */}
      <StickyCTA />
    </main>
  )
}
