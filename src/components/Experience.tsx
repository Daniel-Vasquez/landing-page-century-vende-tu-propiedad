import AnimatedSection from './AnimatedSection';

const badges = [
  { label: 'Century 21', sub: 'más de 30 años en el mercado' },
  { label: 'AMPI', sub: 'miembros acreditados' },
  { label: '25+ años', sub: 'de experiencia del equipo' },
];

export default function Experience() {
  return (
    <section className="section-padding bg-dark" id="experiencia">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <AnimatedSection>
              <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
                Trayectoria y respaldo
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight mb-8">
                Experiencia y certificaciones
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 gap-6">
              {badges.map((b, i) => (
                <AnimatedSection key={b.label} delay={0.1 + i * 0.12}>
                  <div className="flex items-center gap-5 border-l-2 border-gold pl-5">
                    <div>
                      <p className="font-serif text-xl text-white font-semibold">{b.label}</p>
                      <p className="font-sans text-white/50 text-sm mt-0.5">{b.sub}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=85"
                alt="Asesor profesional Century21"
                className="w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
