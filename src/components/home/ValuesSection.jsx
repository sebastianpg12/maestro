import { GraduationCap, Users, Heart, Sparkles } from 'lucide-react'
import Badge from '@/components/ui/Badge.jsx'
import Card from '@/components/ui/Card.jsx'

export const ICONS = { GraduationCap, Users, Heart, Sparkles }

export const DEFAULT_VALUES = [
  {
    icon: 'GraduationCap',
    title: 'Educación',
    desc: 'Creemos que el conocimiento transforma. Educamos para crear conciencia y formar ciudadanos responsables con la vida animal.',
    bg: 'bg-brand-50',
    iconBg: 'bg-brand-500',
  },
  {
    icon: 'Users',
    title: 'Comunidad',
    desc: 'Juntos somos más fuertes. Construimos redes de apoyo y colaboración para multiplicar nuestro impacto positivo.',
    bg: 'bg-teal-50',
    iconBg: 'bg-teal-500',
  },
  {
    icon: 'Heart',
    title: 'Empatía',
    desc: 'Ponernos en el lugar del otro, humano o animal, es el primer paso para construir un mundo más compasivo.',
    bg: 'bg-rose-50',
    iconBg: 'bg-rose-500',
  },
]

export default function ValuesSection({
  eyebrow = 'Lo que nos mueve',
  title = 'Nuestros Valores',
  titleAccent = 'Valores',
  subtitle = 'Tres pilares fundamentales que guían cada acción, cada taller, cada rescate.',
  values = DEFAULT_VALUES,
}) {
  const [base, accent] = splitTitle(title, titleAccent)
  const gridCols = values.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mx-auto">{eyebrow}</Badge>
          <h2 className="mt-5 text-3xl font-extrabold text-ink sm:text-4xl">
            {base} <span className="text-brand-500">{accent}</span>
          </h2>
          {subtitle && <p className="mt-4 text-gray-600">{subtitle}</p>}
        </div>

        <div className={`mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 ${gridCols}`}>
          {values.map((v) => {
            const Icon = ICONS[v.icon]
            return (
              <Card key={v.title} className={`p-8 shadow-none ${v.bg}`}>
                <span className={`flex h-14 w-14 items-center justify-center rounded-xl ${v.iconBg} text-white`}>
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{v.desc}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function splitTitle(title, accent) {
  if (!title.includes(accent)) return [title, '']
  return [title.replace(accent, '').trim(), accent]
}
