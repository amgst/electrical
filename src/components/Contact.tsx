import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-blue-900 mb-2">CONTACT US</div>
          <h2 className="mb-4">Get In Touch Today</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to get started? Contact us for a free quote or to discuss your electrical needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2">Name *</label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2">Phone *</label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">Email *</label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2">Message *</label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your electrical needs"
                    />
                  </div>
                  <Button type="submit" className="bg-blue-900 hover:bg-blue-800 w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <Phone className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <div className="mb-1">Phone</div>
                    <a href="tel:0412345678" className="text-blue-900 hover:underline">
                      0412 345 678
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <Mail className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <div className="mb-1">Email</div>
                    <a href="mailto:info@electricalsydney.com.au" className="text-blue-900 hover:underline break-all">
                      info@electricalsydney.com.au
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <div className="mb-1">Service Area</div>
                    <p className="text-gray-600">All Sydney Suburbs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <div className="mb-1">Hours</div>
                    <p className="text-gray-600">24/7 Emergency Service</p>
                    <p className="text-gray-600">Mon-Fri: 7am - 6pm</p>
                    <p className="text-gray-600">Sat: 8am - 4pm</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-900 text-white">
              <CardContent className="pt-6 text-center">
                <div className="text-yellow-400 mb-2">Emergency Service</div>
                <h3 className="mb-4">Need Urgent Help?</h3>
                <p className="mb-4">We're available 24/7 for electrical emergencies</p>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black w-full">
                  <Phone className="mr-2 w-4 h-4" />
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
