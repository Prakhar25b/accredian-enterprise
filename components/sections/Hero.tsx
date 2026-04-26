"use client";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

const highlights = [
  "IIT & IIM certified programs",
  "500+ enterprise clients",
  "94% completion rate",
];

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-indigo-600 opacity-10 rounded-full blur-3xl" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative">
        {/* Left */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            India&apos;s Most Trusted Enterprise Learning Platform
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Upskill Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              Workforce
            </span>{" "}
            at Scale
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
            Partner with IITs, IIMs, and global universities to upskill your enterprise teams with curated programs, live mentorship, and real-time analytics that deliver measurable ROI.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                <CheckCircle size={16} className="text-blue-400 shrink-0" />
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-blue-900/40"
            >
              Request a Demo
              <ArrowRight size={18} />
            </a>
            <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/20 transition-all backdrop-blur-sm">
              <Play size={16} className="text-blue-300" />
              Watch Overview
            </button>
          </div>
        </div>

        {/* Right - Dashboard card */}
        <div className="animate-fade-up animate-delay-300 hidden lg:block">
          <div className="card-glass rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-semibold">Enterprise Dashboard</h3>
              <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">● Live</span>
            </div>

            {/* Metric cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Learners", val: "12,430", delta: "+18%" },
                { label: "Completion", val: "94%", delta: "+6%" },
                { label: "ROI Avg.", val: "3.2×", delta: "+0.4×" },
              ].map((m) => (
                <div key={m.label} className="bg-white/5 rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-white">{m.val}</div>
                  <div className="text-xs text-gray-400">{m.label}</div>
                  <div className="text-xs text-green-400 mt-1">{m.delta}</div>
                </div>
              ))}
            </div>

            {/* Progress bars */}
            <div className="space-y-3">
              {[
                { label: "Data Science & AI", pct: 87 },
                { label: "Product Management", pct: 72 },
                { label: "Leadership & Strategy", pct: 65 },
              ].map((p) => (
                <div key={p.label}>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>{p.label}</span>
                    <span>{p.pct}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: `${p.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-2 text-xs text-gray-400 border-t border-white/10">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Updated 2 minutes ago
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
