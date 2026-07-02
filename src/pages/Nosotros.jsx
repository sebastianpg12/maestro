import { Target, Eye, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/PageHero.jsx'
import Badge from '@/components/ui/Badge.jsx'
import Card from '@/components/ui/Card.jsx'
import ValuesSection from '@/components/home/ValuesSection.jsx'
import TeamSection from '@/components/home/TeamSection.jsx'
import CTASection from '@/components/home/CTASection.jsx'
import { IMAGES } from '@/lib/images.js'

const NOSOTROS_VALUES = [
  {
    icon: 'GraduationCap',
    title: 'Educación',
    desc: 'Creemos que el conocimiento es la herramienta más poderosa para generar cambio. A través de talleres, charlas y materiales educativos, formamos ciudadanos conscientes y responsables.',
    bg: 'bg-brand-50',
    iconBg: 'bg-brand-500',
  },
  {
    icon: 'Users',
    title: 'Comunidad',
    desc: 'Trabajamos de la mano con vecinos, escuelas, organizaciones y gobiernos locales. Juntos construimos redes de protección y cuidado para los animales.',
    bg: 'bg-teal-50',
    iconBg: 'bg-teal-500',
  },
  {
    icon: 'Heart',
    title: 'Empatía',
    desc: 'Cada ser vivo merece respeto y compasión. Fomentamos la empatía como valor fundamental, enseñando a ponernos en el lugar del otro.',
    bg: 'bg-rose-50',
    iconBg: 'bg-rose-500',
  },
  {
    icon: 'Sparkles',
    title: 'Transparencia',
    desc: 'Operamos con honestidad y rendimos cuentas a nuestra comunidad. Cada donación, cada acción, cada resultado es compartido abiertamente.',
    bg: 'bg-amber-50',
    iconBg: 'bg-amber-500',
  },
]

const ACTIONS = [
  {
    title: 'Talleres Educativos',
    desc: 'Formamos a niños, jóvenes y adultos en tenencia responsable y bienestar animal.',
  },
  {
    title: 'Rescate y Rehabilitación',
    desc: 'Rescatamos animales en situación de abandono o maltrato y les brindamos atención médica.',
  },
  {
    title: 'Adopción Responsable',
    desc: 'Encontramos hogares amorosos para los animales rescatados a través de un proceso cuidadoso.',
  },
]

export default function Nosotros() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Un movimiento nacido del"
        accent="amor"
        subtitle="Somos una organización sin fines de lucro dedicada a la educación, protección y bienestar animal. Creemos que cada vida importa."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img src={IMAGES.dogToy} alt="Perro rescatado" className="h-56 w-full rounded-xl object-cover" />
            <img src={IMAGES.catDog} alt="Gato y perro" className="h-56 w-full rounded-xl object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Nuestra Historia</h2>
            <p className="mt-6 leading-relaxed text-gray-600">
              <strong className="text-ink">Maestro Animal</strong> nació en 2018 de un pequeño grupo de voluntarios
              que compartían un sueño: un mundo donde humanos y animales convivan en armonía y respeto mutuo.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Lo que comenzó como talleres gratuitos en parques y escuelas, se ha convertido en un movimiento
              que alcanza a miles de personas cada año.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Hoy, contamos con un equipo de profesionales y más de 200 voluntarios comprometidos que trabajan
              incansablemente para educar, rescatar y transformar la relación entre las personas y los animales.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 lg:grid-cols-2">
          <Card className="bg-white p-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-500 text-white">
              <Target className="h-6 w-6" />
            </span>
            <h3 className="mt-6 text-2xl font-bold text-ink">Misión</h3>
            <p className="mt-3 leading-relaxed text-gray-600">
              Educar a la comunidad sobre el respeto, cuidado y protección de los animales, promoviendo la
              tenencia responsable y despertando la empatía hacia todas las formas de vida a través de
              programas educativos, rescate y acciones comunitarias.
            </p>
          </Card>
          <Card className="bg-white p-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-500 text-white">
              <Eye className="h-6 w-6" />
            </span>
            <h3 className="mt-6 text-2xl font-bold text-ink">Visión</h3>
            <p className="mt-3 leading-relaxed text-gray-600">
              Ser la organización líder en educación y bienestar animal en Latinoamérica, construyendo
              comunidades donde el respeto hacia los animales sea un valor fundamental y donde ningún animal
              sufra por negligencia o maltrato.
            </p>
          </Card>
        </div>
      </section>

      <ValuesSection
        eyebrow="Lo que nos define"
        title="Nuestros Valores"
        titleAccent="Valores"
        subtitle=""
        values={NOSOTROS_VALUES}
      />

      <TeamSection
        eyebrow="Nuestro equipo"
        title="Conoce a quienes hacen posible el cambio"
        accent=""
      />

      <section className="bg-gradient-to-br from-brand-600 to-brand-700 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Lo que hacemos</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Nuestras acciones están enfocadas en generar impacto real y duradero.
          </p>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {ACTIONS.map((a) => (
              <div key={a.title} className="rounded-xl bg-white/10 p-8 text-left backdrop-blur">
                <CheckCircle2 className="h-8 w-8 text-brand-200" />
                <h3 className="mt-5 text-lg font-bold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
