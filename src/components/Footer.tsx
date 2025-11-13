import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                <span>⚡</span>
              </div>
              <div>
                <div>Everything Electrical</div>
                <div className="text-gray-400">Sydney</div>
              </div>
            </div>
            <p className="text-gray-400">
              Your trusted electrical partner for over 15 years. Licensed, insured, and dedicated to excellence.
            </p>
          </div>

          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#areas" className="hover:text-yellow-400 transition-colors">Service Areas</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Lighting Installation</li>
              <li>Electrical Repairs</li>
              <li>Switchboard Upgrades</li>
              <li>Safety Inspections</li>
              <li>Emergency Service</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:0412345678" className="hover:text-yellow-400 transition-colors">
                  0412 345 678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@electricalsydney.com.au" className="hover:text-yellow-400 transition-colors break-all">
                  info@electricalsydney.com.au
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Servicing All Sydney Suburbs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="mb-2">
            © {currentYear} Everything Electrical Sydney. All rights reserved.
          </p>
          <p>
            Licensed Electrician | ABN: 12 345 678 901 | License No: EC12345
          </p>
        </div>
      </div>
    </footer>
  );
}
