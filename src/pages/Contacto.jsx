import { useState } from 'react'
import { MapPin, Mail, Phone, Clock, Send, Users, Heart, MessageCircle } from 'lucide-react'
import PageHero from '@/components/PageHero.jsx'
import Card from '@/components/ui/Card.jsx'
import Button from '@/components/ui/Button.jsx'

const INFO = [
  { icon: MapPin, iconBg: 'bg-brand-500', title: 'Dirección', value: 'Medellín, Colombia' },
  { icon: Mail, iconBg: 'bg-blue-500', title: 'Correo', value: 'maestroanimal.col@gmail.com' },
  { icon: Phone, iconBg: 'bg-fuchsia-500', title: 'Teléfono', value: '312 211 7077' },
  { icon: Clock, iconBg: 'bg-amber-500', title: 'Horario', value: 'Lun - Vie: 9:00 - 18:00' },
]

const FAQS = [
  { q: '¿Cómo puedo ser voluntario?', a: 'Contáctanos y te explicamos el proceso de incorporación.' },
  { q: '¿Aceptan donaciones en especie?', a: 'Sí, recibimos alimentos, medicamentos y otros insumos.' },
  { q: '¿Cómo puedo adoptar una mascota?', a: 'Visita nuestra sección de adopciones o contáctanos.' },
  { q: '¿Realizan talleres a domicilio?', a: 'Sí, llevamos nuestros talleres a escuelas y comunidades.' },
]

export default function Contacto() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow={
          <span className="inline-flex items-center gap-1.5">
            <MessageCircle className="h-3.5 w-3.5" /> Estamos aquí para ti
          </span>
        }
        title="Contáctanos, aquí empieza"
        accent="el cambio"
        subtitle="¿Tienes preguntas, sugerencias o quieres ser parte del movimiento? Nos encantaría saber de ti."
      />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INFO.map((i) => {
            const Icon = i.icon
            return (
              <Card key={i.title} className="bg-white p-7 text-center">
                <span className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl text-white ${i.iconBg}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-ink">{i.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{i.value}</p>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <Card className="bg-white p-8 sm:p-10 lg:col-span-3">
            <h2 className="text-2xl font-extrabold text-ink">Envíanos un mensaje</h2>
            <p className="mt-2 text-gray-600">
              Completa el formulario y te responderemos lo antes posible. Tu mensaje es importante
              para nosotros.
            </p>

            {sent ? (
              <div className="mt-8 rounded-xl bg-brand-50 p-6 text-center text-brand-700">
                ¡Gracias! Tu mensaje fue enviado. Te responderemos pronto.
              </div>
            ) : (
              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Nombre completo" type="text" required />
                  <Field label="Correo electrónico" type="email" required />
                </div>
                <Field label="Asunto" type="text" required />
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-600">Mensaje</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Enviar mensaje <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </Card>

          <div className="space-y-6 lg:col-span-2">
            <Card className="bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-white">
              <Users className="h-8 w-8" />
              <h3 className="mt-4 text-xl font-bold">¿Quieres ser voluntario?</h3>
              <p className="mt-2 text-sm text-white/85">
                Súmate a la manada que lleva el arte, la empatía y la educación a más comunidades cada
                día.
              </p>
              <Button to="/nosotros" variant="ghost" className="mt-6">
                Conoce más
              </Button>
            </Card>
            <Card className="bg-[#0b1220] p-8 text-white">
              <Heart className="h-8 w-8 fill-brand-400 text-brand-400" />
              <h3 className="mt-4 text-xl font-bold">Apoya nuestra causa</h3>
              <p className="mt-2 text-sm text-slate-300">
                Tu donación ayuda a rescatar, educar y transformar vidas. Cada aporte cuenta.
              </p>
              <Button to="/donar" className="mt-6">
                Donar ahora
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Preguntas Frecuentes</h2>
            <p className="mt-4 text-gray-600">¿Tienes dudas? Aquí respondemos las preguntas más comunes.</p>
          </div>
          <div className="mt-10 space-y-4">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-xl bg-white p-6 shadow-card">
                <summary className="cursor-pointer list-none font-semibold text-ink marker:content-none">
                  <span className="flex items-center justify-between">
                    {f.q}
                    <span className="text-brand-700 transition-transform group-open:rotate-45">＋</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-gray-600">{label}</label>
      <input
        {...props}
        className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm focus:border-brand-400 focus:outline-none"
      />
    </div>
  )
}
