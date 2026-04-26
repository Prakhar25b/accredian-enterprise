"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Solutions", href: "#features", hasDropdown: true },
  { label: "Programs", href: "#programs" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Partners", href: "#partners" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className={`font-display font-bold text-xl ${scrolled ? "text-gray-900" : "text-white"}`}>
            Accredian<span className="text-blue-400 ml-1 text-sm font-semibold">Enterprise</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-400 ${scrolled ? "text-gray-700" : "text-gray-200"}`}
            >
              {link.label}
              {link.hasDropdown && <ChevronDown size={14} />}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#lead-form" className="text-sm font-medium px-4 py-2 rounded-lg border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all">
            Contact Sales
          </a>
          <a href="#lead-form" className="text-sm font-medium px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all">
            Get Started
          </a>
        </div>

        <button className={`md:hidden ${scrolled ? "text-gray-800" : "text-white"}`} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
              <a href="#lead-form" className="text-center py-2 px-4 border border-blue-600 text-blue-600 rounded-lg font-medium">Contact Sales</a>
              <a href="#lead-form" className="text-center py-2 px-4 bg-blue-600 text-white rounded-lg font-medium">Get Started</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
