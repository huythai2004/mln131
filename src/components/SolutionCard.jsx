import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import TiltCard from './TiltCard';

export default function SolutionCard({ item, index }) {
  const [expanded, setExpanded] = useState(false);
  const IconComp = Icons[item.icon] || Icons.FileText;

  return (
    <TiltCard maxTilt={5} className="h-full">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      layout
      className="tech-card tech-glow h-full bg-white rounded-xl border border-cn-teal/15 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
    >
      <div className="tech-bar" aria-hidden="true" />
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-5 flex items-start gap-4 text-left"
      >
        <div className="w-10 h-10 rounded-lg bg-cn-teal/10 flex items-center justify-center shrink-0 mt-1">
          <IconComp className="w-5 h-5 text-cn-teal-dark" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="tech-mono text-[10px] text-cn-teal-dark/60">{String(index + 1).padStart(2, '0')}</span>
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-serif font-bold text-cn-red-dark text-sm md:text-base">
              {item.title}
            </h3>
            <span className="text-cn-teal-dark shrink-0 text-sm">{expanded ? '−' : '+'}</span>
          </div>
          <AnimatePresence>
            {expanded && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-cn-dark/70 leading-relaxed mt-3 overflow-hidden"
              >
                {item.content}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </button>
    </motion.div>
    </TiltCard>
  );
}
