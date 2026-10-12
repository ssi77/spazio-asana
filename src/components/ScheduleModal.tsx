import { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, Sparkles, User } from 'lucide-react';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ClassItem {
  id: string;
  day: string;
  time: string;
  title: string;
  instructor: string;
  room: string;
  spotsLeft: number;
}

const SCHEDULE: ClassItem[] = [
  { id: '1', day: 'Lunedì', time: '07:30 - 08:30', title: 'Morning Vinyasa Awakening', instructor: 'Elena Riva', room: 'Sala Sole (In presenza + Live)', spotsLeft: 3 },
  { id: '2', day: 'Lunedì', time: '18:30 - 19:45', title: 'Dynamic Flow & Inversioni', instructor: 'Chiara Valenti', room: 'Sala Sole (In presenza)', spotsLeft: 1 },
  { id: '3', day: 'Martedì', time: '13:00 - 14:00', title: 'Pranayama & Lunch Pause Yoga', instructor: 'Silvia Moretti', room: 'Sala Luna (Live Streaming)', spotsLeft: 8 },
  { id: '4', day: 'Martedì', time: '19:00 - 20:15', title: 'Yin Yoga & Deep Release', instructor: 'Marco Rinaldi', room: 'Sala Luna (In presenza)', spotsLeft: 2 },
  { id: '5', day: 'Mercoledì', time: '09:00 - 10:15', title: 'Hatha Alignment & Mobilità', instructor: 'Elena Riva', room: 'Sala Sole (In presenza)', spotsLeft: 4 },
  { id: '6', day: 'Giovedì', time: '18:30 - 19:45', title: 'Vinyasa Flow & Arm Balances', instructor: 'Chiara Valenti', room: 'Sala Sole (In presenza + Live)', spotsLeft: 2 },
  { id: '7', day: 'Venerdì', time: '19:00 - 20:30', title: 'Candlelight Restorative & Gong', instructor: 'Marco Rinaldi', room: 'Sala Luna (In presenza)', spotsLeft: 0 },
  { id: '8', day: 'Sabato', time: '10:00 - 11:30', title: 'Weekend Masterclass & Brunch', instructor: 'Team Spazio Asana', room: 'Terrazza Zen', spotsLeft: 5 },
];

export default function ScheduleModal({ isOpen, onClose }: ScheduleModalProps) {
  const [selectedDay, setSelectedDay] = useState('Tutti');
  const [bookedId, setBookedId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const days = ['Tutti', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];

  const filtered = selectedDay === 'Tutti'
    ? SCHEDULE
    : SCHEDULE.filter((s) => s.day === selectedDay);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FAF6F8] rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-white">
        
        {/* Header */}
        <div className="p-6 bg-[#F2EBED] border-b border-[#FAF6F8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#D83153] text-white">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111827]" style={{ fontFamily: 'var(--font-display)' }}>
                Prenota la tua Lezione
              </h3>
              <p className="text-xs text-[#5C4F65]">Seleziona una sessione in studio o in diretta streaming</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white hover:bg-[#D83153]/10 text-[#5C4F65] hover:text-[#111827] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!isSuccess ? (
            <>
              {/* Day selector */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {days.map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDay(d)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold shrink-0 transition-colors ${
                      selectedDay === d
                        ? 'bg-[#D83153] text-white'
                        : 'bg-[#F2EBED] text-[#5C4F65] hover:bg-[#FAF6F8]'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>

              {/* Class list */}
              <div className="space-y-3">
                {filtered.map((item) => {
                  const isSelected = bookedId === item.id;
                  const isSoldOut = item.spotsLeft === 0;

                  return (
                    <div
                      key={item.id}
                      onClick={() => !isSoldOut && setBookedId(item.id)}
                      className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer ${
                        isSelected
                          ? 'border-[#D83153] bg-white shadow-md'
                          : isSoldOut
                          ? 'opacity-50 bg-[#F2EBED] cursor-not-allowed'
                          : 'bg-[#F2EBED] border-transparent hover:border-[#D83153]/30'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#D83153]">{item.day}</span>
                          <span className="text-xs font-medium text-[#5C4F65]">&bull; {item.time}</span>
                        </div>
                        <h4 className="font-bold text-[#111827] text-base mt-0.5" style={{ fontFamily: 'var(--font-display)' }}>
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-3 text-xs text-[#5C4F65] mt-1">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3 text-[#0A6B5C]" /> {item.instructor}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#D88431]" /> {item.room}
                          </span>
                        </div>
                      </div>

                      <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                            isSoldOut
                              ? 'bg-gray-200 text-gray-500'
                              : item.spotsLeft <= 2
                              ? 'bg-[#D83153]/15 text-[#D83153]'
                              : 'bg-[#0A6B5C]/15 text-[#0A6B5C]'
                          }`}
                        >
                          {isSoldOut ? 'Completo' : `${item.spotsLeft} posti rimasti`}
                        </span>

                        <span className="text-xs font-bold text-[#D83153]">
                          {isSelected ? '✓ Selezionato' : isSoldOut ? 'Lista d\'attesa' : 'Seleziona'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Booking Form when item selected */}
              {bookedId && (
                <form onSubmit={handleBooking} className="mt-6 p-5 rounded-2xl bg-white border border-[#D83153]/20 space-y-4">
                  <p className="text-sm font-bold text-[#111827]">
                    Inserisci i tuoi dati per confermare il posto:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-[#5C4F65] block mb-1">Nome e Cognome *</label>
                      <input
                        type="text"
                        required
                        placeholder="Mario Rossi"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#F2EBED] bg-[#FAF6F8] text-sm text-[#111827] focus:outline-none focus:border-[#D83153]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#5C4F65] block mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="mario@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#F2EBED] bg-[#FAF6F8] text-sm text-[#111827] focus:outline-none focus:border-[#D83153]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#D83153] text-white font-semibold text-sm hover:bg-[#D83153]/90 shadow-lg transition-all"
                  >
                    Conferma Prenotazione Gratuita di Prova
                  </button>
                </form>
              )}
            </>
          ) : (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#0A6B5C]/15 text-[#0A6B5C] flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-[#111827]" style={{ fontFamily: 'var(--font-display)' }}>
                Prenotazione Confermata!
              </h4>
              <p className="text-sm text-[#5C4F65] max-w-md mx-auto">
                Abbiamo inviato i dettagli e il link di accesso/promemoria all’indirizzo <strong className="text-[#111827]">{formData.email}</strong>. Ti aspettiamo sul tappetino!
              </p>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setBookedId(null);
                  onClose();
                }}
                className="mt-4 px-8 py-3 rounded-full bg-[#111827] text-white text-xs font-semibold"
              >
                Chiudi Finestra
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}