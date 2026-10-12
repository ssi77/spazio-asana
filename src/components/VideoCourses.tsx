import { useState } from 'react';
import { Play, Clock, Sparkles, Filter, CheckCircle2, Bookmark, Star, Volume2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Course {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  level: 'Principiante' | 'Intermedio' | 'Tutti i Livelli' | 'Avanzato';
  category: 'Vinyasa' | 'Yin' | 'Breathwork' | 'Restorative' | 'Meditazione';
  lessonsCount: number;
  rating: number;
  description: string;
  tags: string[];
}

const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Fondamenti di Vinyasa: Fluidità e Respiro',
    instructor: 'Chiara Valenti (RYT 500)',
    duration: '6 ore totali',
    level: 'Principiante',
    category: 'Vinyasa',
    lessonsCount: 8,
    rating: 4.9,
    description: 'Impara l’allineamento posturale, il saluto al sole e la connessione sincronizzata tra respiro Ujjayi e movimento.',
    tags: ['Forza', 'Flessibilità', 'Postura'],
  },
  {
    id: 'c2',
    title: 'Yin Yoga & Rilascio Miofasciale Profondo',
    instructor: 'Marco Rinaldi',
    duration: '4.5 ore',
    level: 'Tutti i Livelli',
    category: 'Yin',
    lessonsCount: 6,
    rating: 5.0,
    description: 'Posture passive mantenute per 3-5 minuti per liberare le tensioni del tessuto connettivo e sciogliere lo stress accumulato.',
    tags: ['Rilassamento', 'Nervi', 'Sera'],
  },
  {
    id: 'c3',
    title: 'Pranayama Masterclass: L’Arte del Respiro Vitale',
    instructor: 'Silvia Moretti',
    duration: '3 ore',
    level: 'Tutti i Livelli',
    category: 'Breathwork',
    lessonsCount: 5,
    rating: 4.9,
    description: 'Tecniche di respirazione diaframmatica, Nadi Shodhana e Kapalabhati per calmare la mente e purificare l’energia vitale.',
    tags: ['Focus', 'Ansia Zero', 'Energia'],
  },
  {
    id: 'c4',
    title: 'Power Vinyasa: Stabilità del Core & Inversioni',
    instructor: 'Chiara Valenti',
    duration: '8 ore',
    level: 'Intermedio',
    category: 'Vinyasa',
    lessonsCount: 10,
    rating: 4.8,
    description: 'Una pratica dinamica ad alta energia per sviluppare forza addominale, equilibrio su braccia e transizioni fluide.',
    tags: ['Potenziamento', 'Equilibrio'],
  },
  {
    id: 'c5',
    title: 'Yoga per il Sonno e Rilassamento Serale',
    instructor: 'Alessia Conti',
    duration: '3.5 ore',
    level: 'Tutti i Livelli',
    category: 'Restorative',
    lessonsCount: 7,
    rating: 5.0,
    description: 'Sequenze dolci al lume di candela per rallentare il battito cardiaco, allentare la colonna lombare e prepararsi a un sonno profondo.',
    tags: ['Dormire Bene', 'Anti-stress'],
  },
  {
    id: 'c6',
    title: 'Mindfulness & Meditazione Guidata Quotidiana',
    instructor: 'Marco Rinaldi',
    duration: '5 ore',
    level: 'Principiante',
    category: 'Meditazione',
    lessonsCount: 14,
    rating: 4.9,
    description: 'Sessioni quotidiane di 15-20 minuti per coltivare presenza mentale, chiarezza interiore e radicamento nel presente.',
    tags: ['Presenza', 'Calma Mentale'],
  },
];

