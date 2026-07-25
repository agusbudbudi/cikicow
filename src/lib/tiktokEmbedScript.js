export function ensureTikTokEmbedScript() {
  if (document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) return
  const script = document.createElement('script')
  script.src = 'https://www.tiktok.com/embed.js'
  script.async = true
  document.body.appendChild(script)
}
