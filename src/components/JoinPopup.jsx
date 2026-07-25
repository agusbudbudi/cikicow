import { useEffect, useState } from 'react'
import Button from './ui/Button.jsx'

const DISMISS_KEY = 'cikicow_join_popup_dismissed'
const JOIN_URL = 'https://vm.tiktok.com/ZSYG6Y2xw/'

export default function JoinPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(DISMISS_KEY) === 'true') return
    setOpen(true)
  }, [])

  function dismiss() {
    localStorage.setItem(DISMISS_KEY, 'true')
    setOpen(false)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-obsidian/70" onClick={dismiss} />

      <div className="relative w-full max-w-sm bg-chalk rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Tutup"
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-obsidian/60 text-chalk flex items-center justify-center hover:bg-obsidian transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>

        <img src="/assets/banners/banner-cikicow-talent.webp" alt="Republik Cikicow Talent - Agensi Resmi TikTok untuk Live Creator" width="1600" height="400" className="w-full h-30 object-cover" />

        <div className="p-6 text-center">
          <div>
            <h2 className="font-display font-extrabold text-2xl text-obsidian leading-snug">
              Gabung Republik Cikicow
            </h2>
            <p className="text-sm text-obsidian/60">
              Mulai karier live streaming-mu dan raih cuan bareng ratusan creator lainnya.
            </p>
          </div>

          <div className="bg-chalk rounded-xl p-4 flex flex-col items-center gap-3">
            <img src="/assets/brand/qr-join.png" alt="QR Code Republik Cikicow" width="600" height="600" className="w-60 h-60 object-contain" />
            <a
              href="/assets/brand/qr-join-download.png"
              download
              className="inline-flex items-center justify-center gap-2 font-bold text-xs text-obsidian border border-obsidian/15 rounded-sm px-4 py-2 hover:bg-obsidian hover:text-chalk transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></svg>
              Download QR Code
            </a>
          </div>

          <Button
            href={JOIN_URL}
            target="_blank"
            rel="noopener"
            variant="gradient"
            size="lg"
            onClick={dismiss}
            className="w-full text-center justify-center mt-4"
          >
            🔥 Gabung Sekarang
          </Button>
        </div>
      </div>
    </div>
  )
}
