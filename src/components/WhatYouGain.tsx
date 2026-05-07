import { Check, ArrowRight, MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const WA_NUMBER = '5215512345678';
const WA_MSG = encodeURIComponent('Hola, me gustaría saber más sobre los beneficios de vender mi propiedad con Century21.');

const benefits = [
  'Valuación comercial con datos reales de mercado',
  'Compradores calificados — sin curiosos',
  'Promoción digital premium incluida',
  'Negociación profesional en tu favor',
  'Acompañamiento legal hasta la escritura',
  'Diagnóstico gratuito para empezar',
];

export default function WhatYouGain() {
  const scrollToForm = () =>
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="section-padding bg-cream" id="beneficios">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=85"
                  alt="Asesor profesional Century21 CDMX"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border border-gold/25 -z-10" />
              {/* Mini badge */}
              <div className="absolute bottom-6 right-6 bg-white p-4 shadow-xl">
                <p className="font-serif text-2xl text-gold font-semibold">25+</p>
                <p className="font-sans text-xs text-dark/60 leading-tight mt-1">
                  años en el mercado<br />de CDMX
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: copy */}
          <div>
            <AnimatedSection delay={0.1}>
              <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
                Lo que obtienes
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark font-semibold leading-tight mb-8">
                ¿Qué ganas al vender con nosotros?
              </h2>
            </AnimatedSection>

            <div className="space-y-4 mb-10">
              {benefits.map((item, i) => (
                <AnimatedSection key={i} delay={0.15 + i * 0.07}>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-gold" strokeWidth={2.5} />
                    </div>
                    <p className="font-sans text-dark/70 leading-relaxed">{item}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.6}>
              <p className="font-sans text-dark/55 text-sm italic mb-6">
                Todo esto empieza con una conversación.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
                  Prefiero el formulario
                  <ArrowRight size={14} />
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
