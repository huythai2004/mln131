import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import FlipCard from '../components/FlipCard';
import ParallaxLayer from '../components/ParallaxLayer';
import FloatingTechIcons from '../components/FloatingTechIcons';
import { theoryCards } from '../data/index';

function NeuralMesh() {
  const nodes = [
    { x: 8, y: 20 }, { x: 22, y: 55 }, { x: 6, y: 82 },
    { x: 40, y: 12 }, { x: 38, y: 68 },
    { x: 62, y: 30 }, { x: 60, y: 75 },
    { x: 92, y: 18 }, { x: 80, y: 50 }, { x: 94, y: 85 },
  ];
  const edges = [
    [0, 1], [1, 2], [0, 3], [1, 4], [3, 5], [4, 5], [4, 6],
    [5, 7], [5, 8], [6, 8], [8, 9], [7, 8],
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="currentColor"
          strokeWidth="0.15"
          className="text-cn-teal"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.35 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: i * 0.06, ease: 'easeOut' }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="0.7"
          className="text-cn-teal-dark"
          fill="currentColor"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
        >
          <animate
            attributeName="opacity"
            values="0.25;0.6;0.25"
            dur={`${2.5 + (i % 4) * 0.6}s`}
            repeatCount="indefinite"
          />
        </motion.circle>
      ))}
    </svg>
  );
}

export default function TheorySection() {
  return (
    <SectionWrapper id="ly-luan">
      <NeuralMesh />
      <ParallaxLayer
        speed={0.35}
        className="absolute -top-10 -left-16 w-72 h-72 rounded-full bg-cn-teal/10 blur-3xl pointer-events-none"
      />
      <ParallaxLayer
        speed={0.25}
        className="absolute -bottom-16 -right-10 w-80 h-80 rounded-full bg-cn-red/10 blur-3xl pointer-events-none"
      />
      <FloatingTechIcons tone="light" />

      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-cn-red-dark mb-3">
          Giai cấp công nhân là ai?
        </h2>
        <p className="text-cn-dark/60 max-w-2xl mx-auto text-sm md:text-base">
          Những luận điểm nền tảng về giai cấp công nhân theo chủ nghĩa Mác - Lênin.
          Nhấn vào từng thẻ để khám phá nội dung.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {theoryCards.map((card, i) => (
          <FlipCard key={card.id} {...card} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
