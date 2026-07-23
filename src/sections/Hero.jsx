import Badge from '../components/ui/Badge.jsx'
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
            <Button href="#join" className="w-full sm:w-auto text-center justify-center">Mau Bergabung Sekarang</Button>
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

            <div className="absolute top-16 sm:top-20 right-6 md:-right-6 rotate-3 bg-cyan rounded-md shadow-[0_20px_40px_-15px_rgba(7,6,7,0.3)] px-3 sm:px-4 py-3 sm:py-4 flex items-center gap-2">
              <img src="/assets/brand/tiktok-logo-square.png" alt="" className="w-5 h-5 sm:w-7 sm:h-7 object-contain rounded-xs" />
              <span className="text-sm sm:text-base font-bold text-obsidian whitespace-nowrap">Official Partner</span>
            </div>

            <div className="absolute -bottom-4 sm:-bottom-6 left-6 md:-left-6 -rotate-3 bg-[#FE2C55] rounded-md shadow-[0_20px_40px_-15px_rgba(7,6,7,0.3)] px-3 sm:px-4 py-3 sm:py-4 flex items-center gap-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-chalk shrink-0" viewBox="0 0 24 24"><path d="M12 2 3 9l9 13 9-13-9-7zM7.2 9h9.6L12 5.2 7.2 9zM6 10.5l5.1 9-6.6-9h1.5zm10.3 9 5.1-9h1.5l-6.6 9zM12 18.8 8 10.5h8L12 18.8z" /></svg>
              <span className="text-sm sm:text-base font-bold text-chalk whitespace-nowrap">50M+ Diamonds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
