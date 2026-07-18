import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import CaseCard from '../components/CaseCard';
import { caseStudies } from '../data/index';

export default function CaseStudiesSection() {
  const scrollRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);

  const scrollByCard = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector(':scope > div');
    const amount = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };

  useEffect(() => {
    if (!activeItem) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveItem(null);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [activeItem]);

  return (
    <SectionWrapper id="case-study" dark>
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-cn-cream mb-3">
          Doanh nghiệp công nghệ Việt Nam
        </h2>
        <p className="text-cn-cream/60 max-w-2xl mx-auto text-sm md:text-base">
          Case study về các doanh nghiệp công nghệ tiêu biểu và sự vận dụng tư tưởng giai cấp công nhân
          trong phát triển nguồn nhân lực công nghệ cao.
        </p>
      </div>

      <div className="relative md:px-12">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Xem case study trước"
          className="hidden md:flex absolute left-[6px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-cn-cream/10 border border-cn-cream/20 text-cn-cream items-center justify-center hover:bg-cn-gold hover:text-cn-dark hover:border-cn-gold transition-colors"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          className="flex items-stretch overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide"
          ref={scrollRef}
        >
          {caseStudies.map((item, i) => (
            <CaseCard key={item.id} item={item} index={i} onOpen={setActiveItem} />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Xem case study tiếp theo"
          className="hidden md:flex absolute right-[6px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-cn-cream/10 border border-cn-cream/20 text-cn-cream items-center justify-center hover:bg-cn-gold hover:text-cn-dark hover:border-cn-gold transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="flex md:hidden justify-center gap-4 mt-2">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Xem case study trước"
          className="w-10 h-10 rounded-full bg-cn-cream/10 border border-cn-cream/20 text-cn-cream flex items-center justify-center active:bg-cn-gold active:text-cn-dark"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Xem case study tiếp theo"
          className="w-10 h-10 rounded-full bg-cn-cream/10 border border-cn-cream/20 text-cn-cream flex items-center justify-center active:bg-cn-gold active:text-cn-dark"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cn-dark/70 backdrop-blur-sm"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              role="dialog"
              aria-modal="true"
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-xl border border-cn-teal/15 shadow-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                aria-label="Đóng"
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cn-dark/5 hover:bg-cn-dark/10 flex items-center justify-center text-cn-dark/60 hover:text-cn-dark transition-colors"
              >
                <X size={16} />
              </button>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4 pr-8">
                  <div className="w-10 h-10 rounded-full bg-cn-teal/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-cn-teal-dark font-bold font-serif text-lg">{activeItem.name[0]}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif font-bold text-cn-red-dark">{activeItem.name}</h3>
                    <p className="text-xs text-cn-dark/50 tech-chip">{activeItem.stats}</p>
                  </div>
                </div>

                <p className="text-sm text-cn-dark/70 leading-relaxed mb-4">{activeItem.description}</p>

                <div className="p-4 rounded-lg bg-gradient-to-r from-cn-red/5 to-cn-gold/5 border border-cn-red/10">
                  <p className="text-xs font-semibold text-cn-red mb-2">Vận dụng tư tưởng GCCN:</p>
                  <p className="text-sm text-cn-dark/80 leading-relaxed">{activeItem.connection}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
