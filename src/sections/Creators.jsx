import Button from '../components/ui/Button.jsx'
import { CREATORS } from '../data/creators.js'

// asymmetric scatter — sizes and offsets deliberately mismatched left vs right, no mirroring.
// each front card has a dimmer "twin" tucked slightly behind/further out to fake a deeper stack.
const FLOATERS = [
  { c: 0, size: 'w-28 h-36 sm:w-36 sm:h-44 md:w-48 md:h-60', style: { left: '0%', top: '0%' }, rotate: '-rotate-6', hide: '', opacity: 'opacity-100', z: 'z-10' },
  { c: 1, size: 'w-24 h-32 sm:w-28 sm:h-36 md:w-36 md:h-44', style: { right: '0%', top: '10%' }, rotate: 'rotate-8', hide: '', opacity: 'opacity-100', z: 'z-10' },
  { c: 2, size: 'w-28 h-36 sm:w-32 sm:h-40 md:w-44 md:h-56', style: { left: '6%', bottom: '0%' }, rotate: 'rotate-5', hide: '', opacity: 'opacity-100', z: 'z-10' },
  { c: 3, size: 'w-20 h-28 sm:w-24 sm:h-32 md:w-32 md:h-40', style: { right: '0%', bottom: '8%' }, rotate: '-rotate-10', hide: '', opacity: 'opacity-100', z: 'z-10' },

  { c: 4, size: 'w-36 h-44', style: { left: '17%', top: '22%' }, rotate: 'rotate-12', hide: 'hidden md:block', opacity: 'opacity-100', z: 'z-10' },
  { c: 5, size: 'w-28 h-36', style: { right: '15%', top: '4%' }, rotate: '-rotate-6', hide: 'hidden md:block', opacity: 'opacity-100', z: 'z-10' },
  { c: 9, size: 'w-32 h-40', style: { left: '22%', bottom: '18%' }, rotate: '-rotate-12', hide: 'hidden md:block', opacity: 'opacity-100', z: 'z-10' },
  { c: 11, size: 'w-40 h-48', style: { right: '13%', bottom: '12%' }, rotate: 'rotate-4', hide: 'hidden md:block', opacity: 'opacity-100', z: 'z-10' },

  { c: 8, size: 'w-28 h-36', style: { left: '30%', top: '2%' }, rotate: '-rotate-4', hide: 'hidden lg:block', opacity: 'opacity-100', z: 'z-10' },
  { c: 6, size: 'w-32 h-40', style: { right: '25%', top: '16%' }, rotate: 'rotate-8', hide: 'hidden lg:block', opacity: 'opacity-100', z: 'z-10' },
  { c: 10, size: 'w-28 h-36', style: { left: '31%', bottom: '4%' }, rotate: 'rotate-6', hide: 'hidden lg:block', opacity: 'opacity-100', z: 'z-10' },
  { c: 7, size: 'w-28 h-36', style: { right: '27%', bottom: '0%' }, rotate: '-rotate-8', hide: 'hidden lg:block', opacity: 'opacity-100', z: 'z-10' },

  { c: 6, size: 'w-28 h-36', style: { left: '2%', top: '42%' }, rotate: '-rotate-3', hide: '', opacity: 'opacity-35', z: 'z-0' },
  { c: 8, size: 'w-24 h-32', style: { right: '3%', top: '46%' }, rotate: 'rotate-10', hide: '', opacity: 'opacity-30', z: 'z-0' },

  { c: 7, size: 'w-24 h-32', style: { left: '13%', top: '46%' }, rotate: 'rotate-9', hide: 'hidden md:block', opacity: 'opacity-25', z: 'z-0' },
  { c: 9, size: 'w-24 h-32', style: { right: '12%', top: '38%' }, rotate: '-rotate-9', hide: 'hidden md:block', opacity: 'opacity-25', z: 'z-0' },
  { c: 1, size: 'w-24 h-32', style: { left: '27%', top: '34%' }, rotate: '-rotate-6', hide: 'hidden lg:block', opacity: 'opacity-20', z: 'z-0' },
  { c: 2, size: 'w-24 h-32', style: { right: '26%', bottom: '40%' }, rotate: 'rotate-6', hide: 'hidden lg:block', opacity: 'opacity-20', z: 'z-0' },
]

function FloaterCard({ floater }) {
  const creator = CREATORS[floater.c]
  const isBack = floater.z === 'z-0'
  return (
    <div
      aria-hidden="true"
      style={floater.style}
      className={`absolute ${floater.hide} ${floater.z} ${floater.opacity} ${floater.size} ${floater.rotate} ${isBack ? 'blur-[2px]' : ''} rounded-md overflow-hidden bg-limestone shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] pointer-events-none select-none`}
    >
      <img src={creator.img} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent" />

      <span className="absolute top-1.5 left-1.5 inline-flex items-center bg-obsidian text-chalk text-[8px] font-bold px-1.5 py-0.5 rounded-xs whitespace-nowrap">
        {creator.tag}
      </span>

      <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between gap-1">
        <span className="text-chalk text-[10px] font-display font-extrabold truncate">{creator.handle}</span>
        <span className="rounded-full bg-chalk p-1 shrink-0">
          <img src="/assets/brand/tiktok-logo-square.png" alt="" className="w-3 h-3 object-contain rounded-full" />
        </span>
      </div>
    </div>
  )
}

export default function Creators() {
  return (
    <section id="creators" className="relative py-16 md:py-24 overflow-hidden bg-obsidian">
      <div className="relative w-screen left-1/2 -translate-x-1/2 min-h-[600px] md:min-h-[740px] flex items-center justify-center">
        <div className="absolute -top-32 left-0 w-[480px] h-[480px] rounded-full bg-ember/30 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 right-0 w-[480px] h-[480px] rounded-full bg-ember/30 blur-[100px] pointer-events-none" />

        {FLOATERS.map((floater, index) => (
          <FloaterCard key={index} floater={floater} />
        ))}

        <div className="relative z-10 text-center max-w-2xl mx-auto px-4 space-y-4">
          <span className="block mb-3 text-xs font-bold text-chalk uppercase tracking-widest">Talent Gallery</span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-chalk tracking-tight">Our Creators</h2>
          <p className="text-chalk/70 text-base pt-2">
            Temui talenta-talenta berbakat yang telah berkembang bersama Republik Cikicow Agency.
          </p>
          <div className="pt-4">
            <Button href="/creator">Lihat Semua Creator</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
