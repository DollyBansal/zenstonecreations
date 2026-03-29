'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Collections', href: '/collections/buddha' },
  { label: 'Buddha', href: '/collections/buddha' },
  { label: 'Abstract', href: '/collections/abstract' },
  { label: 'Planters', href: '/collections/planters' },
  { label: 'Enquire', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-stone-cream/95 backdrop-blur-md border-b border-stone-sand/30 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-[0.06em] text-stone-charcoal leading-none">
              ZenStone
            </span>
            <span className="font-body text-[9px] tracking-[0.35em] uppercase text-stone-gold mt-0.5">
              Creations
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className={`nav-link font-body text-[11px] tracking-[0.22em] uppercase transition-colors duration-300 ${
                pathname === link.href
                  ? 'text-stone-gold'
                  : 'text-stone-slate hover:text-stone-charcoal'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/contact" className="btn-gold text-[10px] px-6 py-3">
            Request Pricing
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[1px] bg-stone-charcoal transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-4 h-[1px] bg-stone-charcoal transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1px] bg-stone-charcoal transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-stone-cream border-t border-stone-sand/30 transition-all duration-400 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col px-6 py-8 gap-6">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-body text-xs tracking-[0.22em] uppercase text-stone-slate hover:text-stone-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold text-[10px] self-start mt-2">
            Request Pricing
          </Link>
        </nav>
      </div>
    </header>
  )
}
