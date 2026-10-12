import { useState, useRef, useEffect } from 'react';
import { Bot, User, RefreshCw, X, Sparkles, Send } from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  suggestedAsanas?: {
    sanskrit: string;
    italian: string;
    benefits: string;
    tips: string;
  }[];
}

const ASANA_KNOWLEDGE: Record<string, { sanskrit: string; italian: string; benefits: string; tips: string; keywords: string[] }> = {
  adho_mukha: {
    sanskrit: 'Adho Mukha Svanasana',
    italian: 'Cane a Faccia in Giù',
    benefits: 'Allunga tutta la catena cinetica posteriore, decomprime la colonna vertebrale e rinvigorisce mente e corpo.',
    tips: 'Distribuisci il peso uniformemente su tutte le dita delle mani e spingi il coccige verso l’alto e indietro.',
    keywords: ['cane', 'schiena', 'allungamento', 'fondamentale', 'adho mukha', 'mattina'],
  },
  virabhadrasana: {
    sanskrit: 'Virabhadrasana II',
    italian: 'Guerriero II',
    benefits: 'Rinforza gambe, caviglie e glutei, apre il bacino e favorisce la stabilità interiore e la concentrazione.',
    tips: 'Mantieni il ginocchio anteriore allineato esattamente sopra la caviglia a 90° e le spalle rilassate.',
    keywords: ['guerriero', 'forza', 'gambe', 'stabilità', 'virabhadrasana', 'bacino'],
  },
  balasana: {
    sanskrit: 'Balasana',
    italian: 'Posizione del Bambino',
    benefits: 'Calma profonda per il sistema nervoso, allungamento dolce della zona lombare e rilascio delle tensioni alle spalle.',
    tips: 'Allarga le ginocchia quanto il tappetino e lascia che il petto sprofondi verso il pavimento respirando profondamente.',
    keywords: ['bambino', 'riposo', 'stress', 'ansia', 'rilassamento', 'lombare', 'balasana', 'sera'],
  },
  vrksasana: {
    sanskrit: 'Vrksasana',
    italian: 'Posizione dell’Albero',
    benefits: 'Migliora l’equilibrio neuro-muscolare, rafforza le caviglie e affina il focus mentale (Dharana).',
    tips: 'Fissa un punto immobile davanti a te (Drishti) e appoggia la pianta del piede sopra o sotto il ginocchio, mai direttamente contro di esso.',
    keywords: ['albero', 'equilibrio', 'focus', 'concentrazione', 'vrksasana', 'caviglie'],
  },
  bhujangasana: {
    sanskrit: 'Bhujangasana',
    italian: 'Posizione del Cobra',
    benefits: 'Apre il petto e il centro del cuore (Anahata), tonifica la muscolatura dorsale e migliora la postura.',
    tips: 'Non spingere con le braccia: usa i muscoli dorsali per sollevare il petto e mantieni le spalle lontane dalle orecchie.',
    keywords: ['cobra', 'petto', 'curva', 'apertura', 'postura', 'bhujangasana', 'cuore'],
  },
  trikonasana: {
    sanskrit: 'Utthita Trikonasana',
    italian: 'Posizione del Triangolo Esteso',
    benefits: 'Apre i fianchi, allunga i muscoli ischiocrurali e tonifica gli organi addominali favorendo la digestione.',
    tips: 'Pensa a mantenere il corpo tra due pareti immaginarie evitando di collassare in avanti con il torace.',
    keywords: ['triangolo', 'fianchi', 'trikonasana', 'digestione', 'flessibilità'],
  },
  paschimottanasana: {
    sanskrit: 'Paschimottanasana',
    italian: 'Piegamento in Avanti da Seduti',
    benefits: 'Massaggia gli organi interni, favorisce l’introspezione e riduce l’affaticamento mentale.',
    tips: 'Piega leggermente le ginocchia se senti tensione lombare; l’obiettivo è piegare il bacino, non arrotondare la parte alta della schiena.',
    keywords: ['seduto', 'avanti', 'piegamento', 'paschimottanasana', 'introspettivo', 'femorali'],
  },
  savasana: {
    sanskrit: 'Savasana',
    italian: 'Posizione del Cadavere / Rilassamento Finale',
    benefits: 'Integrazione somatica completa dei benefici della pratica, abbassa la pressione e azzera lo stress.',
    tips: 'Copriti con una coperta leggera per preservare il calore corporeo e lascia fluire il respiro in modo spontaneo per 5-10 minuti.',
    keywords: ['savasana', 'finale', 'rilassamento', 'fine pratica', 'sonno', 'meditazione'],
  },
};

