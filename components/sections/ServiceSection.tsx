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
    <section id="services" className="max-w-7xl mx-auto px-6 py-20 relative z-10 bg-white">
      <div className="mt-16 mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Our Services
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-4">
          Comprehensive business, tax, and compliance services to help you start and grow your business smoothly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ourServices.map((service, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-primary-50">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 text-primary-500 shrink-0">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed flex-grow">
              {service.description}
            </p>
            <Link href={service.link} className="mt-4 inline-flex items-center text-primary-500 font-medium hover:text-primary-600 gap-1 w-fit">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
