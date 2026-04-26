import {
  BarChart3, Users, GraduationCap, Brain,
  Globe, Shield, Zap, LayoutDashboard
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "University-Grade Curriculum",
    description: "Programs co-designed with IITs, IIMs, and global universities. Every course is rigorously structured for real-world applicability.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics Dashboard",
    description: "Track completion rates, engagement metrics, and ROI through a live command center built for L&D leaders.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Brain,
    title: "Live Expert Mentorship",
    description: "1:1 live sessions with industry practitioners. Over 500 mentors across AI/ML, Data Science, Product, and Leadership.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Users,
    title: "Cohort-Based Learning",
    description: "Structured cohorts foster collaboration, accountability, and peer learning — driving completion rates above 94%.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Zap,
    title: "Custom Program Design",
    description: "Tailor programs to your organization's skill gaps, industry context, and strategic goals. Full white-labeling available.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Globe,
    title: "Global Multi-Timezone Delivery",
    description: "Seamlessly upskill distributed teams across different timezones with async-first and live session flexibility.",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: Shield,
    title: "Accredited Certifications",
    description: "Earn recognizable certifications that boost employee retention and signal mastery to the market.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: LayoutDashboard,
    title: "AI-Powered Learning Paths",
    description: "Adaptive AI-driven paths that adjust to each learner's pace, baseline, and career trajectory.",
    color: "bg-indigo-50 text-indigo-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Platform Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything L&D Teams Need
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From curriculum design to analytics — Accredian Enterprise is the complete operating system for ambitious learning organizations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${f.color} mb-4`}>
                <f.icon size={20} />
              </div>
              <h3 className="font-display font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
