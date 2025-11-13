import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ContactPage } from './pages/Contact';
import { ServicesPage } from './pages/Services';
import { AboutPage } from './pages/About';
import { WhyChooseUsPage } from './pages/WhyChooseUs';
import { ServiceAreasPage } from './pages/ServiceAreas';
import { TestimonialsPage } from './pages/Testimonials';

export default function App() {
  console.log("App component: Rendering with HashRouter");
  
  // Using HashRouter for GitHub Pages compatibility
  // HashRouter works better with GitHub Pages subdirectories
  // Routes will be: /#/, /#/contact, /#/services, etc.
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
        <Route path="/service-areas" element={<ServiceAreasPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
      </Routes>
    </HashRouter>
  );
}
