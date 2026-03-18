import React from 'react';
import { Award, Lock, Tag, Zap, Building2, Landmark } from 'lucide-react';

export default function WhyChooseUsSection() {
  const benefits = [
    {
      icon: Award,
      title: 'Expert-Led Support',
      description: 'Our proprietary network of verified CAs, CSs, and corporate lawyers ensures absolute perfection during filing.',
    },
    {
      icon: Lock,
      title: '100% Secure Process',
      description: 'Bank-grade 256-bit encryption protocols guaranteeing that your sensitive compliance data stays strictly private.',
    },
    {
      icon: Tag,
      title: 'Transparent Pricing',
      description: 'Clear, milestone-based, and highly competitive pricing—zero hidden charges or unpredictable professional fees.',
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Our tech-enabled workflows cut redundancies, delivering your official registrations in record times.',
    },
    {
      icon: Building2,
      title: 'Nationwide Support',
      description: 'Serving over a lakh of growing MSMEs, startups, and massive enterprises entirely pan-India.',
    },
    {
      icon: Landmark,
      title: 'Always Compliant',
      description: 'Guaranteed 100% adherence to the absolute latest MCA, GST, and corporate governance regulations.',
    },
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden border-t border-slate-200">
      {/* Decorative background blur element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-primary-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">The Smart Choice</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Why Trusted Businesses <br className="hidden md:block" /> Choose Us
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Experience absolute peace of mind while we handle your most critical legal and compliance registrations.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl bg-white border border-slate-200 hover:border-primary-300 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary-600/5 flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:border-primary-600 transition-colors duration-300 shadow-sm">
                <benefit.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-primary-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
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
