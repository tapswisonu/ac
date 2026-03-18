import React from 'react';
import HeroSection from '@/components/hero/HeroSection';
import ClientsAndPartnersSection from '@/components/sections/ClientsAndPartnersSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ServiceSection from '@/components/sections/ServiceSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ClientsAndPartnersSection />
      <ProcessSection />
      <ServiceSection />
      <WhyChooseUsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
