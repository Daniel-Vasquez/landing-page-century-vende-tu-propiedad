import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WA_NUMBER = '5215512345678'; // ⚠️ Reemplazar con el número real del cliente

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-wide flex items-center justify-between py-5">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex flex-col leading-none">
            <span
              className={`font-serif text-xl font-semibold tracking-tight transition-colors duration-500 ${
                scrolled ? 'text-dark' : 'text-white'
              }`}
            >
              CENTURY 21
            </span>
            <span
              className={`font-sans text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-500 ${
                scrolled ? 'text-gold' : 'text-gold-light'
              }`}
            >
              Narvarte Poniente
            </span>
          </div>
        </a>

        {/* CTAs */}
        <nav className="flex items-center gap-4">
          <button
            onClick={scrollToForm}
            className={`hidden sm:inline-flex text-sm font-sans font-medium tracking-wide border-b pb-0.5 transition-all duration-300 hover:gap-3 ${
              scrolled
                ? 'text-dark border-dark/30 hover:border-dark'
                : 'text-white/80 border-white/30 hover:border-white/70'
            }`}
          >
            Formulario
          </button>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola, me gustaría recibir asesoría para vender mi propiedad en CDMX.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 text-xs sm:text-sm"
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Contactar</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
