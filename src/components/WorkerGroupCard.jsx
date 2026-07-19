import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export default function WorkerGroupCard({ group, isActive, onSelect, index = 0 }) {
  const IconComp = Icons[group.icon] || Icons.Cpu;
  const serial = `GCCN·${String(index + 1).padStart(2, '0')}`;

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(group.id)}
      whileHover={{ x: isActive ? 0 : 3 }}
      whileTap={{ scale: 0.98 }}
      aria-pressed={isActive}
      aria-label={`Mở hồ sơ nhóm ${group.label}`}
      className={`tech-card scan-line relative w-full text-left rounded-lg border pl-5 pr-4 py-3.5 overflow-hidden transition-colors duration-300 ${
        isActive
          ? 'border-white/15 bg-cn-dark'
          : 'border-white/8 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]'
      }`}
    >
      {/* Selector rail — slides between roster entries when the active file changes */}
      {isActive && (
        <motion.span
          layoutId="rosterRail"
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
          className="absolute left-0 top-0 bottom-0 w-[3px]"
          style={{ background: group.color }}
        />
      )}

      <div className="flex items-center justify-between mb-2">
        <span
          className="font-mono text-[10px] uppercase tracking-[0.15em] transition-colors"
          style={{ color: isActive ? group.color : 'rgba(255,255,255,0.3)' }}
        >
          {serial}
        </span>
        <span
          className={`w-1.5 h-1.5 rounded-full transition-colors ${isActive ? 'tech-blink' : ''}`}
          style={{ background: isActive ? group.color : 'rgba(255,255,255,0.15)' }}
          aria-hidden="true"
        />
      </div>

      <div className="flex items-start gap-3">
        <div
          className="w-9 h-9 flex-shrink-0 flex items-center justify-center rotate-45 rounded-[7px] border"
          style={{ backgroundColor: `${group.color}1a`, borderColor: `${group.color}55` }}
        >
          <IconComp className="w-4 h-4 -rotate-45" style={{ color: group.color }} strokeWidth={1.75} />
        </div>
        <div className="min-w-0 flex-1 pt-0.5">
          <h3
            className={`font-serif font-bold text-[15px] leading-tight transition-colors ${
              isActive ? 'text-white' : 'text-white/75'
            }`}
          >
            {group.label}
          </h3>
          <p
            className={`text-xs leading-snug mt-1 transition-colors ${
              isActive ? 'text-white/50' : 'text-white/35'
            }`}
          >
            {group.tagline}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 mt-3 pt-2.5 border-t border-white/[0.06]">
        <span className="font-mono text-[10px] text-white/35 truncate min-w-0">
          {group.marketSize} <span className="text-white/20">· {group.marketUnit}</span>
        </span>
        <span
          className="font-mono text-[10px] font-semibold flex-shrink-0 transition-colors"
          style={{ color: isActive ? group.color : 'rgba(255,255,255,0.3)' }}
        >
          {group.growth}
        </span>
      </div>
    </motion.button>
  );
}
