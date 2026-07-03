import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone, ArrowRight } from 'lucide-react'

const NAV = [
  { to: '/', label: 'Portal' },
  { to: '/nosotros', label: 'Raíz' },
  { to: '/talleres', label: 'Actívate' },
  { to: '/historias', label: 'Latidos' },
  { to: '/recursos', label: 'Saber Salva' },
  { to: '/contacto', label: 'Puente' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0b1220] text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-lg">
              🐾
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-extrabold text-white">Maestro Animal</span>
              <span className="block text-xs font-medium text-brand-400">Educando corazones</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Educamos desde la empatía para proteger la vida animal, despertar conciencia y
            recordarnos que el respeto también se aprende.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-500"
                aria-label="Red social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold text-white">Navegación</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-slate-400 transition-colors hover:text-brand-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-bold text-white">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-brand-400" /> Medellín, Colombia
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-brand-400" /> maestroanimal.col@gmail.com
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-brand-400" /> 312 211 7077
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-bold text-white">Únete a la manada</h3>
          <p className="mt-4 text-sm text-slate-400">
            Recibe historias inspiradoras y noticias de impacto.
          </p>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Tu correo"
              className="h-11 w-full rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-slate-500 focus:border-brand-500 focus:outline-none"
            />
            <button
              type="submit"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white transition-colors hover:bg-brand-600"
              aria-label="Suscribirse"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <p>© 2024 Maestro Animal. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-400">Aviso de privacidad</a>
            <a href="#" className="hover:text-brand-400">Transparencia</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
