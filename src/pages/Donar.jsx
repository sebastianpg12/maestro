import { useMemo, useState } from 'react'
import { Heart, ShieldCheck, Gift, Palette, GraduationCap, Truck, Users2, HandHeart, Drumstick, Megaphone } from 'lucide-react'
import Card from '@/components/ui/Card.jsx'

const AMOUNTS = [
  { value: 20000, label: 'Cubre materiales de arte para un taller' },
  { value: 50000, label: 'Financia un laboratorio de empatía completo' },
  { value: 100000, label: 'Lleva un taller a una nueva institución' },
  { value: 200000, label: 'Apoya la itinerancia a una comunidad rural' },
]

const ALLOCATION = [
  { icon: GraduationCap, percent: 45, title: 'Talleres Educativos', desc: 'Laboratorios de empatía, actividades sensoriales y experiencias de aprendizaje en comunidades.' },
  { icon: Palette, percent: 25, title: 'Arte y Pedagogía', desc: 'Materiales, murales botánicos y recursos creativos para cada experiencia.' },
  { icon: Truck, percent: 20, title: 'Itinerancia', desc: 'Transporte y logística para llevar nuestras experiencias a más territorios.' },
  { icon: Users2, percent: 10, title: 'Operación', desc: 'Gastos administrativos mínimos para mantener la organización funcionando.' },
]

const TESTIMONIALS = [
  {
    quote: 'Ver el impacto real de mi donación en los talleres educativos me llena el corazón. Maestro Animal hace un trabajo increíble.',
    name: 'Laura Martínez',
    role: 'Donante mensual',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
  },
  {
    quote: 'La transparencia de esta organización es ejemplar. Sé exactamente a dónde va mi dinero y eso me da mucha confianza.',
    name: 'Pedro González',
    role: 'Voluntario y donante',
    photo: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&q=80',
  },
  {
    quote: 'Adopté a mi perrita gracias a ellos y ahora dono cada mes. Es mi forma de agradecer y ayudar a otros animales.',
    name: 'María Fernández',
    role: 'Donante',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80',
  },
]

const OTHER_WAYS = [
  { icon: HandHeart, title: 'Voluntariado', desc: 'Dona tu tiempo y talento' },
  { icon: Drumstick, title: 'Donación en especie', desc: 'Alimentos, medicinas, insumos' },
  { icon: Megaphone, title: 'Difunde', desc: 'Comparte nuestra causa' },
]

export default function Donar() {
  const [selected, setSelected] = useState(50000)
  const [custom, setCustom] = useState('')

  const amount = useMemo(() => (custom ? Number(custom) : selected), [custom, selected])

  return (
    <>
      <section className="paw-dots bg-gradient-to-br from-brand-500 to-brand-700 pb-40 pt-20 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
            <Heart className="h-6 w-6 fill-white" />
          </span>
          <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">Tu donación salva vidas</h1>
          <p className="mt-5 text-white/90">
            Cada peso cuenta. Con tu apoyo, podemos rescatar, educar y transformar la vida de miles
            de animales que nos necesitan.
          </p>
        </div>
      </section>

      <section className="mx-auto -mt-32 max-w-3xl px-6">
        <Card className="bg-white p-8 sm:p-10">
          <h2 className="text-center text-2xl font-extrabold text-ink">Elige el monto de tu donación</h2>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {AMOUNTS.map((a) => {
              const active = !custom && selected === a.value
              return (
                <button
                  key={a.value}
                  onClick={() => {
                    setSelected(a.value)
                    setCustom('')
                  }}
                  className={`relative rounded-xl border p-5 text-center transition-colors ${
                    active ? 'border-brand-500 bg-brand-50' : 'border-gray-200 hover:border-brand-300'
                  }`}
                >
                  {active && (
                    <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-xs text-white">
                      ✓
                    </span>
                  )}
                  <p className="text-2xl font-extrabold text-ink">${a.value.toLocaleString('es-CO')}</p>
                  <p className="mt-1 text-xs leading-snug text-gray-500">{a.label}</p>
                </button>
              )
            })}
          </div>

          <div className="mt-6">
            <label className="text-sm font-medium text-gray-600">O ingresa otro monto:</label>
            <div className="relative mt-2">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                min="1"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                placeholder="Otro monto"
                className="h-12 w-full rounded-xl border border-gray-200 pl-8 pr-4 text-sm focus:border-brand-400 focus:outline-none"
              />
            </div>
          </div>

          <button className="mt-7 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-brand-500 text-lg font-bold text-white shadow-sm transition-colors hover:bg-brand-600">
            <Heart className="h-5 w-5 fill-white" /> Donar ${amount ? amount.toLocaleString('es-CO') : 0} COP
          </button>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-brand-500" /> Pago seguro
            </span>
            <span className="flex items-center gap-1.5">
              <Gift className="h-4 w-4 text-brand-500" /> Deducible de impuestos
            </span>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
            Transparencia total
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-ink sm:text-4xl">¿A dónde va tu donación?</h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-600">
            Nos comprometemos con la transparencia. Cada peso de tu donación se destina a causas que
            generan impacto real.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ALLOCATION.map((a) => {
            const Icon = a.icon
            return (
              <Card key={a.title} className="bg-white p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-2xl font-extrabold text-brand-600">{a.percent}%</span>
                </div>
                <h3 className="mt-5 font-bold text-ink">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{a.desc}</p>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full rounded-full bg-brand-500" style={{ width: `${a.percent}%` }} />
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-extrabold text-ink sm:text-4xl">
            Lo que dicen nuestros donantes
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} className="bg-white p-7">
                <p className="italic leading-relaxed text-gray-600">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={t.photo} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-ink">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1220] py-24 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Otras formas de ayudar</h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-300">
            No solo las donaciones monetarias hacen la diferencia. Hay muchas formas de ser parte
            del cambio.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {OTHER_WAYS.map((w) => {
              const Icon = w.icon
              return (
                <div key={w.title} className="rounded-xl border border-white/10 bg-white/5 p-8">
                  <Icon className="mx-auto h-8 w-8 text-brand-400" />
                  <h3 className="mt-4 font-bold">{w.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{w.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
