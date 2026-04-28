import { Link, useLocation } from 'react-router-dom';
import { Bell, User } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courts', path: '/courts' },
    { name: 'Contact', path: '/contact' },
    { name: 'My Bookings', path: '/bookings' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-black italic tracking-tighter text-zinc-900">
            SmashPoint
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors font-sans tracking-tight font-semibold relative pb-1 ${
                  location.pathname === link.path
                    ? 'text-green-600'
                    : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-zinc-100/50 rounded-lg transition-all scale-95 active:scale-90 text-zinc-500">
            <Bell size={20} />
          </button>
          <button className="p-2 hover:bg-zinc-100/50 rounded-lg transition-all scale-95 active:scale-90 text-zinc-500 flex items-center gap-2">
            <User size={20} />
            {location.pathname === '/bookings' && <span className="text-sm font-semibold hidden sm:inline text-zinc-900">Alex Chen</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
