import SectionWrapper from '../components/SectionWrapper';
import SolutionCard from '../components/SolutionCard';
import { solutionsData } from '../data/index';

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {solutionsData.map((item, i) => (
          <SolutionCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
