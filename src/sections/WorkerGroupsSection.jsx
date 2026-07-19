import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import FloatingTechIcons from '../components/FloatingTechIcons';
import WorkerGroupCard from '../components/WorkerGroupCard';
import WorkerGroupDetail from '../components/WorkerGroupDetail';
import { workerGroups } from '../data/index';

export default function WorkerGroupsSection() {
  const [activeId, setActiveId] = useState(workerGroups[0].id);
  const activeIndex = workerGroups.findIndex((g) => g.id === activeId);
  const activeGroup = workerGroups[activeIndex];

  return (
    <SectionWrapper id="worker-groups" dark>
      <FloatingTechIcons tone="dark" />

      <div className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-cn-gold text-[11px] uppercase tracking-[0.2em] font-medium mb-3">
            // Hồ sơ nhân lực · 08 nhóm ngành
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-cn-cream mb-3">
            Đội Ngũ Trí Thức Công Nghệ Cao
          </h2>
          <p className="text-cn-cream/55 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Tám nhóm công nhân tri thức đang dẫn dắt nền kinh tế số Việt Nam — từ kỹ sư AI đến chuyên
            gia an ninh mạng. Mở từng hồ sơ để xem vai trò, kỹ năng và mối liên hệ với tư tưởng giai
            cấp công nhân.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Roster — bên trái, giống gáy hồ sơ có các mục được đánh số */}
        <div className="lg:col-span-4 pl-3 border-l border-dashed border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {workerGroups.map((group, i) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <WorkerGroupCard
                  group={group}
                  index={i}
                  isActive={activeId === group.id}
                  onSelect={setActiveId}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dossier — bên phải */}
        <motion.div
          className="lg:col-span-8 overflow-y-auto max-h-[800px] pr-1"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <WorkerGroupDetail group={activeGroup} index={activeIndex} />
        </motion.div>
      </div>

      {/* Tổng kết số liệu — trình bày như dải chỉ số đọc từ thiết bị */}
      <motion.div
        className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {[
          { label: 'Nhóm công nhân tri thức', value: '08', unit: 'ngành chiến lược', color: '#C8102E' },
          { label: 'Tổng nhân lực công nghệ cao', value: '600.000+', unit: 'người · 2024', color: '#FFD700' },
          { label: 'Tăng trưởng trung bình', value: '+25%', unit: 'mỗi năm', color: '#0EA5A0' },
          { label: 'Mục tiêu kỹ sư bán dẫn', value: '50.000', unit: 'người · đến 2030', color: '#8B5CF6' },
        ].map((stat) => (
          <div key={stat.label} className="tech-card rounded-lg border border-white/8 bg-white/[0.03] p-4 text-center">
            <p className="font-mono text-2xl md:text-3xl font-bold mb-1" style={{ color: stat.color }}>
              {stat.value}
            </p>
            <p className="font-mono text-white/40 text-[10px] uppercase tracking-wide">{stat.unit}</p>
            <p className="text-cn-cream/30 text-xs mt-1.5 leading-tight">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
