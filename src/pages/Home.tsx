import { motion } from 'motion/react';
import { Bolt, CheckCircle, LayoutGrid, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 opacity-60">
          <img
            alt="Modern badminton court"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4CBv-KMLT-f1TpPv6dIo2ekKKWg5-gVKrmMK9RFBO5q030mBVKcWI4eJpk-6itCvzOhB4vxL5wUGWQNEUCXQOIULgJLdnPwhqctvTBlDJlz1SbSKEGC-oxcRZ3bxGehAnlizwnV8lWWBC0LC7q_MoaiJ4jQCifcaJ71UGqyOqHf0GC5Mh74OnG2-lWsYrMH6R_OyvrcZC2Mj8HlSy6YKxIvRyby3G7PemnSLaj35P-yWLAMmGhSCBxKpt3oVf1TP_fTspX0ZjwdvU"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900/40 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/20 text-primary-container glass-panel border border-primary-container/30">
              <Bolt size={14} className="fill-current" />
              <span className="text-xs font-bold tracking-widest uppercase">Elite Level Facilities</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter italic">
              SMASH YOUR<br />WAY TO<br /><span className="text-primary-container">THE TOP</span>
            </h1>
            <p className="text-zinc-300 text-lg max-w-md font-medium leading-relaxed">
              Experience badminton like never before. High-tension timber floors, professional-grade lighting, and an atmosphere built for champions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/courts"
                className="kinetic-gradient text-on-primary px-10 py-4 rounded font-bold text-lg tracking-tight scale-100 hover:scale-105 transition-transform active:scale-95 shadow-xl"
              >
                Book Now
              </Link>
              <button className="glass-panel text-zinc-900 px-10 py-4 rounded font-bold text-lg tracking-tight hover:bg-white transition-colors">
                Explore Courts
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facility Highlights (Bento Grid) */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-2">
              <span className="text-primary font-bold tracking-widest text-sm uppercase">Engineered for Performance</span>
              <h2 className="text-5xl font-black text-on-surface tracking-tighter uppercase">the arena</h2>
            </div>
            <p className="text-on-surface-variant max-w-sm text-right font-medium">
              Every detail of SmashPoint is meticulously designed to support your athletic journey, from the floor tension to the shuttlecock humidity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {/* Large Card: 10 Premium Courts */}
            <div className="md:col-span-8 relative rounded-xl overflow-hidden bg-surface-container group">
              <img
                alt="Badminton court perspective"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF9Alr8elxwEPtrj54aucgUoQ73vxK809M1dlM9KbyyqjBOXLlm7Tfz2gRtm8iBcbV62qvxv1H4lIZP4jLojTGX4JHAg2qOojEAdRnJOqSi5rxrMqUNk_keq5QD-cvDPBu8e2u6di0EgvC6WWCnRXYXa00B4PSKsxqTaSfyUqikVUvxto8_hDejZwZRVoqVkXDl05MGj57ODlSAtUs1vZfKzAqnOtTDX0qmgPkybFOgJ92A_qqWMmDIKsxyNnQb2JyO39gSM4Y2nK4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-black text-white mb-2 italic uppercase">10 Premium Courts</h3>
                <p className="text-zinc-300 max-w-sm font-medium">BWF standard competition courts with shock-absorbing sub-flooring to protect your joints.</p>
              </div>
              <div className="absolute top-6 right-6 glass-panel p-4 rounded-xl text-on-surface flex items-center gap-2">
                <CheckCircle className="text-primary" size={20} />
                <span className="font-bold text-sm">BWF Approved</span>
              </div>
            </div>

            {/* Small Card: Coaching */}
            <div className="md:col-span-4 bg-primary-container rounded-xl p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10">
                <LayoutGrid size={40} className="mb-4 text-on-primary-container" />
                <h3 className="text-3xl font-black text-on-primary-container leading-none tracking-tight mb-4 italic uppercase">Pro Coaching</h3>
                <p className="text-on-primary-container/80 font-semibold">One-on-one sessions with former national athletes to refine your kinetic chain.</p>
              </div>
              <div className="relative z-10 pt-8">
                <a href="#" className="inline-flex items-center gap-2 font-black text-on-primary-container border-b-2 border-on-primary-container pb-1 uppercase text-sm">
                  meet the coaches
                  <ArrowRight size={14} />
                </a>
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-on-primary-container/10 rounded-full blur-3xl group-hover:bg-on-primary-container/20 transition-colors"></div>
            </div>

            {/* Row 2: Equipment Rental */}
            <div className="md:col-span-4 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between hover:bg-surface-container transition-colors border border-transparent hover:border-outline-variant/20">
              <div>
                <ShoppingBag size={40} className="mb-4 text-primary" />
                <h3 className="text-2xl font-black text-on-surface tracking-tight mb-2 italic uppercase">Equipment Rental</h3>
                <p className="text-on-surface-variant text-sm font-medium">Top-tier Yonex rackets and high-visibility shuttlecocks available at the pro-shop.</p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-2 h-2 rounded-full bg-green-500"
                  />
                </div>
                <span className="text-xs font-bold tracking-widest text-on-surface uppercase">Ready to Play</span>
              </div>
            </div>

            {/* Row 2: Precision Environment */}
            <div className="md:col-span-8 bg-zinc-900 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 group overflow-hidden">
              <div className="flex-1">
                <h3 className="text-3xl font-black text-white mb-4 italic tracking-tighter uppercase">Precision Environment</h3>
                <p className="text-zinc-400 font-medium leading-relaxed">Anti-glare LED matrices positioned at 12 meters height and climate control optimized for birdie flight stability.</p>
              </div>
              <div className="w-full md:w-1/3 h-full rounded-lg overflow-hidden grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                <img
                  alt="Gym lighting"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo28EFvCbM3SODS3KSgNWBwUPC5yaPufBc5JqHgWf8OqUj5kWfehAIuAtD9CsJjn0TaSofyPtS6KsspZW8mfhSo0xZRb8c5FphgsZ2lKd891iivE1FZ_ozJ50mcbFz7ypOBVvtUHiMm3N65TFABRTpgJ6wiFa3mCnlRE_PMNd9YuevlFOgR0bci9kbDupClW2k-erB3xuCoAS0cS7CjkCjwbG1czlWt3ZJBcq9fiq_JzqF5iUdS9qL78FAFlptdli_TO2X0lAp70H5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface-container-low overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden select-none">
          <span className="text-[20rem] font-black italic absolute -bottom-20 -left-20 text-on-surface whitespace-nowrap uppercase">
            SMASHPOINT
          </span>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-black text-on-surface tracking-tighter leading-none mb-6">READY TO CLAIM<br />THE COURT?</h2>
            <p className="text-on-surface-variant text-xl font-medium mb-8">Join the community of precision athletes. Book your slot in seconds with our real-time availability engine.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courts" className="kinetic-gradient text-on-primary px-12 py-5 rounded-full font-bold text-lg tracking-tight shadow-xl hover:shadow-2xl transition-all text-center">
                Check Availability
              </Link>
              <button className="bg-surface-container-lowest text-on-surface px-12 py-5 rounded-full font-bold text-lg tracking-tight hover:bg-white border border-outline-variant/30">
                Download App
              </button>
            </div>
          </div>
          <div className="hidden lg:block w-72 h-72 rounded-full kinetic-gradient relative p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-8 overflow-hidden grayscale contrast-125">
              <img
                alt="Shuttlecock"
                className="w-full h-full object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9tjrAO0ukhEr5wsmDZm9a7NlBDkXPlDwxqXZJ-V8ca_NyPdOfaKrt1WbIQJ3wnOg5rXN6dg6SAh1aI_SFO5LnJgfsywQUP8XfZciimCh_QMRr0RHhwEAGBaubqaPjn5BeJWGuY2uvKSAjDTQ6O8ppLOSqG6_fW0wu1I2mWGv3_BM1A-r21HX-hWv6KE7Sv_danbkcUrnLJaq9Pqn25-fQ_eqljQowLT_BXcTnBVTDFnCDuqIR3LU9tu94W9xV5S_HCDDZ9sJjJ7PN"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute -top-4 -right-4 bg-zinc-900 text-white p-4 rounded-xl shadow-lg"
            >
              <p className="text-xs font-bold tracking-widest uppercase">Next Match</p>
              <p className="text-xl font-black italic">IN 15 MIN</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
