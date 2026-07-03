import { GraduationCap } from 'lucide-react'
import PageHero from '@/components/PageHero.jsx'
import ConstructionNotice from '@/components/ConstructionNotice.jsx'

export default function Talleres() {
  return (
    <>
      <PageHero
        icon="🎓"
        eyebrow={
          <span className="inline-flex items-center gap-1.5">
            <GraduationCap className="h-3.5 w-3.5" /> Actívate
          </span>
        }
        title="Agenda un taller o"
        accent="suma tu huella"
        subtitle="Estamos terminando de construir el calendario de talleres. Mientras tanto, escríbenos si quieres llevar una experiencia de Maestro Animal a tu escuela o comunidad."
      />
      <ConstructionNotice message="Estamos afinando cada detalle de nuestros próximos talleres y laboratorios de empatía. Muy pronto vas a poder ver aquí las fechas, cupos e inscripciones." />
    </>
  )
}
