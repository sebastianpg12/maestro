import { useEffect, useRef, useState } from 'react'
import { GraduationCap, PawPrint, Users, Heart } from 'lucide-react'
import Badge from '@/components/ui/Badge.jsx'

const STATS = [
  { icon: GraduationCap, value: 150, suffix: '+', label: 'Talleres impartidos', sub: 'Educando comunidades' },
  { icon: PawPrint, value: 500, suffix: '+', label: 'Animales ayudados', sub: 'Vidas transformadas' },
  { icon: Users, value: 200, suffix: '+', label: 'Voluntarios activos', sub: 'Corazones comprometidos' },
  { icon: Heart, value: 25, suffix: '+', label: 'Comunidades alcanzadas', sub: 'Impacto real' },
]

function useCountUp(target, active) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let frame
    const duration = 1200
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target])
  return value
}

export default function ImpactSection() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true)
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="paw-dots relative overflow-hidden bg-gradient-to-br from-brand-500 to-brand-700 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Badge className="mx-auto bg-white/15 text-white">Nuestro impacto</Badge>
        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold sm:text-4xl">
          Transformando vidas, una a la vez
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <Counter key={s.label} stat={s} active={active} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Counter({ stat, active }) {
  const Icon = stat.icon
  const value = useCountUp(stat.value, active)
  return (
    <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-white/15">
        <Icon className="h-6 w-6" />
      </span>
      <p className="mt-6 text-4xl font-extrabold">
        {value}
        {stat.suffix}
      </p>
      <p className="mt-1 font-semibold">{stat.label}</p>
      <p className="mt-1 text-sm text-white/70">{stat.sub}</p>
    </div>
  )
}
