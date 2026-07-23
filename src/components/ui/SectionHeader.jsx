export default function SectionHeader({ eyebrow, title, description, align = 'split', className = '' }) {
  if (align === 'center') {
    return (
      <div className={`text-center max-w-2xl mx-auto space-y-2 ${className}`}>
        <span className="block mb-3 text-xs font-bold text-ember uppercase tracking-widest">{eyebrow}</span>
        <h2 className="font-display font-extrabold text-4xl md:text-6xl text-obsidian tracking-tight">{title}</h2>
        {description && <p className="text-obsidian/70 text-base pt-2">{description}</p>}
      </div>
    )
  }

  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 ${className}`}>
      <div className="space-y-3 max-w-xl">
        <span className="block mb-3 text-xs font-bold text-ember uppercase tracking-widest">{eyebrow}</span>
        <h2 className="font-display font-extrabold text-4xl md:text-6xl text-obsidian tracking-tight">{title}</h2>
      </div>
      {description && <p className="text-obsidian/70 max-w-sm text-base">{description}</p>}
    </div>
  )
}
