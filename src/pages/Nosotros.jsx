import { Target, Eye, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/PageHero.jsx'
import Card from '@/components/ui/Card.jsx'
import ValuesSection from '@/components/home/ValuesSection.jsx'
import TeamSection from '@/components/home/TeamSection.jsx'
import CTASection from '@/components/home/CTASection.jsx'
import { IMAGES } from '@/lib/images.js'

const NOSOTROS_VALUES = [
  {
    icon: 'GraduationCap',
    title: 'Educar el corazón',
    desc: 'Creamos talleres, cuentos, actividades y experiencias que despiertan empatía, promueven la tenencia responsable y enseñan respeto por los animales y la vida.',
    bg: 'bg-brand-50',
    iconBg: 'bg-brand-500',
  },
  {
    icon: 'Heart',
    title: 'Empatía activa',
    desc: 'Creemos en una empatía que no se queda solo en sentir. Invitamos a actuar, cuidar, orientar y denunciar de manera informada cuando un animal necesita ayuda.',
    bg: 'bg-rose-50',
    iconBg: 'bg-rose-500',
  },
  {
    icon: 'Sparkles',
    title: 'Creatividad disruptiva',
    desc: 'Usamos el arte, el juego, la escritura, el muralismo y las estaciones sensoriales para hacer del aprendizaje una experiencia viva, memorable y transformadora.',
    bg: 'bg-teal-50',
    iconBg: 'bg-teal-500',
  },
  {
    icon: 'Scale',
    title: 'Corresponsabilidad ciudadana',
    desc: 'El bienestar animal es una tarea compartida. Por eso ayudamos a las comunidades a conocer las rutas, leyes y acciones necesarias para proteger a los animales.',
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-500',
  },
  {
    icon: 'HandHeart',
    title: 'Amor y conexión emocional',
    desc: 'Creemos en el vínculo profundo entre humanos, animales y tierra. Cuando aprendemos a cuidar, también fortalecemos nuestra humanidad y el tejido social.',
    bg: 'bg-amber-50',
    iconBg: 'bg-amber-500',
  },
]

const ACTIONS = [
  {
    title: 'Talleres Educativos',
    desc: 'Formamos a niños, jóvenes y adultos en tenencia responsable y bienestar animal.',
  },
  {
    title: 'Rescate y Rehabilitación',
    desc: 'Rescatamos animales en situación de abandono o maltrato y les brindamos atención médica.',
  },
  {
    title: 'Adopción Responsable',
    desc: 'Encontramos hogares amorosos para los animales rescatados a través de un proceso cuidadoso.',
  },
]

const STORY_BLOCKS = [
  {
    title: 'Cuando el arte y la pedagogía se abrazan',
    image: IMAGES.catDog,
    alt: 'Perro junto al mural botánico que le pintaron en casa',
    paragraphs: [
      'La idea tomó forma en una conversación íntima, en casa, junto a mi pareja. Hablábamos del dolor que nos producía ver tantas historias de abandono y maltrato, pero también de la necesidad de convertir esa tristeza en acción.',
      'Nos preguntamos: ¿Cómo hablar de bienestar animal sin que sea solo un discurso más? ¿Cómo llegar al corazón de un niño, de un joven o de un adulto en medio de un mundo lleno de pantallas, ruido y distracciones? ¿Cómo enseñar desde la sensibilidad y no desde el miedo?',
      'La respuesta apareció con fuerza: a través del arte, la lúdica, la pedagogía y la experiencia. Desde allí unimos caminos, saberes y pasiones: la investigación, la historia del arte, el muralismo botánico, la educación experiencial y el amor profundo por los animales.',
      'Porque creemos que cuando el arte toca el corazón, la educación deja huella.',
    ],
  },
  {
    title: 'Metodologías disruptivas para aprender haciendo',
    image: IMAGES.vetCheck,
    alt: 'Joven pintando una figura de arcilla en un taller de Maestro Animal',
    reverse: true,
    paragraphs: [
      'En Maestro Animal no creemos en las clases silenciosas, los discursos lejanos ni las prohibiciones que nacen únicamente desde el miedo. Creemos en experiencias que se viven, se sienten y se recuerdan.',
      'Por eso diseñamos laboratorios de empatía itinerantes: espacios educativos, creativos y participativos que despiertan la curiosidad, activan los sentidos y ayudan a las personas a ponerse en el lugar del otro.',
    ],
  },
  {
    title: 'Dentro y fuera del aula',
    image: IMAGES.guineaPigs,
    alt: 'Taller comunitario de Maestro Animal en las laderas de Medellín',
    paragraphs: [
      'Llevamos nuestras experiencias a colegios, parques, bibliotecas, espacios culturales y comunidades. Creemos que la educación no ocurre solo en un salón: también sucede en el territorio, en la conversación, en el juego, en el arte y en el encuentro con otros.',
    ],
  },
  {
    title: 'Aprender sintiendo',
    image: IMAGES.dogToy,
    alt: 'Niños aprendiendo con tarjetas de animales en un taller',
    reverse: true,
    paragraphs: [
      'Creamos actividades visuales, auditivas, corporales y emocionales para que cada participante pueda comprender, desde la experiencia, que los animales sienten, comunican, necesitan cuidado y merecen respeto.',
      'No buscamos imponer una idea. Buscamos despertar una pregunta interna: ¿cómo puedo relacionarme mejor con los animales y con la vida que me rodea?',
    ],
  },
]

export default function Nosotros() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Mediadores al servicio de"
        accent="las especies"
        subtitle="Un movimiento educativo y social que une el arte, la pedagogía y el amor por los animales para sembrar empatía y despertar conciencia."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img src={IMAGES.puppyFlowers} alt="Peludo de Maestro Animal" className="h-56 w-full rounded-xl object-cover" />
            <img src={IMAGES.catPortrait} alt="Gato acompañante" className="h-56 w-full rounded-xl object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              Nuestra Historia: el latido detrás de Maestro Animal
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              El origen de una idea con alma
            </h2>
            <p className="mt-6 leading-relaxed text-gray-600">
              <strong className="text-ink">Maestro Animal</strong> nació a principios del año 2024, después de
              recorrer distintos rincones de Antioquia y encontrarnos de frente con una realidad que duele:
              animales abandonados, maltratados, invisibilizados o tratados como si no sintieran.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Cada historia que vimos nos arrugó el corazón. Pero también nos hizo una pregunta imposible de
              ignorar: ¿qué podemos hacer para que esto no siga repitiéndose?
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Reconocemos profundamente la labor de los albergues, refugios, rescatistas y personas que
              entregan su vida a salvar animales. Su trabajo es enorme, necesario y profundamente valioso.
              Sin embargo, entendimos que muchas veces ellos atienden la consecuencia de un problema que nace
              mucho antes: en la falta de educación, empatía y conciencia. Por eso decidimos ir a la raíz.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Así nació Maestro Animal: desde la convicción de que la educación puede volver a despertar el
              corazón de una sociedad y guiarnos hacia una convivencia más justa, compasiva y consciente.
            </p>
          </div>
        </div>

        <div className="mt-24 space-y-24">
          {STORY_BLOCKS.map((block) => (
            <div
              key={block.title}
              className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
                block.reverse ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <img src={block.image} alt={block.alt} className="h-80 w-full rounded-2xl object-cover shadow-card" />
              <div>
                <h3 className="text-2xl font-bold text-ink sm:text-3xl">{block.title}</h3>
                {block.paragraphs.map((p, i) => (
                  <p key={i} className="mt-4 leading-relaxed text-gray-600">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-3xl text-center">
          <h3 className="text-2xl font-bold text-ink sm:text-3xl">Ciudadanía activa y legal</h3>
          <p className="mt-4 leading-relaxed text-gray-600">
            También acercamos a la comunidad a las herramientas legales que existen para proteger a los
            animales. Traducimos leyes, rutas de atención y mecanismos de denuncia en ejercicios prácticos,
            juegos y dinámicas fáciles de comprender.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Queremos que las personas aprendan a identificar el maltrato, conozcan las rutas locales, pierdan
            el miedo a denunciar y entiendan que proteger a un animal también es un acto de ciudadanía.
          </p>

          <h3 className="mt-16 text-2xl font-bold text-ink sm:text-3xl">Un mismo hogar</h3>
          <p className="mt-4 leading-relaxed text-gray-600">
            Hoy, cada taller, cada conversación y cada corazón tocado nos recuerda que un mundo más compasivo
            sí es posible. Maestro Animal existe para sembrar empatía, despertar conciencia y recordarnos algo
            esencial: humanos, animales y tierra habitamos un mismo hogar. Y cuando aprendemos a cuidar a los
            más vulnerables, también aprendemos a cuidar la vida en todas sus formas.
          </p>

          <p className="mt-10 text-2xl font-bold italic text-brand-600">
            &ldquo;Hagamos que los cambios sucedan&rdquo;
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 lg:grid-cols-2">
          <Card className="bg-white p-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-500 text-white">
              <Target className="h-6 w-6" />
            </span>
            <h3 className="mt-6 text-2xl font-bold text-ink">Misión</h3>
            <p className="mt-3 leading-relaxed text-gray-600">
              Transformar la forma en que las personas se relacionan con los animales, a través de
              experiencias educativas, lúdicas y sensoriales que despiertan empatía, cuidado y respeto por
              toda forma de vida. En Maestro Animal educamos desde el arte, el juego y la acción para formar
              comunidades más conscientes, compasivas y protectoras.
            </p>
          </Card>
          <Card className="bg-white p-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-500 text-white">
              <Eye className="h-6 w-6" />
            </span>
            <h3 className="mt-6 text-2xl font-bold text-ink">Visión</h3>
            <p className="mt-3 leading-relaxed text-gray-600">
              Para el año 2030, Maestro Animal será un referente querido y recomendado en educación activa
              para el bienestar animal en nuestra región. Soñamos con comunidades donde el maltrato, el
              abandono y la indiferencia den paso a una cultura viva de empatía, protección y respeto por cada
              ser sintiente.
            </p>
          </Card>
        </div>
      </section>

      <ValuesSection
        eyebrow="Lo que nos define"
        title="Nuestros Valores"
        titleAccent="Valores"
        subtitle="En Maestro Animal, los valores no son palabras bonitas: son principios que llevamos al aula, al territorio y a cada experiencia que creamos."
        values={NOSOTROS_VALUES}
      />

      <TeamSection
        eyebrow="Nuestro equipo"
        title="Conoce a quienes hacen posible el cambio"
        accent=""
      />

      <section className="bg-gradient-to-br from-brand-600 to-brand-700 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Lo que hacemos</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Nuestras acciones están enfocadas en generar impacto real y duradero.
          </p>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {ACTIONS.map((a) => (
              <div key={a.title} className="rounded-xl bg-white/10 p-8 text-left backdrop-blur">
                <CheckCircle2 className="h-8 w-8 text-brand-200" />
                <h3 className="mt-5 text-lg font-bold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