export default function VideoCourses() {
  const { ref, style } = useReveal();
  const [activeCategory, setActiveCategory] = useState<string>('Tutti');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(COURSES[0]);
  const [savedCourses, setSavedCourses] = useState<string[]>(['c1']);

  const categories = ['Tutti', 'Vinyasa', 'Yin', 'Breathwork', 'Restorative', 'Meditazione'];

  const filteredCourses = activeCategory === 'Tutti'
    ? COURSES
    : COURSES.filter((c) => c.category === activeCategory);

  const toggleSave = (id: string) => {
    setSavedCourses((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="courses" className="py-24 md:py-32 bg-[#FAF6F8] relative">
      <div ref={ref} style={style} className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold text-[#D83153] uppercase tracking-widest mb-3">
            Libreria Digitale &bull; On Demand 24/7
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#111827] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            I Percorsi e Video Corsi di Spazio Asana
          </h2>
          <p className="text-base md:text-lg text-[#5C4F65] mt-4 leading-relaxed">
            Esercitati dove e quando desideri. Lezioni registrate in audio binaurale e video ad altissima definizione, con schede di respirazione e guide passo-passo.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#D83153] text-white shadow-md'
                  : 'bg-[#F2EBED] text-[#5C4F65] hover:bg-[#D83153]/10 hover:text-[#D83153]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Feature: Featured Player Preview */}
        {selectedCourse && (
          <div className="mb-14 p-6 md:p-8 rounded-3xl bg-[#F2EBED] border border-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden bg-[#111827] aspect-video flex items-center justify-center group shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                <Volume2 className="w-3.5 h-3.5 text-[#D88431]" />
                Audio Spaziale 432Hz
              </div>
              <div className="text-center z-10 px-4">
                <div className="w-16 h-16 rounded-full bg-[#D83153] text-white flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-7 h-7 fill-white ml-1" />
                </div>
                <p className="text-white font-bold text-sm md:text-base">Guarda l’intro: {selectedCourse.title}</p>
                <p className="text-white/80 text-xs mt-1">Con {selectedCourse.instructor}</p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center text-left">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#0A6B5C]/15 text-[#0A6B5C] font-semibold text-xs">
                  {selectedCourse.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#D88431]/15 text-[#D88431] font-semibold text-xs">
                  {selectedCourse.level}
                </span>
              </div>

              <h3
                className="text-2xl font-bold text-[#111827]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {selectedCourse.title}
              </h3>

              <p className="text-sm text-[#5C4F65] mt-3 leading-relaxed">
                {selectedCourse.description}
              </p>

              <div className="grid grid-cols-2 gap-3 my-6 py-4 border-y border-[#FAF6F8]">
                <div>
                  <p className="text-xs text-[#5C4F65]">Durata</p>
                  <p className="font-bold text-[#111827] text-sm">{selectedCourse.duration}</p>
                </div>
                <div>
                  <p className="text-xs text-[#5C4F65]">Lezioni</p>
                  <p className="font-bold text-[#111827] text-sm">{selectedCourse.lessonsCount} Moduli HD</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#pricing"
                  className="flex-1 py-3 px-6 rounded-full bg-[#D83153] text-white font-semibold text-xs text-center hover:bg-[#D83153]/90 shadow-md transition-all"
                >
                  Sblocca Tutto con l'Abbonamento
                </a>
                <button
                  onClick={() => toggleSave(selectedCourse.id)}
                  aria-label="Salva nei preferiti"
                  className={`p-3 rounded-full border transition-colors ${
                    savedCourses.includes(selectedCourse.id)
                      ? 'bg-[#D83153]/10 border-[#D83153] text-[#D83153]'
                      : 'bg-white border-[#FAF6F8] text-[#5C4F65] hover:text-[#111827]'
                  }`}
                >
                  <Bookmark className="w-4 h-4 fill-current" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => setSelectedCourse(course)}
              className={`rounded-2xl p-6 transition-all duration-300 cursor-pointer border flex flex-col justify-between ${
                selectedCourse?.id === course.id
                  ? 'bg-white border-[#D83153] shadow-lg -translate-y-1'
                  : 'bg-[#F2EBED] border-transparent hover:bg-white hover:border-[#D83153]/20 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FAF6F8] text-[#0A6B5C]">
                    {course.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-[#111827]">
                    <Star className="w-3.5 h-3.5 fill-[#D88431] text-[#D88431]" />
                    {course.rating}
                  </div>
                </div>

                <h4
                  className="text-lg font-bold text-[#111827] group-hover:text-[#D83153] transition-colors line-clamp-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {course.title}
                </h4>

                <p className="text-xs text-[#5C4F65] mt-2 font-medium">
                  Istruttore: {course.instructor}
                </p>

                <p className="text-xs text-[#5C4F65] mt-3 line-clamp-2 leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#FAF6F8] flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-[#5C4F65]">
                  <Clock className="w-3.5 h-3.5 text-[#D83153]" />
                  <span>{course.duration}</span>
                </div>
                <span className="text-xs font-bold text-[#D83153] hover:underline flex items-center gap-1">
                  Seleziona &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}