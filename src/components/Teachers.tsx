import { Instagram, Award, Sparkles, Heart } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Teachers() {
  const { ref, style } = useReveal();

  const instructors = [
    {
      name: 'Chiara Valenti',
      role: 'Fondatrice & Head Teacher Vinyasa',
      bio: 'Praticante da oltre 14 anni, formata a Rishikesh e Bali. Guida lezioni incentrate sul respiro e sulla mobilità della colonna vertebrale.',
      badge: 'E-RYT 500',
    },
    {
      name: 'Marco Rinaldi',
      role: 'Specialista Yin Yoga & Campane Tibetane',
      bio: 'Esperto in rilascio fasciale e sound healing. Aiuta gli allievi a rilasciare traumi emotivi e contratture fisiche profonde.',
      badge: 'YIN & SOUND 300',
    },
    {
      name: 'Silvia Moretti',
      role: 'Maestra di Pranayama & Kriya',
      bio: 'Insegna le antiche arti respiratorie yogiche unendole alle moderne scoperte delle neuroscienze sul nervo vago.',
      badge: 'BREATH MASTER 200',
    },
  ];

  return (
    <section id="teachers" className="py-24 md:py-32 bg-[#F2EBED] relative">
      <div ref={ref} style={style} className="max-w-6xl mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 text-left">
            <p className="text-xs font-bold text-[#D88431] uppercase tracking-widest mb-3">
              Istruttori &amp; Guide
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#111827] tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Insegnanti appassionati al servizio della tua evoluzione
            </h2>
            <p className="text-base text-[#5C4F65] mt-4 leading-relaxed">
              Il nostro team unisce rigore anatomico, empatia e profonda conoscenza delle tradizioni orientali per accompagnarti in sicurezza.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[16/9] bg-[#FAF6F8]">
              <img
                src="https://pub-3a823b4a94e74f1c9bf9813f768ca0e7.r2.dev/builder/229/assets/ai-42ae32309b-c3a582961859.jpg"
                alt="Insegnanti di Spazio Asana in cerchio di meditazione"
                className="w-full h-full object-cover"
                width={600}
                height={338}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((ins, i) => (
            <div
              key={i}
              className="bg-[#FAF6F8] rounded-3xl p-8 border border-white/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#0A6B5C]/10 text-[#0A6B5C] text-xs font-bold">
                    {ins.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#D83153]/10 text-[#D83153] flex items-center justify-center">
                    <Heart className="w-4 h-4" />
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-[#111827]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {ins.name}
                </h3>
                <p className="text-xs font-semibold text-[#D83153] mt-1">
                  {ins.role}
                </p>

                <p className="text-sm text-[#5C4F65] mt-4 leading-relaxed">
                  {ins.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F2EBED] flex items-center justify-between text-xs text-[#5C4F65]">
                <span>10+ Corsi Online</span>
                <span className="font-semibold text-[#111827] flex items-center gap-1">
                  Prenota Lezione &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}