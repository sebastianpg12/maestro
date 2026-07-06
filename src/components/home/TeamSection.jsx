import Badge from '@/components/ui/Badge.jsx'
import { TEAM } from '@/lib/images.js'

export default function TeamSection({
  eyebrow = 'Conoce al equipo',
  title = 'Las personas detrás del',
  accent = 'movimiento',
  subtitle = 'Un equipo apasionado y comprometido con la causa animal.',
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Badge className="mx-auto">{eyebrow}</Badge>
        <h2 className="mt-5 text-3xl font-extrabold text-ink sm:text-4xl">
          {title} <span className="text-brand-600">{accent}</span>
        </h2>
        <p className="mt-4 text-gray-600">{subtitle}</p>
      </div>

      <div
        className={`mx-auto mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 ${
          TEAM.length > 2 ? 'lg:grid-cols-4' : 'max-w-2xl'
        }`}
      >
        {TEAM.map((member) => (
          <div key={member.name} className="text-center">
            <div className="relative mx-auto h-32 w-32">
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-32 w-32 rounded-full border-4 border-brand-100 object-cover"
                />
              ) : (
                <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-brand-100 bg-brand-50 text-3xl font-extrabold text-brand-600">
                  {member.name.charAt(0)}
                </div>
              )}
              <span className="absolute bottom-0 right-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-sm">
                🐾
              </span>
            </div>
            <h3 className="mt-5 text-lg font-bold text-ink">{member.name}</h3>
            <p className="text-sm font-semibold text-brand-600">{member.role}</p>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-gray-600">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
