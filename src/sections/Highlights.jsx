import TikTokEmbed from '../components/TikTokEmbed.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import highlights from '../data/highlights.json'

export default function Highlights() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-7 md:py-14">
      <div className="space-y-10">
        <SectionHeader align="center" eyebrow="Creator Highlights" title="Highlights Videos" />

        <div className="grid md:grid-cols-3 gap-4 justify-items-center">
          {highlights.map((item) => (
            <TikTokEmbed key={item.url} url={item.url} />
          ))}
        </div>
      </div>
    </section>
  )
}
