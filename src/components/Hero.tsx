import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Phone, CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-yellow-400 mb-4">Licensed & Certified Electricians</h1>
            <h2 className="mb-6">Professional Electrical Services Across Sydney</h2>
            <p className="mb-8 text-blue-100">
              Your trusted local electricians providing safe, reliable, and affordable electrical solutions for residential and commercial properties.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Phone className="mr-2 w-4 h-4" />
                Call Now: 0412 345 678
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span>Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span>Fixed Price Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span>100% Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1660330589693-99889d60181e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MXx8fHwxNzYyOTgwMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional electrician at work"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
