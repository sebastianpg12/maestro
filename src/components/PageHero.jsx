import Badge from '@/components/ui/Badge.jsx'

export default function PageHero({ icon, eyebrow, title, accent, subtitle, dark = false }) {
  if (dark) {
    return (
      <section className="paw-dots relative overflow-hidden bg-gradient-to-br from-brand-500 to-brand-700 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          {icon && (
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-2xl">
              {icon}
            </span>
          )}
          <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">
            {title} {accent && <span className="text-ink/90">{accent}</span>}
          </h1>
          {subtitle && <p className="mt-5 text-white/90">{subtitle}</p>}
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gradient-to-br from-brand-50 via-white to-brand-50 py-20 text-center">
      <div className="mx-auto max-w-2xl px-6">
        {eyebrow && <Badge className="mx-auto">{eyebrow}</Badge>}
        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
          {title} {accent && <span className="text-brand-500">{accent}</span>}
        </h1>
        {subtitle && <p className="mt-5 text-gray-600">{subtitle}</p>}
      </div>
    </section>
  )
}
