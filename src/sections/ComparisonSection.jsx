import SectionWrapper from '../components/SectionWrapper';
import ComparisonRow from '../components/ComparisonRow';
import FloatingTechIcons from '../components/FloatingTechIcons';
import { comparisonData } from '../data/index';

export default function ComparisonSection() {
  return (
    <SectionWrapper id="so-sanh">
      <FloatingTechIcons tone="light" />
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-cn-red-dark mb-3">
          Công nhân truyền thống vs. Nhân lực công nghệ cao
        </h2>
        <p className="text-cn-dark/60 max-w-2xl mx-auto text-sm md:text-base">
          So sánh trực quan để thấy sự kế thừa và phát triển của giai cấp công nhân qua hai thời kỳ.
        </p>
      </div>

      <div className="space-y-5 md:space-y-6">
        {comparisonData.map((item, i) => (
          <ComparisonRow key={i} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
