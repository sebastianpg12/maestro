import { HardHat, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button.jsx'

export default function ConstructionNotice({
  message = 'Estamos construyendo esta sección con mucho cariño. Muy pronto vas a poder ver todo el contenido aquí.',
  cta,
}) {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 text-amber-500">
        <HardHat className="h-7 w-7" />
      </span>
      <h2 className="mt-6 text-2xl font-extrabold text-ink sm:text-3xl">Página en construcción</h2>
      <p className="mt-4 leading-relaxed text-gray-600">{message}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {cta && (
          <Button href={cta.href} target={cta.href?.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
            {cta.label} <ArrowRight className="h-4 w-4" />
          </Button>
        )}
        <Button to="/contacto" variant="outline">
          Escríbenos
        </Button>
      </div>
    </section>
  )
}
