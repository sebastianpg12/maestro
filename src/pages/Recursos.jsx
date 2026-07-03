import { BookOpen } from 'lucide-react'
import PageHero from '@/components/PageHero.jsx'
import ConstructionNotice from '@/components/ConstructionNotice.jsx'

export default function Recursos() {
  return (
    <>
      <PageHero
        eyebrow={
          <span className="inline-flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5" /> Saber Salva
          </span>
        }
        title="Herramientas para"
        accent="proteger la vida"
        subtitle="Información útil y práctica sobre legislación, cuidados, denuncias y datos curiosos para proteger y cuidar mejor a los animales."
      />
      <ConstructionNotice message="Estamos preparando guías claras sobre legislación vigente, cómo denunciar maltrato, cuidados básicos y datos curiosos. Muy pronto los vas a encontrar aquí." />
    </>
  )
}
