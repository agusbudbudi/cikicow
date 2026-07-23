export function scrollToSection(hash) {
  const el = document.querySelector(hash)
  if (!el) return
  const header = document.querySelector('header')
  const offset = header?.offsetHeight ?? 0
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}
