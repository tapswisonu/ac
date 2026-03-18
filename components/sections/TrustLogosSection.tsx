import React from 'react';

const companies = [
  { name: 'Paytm', logo: 'P' },
  { name: 'Meta', logo: 'M' },
  { name: 'AWS', logo: 'A' },
  { name: 'Tata', logo: 'T' },
  { name: 'DBS', logo: 'D' },
];

export default function TrustLogosSection() {
  return (
    <section className="py-16 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-bold text-green-600 uppercase tracking-widest">
            Trusted by Thousands of Businesses
          </p>
        </div>
        
        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden group">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Marquee Content - First Set */}
          <div className="flex animate-marquee whitespace-nowrap py-4 items-center group-hover:pause">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100 shadow-sm text-blue-700 font-black text-xl">
                  {company.logo}
                </div>
                <span className="text-xl font-bold text-blue-900 tracking-tight">
                  {company.name}
                </span>
              </div>
            ))}
          </div>

          {/* Marquee Content - Duplicated Set for infinite loop */}
          <div className="flex animate-marquee whitespace-nowrap py-4 items-center group-hover:pause absolute top-0 animate-marquee-delayed">
            {companies.map((company, index) => (
              <div 
                key={`dup-${index}`} 
                className="flex items-center gap-3 mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100 shadow-sm text-blue-700 font-black text-xl">
                  {company.logo}
                </div>
                <span className="text-xl font-bold text-blue-900 tracking-tight">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
