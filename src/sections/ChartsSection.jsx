import SectionWrapper from '../components/SectionWrapper';
import ChartCard from '../components/ChartCard';
import CountUp from '../components/CountUp';
import { chartData } from '../data/index';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

function StatsRow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { end: 700, suffix: 'k+', label: 'Kỹ sư CNTT (2026)', accent: 'red' },
    { end: 25, suffix: '%', label: 'Tăng trưởng nhân lực bán dẫn/năm', accent: 'teal' },
    { end: 50, suffix: 'k', label: 'Mục tiêu kỹ sư bán dẫn 2030', accent: 'teal' },
    { end: 45, suffix: '%', label: 'Lao động CNTT có ĐH trở lên', accent: 'red' },
  ];

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`text-center p-4 md:p-6 rounded-xl bg-white border shadow-sm ${stat.accent === 'teal' ? 'border-cn-teal/15' : 'border-cn-red/10'
            }`}
        >
          <div
            className={`font-serif font-bold text-3xl md:text-4xl mb-1 ${stat.accent === 'teal' ? 'text-cn-teal-dark' : 'text-cn-red'
              }`}
          >
            {isInView && <CountUp end={stat.end} suffix={stat.suffix} />}
          </div>
          <p className="text-xs md:text-sm text-cn-dark/60">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export default function ChartsSection() {
  return (
    <SectionWrapper id="thuc-trang" className="bg-cn-cream-dark/30">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-cn-red-dark mb-3">
          Thực trạng nguồn nhân lực công nghệ cao Việt Nam
        </h2>
        <p className="text-cn-dark/60 max-w-2xl mx-auto text-sm md:text-base">
          Tổng quan về quy mô, tốc độ tăng trưởng và thách thức của thị trường nhân lực công nghệ.
        </p>
      </div>

      <StatsRow />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {chartData.map((chart) => (
          <ChartCard key={chart.id} chart={chart} />
        ))}
      </div>

      <p className="text-center text-xs text-cn-dark/40 mt-8 italic">
        * Số liệu minh họa, cần cập nhật từ nguồn chính thức (Tổng cục Thống kê, Bộ TT&TT) khi sử dụng thực tế.
      </p>
    </SectionWrapper>
  );
}
