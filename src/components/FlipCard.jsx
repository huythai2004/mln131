import { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export default function FlipCard({ title, content, icon, index }) {
  const [flipped, setFlipped] = useState(false);
  const IconComp = Icons[icon] || Icons.FileText;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="perspective-1000 w-full h-72 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="relative w-full h-full preserve-3d"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 backface-hidden rounded-xl bg-white border-2 border-cn-red/20 shadow-lg p-6 flex flex-col items-center justify-center text-center hover:border-cn-red/50 transition-colors"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="w-14 h-14 rounded-full bg-cn-red/10 flex items-center justify-center mb-4">
            <IconComp className="w-7 h-7 text-cn-red" />
          </div>
          <h3 className="font-serif text-lg font-bold text-cn-red-dark mb-2">{title}</h3>
          <p className="text-xs text-cn-dark/60">Nhấn để xem chi tiết →</p>
        </div>

        <div className="absolute inset-0 backface-hidden rounded-xl bg-gradient-to-br from-cn-red to-cn-red-dark shadow-lg p-6 flex flex-col items-center justify-center text-center text-white"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <IconComp className="w-8 h-8 text-cn-gold mb-3" />
          <p className="text-sm leading-relaxed">{content}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
