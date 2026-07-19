import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SolutionCard from '../components/SolutionCard';
import { solutionsData } from '../data/index';

function TerminalMockup() {
  const lines = [
    { prompt: '$', text: 'analyze --workforce vietnam/high-tech' },
    { prompt: '>', text: 'Đang đối chiếu với lý luận giai cấp công nhân...', dim: true },
    { prompt: '✓', text: 'Đào tạo kỹ năng số        [====......] 42%', accent: true },
    { prompt: '✓', text: 'Tổ chức Đảng & Công đoàn  [=======...] 71%', accent: true },
    { prompt: '✓', text: 'Chính sách thu hút nhân tài [=====.....] 55%', accent: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto mb-12 rounded-xl bg-cn-dark border border-cn-teal/20 shadow-xl overflow-hidden"
    >
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white/5 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-cn-red-light/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-cn-gold/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-cn-teal-light/70" />
        <span className="ml-3 tech-mono text-[10px] text-cn-cream/40">giai-phap.sh</span>
      </div>
      <div className="p-4 md:p-5 font-mono text-[11px] md:text-xs leading-relaxed space-y-1.5">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.25 }}
            className={line.accent ? 'text-cn-teal-light' : line.dim ? 'text-cn-cream/40' : 'text-cn-cream/80'}
          >
            <span className="text-cn-gold/70 mr-2">{line.prompt}</span>
            {line.text}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}

export default function SolutionsSection() {
  return (
    <SectionWrapper id="giai-phap">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-cn-red-dark mb-3">
          Giải pháp phát triển nguồn nhân lực công nghệ cao
        </h2>
        <p className="text-cn-dark/60 max-w-2xl mx-auto text-sm md:text-base">
          Các giải pháp đồng bộ nhằm vận dụng tư tưởng giai cấp công nhân vào phát triển nhân lực
          công nghệ cao. Nhấn vào từng thẻ để mở rộng chi tiết.
        </p>
      </div>

      <TerminalMockup />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {solutionsData.map((item, i) => (
          <SolutionCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
