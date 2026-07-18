import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

export default function CaseCard({ item, index, onOpen }) {
  return (
    <div className="min-w-[300px] md:min-w-[380px] max-w-[380px] flex-shrink-0 px-2 snap-center h-full">
      <TiltCard maxTilt={7} className="h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="tech-card tech-glow bg-white rounded-xl border border-cn-teal/15 shadow-lg overflow-hidden hover:shadow-2xl transition-shadow min-h-[300px] h-full flex flex-col"
        >
          <div className="tech-bar" aria-hidden="true" />
          <div className="p-6 flex flex-col flex-1 min-h-0">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-cn-teal/10 flex items-center justify-center flex-shrink-0">
                <span className="text-cn-teal-dark font-bold font-serif text-lg">{item.name[0]}</span>
              </div>
              <div className="min-w-0">
                <h3 className="font-serif font-bold text-cn-red-dark break-words">{item.name}</h3>
                <p className="text-xs text-cn-dark/50 tech-chip break-words whitespace-normal">{item.stats}</p>
              </div>
            </div>
            <p className="text-sm text-cn-dark/70 leading-relaxed">{item.description}</p>
            <button
              onClick={() => onOpen(item)}
              className="mt-auto pt-3 text-xs font-medium text-cn-teal-dark hover:text-cn-red-dark transition-colors flex items-center gap-1 self-start text-left whitespace-normal"
            >
              Xem liên hệ với tư tưởng GCCN →
            </button>
          </div>
        </motion.div>
      </TiltCard>
    </div>
  );
}
