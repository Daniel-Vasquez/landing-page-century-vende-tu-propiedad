import { ArrowRight, MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const WA_NUMBER = '5215512345678';
const WA_MSG = encodeURIComponent('Hola, me gustaría saber cómo aplicaría el proceso para vender mi propiedad en CDMX.');

const steps = [
  {
    num: '01',
    title: 'Análisis de factibilidad',
    body: 'Revisamos ubicación, documentación y mercado para definir el precio correcto antes de salir a vender.',
  },
  {
    num: '02',
    title: 'Promoción personalizada',
    body: 'Portales, fotografía profesional, recorridos virtuales, open house y marketing digital. Todo incluido.',
  },
  {
    num: '03',
    title: 'Filtrado de prospectos',
    body: 'Solo te presentamos compradores con capacidad real y decisión de compra. Tu tiempo no se negocia.',
  },
  {
    num: '04',
    title: 'Representación y negociación',
    body: 'Negociamos en tu favor. Protegemos tu precio y la seguridad de la operación.',
  },
  {
    num: '05',
    title: 'Contratos y cierre',
    body: 'Del contrato a la escritura. Te acompañamos hasta la firma, sin pendientes.',
  },
];

export default function HowWeWork() {
  const scrollToForm = () =>
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="section-padding bg-white" id="proceso">
      <div className="container-narrow">
        {/* Header */}
        <AnimatedSection className="mb-16 md:mb-20">
          <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
            Nuestro proceso
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark font-semibold leading-tight mb-4">
            ¿Cómo trabajamos?
          </h2>
          <p className="font-sans text-dark/60 text-lg">
            5 pasos. Proceso documentado. Sin sorpresas.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.08}>
              <div className="group flex gap-8 md:gap-12 py-8 border-b border-dark/8 last:border-0 transition-colors duration-300 hover:bg-cream/30 px-2 -mx-2">
                <div className="shrink-0 pt-1">
                  <span className="font-serif text-4xl md:text-5xl font-light text-gold/30 group-hover:text-gold/60 transition-colors duration-300 select-none">
                    {step.num}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-lg md:text-xl text-dark font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-dark/60 leading-relaxed">{step.body}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTAs */}
        <AnimatedSection delay={0.5} className="mt-16 flex flex-col sm:flex-row gap-4 items-start">
          <p className="font-sans text-dark/60 text-sm italic self-center sm:mr-4 hidden sm:block">
            ¿Quieres saber cómo aplicaría este proceso a tu propiedad?
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle size={16} />
            Hablar por WhatsApp
          </a>
          <button onClick={scrollToForm} className="btn-secondary">
            Llenar el formulario
            <ArrowRight size={14} />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
