import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-stone-charcoal text-stone-sand/70">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="font-serif text-2xl tracking-wide text-white mb-1">ZenStone</div>
              <div className="font-body text-[9px] tracking-[0.35em] uppercase text-stone-gold">Creations</div>
            </div>
            <p className="font-body text-sm leading-relaxed text-stone-sand/60 max-w-xs">
              Hand-carved natural stone sculptures and planters for refined interiors, sacred spaces, and those who understand the eloquence of material permanence.
            </p>
            <div className="flex gap-5 mt-8">
              {['Instagram', 'Pinterest', 'Houzz'].map((s) => (
                <a key={s} href="#" className="font-body text-[10px] tracking-[0.2em] uppercase text-stone-sand/50 hover:text-stone-gold transition-colors duration-300">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-stone-gold mb-6">Collections</h4>
            <ul className="space-y-3">
              {[
                { label: 'Buddha Collection', href: '/collections/buddha' },
                { label: 'Abstract Sculptures', href: '/collections/abstract' },
                { label: 'Stone Planters', href: '/collections/planters' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-sm text-stone-sand/60 hover:text-white transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-stone-gold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="font-body text-sm text-stone-sand/60 hover:text-white transition-colors duration-300">
                  Request Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-body text-sm text-stone-sand/60 hover:text-white transition-colors duration-300">
                  Wholesale Enquiries
                </Link>
              </li>
              <li>
                <a href="mailto:hello@zenstone.com" className="font-body text-sm text-stone-sand/60 hover:text-white transition-colors duration-300">
                  hello@zenstone.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-stone-sand/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[11px] tracking-wide text-stone-sand/30">
            © {new Date().getFullYear()} ZenStone Creations. All rights reserved.
          </p>
          <p className="font-body text-[11px] tracking-wide text-stone-sand/30">
            Crafted with reverence for natural stone
          </p>
        </div>
      </div>
    </footer>
  )
}
