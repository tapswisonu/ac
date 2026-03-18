import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Utensils, Building, FileText, Globe } from 'lucide-react';
import { FaTrademark } from 'react-icons/fa';

const ourServices = [
  {
    title: "Company Registration",
    description: "Register your company legally and start your business with full compliance support.",
    icon: <Building className="w-6 h-6" />,
    link: "/services/private-limited-company"
  },
  {
    title: "GST Registration",
    description: "Get your business GST registered quickly and hassle-free with expert assistance.",
    icon: <FileText className="w-6 h-6" />,
    link: "/services/gst-registration"
  },
  {
    title: "Trademark Filing",
    description: "Protect your brand identity from misuse with prompt Trademark Registration.",
    icon: <FaTrademark className="w-6 h-6" />,
    link: "/services/trademark-registration"
  },
  {
    title: "ISO Certification",
    description: "Enhance your business credibility with ISO 9001:2015 and other quality standards.",
    icon: <ShieldCheck className="w-6 h-6" />,
    link: "/services/iso-9001"
  },
  {
    title: "FSSAI License",
    description: "Mandatory food license for all food-related businesses, from manufacturing to retail.",
    icon: <Utensils className="w-6 h-6" />,
    link: "/services/fssai-registration"
  },
  {
    title: "Import Export Code",
    description: "Start your global business journey with seamless IEC registration.",
    icon: <Globe className="w-6 h-6" />,
    link: "/services/iec-registration"
  }
];

export default function ServiceSection() {
  return (
    <section id="services" className="px-6 py-24 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Our Services
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-lg">
            Comprehensive business, tax, and compliance services to help you start and grow your business smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {ourServices.map((service, idx) => (
            <div key={idx} className="group bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1 hover:border-primary-100">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary-50 text-primary-600 shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed flex-grow">
                {service.description}
              </p>
              <Link href={service.link} className="mt-2 inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 gap-1 w-fit group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
