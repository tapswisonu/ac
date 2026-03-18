import React from 'react';
import HeroSection from '@/components/hero/HeroSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TrustLogosSection from '@/components/sections/TrustLogosSection';
import ServiceSection from '@/components/sections/ServiceSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ProcessSection />
      <TrustLogosSection />
      <ServiceSection />
      <WhyChooseUsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
