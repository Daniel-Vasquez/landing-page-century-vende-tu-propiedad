import { CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const WA_NUMBER = '5215512345678';
const WA_MSG = encodeURIComponent('Hola, me gustaría recibir mi diagnóstico gratuito para vender mi propiedad en CDMX.');

// ⚠️ CONFIRMAR CON CLIENTE — los 3 entregables exactos antes de publicar
const deliverables = [
  'Valuación comercial con datos reales de mercado y comparables activos en tu zona',
  'Análisis de viabilidad de venta: documentación, condición legal y tiempo estimado',
  'Estrategia de precio y exposición personalizada para tu tipo de propiedad',
];

export default function FreeDiagnosis() {
  const scrollToForm = () =>
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="section-padding bg-dark" id="diagnostico">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: copy */}
          <div>
            <AnimatedSection>
              <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
                Sin costo · Sin compromiso
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight mb-8">
                ¿Qué incluye el diagnóstico gratuito?
              </h2>
            </AnimatedSection>

            <div className="space-y-5 mb-10">
              {deliverables.map((item, i) => (
                <AnimatedSection key={i} delay={0.1 + i * 0.1}>
                  <div className="flex gap-4">
                    <CheckCircle size={20} className="text-gold shrink-0 mt-0.5" />
                    <p className="font-sans text-white/75 leading-relaxed">{item}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.45} className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={16} />
                Quiero mi diagnóstico gratuito
                <ArrowRight size={15} />
              </a>
              <button onClick={scrollToForm} className="btn-secondary-light">
                Prefiero el formulario
                <ArrowRight size={14} />
              </button>
            </AnimatedSection>
          </div>

          {/* Right: image */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=85"
                  alt="Interior moderno de departamento en CDMX"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Gold accent */}
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-gold/30 -z-10" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
