import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

const WA_NUMBER = '5215512345678'; // ⚠️ Reemplazar con el número real del cliente
const WA_MSG = encodeURIComponent('Hola, me gustaría recibir asesoría para vender mi propiedad en CDMX.');

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85)',
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/70 to-dark/30" />
      {/* Subtle gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gold/60 via-gold/20 to-transparent" />

      <div className="container-wide relative z-10 pt-28 pb-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.p
            {...fadeUp(0.1)}
            className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold mb-6"
          >
            Century 21 · Narvarte Poniente · CDMX
          </motion.p>

          {/* H1 */}
          <motion.h1
            {...fadeUp(0.25)}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6"
          >
            Vende tu propiedad en CDMX con compradores calificados
          </motion.h1>

          {/* Subtext */}
          <motion.p
            {...fadeUp(0.4)}
            className="font-sans text-base md:text-lg text-white/80 leading-relaxed mb-4"
          >
            Diagnóstico gratuito. Precio justo. Acompañamiento desde el primer paso hasta el cierre. Cubrimos 10 alcaldías de CDMX.
          </motion.p>

          <motion.p
            {...fadeUp(0.5)}
            className="font-sans text-sm text-gold-light/90 italic mb-10"
          >
            Cada mes que una propiedad no se mueve, pierde posición en el mercado.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.62)}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={17} />
              Solicitar diagnóstico gratuito
              <ArrowRight size={15} />
            </a>
            <button onClick={scrollToForm} className="btn-secondary-light">
              Prefiero llenar el formulario
              <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