const SUGGESTIONS = [
  'Quali asana fare per il mal di schiena?',
  'Consigliami posizioni per aprire il petto',
  'Come eseguire bene il Cane a Faccia in Giù?',
  'Quali asana aiutano a calmare l’ansia?',
];

function getBotReply(query: string): { text: string; asanas?: typeof ASANA_KNOWLEDGE[string][] } {
  const q = query.toLowerCase();

  const matchedAsanas: typeof ASANA_KNOWLEDGE[string][] = [];

  Object.values(ASANA_KNOWLEDGE).forEach((asana) => {
    const isMatched = asana.keywords.some((kw) => q.includes(kw)) ||
      asana.italian.toLowerCase().includes(q) ||
      asana.sanskrit.toLowerCase().includes(q);
    if (isMatched) {
      matchedAsanas.push(asana);
    }
  });

  if (q.includes('schiena') || q.includes('lombare') || q.includes('dolore')) {
    return {
      text: 'Per alleggerire le tensioni alla schiena e alla colonna vertebrale, ti consiglio posture delicate che allungano e decomprimono senza forzare.',
      asanas: [ASANA_KNOWLEDGE.balasana, ASANA_KNOWLEDGE.adho_mukha, ASANA_KNOWLEDGE.bhujangasana],
    };
  }

  if (q.includes('ansia') || q.includes('stress') || q.includes('dormire') || q.includes('sera')) {
    return {
      text: 'Quando la mente è sovraccarica, le asana di radicamento e piegamento in avanti attivano il sistema nervoso parasimpatico e abbassano i livelli di cortisolo.',
      asanas: [ASANA_KNOWLEDGE.balasana, ASANA_KNOWLEDGE.paschimottanasana, ASANA_KNOWLEDGE.savasana],
    };
  }

  if (q.includes('petto') || q.includes('cuore') || q.includes('respiro') || q.includes('postura')) {
    return {
      text: 'Le aperture del cuore stimolano una respirazione più profonda ed espansiva, correggendo la chiusura delle spalle causata dalla postura al computer.',
      asanas: [ASANA_KNOWLEDGE.bhujangasana, ASANA_KNOWLEDGE.trikonasana],
    };
  }

  if (q.includes('equilibrio') || q.includes('focus') || q.includes('concentrazione')) {
    return {
      text: 'L’equilibrio sul tappetino allena la stabilità mentale nella vita quotidiana. Ricordati di mantenere uno sguardo rilassato (Drishti).',
      asanas: [ASANA_KNOWLEDGE.vrksasana, ASANA_KNOWLEDGE.virabhadrasana],
    };
  }

  if (matchedAsanas.length > 0) {
    return {
      text: `Ecco le informazioni e gli allineamenti per la tua pratica di oggi:`,
      asanas: matchedAsanas,
    };
  }

  return {
    text: 'Namasté! Posso aiutarti a scoprire l’allineamento corretto, i benefici e le varianti di qualsiasi asana (es. Adho Mukha, Guerriero, Posizione del Bambino) o consigliarti posture per esigenze specifiche (schiena, rilassamento, forza, flessibilità).',
    asanas: [ASANA_KNOWLEDGE.adho_mukha, ASANA_KNOWLEDGE.virabhadrasana],
  };
}

