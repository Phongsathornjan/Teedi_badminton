import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Users, CreditCard, X } from 'lucide-react';

interface Court {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
  status: 'available' | 'occupied' | 'maintenance';
}

const COURTS: Court[] = [
  { id: '01', name: 'Court 01', type: 'Premier Timber Floor', price: 15, status: 'available', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6IfauppXsHEKQ7hAdiaiP_-1Sr_8y8wqyomRvg9ZCUWKbR3AEvNuD2jbtnXogGM82aDWCVNlVmoIq65lelJxAdgkrKDTe9GdlUwguRbhI8NHx5I2-yBXzyHOPZE32l3sYeFzRhGxOKqk6CWZmCEwjbOQtj4hv4BpIWX9JfsdxqVaaqwIozrjjCBAWCHXbSEfVipfV7BiN3updnV-CCCkH0jJr9Fd8aTlnsxglAGpfiEfER5JxAB2aLduIeHPCWY-evtcYX_h1uTIJ' },
  { id: '02', name: 'Court 02', type: 'Synthetic Performance', price: 12, status: 'occupied', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAI4iHiHd-UVMJyQdSWu8fmXYAieilnn8hei69w-1RZdJ8be9hGPFk1ki2XBDjxDttHYMhHKjqtCS-lnJvA-_IFn5S7ezno_SjhtETNPc1Urz52kpcmvr2z9XhkTczMSTqag-MzjlNnad0aVbJaw2uvj29RH_FMMO0fQpYR--zW91tnbbH4GP8-AvEczrq6aeQIT7ZZ1TFtBu4fTityOYqAFSch1g2h-w1f7DA3nKp9lL17rR4ZCZSCI8qkmQvkd1K1sy7pErfDby6z' },
  { id: '03', name: 'Court 03', type: 'Olympic Grade Timber', price: 15, status: 'available', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJV6BCtuFSTnq39gUrP_1PLqjqJ9G0OqNFADfxCTF6aueozCNi-zQ2xggncGcUX6gOa8J6q_gsYDgVPJX-bfNnVT6gr2rVzljcE6xzhjaRKzI42l8mkcybGCY--zdbvTy7xG4turlgqebqfISFEzkPJG1bxX0-R9XNeR_lke1hTwqKcIdk8kw9CxsGLTZs4DOYkUaMnx-zVCHqykYQJ485PELz0hKYPC43J6tNeywlrlznksckOIxZE6ks-IKrUl_g2vOrf2vRxFAa' },
  { id: '04', name: 'Court 04', type: 'Synthetic Performance', price: 12, status: 'maintenance', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBmfnKpO6OsnL2Nov4VBSRZGKCcZ-Le7yV6s50FNirwln9o4-i908guy-HXykvdPadJruaBsAN_TL1_SytMYKPYMNYYxqIFg760QyRZmEpc9AT4p4R2h1pCjlrGBIpepXnvUv1jUavIORJ58YUEwDDrdcZY_De5l9lJxyBlQwLrjIkBEFgz6NMFtcEvyfgnq-A1FXdxR9VLQ3dvB_YJ20z5RpEqqFPuQzk7PqGm6Xp_e7jIo_JAI6h6Z-yg2bF6VcY0SonLX-m6nwV' },
  { id: '05', name: 'Court 05', type: 'Synthetic Performance', price: 12, status: 'available', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfe3WHRtey-q4-Es7FjJk8-jdhdgqXEwjhMy6cM5N0wD6KcmhN8dQfERi8Dacu-vYujMfla5v3sy9BlTH5MJau-VxsuPyvqW7nwx0NTUK1IyKFZvSnWXqoKtS_oVkF7rpBMkE40NGEPRWOEyqa5Dtz5p1UAqTleP2VQ4Nuvmy2xoB6pC5vqLAyupdjVleSHHD3dRwtWnT8x9tyCj0DN1le97h0l7ds9PuSmvuakmzTG12Xr8GaSCvwCsJ8zzRSC0iPELkekGwc2dC8' },
  { id: '06', name: 'Court 06', type: 'Premier Timber Floor', price: 15, status: 'available', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5SQKTLOm54TQ0fmJdXL-_c4hJJxNxzfchaKBtlsu9mBpHlujoYbeOuFTuDaKuIBCsC5lWVJr4rW5lH8lHPrrfxy_t1JxxYZRKZeeDfUWxsm_D9krKPBqQGpOV2i1nCKVlK2Rj8xyyIxTMYaQIvOowRb327N1h4is-y8_ECN3wo5MuaWtsB70ubhSJOsJwwhcXxN9G_PvQMTHV1XgwaSMX26SzJlxAeR-lnEsVYqBL8dpQ5gFjKx_zwx_HDS5k4Ky2PsJHHXfjqs-1' },
  { id: '07', name: 'Court 07', type: 'Synthetic Performance', price: 12, status: 'available', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzVM9XdJsxrLo6PpX69rSqLHPFVNRW1h3K6LqBHZPT6O8yie_qXk-8_NBGocHERIPj2zETY80IIWwskWvwkyikghySRYCk4swN7GIhq-tVWORgZiV39VzlFEptMN7q1T_s7WJsxWPwsNp1klAAXNI-K0fpaatYypVrkQvhQ19RdrZhElINlRZN-hbfEVESlBM3O4B_swC2ZZ53cekNslL7gs77Fzqs-QNSS3kggMdyXN-91ATCoC3QOB1rCR9z0lmoKxnmBpaSfEM-' },
  { id: '08', name: 'Court 08', type: 'Olympic Grade Timber', price: 15, status: 'occupied', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnfDIHp9GR4FT8tUL5x1G8ROZnr3rCfTmBTVf6dF1hUCnBoWfgS6hQRN9pOlbbmxedekgossYMLPlmksd76N55bAHI16Hvmdec_-0W6FYgVvebmziDj-K1KNsNcH-tfFavXNKy85llOdHoZ8KTsr5iXXdstfwioyvxhmmg04L6PHh8orgO-ySQtFWQR1cI_qofFBfToYc_UcwP67OqIqE2M4ST3BGdouW_E5Z1O6aLKjkjisiIIa7k-DpRNjq4AWxRxSUnD6DyI0x8' },
  { id: '09', name: 'Court 09', type: 'Synthetic Performance', price: 12, status: 'available', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHirDf0kegXbPI-AOf75AibBiO1IokGDJdz7cO7kQAKs_uNE_JbdgXhO9huW5Wfq5jM30jl9zz6Nsu2aEckcZdB-v5-wkYZeuUAtuPNQlL5wvmd05loXK2eRncpzaWZf2FxmTTsBV_WgnrynYqV8hlsRHDxsL_0ZTKSHRgQVyi4StVSrDX_56n2GH-NJLCPtzRTyqv9E1xYUU4gLZSRFaszX5xkQCLMeZfvpmgaWJcDvXc9E2xu9A3VmR-CdSBdOqC78kQ6OoPpN6A' },
  { id: '10', name: 'Court 10', type: 'Premier Timber Floor', price: 15, status: 'available', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9BEyMuI_Uq_nJ_5CU8K0cLfssnrB89Ls2gPavxFpWwiIBvv9Nk4DBYulTPGAZKudgO0Ne91ntoG2b4WAM3v-nto2DzH-QvywW3MZ7cIyUK4ozg7LMLMkDB5CC0nHiaS_tpWjbqDKIO_r_S6RSVa3O5AjkAkMCqp6tavSnOEX2cHTmIuO5Ju_Qn2b55n4HFncDHdp2VMjDFvqnTfqTbtZewA5l36aVsjMBF2O09SETZDKQP5MKKkN1YshCqHHiioqp5lPr_-qjRj1y' }
];

export default function CourtsListing({ onBook }: { onBook: (court: Court) => void }) {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Editorial Header Section */}
      <section className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Real-time Availability</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-[0.9] uppercase italic">
            Select Your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-container">Battlefield.</span>
          </h1>
        </div>
        <div className="flex flex-col items-end gap-2">
          <p className="text-on-surface-variant font-medium text-right max-w-xs">High-performance courts maintained for Olympic-grade precision.</p>
          <div className="flex gap-2 mt-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full border border-outline-variant/10">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider">8 Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Filter Bar */}
      <section className="mb-12 sticky top-24 z-40">
        <div className="glass-panel p-4 rounded-xl shadow-sm border border-outline-variant/10 flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1 ml-1">Booking Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={16} />
              <input
                className="w-full pl-10 pr-4 py-2 bg-surface-container rounded-lg border-none focus:ring-2 focus:ring-primary/20 text-sm font-medium"
                type="date"
                defaultValue="2024-05-20"
              />
            </div>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1 ml-1">Preferred Time</label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={16} />
              <select className="w-full pl-10 pr-4 py-2 bg-surface-container rounded-lg border-none focus:ring-2 focus:ring-primary/20 text-sm font-medium appearance-none">
                <option>08:00 AM - 10:00 AM</option>
                <option>10:00 AM - 12:00 PM</option>
                <option selected>04:00 PM - 06:00 PM</option>
                <option>06:00 PM - 08:00 PM</option>
              </select>
            </div>
          </div>
          <div className="flex items-end gap-2">
            <button className="kinetic-gradient text-on-primary px-8 py-2 rounded-lg font-bold text-sm h-[42px] hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
              Update Results
            </button>
            <button className="bg-surface-container hover:bg-surface-container-high text-on-surface px-4 py-2 rounded-lg h-[42px] transition-all flex items-center justify-center">
              <Users size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Court Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {COURTS.map((court) => (
          <motion.div
            key={court.id}
            layoutId={`court-${court.id}`}
            className={`group bg-surface-container-low rounded-xl overflow-hidden transition-all ${
              court.status === 'available' ? 'hover:translate-y-[-4px]' : 'opacity-80 grayscale-[0.2]'
            }`}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                alt={court.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={court.image}
              />
              <div className="absolute top-3 right-3 glass-panel px-3 py-1 rounded-full border border-white/20">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${
                    court.status === 'available' ? 'bg-primary-container' : 
                    court.status === 'occupied' ? 'bg-error' : 'bg-outline'
                  }`}></span>
                  <span className="text-[10px] font-black uppercase tracking-tighter">
                    {court.status.charAt(0).toUpperCase() + court.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-black italic tracking-tighter leading-none mb-1 uppercase">{court.name}</h3>
                  <p className="text-xs font-medium text-on-surface-variant">{court.type}</p>
                </div>
                <span className={`text-lg font-bold ${court.status === 'available' ? 'text-primary' : 'text-outline'}`}>
                  ${court.price}<span className="text-xs text-on-surface-variant font-medium">/hr</span>
                </span>
              </div>
              <button
                disabled={court.status !== 'available'}
                onClick={() => onBook(court)}
                className={`w-full py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition-colors ${
                  court.status === 'available' 
                    ? 'bg-on-surface text-white hover:bg-primary' 
                    : 'bg-surface-container-highest text-outline cursor-not-allowed'
                }`}
              >
                {court.status === 'available' ? 'Book Now' : 
                 court.status === 'occupied' ? 'Waitlist Only' : 'Unavailable'}
              </button>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

export function BookingModal({ court, onClose, onConfirm }: { court: Court, onClose: () => void, onConfirm: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-on-surface/40 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-surface-container-lowest w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border-none"
      >
        <div className="relative h-40 bg-surface-container-highest">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgfmO4zdgTTmb873qZVAChhI9fAt-zIsaMxh40Znv_OUO_6yz7n0i0Uopi_utUoQ0RWXdo9-G32OlQWdx68NyiZDaKl0z89LRj0ptIbNMNcGgkOcRi5CgAvqJIBKPJF8Cwf9HZsYZzAcAcnerBfcCfzne5JBJqVY-vzW9VBTFeCOa8RxCZiCxvWasF_RDwjLsynnePPeMXfujNflgBCkeW15J6Hfz0u5A3QB0L7_dLzVYw3T5FMzw_XMQiVp1E-qH1rf1svepCe9op"
            alt="Confirmation banner"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-surface-container-lowest/80 backdrop-blur-md p-2 rounded-full text-on-surface active:scale-90 transition-transform"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-8">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-primary mb-2 block">Confirm Selection</span>
            <h2 className="text-3xl font-black italic leading-tight text-on-surface uppercase">{court.name} - {court.type}</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="p-4 bg-surface-container-low rounded-xl">
              <Calendar className="text-primary mb-2" size={18} />
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Date</p>
              <p className="text-sm font-bold text-on-surface">May 20, 2024</p>
            </div>
            <div className="p-4 bg-surface-container-low rounded-xl">
              <Clock className="text-primary mb-2" size={18} />
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Time Slot</p>
              <p className="text-sm font-bold text-on-surface">04:00 PM - 06:00 PM</p>
            </div>
            <div className="p-4 bg-surface-container-low rounded-xl">
              <Users className="text-primary mb-2" size={18} />
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Guest count</p>
              <p className="text-sm font-bold text-on-surface">4 Players Max</p>
            </div>
            <div className="p-4 bg-surface-container-low rounded-xl">
              <CreditCard className="text-primary mb-2" size={18} />
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Total Price</p>
              <p className="text-sm font-bold text-on-surface">${court.price * 2}.00 <span className="text-[10px] text-on-surface-variant font-normal">(${court.price}/hr)</span></p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={onConfirm}
              className="kinetic-gradient text-on-primary w-full py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-all"
            >
              Confirm Booking
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl font-bold text-on-surface-variant hover:bg-surface-container transition-colors active:scale-95 transition-transform"
            >
              Change Details
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
