import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Non ho mai fatto yoga prima. Spazio Asana fa per me?',
    answer:
      'Assolutamente sì! Abbiamo corsi dedicati ai principianti assoluti con spiegazioni anatomiche dettagliate per ogni postura. Gli insegnanti offrono sempre varianti facilitate per rispettare i tuoi limiti di flessibilità attuali.',
  },
  {
    question: 'Come funzionano i video corsi on-demand?',
    answer:
      'Una volta iscritto avrai accesso istantaneo dal tuo computer, tablet o smartphone a oltre 240 video lezioni organizzate per livello, durata (da 15 a 90 minuti), stile e beneficio cercato (es. schiena sana, anti-stress, forza).',
  },
  {
    question: 'Cosa devo portare per le lezioni in studio?',
    answer:
      'Porta solo abbigliamento comodo. Nello studio forniamo tappetini professionali igienizzati, mattoncini in sughero, cinghie, coperte e tisane calde biologiche dopo ogni sessione.',
  },
  {
    question: 'Posso prenotare e disdire le classi in presenza facilmente?',
    answer:
      'Sì, puoi gestire le tue presenze dall’app fino a 3 ore prima dell’inizio della classe senza perdere il credito o incorrere in penali.',
  },
  {
    question: 'Qual è la politica di cancellazione per l’abbonamento online?',
    answer:
      'Zero vincoli. Puoi interrompere il rinnovo automatico con un solo click dal tuo account prima della scadenza mensile successiva, senza dover chiamare o inviare raccomandate.',
  },
  {
    question: 'Sono disponibili lezioni individuali private (1-to-1)?',
    answer:
      'Sì, offriamo percorsi personalizzati one-to-one sia in presenza in studio che via Zoom per esigenze posturali specifiche o per chi desidera avanzare rapidamente nella pratica.',
  },
];

export default function FAQ() {
  const { ref, style } = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#FAF6F8] relative">
      <div ref={ref} style={style} className="max-w-4xl mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold text-[#0A6B5C] uppercase tracking-widest mb-3">
            Domande Frequenti
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#111827] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Tutto ciò che desideri sapere
          </h2>
          <p className="text-base text-[#5C4F65] mt-4">
            Hai altri dubbi? Scrivici e il nostro team sarà felice di aiutarti a scegliere il percorso migliore.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#F2EBED] border border-white/60 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-bold text-base md:text-lg text-[#111827] min-w-0"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#D83153] text-white' : 'text-[#111827]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-base text-[#5C4F65] leading-relaxed border-t border-[#FAF6F8]/80 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}