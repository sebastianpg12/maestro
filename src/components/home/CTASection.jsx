import { Heart, Users } from 'lucide-react'
import Button from '@/components/ui/Button.jsx'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0b1220] py-24 text-center text-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(34,181,104,0.35), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-2xl px-6">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-2xl shadow-[0_0_40px_rgba(34,181,104,0.6)]">
          🐾
        </span>
        <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
          ¿Listo para hacer la <span className="text-brand-400">diferencia</span>?
        </h2>
        <p className="mt-4 text-slate-300">
          Cada acción cuenta. Ya sea con una donación, como voluntario o simplemente compartiendo
          nuestra misión, tú puedes ser parte del cambio.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/donar" size="lg">
            <Heart className="h-4 w-4 fill-white" /> Donar ahora
          </Button>
          <Button to="/contacto" variant="ghost" size="lg">
            <Users className="h-4 w-4" /> Ser voluntario
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-400">
          <span className="flex -space-x-2">
            {[
              'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=60&q=80',
              'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=60&q=80',
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=60&q=80',
            ].map((src, i) => (
              <img key={i} src={src} alt="" className="h-8 w-8 rounded-full border-2 border-[#0b1220] object-cover" />
            ))}
          </span>
          <span>+200 voluntarios</span>
          <span className="text-slate-600">|</span>
          <span>100% de tu donación va a los animales</span>
        </div>
      </div>
    </section>
  )
}