export default function AsanaChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Namasté 🙏 Sono la Guida Asana di Spazio Asana. Chiedimi qualsiasi cosa sulle posture yoga, allineamenti, benefici o su quali posizioni praticare in base a come ti senti oggi.',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotReply(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: response.text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedAsanas: response.asanas,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#D83153] text-white shadow-2xl hover:bg-[#D83153]/90 hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 group border-2 border-white/80"
          aria-label="Apri chatbot assistente Asana"
        >
          <div className="relative">
            <Bot className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#0A6B5C] rounded-full border border-white" />
          </div>
          <span className="text-xs font-bold tracking-wide pr-1 hidden sm:inline">
            Chiedi sulle Asana
          </span>
        </button>
      )}

      {/* Chat Window Container */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[620px] h-[85vh] bg-[#FAF6F8] rounded-3xl shadow-2xl border border-white/90 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="p-4 bg-[#F2EBED] border-b border-[#FAF6F8] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#D83153] text-white flex items-center justify-center shadow-sm">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3
                    className="text-base font-bold text-[#111827] leading-none"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Guida Asana
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-[#0A6B5C]" />
                </div>
                <p className="text-[11px] text-[#5C4F65] mt-1">
                  Assistente alle posture & allineamenti
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  setMessages([
                    {
                      id: 'welcome_reset',
                      sender: 'bot',
                      text: 'Conversazione riavviata. Come posso guidare la tua pratica oggi?',
                      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    },
                  ]);
                }}
                className="p-2 rounded-xl text-[#5C4F65] hover:text-[#111827] hover:bg-[#FAF6F8] transition-colors"
                title="Ricomincia chat"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl text-[#5C4F65] hover:text-[#111827] hover:bg-[#FAF6F8] transition-colors"
                aria-label="Chiudi chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Prompts Bar */}
          <div className="p-2.5 bg-[#FAF6F8] border-b border-[#F2EBED] flex items-center gap-1.5 overflow-x-auto scrollbar-none text-[11px]">
            <Sparkles className="w-3.5 h-3.5 text-[#D88431] shrink-0 ml-1" />
            {SUGGESTIONS.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(s)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-[#F2EBED] hover:bg-[#D83153]/10 text-[#5C4F65] hover:text-[#D83153] transition-colors shrink-0"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Chat Messages Log */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-[#0A6B5C] text-white flex items-center justify-center shrink-0 text-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[82%] space-y-2 ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`p-3.5 rounded-2xl text-xs md:text-sm leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-[#D83153] text-white rounded-br-xs'
                        : 'bg-[#F2EBED] text-[#111827] rounded-bl-xs border border-white/60 shadow-xs'
                    }`}
                  >
                    <p>{m.text}</p>

                    {/* Rich Asana Info Cards */}
                    {m.suggestedAsanas && m.suggestedAsanas.length > 0 && (
                      <div className="mt-3 space-y-2.5 pt-2 border-t border-[#FAF6F8]/80">
                        {m.suggestedAsanas.map((asana, aIdx) => (
                          <div
                            key={aIdx}
                            className="bg-white p-3 rounded-xl border border-[#FAF6F8] shadow-xs text-left"
                          >
                            <div className="flex items-baseline justify-between gap-2">
                              <h4
                                className="font-bold text-[#111827] text-xs"
                                style={{ fontFamily: 'var(--font-display)' }}
                              >
                                {asana.sanskrit}
                              </h4>
                              <span className="text-[10px] text-[#0A6B5C] font-semibold">
                                {asana.italian}
                              </span>
                            </div>

                            <p className="text-[11px] text-[#5C4F65] mt-1.5 leading-normal">
                              <strong className="text-[#111827]">Benefici:</strong> {asana.benefits}
                            </p>

                            <p className="text-[11px] text-[#D88431] mt-1 font-medium leading-normal">
                              💡 <strong>Allineamento:</strong> {asana.tips}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <span className="text-[10px] text-[#5C4F65]/70 block px-1">
                    {m.time}
                  </span>
                </div>

                {m.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-[#111827] text-white flex items-center justify-center shrink-0 text-xs">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center">
                <div className="w-7 h-7 rounded-full bg-[#0A6B5C] text-white flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-3 bg-[#F2EBED] rounded-2xl rounded-bl-xs text-xs text-[#5C4F65] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#D83153] rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-[#D88431] rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-[#0A6B5C] rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-[#F2EBED] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Fai una domanda sulle posizioni..."
              className="flex-1 px-4 py-2.5 bg-[#FAF6F8] rounded-xl text-xs sm:text-sm text-[#111827] focus:outline-none focus:ring-1 focus:ring-[#D83153] border border-[#F2EBED]"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-[#D83153] text-white hover:bg-[#D83153]/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Invia messaggio"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}