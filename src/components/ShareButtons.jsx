import { useState } from 'react'
import { formatRange } from '../lib/eventFormat.js'

export default function ShareButtons({ event }) {
  const [copied, setCopied] = useState(false)

  if (!event) return null

  const shareUrl = `${window.location.origin}/event/${event.id}`
  const shareText = [
    `🔥 *${event.name}*`,
    `📅 ${formatRange(event.startDate, event.endDate)}`,
    '',
    'Yuk cek info lengkapnya, ada kesempatan seru dari Republik Cikicow Agency!',
    '',
    shareUrl,
  ].join('\n')
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(shareText)}`

  async function handleCopy() {
    await navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-2 pt-1">
      <span className="text-xs font-bold text-obsidian/50 uppercase tracking-wide">Bagikan</span>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Bagikan ke WhatsApp"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#25D366] text-chalk hover:bg-[#1DA851] transition-colors"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.43 1.26 4.87L2 22l5.28-1.38A9.95 9.95 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18.15c-1.6 0-3.13-.43-4.45-1.24l-.32-.19-3.13.82.84-3.05-.21-.32a8.15 8.15 0 0 1-1.26-4.36c0-4.5 3.66-8.16 8.16-8.16s8.16 3.66 8.16 8.16-3.66 8.16-8.16 8.16h.37zm4.47-6.11c-.24-.12-1.43-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.59 4.11 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.15-.06-.1-.22-.16-.46-.28z" /></svg>
      </a>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full bg-obsidian/10 text-obsidian text-xs font-bold hover:bg-obsidian hover:text-chalk transition-colors cursor-pointer"
      >
        <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
        {copied ? 'Tersalin!' : 'Salin Link'}
      </button>
    </div>
  )
}
