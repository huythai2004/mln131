import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionWrapper({ id, children, className = '', dark = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id={id}
      className={`relative py-16 md:py-24 px-4 md:px-8 lg:px-16 transition-colors duration-700 overflow-hidden ${
        dark ? 'bg-cn-dark text-cn-cream' : 'bg-cn-cream text-cn-dark'
      } ${className}`}
    >
      <div className={`circuit-watermark ${dark ? 'text-cn-teal' : 'text-cn-red'}`} aria-hidden="true" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
