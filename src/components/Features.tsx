import { Sparkles, Sun, Moon, Compass, Wind, Users, HeartHandshake } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Features() {
  const { ref, style } = useReveal();

  const practices = [
    {
      icon: Sun,
      title: 'Vinyasa Flow Dinamico',
      desc: 'Transizioni fluide e continue che uniscono respiro e movimento, per risvegliare energia, forza e flessibilità corporea.',
      accent: 'text-[#D83153]',
      bg: 'bg-[#D83153]/10',
    },
    {
      icon: Moon,
      title: 'Yin Yoga & Rilascio Miofasciale',
      desc: 'Postura lenta e profonda a terra per stimolare i tessuti connettivi profondi, calmare il sistema nervoso e favorire il recupero.',
      accent: 'text-[#0A6B5C]',
      bg: 'bg-[#0A6B5C]/10',
    },
    {
      icon: Wind,
      title: 'Pranayama & Breathwork Attivo',
      desc: 'Tecniche millenarie di controllo respiratorio per rigenerare i livelli di ossigenazione e sciogliere ansia e stanchezza cronica.',
      accent: 'text-[#D88431]',
      bg: 'bg-[#D88431]/10',
    },
    {
      icon: Compass,
      title: 'Hatha Tradizionale & Allineamento',
      desc: 'Focus sulla tenuta delle asana classiche e sull’anatomia del corpo per una pratica sicura, consapevole e correttiva.',
      accent: 'text-[#D83153]',
      bg: 'bg-[#D83153]/10',
    },
    {
      icon: Users,
      title: 'Classi Intime in Studio',
      desc: 'Numero ristretto di allievi per stanza per garantirti correzioni posturali personalizzate e la massima quiete mentale.',
      accent: 'text-[#0A6B5C]',
      bg: 'bg-[#0A6B5C]/10',
    },
    {
      icon: HeartHandshake,
      title: 'Community & Ritiri Stagionali',
      desc: 'Tè caldo dopo le lezioni, workshop di approfondimento filosofico e ritiri immersivi nella natura per coltivare legami autentici.',
      accent: 'text-[#D88431]',
      bg: 'bg-[#D88431]/10',
    },
  ];

  return (
    <section id="styles" className="py-24 md:py-32 bg-[#F2EBED] relative">
      <div ref={ref} style={style} className="max-w-6xl mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-[#0A6B5C] uppercase tracking-widest mb-3">
            I Pilastri del Benessere
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#111827] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Un approccio olistico cucito sui tuoi bisogni
          </h2>
          <p className="text-base md:text-lg text-[#5C4F65] mt-4 leading-relaxed">
            Che tu cerchi dinamismo atletico o quiete meditativa, le nostre pratiche guidate favoriscono l’armonia tra corpo, mente e spirito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {practices.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF6F8] rounded-3xl p-8 border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${item.accent}`} />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#111827] mb-3"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5C4F65] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F2EBED] flex items-center gap-2 text-xs font-semibold text-[#0A6B5C]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>In studio & On-Demand</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}