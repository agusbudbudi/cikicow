const VARIANTS = {
  ember: 'bg-ember text-chalk',
  dark: 'bg-obsidian text-chalk',
  cyan: 'bg-cyan text-obsidian',
}

export function LivePulse({ dotClassName = 'bg-chalk' }) {
  return (
    <span className="relative inline-flex w-2 h-2 shrink-0">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${dotClassName} opacity-75`}></span>
      <span className={`relative inline-flex w-2 h-2 rounded-full ${dotClassName}`}></span>
    </span>
  )
}

export default function Badge({ children, variant = 'ember', live = false, icon, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2 py-1 rounded-xs ${VARIANTS[variant]} ${className}`}>
      {live && <LivePulse dotClassName={variant === 'dark' ? 'bg-cyan' : 'bg-chalk'} />}
      {icon && <img src={icon} alt="" className="h-3.5 object-contain shrink-0" />}
      {children}
    </span>
  )
}
