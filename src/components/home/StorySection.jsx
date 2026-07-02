import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button.jsx'
import Badge from '@/components/ui/Badge.jsx'
import { IMAGES } from '@/lib/images.js'

export default function StorySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <img src={IMAGES.dogToy} alt="Perro rescatado" className="h-56 w-full rounded-xl object-cover" />
          <img src={IMAGES.catDog} alt="Gato y perro" className="h-56 w-full rounded-xl object-cover" />
          <img src={IMAGES.twoDogs} alt="Dos perros jugando" className="h-56 w-full rounded-xl object-cover" />
          <img src={IMAGES.puppyFlowers} alt="Cachorro entre flores" className="h-56 w-full rounded-xl object-cover" />
        </div>
        <div>
          <Badge>Nuestra Historia</Badge>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            De un pequeño taller a un <span className="text-brand-500">gran movimiento</span>
          </h2>
          <p className="mt-6 leading-relaxed text-gray-600">
            Todo comenzó con una idea simple: educar para transformar. Un pequeño grupo de
            voluntarios apasionados por los animales decidió que el cambio verdadero comienza en
            la educación y la empatía.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Hoy, Maestro Animal es una comunidad de cientos de personas comprometidas con el
            bienestar animal, llevando talleres, rescatando vidas y construyendo un mundo donde
            el respeto hacia todos los seres vivos sea la norma.
          </p>
          <Button to="/nosotros" className="mt-8">
            Leer la historia completa <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
