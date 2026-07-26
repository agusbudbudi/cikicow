import { useEffect } from 'react'
import { ensureTikTokEmbedScript } from '../lib/tiktokEmbedScript.js'

export default function TikTokProfileEmbed({ username, className = '' }) {
  useEffect(() => {
    ensureTikTokEmbedScript()
  }, [])

  return (
    <blockquote
      className={`tiktok-embed w-full max-w-[780px] mx-auto ${className}`}
      cite={`https://www.tiktok.com/@${username}`}
      data-unique-id={username}
      data-embed-type="creator"
      style={{ maxWidth: '780px', minWidth: '288px' }}
    >
      <section></section>
    </blockquote>
  )
}
