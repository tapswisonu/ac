"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQAccordion({ targetFaqs }: { targetFaqs: { question: string, answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  // Fallback to sample FAQs if empty
  const faqs = targetFaqs && targetFaqs.length > 0 ? targetFaqs : [
    { question: "What documents are required to start?", answer: "Typically, PAN card, Aadhaar card, Address proof, and passport size photographs are needed. The exact list depends on the service." },
    { question: "Is the entire process online?", answer: "Yes, our entire process is digital. You simply upload the documents and we handle the rest with the respective authorities." },
    { question: "How long does the registration take?", answer: "Most registrations like Private Limited Company take 10-15 working days subject to government processing and document completeness." }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`border rounded-xl transition-all duration-200 ${openIndex === index ? 'border-primary-300 bg-primary-50/30' : 'border-gray-200 bg-white hover:border-gray-300'}`}
        >
          <button 
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
          >
            <span className="font-semibold text-gray-900 text-lg pr-8">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-primary-500 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
            )}
          </button>
          
          <div 
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100/50">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
