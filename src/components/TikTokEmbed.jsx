import { useEffect } from 'react'

function extractVideoId(url) {
  const match = url.match(/\/video\/(\d+)/)
  return match ? match[1] : null
}

export default function TikTokEmbed({ url, className = '' }) {
  useEffect(() => {
    if (document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) return
    const script = document.createElement('script')
    script.src = 'https://www.tiktok.com/embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const videoId = extractVideoId(url)
  if (!videoId) return null

  return (
    <blockquote
      className={`tiktok-embed w-full max-w-[325px] sm:max-w-[605px] ${className}`}
      cite={url}
      data-video-id={videoId}
      style={{ maxWidth: '605px' }}
    >
      <section></section>
    </blockquote>
  )
}
