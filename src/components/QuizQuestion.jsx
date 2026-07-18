import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

export default function QuizQuestion({ question, index, total, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (i) => {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    onAnswer(i === question.correct);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl border border-cn-red/10 shadow-sm p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-medium text-cn-red bg-cn-red/5 px-3 py-1 rounded-full">
          Câu {index + 1} / {total}
        </span>
      </div>
      <p className="font-serif font-bold text-cn-dark text-base md:text-lg mb-6">
        {question.question}
      </p>
      <div className="space-y-3">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all text-sm md:text-base ${
              answered
                ? i === question.correct
                  ? 'border-green-500 bg-green-50'
                  : i === selected
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-100 opacity-60'
                : 'border-gray-100 hover:border-cn-red/30 hover:bg-cn-red/5'
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className={answered && i === selected && i !== question.correct ? 'text-red-700' : ''}>
                {option}
              </span>
              {answered && i === question.correct && (
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
              )}
              {answered && i === selected && i !== question.correct && (
                <XCircle className="w-5 h-5 text-red-600 shrink-0" />
              )}
            </div>
          </button>
        ))}
      </div>
      <AnimatePresence>
        {answered && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-4 p-4 rounded-lg bg-cn-dark/5 border border-cn-dark/10 overflow-hidden"
          >
            <p className="text-xs font-semibold text-cn-dark mb-1">Giải thích:</p>
            <p className="text-sm text-cn-dark/70 leading-relaxed">{question.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
