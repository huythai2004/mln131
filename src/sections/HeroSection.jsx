import { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Cpu, BrainCircuit, Network, Code2, Binary, Database } from 'lucide-react';

const STAR_PARTICLE_COUNT = 35;

const ORBIT_ICONS = [
  { Icon: Cpu, angle: 0, radius: 1 },
  { Icon: BrainCircuit, angle: 60, radius: 1 },
  { Icon: Network, angle: 120, radius: 1 },
  { Icon: Code2, angle: 180, radius: 1 },
  { Icon: Binary, angle: 240, radius: 1 },
  { Icon: Database, angle: 300, radius: 1 },
];

function TechOrbit() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-[6%] rounded-full border border-dashed border-cn-teal-light/25" />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {ORBIT_ICONS.map(({ Icon, angle }, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-9 h-9 -ml-[18px] -mt-[18px]"
            style={{
              transform: `rotate(${angle}deg) translate(0, -140px) rotate(-${angle}deg)`,
            }}
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              className="w-full h-full rounded-full bg-cn-dark/60 border border-cn-teal-light/40 flex items-center justify-center shadow-[0_0_10px_rgba(45,212,199,0.35)]"
            >
              <Icon className="w-4 h-4 text-cn-teal-light" strokeWidth={1.75} />
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function ParticleCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < STAR_PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${p.opacity})`;
        ctx.fill();
      });
      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}

function TypingText({ text, className, delay = 0 }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function HeroSection() {
  const handleCTA = () => {
    document.getElementById('ly-luan')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cn-dark via-cn-red-dark to-cn-dark"
    >
      <ParticleCanvas />

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 20 40 M 0 20 L 40 20 M 80 0 L 80 40 M 60 20 L 100 20 M 20 60 L 20 100 M 0 80 L 40 80 M 80 60 L 80 100 M 60 80 L 100 80" stroke="#2DD4C7" strokeWidth="0.5" fill="none" opacity="0.35"/>
              <circle cx="20" cy="20" r="2" fill="#2DD4C7" opacity="0.35"/>
              <circle cx="80" cy="20" r="2" fill="#2DD4C7" opacity="0.35"/>
              <circle cx="20" cy="80" r="2" fill="#2DD4C7" opacity="0.35"/>
              <circle cx="80" cy="80" r="2" fill="#2DD4C7" opacity="0.35"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', type: 'spring' }}
          className="relative w-56 h-56 md:w-72 md:h-72 mx-auto mb-2 md:mb-4"
        >
          <TechOrbit />
          <div className="w-full h-full rounded-full bg-cn-gold/20 border-2 border-cn-gold/50 flex items-center justify-center">
            <span className="text-6xl md:text-7xl text-cn-gold">★</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="tech-chip justify-center text-cn-teal-light text-[11px] md:text-xs uppercase mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cn-teal-light animate-pulse" />
          Lý luận Mác - Lênin × Kỷ nguyên công nghệ cao
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-cn-cream leading-tight mb-6"
        >
          <TypingText
            text="Vận Dụng Tư Tưởng Về Giai Cấp Công Nhân Vào Phát Triển Nguồn Nhân Lực Công Nghệ Cao Ở Việt Nam"
            delay={0.5}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="text-cn-gold/80 font-serif text-sm md:text-lg italic max-w-2xl mx-auto mb-10"
        >
          "Chủ Nghĩa Xã Hội Khoa Học — Từ lý luận kinh điển đến kỷ nguyên số"
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCTA}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-cn-gold text-cn-dark font-semibold text-sm hover:bg-cn-gold-dark transition-colors shadow-lg"
        >
          Bắt đầu hành trình
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.button>
      </div>
    </section>
  );
}
