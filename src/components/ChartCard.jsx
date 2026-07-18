import { useRef } from 'react';
import { useInView } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, Legend
} from 'recharts';
import TiltCard from './TiltCard';

export default function ChartCard({ chart }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const renderChart = () => {
    switch (chart.type) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={chart.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" fontSize={11} tick={{ fill: '#6b7280' }} />
              <YAxis fontSize={11} tick={{ fill: '#6b7280' }} />
              <Tooltip
                contentStyle={{ borderRadius: 8, border: `1px solid ${chart.color}` }}
                formatter={(v) => [`${v}${chart.suffix}`, chart.title]}
              />
              <Bar dataKey="value" fill={chart.color} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={chart.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" fontSize={11} tick={{ fill: '#6b7280' }} />
              <YAxis fontSize={11} tick={{ fill: '#6b7280' }} />
              <Tooltip
                contentStyle={{ borderRadius: 8, border: `1px solid ${chart.color}` }}
                formatter={(v) => [`${v}${chart.suffix}`, chart.title]}
              />
              <Line type="monotone" dataKey="value" stroke={chart.color} strokeWidth={3} dot={{ fill: chart.color, r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={chart.data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={3}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {chart.data.map((entry, i) => (
                  <Cell key={i} fill={['#C8102E', '#0EA5A0', '#FFD700', '#7A0C1E'][i]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip
                contentStyle={{ borderRadius: 8, border: `1px solid ${chart.color}` }}
                formatter={(v) => [`${v}%`, chart.title]}
              />
            </PieChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={ref}
      className={`tech-card tech-glow p-6 rounded-xl bg-white border border-cn-teal/15 shadow-sm transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="tech-bar rounded-t-xl" aria-hidden="true" />
      <TiltCard maxTilt={3} glare={false}>
        <p className="tech-chip text-cn-teal-dark text-[10px] uppercase mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cn-teal-light tech-blink" />
          data // {chart.id}
        </p>
        <h3 className="font-serif font-bold text-base md:text-lg text-cn-red-dark mb-1">{chart.title}</h3>
        <p className="text-xs text-cn-dark/60 mb-4">{chart.description}</p>
        {isInView && renderChart()}
      </TiltCard>
    </div>
  );
}
