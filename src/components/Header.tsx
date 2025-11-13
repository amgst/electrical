import { Phone, Mail, MapPin, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:0412345678" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>0412 345 678</span>
              </a>
              <a href="mailto:info@electricalsydney.com.au" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@electricalsydney.com.au</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Servicing All Sydney Suburbs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white">⚡</span>
            </div>
            <div>
              <div className="text-blue-900">Everything Electrical</div>
              <div className="text-gray-600">Sydney</div>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-blue-900 transition-colors">Home</Link>
            <Link to="/services" className="hover:text-blue-900 transition-colors">Services</Link>
            <Link to="/about" className="hover:text-blue-900 transition-colors">About</Link>
            <Link to="/service-areas" className="hover:text-blue-900 transition-colors">Service Areas</Link>
            <Link to="/why-choose-us" className="hover:text-blue-900 transition-colors">Why Choose Us</Link>
            <Link to="/testimonials" className="hover:text-blue-900 transition-colors">Testimonials</Link>
            <Link to="/contact" className="hover:text-blue-900 transition-colors">Contact</Link>
            <Link to="/contact">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Get a Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-3">
            <Link to="/" className="py-2 hover:text-blue-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/services" className="py-2 hover:text-blue-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link to="/about" className="py-2 hover:text-blue-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/service-areas" className="py-2 hover:text-blue-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Service Areas</Link>
            <Link to="/why-choose-us" className="py-2 hover:text-blue-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Why Choose Us</Link>
            <Link to="/testimonials" className="py-2 hover:text-blue-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link>
            <Link to="/contact" className="py-2 hover:text-blue-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black w-full">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
