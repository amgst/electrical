import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

const stats = [
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '2000+', label: 'Happy Clients' },
  { icon: Clock, value: '24/7', label: 'Available' },
  { icon: ThumbsUp, value: '100%', label: 'Satisfaction Rate' },
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1659353589251-8da8f0a93599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBlbGVjdHJpY2lhbiUyMHRlYW18ZW58MXx8fHwxNzYyOTcyNjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Our professional team"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          <div>
            <div className="text-blue-900 mb-2">ABOUT US</div>
            <h2 className="mb-4">Sydney's Trusted Electrical Experts</h2>
            <p className="text-gray-600 mb-6">
              With over 15 years of experience serving Sydney's residential and commercial sectors, we pride ourselves on delivering exceptional electrical services with a commitment to safety, quality, and customer satisfaction.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of licensed electricians brings expertise, professionalism, and dedication to every job. Whether it's a simple repair or a complex installation, we treat every project with the same level of care and attention to detail.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <Icon className="w-8 h-8 text-blue-900 mx-auto mb-2" />
                    <div className="text-blue-900 mb-1">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
