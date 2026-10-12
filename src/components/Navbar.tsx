import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight, Play, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onExploreCourses: () => void;
}

export default function Navbar({ onOpenBooking, onExploreCourses }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Corsi Online', href: '#courses' },
    { label: 'Pratiche & Stili', href: '#styles' },
    { label: 'Orari & Studio', href: '#schedule' },
    { label: 'Prezzi', href: '#pricing' },
    { label: 'Insegnanti', href: '#teachers' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF6F8]/95 backdrop-blur-md shadow-sm border-b border-[#F2EBED]'
            : 'bg-[#FAF6F8] md:bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3.5 group focus:outline-none">
            <div className="p-1 rounded-2xl bg-[#F2EBED] border border-[#D83153]/10 shadow-sm transition-transform group-hover:scale-105">
              <img
                src="https://pub-3a823b4a94e74f1c9bf9813f768ca0e7.r2.dev/media/logo/57dad132282f4f1891b8e3e1f83869c7.png"
                alt="Spazio Asana"
                className="h-10 w-10 rounded-xl object-contain"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col">
              <span
                className="text-xl md:text-2xl font-bold tracking-tight text-[#111827] leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Spazio Asana
              </span>
              <span className="text-[11px] font-medium text-[#0A6B5C] uppercase tracking-widest mt-1">
                Yoga & Breath Sanctuary
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#5C4F65] hover:text-[#D83153] transition-colors relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D83153] after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onExploreCourses}
              className="px-4 py-2.5 rounded-full text-xs font-semibold text-[#0A6B5C] bg-[#0A6B5C]/10 hover:bg-[#0A6B5C]/15 transition-all flex items-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 fill-[#0A6B5C]" />
              Video Corsi
            </button>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#D83153] hover:bg-[#D83153]/90 shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              Prenota Lezione
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 rounded-xl text-[#111827] bg-[#F2EBED] hover:bg-[#D83153]/10 transition-colors"
            aria-label="Apri menu di navigazione"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div
            className="fixed inset-0 bg-[#111827]/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-xs bg-[#FAF6F8] h-full shadow-2xl flex flex-col p-6 z-10 border-l border-[#F2EBED] overflow-y-auto">
            <div className="flex items-center justify-between pb-6 border-b border-[#F2EBED]">
              <div className="flex items-center gap-2.5">
                <img
                  src="https://pub-3a823b4a94e74f1c9bf9813f768ca0e7.r2.dev/media/logo/57dad132282f4f1891b8e3e1f83869c7.png"
                  alt="Spazio Asana"
                  className="h-8 w-8 rounded-lg object-contain"
                  width={32}
                  height={32}
                />
                <span
                  className="font-bold text-[#111827]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Spazio Asana
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg bg-[#F2EBED] text-[#5C4F65] hover:text-[#111827]"
                aria-label="Chiudi menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 py-6 flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 rounded-xl text-base font-medium text-[#111827] hover:bg-[#F2EBED] hover:text-[#D83153] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-[#F2EBED] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onExploreCourses();
                }}
                className="w-full py-3 rounded-full text-sm font-semibold text-[#0A6B5C] bg-[#0A6B5C]/10 flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-[#0A6B5C]" />
                Esplora Video Corsi
              </button>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-full text-sm font-semibold text-white bg-[#D83153] shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Prenota una Prova
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}