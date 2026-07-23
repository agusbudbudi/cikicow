const STATS = [
  { label: 'Talent Aktif', value: '500+', caption: 'Live Creators Seluruh Indonesia' },
  { label: 'Jam Live Stream', value: '10K+', caption: 'Total Jam Tayang per Bulan', live: true },
  { label: 'Diamonds Collected', value: '50M+', caption: 'Apresiasi Penonton TikTok', diamond: true },
  { label: 'Community Event', value: '100+', caption: 'Event Internal & Official' },
]

export default function Stats() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-7 md:py-14">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {STATS.map((stat, index) => (
          <div
            key={stat.label}
            className={`relative overflow-hidden rounded-md p-4 sm:p-6 flex flex-col justify-between min-h-[140px] sm:min-h-[200px] ${index === 1 ? 'bg-obsidian text-chalk' : 'bg-ember text-chalk'
              }`}
          >
            <span className={`absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl pointer-events-none ${index === 1 ? 'bg-cyan/10' : 'bg-[#FE2C55]/10'}`} />
            <span className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/30 blur-2xl pointer-events-none" />
            <p className={`relative flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase ${index === 1 ? 'text-cyan' : 'text-chalk/80'}`}>
              {stat.live && (
                <span className="relative inline-flex w-1.5 h-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                  <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-cyan"></span>
                </span>
              )}
              {stat.label}
            </p>
            <div>
              <p className="font-display font-black text-3xl sm:text-5xl leading-none flex items-center gap-2">
                {stat.value}
                {stat.diamond && (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-chalk/90 shrink-0" viewBox="0 0 24 24"><path d="M12 2 3 9l9 13 9-13-9-7zM7.2 9h9.6L12 5.2 7.2 9zM6 10.5l5.1 9-6.6-9h1.5zm10.3 9 5.1-9h1.5l-6.6 9zM12 18.8 8 10.5h8L12 18.8z" /></svg>
                )}
              </p>
              <p className="text-xs font-medium opacity-70 mt-2">{stat.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
