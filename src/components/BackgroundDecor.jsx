const GLOWS = [
  { top: '0%', side: 'left', offset: '-12%', size: 480, color: 'bg-ember/10' },
  { top: '18%', side: 'right', offset: '-16%', size: 560, color: 'bg-cyan/8' },
  { top: '42%', side: 'left', offset: '-14%', size: 520, color: 'bg-ember/8' },
  { top: '64%', side: 'right', offset: '-12%', size: 480, color: 'bg-cyan/6' },
  { top: '85%', side: 'left', offset: '-8%', size: 440, color: 'bg-ember/8' },
]

const SPARKLES = [
  { top: '8%', left: '22%', size: 3, color: 'bg-ember/40', delay: '0s' },
  { top: '15%', left: '78%', size: 2, color: 'bg-cyan/40', delay: '0.6s' },
  { top: '33%', left: '12%', size: 2, color: 'bg-cyan/30', delay: '1.2s' },
  { top: '48%', left: '88%', size: 3, color: 'bg-ember/30', delay: '0.3s' },
  { top: '58%', left: '30%', size: 2, color: 'bg-ember/40', delay: '1.5s' },
  { top: '72%', left: '70%', size: 3, color: 'bg-cyan/30', delay: '0.9s' },
  { top: '88%', left: '18%', size: 2, color: 'bg-ember/30', delay: '0.2s' },
]

export default function BackgroundDecor() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{ backgroundImage: 'radial-gradient(#070607 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      {GLOWS.map((g, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-[130px] ${g.color}`}
          style={{
            top: g.top,
            width: g.size,
            height: g.size,
            [g.side]: g.offset,
          }}
        />
      ))}

      {SPARKLES.map((s, i) => (
        <span
          key={i}
          className={`absolute rounded-full ${s.color} animate-pulse`}
          style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: s.delay, animationDuration: '3s' }}
        />
      ))}
    </div>
  )
}
