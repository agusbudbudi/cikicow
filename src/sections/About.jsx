import Badge from '../components/ui/Badge.jsx'
import Card from '../components/ui/Card.jsx'

const FOCUS_AREAS = [
  { icon: '/assets/icons/focus-group.webp', title: 'Creator Community', desc: 'Komunitas ramah untuk bertukar pikiran & kolaborasi.' },
  { icon: '/assets/icons/goal.webp', title: 'Career Success', desc: 'Kesempatan yang sama bagi setiap creator untuk sukses.' },
]

export default function About() {
  return (
    <section id="about" className="max-w-[1280px] mx-auto px-4 md:px-12 py-7 md:py-14">
      <div className="grid lg:grid-cols-12 gap-4 lg:gap-16 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-bold text-ember uppercase tracking-widest">About Us</span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-obsidian leading-tight">
            Lahir Dari Panggung Live
          </h2>
          <p className="text-body text-obsidian/70 text-base md:text-lg leading-relaxed">
            Semua bermula dari layar live TikTok, ratusan talent berbakat dan penuh kreativitas, tapi belum punya arah untuk memulai karier sebagai creator.
          </p>
          <p className="text-body text-obsidian/70 text-base md:text-lg leading-relaxed">
            Di situlah Republik Cikicow hadir, merangkul mereka jadi satu keluarga besar didukung tim manajemen yang responsif dan komunitas yang saling menguatkan.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {FOCUS_AREAS.map((item) => (
              <Card key={item.title} padding="p-3 sm:p-5" className="space-y-2">
                <img src={item.icon} alt={item.title} width="128" height="128" loading="lazy" className="w-10 h-10 object-contain" />
                <h4 className="font-display font-bold text-xl text-obsidian pt-1">{item.title}</h4>
                <p className="text-xs text-obsidian/70 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <Card
            padding="p-0"
            className="relative overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_-20px_rgba(7,6,7,0.2)]"
          >
            <img src="/assets/banners/banner-about.webp" alt="Komunitas creator Republik Cikicow, agensi TikTok resmi se-Indonesia" width="1600" height="1426" loading="lazy" className="w-full h-auto object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-obsidian/95 via-obsidian/40 to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4">
              <Badge live>Live Community</Badge>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 bg-obsidian/50 backdrop-blur-md border border-chalk/10 rounded-md p-5">
              <div>
                <p className="font-display font-black text-xl md:text-2xl text-chalk leading-tight">CREATOR SELURUH INDONESIA</p>
                <p className="text-xs font-medium text-chalk/70 mt-1">Dari Sabang sampai Merauke bergabung di Republik Cikicow</p>
              </div>
              <span className="bg-chalk rounded-full w-12 h-12 flex items-center justify-center shrink-0 p-2.5">
                <img src="/assets/brand/tiktok-logo-square.webp" alt="TikTok" width="200" height="200" loading="lazy" className="w-full h-full object-contain rounded-full" />
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
