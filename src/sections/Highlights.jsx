import { useEffect, useState } from 'react'
import TikTokEmbed from '../components/TikTokEmbed.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import { listHighlights } from '../lib/highlightsApi.js'

export default function Highlights() {
  const [highlights, setHighlights] = useState([])

  useEffect(() => {
    listHighlights()
      .then((all) => setHighlights(all.filter((h) => h.isActive)))
      .catch(() => {})
  }, [])

  if (highlights.length === 0) return null

  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-7 md:py-14">
      <div className="space-y-10">
        <SectionHeader align="center" eyebrow="Creator Highlights" title="Highlights Videos" />

        <div className="grid md:grid-cols-3 gap-4 justify-items-center">
          {highlights.map((item) => (
            <TikTokEmbed key={item.id} url={item.url} />
          ))}
        </div>
      </div>
    </section>
  )
}
