import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import CourtsListing from './pages/Courts';
import Bookings from './pages/Bookings';
import Contact from './pages/Contact';
import { useState, useEffect } from 'react';
import { BookingModal } from './pages/Courts';

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 0.99, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, scale: 1.01, filter: 'blur(10px)' }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function AppContent() {
  const [selectedCourt, setSelectedCourt] = useState<any>(null);
  const [showSuccessBooking, setShowSuccessBooking] = useState(false);

  // Auto-scroll to top on route change
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-background">
      <Header />
      <main className="flex-grow flex flex-col pt-0">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courts" element={<CourtsListing onBook={(court) => setSelectedCourt(court)} />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />

      {selectedCourt && (
        <BookingModal
          court={selectedCourt}
          onClose={() => setSelectedCourt(null)}
          onConfirm={() => {
            setSelectedCourt(null);
            setShowSuccessBooking(true);
            setTimeout(() => setShowSuccessBooking(false), 3000);
          }}
        />
      )}

      <AnimatePresence>
        {showSuccessBooking && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 right-10 z-[200] glass-panel border border-primary-container p-6 rounded-2xl shadow-2xl flex items-center gap-4"
          >
            <div className="w-10 h-10 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container font-black">
              ✓
            </div>
            <div>
              <p className="font-black text-on-surface uppercase italic text-sm">Booking Confirmed</p>
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">See you on the court!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
