import { MapPin } from 'lucide-react';

const areas = [
  'Sydney CBD',
  'North Sydney',
  'Eastern Suburbs',
  'Inner West',
  'Northern Beaches',
  'Lower North Shore',
  'Upper North Shore',
  'Canterbury-Bankstown',
  'Parramatta',
  'Blacktown',
  'Penrith',
  'Hills District',
  'Ryde',
  'Hornsby',
  'Sutherland Shire',
  'St George',
];

export function ServiceAreas() {
  return (
    <section id="areas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-blue-900 mb-2">SERVICE AREAS</div>
          <h2 className="mb-4">We Service All Sydney Suburbs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of electricians proudly serves residential and commercial clients across Greater Sydney. No matter where you are, we're here to help.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {areas.map((area, index) => (
            <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="w-5 h-5 text-blue-900 flex-shrink-0" />
              <span>{area}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Don't see your suburb listed? <span className="text-blue-900">Contact us</span> - we likely service your area too!
          </p>
        </div>
      </div>
    </section>
  );
}
