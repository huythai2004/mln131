import { motion } from 'framer-motion';

export default function ProgressBar({ progress }) {
  return (
    <div className="fixed left-0 top-0 h-1 z-[60] bg-cn-cream/20">
      <motion.div
        className="h-full bg-gradient-to-r from-cn-red via-cn-gold to-cn-red"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}
