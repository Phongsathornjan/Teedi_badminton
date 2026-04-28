import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 mt-auto bg-zinc-50 border-t border-zinc-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto border-t border-zinc-200 pt-8">
        <div>
          <span className="text-lg font-bold text-zinc-900 block mb-4 italic tracking-tighter">SmashPoint</span>
          <p className="text-sm font-medium tracking-wide text-zinc-500">
            © 2024 SmashPoint Badminton Club. Kinetic Precision.
          </p>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Legal</h4>
            <a href="#" className="text-sm font-medium tracking-wide text-zinc-500 hover:text-green-500 transition-colors opacity-80 hover:opacity-100">
              Privacy Policy
            </a>
            <a href="#" className="text-sm font-medium tracking-wide text-zinc-500 hover:text-green-500 transition-colors opacity-80 hover:opacity-100">
              Terms of Service
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Club</h4>
            <a href="#" className="text-sm font-medium tracking-wide text-zinc-500 hover:text-green-500 transition-colors opacity-80 hover:opacity-100">
              Location
            </a>
            <a href="#" className="text-sm font-medium tracking-wide text-zinc-500 hover:text-green-500 transition-colors opacity-80 hover:opacity-100">
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex md:justify-end gap-4 items-start">
          <div className="p-4 bg-white rounded-xl shadow-sm border border-zinc-100">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1">Support</span>
            <p className="text-sm font-black">+1 (800) SMASH-IT</p>
          </div>
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-lg bg-white border border-zinc-100 flex items-center justify-center hover:bg-green-50 transition-colors cursor-pointer group shadow-sm">
              <Mail size={18} className="text-zinc-400 group-hover:text-green-600" />
            </div>
            <div className="w-10 h-10 rounded-lg bg-white border border-zinc-100 flex items-center justify-center hover:bg-green-50 transition-colors cursor-pointer group shadow-sm">
              <MapPin size={18} className="text-zinc-400 group-hover:text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
