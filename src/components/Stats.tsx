import { useEffect, useState, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

interface StatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

function AnimatedNumber({ end, suffix = '', prefix = '', decimals = 0 }: StatProps) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasStarted(true);
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp: number | null = null;
    const duration = 1600;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setVal(ease * end);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, end]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? val.toFixed(decimals) : Math.floor(val).toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { ref, style } = useReveal();

  const statsList = [
    { value: 240, suffix: '+', label: 'Video Corsi & Masterclass', desc: 'Disponibili in streaming continuo' },
    { value: 98, suffix: '%', label: 'Soddisfazione Allievi', desc: 'Recensioni verificate a 5 stelle' },
    { value: 12, suffix: 'k', label: 'Ore di Pratica Guidata', desc: 'Completate quest’anno dalla community' },
    { value: 14, suffix: '+', label: 'Istruttori Certificati', desc: 'Esperienza internazionale RYT' },
  ];

  return (
    <section className="py-20 bg-[#FAF6F8] border-y border-[#F2EBED] relative">
      <div ref={ref} style={style} className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsList.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4">
              <div
                className="text-4xl md:text-5xl font-extrabold text-[#D83153] tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <AnimatedNumber end={stat.value} suffix={stat.suffix} />
              </div>
              <p
                className="text-base font-bold text-[#111827] mt-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {stat.label}
              </p>
              <p className="text-xs text-[#5C4F65] mt-1 max-w-[180px]">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}