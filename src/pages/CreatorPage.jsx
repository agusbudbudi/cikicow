import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { CreatorCardSkeleton, SkeletonGrid } from '../components/ui/LoadingState.jsx'
import { listCreators } from '../lib/creatorsApi.js'
import { CREATOR_TAG_OPTIONS } from '../data/creatorTags.js'

const PAGE_SIZE = 15
const ALL_TAG = 'Semua'

function CreatorAvatarFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-limestone">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-1/3 h-1/3 text-obsidian/20">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
    </div>
  )
}

function CreatorCard({ creator }) {
  return (
    <Link
      to={`/creator/${creator.id}`}
      className="group relative block aspect-[3/4] rounded-md overflow-hidden bg-limestone border border-obsidian/8"
    >
      {creator.image ? (
        <img
          src={creator.image}
          alt={creator.tiktokUsername}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <CreatorAvatarFallback />
      )}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent" />

      {creator.tag && (
        <span className="absolute top-3 left-3 inline-flex items-center bg-obsidian text-chalk text-[10px] font-bold px-2 py-1 rounded-xs whitespace-nowrap">
          {creator.tag}
        </span>
      )}

      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
        <span className="text-chalk text-sm font-display font-extrabold truncate">@{creator.tiktokUsername}</span>
        <span className="rounded-full bg-chalk p-1.5 shrink-0">
          <img src="/assets/brand/tiktok-logo-square.webp" alt="" className="w-4 h-4 object-contain rounded-full" />
        </span>
      </div>
    </Link>
  )
}

export default function CreatorPage() {
  const [creators, setCreators] = useState(null)
  const [error, setError] = useState(null)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [searchParams] = useSearchParams()
  const [activeTag, setActiveTag] = useState(() => searchParams.get('tag') || ALL_TAG)

  useEffect(() => {
    listCreators().then(setCreators).catch((err) => setError(err.message))
  }, [])

  const availableTags = useMemo(() => {
    if (!creators) return []
    const present = new Set(creators.map((c) => c.tag).filter(Boolean))
    return CREATOR_TAG_OPTIONS.filter((tag) => present.has(tag))
  }, [creators])

  const filteredCreators = useMemo(() => {
    if (!creators) return []
    if (activeTag === ALL_TAG) return creators
    return creators.filter((creator) => creator.tag === activeTag)
  }, [creators, activeTag])

  function handleTagSelect(tag) {
    setActiveTag(tag)
    setVisibleCount(PAGE_SIZE)
  }

  return (
    <>
      <SEO
        title="Talent & Live Creator TikTok — Republik Cikicow Agency"
        description="Kenali talent dan live creator TikTok yang berkembang bersama Republik Cikicow, agensi resmi TikTok terpercaya di Indonesia."
        path="/creator"
      />
      <Header />
      <main>
        <section className="relative pt-16 md:pt-12">
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
            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-sm px-4 py-3 max-w-xl mx-auto">
                {error}
              </p>
            )}

            {!creators && !error && (
              <SkeletonGrid
                count={PAGE_SIZE}
                gridClassName="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
                renderItem={() => <CreatorCardSkeleton />}
              />
            )}

            {creators && creators.length === 0 && (
              <p className="text-center text-obsidian/50">Belum ada creator.</p>
            )}

            {creators && creators.length > 0 && (
              <>
                {availableTags.length > 0 && (
                  <div className="flex flex-nowrap sm:flex-wrap overflow-x-auto sm:overflow-visible sm:justify-center gap-2 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {[ALL_TAG, ...availableTags].map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => handleTagSelect(tag)}
                        className={`shrink-0 inline-flex items-center rounded-sm px-4 py-2 text-sm font-bold transition-colors cursor-pointer ${activeTag === tag
                          ? 'bg-obsidian text-chalk'
                          : 'bg-chalk text-obsidian/70 border border-obsidian/10 hover:border-obsidian/30'
                          }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                )}

                {filteredCreators.length === 0 && (
                  <p className="text-center text-obsidian/50">Belum ada creator untuk kategori ini.</p>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                  {filteredCreators.slice(0, visibleCount).map((creator) => (
                    <CreatorCard key={creator.id} creator={creator} />
                  ))}
                </div>

                {visibleCount < filteredCreators.length && (
                  <div className="text-center mt-12">
                    <button
                      type="button"
                      onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                      className="inline-flex items-center justify-center gap-2 font-extrabold rounded-md text-center transition-all bg-ember text-chalk hover:bg-obsidian shadow-[0_10px_30px_-10px_rgba(7,6,7,0.08)] text-base px-5 py-3 cursor-pointer"
                    >
                      Lihat Lebih Banyak
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
