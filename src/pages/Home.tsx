import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ServiceAreas } from '../components/ServiceAreas';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash links when navigating from other pages
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <ServiceAreas />
      <Testimonials />
      <Footer />
    </div>
  );
}

