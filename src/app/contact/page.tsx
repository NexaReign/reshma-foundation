'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import contactData from "@/data/contact.json";
import { motion } from "framer-motion";

const socialIcons: Record<string, React.ReactNode> = {
  facebook: <FaFacebook size={24} />,
  instagram: <FaInstagram size={24} />,
  youtube: <FaYoutube size={24} />
};

const socialColors: Record<string, { bg: string; text: string }> = {
  facebook: { bg: 'bg-[#1877f2]', text: 'text-[#1877f2]' },
  instagram: { bg: 'bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743]', text: 'text-[#dc2743]' },
  youtube: { bg: 'bg-[#ff0000]', text: 'text-[#ff0000]' }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Contact() {
  const mapUrl = `https://www.google.com/maps?q=${contactData.location.latitude},${contactData.location.longitude}&z=15&output=embed`;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fff7ed] via-[#fef3c7] to-[#fff7ed] text-slate-950">
      <Header />

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        {/* Hero Section */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#f97316]" />
            <span className="mx-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Get In Touch</span>
            <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-[#f97316] to-[#7c3aed]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#7c3aed] via-[#f97316] to-[#7c3aed] bg-clip-text text-transparent mb-4">
            Connect With Us
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Reach out to Reshma Foundation. We're passionate about making a difference and eager to hear from you.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div 
          className="grid gap-6 md:grid-cols-3 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Phone Card */}
          <motion.div 
            variants={itemVariants}
            className="group relative rounded-[2.5rem] overflow-hidden bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/5 to-[#f97316]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#a855f7] text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaPhone size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-2">Phone</h3>
              <p className="text-slate-700 font-semibold text-lg mb-1">{contactData.phone}</p>
              <p className="text-sm text-slate-600">Call us during business hours</p>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div 
            variants={itemVariants}
            className="group relative rounded-[2.5rem] overflow-hidden bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/5 to-[#fb923c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f97316] to-[#fb923c] text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-2">Email</h3>
              <p className="text-slate-700 font-semibold text-sm mb-1 break-all">{contactData.email}</p>
              <p className="text-sm text-slate-600">We respond within 24 hours</p>
            </div>
          </motion.div>

          {/* Address Card */}
          <motion.div 
            variants={itemVariants}
            className="group relative rounded-[2.5rem] overflow-hidden bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#c084fc]/5 to-[#7c3aed]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c084fc] to-[#a855f7] text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-2">Address</h3>
              <p className="text-slate-700 text-sm font-semibold">{contactData.address.line1}</p>
              <p className="text-slate-600 text-sm">{contactData.address.line2}</p>
              <p className="text-slate-600 text-sm">{contactData.address.line3}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Location Map Section */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          className="mb-12 rounded-[2.5rem] overflow-hidden bg-white p-8 shadow-xl"
        >
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-slate-950 mb-2">Our Location</h2>
            <p className="text-slate-600">Visit us at our office in Chennai</p>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-lg">
            <iframe
              src={mapUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-[2rem]"
            />
          </div>
          <div className="mt-4 p-4 bg-gradient-to-r from-[#7c3aed]/10 to-[#f97316]/10 rounded-2xl">
            <p className="text-sm text-slate-700">
              <span className="font-semibold">Coordinates:</span> {contactData.location.coordinates}
            </p>
          </div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          className="mb-12 rounded-[2.5rem] overflow-hidden bg-white p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-slate-950 mb-8">Follow Us</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {contactData.socialMedia.map((social, index) => (
              <motion.div
                key={social.icon}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`group relative rounded-2xl p-6 transition-all duration-300 ${
                  social.status === 'coming_soon' 
                    ? 'bg-slate-100 opacity-60' 
                    : 'bg-slate-50 hover:shadow-xl'
                }`}
              >
                <a 
                  href={social.url || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={social.status === 'coming_soon' ? 'pointer-events-none' : ''}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${socialColors[social.icon]?.bg || 'bg-slate-300'} text-white w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      {socialIcons[social.icon]}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-950 mb-1">{social.name}</h3>
                      {social.status === 'coming_soon' ? (
                        <span className="inline-block px-3 py-1 bg-slate-300 text-slate-700 text-xs font-semibold rounded-full">
                          Coming Soon
                        </span>
                      ) : (
                        <p className="text-sm text-slate-600">{social.label || 'Visit our page'}</p>
                      )}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Office Hours Section */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          className="rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#7c3aed]/10 to-[#f97316]/10 p-8 shadow-lg border border-[#7c3aed]/20"
        >
          <h2 className="text-3xl font-bold text-slate-950 mb-8">Office Hours</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {contactData.officeHours.map((slot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6"
              >
                <p className="font-bold text-slate-950 mb-2">{slot.day}</p>
                <p className="text-slate-700 font-semibold">{slot.hours}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
