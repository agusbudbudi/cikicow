import Button from '../components/ui/Button.jsx'
import { CREATORS } from '../data/creators.js'

// deliberately non-repeating rotation + height per card so nothing lines up — Pinterest-style organic scatter
const CARD_STYLE = [
  { rotate: -7, h: 'h-64' },
  { rotate: 4, h: 'h-80' },
  { rotate: -3, h: 'h-72' },
  { rotate: 9, h: 'h-60' },
  { rotate: -11, h: 'h-76' },
  { rotate: 2, h: 'h-64' },
  { rotate: 6, h: 'h-84' },
  { rotate: -5, h: 'h-68' },
  { rotate: 10, h: 'h-72' },
  { rotate: -2, h: 'h-60' },
  { rotate: -9, h: 'h-80' },
  { rotate: 5, h: 'h-64' },
]

const HEIGHTS = {
  'h-60': 'h-44 sm:h-60',
  'h-64': 'h-48 sm:h-64',
  'h-68': 'h-52 sm:h-68',
  'h-72': 'h-56 sm:h-72',
  'h-76': 'h-60 sm:h-76',
  'h-80': 'h-64 sm:h-80',
  'h-84': 'h-68 sm:h-84',
}

function WallCard({ creator, style, mobileHidden }) {
  return (
    <div className={`break-inside-avoid mb-5 ${mobileHidden ? 'hidden sm:block' : ''}`}>
      <div
        style={{ transform: `rotate(${style.rotate}deg)` }}
        className={`group relative overflow-hidden rounded-md shadow-[0_20px_40px_-15px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:rotate-0 hover:scale-[1.03] hover:z-10 ${HEIGHTS[style.h]}`}
      >
        <div className="absolute inset-0 bg-limestone">
          <img src={creator.img} alt={creator.handle} className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent" />

          <span className="absolute top-2 left-2 inline-flex items-center bg-obsidian text-chalk text-[9px] font-bold px-1.5 py-0.5 rounded-xs whitespace-nowrap">
            {creator.tag}
          </span>

          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1">
            <span className="text-chalk text-xs font-display font-extrabold truncate">{creator.handle}</span>
            <span className="rounded-full bg-chalk p-1 shrink-0">
              <img src="/assets/brand/tiktok-logo-square.png" alt="" className="w-3.5 h-3.5 object-contain rounded-full" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CreatorsWallV2() {
  return (
    <section id="creators" className="relative py-16 md:py-24 overflow-hidden bg-obsidian">
      <div className="absolute -top-32 left-0 w-[480px] h-[480px] rounded-full bg-ember/30 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 right-0 w-[480px] h-[480px] rounded-full bg-ember/30 blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-12 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="block mb-3 text-xs font-bold text-chalk uppercase tracking-widest">Talent Gallery</span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-chalk tracking-tight">Our Creators</h2>
          <p className="text-chalk/70 text-base pt-2">
            Temui talenta-talenta berbakat yang telah berkembang bersama Republik Cikicow Agency.
          </p>
        </div>

        <div className="columns-2 sm:columns-3 md:columns-4 gap-5">
          {CREATORS.map((creator, i) => (
            <WallCard key={creator.handle} creator={creator} style={CARD_STYLE[i % CARD_STYLE.length]} mobileHidden={i >= 6} />
          ))}
        </div>

        <div className="text-center">
          <Button href="/creator">Lihat Semua Creator</Button>
        </div>
      </div>
    </section>
  )
}
