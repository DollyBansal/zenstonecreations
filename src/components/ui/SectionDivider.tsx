interface SectionDividerProps {
  symbol?: string
  className?: string
}

export default function SectionDivider({ symbol = '✦', className = '' }: SectionDividerProps) {
  return (
    <div className={`divider-gold my-12 ${className}`}>
      <span className="text-stone-gold/50 text-xs tracking-widest">────────</span>
      <span className="text-stone-gold text-sm px-2">{symbol}</span>
      <span className="text-stone-gold/50 text-xs tracking-widest">────────</span>
    </div>
  )
}
