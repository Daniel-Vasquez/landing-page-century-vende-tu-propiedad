import { useState } from 'react';
import { Plus, Minus, ArrowRight, MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const WA_NUMBER = '5215512345678';
const WA_MSG = encodeURIComponent('Hola, tengo una pregunta sobre el proceso de venta con Century21 en CDMX.');

const faqs = [
  {
    q: '¿Cuánto vale mi propiedad?',
    a: 'Realizamos valuación profesional. Te mostramos comparables, ventana de precio y estrategia ideal para maximizar tu resultado en el mercado actual.',
  },
  {
    q: '¿Cuánto tarda vender?',
    a: 'Con documentación en orden, el proceso toma aproximadamente 90 días. Este tiempo puede variar según la zona, precio y condición de la propiedad.',
  },
  {
    q: '¿Qué documentos necesito?',
    a: 'Título/Escritura, Régimen en condominio (si aplica), Número oficial y alineamiento, Folio Real RPP, Boletas de Predial, Boleta de agua, Identificación oficial de el o los propietarios, Cédula de situación fiscal. En la revisión inicial te confirmamos si falta algo.',
  },
  {
    q: '¿Aceptan operaciones con crédito?',
    a: 'Sí. Trabajamos con compradores que usan crédito bancario o institucional, excepto IMSS y CFE.',
  },
  {
    q: '¿Cómo filtran a los interesados?',
    a: 'Verificamos capacidad financiera, identidad y seriedad antes de mostrarte a cualquier prospecto. Solo te presentamos compradores reales.',
  },
  {
    q: '¿Van a bajar mi precio?',
    a: 'Nuestro compromiso es defender tu valor real con evidencia de mercado. Te mostramos los datos para que decidas con información, no con presión.',
  },
  {
    q: '¿En qué alcaldías de CDMX tienen cobertura?',
    a: 'Álvaro Obregón, Azcapotzalco, Benito Juárez, Coyoacán, Cuauhtémoc, Gustavo A. Madero, Iztacalco, Iztapalapa, Miguel Hidalgo y Venustiano Carranza.',
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 0.06}>
      <div className="border-b border-dark/8">
        <button
          className="w-full flex items-center justify-between py-5 text-left gap-4 group"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <h3 className="font-serif text-base md:text-lg text-dark font-medium group-hover:text-gold transition-colors duration-200">
            {q}
          </h3>
          <span className="shrink-0 w-7 h-7 flex items-center justify-center border border-dark/20 group-hover:border-gold group-hover:bg-gold group-hover:text-white transition-all duration-200">
            {open ? <Minus size={14} /> : <Plus size={14} />}
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-400 ease-in-out ${
            open ? 'max-h-48 pb-5' : 'max-h-0'
          }`}
        >
          <p className="font-sans text-dark/60 leading-relaxed pr-10">{a}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function FAQs() {
  const scrollToForm = () =>
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="section-padding bg-cream" id="preguntas">
      <div className="container-narrow">
        <AnimatedSection className="mb-12">
          <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
            Resolvemos tus dudas
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark font-semibold leading-tight">
            Preguntas frecuentes
          </h2>
        </AnimatedSection>

        <div className="mb-12">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <p className="font-sans text-dark/55 text-sm italic mb-6">
            ¿No encontraste tu pregunta?
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={16} />
              Pregúntanos por WhatsApp
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
