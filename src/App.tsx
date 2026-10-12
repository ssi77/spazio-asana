import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import VideoCourses from './components/VideoCourses';
import Features from './components/Features';
import Teachers from './components/Teachers';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScheduleModal from './components/ScheduleModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const scrollToCourses = () => {
    const el = document.getElementById('courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6F8] text-[#111827] flex flex-col selection:bg-[#D83153]/20 selection:text-[#D83153]">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenBooking={() => setBookingOpen(true)}
        onExploreCourses={scrollToCourses}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenBooking={() => setBookingOpen(true)}
          onExploreCourses={scrollToCourses}
        />
        <Stats />
        <VideoCourses />
        <Features />
        <Teachers />
        <Testimonials />
        <Pricing onOpenBooking={() => setBookingOpen(true)} />
        <FAQ />
        <CTA onOpenBooking={() => setBookingOpen(true)} />
      </main>

      {/* Interactive Booking & Schedule Modal */}
      <ScheduleModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}