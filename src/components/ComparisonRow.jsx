import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

export default function ComparisonRow({ item, index }) {
  return (
    <TiltCard maxTilt={3}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="tech-card tech-glow grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 p-4 md:p-6 rounded-xl bg-white border border-cn-red/10 hover:border-cn-red/30 transition-colors"
    >
      <div className="tech-bar rounded-t-xl" aria-hidden="true" />
      <div className="md:col-span-3 mb-2">
        <h4 className="font-bold font-serif text-cn-red-dark text-base md:text-lg">
          {item.criterion}
        </h4>
      </div>
      <div className="p-4 rounded-lg bg-cn-red/5 border border-cn-red/10">
        <p className="tech-mono text-xs font-semibold text-cn-red mb-2 uppercase tracking-wider">Truyền thống</p>
        <p className="text-sm text-cn-dark/80 leading-relaxed">{item.traditional}</p>
      </div>
      <div className="p-4 rounded-lg bg-cn-teal/10 border border-cn-teal/20">
        <p className="tech-mono text-xs font-semibold text-cn-teal-dark mb-2 uppercase tracking-wider">Công nghệ cao</p>
        <p className="text-sm text-cn-dark/80 leading-relaxed">{item.modern}</p>
      </div>
      <div className="p-4 rounded-lg bg-cn-dark text-cn-cream border border-cn-dark">
        <p className="tech-mono text-xs font-semibold text-cn-gold mb-2 uppercase tracking-wider">Điểm chung</p>
        <p className="text-sm leading-relaxed">{item.common}</p>
      </div>
    </motion.div>
    </TiltCard>
  );
}
