import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { CREATORS } from '../data/creators.js'

function CreatorCard({ creator }) {
  return (
    <div className="group relative aspect-[3/4] rounded-md overflow-hidden bg-limestone border border-obsidian/8">
      <img
        src={creator.img}
        alt={creator.handle}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent" />

      <span className="absolute top-3 left-3 inline-flex items-center bg-obsidian text-chalk text-[10px] font-bold px-2 py-1 rounded-xs whitespace-nowrap">
        {creator.tag}
      </span>

      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
        <span className="text-chalk text-sm font-display font-extrabold truncate">{creator.handle}</span>
        <span className="rounded-full bg-chalk p-1.5 shrink-0">
          <img src="/assets/brand/tiktok-logo-square.png" alt="" className="w-4 h-4 object-contain rounded-full" />
        </span>
      </div>
    </div>
  )
}

export default function CreatorPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-16 md:pt-12 pb-6 md:pb-8">
          <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-12 text-center space-y-4">
            <span className="block mb-1 text-xs font-bold text-obsidian/60 uppercase tracking-widest">Talent Gallery</span>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl text-obsidian tracking-tight">Our Creators</h1>
            <p className="text-obsidian/70 text-base pt-2 max-w-2xl mx-auto">
              Temui talenta-talenta berbakat yang telah berkembang bersama Republik Cikicow Agency.
            </p>
          </div>
        </section>

        <section className="pt-6 md:pt-8 pb-16 md:pb-24 bg-pumice">
          <div className="max-w-[1280px] mx-auto px-4 md:px-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {CREATORS.map((creator) => (
                <CreatorCard key={creator.handle} creator={creator} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
