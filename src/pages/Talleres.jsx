import { useMemo, useState } from 'react'
import { Calendar, Clock, MapPin, Users, ArrowRight, GraduationCap } from 'lucide-react'
import PageHero from '@/components/PageHero.jsx'
import FilterTabs from '@/components/FilterTabs.jsx'
import Button from '@/components/ui/Button.jsx'
import Card from '@/components/ui/Card.jsx'
import { IMAGES } from '@/lib/images.js'

const CATEGORY_STYLES = {
  'Dueños Responsables': 'bg-blue-500',
  Niños: 'bg-rose-500',
  Comunidad: 'bg-brand-500',
}

const WORKSHOPS = [
  {
    id: 1,
    category: 'Dueños Responsables',
    filter: 'Dueños',
    status: 'Próximos',
    title: 'Tenencia Responsable de Mascotas',
    desc: 'Aprende todo sobre el cuidado integral de tu mascota: alimentación, salud, ejercicio y bienestar emocional.',
    date: '14 de marzo, 2024',
    time: '10:00 AM',
    place: 'Centro Cultural Metropolitano',
    capacity: '30 personas',
    image: IMAGES.dogSmile,
  },
  {
    id: 2,
    category: 'Niños',
    filter: 'Niños',
    status: 'Próximos',
    title: 'Amigos de Cuatro Patas',
    desc: 'Taller infantil donde los niños aprenden sobre empatía animal a través de juegos y actividades creativas.',
    date: '19 de marzo, 2024',
    time: '3:00 PM',
    place: 'Escuela Primaria Benito Juárez',
    capacity: '25 personas',
    image: IMAGES.puppyFlowers,
  },
  {
    id: 3,
    category: 'Dueños Responsables',
    filter: 'Dueños',
    status: 'Próximos',
    title: 'Primeros Auxilios para Mascotas',
    desc: 'Conoce las técnicas básicas de primeros auxilios para actuar en caso de emergencia con tu mascota.',
    date: '27 de marzo, 2024',
    time: '11:00 AM',
    place: 'Clínica Veterinaria Central',
    capacity: '20 personas',
    image: IMAGES.vetCheck,
  },
  {
    id: 4,
    category: 'Comunidad',
    filter: 'Comunidad',
    status: 'Próximos',
    title: 'Jornada de Vacunación Comunitaria',
    desc: 'Vacunación gratuita para mascotas de la comunidad, con charla sobre prevención de enfermedades.',
    date: '4 de abril, 2024',
    time: '9:00 AM',
    place: 'Plaza Principal',
    capacity: '100 personas',
    image: IMAGES.guineaPigs,
  },
]

const CATEGORY_TABS = ['Todos', 'Dueños', 'Niños', 'Comunidad']
const STATUS_TABS = ['Próximos', 'Pasados']

export default function Talleres() {
  const [category, setCategory] = useState('Todos')
  const [status, setStatus] = useState('Próximos')

  const filtered = useMemo(
    () =>
      WORKSHOPS.filter(
        (w) => (category === 'Todos' || w.filter === category) && w.status === status,
      ),
    [category, status],
  )

  return (
    <>
      <PageHero
        icon="🎓"
        eyebrow={
          <span className="inline-flex items-center gap-1.5">
            <GraduationCap className="h-3.5 w-3.5" /> Aprende con nosotros
          </span>
        }
        title="Talleres"
        accent="Educativos"
        subtitle="Educación para todos: dueños responsables, niños, familias y comunidades. Porque el conocimiento transforma vidas."
      />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-8">
          <FilterTabs options={CATEGORY_TABS} active={category} onChange={setCategory} />
          <FilterTabs options={STATUS_TABS} active={status} onChange={setStatus} />
        </div>

        {filtered.length === 0 ? (
          <p className="py-20 text-center text-gray-500">No hay talleres en esta categoría por ahora.</p>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((w) => (
              <Card key={w.id} className="overflow-hidden bg-white">
                <div className="relative">
                  <img src={w.image} alt={w.title} className="h-52 w-full object-cover" />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white ${CATEGORY_STYLES[w.category]}`}
                  >
                    {w.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ink">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{w.desc}</p>
                  <ul className="mt-5 space-y-2 text-sm text-gray-500">
                    <li className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-brand-500" /> {w.date}
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-brand-500" /> {w.time}
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-brand-500" /> {w.place}
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-brand-500" /> Cupo: {w.capacity}
                    </li>
                  </ul>
                  <Button to="/contacto" className="mt-6 w-full">
                    Inscribirse <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>

      <section className="bg-gray-50 py-20 text-center">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">
            ¿Quieres un taller en tu escuela o comunidad?
          </h2>
          <p className="mt-4 text-gray-600">
            Llevamos nuestros talleres a donde nos necesiten. Contáctanos para programar una visita.
          </p>
          <Button to="/contacto" size="lg" className="mt-7">
            Solicitar un taller <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  )
}
