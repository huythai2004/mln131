import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Building2, Briefcase, UserRound, Quote } from 'lucide-react';

export default function WorkerGroupDetail({ group, index = 0 }) {
  if (!group) return null;
  const IconComp = Icons[group.icon] || Icons.Cpu;
  const fileId = `HS-${String(index + 1).padStart(2, '0')}/GCCN`;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={group.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Dossier header */}
        <div className="relative border border-white/10 rounded-lg overflow-hidden mb-4">
          <div className="h-1" style={{ background: group.color }} aria-hidden="true" />
          <div className="p-5 bg-white/[0.03]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">
                Hồ sơ · {fileId}
              </span>
              <span
                className="font-mono text-[10px] uppercase tracking-[0.15em] font-semibold"
                style={{ color: group.color }}
              >
                {group.growth}
              </span>
            </div>
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 flex-shrink-0 flex items-center justify-center rotate-45 rounded-lg border"
                style={{ backgroundColor: `${group.color}1a`, borderColor: `${group.color}55` }}
              >
                <IconComp className="w-6 h-6 -rotate-45" style={{ color: group.color }} strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <h3 className="font-serif font-bold text-xl text-white leading-tight">{group.label}</h3>
                <p className="font-mono text-xs text-white/35 mt-1">
                  {group.marketSize} {group.marketUnit}
                </p>
              </div>
            </div>
            <p className="text-sm text-white/65 leading-relaxed mt-4">{group.description}</p>
          </div>
        </div>

        {/* Datasheet fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div className="border border-white/8 rounded-lg p-4">
            <p className="tech-chip text-[10px] uppercase tracking-[0.15em] text-white/35 mb-3">
              <Briefcase className="w-3 h-3" /> Kỹ năng cốt lõi
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[11px] px-2 py-1 rounded border"
                  style={{ color: group.color, borderColor: `${group.color}40`, backgroundColor: `${group.color}14` }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-white/8 rounded-lg p-4">
            <p className="tech-chip text-[10px] uppercase tracking-[0.15em] text-white/35 mb-3">
              <Building2 className="w-3 h-3" /> Đơn vị tiêu biểu
            </p>
            <ul className="space-y-1.5">
              {group.companies.map((c) => (
                <li key={c} className="text-xs text-white/55 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: group.color }} />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Vị trí phổ biến */}
        <div className="border border-white/8 rounded-lg p-4 mb-3">
          <p className="tech-chip text-[10px] uppercase tracking-[0.15em] text-white/35 mb-3">
            <UserRound className="w-3 h-3" /> Vị trí phổ biến
          </p>
          <div className="flex flex-wrap gap-2">
            {group.roles.map((r) => (
              <span key={r} className="text-xs text-white/60 bg-white/[0.04] px-3 py-1 rounded border border-white/8">
                {r}
              </span>
            ))}
          </div>
        </div>

        {/* Liên hệ tư tưởng — trình bày như một trích dẫn đóng dấu */}
        <div
          className="relative border border-dashed rounded-lg p-4 mb-3"
          style={{ borderColor: `${group.color}50` }}
        >
          <div
            className="absolute -top-2.5 right-4 inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-sm rotate-[-3deg]"
            style={{ background: group.color, color: '#1A1210' }}
          >
            <Quote className="w-2.5 h-2.5" /> Trích dẫn
          </div>
          <p className="text-sm text-white/70 leading-relaxed pt-1">{group.connection}</p>
        </div>

        {/* Gương mặt tiêu biểu */}
        {group.representatives && group.representatives.length > 0 && (
          <div className="space-y-2">
            {group.representatives.map((rep, i) => (
              <div key={i} className="flex items-start gap-3 border border-white/8 rounded-lg p-3">
                <div
                  className="w-8 h-8 flex-shrink-0 flex items-center justify-center rotate-45 rounded-md"
                  style={{ backgroundColor: `${group.color}22` }}
                >
                  <span className="-rotate-45 text-xs font-bold" style={{ color: group.color }}>
                    {rep.name.charAt(0)}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white/90">{rep.name}</p>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-white/35">{rep.role}</p>
                  <p className="text-xs text-white/40 mt-0.5">{rep.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
