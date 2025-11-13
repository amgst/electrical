import { Shield, DollarSign, Clock, Star, Wrench, Users } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed electricians with comprehensive insurance coverage for your peace of mind.',
  },
  {
    icon: DollarSign,
    title: 'Upfront Pricing',
    description: 'Fixed price quotes with no hidden costs. You know exactly what you\'ll pay before we start.',
  },
  {
    icon: Clock,
    title: 'On-Time Service',
    description: 'We respect your time. Our team arrives promptly and completes work as scheduled.',
  },
  {
    icon: Star,
    title: 'Quality Workmanship',
    description: 'High-quality work guaranteed. We stand behind our services with a satisfaction guarantee.',
  },
  {
    icon: Wrench,
    title: 'Modern Equipment',
    description: 'Using the latest tools and techniques to ensure efficient and safe electrical work.',
  },
  {
    icon: Users,
    title: 'Friendly Team',
    description: 'Professional, courteous electricians who treat your property with respect.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-yellow-400 mb-2">WHY CHOOSE US</div>
          <h2 className="mb-4">Your Reliable Electrical Partner</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            When you choose us, you're choosing quality, reliability, and professionalism. Here's what sets us apart from the rest.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="mb-2">{reason.title}</h3>
                <p className="text-blue-100">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}