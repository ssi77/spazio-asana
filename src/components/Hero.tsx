import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Play, ShieldCheck, Heart, Award, ArrowUpRight, Wind, Activity } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreCourses: () => void;
}

export default function Hero({ onOpenBooking, onExploreCourses }: HeroProps) {
  const { ref, style } = useReveal();
  const [breathPhase, setBreathPhase] = useState<'Inspira' | 'Trattieni' | 'Espira'>('Inspira');

  useEffect(() => {
    const phases: Array<'Inspira' | 'Trattieni' | 'Espira'> = ['Inspira', 'Trattieni', 'Espira'];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % phases.length;
      setBreathPhase(phases[idx]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex items-center">
      {/* Animated Organic Ambient Aura Orbs (Motion Design) */}
      <motion.div
        animate={{
          x: [0, 28, -20, 0],
          y: [0, -32, 18, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-12 left-10 w-72 h-72 rounded-full bg-[#D83153]/15 blur-3xl pointer-events-none -z-10 max-w-[80vw]"
      />
      
      <motion.div
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 24, -28, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-10 right-4 w-72 h-72 rounded-full bg-[#0A6B5C]/15 blur-3xl pointer-events-none -z-10 max-w-[80vw]"
      />

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 right-1/4 w-60 h-60 rounded-full bg-[#D88431]/15 blur-3xl pointer-events-none -z-10 max-w-[80vw]"
      />

      {/* Floating Zen Breath Particles */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {[
          { top: '20%', left: '15%', size: 6, delay: 0 },
          { top: '65%', left: '8%', size: 8, delay: 2 },
          { top: '30%', right: '18%', size: 10, delay: 1 },
          { top: '78%', right: '22%', size: 7, delay: 3 },
        ].map((pt, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -22, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5 + i * 1.5,
              repeat: Infinity,
              delay: pt.delay,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              top: pt.top,
              left: pt.left,
              right: pt.right,
              width: pt.size,
              height: pt.size,
            }}
            className="rounded-full bg-[#D83153]/40 blur-[1px]"
          />
        ))}
      </div>

      <div ref={ref} style={style} className="max-w-6xl mx-auto px-4 md:px-6 w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Asymmetric Bold Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left min-w-0 w-full">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EBED] border border-[#D83153]/20 mb-6 max-w-full">
              <span className="flex h-2 w-2 rounded-full bg-[#D83153] animate-pulse shrink-0" />
              <span className="text-xs font-semibold text-[#111827] uppercase tracking-wider truncate">
                Studio in Presenza & Piattaforma On-Demand
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111827] leading-[1.12]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ritrova il tuo ritmo.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D83153] via-[#765e47] to-[#0A6B5C]">
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

          {/* Right Column: Hero Visual with Motion Design & Interactive Flow */}
          <div className="lg:col-span-5 relative min-w-0 w-full mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none w-full">
              
              {/* Motion Animated Background Breathing Ring */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[#D83153]/20 via-[#D88431]/20 to-[#0A6B5C]/20 blur-xl -z-10"
              />

              {/* Main Decorative Organic Frame with subtle gentle float */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-[#F2EBED] w-full group"
              >
                <img
                  src="https://pub-3a823b4a94e74f1c9bf9813f768ca0e7.r2.dev/builder/229/assets/ai-33c49d47aa-236ac102a958.jpg"
                  alt="Sessione di yoga serena in studio a Spazio Asana"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  width={500}
                  height={625}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/70 via-[#111827]/10 to-transparent pointer-events-none" />
                
                {/* Live Breathwork Dynamic Guide Badge in Image */}
                <div className="absolute top-4 left-4 p-2.5 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg border border-white/80 flex items-center gap-2">
                  <motion.div
                    animate={{
                      scale: breathPhase === 'Inspira' ? [1, 1.45] : breathPhase === 'Trattieni' ? 1.45 : [1.45, 1],
                      backgroundColor: breathPhase === 'Inspira' ? '#D83153' : breathPhase === 'Trattieni' ? '#D88431' : '#0A6B5C',
                    }}
                    transition={{
                      duration: 3.8,
                      ease: 'easeInOut',
                    }}
                    className="w-3 h-3 rounded-full shrink-0 shadow-sm"
                  />
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#111827]">
                    <Wind className="w-3.5 h-3.5 text-[#0A6B5C]" />
                    <span>Respiro:</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={breathPhase}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="text-[#D83153]"
                      >
                        {breathPhase}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Overlay live schedule card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#FAF6F8]/95 backdrop-blur-md border border-white/60 shadow-lg text-left"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative">
                      <div className="w-9 h-9 rounded-full bg-[#0A6B5C] text-white flex items-center justify-center font-bold text-xs shrink-0">
                        SA
                      </div>
                      <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D83153] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D83153]" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-[#111827] truncate flex items-center gap-1.5">
                        <Activity className="w-3 h-3 text-[#D83153]" />
                        Pratica Guidata Oggi: 18:30
                      </p>
                      <p className="text-[11px] text-[#5C4F65] truncate">Vinyasa Flow Dinamico con Elena &bull; Streaming & Live</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Pill Badge Top Right with Motion Hover & Animation */}
              <motion.div
                animate={{
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-3 right-2 sm:-right-2 p-3 rounded-2xl bg-white shadow-xl border border-[#F2EBED] flex items-center gap-2.5 max-w-[calc(100vw-3rem)] cursor-default"
              >
                <div className="p-1.5 rounded-xl bg-[#D83153]/10 text-[#D83153] shrink-0">
                  <Sparkles className="w-4 h-4 animate-spin [animation-duration:8s]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#111827] truncate">240+ Ore On-Demand</p>
                  <p className="text-[10px] text-[#5C4F65] truncate">Qualità 4K & Audio Immersivo</p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}