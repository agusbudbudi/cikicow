import Badge, { LivePulse } from '../components/ui/Badge.jsx'
import Button from '../components/ui/Button.jsx'

export default function Hero() {
  return (
    <section id="home" className="max-w-[1280px] mx-auto px-4 md:px-12 py-7 md:py-14 lg:min-h-[calc(100vh-73px)] lg:flex lg:items-center">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
        {/* Hero Text Column */}
        <div className="lg:col-span-7 space-y-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold text-ember uppercase tracking-widest">Talent &amp; Live Creator Agency</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-[76px] leading-[0.98] text-obsidian">
            Jadi Creator, <span className="text-ember [text-shadow:-2px_0_var(--color-cyan),2px_0_var(--color-ember)]">Cuan Berkelanjutan!</span>
          </h1>

          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display font-black text-xl sm:text-2xl text-obsidian tracking-tight">#RepublikCikicow</span>
            <Badge variant="cyan" icon="/assets/brand/tiktok-logo.png">Official Partner</Badge>
          </div>

          <p className="text-body text-obsidian/70 text-base sm:text-lg leading-relaxed max-w-xl">
            Gabung ribuan creator yang udah naik kelas bareng Republik Cikicow. Dukungan penuh, event eksklusif, komisi jalan terus tiap bulan.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-start gap-4">
            <Button href="https://vm.tiktok.com/ZSYG6Y2xw/" target="_blank" rel="noopener" variant="gradient" size="lg" className="w-full sm:w-auto text-center justify-center">🔥 Gabung Agency Sekarang</Button>
          </div>

          {/* Social Proof Avatar Stack */}
          <div className="pt-6 flex items-center gap-6">
            <div className="flex -space-x-3 overflow-hidden shrink-0">
              <img src="/assets/creators/lendra-cikicow.jpg" alt="Creator 1" className="inline-block h-11 w-11 rounded-full ring-2 ring-pumice object-cover" />
              <img src="/assets/creators/coco.hendra.png" alt="Creator 2" className="inline-block h-11 w-11 rounded-full ring-2 ring-pumice object-cover" />
              <img src="/assets/creators/jeph.guo.png" alt="Creator 3" className="inline-block h-11 w-11 rounded-full ring-2 ring-pumice object-cover" />
              <img src="/assets/creators/ajus.shi.png" alt="Creator 4" className="inline-block h-11 w-11 rounded-full ring-2 ring-pumice object-cover" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-obsidian">500+ Creator Telah Bergabung</p>
              <p className="text-xs text-obsidian/70 font-medium">Bergabung &amp; raih sukses live streaming bersama kami</p>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="lg:col-span-5 mt-2 sm:mt-0 -mx-4 sm:mx-0">
          <div className="relative sm:mx-6">
            <div className="rounded-md overflow-hidden">
              <img
                src="/assets/banners/hero-cikicow.png"
                alt="Republik Cikicow Creator"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating creator cards */}
            <div className="absolute top-4 left-4 sm:top-10 sm:-left-4 lg:top-10 lg:-left-12 rotate-[-6deg]">
              <div className="flex items-center gap-2 sm:gap-2 bg-chalk rounded-sm sm:rounded-md shadow-[0_20px_40px_-15px_rgba(7,6,7,0.3)] px-3 py-2 sm:px-3 sm:py-2.5 animate-[float_4s_ease-in-out_infinite]">
                <img src="/assets/creators/lendra-cikicow.jpg" alt="" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover ring-2 ring-cyan" />
                <div>
                  <p className="text-[11px] sm:text-xs font-extrabold text-obsidian whitespace-nowrap">@lendra</p>
                  <p className="flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-obsidian whitespace-nowrap">
                    <LivePulse dotClassName="bg-ember" /> LIVE
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute top-36 right-4 sm:top-44 sm:-right-4 lg:top-44 lg:-right-12 rotate-6">
              <div className="bg-cyan text-obsidian rounded-sm sm:rounded-md shadow-[0_20px_40px_-15px_rgba(7,6,7,0.3)] px-3 py-2 sm:px-3 sm:py-2.5 animate-[float_3.5s_ease-in-out_infinite]">
                <span className="text-[11px] sm:text-sm font-bold whitespace-nowrap">#Trending🔥</span>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:-left-4 lg:bottom-6 lg:-left-10 -rotate-4">
              <div className="bg-[#FE2C55] text-chalk rounded-sm sm:rounded-md shadow-[0_20px_40px_-15px_rgba(7,6,7,0.3)] px-3 py-2 sm:px-3 sm:py-2.5 animate-[float_4.5s_ease-in-out_infinite]">
                <span className="text-[11px] sm:text-sm font-bold whitespace-nowrap">+120K Followers</span>
              </div>
            </div>

            <div className="absolute bottom-10 right-4 sm:bottom-10 sm:-right-4 lg:bottom-10 lg:-right-16 rotate-[5deg]">
              <div className="flex items-center gap-2 sm:gap-3 bg-chalk rounded-sm sm:rounded-md shadow-[0_20px_40px_-15px_rgba(7,6,7,0.3)] px-3 py-2 sm:px-4 sm:py-3.5 animate-[float_5s_ease-in-out_infinite]">
                <img src="/assets/creators/jeph.guo.png" alt="" className="w-7 h-7 sm:w-11 sm:h-11 rounded-full object-cover ring-2 ring-ember" />
                <div>
                  <p className="text-[11px] sm:text-sm font-extrabold text-obsidian whitespace-nowrap">@jeph.guo</p>
                  <p className="text-[9px] sm:text-xs font-bold text-ember whitespace-nowrap">📈 Income ↑</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
