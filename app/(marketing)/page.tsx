import React from 'react';
import HeroSection from '@/components/hero/HeroSection';
import ClientsAndPartnersSection from '@/components/sections/ClientsAndPartnersSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ServiceSection from '@/components/sections/ServiceSection';
import FAQSection from '@/components/sections/FAQSection';
import ServicesCarouselSection from '@/components/sections/ServicesCarouselSection';

export default function Home() {
  return (
    <div className="bg-white">
      <ServicesCarouselSection />
      <HeroSection />
      <ClientsAndPartnersSection />
      <ProcessSection />
      <ServiceSection />
      <FAQSection />
    </div>
  );
}
