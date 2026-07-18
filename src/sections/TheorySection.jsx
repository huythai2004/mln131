import SectionWrapper from '../components/SectionWrapper';
import FlipCard from '../components/FlipCard';
import { theoryCards } from '../data/index';

export default function TheorySection() {
  return (
    <SectionWrapper id="ly-luan">
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
