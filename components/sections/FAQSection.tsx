"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  { question: "How long does company registration take?", answer: "The typical company registration process takes around 10 to 15 working days, subject to government processing times and document readiness." },
  { question: "What documents are required?", answer: "Generally, you will need a PAN card, Aadhaar card, address proof (like a bank statement or utility bill), and passport-size photographs for the directors." },
  { question: "What is GST registration?", answer: "GST (Goods and Services Tax) registration is a tax registration required for businesses whose turnover exceeds the threshold limit, or those involved in inter-state supply." },
  { question: "How do I apply for trademark registration?", answer: "You can apply for trademark registration by conducting a trademark search, filing the application with the Trade Marks Registry, and responding to any examiner objections if raised." },
  { question: "Is GST mandatory for my business?", answer: "GST registration is mandatory if your aggregate turnover exceeds the prescribed limit (usually ₹40 Lakhs for goods and ₹20 Lakhs for services), or if you sell across state lines." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="bg-slate-100 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
          Frequently Asked Questions
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our services and compliance process.
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => {
             const isOpen = openIndex === index;
             return (
                 <div 
                   key={index}
                   className={`bg-slate-800 rounded-xl shadow-md border ${isOpen ? 'border-primary-500 bg-slate-700' : 'border-slate-700'} p-5 mb-4 hover:shadow-lg hover:border-secondary-500 transition-all duration-300`}
                 >
                 <button
                   onClick={() => toggle(index)}
                   className="w-full flex justify-between items-center cursor-pointer focus:outline-none"
                 >
                   <span className="font-semibold text-white text-left text-lg">{faq.question}</span>
                   <ChevronDown className={`w-5 h-5 text-primary-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                 </button>
                 
                 <div
                   className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[200px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}
                 >
                   <p className="text-slate-300 leading-relaxed border-t border-slate-600 pt-3">
                     {faq.answer}
                   </p>
                 </div>
               </div>
             )
          })}
        </div>
        
        <div className="text-center mt-12 p-8 bg-slate-800 rounded-2xl shadow-sm border border-slate-700">
          <p className="text-slate-300 mb-6 font-medium text-lg">
            Still have questions? Talk to our expert today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-secondary text-white px-8 py-4 rounded-xl hover:bg-accent transition-colors font-bold shadow-md shadow-secondary/20 hover:shadow-lg hover:-translate-y-0.5 duration-200"
          >
            Get Free Consultation
          </Link>
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
