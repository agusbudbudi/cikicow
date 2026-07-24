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
      <img
        src={event.image}
        alt={event.name}
        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  )
}

export default function Events() {
  if (events.length === 0) return null

  return (
    <section id="events" className="relative w-full overflow-hidden py-12 md:py-14">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-[#FE2C55]/20" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#FE2C55]/35 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-12 space-y-10">
        <SectionHeader
          eyebrow="Program &amp; Campaign"
          title="New Events"
          description="Ikuti event official TikTok &amp; kompetisi internal khusus member Republik Cikicow."
        />

        <div className="grid md:grid-cols-3 gap-10">
          {sortEvents(events).slice(0, 3).map((event) => (
            <a key={event.id} href="/event" className="group block space-y-4 transition-transform duration-300 hover:-translate-y-1.5">
              <EventMedia event={event} />
              <div className="space-y-2">
                <Badge variant="ember">{formatRange(event.startDate, event.endDate)}</Badge>
                <h3 className="font-display font-bold text-2xl text-obsidian leading-snug">{event.name}</h3>
                <p className="text-sm text-obsidian/70 line-clamp-2">{event.detail}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-obsidian pt-1">
                  Lihat Detail
                  <span className="w-6 h-6 rounded-full bg-obsidian/10 text-obsidian flex items-center justify-center shrink-0 transition-all group-hover:bg-ember group-hover:text-chalk group-hover:translate-x-1">
                    <svg className="w-3 h-3 fill-current -rotate-90" viewBox="0 0 24 24"><path d="M12 15.5 5 8.5l1.4-1.4L12 12.7l5.6-5.6L19 8.5z" /></svg>
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center pt-2">
          <Button href="/event" variant="outline" className="w-full md:w-auto">Lihat Semua Event</Button>
        </div>
      </div>
    </section>
  )
}
