import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'ZenStone Creations — Timeless Stone. Sculpted Elegance.',
  description: 'Luxury hand-carved marble sculptures, Buddha statues, and stone planters. Crafted for refined interiors and sacred spaces.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-cream antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
