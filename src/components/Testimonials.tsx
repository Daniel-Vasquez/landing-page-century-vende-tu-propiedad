import { Quote, ArrowRight, MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const WA_NUMBER = '5215512345678';
const WA_MSG = encodeURIComponent('Hola, quiero vender mi propiedad en CDMX con Century21.');

const testimonials = [
  {
    quote:
      'El proceso fue mucho más ágil de lo que esperaba. En menos de 90 días cerramos la venta de nuestro departamento en Narvarte al precio que queríamos. El acompañamiento legal fue impecable.',
    name: 'Alejandra M.',
    location: 'Benito Juárez, CDMX',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    quote:
      'Ya había intentado vender con otra inmobiliaria y nunca llegaron compradores serios. Con Century21 en menos de dos semanas tuve visitas de personas con crédito aprobado. La diferencia es el filtro que hacen.',
    name: 'Roberto G.',
    location: 'Miguel Hidalgo, CDMX',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    quote:
      'Lo que más me sorprendió fue la exposición de la propiedad: fotografías profesionales, recorrido virtual, portales y hasta WhatsApp. Vendí un 8% por encima de lo que pensaba pedir.',
    name: 'Patricia V.',
    location: 'Coyoacán, CDMX',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
  },
];

export default function Testimonials() {
  const scrollToForm = () =>
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="section-padding bg-white" id="testimonios">
      <div className="container-narrow">
        <AnimatedSection className="mb-16">
          <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
            Resultados reales
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark font-semibold leading-tight mb-4">
            Testimonios y resultados
          </h2>
          <p className="font-sans text-dark/60 text-lg max-w-xl">
            Lo que más destacan nuestros clientes: seguridad, rapidez y máxima exposición de sus propiedades.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="border border-dark/8 p-7 h-full flex flex-col hover:border-gold/40 transition-colors duration-300">
                <Quote size={22} className="text-gold/50 mb-4 shrink-0" />
                <p className="font-sans text-dark/65 leading-relaxed text-sm flex-1 mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover grayscale"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-sans font-medium text-sm text-dark">{t.name}</p>
                    <p className="font-sans text-xs text-dark/45">{t.location}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.35}>
          <p className="font-sans text-dark/55 text-sm italic mb-6">
            Ellos ya vendieron. ¿Cuándo empezamos con tu propiedad?
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={16} />
              Quiero vender por WhatsApp
            </a>
            <button onClick={scrollToForm} className="btn-secondary">
              Llenar el formulario
              <ArrowRight size={14} />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
