import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Badge from './ui/Badge.jsx'
import Button from './ui/Button.jsx'
import { scrollToSection } from '../lib/scrollToSection.js'

const NAV_LINKS = [
  { href: '#events', label: 'Event' },
  { href: '#services', label: 'Layanan' },
  { href: '#about', label: 'Tentang Kami' },
  { href: '#creators', label: 'Creator' },
  { href: '#faq', label: 'FAQ' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleNavClick(e, href) {
    if (!href.startsWith('#')) {
      setMenuOpen(false)
      return
    }
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname === '/') {
      scrollToSection(href)
      window.history.replaceState(null, '', href)
    } else {
      navigate(`/${href}`)
    }
  }

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className={`lg:hidden fixed inset-x-0 bottom-0 top-[73px] z-40 bg-obsidian/50 transition-opacity duration-300 ease-out ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      />

      <header
        className={`sticky top-0 inset-x-0 z-50 bg-chalk/95 backdrop-blur-md border-b transition-colors duration-300 ${scrolled ? 'border-obsidian/10' : 'border-transparent'
          }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 py-3 md:px-12 md:py-3 flex items-center gap-10">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 shrink-0">
            <img src="/assets/brand/logo-master.webp" alt="Republik Cikicow Agency - Agensi Resmi TikTok" width="500" height="126" className="h-6 md:h-7 w-auto object-contain" />
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-obsidian">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative py-1 hover:text-ember transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-ember after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/join"
              onClick={() => setMenuOpen(false)}
              className="relative inline-flex items-center gap-1.5 py-1 hover:text-ember transition-colors"
            >
              Join
              <span className="bg-ember text-chalk text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-xs">New</span>
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-5 ml-auto">
            <div className="flex items-center gap-3 pr-5 border-r border-obsidian/10">
              <a href="https://instagram.com/republik.cikicow" target="_blank" rel="noopener" aria-label="Instagram" className="text-obsidian hover:text-ember transition-colors p-1">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="https://tiktok.com/@republik.cikicow.agency" target="_blank" rel="noopener" aria-label="TikTok" className="opacity-80 hover:opacity-100 transition-opacity p-1">
                <img src="/assets/brand/tiktok-logo-square.webp" alt="" width="20" height="20" className="w-5 h-5 object-contain rounded-[3px]" />
              </a>
            </div>
            <Button href="https://vm.tiktok.com/ZSYG6Y2xw/" target="_blank" rel="noopener" size="sm" className="font-bold">Gabung Sekarang</Button>
          </div>

          <button
            aria-label="Menu Toggle"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden ml-auto w-8 h-8 rounded-xs border border-obsidian bg-transparent text-obsidian flex items-center justify-center shrink-0 relative"
          >
            <span className="sr-only">Toggle menu</span>
            <span
              className={`absolute block w-4 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45' : '-translate-y-1'
                }`}
            />
            <span
              className={`absolute block w-4 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <span
              className={`absolute block w-4 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45' : 'translate-y-1'
                }`}
            />
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`lg:hidden absolute top-full inset-x-0 z-50 overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${menuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="bg-chalk px-4 py-6 flex flex-col gap-3 text-center shadow-[0_20px_40px_-15px_rgba(7,6,7,0.3)]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-obsidian hover:text-ember py-2.5 border-b border-obsidian/10 font-semibold text-base transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/join"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 text-obsidian hover:text-ember py-2.5 border-b border-obsidian/10 font-semibold text-base transition-colors"
            >
              Join
              <span className="bg-ember text-chalk text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-xs">New</span>
            </Link>
            <Button href="https://vm.tiktok.com/ZSYG6Y2xw/" target="_blank" rel="noopener" className="w-full mt-1">
              Gabung Sekarang
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}
