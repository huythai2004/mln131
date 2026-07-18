import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useCountUp } from '../hooks/index';

export default function CountUp({ end, suffix = '', prefix = '', duration = 2000 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useCountUp(end, duration, isInView);

  return (
    <span ref={ref} className="tech-mono font-bold text-4xl md:text-5xl text-cn-red">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
