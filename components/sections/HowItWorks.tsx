const steps = [
  {
    num: "01",
    title: "Skill Gap Assessment",
    description: "Our consultants map your team's skill gaps, business goals, and organizational requirements through a structured discovery call.",
  },
  {
    num: "02",
    title: "Custom Program Design",
    description: "We co-create a tailored learning path with our university partners, aligned to your tech stack, industry, and team baseline.",
  },
  {
    num: "03",
    title: "Live Cohort Delivery",
    description: "Programs are delivered through live sessions, mentorship, and hands-on projects — supported by your dedicated success manager.",
  },
  {
    num: "04",
    title: "Track ROI in Real-Time",
    description: "Monitor completion, engagement, and productivity impact through your live enterprise dashboard with exportable reports.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How Accredian Enterprise Works
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            A proven 4-step process designed to deliver measurable learning outcomes from week one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-blue-200 z-0" />

          {steps.map((step) => (
            <div key={step.num} className="relative z-10 text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600 text-white font-display font-bold text-lg mb-5 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform mx-auto">
                {step.num}
              </div>
              <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
