'use client';

import React, { useState } from 'react';

// Theme UI Core Components
import { Container } from '@/components/theme-ui/Container';
import { SectionWrapper } from '@/components/theme-ui/SectionWrapper';
import { SectionHeader } from '@/components/theme-ui/SectionHeader';
import { Badge } from '@/components/theme-ui/Badge';
import { Button } from '@/components/theme-ui/Button';
import { ServiceCard } from '@/components/theme-ui/ServiceCard';
import { FeatureCard } from '@/components/theme-ui/FeatureCard';
import { FormCard } from '@/components/theme-ui/FormCard';

// Icons
import { Building, FileText, Stamp, ShieldCheck, CheckCircle2, Rocket, FileSearch, HeadphonesIcon, Lock, Star } from 'lucide-react';

const servicesData = [
  {
    id: "pvt-ltd",
    title: "Private Limited Company",
    heroTitle: "Private Limited Company Registration",
    heroDesc: "Register your Pvt Ltd company with expert guidance and fast approval. Access our premium ecosystem of CAs and CSs to scale securely.",
    description: "Launch your business with complete compliance, DSC, DIN, and incorporation certificates in days.",
    icon: <Building />,
    badge: "Most Popular",
    benefits: ["Fast Registration (24-48 hrs)", "Govt Approved Process", "Dedicated CA Support"]
  },
  {
    id: "gst",
    title: "GST Registration",
    heroTitle: "Express GST Registration Services",
    heroDesc: "Get GST registered quickly and stay tax compliant. We handle all paperwork directly with the portal to ensure instant MSME growth.",
    description: "Navigate tax laws securely. Fast-track your GSTIN allocation with expert documentation support.",
    icon: <FileText />,
    benefits: ["Easy Documentation", "Expert Filing", "Affordable Pricing"]
  },
  {
    id: "trademark",
    title: "Trademark Filing",
    heroTitle: "Robust Trademark Registration",
    heroDesc: "Protect your brand legally with trademark registration. Ensure your intellectual property remains exclusively yours across the entire Indian market.",
    description: "Protect your intellectual property from infringement with robust trademark registration.",
    icon: <Stamp />,
    badge: "Essential",
    benefits: ["Brand Protection", "Legal Security", "Quick & Safe Filing"]
  },
  {
    id: "iso",
    title: "ISO Certification",
    heroTitle: "ISO Quality Certification",
    heroDesc: "Build ultimate trust with your clients by securing ISO 9001:2015 and other global quality standard certifications fully seamlessly.",
    description: "Build ultimate trust with clients by securing ISO 9001:2015 and other global quality standards.",
    icon: <ShieldCheck />,
    benefits: ["Global Recognition", "Process Optimization", "Expert Direct Guidance"]
  }
];

export default function ThemePage() {
  const [activeService, setActiveService] = useState(servicesData[0]);

  return (
    <div className="min-h-screen bg-white">
       
       {/* 1. HERO SECTION (Dynamic Interaction Target) */}
       <SectionWrapper bgColor="bg-slate-50 relative overflow-hidden border-b border-slate-200">
         {/* Background Decor */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-900/5 blur-[120px] pointer-events-none rounded-bl-full"></div>
         <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary-500/10 blur-[100px] pointer-events-none rounded-full"></div>

         <Container className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8 animate-in slide-in-from-left-4 fade-in duration-700">
               <div>
                 <Badge variant="primary">Legal Solutions Interface</Badge>
               </div>
               
               {/* Note: React key forcing DOM remount to trigger re-animation smoothly */}
               <div key={activeService.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                 <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
                   {activeService.heroTitle}
                 </h1>
                 <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mb-8">
                   {activeService.heroDesc}
                 </p>
                 
                 <div className="space-y-4 mb-10">
                   {activeService.benefits.map((b, i) => (
                     <div key={i} className="flex items-center gap-3">
                       <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                       <span className="text-[15px] font-semibold text-slate-700">{b}</span>
                     </div>
                   ))}
                 </div>
               </div>

               <div className="flex flex-col sm:flex-row gap-4">
                 <Button variant="secondary">Start Application</Button>
                 <Button variant="outline">Explore All Pricing</Button>
               </div>
            </div>

            {/* Right Form Component */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0 lg:ml-6">
               <FormCard selectedServiceTitle={activeService.title} />
            </div>

         </Container>
       </SectionWrapper>

       {/* 2. SERVICES SECTION (State Controller) */}
       <SectionWrapper bgColor="bg-white">
         <Container>
           <SectionHeader 
             badge="Our Services" 
             title="Comprehensive Business Solutions"
             subtitle="Click any service component physically below. Watch as the internal React state instantly updates both the Hero Content and Lead Form directly above."
           />
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
             {servicesData.map((svc) => (
               <ServiceCard 
                 key={svc.id}
                 icon={svc.icon}
                 title={svc.title}
                 description={svc.description}
                 badge={svc.badge}
                 isActive={activeService.id === svc.id}
                 onClick={() => {
                   setActiveService(svc);
                   window.scrollTo({ top: 0, behavior: 'smooth' }); // Elegant scroll back to top to view result
                 }}
               />
             ))}
           </div>
         </Container>
       </SectionWrapper>

       {/* 3. WHY CHOOSE US (Feature Grid) */}
       <SectionWrapper bgColor="bg-slate-50 border-t border-slate-100">
         <Container>
           <SectionHeader 
             badge="Why Us" 
             title="The AJ Legal Advantage"
             subtitle="We are fundamentally committed to delivering enterprise-grade compliance with zero internal friction."
           />
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
             <FeatureCard icon={<Rocket />} title="Fast Processing" />
             <FeatureCard icon={<FileSearch />} title="Expert Filing" />
             <FeatureCard icon={<Lock />} title="100% Secure System" />
             <FeatureCard icon={<HeadphonesIcon />} title="24/7 Premium Support" />
           </div>
         </Container>
       </SectionWrapper>

       {/* 4. TRUST SECTION */}
       <SectionWrapper bgColor="bg-primary-900 border-t border-primary-800" className="text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-primary-700 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
         <Container className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Trusted by incredible companies</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-16 opacity-70">
                {/* Mock Client Logos / Names */}
                <div className="text-2xl font-bold tracking-widest uppercase">Razorpay</div>
                <div className="text-2xl font-bold tracking-widest uppercase">Cred</div>
                <div className="text-2xl font-bold tracking-widest uppercase">Zerodha</div>
                <div className="text-2xl font-bold tracking-widest uppercase">Paytm</div>
            </div>
            
            <div className="mt-12 inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-2xl backdrop-blur-md border border-white/20">
               <div className="flex gap-1">
                 {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-secondary-500 text-secondary-500" />)}
               </div>
               <span className="font-bold ml-2">4.9/5 Average Rating</span>
            </div>
         </Container>
       </SectionWrapper>

    </div>
  )
}
