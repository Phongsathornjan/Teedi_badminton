import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Contact Info Column */}
        <div className="lg:w-1/3 flex flex-col gap-12">
          <div>
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Get in touch</span>
            <h1 className="text-6xl font-black tracking-tighter text-on-surface uppercase leading-none italic mb-8">Contact<br />The Club.</h1>
            <p className="text-on-surface-variant text-lg font-medium">Have questions about our facilities or tournament schedules? Our team of badminton enthusiasts is ready to help.</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-5 p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10 hover:bg-surface-container transition-colors group">
              <div className="p-3 bg-white rounded-xl shadow-sm text-primary group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Email Support</p>
                <p className="text-xl font-black text-on-surface italic">hq@smashpoint.club</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10 hover:bg-surface-container transition-colors group">
              <div className="p-3 bg-white rounded-xl shadow-sm text-primary group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Phone Line</p>
                <p className="text-xl font-black text-on-surface italic">+1 (800) SMASH-IT</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10 hover:bg-surface-container transition-colors group">
              <div className="p-3 bg-white rounded-xl shadow-sm text-primary group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Our Arena</p>
                <p className="text-xl font-black text-on-surface italic">44 Kinetic Way, San Jose, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-zinc-100 flex flex-col gap-12"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center text-primary">
                <MessageSquare size={24} />
              </div>
              <h2 className="text-3xl font-black italic tracking-tighter text-on-surface uppercase">Send a direct message</h2>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Your Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-6 py-4 bg-surface-container-low rounded-xl border border-transparent focus:border-primary-container focus:bg-white transition-all outline-none font-semibold text-on-surface"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full px-6 py-4 bg-surface-container-low rounded-xl border border-transparent focus:border-primary-container focus:bg-white transition-all outline-none font-semibold text-on-surface"
                />
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Inquiry Topic</label>
                <select className="w-full px-6 py-4 bg-surface-container-low rounded-xl border border-transparent focus:border-primary-container focus:bg-white transition-all outline-none font-semibold text-on-surface appearance-none">
                  <option>General Membership Inquiry</option>
                  <option>Court Booking Issues</option>
                  <option>Event/Tournament Hosting</option>
                  <option>Coaching Programs</option>
                  <option>Partnership Opportunities</option>
                </select>
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we assist your game?"
                  className="w-full px-6 py-4 bg-surface-container-low rounded-xl border border-transparent focus:border-primary-container focus:bg-white transition-all outline-none font-semibold text-on-surface resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="kinetic-gradient text-on-primary w-full py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/10 hover:shadow-2xl hover:translate-y-[-2px] transition-all active:scale-[0.98] flex items-center justify-center gap-3 uppercase italic tracking-tight"
                >
                  Initiate Transmission
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
