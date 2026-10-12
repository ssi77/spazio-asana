import { Sparkles, Play, ShieldCheck, Heart, Award, ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreCourses: () => void;
}

export default function Hero({ onOpenBooking, onExploreCourses }: HeroProps) {
  const { ref, style } = useReveal();

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex items-center">
      {/* Subtle organic gradient glows */}
      <div className="absolute top-12 left-1/4 w-80 h-80 rounded-full bg-[#D83153]/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#0A6B5C]/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-[#D88431]/10 blur-3xl pointer-events-none -z-10" />

      <div ref={ref} style={style} className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Asymmetric Bold Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EBED] border border-[#D83153]/20 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#D83153] animate-pulse" />
              <span className="text-xs font-semibold text-[#111827] uppercase tracking-wider">
                Studio in Presenza & Piattaforma On-Demand
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111827] leading-[1.12]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ritrova il tuo ritmo.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D83153] via-[#D88431] to-[#0A6B5C]">
                Il respiro che crea spazio.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#5C4F65] max-w-xl leading-relaxed">
              Spazio Asana è il tuo santuario quotidiano per praticare Vinyasa, Yin Yoga, Hatha e Pranayama. Lezioni intime in studio e oltre 240 video corsi guidati dai migliori maestri italiani.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-full font-semibold text-white bg-[#D83153] hover:bg-[#D83153]/90 shadow-lg shadow-[#D83153]/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 group text-base"
              >
                Inizia la Settimana di Prova
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onExploreCourses}
                className="px-7 py-4 rounded-full font-semibold text-[#111827] bg-[#F2EBED] hover:bg-[#FAF6F8] border border-[#D83153]/20 transition-all flex items-center justify-center gap-2 text-base hover:border-[#D83153]"
              >
                <Play className="w-4 h-4 fill-[#D83153] text-[#D83153]" />
                Guarda l’anteprima corsi
              </button>
            </div>

            {/* Micro proof badges */}
            <div className="mt-10 pt-8 border-t border-[#F2EBED] flex flex-wrap items-center gap-6 text-xs text-[#5C4F65] w-full">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0A6B5C]" />
                <span>Nessun vincolo, disdici quando vuoi</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#D83153]" />
                <span>Tutti i livelli: dai principianti agli avanzati</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D88431]" />
                <span>Insegnanti certificati Yoga Alliance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Interactive Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Decorative Organic Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-[#F2EBED]">
                <img
                  src="https://pub-3a823b4a94e74f1c9bf9813f768ca0e7.r2.dev/builder/229/assets/ai-33c49d47aa-236ac102a958.jpg"
                  alt="Sessione di yoga serena in studio a Spazio Asana"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  width={500}
                  height={625}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/60 via-transparent to-transparent" />
                
                {/* Overlay quote card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#FAF6F8]/90 backdrop-blur-md border border-white/60 shadow-lg text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0A6B5C] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      SA
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#111827]">Pratica Guidata Oggi: 18:30</p>
                      <p className="text-[11px] text-[#5C4F65]">Vinyasa Flow Dinamico con Elena &bull; Streaming & Live</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Pill Badge Top Right */}
              <div className="absolute -top-4 -right-4 p-3.5 rounded-2xl bg-white shadow-xl border border-[#F2EBED] flex items-center gap-3 animate-bounce shadow-[#111827]/5" style={{ animationDuration: '4s' }}>
                <div className="p-2 rounded-xl bg-[#D83153]/10 text-[#D83153]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#111827]">240+ Ore On-Demand</p>
                  <p className="text-[10px] text-[#5C4F65]">Qualità 4K & Audio Immersivo</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}