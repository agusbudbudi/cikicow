import { useState } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Badge from '../components/ui/Badge.jsx'
import FormattedText from '../components/ui/FormattedText.jsx'
import events from '../data/events.json'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}

function formatRange(startDate, endDate) {
  if (startDate === endDate) return formatDate(startDate)
  return `${formatDate(startDate)} - ${formatDate(endDate)}`
}

function EventCard({ event, onPreview }) {
  return (
    <div className="group rounded-md overflow-hidden bg-limestone border border-obsidian/8">
      <button
        type="button"
        onClick={() => onPreview(event)}
        className="relative aspect-square overflow-hidden w-full block cursor-zoom-in"
      >
        <img
          src={event.image}
          alt={event.name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </button>
      <div className="p-4 space-y-2">
        <Badge variant="ember">{formatRange(event.startDate, event.endDate)}</Badge>
        <h3 className="font-display font-extrabold text-lg text-obsidian leading-snug">{event.name}</h3>
        <FormattedText text={event.detail} className="text-sm text-obsidian/70" />
      </div>
    </div>
  )
}

function PreviewModal({ event, onClose }) {
  if (!event) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/80 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-chalk/10 text-chalk cursor-pointer hover:bg-chalk hover:text-obsidian transition-colors"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
      </button>
      <img
        src={event.image}
        alt={event.name}
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full object-contain rounded-md"
      />
    </div>
  )
}

function EventGrid({ events, onPreview }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} onPreview={onPreview} />
      ))}
    </div>
  )
}

export default function EventPage() {
  const [previewEvent, setPreviewEvent] = useState(null)

  const now = new Date()
  const ongoingEvents = events.filter((event) => new Date(event.endDate) >= now)
  const finishedEvents = events.filter((event) => new Date(event.endDate) < now)

  return (
    <>
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
            {ongoingEvents.length > 0 && (
              <div className="space-y-4 md:space-y-6">
                <h2 className="font-display font-extrabold text-2xl md:text-3xl text-obsidian">Sedang Berlangsung</h2>
                <EventGrid events={ongoingEvents} onPreview={setPreviewEvent} />
              </div>
            )}

            {finishedEvents.length > 0 && (
              <div className="space-y-4 md:space-y-6">
                <h2 className="font-display font-extrabold text-2xl md:text-3xl text-obsidian">Event Yang Sudah Selesai</h2>
                <EventGrid events={finishedEvents} onPreview={setPreviewEvent} />
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />

      <PreviewModal event={previewEvent} onClose={() => setPreviewEvent(null)} />
    </>
  )
}
