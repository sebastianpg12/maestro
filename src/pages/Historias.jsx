import { BookOpen } from 'lucide-react'
import PageHero from '@/components/PageHero.jsx'
import ConstructionNotice from '@/components/ConstructionNotice.jsx'

export default function Historias() {
  return (
    <>
      <PageHero
        eyebrow={
          <span className="inline-flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5" /> Latidos
          </span>
        }
        title="Relatos que inspiran"
        accent="al cambio"
        subtitle="Cada animal tiene una historia. Cada historia tiene el poder de transformar corazones."
      />
      <ConstructionNotice
        message="Estamos recopilando y escribiendo las historias de rescate, adopción y segunda oportunidad que merecen ser contadas. ¿Tienes una historia de tu peludo que quieras compartir?"
        cta={{ label: 'Envíanos tu historia', href: 'https://forms.gle/XZTbSqsCCC8HFCwLA' }}
      />
    </>
  )
}
