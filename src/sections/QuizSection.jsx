import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import QuizQuestion from '../components/QuizQuestion';
import { quizData } from '../data/index';
import { CheckCircle, Star, RefreshCw } from 'lucide-react';

export default function QuizSection() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = useCallback((correct) => {
    setAnswers((prev) => [...prev, correct]);
    if (correct) setScore((s) => s + 1);
    setTimeout(() => {
      if (current < quizData.length - 1) {
        setCurrent((c) => c + 1);
      } else {
        setFinished(true);
      }
    }, 1500);
  }, [current]);

  const reset = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setAnswers([]);
  };

  const getResultMessage = () => {
    const pct = score / quizData.length;
    if (pct >= 0.9) return { text: 'Xuất sắc! Bạn hiểu sâu sắc sứ mệnh lịch sử!', emoji: '🏆' };
    if (pct >= 0.7) return { text: 'Giỏi! Bạn nắm vững kiến thức về giai cấp công nhân!', emoji: '🌟' };
    if (pct >= 0.5) return { text: 'Khá tốt! Hãy ôn lại lý luận để hiểu thêm!', emoji: '📚' };
    return { text: 'Hãy đọc lại các phần lý luận phía trên để củng cố kiến thức!', emoji: '💪' };
  };

  return (
    <SectionWrapper id="quiz" className="bg-gradient-to-b from-cn-cream to-cn-cream-dark/30">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-cn-red-dark mb-3">
          Kiểm tra kiến thức
        </h2>
        <p className="text-cn-dark/60 max-w-2xl mx-auto text-sm md:text-base">
          Trắc nghiệm về giai cấp công nhân và chủ nghĩa xã hội khoa học trong bối cảnh công nghệ.
        </p>
      </div>

      {!finished && (
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex gap-1.5 mb-6 justify-center">
            {quizData.map((_, i) => (
              <div
                key={i}
                className={`w-8 h-1.5 rounded-full transition-all duration-300 ${
                  i < current ? 'bg-green-500' : i === current ? 'bg-cn-red w-10' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <AnimatePresence mode="wait">
            <QuizQuestion
              key={current}
              question={quizData[current]}
              index={current}
              total={quizData.length}
              onAnswer={handleAnswer}
            />
          </AnimatePresence>
        </div>
      )}

      <AnimatePresence>
        {finished && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto text-center"
          >
            <div className="bg-white rounded-2xl border border-cn-red/10 shadow-lg p-8 md:p-10">
              <div className="text-5xl mb-4">{getResultMessage().emoji}</div>
              <div className="font-serif text-5xl font-bold text-cn-red mb-2">
                {score}/{quizData.length}
              </div>
              <p className="text-cn-dark/70 mb-6 text-sm">{getResultMessage().text}</p>
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cn-red text-white text-sm font-medium hover:bg-cn-red-dark transition-colors"
              >
                <RefreshCw className="w-4 h-4" /> Làm lại
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
