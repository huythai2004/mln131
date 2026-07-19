import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import FlipCard from '../components/FlipCard';
import ParallaxLayer from '../components/ParallaxLayer';
import FloatingTechIcons from '../components/FloatingTechIcons';
import { theoryCards } from '../data/index';

// Cơ khí (bánh răng, góc trên trái) chuyển hóa thành mạch số (góc dưới phải) —
// hình ảnh hoá luận điểm cốt lõi của section: giai cấp công nhân đi từ nền sản
// xuất công nghiệp sang lực lượng lao động tri thức - công nghệ số.
const GEAR_CENTER = { x: 20, y: 20 };
const GEAR_OUTER = 15;
const GEAR_INNER = 19;
const GEAR_TEETH = 8;

const CIRCUIT_PADS = [
  { x: 80, y: 64 }, { x: 90, y: 64 }, { x: 90, y: 76 }, { x: 97, y: 76 }, { x: 80, y: 88 }, { x: 91, y: 88 },
];

// Điểm lấy mẫu dọc một đường cong Bézier từ vị trí bánh răng (góc trên trái, xấp
// xỉ theo % khung hình) tới cụm mạch số, dùng làm keyframe cho hạt tín hiệu
// (giá trị lao động) di chuyển liên tục.
const SIGNAL_PATH = [
  { x: 13, y: 18 }, { x: 27.6, y: 18.3 }, { x: 39.9, y: 22.4 }, { x: 51.2, y: 30.5 },
  { x: 62.4, y: 42.4 }, { x: 73.7, y: 58.1 }, { x: 84, y: 74 },
];

// Bánh răng sống trong SVG vuông riêng (aspect-square) để vòng quay không bị
// méo thành hình elip khi section bị kéo giãn theo chiều ngang.
function GearGlyph() {
  return (
    <svg viewBox="0 0 40 40" className="w-full h-full" aria-hidden="true">
      <motion.g
        style={{ color: 'var(--color-cn-red-dark)' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
      >
        {Array.from({ length: GEAR_TEETH }).map((_, i) => (
          <rect
            key={i}
            x={GEAR_CENTER.x - 1.6}
            y={GEAR_CENTER.y - GEAR_INNER}
            width="3.2"
            height="5"
            fill="currentColor"
            transform={`rotate(${(360 / GEAR_TEETH) * i} ${GEAR_CENTER.x} ${GEAR_CENTER.y})`}
          />
        ))}
        <circle cx={GEAR_CENTER.x} cy={GEAR_CENTER.y} r={GEAR_OUTER} fill="none" stroke="currentColor" strokeWidth="0.6" />
        <circle cx={GEAR_CENTER.x} cy={GEAR_CENTER.y} r={GEAR_OUTER - 8} fill="none" stroke="currentColor" strokeWidth="0.5" />
        {[0, 90, 180, 270].map((deg) => (
          <line
            key={deg}
            x1={GEAR_CENTER.x}
            y1={GEAR_CENTER.y}
            x2={GEAR_CENTER.x}
            y2={GEAR_CENTER.y - (GEAR_OUTER - 8)}
            stroke="currentColor"
            strokeWidth="0.5"
            transform={`rotate(${deg} ${GEAR_CENTER.x} ${GEAR_CENTER.y})`}
          />
        ))}
      </motion.g>
    </svg>
  );
}

function CircuitGlyph() {
  return (
    <g className="text-cn-teal-dark" stroke="currentColor" fill="none">
      <path d="M80,64 H90 V76 H97" strokeWidth="0.35" />
      <path d="M80,64 V88 H91" strokeWidth="0.35" />
      {CIRCUIT_PADS.map((p, i) => (
        <rect
          key={i}
          x={p.x - 0.9}
          y={p.y - 0.9}
          width="1.8"
          height="1.8"
          fill="currentColor"
          stroke="none"
          className="tech-blink"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
    </g>
  );
}

function IndustryToDigital() {
  return (
    <>
      <svg
        className="absolute inset-0 w-full h-full opacity-70"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d={`M${SIGNAL_PATH[0].x},${SIGNAL_PATH[0].y} Q52,15 ${SIGNAL_PATH[6].x},${SIGNAL_PATH[6].y}`}
          stroke="currentColor"
          className="text-cn-dark/10"
          strokeWidth="0.25"
          strokeDasharray="1.2 1.4"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        />

        <CircuitGlyph />

        <motion.circle
          r="1"
          fill="var(--color-cn-gold)"
          animate={{
            cx: SIGNAL_PATH.map((p) => p.x),
            cy: SIGNAL_PATH.map((p) => p.y),
            opacity: [0, 1, 1, 1, 1, 1, 0],
          }}
          transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 0.8, ease: 'easeInOut' }}
        />
      </svg>

      <div
        className="absolute top-6 left-6 md:top-8 md:left-10 w-24 h-24 md:w-32 md:h-32 opacity-70 pointer-events-none"
        aria-hidden="true"
      >
        <GearGlyph />
      </div>
    </>
  );
}

export default function TheorySection() {
  return (
    <SectionWrapper id="ly-luan">
      <IndustryToDigital />
      <ParallaxLayer
        speed={0.3}
        className="absolute -top-14 -left-14 w-64 h-64 rounded-full bg-cn-red/8 blur-3xl pointer-events-none"
      />
      <ParallaxLayer
        speed={0.25}
        className="absolute -bottom-16 -right-10 w-80 h-80 rounded-full bg-cn-teal/10 blur-3xl pointer-events-none"
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
