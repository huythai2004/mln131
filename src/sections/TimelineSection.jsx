import SectionWrapper from '../components/SectionWrapper';
import TimelineItem from '../components/TimelineItem';
import ParallaxLayer from '../components/ParallaxLayer';
import { timelineData } from '../data/index';

export default function TimelineSection() {
  return (
    <SectionWrapper id="thoi-gian" dark className="relative">
      <ParallaxLayer speed={0.4} className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cn-red/10 via-transparent to-transparent pointer-events-none" />
      <ParallaxLayer speed={0.7} className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cn-teal/10 via-transparent to-transparent pointer-events-none" />

      <div className="text-center mb-12 md:mb-16 relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-cn-cream mb-3">
          Giai cấp công nhân qua các thời đại
        </h2>
        <p className="text-cn-cream/60 max-w-2xl mx-auto text-sm md:text-base">
          Hành trình lịch sử từ cách mạng công nghiệp thế kỷ XIX đến kỷ nguyên số.
          Nhấn vào từng mốc để đọc thêm.
        </p>
      </div>

      <div className="relative z-10 space-y-8 md:space-y-12">
        {timelineData.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} isLeft={i % 2 === 0} />
        ))}
      </div>
    </SectionWrapper>
  );
}
