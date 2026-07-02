import { useMemo, useState } from 'react'
import { Calendar, ArrowRight, BookOpen, Mail } from 'lucide-react'
import PageHero from '@/components/PageHero.jsx'
import FilterTabs from '@/components/FilterTabs.jsx'
import Button from '@/components/ui/Button.jsx'
import Card from '@/components/ui/Card.jsx'
import { IMAGES } from '@/lib/images.js'

const CATEGORY_STYLES = {
  'Caso de Éxito': 'bg-brand-500',
  Educación: 'bg-blue-500',
  Rescate: 'bg-rose-500',
}

const FEATURED = {
  category: 'Historia Destacada',
  title: 'Luna: De las calles a un hogar lleno de amor',
  desc: 'La historia de una perrita que encontró una segunda oportunidad después de meses viviendo en las calles.',
  image: IMAGES.dogSmile,
}

const STORIES = [
  {
    id: 1,
    tag: 'Caso de Éxito',
    filter: 'Casos de Éxito',
    date: '28 de diciembre, 2025',
    name: 'Max',
    title: 'Max: El gato que cambió una familia',
    desc: 'Conoce cómo Max, un gato rescatado, transformó la vida de una familia y les enseñó sobre compasión.',
    image: IMAGES.catPortrait,
  },
  {
    id: 2,
    tag: 'Educación',
    filter: 'Educación',
    date: '28 de diciembre, 2025',
    name: null,
    title: 'Niños de la escuela Hidalgo aprenden sobre empatía animal',
    desc: 'Más de 100 niños participaron en nuestro taller Amigos de Cuatro Patas y descubrieron la importancia del respeto hacia los animales.',
    image: IMAGES.puppyFlowers,
  },
  {
    id: 3,
    tag: 'Rescate',
    filter: 'Rescates',
    date: '28 de diciembre, 2025',
    name: 'Luna',
    title: 'Luna: De las calles a un hogar lleno de amor',
    desc: 'La historia de una perrita que encontró una segunda oportunidad después de meses viviendo en las calles.',
    image: IMAGES.dogSmile,
  },
  {
    id: 4,
    tag: 'Rescate',
    filter: 'Rescates',
    date: '28 de diciembre, 2025',
    name: 'Rocky',
    title: 'Rocky: Un guerrero de cuatro patas',
    desc: 'La increíble recuperación de Rocky después de un accidente que casi le cuesta la vida.',
    image: IMAGES.twoDogs,
  },
]

const TABS = ['Todas', 'Rescates', 'Educación', 'Casos de Éxito', 'Entrevistas']

export default function Historias() {
  const [tab, setTab] = useState('Todas')

  const filtered = useMemo(
    () => (tab === 'Todas' ? STORIES : STORIES.filter((s) => s.filter === tab)),
    [tab],
  )

  return (
    <>
      <PageHero
        eyebrow={
          <span className="inline-flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5" /> Bitácora Animal
          </span>
        }
        title="Historias que"
        accent="inspiran"
        subtitle="Cada animal tiene una historia. Cada historia tiene el poder de transformar corazones."
      />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="overflow-hidden rounded-2xl bg-[#0b1220] shadow-xl md:grid md:grid-cols-2">
          <img src={FEATURED.image} alt={FEATURED.title} className="h-64 w-full object-cover md:h-full" />
          <div className="p-8 text-white md:p-12">
            <span className="inline-block rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold">
              {FEATURED.category}
            </span>
            <h2 className="mt-5 text-2xl font-extrabold leading-tight sm:text-3xl">{FEATURED.title}</h2>
            <p className="mt-4 text-slate-300">{FEATURED.desc}</p>
            <Button to="/historias" variant="ghost" className="mt-7">
              Leer historia <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-14">
          <FilterTabs options={TABS} active={tab} onChange={setTab} />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <Card key={s.id} className="overflow-hidden bg-white">
              <div className="relative">
                <img src={s.image} alt={s.title} className="h-52 w-full object-cover" />
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white ${CATEGORY_STYLES[s.tag]}`}
                >
                  {s.tag}
                </span>
                {s.name && (
                  <span className="absolute bottom-3 left-4 flex items-center gap-1.5 text-sm font-semibold text-white">
                    🐾 {s.name}
                  </span>
                )}
              </div>
              <div className="p-6">
                <p className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Calendar className="h-3.5 w-3.5" /> {s.date}
                </p>
                <h3 className="mt-2 text-lg font-bold leading-snug text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.desc}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
                  Leer historia <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-500 to-brand-700 py-20 text-center text-white">
        <div className="mx-auto max-w-xl px-6">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-2xl">
            💗
          </span>
          <h2 className="mt-6 text-3xl font-extrabold">Recibe historias que inspiran</h2>
          <p className="mt-4 text-white/90">
            Suscríbete y entérate de nuestros rescates, talleres e historias de transformación.
          </p>
          <form
            className="mx-auto mt-7 flex max-w-md gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="h-12 w-full rounded-full border border-white/30 bg-white/10 px-5 text-sm text-white placeholder:text-white/60 focus:outline-none"
            />
            <button
              type="submit"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-brand-600"
              aria-label="Suscribirse"
            >
              <Mail className="h-5 w-5" />
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
