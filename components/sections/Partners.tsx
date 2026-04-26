const partners = [
  "IIT Guwahati", "IIT Roorkee", "IIM Visakhapatnam",
  "SP Jain", "XLRI", "BITS Pilani",
  "IIT Delhi", "IIM Lucknow", "Great Learning",
];

export default function Partners() {
  return (
    <section id="partners" className="py-16 bg-gray-50 border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-10">
        <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">
          Programs certified by India&apos;s most prestigious institutions
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={`${p}-${i}`}
              className="inline-flex items-center justify-center mx-6 px-8 py-4 bg-white border border-gray-200 rounded-xl shadow-sm text-gray-700 font-display font-semibold text-sm hover:border-blue-300 hover:text-blue-700 transition-colors cursor-default whitespace-nowrap"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
