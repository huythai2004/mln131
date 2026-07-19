import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const DEFAULT_LAYOUT = [
  { icon: 'Cpu', top: '10%', left: '6%', size: 22, duration: 7 },
  { icon: 'Network', top: '70%', left: '10%', size: 18, duration: 9 },
  { icon: 'BrainCircuit', top: '18%', left: '90%', size: 24, duration: 8 },
  { icon: 'Binary', top: '75%', left: '92%', size: 18, duration: 6.5 },
  { icon: 'Database', top: '45%', left: '3%', size: 16, duration: 10 },
  { icon: 'Code2', top: '40%', left: '96%', size: 16, duration: 7.5 },
];

export default function FloatingTechIcons({ tone = 'light', items = DEFAULT_LAYOUT }) {
  const colorClass = tone === 'dark' ? 'text-cn-teal-light/25' : 'text-cn-teal/20';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {items.map((item, i) => {
        const IconComp = Icons[item.icon] || Icons.Cpu;
        return (
          <motion.div
            key={i}
            className={`absolute ${colorClass}`}
            style={{ top: item.top, left: item.left }}
            animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
            transition={{ duration: item.duration, repeat: Infinity, ease: 'easeInOut' }}
          >
            <IconComp size={item.size} strokeWidth={1.5} />
          </motion.div>
        );
      })}
    </div>
  );
}
