import { GraduationCap, Users, Heart, Sparkles, Scale, HandHeart } from 'lucide-react'
import Badge from '@/components/ui/Badge.jsx'
import Card from '@/components/ui/Card.jsx'

export const ICONS = { GraduationCap, Users, Heart, Sparkles, Scale, HandHeart }

export const DEFAULT_VALUES = [
  {
    icon: 'GraduationCap',
    title: 'Educar el corazón',
    desc: 'Creamos talleres, cuentos y experiencias que despiertan empatía, promueven la tenencia responsable y enseñan respeto por los animales y la vida.',
    bg: 'bg-brand-50',
    iconBg: 'bg-brand-500',
  },
  {
    icon: 'Heart',
    title: 'Empatía activa',
    desc: 'Creemos en una empatía que no se queda solo en sentir. Invitamos a actuar, cuidar, orientar y denunciar de manera informada cuando un animal necesita ayuda.',
    bg: 'bg-rose-50',
    iconBg: 'bg-rose-500',
  },
  {
    icon: 'Sparkles',
    title: 'Creatividad disruptiva',
    desc: 'Usamos el arte, el juego, la escritura y el muralismo para hacer del aprendizaje una experiencia viva, memorable y transformadora.',
    bg: 'bg-teal-50',
    iconBg: 'bg-teal-500',
  },
]

export default function ValuesSection({
  eyebrow = 'Lo que nos mueve',
  title = 'Nuestros Valores',
  titleAccent = 'Valores',
  subtitle = 'Los principios que llevamos al aula, al territorio y a cada experiencia que creamos.',
  values = DEFAULT_VALUES,
}) {
  const [base, accent] = splitTitle(title, titleAccent)
  const gridCols = values.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mx-auto">{eyebrow}</Badge>
          <h2 className="mt-5 text-3xl font-extrabold text-ink sm:text-4xl">
            {base} <span className="text-brand-600">{accent}</span>
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
