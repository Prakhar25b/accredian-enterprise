import { Users, BookOpen, TrendingUp, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Enterprise Clients", sublabel: "Across Fortune 500 & startups" },
  { icon: BookOpen, value: "12,000+", label: "Programs Completed", sublabel: "Monthly across all verticals" },
  { icon: TrendingUp, value: "40%", label: "Avg. Productivity Boost", sublabel: "Within 6 months of completion" },
  { icon: Award, value: "94%", label: "Completion Rate", sublabel: "Industry avg. is 58%" },
];

export default function Stats() {
  return (
    <section className="bg-gray-50 py-16 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className="stat-card bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-4 mx-auto">
                <s.icon size={22} className="text-blue-600" />
              </div>
              <div className="text-3xl font-display font-bold text-gray-900 mb-1">{s.value}</div>
              <div className="font-semibold text-gray-800 text-sm mb-0.5">{s.label}</div>
              <div className="text-xs text-gray-500">{s.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
