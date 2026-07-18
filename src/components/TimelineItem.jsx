import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TimelineItem({ item, index, isLeft }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className={`relative flex items-start gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <div
          className="inline-block bg-white/10 backdrop-blur rounded-xl p-4 md:p-6 border border-white/20 cursor-pointer hover:bg-white/20 transition-colors"
          onClick={() => setOpen(!open)}
        >
          <span className="tech-mono text-cn-teal-light text-xs">{'>'} </span>
          <span className="text-cn-gold font-bold font-serif text-lg">
            {item.year}
          </span>
          <h3 className="text-white font-serif font-bold text-base md:text-lg mt-1">
            {item.title}
          </h3>
          <AnimatePresence>
            {open && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-cn-cream/80 text-sm mt-3 overflow-hidden leading-relaxed"
              >
                {item.content}
              </motion.p>
            )}
          </AnimatePresence>
          {!open && (
            <p className="text-xs text-cn-gold/60 mt-2">Nhấn để đọc thêm ↓</p>
          )}
        </div>
      </div>
      <div className="hidden md:flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-cn-gold border-4 border-cn-dark shrink-0 z-10 shadow-[0_0_10px_rgba(45,212,199,0.6)]" />
        {index < 3 && <div className="w-0.5 h-full bg-cn-gold/30" />}
      </div>
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}
