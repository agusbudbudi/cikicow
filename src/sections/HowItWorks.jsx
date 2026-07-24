import SectionHeader from '../components/ui/SectionHeader.jsx'

const STEPS = [
  { title: 'Register', desc: 'Daftar via DM TikTok atau tombol Gabung di website ini.' },
  { title: 'Interview', desc: 'Ngobrol singkat bareng admin untuk kenalan lebih jauh.' },
  { title: 'Training', desc: 'Dapat pembekalan strategi konten & live streaming.' },
  { title: 'Start LIVE', desc: 'Mulai live streaming didampingi tim Republik Cikicow.' },
  { title: 'Earn Money', desc: 'Kumpulkan diamond & cairkan komisi tiap bulan.' },
]

function Arrow() {
  return (
    <span className="w-8 h-8 rounded-full bg-ember/10 text-ember flex items-center justify-center shrink-0 self-center">
      <svg className="w-4 h-4 fill-current -rotate-90" viewBox="0 0 24 24"><path d="M12 15.5 5 8.5l1.4-1.4L12 12.7l5.6-5.6L19 8.5z" /></svg>
    </span>
  )
}

export default function HowItWorks() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-7 md:py-14">
      <div className="space-y-12">
        <SectionHeader
          align="center"
          eyebrow="How It Works"
          title="5 Langkah Menuju Creator Sukses"
          description="Proses simpel dari daftar sampai mulai cuan bareng Republik Cikicow."
        />

        <div className="flex overflow-x-auto snap-x snap-mandatory pb-2 md:pb-0 md:overflow-visible items-stretch gap-3 md:gap-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {STEPS.map((s, i) => (
            <div key={s.title} className="flex md:flex-1 items-stretch gap-2 shrink-0 snap-start">
              <div className="flex flex-col w-[68vw] sm:w-[45vw] md:w-auto md:flex-1 rounded-lg overflow-hidden border border-[#FE2C55] bg-gradient-to-tl from-obsidian via-obsidian/96 to-[#FE2C55] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-16px_rgba(162,25,23,0.3)]">
                <div className="relative flex items-center justify-center py-4 px-4">
                  <span className="absolute -top-1 -right-1 font-display font-black text-7xl text-chalk/10 select-none pointer-events-none leading-none">{i + 1}</span>
                  <h3 className="relative font-display font-extrabold text-lg text-chalk">{s.title}</h3>
                </div>
                <div className="flex-1 bg-chalk p-4 md:p-4 text-center rounded-tr-lg">
                  <p className="text-xs text-obsidian/60 leading-relaxed">{s.desc}</p>
                </div>
              </div>

              {i < STEPS.length - 1 && <Arrow />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
