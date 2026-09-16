import { useEffect, useState } from 'react'
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, Github, ExternalLink } from 'lucide-react'
import { createPortal } from 'react-dom'
import { identity } from '../data/about'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/journey', label: 'Journey' },
  { to: '/projects', label: 'Projects' },
  { to: '/chishiya', label: 'Chishiya' },
  { to: '/rules', label: 'Rules' },
  { to: '/contact', label: 'Contact' },
]

function NavList({ onNavigate }) {
  return (
    <ul className="flex flex-col gap-1">
      {navItems.map((item) => (
        <li key={item.to}>
          <NavLink
            to={item.to}
            end={item.to === '/'}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-ink-900 text-white'
                  : 'text-ink-700 hover:bg-ink-100'
              }`
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

function MobileNav({ open, onClose }) {
  // Body scroll lock
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [open])

  // Escape key
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted || !open) return null

  return createPortal(
    <div className="fixed inset-0 z-[100] md:hidden">
      <div
        className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <nav
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className="absolute right-0 top-0 h-full w-[min(20rem,85vw)] flex flex-col bg-white border-l border-ink-200 shadow-2xl animate-slide-in"
      >
        <div className="flex items-center justify-between border-b border-ink-200 px-5 h-16 shrink-0">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-500">
            Menu
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-md p-2 text-ink-600 hover:bg-ink-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <NavList onNavigate={onClose} />
        </div>
        <div className="border-t border-ink-200 p-4 shrink-0">
          <a
            href={identity.github}
            target="_blank"
            rel="noreferrer"
            className="btn-outline w-full"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </nav>
    </div>,
    document.body
  )
}

export default function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close drawer on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar (mobile + desktop) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-ink-200">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="h-8 w-8 rounded-lg bg-ink-900 text-white flex items-center justify-center font-display font-bold text-sm">
                C
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-bold text-ink-900 text-base leading-none">
                  chishiya
                </div>
                <div className="text-[10px] text-ink-500 uppercase tracking-wider leading-none mt-0.5">
                  a manifesto
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-ink-900 text-white'
                        : 'text-ink-700 hover:bg-ink-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Right side: GitHub + hamburger */}
            <div className="flex items-center gap-1">
              <a
                href={identity.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink-700 hover:bg-ink-100"
              >
                <Github className="h-4 w-4" />
              </a>
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink-700 hover:bg-ink-100 active:bg-ink-200"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} />

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-ink-200 bg-ink-50 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-10">
            <div>
              <div className="font-display font-bold text-ink-900">
                {identity.name}
              </div>
              <div className="text-sm text-ink-500 mt-1">
                {identity.title}
              </div>
              <div className="text-sm text-ink-500 mt-3">
                {identity.location}
              </div>
            </div>
            <div className="text-sm text-ink-500">
              <div className="font-medium text-ink-700 mb-2">Find me</div>
              <div className="flex flex-col gap-1.5">
                <a
                  href={identity.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-ink-900"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href={identity.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-ink-900"
                >
                  rushabhsorathiya.com
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-ink-200 text-xs text-ink-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>© {new Date().getFullYear()} {identity.name}. Built like the rules say.</div>
            <div className="font-mono">chishiya.eventnetworks.xyz</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
