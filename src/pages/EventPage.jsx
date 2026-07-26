import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import JoinQuickCta from '../sections/JoinQuickCta.jsx'
import Badge from '../components/ui/Badge.jsx'
import FormattedText from '../components/ui/FormattedText.jsx'
import { EventCardSkeleton, SkeletonGrid } from '../components/ui/LoadingState.jsx'
import { formatRange, isEventActive } from '../lib/eventFormat.js'
import { listEvents } from '../lib/eventsApi.js'

function EventCard({ event }) {
  return (
    <Link
      to={`/event/${event.id}`}
      className="group text-left w-full h-full p-0 flex flex-col rounded-md overflow-hidden bg-limestone border border-obsidian/8 cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden w-full shrink-0">
        <img
          src={event.image}
          alt={event.name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-2">
        <Badge variant="ember">{formatRange(event.startDate, event.endDate)}</Badge>
        <h3 className="font-display font-extrabold text-lg text-obsidian leading-snug">{event.name}</h3>
        <FormattedText text={event.detail} className="text-sm text-obsidian/70 line-clamp-3" />
        <span className="inline-flex items-center gap-2 text-sm font-bold text-obsidian pt-1">
          Lihat Detail
          <span className="w-6 h-6 rounded-full bg-obsidian/10 text-obsidian flex items-center justify-center shrink-0 transition-all group-hover:bg-ember group-hover:text-chalk group-hover:translate-x-1">
            <svg className="w-3 h-3 fill-current -rotate-90" viewBox="0 0 24 24"><path d="M12 15.5 5 8.5l1.4-1.4L12 12.7l5.6-5.6L19 8.5z" /></svg>
          </span>
        </span>
      </div>
    </Link>
  )
}

function EventGrid({ events }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}

export default function EventPage() {
  const [events, setEvents] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    listEvents().then(setEvents).catch((err) => setError(err.message))
  }, [])

  const ongoingEvents = (events ?? []).filter(isEventActive)
  const finishedEvents = (events ?? []).filter((event) => !isEventActive(event))

  return (
    <>
      <SEO
        title="Event & Campaign TikTok — Republik Cikicow Agency"
        description="Ikuti event official TikTok dan kompetisi internal khusus member Republik Cikicow, agensi resmi TikTok untuk live creator se-Indonesia."
        path="/event"
      />
      <Header />
      <main>
        <section className="relative pt-16 md:pt-12 pb-6 md:pb-8">
          <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-12 text-center space-y-4">
            <span className="block mb-1 text-xs font-bold text-obsidian/60 uppercase tracking-widest">Program &amp; Campaign</span>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl text-obsidian tracking-tight">Event Kami</h1>
            <p className="text-obsidian/70 text-base pt-2 max-w-2xl mx-auto">
              Ikuti event official TikTok &amp; kompetisi internal khusus member Republik Cikicow.
            </p>
          </div>
        </section>

        <section className="pt-6 md:pt-8 pb-16 md:pb-24 bg-pumice">
          <div className="max-w-[1280px] mx-auto px-4 md:px-12 space-y-12 md:space-y-16">
            {!events && !error && (
              <SkeletonGrid
                count={6}
                gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                renderItem={() => <EventCardSkeleton />}
              />
            )}

            {error && <p className="text-center text-red-600">{error}</p>}

            {events && events.length === 0 && (
              <p className="text-center text-obsidian/50">Belum ada event.</p>
            )}

            {ongoingEvents.length > 0 && (
              <div className="space-y-4 md:space-y-6">
                <h2 className="font-display font-extrabold text-2xl md:text-3xl text-obsidian">Sedang Berlangsung</h2>
                <EventGrid events={ongoingEvents} />
              </div>
            )}

            {finishedEvents.length > 0 && (
              <div className="space-y-4 md:space-y-6">
                <h2 className="font-display font-extrabold text-2xl md:text-3xl text-obsidian">Event Yang Sudah Selesai</h2>
                <EventGrid events={finishedEvents} />
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
