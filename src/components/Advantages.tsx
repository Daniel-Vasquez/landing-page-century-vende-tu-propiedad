import { MapPin, Link2, Award, ArrowRight, MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const WA_NUMBER = '5215512345678';
const WA_MSG = encodeURIComponent('Hola, mi propiedad está en CDMX y me gustaría iniciar el proceso de venta.');

const alcaldias = [
  'Álvaro Obregón', 'Azcapotzalco', 'Benito Juárez', 'Coyoacán',
  'Cuauhtémoc', 'Gustavo A. Madero', 'Iztacalco', 'Iztapalapa',
  'Miguel Hidalgo', 'Venustiano Carranza',
];

export default function Advantages() {
  const scrollToForm = () =>
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="section-padding bg-white" id="ventajas">
      <div className="container-narrow">
        <AnimatedSection className="mb-16">
          <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
            Cobertura y red
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark font-semibold leading-tight">
            Ventajas de vender con nosotros
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-16">
          {/* Card 1 — Alcaldías */}
          <AnimatedSection delay={0.05}>
            <div className="group">
              <div className="w-10 h-10 bg-gold/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-gold/20">
                <MapPin size={18} className="text-gold" />
              </div>
              <h3 className="font-serif text-lg text-dark font-semibold mb-3">
                Alcaldías con cobertura activa
              </h3>
              <div className="flex flex-wrap gap-x-1">
                {alcaldias.map((a, i) => (
                  <span key={a} className="font-sans text-sm text-dark/55">
                    {a}{i < alcaldias.length - 1 ? ' ·' : ''}
                    {i < alcaldias.length - 1 ? ' ' : ''}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Card 2 — Un solo punto */}
          <AnimatedSection delay={0.15}>
            <div className="group">
              <div className="w-10 h-10 bg-gold/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-gold/20">
                <Link2 size={18} className="text-gold" />
              </div>
              <h3 className="font-serif text-lg text-dark font-semibold mb-3">
                Un solo punto de contacto, todas las puertas abiertas
              </h3>
              <p className="font-sans text-dark/60 leading-relaxed text-sm">
                Colaboramos con inmobiliarias que traen compradores calificados, pero centralizamos la estrategia. Sin duplicidades, sin precios distintos, sin pérdida de control.
              </p>
            </div>
          </AnimatedSection>

          {/* Card 3 — Aliados */}
          <AnimatedSection delay={0.25}>
            <div className="group">
              <div className="w-10 h-10 bg-gold/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-gold/20">
                <Award size={18} className="text-gold" />
              </div>
              <h3 className="font-serif text-lg text-dark font-semibold mb-3">
                Aliados estratégicos
              </h3>
              <p className="font-sans text-dark/60 leading-relaxed text-sm">
                Notarías · HSBC, brokers hipotecarios y financieras · Centros de valuación · Red Century21 en toda la república y LATAM · Miembros AMPI
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Image strip */}
        <AnimatedSection delay={0.2} className="mb-16">
          <div className="grid grid-cols-3 gap-3 h-56 md:h-72">
            {[
              'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80',
              'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=80',
              'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
            ].map((src, i) => (
              <div key={i} className="overflow-hidden">
                <img
                  src={src}
                  alt={`Propiedad en CDMX ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.35}>
          <p className="font-sans text-dark/55 text-sm italic mb-6">
            ¿Tu propiedad está en alguna de estas alcaldías?
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={16} />
              Iniciar por WhatsApp
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
