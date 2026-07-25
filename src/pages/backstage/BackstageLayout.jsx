import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NAV_ITEMS = [
  {
    label: 'Events',
    to: '/backstage/events',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    label: 'Creators',
    to: '/backstage/creators',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
      </svg>
    ),
  },
  {
    label: 'Join Banners',
    to: '/backstage/join-banners',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <circle cx="8.5" cy="11" r="1.5" />
        <path d="m4 16 4-3 3 2 4-4 5 5" />
      </svg>
    ),
  },
  {
    label: 'Highlights',
    to: '/backstage/highlights',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
]

export default function BackstageLayout() {
  const [header, setHeader] = useState({ title: '', subtitle: '', action: null })

  return (
    <div className="h-screen bg-chalk flex overflow-hidden">
      <aside className="w-64 shrink-0 bg-white border-r border-obsidian/8 flex flex-col">
        <div className="h-16 shrink-0 px-5 flex items-center border-b border-obsidian/8">
          <img src="/assets/brand/logo-master.webp" alt="Republik Cikicow Agency" className="h-8 w-auto object-contain" />
        </div>

        <nav className="flex-1 flex flex-col gap-1 px-3 pt-4">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-2.5 text-sm font-bold px-3 py-2 rounded-xs transition-colors ${isActive
                  ? 'bg-ember/10 text-ember'
                  : 'text-obsidian/60 hover:bg-obsidian/5 hover:text-obsidian'
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="px-5 py-4 border-t border-obsidian/8">
          <p className="text-[11px] text-obsidian/40 font-bold">Cikicow Admin</p>
        </div>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <header className="h-16 shrink-0 bg-chalk border-b border-obsidian/8 px-6 md:px-10 flex items-center justify-between gap-4">
          <div>
            <h1 className="font-display font-extrabold text-lg text-obsidian leading-tight">{header.title}</h1>
            {header.subtitle && <p className="text-xs text-obsidian/50 leading-tight">{header.subtitle}</p>}
          </div>
          {header.action}
        </header>

        <main className="flex-1 min-w-0 overflow-y-auto px-6 md:px-10 py-8">
          <Outlet context={{ setHeader }} />
        </main>
      </div>
    </div>
  )
}
