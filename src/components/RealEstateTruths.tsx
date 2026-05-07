import { ArrowRight, MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const WA_NUMBER = '5215512345678';
const WA_MSG = encodeURIComponent('Hola, reconocí una situación que describe mi caso y me gustaría hablar con un asesor de Century21.');

const truths = [
  {
    objection: 'No quiero pagar comisión',
    reality: 'La comisión es lo que separa publicar de vender bien.',
  },
  {
    objection: 'Tengo un conocido que puede ayudarme',
    reality: 'Tu conocido puede intentarlo. 25 años de trayectoria y la red Century21 lo hacen posible.',
  },
  {
    objection: 'Quiero que muchas inmobiliarias promuevan mi casa',
    reality:
      'Más inmobiliarias es precio disperso y control perdido. Nosotros organizamos la venta, colaboramos con quien trae compradores y protegemos tu precio.',
  },
  {
    objection: 'No tengo apuro, puedo esperar',
    reality:
      'En inmobiliario, el tiempo sin movimiento baja el precio. Un plan estructurado convierte la espera en ventaja.',
  },
  {
    objection: 'Ya trabajé con una inmobiliaria y no funcionó',
    reality:
      'Hacemos un análisis de factibilidad para encontrar por qué no funcionó. Sin costo.',
  },
  {
    objection: '¿Es buen momento para vender?',
    reality:
      'Depende de tu zona y tu propiedad. Analizamos mercado, competencia y demanda. Si el momento es bueno, lo aprovechamos. Si no, te lo decimos con honestidad.',
  },
  {
    objection: 'Es fácil vender',
    reality:
      'Publicar es fácil. Vender al precio correcto, con el comprador correcto y sin problemas legales, no lo es.',
  },
];

export default function RealEstateTruths() {
  const scrollToForm = () =>
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="section-padding bg-white" id="verdades">
      <div className="container-narrow">
        <AnimatedSection className="mb-14">
          <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
            Sin rodeos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark font-semibold leading-tight">
            Verdades inmobiliarias que pocos te explican
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
          {truths.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="py-6 border-b border-dark/8">
                <p className="font-sans text-xs font-medium tracking-wide uppercase text-dark/35 mb-2">
                  "{t.objection}"
                </p>
                <p className="font-serif text-base md:text-lg text-dark leading-snug">
                  {t.reality}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="mt-12">
          <p className="font-sans text-dark/55 text-sm italic mb-6">
            ¿Reconociste alguna de estas situaciones?
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={16} />
              Hablemos por WhatsApp
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
