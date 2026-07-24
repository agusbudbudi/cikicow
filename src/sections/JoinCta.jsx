import Button from '../components/ui/Button.jsx'

export default function JoinCta() {
  return (
    <section id="join" className="max-w-[1280px] mx-auto px-4 md:px-12 py-7 md:py-14">
      <div className="relative bg-obsidian text-chalk rounded-lg p-8 sm:p-10 md:p-14 flex flex-col md:flex-row items-center justify-start gap-4">
        <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
          />
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-cyan/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 w-80 h-80 rounded-full bg-ember/20 blur-3xl" />
        </div>

        <div className="relative space-y-5 max-w-xl">
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-chalk leading-[1.05] tracking-tight">
            Sudah Siap Menjadi Creator Profesional?
          </h2>
          <p className="text-chalk/70 text-base md:text-lg leading-relaxed">
            Kembangkan karier live streaming-mu bersama kami.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <div className="flex -space-x-3 shrink-0">
              <img src="/assets/creators/coco.hendra.png" alt="Creator" className="h-9 w-9 rounded-full ring-2 ring-obsidian object-cover" />
              <img src="/assets/creators/ajus.shi.png" alt="Creator" className="h-9 w-9 rounded-full ring-2 ring-obsidian object-cover" />
              <img src="/assets/creators/jeph.guo.png" alt="Creator" className="h-9 w-9 rounded-full ring-2 ring-obsidian object-cover" />
            </div>
            <p className="text-sm text-chalk/60 font-medium">Bergabung bersama <span className="text-chalk font-bold">500+ creator</span> lainnya</p>
          </div>

          <div className="pt-2">
            <Button href="https://vm.tiktok.com/ZSYG6Y2xw/" target="_blank" rel="noopener" variant="gradient" size="lg" className="w-full sm:w-auto group">
              Mau Bergabung Sekarang
              <svg className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Button>
          </div>
        </div>

        <div className="relative w-64 sm:w-72 md:w-[21rem] lg:w-[25rem] shrink-0 -mb-8 sm:-mb-10 md:-mt-28 md:self-end md:-mb-14 md:ml-auto md:-mr-6">
          <img
            src="/assets/banners/hero-cta.png"
            alt=""
            className="relative w-full h-auto object-contain pointer-events-none select-none"
          />

          <div className="hidden sm:block absolute top-24 sm:top-24 md:top-40 -left-10 sm:-left-12 rotate-[-3deg] bg-chalk text-obsidian rounded-md shadow-[0_20px_40px_-15px_rgba(7,6,7,0.5)] px-3.5 py-3 space-y-1.5">
            <p className="font-display font-extrabold text-sm sm:text-base leading-tight">Live Creator</p>
            <p className="text-xs sm:text-sm text-obsidian/60 font-bold">120K Followers</p>
            <div className="flex flex-col gap-1 pt-1 text-[10px] sm:text-xs font-bold text-obsidian/70 whitespace-nowrap">
              <span>🔴 LIVE 5x/minggu</span>
              <span>📅 Agency since 2024</span>
              <span className="text-ember">📈 Income Naik</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
