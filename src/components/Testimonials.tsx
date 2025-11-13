import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    name: 'Sarah Thompson',
    location: 'Bondi',
    rating: 5,
    text: 'Excellent service! They arrived on time, fixed our electrical issues quickly, and cleaned up after themselves. Very professional and reasonably priced.',
  },
  {
    name: 'Michael Chen',
    location: 'Parramatta',
    rating: 5,
    text: 'I called them for an emergency repair late at night. They came out within an hour and resolved the issue. Couldn\'t recommend them more highly!',
  },
  {
    name: 'Emma Williams',
    location: 'North Sydney',
    rating: 5,
    text: 'We hired them for a complete house rewiring. The team was fantastic - professional, tidy, and the work was completed on schedule. Great experience overall.',
  },
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-blue-900 mb-2">TESTIMONIALS</div>
          <h2 className="mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our electrical services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div>{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
