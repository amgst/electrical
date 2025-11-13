import { Lightbulb, Zap, Home, Building2, Plug, Shield, Wrench, AlertCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const services = [
  {
    icon: Lightbulb,
    title: 'Lighting Installation',
    description: 'Indoor and outdoor lighting, LED upgrades, and smart lighting solutions.',
  },
  {
    icon: Zap,
    title: 'Electrical Repairs',
    description: 'Fast and reliable repairs for all electrical issues in your home or business.',
  },
  {
    icon: Home,
    title: 'Residential Services',
    description: 'Complete electrical services for homes including rewiring and upgrades.',
  },
  {
    icon: Building2,
    title: 'Commercial Electrical',
    description: 'Professional electrical solutions for offices, retail spaces, and buildings.',
  },
  {
    icon: Plug,
    title: 'Power Points & Switches',
    description: 'Installation and replacement of power points, switches, and USB outlets.',
  },
  {
    icon: Shield,
    title: 'Safety Inspections',
    description: 'Comprehensive electrical safety inspections and compliance certificates.',
  },
  {
    icon: Wrench,
    title: 'Switchboard Upgrades',
    description: 'Modern switchboard installations and safety switch upgrades.',
  },
  {
    icon: AlertCircle,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency electrical services when you need them most.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-blue-900 mb-2">OUR SERVICES</div>
          <h2 className="mb-4">Comprehensive Electrical Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From simple repairs to complex installations, we provide a full range of electrical services for residential and commercial clients across Sydney.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
