import { motion } from 'motion/react';
import { PlusCircle, Calendar, Users, TrendingUp, CreditCard, Star, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Bookings() {
  return (
    <div className="flex-grow pt-28 pb-12 px-6 max-w-7xl mx-auto w-full">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface mb-2 uppercase italic">My Bookings</h1>
          <p className="text-on-surface-variant max-w-lg">Manage your scheduled sessions and review your past performance on the court.</p>
        </div>
        <Link to="/courts" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-lg shadow-lg hover:brightness-110 transition-all scale-100 active:scale-95 group">
          Book a New Court
          <PlusCircle className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
        </Link>
      </div>

      {/* Dashboard Layout: Bento Style */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Active Bookings */}
        <div className="lg:col-span-8 space-y-8">
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
                Upcoming Sessions
                <span className="px-2 py-0.5 bg-primary-container/20 text-on-primary-container text-xs rounded-full">2 Reserved</span>
              </h2>
            </div>
            <div className="space-y-4">
              {/* Booking Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-zinc-100 transition-all hover:bg-white"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-48 h-40 md:h-auto relative overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBmfnKpO6OsnL2Nov4VBSRZGKCcZ-Le7yV6s50FNirwln9o4-i908guy-HXykvdPadJruaBsAN_TL1_SytMYKPYMNYYxqIFg760QyRZmEpc9AT4p4R2h1pCjlrGBIpepXnvUv1jUavIORJ58YUEwDDrdcZY_De5l9lJxyBlQwLrjIkBEFgz6NMFtcEvyfgnq-A1FXdxR9VLQ3dvB_YJ20z5RpEqqFPuQzk7PqGm6Xp_e7jIo_JAI6h6Z-yg2bF6VcY0SonLX-m6nwV"
                    />
                    <div className="absolute top-3 right-3 backdrop-blur-md bg-white/70 text-on-primary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Court 04</div>
                  </div>
                  <div className="flex-grow p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-primary font-bold text-sm tracking-widest uppercase mb-1">Tomorrow</p>
                        <h3 className="text-2xl font-black tracking-tight text-on-surface uppercase italic">Premium Hardwood Zone</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-black tracking-tighter text-on-surface">06:00 PM</p>
                        <p className="text-sm text-on-surface-variant font-medium">90 Minutes</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-surface-container">
                      <div className="flex gap-4">
                        <div className="flex items-center gap-1.5 text-on-surface-variant text-sm">
                          <Calendar size={14} />
                          Oct 24, 2024
                        </div>
                        <div className="flex items-center gap-1.5 text-on-surface-variant text-sm">
                          <Users size={14} />
                          4 Players
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 text-sm font-bold text-on-surface hover:bg-surface-container rounded-lg transition-colors">Reschedule</button>
                        <button className="px-4 py-2 text-sm font-bold text-error hover:bg-error-container/20 rounded-lg transition-colors">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Booking Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-zinc-100 transition-all hover:bg-white"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-48 h-40 md:h-auto relative overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgCnDFrA_bw0hxOIGs2OSluMRaWDIS5o8Jl5r0H2N5fi7XbQcLZZ3WVD_7gIPK67n_iqnOB84l-ImVUvx3QHtcAwNjkAD7z1TY7UL2Rqi-s9h38Vu_IbzNV9o0g0ZbgUDa_0yuOr5bm6Okt_6wqG7uhroY8V3x7vh28Oi95o7iRGvT1zWcggmk5p9cE9QEmDDRFUZDSiQ3hKPmAgs-iFiwn--9l21unz0PTwckVcFnb_GBAzHuZgZhpBIbfJpO6HvR10HboTOmn4WG"
                    />
                    <div className="absolute top-3 right-3 backdrop-blur-md bg-white/70 text-on-primary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Court 12</div>
                  </div>
                  <div className="flex-grow p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-on-surface-variant font-bold text-sm tracking-widest uppercase mb-1">Next Week</p>
                        <h3 className="text-2xl font-black tracking-tight text-on-surface uppercase italic">Olympic Synthetic Turf</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-black tracking-tighter text-on-surface">08:30 AM</p>
                        <p className="text-sm text-on-surface-variant font-medium">60 Minutes</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-surface-container">
                      <div className="flex gap-4">
                        <div className="flex items-center gap-1.5 text-on-surface-variant text-sm">
                          <Calendar size={14} />
                          Oct 28, 2024
                        </div>
                        <div className="flex items-center gap-1.5 text-on-surface-variant text-sm">
                          <Users size={14} />
                          2 Players
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 text-sm font-bold text-on-surface hover:bg-surface-container rounded-lg transition-colors">Reschedule</button>
                        <button className="px-4 py-2 text-sm font-bold text-error hover:bg-error-container/20 rounded-lg transition-colors">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tight text-on-surface mb-6 uppercase">Recent History</h2>
            <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm border border-zinc-100">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-on-surface-variant text-xs font-black uppercase tracking-widest border-b border-outline-variant/10">
                    <th className="px-6 py-4">Court & Date</th>
                    <th className="px-6 py-4">Duration</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  <tr className="hover:bg-surface-container transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-bold text-on-surface uppercase italic">Court 02 - Speed Mat</p>
                      <p className="text-sm text-on-surface-variant">Oct 15, 2024 • 07:00 PM</p>
                    </td>
                    <td className="px-6 py-4 text-on-surface font-medium">120 Min</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-zinc-200 text-zinc-700">Completed</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary font-bold text-sm hover:underline">Rebook</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-bold text-on-surface uppercase italic">Court 08 - Pro Timber</p>
                      <p className="text-sm text-on-surface-variant">Oct 12, 2024 • 05:00 PM</p>
                    </td>
                    <td className="px-6 py-4 text-on-surface font-medium">60 Min</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-zinc-200 text-zinc-700">Completed</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary font-bold text-sm hover:underline">Rebook</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Right Column: Sidebar Stats & Quick Links */}
        <div className="lg:col-span-4 space-y-8">
          {/* User Quick Stats Card */}
          <div className="bg-surface-container p-8 rounded-xl relative overflow-hidden shadow-sm border border-zinc-100">
            <div className="relative z-10">
              <h3 className="text-on-surface-variant font-bold text-xs tracking-widest uppercase mb-6">Performance Snapshot</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-4xl font-black tracking-tighter text-on-surface italic">12</p>
                    <p className="text-xs text-on-surface-variant font-semibold">Sessions this month</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-black text-sm flex items-center gap-1 justify-end">
                      <TrendingUp size={14} /> +20%
                    </p>
                    <p className="text-[10px] text-on-surface-variant uppercase">vs last month</p>
                  </div>
                </div>
                <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant/20">
                  <div>
                    <p className="text-xl font-black text-on-surface italic">18h</p>
                    <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tighter">On Court</p>
                  </div>
                  <div>
                    <p className="text-xl font-black text-on-surface italic">4.8</p>
                    <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tighter">Avg Rating</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
          </div>

          {/* Quick Actions / Filters */}
          <div className="space-y-4">
            <h3 className="text-on-surface font-bold px-1 uppercase tracking-wider text-sm">Manage Account</h3>
            <div className="grid grid-cols-1 gap-2">
              <button className="flex items-center gap-4 p-4 bg-surface-container-lowest hover:bg-white rounded-xl shadow-sm border border-zinc-100 transition-all group">
                <span className="p-2 bg-secondary-container text-on-secondary-container rounded-lg group-hover:scale-110 transition-transform">
                  <CreditCard size={20} />
                </span>
                <div className="text-left">
                  <p className="font-bold text-on-surface uppercase text-xs italic tracking-tight">Payment Methods</p>
                  <p className="text-[10px] text-on-surface-variant uppercase">Manage cards and billing</p>
                </div>
              </button>
              <button className="flex items-center gap-4 p-4 bg-surface-container-lowest hover:bg-white rounded-xl shadow-sm border border-zinc-100 transition-all group">
                <span className="p-2 bg-tertiary-container text-on-tertiary-container rounded-lg group-hover:scale-110 transition-transform">
                  <Star size={20} className="fill-current" />
                </span>
                <div className="text-left">
                  <p className="font-bold text-on-surface uppercase text-xs italic tracking-tight">Membership Status</p>
                  <p className="text-[10px] text-on-surface-variant uppercase">Gold Member • Elite Perks</p>
                </div>
              </button>
              <button className="flex items-center gap-4 p-4 bg-surface-container-lowest hover:bg-white rounded-xl shadow-sm border border-zinc-100 transition-all group">
                <span className="p-2 bg-surface-container-highest text-on-surface-variant rounded-lg group-hover:scale-110 transition-transform">
                  <HelpCircle size={20} />
                </span>
                <div className="text-left">
                  <p className="font-bold text-on-surface uppercase text-xs italic tracking-tight">Booking Help</p>
                  <p className="text-[10px] text-on-surface-variant uppercase">FAQs and support tickets</p>
                </div>
              </button>
            </div>
          </div>

          {/* Promotion Card */}
          <div className="bg-inverse-surface text-inverse-on-surface p-8 rounded-2xl relative overflow-hidden group shadow-xl">
            <div className="relative z-10">
              <p className="text-primary-container font-black text-xs uppercase tracking-[0.2em] mb-2 italic">Pro Tip</p>
              <h4 className="text-xl font-bold leading-tight mb-4 uppercase tracking-tight">Invite friends and save 15% on your next booking!</h4>
              <button className="text-sm font-black bg-primary-container text-on-primary-container px-4 py-2 rounded-lg hover:brightness-110 transition-all scale-100 active:scale-95 uppercase">
                Send Invites
              </button>
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 border-4 border-primary/20 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
