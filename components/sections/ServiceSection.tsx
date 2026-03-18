import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Utensils, Building, FileText, Globe } from 'lucide-react';
import { FaTrademark } from 'react-icons/fa';

const ourServices = [
  {
    title: "Private Limited Company",
    description: "Launch your business with complete compliance, DSC, DIN, and incorporation certificates in days.",
    icon: <Building className="w-6 h-6" />,
    link: "/services/private-limited-company"
  },
  {
    title: "Express GST Registration",
    description: "Navigate tax laws securely. Fast-track your GSTIN allocation with expert documentation support.",
    icon: <FileText className="w-6 h-6" />,
    link: "/services/gst-registration"
  },
  {
    title: "Secure Trademark Filing",
    description: "Protect your intellectual property from infringement with robust trademark registration.",
    icon: <FaTrademark className="w-6 h-6" />,
    link: "/services/trademark-registration"
  },
  {
    title: "ISO Certification",
    description: "Build ultimate trust with clients by securing ISO 9001:2015 and other global quality standards.",
    icon: <ShieldCheck className="w-6 h-6" />,
    link: "/services/iso-9001"
  },
  {
    title: "FSSAI Food License",
    description: "Mandatory, fast-tracked food safety licenses for manufacturers, restaurants, and FMCG brands.",
    icon: <Utensils className="w-6 h-6" />,
    link: "/services/fssai-registration"
  },
  {
    title: "Import Export Code",
    description: "Unlock global markets seamlessly. Get your IEC delivered directly to your inbox.",
    icon: <Globe className="w-6 h-6" />,
    link: "/services/iec-registration"
  }
];

export default function ServiceSection() {
  return (
    <section id="services" className="px-6 py-24 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary-50 border border-secondary-100 shadow-sm mb-4">
            <span className="text-sm font-semibold text-secondary-600 uppercase tracking-wider">Premium Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Comprehensive Solutions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-lg">
            Everything you need to legally establish, protect, and scale your operations across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {ourServices.map((service, idx) => (
            <div key={idx} className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col gap-5 transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/10 hover:-translate-y-1.5 hover:border-primary-200">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-700 shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100 group-hover:border-primary-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
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
