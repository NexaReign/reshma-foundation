import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#fff7ed] text-slate-950">
      <Header />

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-1 w-16 rounded-full bg-[#7c3aed]" />
          <h1 className="text-4xl font-semibold text-slate-950">Contact Us</h1>
        </div>

        <div className="mb-12">
          <p className="text-lg leading-8 text-slate-700 max-w-3xl">
            Get in touch with Reshma Foundation. We're here to answer your questions, hear your feedback,
            and connect you with our community initiatives across Tamil Nadu.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-950 mb-2">Phone</h3>
                  <p className="text-slate-700">+91 98765 43210</p>
                  <p className="text-sm text-slate-600 mt-1">Available Monday to Saturday, 9 AM to 6 PM</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950 mb-2">Email</h3>
                  <p className="text-slate-700">info@reshmafoundation.org</p>
                  <p className="text-sm text-slate-600 mt-1">We respond within 24 hours</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950 mb-2">Address</h3>
                  <p className="text-slate-700">Keerathangalam, Pudukkottai</p>
                  <p className="text-slate-700">Tamil Nadu, India - 622502</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950 mb-6">Social Media</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-[#1877f2] flex items-center justify-center text-white">
                    <span className="text-lg">f</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-950">Facebook</p>
                    <p className="text-slate-700">fb.com/reshma.foundation</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-[#0077b5] flex items-center justify-center text-white">
                    <span className="text-lg">in</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-950">LinkedIn</p>
                    <p className="text-slate-700">linkedin.com/company/reshma-foundation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950 mb-6">Location</h2>
              <div className="aspect-[16/9] rounded-3xl bg-slate-100 flex items-center justify-center">
                <p className="text-slate-600 text-center">
                  Interactive Map<br/>
                  <span className="text-sm">Keerathangalam, Pudukkottai, Tamil Nadu</span>
                </p>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                Our foundation operates primarily in Tamil Nadu with active programs across multiple districts.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950 mb-6">Quick Feedback</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-950 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-[#7c3aed] focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-950 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-[#7c3aed] focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-950 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-[#7c3aed] focus:outline-none"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-950 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-[#7c3aed] focus:outline-none"
                    placeholder="Tell us about your inquiry or feedback..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-[#7c3aed] px-6 py-3 text-white font-semibold transition hover:bg-[#6d28d9]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950 mb-6">Visit Our Office</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-950 mb-3">Office Hours</h3>
              <div className="space-y-2 text-slate-700">
                <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                <p><span className="font-medium">Saturday:</span> 9:00 AM - 2:00 PM</p>
                <p><span className="font-medium">Sunday:</span> Closed</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-950 mb-3">What to Expect</h3>
              <div className="space-y-2 text-slate-700">
                <p>• Warm welcome and guidance</p>
                <p>• Detailed information about our programs</p>
                <p>• Opportunity to meet our team</p>
                <p>• Coffee/tea and refreshments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
