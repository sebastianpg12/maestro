import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button.jsx'
import Badge from '@/components/ui/Badge.jsx'
import { IMAGES } from '@/lib/images.js'

export default function StorySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <img src={IMAGES.dogToy} alt="Taller educativo de Maestro Animal" className="h-56 w-full rounded-xl object-cover" />
          <img src={IMAGES.catDog} alt="Perro junto a mural botánico" className="h-56 w-full rounded-xl object-cover" />
          <img src={IMAGES.twoDogs} alt="Equipo de Maestro Animal con sus peludos" className="h-56 w-full rounded-xl object-cover" />
          <img src={IMAGES.puppyFlowers} alt="Peludo de Maestro Animal" className="h-56 w-full rounded-xl object-cover" />
        </div>
        <div>
          <Badge>Nuestra Historia</Badge>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            El latido detrás de <span className="text-brand-500">Maestro Animal</span>
          </h2>
          <p className="mt-6 leading-relaxed text-gray-600">
            Maestro Animal nació a principios de 2024, después de recorrer distintos rincones de
            Antioquia y encontrarnos de frente con una realidad que duele: animales abandonados,
            maltratados o invisibilizados.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Decidimos ir a la raíz: unir el arte, la pedagogía y la experiencia para transformar
            la manera en que niños, jóvenes y comunidades se relacionan con los animales y con
            toda forma de vida.
          </p>
          <Button to="/nosotros" className="mt-8">
            Leer la historia completa <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
