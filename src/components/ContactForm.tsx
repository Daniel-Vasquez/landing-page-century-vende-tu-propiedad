import { useState, type FormEvent } from 'react';
import { MessageCircle, AlertCircle, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const WA_NUMBER = '5215512345678'; // ⚠️ Reemplazar con el número real del cliente

const ALCALDIAS = [
  'Álvaro Obregón',
  'Azcapotzalco',
  'Benito Juárez',
  'Coyoacán',
  'Cuauhtémoc',
  'Gustavo A. Madero',
  'Iztacalco',
  'Iztapalapa',
  'Miguel Hidalgo',
  'Venustiano Carranza',
];

const PLAZOS = [
  { value: '1 a 3 meses', label: 'Corto plazo — 1 a 3 meses' },
  { value: '3 a 6 meses', label: 'Mediano plazo — 3 a 6 meses' },
  { value: '6 meses a más de 1 año', label: 'Largo plazo — 6 meses a más de 1 año' },
];

const DOCUMENTOS = [
  'Título / Escritura',
  'Régimen en condominio',
  'Número oficial y alineamiento',
  'Folio Real RPP',
  'Boletas de Predial',
  'Boleta de agua',
  'Identificación oficial',
];

interface FormState {
  nombre: string;
  correo: string;
  telefono: string;
  alcaldia: string;
  plazo: string;
  documentos: string[];
  confirmacion: boolean;
}

interface Errors {
  nombre?: string;
  correo?: string;
  telefono?: string;
  alcaldia?: string;
  plazo?: string;
  documentos?: string;
  confirmacion?: string;
}

const INITIAL: FormState = {
  nombre: '',
  correo: '',
  telefono: '',
  alcaldia: '',
  plazo: '',
  documentos: [],
  confirmacion: false,
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.nombre.trim()) e.nombre = 'Ingresa tu nombre completo.';
    if (!form.correo.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo))
      e.correo = 'Ingresa un correo electrónico válido.';
    if (!form.telefono.trim() || form.telefono.replace(/\D/g, '').length < 10)
      e.telefono = 'Ingresa un teléfono de 10 dígitos.';
    if (!form.alcaldia) e.alcaldia = 'Selecciona la alcaldía de tu propiedad.';
    if (!form.plazo) e.plazo = 'Selecciona un plazo aproximado de venta.';
    if (form.documentos.length === 0)
      e.documentos = 'Selecciona al menos un documento que tengas disponible.';
    if (!form.confirmacion)
      e.confirmacion = 'Debes confirmar que tu propiedad está en alguna de las alcaldías listadas.';
    return e;
  };

  const handleDocumento = (doc: string) => {
    setForm((prev) => ({
      ...prev,
      documentos: prev.documentos.includes(doc)
        ? prev.documentos.filter((d) => d !== doc)
        : [...prev.documentos, doc],
    }));
    if (errors.documentos) setErrors((e) => ({ ...e, documentos: undefined }));
  };

  const buildWAMessage = (): string => {
    const docsStr =
      form.documentos.length > 0 ? form.documentos.join(', ') : 'ninguno por el momento';
    return (
      `Hola, mi nombre es ${form.nombre}. Los encontré en Google y me gustaría recibir asesoría para vender mi propiedad, ubicada en ${form.alcaldia}. ` +
      `Mi objetivo es venderla en un plazo aproximado de ${form.plazo}. ` +
      `Actualmente cuento con el/los siguiente(s) documento(s): ${docsStr}. ` +
      `Mi correo es ${form.correo} y mi teléfono es ${form.telefono}.`
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstErr = document.querySelector('[data-field-error]');
      firstErr?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    const msg = encodeURIComponent(buildWAMessage());
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section-padding bg-cream" id="formulario">
        <div className="container-narrow flex flex-col items-center text-center py-12">
          <div className="w-16 h-16 bg-gold/15 flex items-center justify-center mb-6">
            <CheckCircle size={32} className="text-gold" />
          </div>
          <h2 className="font-serif text-3xl text-dark font-semibold mb-4">
            ¡Tu mensaje fue enviado!
          </h2>
          <p className="font-sans text-dark/60 max-w-md mb-8">
            Se abrió WhatsApp con tu información. Un asesor te contactará en breve para coordinar tu diagnóstico gratuito.
          </p>
          <button
            onClick={() => { setForm(INITIAL); setSubmitted(false); setErrors({}); }}
            className="btn-secondary"
          >
            Enviar otra consulta
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-cream" id="formulario">
      <div className="container-narrow">
        <AnimatedSection className="mb-12">
          <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
            Sin costo · Sin compromiso
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark font-semibold leading-tight mb-3">
            ¿Listo para vender tu propiedad en CDMX?
          </h2>
          <p className="font-sans text-dark/60 text-lg">
            El diagnóstico es gratuito y sin compromiso.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <form onSubmit={handleSubmit} noValidate className="max-w-2xl">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              {/* Nombre */}
              <Field
                label="Nombre completo *"
                error={errors.nombre}
                colSpan
              >
                <input
                  type="text"
                  value={form.nombre}
                  onChange={(e) => {
                    setForm((p) => ({ ...p, nombre: e.target.value }));
                    if (errors.nombre) setErrors((er) => ({ ...er, nombre: undefined }));
                  }}
                  placeholder="Ej. María García Hernández"
                  className={inputClass(!!errors.nombre)}
                  data-field-error={errors.nombre ? 'true' : undefined}
                />
              </Field>

              {/* Correo */}
              <Field label="Correo electrónico *" error={errors.correo}>
                <input
                  type="email"
                  value={form.correo}
                  onChange={(e) => {
                    setForm((p) => ({ ...p, correo: e.target.value }));
                    if (errors.correo) setErrors((er) => ({ ...er, correo: undefined }));
                  }}
                  placeholder="correo@ejemplo.com"
                  className={inputClass(!!errors.correo)}
                />
              </Field>

              {/* Teléfono */}
              <Field label="Teléfono *" error={errors.telefono}>
                <input
                  type="tel"
                  value={form.telefono}
                  onChange={(e) => {
                    setForm((p) => ({ ...p, telefono: e.target.value }));
                    if (errors.telefono) setErrors((er) => ({ ...er, telefono: undefined }));
                  }}
                  placeholder="55 1234 5678"
                  className={inputClass(!!errors.telefono)}
                />
              </Field>

              {/* Alcaldía */}
              <Field label="¿En qué alcaldía está tu propiedad? *" error={errors.alcaldia}>
                <select
                  value={form.alcaldia}
                  onChange={(e) => {
                    setForm((p) => ({ ...p, alcaldia: e.target.value }));
                    if (errors.alcaldia) setErrors((er) => ({ ...er, alcaldia: undefined }));
                  }}
                  className={inputClass(!!errors.alcaldia)}
                >
                  <option value="">Selecciona una alcaldía</option>
                  {ALCALDIAS.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            {/* Plazo */}
            <Field
              label="¿Piensas vender a corto, mediano o largo plazo? *"
              error={errors.plazo}
              colSpan
            >
              <div className="grid sm:grid-cols-3 gap-3">
                {PLAZOS.map((p) => (
                  <button
                    type="button"
                    key={p.value}
                    onClick={() => {
                      setForm((prev) => ({ ...prev, plazo: p.value }));
                      if (errors.plazo) setErrors((er) => ({ ...er, plazo: undefined }));
                    }}
                    className={`text-left px-4 py-3 border text-sm font-sans transition-all duration-200 ${
                      form.plazo === p.value
                        ? 'border-gold bg-gold/10 text-dark font-medium'
                        : 'border-dark/15 text-dark/60 hover:border-gold/50'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </Field>

            {/* Documentos */}
            <div className="mb-6">
              <label className="block font-sans text-sm font-medium text-dark mb-3">
                ¿Con qué documentos cuentas? *
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {DOCUMENTOS.map((doc) => {
                  const checked = form.documentos.includes(doc);
                  return (
                    <button
                      type="button"
                      key={doc}
                      onClick={() => handleDocumento(doc)}
                      className={`flex items-center gap-3 px-4 py-3 border text-left text-sm font-sans transition-all duration-200 ${
                        checked
                          ? 'border-gold bg-gold/10 text-dark font-medium'
                          : 'border-dark/15 text-dark/60 hover:border-gold/40'
                      }`}
                    >
                      <span
                        className={`w-4 h-4 shrink-0 border flex items-center justify-center transition-all ${
                          checked ? 'border-gold bg-gold' : 'border-dark/30'
                        }`}
                      >
                        {checked && (
                          <svg viewBox="0 0 10 8" className="w-2.5 h-2" fill="none">
                            <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      {doc}
                    </button>
                  );
                })}
              </div>
              {errors.documentos && (
                <p className="mt-2 flex items-center gap-1.5 text-xs text-red-500" data-field-error="true">
                  <AlertCircle size={13} /> {errors.documentos}
                </p>
              )}
            </div>

            {/* Confirmación */}
            <div className="mb-8">
              <button
                type="button"
                onClick={() => {
                  setForm((p) => ({ ...p, confirmacion: !p.confirmacion }));
                  if (errors.confirmacion) setErrors((er) => ({ ...er, confirmacion: undefined }));
                }}
                className="flex items-start gap-3 text-left group"
              >
                <span
                  className={`mt-0.5 w-5 h-5 shrink-0 border flex items-center justify-center transition-all ${
                    form.confirmacion ? 'border-gold bg-gold' : 'border-dark/30 group-hover:border-gold/60'
                  }`}
                >
                  {form.confirmacion && (
                    <svg viewBox="0 0 10 8" className="w-3 h-2.5" fill="none">
                      <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <span className="font-sans text-sm text-dark/65 leading-relaxed">
                  Confirmo que la propiedad que deseo vender se encuentra en alguna de las alcaldías listadas. Entiendo que el servicio no tiene cobertura en otras ciudades o delegaciones.
                </span>
              </button>
              {errors.confirmacion && (
                <p className="mt-2 ml-8 flex items-center gap-1.5 text-xs text-red-500" data-field-error="true">
                  <AlertCircle size={13} /> {errors.confirmacion}
                </p>
              )}
            </div>

            {/* Submit */}
            <button type="submit" className="btn-primary w-full sm:w-auto justify-center text-base py-4 px-10">
              <MessageCircle size={18} />
              Solicitar diagnóstico gratuito
            </button>
            <p className="mt-3 font-sans text-xs text-dark/40">
              Al enviar abrirás WhatsApp con tu información precargada.
            </p>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── Field wrapper ─── */
function Field({
  label,
  error,
  children,
  colSpan,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  colSpan?: boolean;
}) {
  return (
    <div className={colSpan ? 'sm:col-span-2' : ''}>
      <label className="block font-sans text-sm font-medium text-dark mb-2">{label}</label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500" data-field-error="true">
          <AlertCircle size={13} /> {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full bg-white border px-4 py-3 font-sans text-sm text-dark placeholder:text-dark/30 outline-none transition-all duration-200 focus:border-gold ${
    hasError ? 'border-red-400' : 'border-dark/15 hover:border-dark/30'
  }`;
}
