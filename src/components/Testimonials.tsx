import { Star, Quote } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Testimonials() {
  const { ref, style } = useReveal();

  const reviews = [
    {
      name: 'Giulia Martelli',
      role: 'Praticante da 2 anni & Designer',
      quote:
        'Spazio Asana ha completamente trasformato i miei dolori lombari da smart working. I video corsi serali di Yin Yoga sono diventati il mio rito irrinunciabile per dormire serenamente.',
      rating: 5,
      avatar: 'GM',
      city: 'Milano',
    },
    {
      name: 'Luca Ferretti',
      role: 'Maratoneta & Libero Professionista',
      quote:
        'Ero scettico riguardo allo yoga, ma le lezioni di Vinyasa di Chiara mi hanno dato una mobilità e una concentrazione mentale che hanno migliorato anche le mie prestazioni di corsa.',
      rating: 5,
      avatar: 'LF',
      city: 'Bologna',
    },
    {
      name: 'Beatrice Conti',
      role: 'Insegnante di scuola primaria',
      quote:
        'Lo studio è una meraviglia di luce e silenzio. Quando non posso andare di persona, l’app con i corsi in 4K mi fa sentire esattamente come se fossi lì sul tappetino.',
      rating: 5,
      avatar: 'BC',
      city: 'Roma',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAF6F8] relative">
      <div ref={ref} style={style} className="max-w-6xl mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-[#D83153] uppercase tracking-widest mb-3">
            Voci dal Tappetino
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#111827] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Le storie di chi pratica con Spazio Asana
          </h2>
          <p className="text-base md:text-lg text-[#5C4F65] mt-4 leading-relaxed">
            Oltre 4.000 allievi in tutta Italia hanno ritrovato equilibrio interiore, forza e flessibilità.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-[#F2EBED] rounded-3xl p-8 border border-white shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D88431] text-[#D88431]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#D83153]/30" />
                </div>

                <p className="text-sm md:text-base text-[#111827] italic leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#FAF6F8] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D83153] text-white font-bold flex items-center justify-center text-xs">
                  {rev.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111827]">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-[#5C4F65]">
                    {rev.role} &bull; {rev.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}