import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ServiceAreas } from '../components/ServiceAreas';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';

export function Home() {
  // Home page shows all sections as previews
  // Each section can also be accessed as a separate page via navigation
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

