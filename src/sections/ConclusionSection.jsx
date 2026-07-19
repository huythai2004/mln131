import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ParallaxLayer from '../components/ParallaxLayer';
import DigitalRain from '../components/DigitalRain';
import { FileText, X } from 'lucide-react';

export default function ConclusionSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <SectionWrapper id="ket-luan" dark className="relative">
      <DigitalRain className="absolute inset-0 w-full h-full opacity-30" />
      <ParallaxLayer speed={0.5} className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cn-red/10 via-transparent to-transparent pointer-events-none" />
      <ParallaxLayer speed={0.3} className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cn-teal/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotateY: 0 }}
          whileInView={{ scale: 1 }}
          whileHover={{ rotateY: 180 }}
          viewport={{ once: true }}
          transition={{ rotateY: { duration: 0.7 } }}
          style={{ transformStyle: 'preserve-3d', perspective: 600 }}
          className="w-16 h-16 mx-auto mb-6 rounded-full bg-cn-gold/20 border-2 border-cn-gold/50 flex items-center justify-center"
        >
          <span className="text-2xl text-cn-gold">★</span>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg md:text-2xl font-serif italic text-cn-cream/90 leading-relaxed mb-8"
        >
          "Giai cấp công nhân Việt Nam thời đại mới — bao gồm đội ngũ trí thức công nghệ cao —
          tiếp tục là lực lượng nòng cốt hiện thực hóa mục tiêu công nghiệp hóa, hiện đại hóa,
          xây dựng chủ nghĩa xã hội."
        </motion.blockquote>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cn-gold text-cn-dark font-semibold text-sm hover:bg-cn-gold-dark transition-colors shadow-lg mb-16"
        >
          <FileText className="w-4 h-4" /> Tải tóm tắt
        </motion.button>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 pt-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-serif font-bold text-cn-gold text-sm mb-2">Môn học</h4>
            <p className="text-cn-cream/60 text-xs">Chủ nghĩa xã hội khoa học</p>
          </div>
          <div>
            <h4 className="font-serif font-bold text-cn-gold text-sm mb-2">Giảng viên hướng dẫn</h4>
            <p className="text-cn-cream/60 text-xs italic">[Kiều Văn Nam]</p>
          </div>
          <div>
            <h4 className="font-serif font-bold text-cn-gold text-sm mb-2">Nhóm sinh viên thực hiện</h4>
            <p className="text-cn-cream/60 text-xs italic">[MC1818-CCP-Group 4]</p>
          </div>
        </div>
        <div className="text-center mt-8 text-cn-cream/30 text-xs">
          © 2026 — Dự án học thuật môn Chủ nghĩa xã hội khoa học
        </div>
      </footer>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setModalOpen(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setModalOpen(false)} className="absolute top-4 right-4 text-cn-dark/40 hover:text-cn-dark transition-colors">
              <X className="w-5 h-5" />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cn-red/10 flex items-center justify-center">
                <FileText className="w-8 h-8 text-cn-red" />
              </div>
              <h3 className="font-serif font-bold text-cn-red-dark text-lg mb-2">Tóm tắt nội dung</h3>
              <p className="text-sm text-cn-dark/60 leading-relaxed mb-4">
                Website trình bày nội dung vận dụng tư tưởng về giai cấp công nhân vào phát triển
                nguồn nhân lực công nghệ cao ở Việt Nam — sản phẩm học thuật môn Chủ nghĩa xã hội khoa học.
              </p>
              <p className="text-xs text-cn-dark/40 italic">
                Tính năng xuất PDF sẽ được bổ sung trong phiên bản hoàn thiện.
              </p>
              <button
                onClick={() => setModalOpen(false)}
                className="mt-4 px-6 py-2 rounded-full bg-cn-red text-white text-sm font-medium hover:bg-cn-red-dark transition-colors"
              >
                Đóng
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </SectionWrapper>
  );
}
