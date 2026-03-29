import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="eyebrow mb-6">404</p>
        <h1 className="font-serif text-5xl text-stone-charcoal mb-6">Page Not Found</h1>
        <p className="font-body text-stone-muted mb-12 max-w-sm mx-auto leading-relaxed">
          The page you are looking for may have moved or no longer exists.
        </p>
        <Link href="/" className="btn-gold">Return Home</Link>
      </div>
    </div>
  )
}
