import { useMemo, useState } from 'react'
import { Scale, AlertTriangle, Heart, Lightbulb, Search, ArrowRight, BookOpen, Phone } from 'lucide-react'
import PageHero from '@/components/PageHero.jsx'
import Card from '@/components/ui/Card.jsx'
import Button from '@/components/ui/Button.jsx'

const CATEGORIES = [
  { id: 'legislacion', icon: Scale, title: 'Legislación Vigente', count: 1, bg: 'bg-blue-50', iconBg: 'bg-blue-500' },
  { id: 'denuncia', icon: AlertTriangle, title: 'Cómo Denunciar', count: 2, bg: 'bg-rose-50', iconBg: 'bg-rose-500' },
  { id: 'cuidados', icon: Heart, title: 'Cuidados Básicos', count: 2, bg: 'bg-brand-50', iconBg: 'bg-brand-500' },
  { id: 'datos', icon: Lightbulb, title: 'Datos Curiosos', count: 1, bg: 'bg-amber-50', iconBg: 'bg-amber-500' },
]

const RESOURCES = [
  {
    id: 1,
    category: 'datos',
    tag: 'Datos Curiosos',
    tagColor: 'text-amber-600 bg-amber-50',
    icon: Lightbulb,
    iconColor: 'text-amber-600 bg-amber-100',
    title: '¿Sabías que los gatos ronronean para sanarse?',
    desc: 'El ronroneo de los gatos tiene propiedades curativas tanto para ellos como para sus humanos.',
  },
  {
    id: 2,
    category: 'denuncia',
    tag: 'Cómo Denunciar',
    tagColor: 'text-rose-600 bg-rose-50',
    icon: AlertTriangle,
    iconColor: 'text-rose-600 bg-rose-100',
    title: '¿Cómo denunciar maltrato animal?',
    desc: 'Guía paso a paso para reportar casos de maltrato o abandono animal en tu localidad.',
  },
  {
    id: 3,
    category: 'legislacion',
    tag: 'Legislación Vigente',
    tagColor: 'text-blue-600 bg-blue-50',
    icon: Scale,
    iconColor: 'text-blue-600 bg-blue-100',
    title: 'Ley General de Bienestar Animal',
    desc: 'Conoce tus derechos y obligaciones según la legislación mexicana vigente sobre protección animal.',
  },
  {
    id: 4,
    category: 'cuidados',
    tag: 'Cuidados Básicos',
    tagColor: 'text-brand-600 bg-brand-50',
    icon: Heart,
    iconColor: 'text-brand-600 bg-brand-100',
    title: 'Alimentación adecuada según la edad de tu mascota',
    desc: 'Aprende qué nutrientes necesita tu mascota en cada etapa de su vida.',
  },
  {
    id: 5,
    category: 'cuidados',
    tag: 'Cuidados Básicos',
    tagColor: 'text-brand-600 bg-brand-50',
    icon: Heart,
    iconColor: 'text-brand-600 bg-brand-100',
    title: 'Señales de que tu mascota necesita atención veterinaria',
    desc: 'Identifica a tiempo los síntomas que requieren una visita al veterinario.',
  },
  {
    id: 6,
    category: 'denuncia',
    tag: 'Cómo Denunciar',
    tagColor: 'text-rose-600 bg-rose-50',
    icon: AlertTriangle,
    iconColor: 'text-rose-600 bg-rose-100',
    title: 'Directorio de refugios y autoridades locales',
    desc: 'Contactos útiles para reportar y actuar frente a casos de maltrato animal.',
  },
]

export default function Recursos() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(null)

  const filtered = useMemo(() => {
    return RESOURCES.filter((r) => {
      const matchesCategory = !category || r.category === category
      const matchesQuery = r.title.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <>
      <PageHero
        eyebrow={
          <span className="inline-flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5" /> Centro de Conocimiento
          </span>
        }
        title="Recursos"
        accent="Educativos"
        subtitle="Información útil y práctica sobre legislación, cuidados, denuncias y datos curiosos para proteger y cuidar mejor a los animales."
      />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => {
            const Icon = c.icon
            const active = category === c.id
            return (
              <button
                key={c.id}
                onClick={() => setCategory(active ? null : c.id)}
                className={`rounded-xl p-6 text-left transition-all ${c.bg} ${active ? 'ring-2 ring-brand-500' : ''}`}
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${c.iconBg}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-bold text-ink">{c.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{c.count} recursos</p>
              </button>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar recursos..."
              className="h-12 w-full rounded-full border border-gray-200 bg-white pl-11 pr-5 text-sm focus:border-brand-400 focus:outline-none"
            />
          </div>
          <Button variant="dark" onClick={() => { setQuery(''); setCategory(null) }}>
            Ver todos
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => {
            const Icon = r.icon
            return (
              <Card key={r.id} className="bg-white p-7">
                <div className="flex items-center gap-3">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${r.iconColor}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${r.tagColor}`}>{r.tag}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold leading-snug text-ink">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{r.desc}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
                  Ver más <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </Card>
            )
          })}
          {filtered.length === 0 && (
            <p className="col-span-full py-10 text-center text-gray-500">No encontramos recursos con esa búsqueda.</p>
          )}
        </div>
      </section>

      <section className="bg-rose-50 py-20 text-center">
        <div className="mx-auto max-w-xl rounded-2xl bg-white px-8 py-12 shadow-card">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-rose-600">
            <AlertTriangle className="h-6 w-6" />
          </span>
          <h2 className="mt-6 text-2xl font-extrabold text-ink sm:text-3xl">¿Ves un animal en peligro?</h2>
          <p className="mt-4 text-gray-600">
            Si presencias maltrato animal o encuentras un animal herido, no dudes en actuar. Tu denuncia
            puede salvar una vida.
          </p>
          <Button to="/contacto" size="lg" className="mt-7">
            <Phone className="h-4 w-4" /> Reportar un caso
          </Button>
        </div>
      </section>
    </>
  )
}
