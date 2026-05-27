import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-bebas'
});

export const metadata: Metadata = {
  title: 'Rota do Gole | Distribuidora 24h - Ponta Grossa',
  description: 'Distribuidora de bebidas 24h em Ponta Grossa. Entrega rápida em toda a cidade. Cervejas, destilados, energéticos e muito mais. Peça pelo WhatsApp!',
  keywords: 'distribuidora bebidas, delivery bebidas, 24 horas, Ponta Grossa, cerveja gelada, vodka, energético, entrega rápida',
  openGraph: {
    title: 'Rota do Gole | Distribuidora 24h',
    description: 'A bebida acabou? Nós resolvemos em minutos! Entrega 24h em Ponta Grossa.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  themeColor: '#121212',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-[#121212]">
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans antialiased bg-[#121212] text-white`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
