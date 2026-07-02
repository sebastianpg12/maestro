import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Heart, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/talleres', label: 'Talleres' },
  { to: '/historias', label: 'Historias' },
  { to: '/recursos', label: 'Recursos' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-lg">
            🐾
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold text-ink">Maestro Animal</span>
            <span className="block text-xs font-medium text-brand-600">Educando corazones</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-brand-600',
                  isActive && 'bg-brand-50 text-brand-700',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <NavLink
            to="/donar"
            className="hidden h-11 items-center gap-2 rounded-full bg-brand-500 px-6 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-brand-600 sm:inline-flex"
          >
            <Heart className="h-4 w-4 fill-white" />
            Donar
          </NavLink>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-black/5 bg-white px-6 py-4 lg:hidden">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-4 py-3 text-sm font-medium text-gray-600',
                  isActive && 'bg-brand-50 text-brand-700',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/donar"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand-500 text-[15px] font-semibold text-white sm:hidden"
          >
            <Heart className="h-4 w-4 fill-white" />
            Donar
          </NavLink>
        </nav>
      )}
    </header>
  )
}
