'use client';

import contactData from "@/data/contact.json";
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const socialIcons: Record<string, React.ReactNode> = {
  facebook: <FaFacebook size={20} />,
  instagram: <FaInstagram size={20} />,
  youtube: <FaYoutube size={20} />
};

const socialColors: Record<string, string> = {
  facebook: 'hover:text-[#1877f2]',
  instagram: 'hover:text-[#dc2743]',
  youtube: 'hover:text-[#ff0000]'
};

export default function Footer() {
  const activeSocials = contactData.socialMedia.filter(s => s.status === 'active' || s.url);
  const comingSoon = contactData.socialMedia.filter(s => s.status === 'coming_soon');

  return (
    <footer className="relative bg-gradient-to-b from-[#0f172a] to-[#051324] px-6 py-16 text-slate-200 md:px-12">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#7c3aed] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#f97316] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <p className="text-sm uppercase tracking-[0.4em] font-bold bg-gradient-to-r from-[#fbbf24] to-[#f97316] bg-clip-text text-transparent mb-3">
              Reshma Foundation
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Empowering communities through service, compassion, and inclusive action.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Contact</h3>
            <div className="space-y-3">
              <a 
                href={`tel:${contactData.phone}`}
                className="flex items-center gap-3 text-slate-300 hover:text-[#f97316] transition-colors duration-300 group"
              >
                <FaPhone size={16} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">{contactData.phone}</span>
              </a>
              <a 
                href={`mailto:${contactData.email}`}
                className="flex items-center gap-3 text-slate-300 hover:text-[#f97316] transition-colors duration-300 group"
              >
                <FaEnvelope size={16} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm break-all">{contactData.email}</span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Location</h3>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt size={16} className="mt-1 text-[#f97316] flex-shrink-0" />
              <div className="text-sm text-slate-300 leading-relaxed">
                <p>{contactData.address.line1}</p>
                <p>{contactData.address.line2}</p>
                <p>{contactData.address.line3}</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Follow Us</h3>
            <div className="flex gap-3">
              {contactData.socialMedia.map((social) => (
                <a
                  key={social.icon}
                  href={social.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-slate-300 transition-all duration-300 group ${
                    social.status === 'coming_soon' 
                      ? 'opacity-50 cursor-not-allowed' 
                      : `${socialColors[social.icon]} hover:bg-opacity-20 hover:scale-110`
                  }`}
                  title={social.status === 'coming_soon' ? `${social.name} - Coming Soon` : social.name}
                >
                  {socialIcons[social.icon]}
                </a>
              ))}
            </div>
            {comingSoon.length > 0 && (
              <p className="text-xs text-slate-500">
                {comingSoon.map(s => s.name).join(', ')} coming soon
              </p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} Reshma Foundation. All rights reserved.</p>
            <p className="text-xs text-slate-600">Empowering communities across Tamil Nadu</p>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-end">
            <span className="text-xs text-slate-500">Crafted by</span>
            <span className="text-sm font-medium text-slate-200">NexaReign</span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <a href="tel:9003213872" className="text-xs text-slate-500 hover:text-[#f97316]">Contact: 9003213872</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
