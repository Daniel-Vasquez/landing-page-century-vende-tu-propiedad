import { ArrowRight, MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const WA_NUMBER = '5215512345678';
const WA_MSG = encodeURIComponent('Hola, tengo dudas sobre el proceso de venta con Century21. Me gustaría más información.');

export default function ValueProposition() {
  const scrollToForm = () =>
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="section-padding bg-cream" id="propuesta">
      <div className="container-narrow">
        <div className="max-w-3xl">
          <AnimatedSection>
            <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
              Por qué elegirnos
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark font-semibold leading-tight mb-8">
              Nuestra propuesta de valor
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="font-sans text-xl md:text-2xl text-dark/80 leading-relaxed mb-6 font-light">
              Más de 25 años vendiendo propiedades en CDMX.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <p className="font-sans text-dark/65 text-lg leading-relaxed mb-12">
              Metodología documentada, compradores calificados y un solo punto de contacto que cuida tu patrimonio de principio a fin.
            </p>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.32}>
            <div className="grid grid-cols-3 gap-8 border-t border-dark/10 pt-10 mb-12">
              {[
                { value: '25+', label: 'años de experiencia' },
                { value: '10', label: 'alcaldías con cobertura' },
                { value: '100%', label: 'acompañamiento hasta el cierre' },
              ].map((stat) => (
                <div key={stat.value} className="text-center">
                  <p className="font-serif text-3xl md:text-4xl text-gold font-semibold mb-1">
                    {stat.value}
                  </p>
                  <p className="font-sans text-xs text-dark/50 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.42}>
            <p className="font-sans text-dark/55 text-sm italic mb-6">
              ¿Tienes dudas sobre el proceso?
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={16} />
                Escríbenos por WhatsApp
              </a>
              <button onClick={scrollToForm} className="btn-secondary">
                Ver el formulario
                <ArrowRight size={14} />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
