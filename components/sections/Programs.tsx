import { Clock, Users, Star, ArrowRight } from "lucide-react";

const programs = [
  {
    tag: "Most Popular",
    tagColor: "bg-blue-600 text-white",
    title: "Data Science & AI for Enterprise",
    partner: "IIT Guwahati",
    duration: "6 months",
    cohortSize: "25–50 learners",
    rating: "4.9",
    description: "From Python fundamentals to production ML systems. Designed for data analysts, engineers, and aspiring ML practitioners.",
    topics: ["Python & SQL", "Machine Learning", "Deep Learning", "MLOps"],
  },
  {
    tag: "Leadership Track",
    tagColor: "bg-violet-600 text-white",
    title: "Executive Program in Business Management",
    partner: "IIM Visakhapatnam",
    duration: "12 months",
    cohortSize: "15–30 learners",
    rating: "4.8",
    description: "Strategic management, leadership frameworks, and business acumen for senior professionals and high-potential managers.",
    topics: ["Strategy", "Finance", "Marketing", "Operations"],
  },
  {
    tag: "Tech Track",
    tagColor: "bg-green-600 text-white",
    title: "Product Management for Tech Teams",
    partner: "SP Jain School of Management",
    duration: "4 months",
    cohortSize: "20–40 learners",
    rating: "4.7",
    description: "Build, ship, and scale products. For engineers moving into PM, or PMs leveling up with structured frameworks.",
    topics: ["Product Strategy", "Roadmapping", "User Research", "Metrics"],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Programs
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            University-Certified Programs
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Co-designed with India&apos;s top institutions. Every program carries the credential of a top-tier university — no fluff, no self-certification.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div key={p.title} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${p.tagColor}`}>{p.tag}</span>
                  <div className="flex items-center gap-1 text-sm text-amber-500 font-semibold">
                    <Star size={14} fill="currentColor" />
                    {p.rating}
                  </div>
                </div>
                <p className="text-xs text-blue-600 font-semibold mb-1">{p.partner}</p>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{p.description}</p>

                <div className="flex gap-4 text-sm text-gray-500 mb-5">
                  <span className="flex items-center gap-1"><Clock size={14} /> {p.duration}</span>
                  <span className="flex items-center gap-1"><Users size={14} /> {p.cohortSize}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.topics.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md font-medium">{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-6 pt-0">
                <a href="#lead-form" className="flex items-center justify-center gap-2 w-full py-2.5 border border-blue-200 rounded-xl text-blue-600 text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all">
                  Get Custom Quote <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#lead-form" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
            View all programs <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
