import React from 'react';
import { Award, Lock, Tag, Zap, Building2, Landmark } from 'lucide-react';

export default function WhyChooseUsSection() {
  const benefits = [
    {
      icon: Award,
      title: 'Expert Support',
      description: 'Our network of CAs, CSs, and Lawyers ensures perfection in every step.',
    },
    {
      icon: Lock,
      title: 'Secure Process',
      description: 'Bank-grade security protocols ensuring your compliance data stays private.',
    },
    {
      icon: Tag,
      title: 'Affordable Pricing',
      description: 'Transparent and competitive pricing without any hidden charges or surprises.',
    },
    {
      icon: Zap,
      title: 'Fast Service',
      description: 'Tech-enabled processes to deliver your registrations in record time.',
    },
    {
      icon: Building2,
      title: 'Trusted by Businesses',
      description: 'Serving thousands of growing businesses and enterprises Pan-India.',
    },
    {
      icon: Landmark,
      title: 'Government-Compliant Solutions',
      description: '100% compliant solutions adhering to latest government regulations.',
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative background blur element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-primary-50 rounded-full blur-[100px] opacity-70 pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-50/50 border border-primary-100/50 backdrop-blur-sm shadow-sm mb-2">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Trusted Benefits</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Why Choose Us
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Why businesses trust us for registration, compliance, and legal services.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-secondary-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_40px_-10px_rgba(240,112,37,0.15)] flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-6 group-hover:bg-secondary-500 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-secondary-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
