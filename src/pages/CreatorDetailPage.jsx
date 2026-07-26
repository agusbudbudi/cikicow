import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SEO from '../components/SEO.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Badge from '../components/ui/Badge.jsx'
import Button from '../components/ui/Button.jsx'
import { CreatorDetailSkeleton } from '../components/ui/LoadingState.jsx'
import TikTokProfileEmbed from '../components/TikTokProfileEmbed.jsx'
import { getCreator, listCreators } from '../lib/creatorsApi.js'

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

function CreatorMiniCard({ creator }) {
  return (
    <div className="flex items-start gap-3">
      <Link to={`/creator/${creator.id}`} className="shrink-0">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-limestone border border-obsidian/8">
          {creator.image ? (
            <img src={creator.image} alt={creator.tiktokUsername} className="w-full h-full object-cover" />
          ) : (
            <CreatorAvatarFallback />
          )}
        </div>
      </Link>
      <div className="min-w-0 space-y-0.5">
        <Link to={`/creator/${creator.id}`} className="block text-sm font-bold text-obsidian truncate hover:text-ember transition-colors">
          @{creator.tiktokUsername}
        </Link>
        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
          {creator.tag && <p className="text-xs text-obsidian/50 truncate">{creator.tag}</p>}
          <a
            href={`https://www.tiktok.com/@${creator.tiktokUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-obsidian/70 hover:text-ember transition-colors shrink-0"
          >
            <img src="/assets/brand/tiktok-logo-square.webp" alt="" className="w-3.5 h-3.5 rounded-full object-contain" />
            Lihat TikTok
          </a>
        </div>
      </div>
    </div>
  )
}

export default function CreatorDetailPage() {
  const { id } = useParams()
  const [creator, setCreator] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const [otherCreators, setOtherCreators] = useState([])

  useEffect(() => {
    setCreator(null)
    setNotFound(false)
    getCreator(id)
      .then(setCreator)
      .catch(() => setNotFound(true))
  }, [id])

  useEffect(() => {
    listCreators().then(setOtherCreators).catch(() => setOtherCreators([]))
  }, [id])

  const relatedCreators = creator?.tag
    ? otherCreators.filter((item) => item.id !== id && item.tag === creator.tag).slice(0, 5)
    : []

  const title = creator ? `@${creator.tiktokUsername} — Talent TikTok Republik Cikicow Agency` : 'Detail Creator — Republik Cikicow Agency'
  const description = creator
    ? `Kenali @${creator.tiktokUsername}${creator.tag ? `, live creator kategori ${creator.tag}` : ''} di Republik Cikicow Agency, agensi resmi TikTok terpercaya di Indonesia.`
    : 'Detail talent dan live creator TikTok Republik Cikicow Agency.'

  const personSchema = creator
    ? {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: `@${creator.tiktokUsername}`,
        image: creator.image || undefined,
        url: `https://www.tiktok.com/@${creator.tiktokUsername}`,
        jobTitle: creator.tag || 'TikTok Live Creator',
        memberOf: {
          '@type': 'Organization',
          name: 'Republik Cikicow Agency',
          url: window.location.origin,
        },
      }
    : null

  return (
    <>
      <SEO title={title} description={description} path={`/creator/${id}`} image={creator?.image} noindex={notFound} />
      {personSchema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        </Helmet>
      )}
      <Header />
      <main>
        <section className="pt-6 md:pt-8 pb-10 md:pb-16 bg-pumice min-h-[60vh]">
          <div className="max-w-[1140px] mx-auto px-4 md:px-12">
            <a href="/creator" className="inline-flex items-center gap-2 text-sm font-bold text-obsidian/60 hover:text-ember transition-colors mb-3">
              <span className="w-6 h-6 rounded-full bg-ember/10 text-ember flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 fill-current rotate-90" viewBox="0 0 24 24"><path d="M12 15.5 5 8.5l1.4-1.4L12 12.7l5.6-5.6L19 8.5z" /></svg>
              </span>
              Semua Creator
            </a>

            {!creator && !notFound && <CreatorDetailSkeleton />}

            {notFound && (
              <div className="text-center py-16 space-y-4">
                <p className="text-obsidian/50">Creator tidak ditemukan.</p>
                <Button href="/creator" variant="outline">Kembali ke Semua Creator</Button>
              </div>
            )}

            {creator && (
              <div className="grid lg:grid-cols-[1fr_260px] gap-8 items-start">
                <div className="space-y-8">
                  <div className="bg-chalk rounded-md border border-obsidian/8 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full overflow-hidden bg-limestone border border-obsidian/8">
                        {creator.image ? (
                          <img src={creator.image} alt={creator.tiktokUsername} className="w-full h-full object-cover" />
                        ) : (
                          <CreatorAvatarFallback />
                        )}
                      </div>

                      <div className="min-w-0 space-y-1.5">
                        {creator.tag && <Badge variant="ember">{creator.tag}</Badge>}
                        <h1 className="font-display font-extrabold text-lg sm:text-xl text-obsidian truncate">@{creator.tiktokUsername}</h1>
                      </div>
                    </div>

                    <Button
                      href={`https://www.tiktok.com/@${creator.tiktokUsername}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="dark"
                      size="sm"
                      className="w-full sm:w-auto shrink-0"
                    >
                      <img src="/assets/brand/tiktok-logo-square.webp" alt="" className="w-4 h-4 rounded-full object-contain" />
                      Lihat Profil TikTok
                    </Button>
                  </div>

                  <TikTokProfileEmbed username={creator.tiktokUsername} />
                </div>

                {relatedCreators.length > 0 && (
                  <div className="space-y-4">
                    <h2 className="font-display font-extrabold text-lg text-obsidian">Kategori {creator.tag}</h2>
                    <div className="space-y-4">
                      {relatedCreators.map((item) => (
                        <CreatorMiniCard key={item.id} creator={item} />
                      ))}
                    </div>
                    <Button
                      href={`/creator?tag=${encodeURIComponent(creator.tag)}`}
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      Lihat Creator Lainnya
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
