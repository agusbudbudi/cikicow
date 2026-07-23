import Badge from '../components/ui/Badge.jsx'
import Button from '../components/ui/Button.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import events from '../data/events.json'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}

function formatRange(startDate, endDate) {
  if (startDate === endDate) return formatDate(startDate)
  return `${formatDate(startDate)} - ${formatDate(endDate)}`
}

function isActive(event) {
  const today = new Date().setHours(0, 0, 0, 0)
  return new Date(event.endDate).setHours(0, 0, 0, 0) >= today
}

function sortEvents(list) {
  return [...list].sort((a, b) => {
    const activeDiff = Number(isActive(b)) - Number(isActive(a))
    if (activeDiff !== 0) return activeDiff
    return new Date(a.endDate) - new Date(b.endDate)
  })
}

function EventMedia({ event }) {
  return (
    <div className="aspect-square overflow-hidden rounded-md border border-obsidian/8">
      <img src={event.image} alt={event.name} className="w-full h-full object-cover object-top" />
    </div>
  )
}

export default function Events() {
  if (events.length === 0) return null

  return (
    <section id="events" className="relative w-full overflow-hidden py-12 md:py-14">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-[#FE2C55]/5" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#FE2C55]/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-12 space-y-10">
        <SectionHeader
          eyebrow="Program &amp; Campaign"
          title="New Events"
          description="Ikuti event official TikTok &amp; kompetisi internal khusus member Republik Cikicow."
        />

        <div className="grid md:grid-cols-3 gap-10">
          {sortEvents(events).slice(0, 3).map((event) => (
            <div key={event.id} className="space-y-4">
              <a href="/event" className="block">
                <EventMedia event={event} />
              </a>
              <div className="space-y-2">
                <Badge variant="ember">{formatRange(event.startDate, event.endDate)}</Badge>
                <h3 className="font-display font-bold text-2xl text-obsidian leading-snug">{event.name}</h3>
                <p className="text-sm text-obsidian/70 line-clamp-2">{event.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Button href="/event" variant="outline" className="w-full md:w-auto">Lihat Semua Event</Button>
        </div>
      </div>
    </section>
  )
}
