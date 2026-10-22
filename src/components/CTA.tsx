import { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Shield, Heart } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface CTAProps {
  onOpenBooking: () => void;
}

export default function CTA({ onOpenBooking }: CTAProps) {
  const { ref, style } = useReveal();

  return (
    <section className="py-20 md:py-28 bg-[#D83153] text-white relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-72 h-72 max-w-[70vw] bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 max-w-[70vw] bg-black/10 rounded-full blur-2xl pointer-events-none" />

      <div ref={ref} style={style} className="max-w-5xl mx-auto px-4 md:px-6 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md mb-6 border border-white/20">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-xs font-semibold tracking-wider uppercase">
            Inizia il tuo cammino oggi
          </span>
        </div>

        <h2
          className="text-3xl md:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Regalati uno spazio di silenzio e ascolto profondo.
        </h2>

        <p className="mt-6 text-base md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Accedi subito a 7 giorni gratuiti di lezioni in presenza o inizia subito a guardare oltre 240 video corsi online. Nessuna carta di credito richiesta per la prova.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-[#D83153] hover:bg-[#FAF6F8] font-bold text-base shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            Prenota la Settimana Gratuita
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-xs text-white/80 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>Nessun costo nascosto</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-white" />
            <span>Supporto e guida personalizzata</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-white" />
            <span>Community accogliente</span>
          </div>
        </div>

      </div>
    </section>
  );
}