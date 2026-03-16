import React from 'react';
import HeroSection from '@/components/hero/HeroSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ServiceSection from '@/components/sections/ServiceSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ProcessSection />
      <ServiceSection />
      <WhyChooseUsSection />
      <CTASection />
    </div>
  );
}
