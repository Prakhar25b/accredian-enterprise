"use client";
import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

type FormState = { name: string; email: string; company: string; teamSize: string; message: string };
type Status = "idle" | "loading" | "success" | "error";

const teamSizes = ["1–50", "51–200", "201–500", "500–1000", "1000+"];

export default function LeadForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", teamSize: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");
      setStatus("success");
      setForm({ name: "", email: "", company: "", teamSize: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="lead-form" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Contact Sales
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Start Upskilling Your Team
          </h2>
          <p className="text-gray-500 text-lg">
            Tell us about your organization. Our enterprise team will reach out within 24 hours.
          </p>
        </div>

        {status === "success" ? (
          <div className="text-center py-16 bg-green-50 rounded-3xl border border-green-200">
            <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
            <p className="text-gray-600">Our enterprise team will reach out within 24 hours.</p>
            <button onClick={() => setStatus("idle")} className="mt-6 text-sm text-blue-600 hover:underline font-medium">
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl border border-gray-200 p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                <input
                  type="text" name="name" required value={form.name} onChange={handleChange}
                  placeholder="Priya Mehta"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Work Email *</label>
                <input
                  type="email" name="email" required value={form.email} onChange={handleChange}
                  placeholder="priya@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name *</label>
                <input
                  type="text" name="company" required value={form.company} onChange={handleChange}
                  placeholder="Acme Corp"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Team Size *</label>
                <select
                  name="teamSize" required value={form.teamSize} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                >
                  <option value="">Select team size</option>
                  {teamSizes.map((s) => (
                    <option key={s} value={s}>{s} employees</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Tell us about your needs</label>
              <textarea
                name="message" rows={4} value={form.message} onChange={handleChange}
                placeholder="What skills do you want to build? Any specific programs in mind?"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
              />
            </div>

            {status === "error" && (
              <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl border border-red-200">{error}</div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold rounded-xl transition-all text-sm"
            >
              {status === "loading" ? (
                <><Loader2 size={18} className="animate-spin" /> Submitting...</>
              ) : (
                <><Send size={18} /> Request Enterprise Demo</>
              )}
            </button>

            <p className="text-xs text-center text-gray-400">
              No spam. Your data is safe. We&apos;ll only use it to get in touch with you.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
