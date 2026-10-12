import { useState } from 'react';
import { Check, Sparkles, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface PricingProps {
  onOpenBooking: () => void;
}

export default function Pricing({ onOpenBooking }: PricingProps) {
  const { ref, style } = useReveal();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Digital Sanctuary',
      badge: 'Solo Video Corsi',
      priceMonthly: 19,
      priceYearly: 15,
      desc: 'Accesso illimitato a tutta la videoteca on-demand per praticare a casa o in viaggio.',
      features: [
        'Oltre 240 lezioni in 4K ad alta definizione',
        'Nuovi corsi aggiunti ogni settimana',
        'Download offline su app mobile',
        'Percorsi tematici guidati (Principiante / Yin / Vinyasa)',
        'Supporto Q&A con gli insegnanti',
      ],
      cta: 'Attiva Digital Pass',
      highlight: false,
    },
    {
      name: 'Asana Unlimited Studio + Video',
      badge: 'Più Scelto',
      priceMonthly: 79,
      priceYearly: 65,
      desc: 'La trasformazione completa: lezioni senza limiti in studio fisico e accesso a tutti i video corsi.',
      features: [
        'Tutti i video corsi on-demand inclusi',
        'Ingressi illimitati alle classi in studio',
        'Streaming live con correzioni in diretta',
        'Posto riservato garantito alle masterclass weekend',
        'Accesso prioritario ai ritiri stagionali',
        'Noleggio tappetino & docce incluso',
      ],
      cta: 'Inizia Prova di 7 Giorni',
      highlight: true,
    },
    {
      name: 'Studio Pass 10 Ingressi',
      badge: 'Flessibile',
      priceMonthly: 120,
      priceYearly: 120,
      isOneTime: true,
      desc: 'Carnet flessibile per frequentare le lezioni in sede secondo i tuoi orari e impegni.',
      features: [
        '10 lezioni a scelta in presenza',
        'Validità 6 mesi dall’acquisto',
        '1 mese di video corsi on-demand in omaggio',
        'Condivisibile con un amico o partner',
        'Tappetino igienizzato incluso',
      ],
      cta: 'Acquista Carnet',
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#F2EBED] relative">
      <div ref={ref} style={style} className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold text-[#D83153] uppercase tracking-widest mb-3">
            Piani Trasparenti &bull; Nessun Vincolo
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#111827] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Investi nel tuo equilibrio e benessere
          </h2>
          <p className="text-base md:text-lg text-[#5C4F65] mt-4 leading-relaxed">
            Scegli la modalità che rispecchia i tuoi ritmi. Disdici in qualunque momento con un click dalla tua area riservata.
          </p>

          {/* Billing Switch */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-[#FAF6F8] border border-white shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#111827] text-white shadow-sm'
                  : 'text-[#5C4F65] hover:text-[#111827]'
              }`}
            >
              Fatturazione Mensile
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                billingCycle === 'yearly'
                  ? 'bg-[#D83153] text-white shadow-sm'
                  : 'text-[#5C4F65] hover:text-[#111827]'
              }`}
            >
              Annuale
              <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold">
                Risparmi 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const currentPrice = plan.isOneTime
              ? plan.priceMonthly
              : billingCycle === 'yearly'
              ? plan.priceYearly
              : plan.priceMonthly;

            return (
              <div
                key={index}
                className={`rounded-3xl p-8 transition-all flex flex-col justify-between relative ${
                  plan.highlight
                    ? 'bg-white border-2 border-[#D83153] shadow-2xl scale-100 lg:-translate-y-2'
                    : 'bg-[#FAF6F8] border border-white/80 shadow-md'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#D83153] text-white text-xs font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#0A6B5C] uppercase tracking-wider">
                      {plan.name}
                    </span>
                    {!plan.highlight && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-[#F2EBED] text-[#5C4F65] font-semibold">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1 my-4">
                    <span
                      className="text-4xl md:text-5xl font-extrabold text-[#111827]"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      €{currentPrice}
                    </span>
                    <span className="text-sm text-[#5C4F65]">
                      {plan.isOneTime ? '/ una tantum' : '/ mese'}
                    </span>
                  </div>

                  <p className="text-xs text-[#5C4F65] leading-relaxed mb-6">
                    {plan.desc}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-[#F2EBED]">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#111827]">
                        <Check className="w-4 h-4 text-[#D83153] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={onOpenBooking}
                    className={`w-full py-3.5 rounded-full font-semibold text-xs tracking-wider transition-all flex items-center justify-center gap-2 ${
                      plan.highlight
                        ? 'bg-[#D83153] text-white hover:bg-[#D83153]/90 shadow-lg shadow-[#D83153]/25'
                        : 'bg-[#111827] text-white hover:bg-[#111827]/90'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-[#5C4F65] mt-2">
                    {plan.isOneTime ? 'Nessun rinnovo automatico' : 'Disdici online quando vuoi'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-4 rounded-2xl bg-[#FAF6F8] border border-white text-center max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-[#5C4F65]">
          <ShieldCheck className="w-4 h-4 text-[#0A6B5C]" />
          <span>Garanzia di rimborso al 100% entro 14 giorni se non sei pienamente soddisfatto.</span>
        </div>

      </div>
    </section>
  );
}