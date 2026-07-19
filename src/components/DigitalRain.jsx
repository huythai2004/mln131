import { useEffect, useRef } from 'react';

const CHARS = '01アイウエオ01001101101GCCN01'.split('');

export default function DigitalRain({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let columns = 0;
    let drops = [];
    let animId;

    const fontSize = 14;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -50);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.fillStyle = 'rgba(26, 18, 16, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillStyle = 'rgba(45, 212, 199, 0.55)';
        ctx.fillText(char, x, y);
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animId = requestAnimationFrame(draw);
    };
    animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
