"use client";

import React, { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  { question: "How long does company registration take?", answer: "The typical company registration process takes around 10 to 15 working days, subject to government processing times and document readiness. Our automated systems ensure zero delays on our end." },
  { question: "Are there any hidden charges?", answer: "Absolutely not. We believe in 100% transparent pricing. The fees quoted to you cover professional services, government fees, and all applicable taxes with no surprises later." },
  { question: "Is my data secure with you?", answer: "Yes. We use bank-grade 256-bit encryption for all document uploads and communications. Your sensitive business data is never shared with unauthorized third parties." },
  { question: "Do you provide pan-India services?", answer: "Yes, our services are entirely digital and available to businesses across all states and union territories in India." },
  { question: "Do you help with post-registration compliance?", answer: "Yes, we are a full-stack platform. Once your business is registered, we handle your annual compliance, GST filings, and bookkeeping." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="bg-white py-24 px-6 border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-4">
            <MessageCircleQuestion className="w-4 h-4 text-slate-600 mr-2" />
            <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mt-4">
            Everything you need to know about our secure platform, pricing, and compliance process.
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => {
             const isOpen = openIndex === index;
             return (
                 <div 
                   key={index}
                   className={`bg-white rounded-2xl shadow-sm border ${isOpen ? 'border-primary-300 ring-2 ring-primary-50' : 'border-slate-200'} p-6 transition-all duration-300 hover:border-primary-300`}
                 >
                 <button
                   onClick={() => toggle(index)}
                   className="w-full flex justify-between items-center cursor-pointer focus:outline-none"
                 >
                   <span className={`font-bold text-left text-lg transition-colors ${isOpen ? 'text-primary-700' : 'text-slate-900 group-hover:text-primary-600'}`}>{faq.question}</span>
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary-50' : 'bg-slate-50'}`}>
                     <ChevronDown className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-primary-600' : 'text-slate-400'}`} />
                   </div>
                 </button>
                 
                 <div
                   className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[200px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}
                 >
                   <p className="text-slate-600 leading-relaxed pt-2">
                     {faq.answer}
                   </p>
                 </div>
               </div>
             )
          })}
        </div>
        
        <div className="text-center mt-12 p-10 bg-gradient-to-br from-primary-50 to-white rounded-3xl shadow-sm border border-primary-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Still have questions?</h3>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
              Our compliance experts are standing by to provide you with personalized advice for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-all font-semibold shadow-lg shadow-primary-600/20 hover:-translate-y-0.5 duration-200"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </div>
      
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}
