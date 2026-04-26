import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team's velocity improved by 40%. The ROI is undeniable.",
    name: "Priya Mehta",
    role: "Chief People Officer",
    company: "TechCorp India",
    initials: "PM",
    color: "bg-blue-600",
  },
  {
    quote: "The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers are now capable of leading ML projects independently.",
    name: "Rohit Sharma",
    role: "VP Engineering",
    company: "Fintech Startup",
    initials: "RS",
    color: "bg-violet-600",
  },
  {
    quote: "We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96% — unprecedented for us.",
    name: "Anita Rao",
    role: "Head of L&D",
    company: "Global Consulting Group",
    initials: "AR",
    color: "bg-green-600",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-900 to-indigo-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-blue-300 bg-blue-800/50 px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by L&D Leaders
          </h2>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Hear from the CHROs and L&D leaders who transformed their organizations with Accredian Enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card-glass rounded-2xl p-6 flex flex-col">
              <Quote size={28} className="text-blue-400 mb-4 shrink-0" />
              <p className="text-gray-200 text-sm leading-relaxed flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-blue-300 text-xs">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
