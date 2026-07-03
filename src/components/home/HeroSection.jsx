import { Sparkles, Heart, ArrowRight, GraduationCap } from 'lucide-react'
import Button from '@/components/ui/Button.jsx'
import Badge from '@/components/ui/Badge.jsx'
import { IMAGES } from '@/lib/images.js'

const STATS = [
  { value: '22', label: 'Talleres realizados' },
  { value: '770', label: 'Personas impactadas' },
  { value: '9', label: 'Instituciones vinculadas' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50">
      <div className="pointer-events-none absolute inset-0 paw-dots opacity-30" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <Badge icon={Sparkles}>Explora nuestro universo de respeto y empatía</Badge>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            La empatía salva,
            <br />
            <span className="text-brand-500">la educación transforma</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
            Somos un movimiento educativo y social que une el arte, la pedagogía y el amor por
            los animales para sembrar empatía y despertar conciencia.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/contacto" size="lg">
              <Heart className="h-4 w-4 fill-white" /> Únete al movimiento
            </Button>
            <Button to="/nosotros" variant="outline" size="lg">
              Ver nuestro impacto <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-10">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-brand-600">{s.value}</p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src={IMAGES.heroDog}
              alt="Uno de los peludos de Maestro Animal"
              className="h-[420px] w-full object-cover sm:h-[480px]"
            />
          </div>
          <div className="absolute -left-4 top-10 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-3 shadow-xl backdrop-blur sm:-left-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-600">
              <Heart className="h-5 w-5 fill-brand-600" />
            </span>
            <div>
              <p className="text-lg font-extrabold text-ink leading-none">770</p>
              <p className="text-xs text-gray-500">Personas impactadas</p>
            </div>
          </div>
          <div className="absolute -right-4 bottom-10 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-3 shadow-xl backdrop-blur sm:-right-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
              <GraduationCap className="h-5 w-5" />
            </span>
            <div>
              <p className="text-lg font-extrabold text-ink leading-none">22</p>
              <p className="text-xs text-gray-500">Talleres realizados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
