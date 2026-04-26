import { Mail, Phone, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const links = {
  Platform: ["Features", "Programs", "Analytics Dashboard", "Mentorship", "Certifications"],
  Company: ["About Us", "Careers", "Blog", "Press Kit", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                Accredian<span className="text-blue-400 ml-1 text-sm font-semibold">Enterprise</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              India&apos;s most trusted enterprise learning platform. Empowering organizations to build future-ready teams through world-class education.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600 flex items-center justify-center transition-colors">
                  <Icon size={16} className="text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">© {new Date().getFullYear()} Accredian Enterprise. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs">
            <a href="mailto:enterprise@accredian.com" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Mail size={13} /> enterprise@accredian.com
            </a>
            <a href="tel:+919625811095" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Phone size={13} /> +91 96258 11095
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
