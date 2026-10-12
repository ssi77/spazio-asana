import { Instagram, Youtube, Mail, MapPin, Phone, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF6F8] border-t border-[#F2EBED] pt-16 pb-12 text-[#111827]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F2EBED]">
          
          {/* Col 1: Brand details */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#" className="flex items-center gap-3 group mb-4">
              <div className="p-1 rounded-xl bg-[#F2EBED] border border-[#D83153]/10">
                <img
                  src="https://pub-3a823b4a94e74f1c9bf9813f768ca0e7.r2.dev/media/logo/57dad132282f4f1891b8e3e1f83869c7.png"
                  alt="Spazio Asana"
                  className="h-8 w-8 rounded-lg object-contain"
                  width={32}
                  height={32}
                />
              </div>
              <span
                className="text-xl font-bold tracking-tight text-[#111827]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Spazio Asana
              </span>
            </a>

            <p className="text-sm text-[#5C4F65] leading-relaxed max-w-sm">
              Santuario per la pratica di Yoga, Breathwork e Meditazione. Classi in presenza in studio e libreria completa di video corsi in streaming 4K.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="#instagram"
                aria-label="Instagram di Spazio Asana"
                className="w-9 h-9 rounded-full bg-[#F2EBED] text-[#111827] hover:bg-[#D83153] hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                aria-label="Canale YouTube di Spazio Asana"
                className="w-9 h-9 rounded-full bg-[#F2EBED] text-[#111827] hover:bg-[#D83153] hover:text-white flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@spazioasana.it"
                aria-label="Email Spazio Asana"
                className="w-9 h-9 rounded-full bg-[#F2EBED] text-[#111827] hover:bg-[#D83153] hover:text-white flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h4
              className="text-sm font-bold text-[#111827] uppercase tracking-wider mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Corsi & Stili
            </h4>
            <ul className="space-y-2.5 text-sm text-[#5C4F65]">
              <li><a href="#courses" className="hover:text-[#D83153] transition-colors">Vinyasa Flow</a></li>
              <li><a href="#courses" className="hover:text-[#D83153] transition-colors">Yin Yoga & Restorative</a></li>
              <li><a href="#courses" className="hover:text-[#D83153] transition-colors">Pranayama Breathwork</a></li>
              <li><a href="#courses" className="hover:text-[#D83153] transition-colors">Meditazione Mindfulness</a></li>
              <li><a href="#courses" className="hover:text-[#D83153] transition-colors">Yoga per Principianti</a></li>
            </ul>
          </div>

          {/* Col 3: Studio & Locations */}
          <div className="lg:col-span-3">
            <h4
              className="text-sm font-bold text-[#111827] uppercase tracking-wider mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Lo Studio Fisico
            </h4>
            <div className="space-y-3 text-sm text-[#5C4F65]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0A6B5C] shrink-0 mt-0.5" />
                <span>Via della Pace Serena 14, Milano (MM Porta Romana)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D88431] shrink-0" />
                <span>+39 02 8945 2210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D83153] shrink-0" />
                <span>ciao@spazioasana.it</span>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter Form (Platform wired) */}
          <div className="lg:col-span-3">
            <h4
              className="text-sm font-bold text-[#111827] uppercase tracking-wider mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Newsletter del Respiro
            </h4>
            <p className="text-xs text-[#5C4F65] mb-3 leading-relaxed">
              Ricevi ogni domenica una breve riflessione, una sequenza audio e inviti prioritari ai ritiri.
            </p>

            <form data-creafi-newsletter className="space-y-2">
              <input
                name="website"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  required
                  placeholder="La tua email..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#F2EBED] bg-white text-xs text-[#111827] focus:outline-none focus:border-[#D83153]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#D83153] hover:bg-[#D83153]/90 text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  Iscriviti Gratuitamente
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5C4F65]">
          <p>© {currentYear} Spazio Asana. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#111827] transition-colors">Privacy Policy</a>
            <a href="#cookie" className="hover:text-[#111827] transition-colors">Cookie Policy</a>
            <a href="#terms" className="hover:text-[#111827] transition-colors">Termini di Servizio</a>
          </div>
        </div>

      </div>
    </footer>
  );
}