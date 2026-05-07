import { MessageCircle, MapPin, Phone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const WA_NUMBER = '5215512345678'; // ⚠️ Reemplazar con el número real del cliente
// ⚠️ CONFIRMAR CON CLIENTE — número telefónico para mostrar
const DISPLAY_PHONE = '55 1234 5678';
const WA_MSG = encodeURIComponent('Hola, me gustaría recibir asesoría para vender mi propiedad en CDMX.');

export default function Footer() {
  return (
    <footer className="bg-dark">
      {/* CTA strip */}
      <div className="border-t border-gold/20 border-b border-white/5">
        <div className="container-narrow py-16">
          <AnimatedSection className="text-center">
            <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
              ¿Empezamos?
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-semibold mb-6">
              ¿Prefieres hablar directo?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={17} />
                Escríbenos por WhatsApp
              </a>
              <a
                href={`tel:+${WA_NUMBER}`}
                className="inline-flex items-center gap-2 text-white/60 border-b border-white/20 pb-0.5 text-sm font-sans font-medium tracking-wide transition-all hover:text-white hover:border-white/50"
              >
                <Phone size={15} />
                {DISPLAY_PHONE}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom */}
      <div className="container-narrow py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl text-white font-semibold">CENTURY 21</p>
            <p className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-gold mt-0.5">
              Narvarte Poniente
            </p>
          </div>

          {/* Address */}
          <div className="flex items-start gap-2 text-white/45">
            <MapPin size={14} className="shrink-0 mt-0.5" />
            <p className="font-sans text-xs leading-relaxed">
              Pedro Romero de Terreros 1211-PB<br />
              Narvarte Poniente, Benito Juárez, CDMX
            </p>
          </div>

          {/* Legal */}
          <p className="font-sans text-xs text-white/25">
            © {new Date().getFullYear()} Century 21. Miembros AMPI.
          </p>
        </div>
      </div>
    </footer>
  );
}
