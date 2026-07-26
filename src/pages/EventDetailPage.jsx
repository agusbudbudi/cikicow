import { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SEO from '../components/SEO.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import JoinQuickCta from '../sections/JoinQuickCta.jsx'
import Badge from '../components/ui/Badge.jsx'
import Button from '../components/ui/Button.jsx'
import FormattedText from '../components/ui/FormattedText.jsx'
import { EventDetailSkeleton } from '../components/ui/LoadingState.jsx'
import ShareButtons from '../components/ShareButtons.jsx'
import { formatRange, isEventActive } from '../lib/eventFormat.js'
import { getEvent, listEvents } from '../lib/eventsApi.js'

function OtherEventCard({ event }) {
  return (
    <a href={`/event/${event.id}`} className="group flex gap-3 items-start">
      <div className="w-20 h-20 shrink-0 rounded-sm overflow-hidden bg-limestone border border-obsidian/8">
        <img
          src={event.image}
          alt={event.name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-1 min-w-0">
        <Badge variant="ember" className="!text-[10px] !px-1.5 !py-0.5">{formatRange(event.startDate, event.endDate)}</Badge>
        <h3 className="font-display font-bold text-sm text-obsidian leading-snug line-clamp-2 group-hover:text-ember transition-colors">{event.name}</h3>
        <p className="text-xs text-obsidian/60 line-clamp-1">{stripMarkup(event.detail)}</p>
      </div>
    </a>
  )
}

function stripMarkup(text) {
  return text.replace(/\*\*|\*|_|~/g, '').replace(/\n+/g, ' ').trim()
}

export default function EventDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const canGoBack = location.key !== 'default'
  const [event, setEvent] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const [otherEvents, setOtherEvents] = useState([])

  useEffect(() => {
    setEvent(null)
    setNotFound(false)
    getEvent(id)
      .then(setEvent)
      .catch(() => setNotFound(true))
  }, [id])

  useEffect(() => {
    listEvents().then(setOtherEvents).catch(() => setOtherEvents([]))
  }, [id])

  const relatedEvents = otherEvents
    .filter((item) => item.id !== id)
    .sort((a, b) => {
      const aActive = isEventActive(a)
      const bActive = isEventActive(b)
      if (aActive !== bActive) return aActive ? -1 : 1
      return aActive
        ? new Date(a.endDate) - new Date(b.endDate)
        : new Date(b.endDate) - new Date(a.endDate)
    })
    .slice(0, 3)

  const description = event ? stripMarkup(event.detail).slice(0, 155) : undefined

  const eventSchema = event
    ? {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: event.name,
      startDate: event.startDate,
      endDate: event.endDate,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
      location: {
        '@type': 'VirtualLocation',
        url: `${window.location.origin}/event/${event.id}`,
      },
      image: [event.image],
      description,
      organizer: {
        '@type': 'Organization',
        name: 'Republik Cikicow Agency',
        url: window.location.origin,
      },
    }
    : null

  return (
    <>
      <SEO
        title={event ? `${event.name} — Republik Cikicow Agency` : 'Detail Event — Republik Cikicow Agency'}
        description={description || 'Detail event official TikTok & kompetisi internal Republik Cikicow Agency.'}
        path={`/event/${id}`}
        image={event?.image}
        noindex={notFound}
      />
      {eventSchema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(eventSchema)}</script>
        </Helmet>
      )}
      <Header />
      <main>
        <section className="pt-6 md:pt-8 pb-10 md:pb-16 bg-pumice min-h-[60vh]">
          <div className="max-w-[1280px] mx-auto px-4 md:px-12">
            <a
              href="/event"
              onClick={(e) => {
                if (!canGoBack) return
                e.preventDefault()
                navigate(-1)
              }}
              className="inline-flex items-center gap-2 text-sm font-bold text-obsidian/60 hover:text-ember transition-colors mb-3"
            >
              <span className="w-6 h-6 rounded-full bg-ember/10 text-ember flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 fill-current rotate-90" viewBox="0 0 24 24"><path d="M12 15.5 5 8.5l1.4-1.4L12 12.7l5.6-5.6L19 8.5z" /></svg>
              </span>
              {canGoBack ? 'Kembali' : 'Semua Event'}
            </a>

            {!event && !notFound && <EventDetailSkeleton />}

            {notFound && (
              <div className="text-center py-16 space-y-4">
                <p className="text-obsidian/50">Event tidak ditemukan.</p>
                <Button href="/event" variant="outline">Kembali ke Semua Event</Button>
              </div>
            )}

            {event && (
              <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  <div className="shrink-0 flex items-start justify-center md:w-2/5 -mx-4 md:mx-0">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-auto rounded-none md:rounded-md object-contain"
                    />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="ember">{formatRange(event.startDate, event.endDate)}</Badge>
                      <Badge variant={isEventActive(event) ? 'cyan' : 'dark'} live={isEventActive(event)}>
                        {isEventActive(event) ? 'Aktif' : 'Selesai'}
                      </Badge>
                    </div>
                    <h1 className="font-display font-extrabold text-2xl md:text-4xl text-obsidian leading-snug">{event.name}</h1>
                    <FormattedText text={event.detail} className="text-sm md:text-base text-obsidian/70" />
                    <ShareButtons event={event} />
                  </div>
                </div>

                {relatedEvents.length > 0 && (
                  <div className="space-y-4">
                    <h2 className="font-display font-extrabold text-lg text-obsidian">Event Lainnya</h2>
                    <div className="space-y-4">
                      {relatedEvents.map((item) => (
                        <OtherEventCard key={item.id} event={item} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        <JoinQuickCta flushBottom />
      </main>
      <Footer />
    </>
  )
}
