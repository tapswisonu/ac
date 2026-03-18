import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FaPhoneAlt, FaLock, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

export default function ProcessSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 shadow-sm mb-4">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Streamlined Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mt-4">
            A secure, efficient, and transparent 4-step process to handle all your business compliance needs.
          </p> 
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[44px] left-[12.5%] right-[12.5%] h-px bg-slate-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1 hover:border-primary-100 transition-all duration-300 relative group">
              <div className="absolute -top-4 -right-2 bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold border-4 border-slate-50 z-20 shadow-sm transition-transform group-hover:scale-110">
                1
              </div>
              <div className="w-16 h-16 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center mb-5 text-primary-600 text-2xl group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                <FaPhoneAlt />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Consultation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Discuss your business requirements with our legal professionals to identify the right services.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1 hover:border-primary-100 transition-all duration-300 relative group">
              <div className="absolute -top-4 -right-2 bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold border-4 border-slate-50 z-20 shadow-sm transition-transform group-hover:scale-110">
                2
              </div>
              <div className="w-16 h-16 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center mb-5 text-primary-600 text-2xl group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                <FaLock />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Secure Upload</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Upload your sensitive documents securely through our encrypted digital platform.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1 hover:border-primary-100 transition-all duration-300 relative group">
              <div className="absolute -top-4 -right-2 bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold border-4 border-slate-50 z-20 shadow-sm transition-transform group-hover:scale-110">
                3
              </div>
              <div className="w-16 h-16 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center mb-5 text-primary-600 text-3xl group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Compliance Processing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our experts rigorously review and file your applications with government authorities.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1 hover:border-accent-200 transition-all duration-300 relative group">
              <div className="absolute -top-4 -right-2 bg-accent-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold border-4 border-slate-50 z-20 shadow-sm transition-transform group-hover:scale-110">
                4
              </div>
              <div className="w-16 h-16 mx-auto bg-accent-50 rounded-2xl flex items-center justify-center mb-5 text-accent-600 text-3xl group-hover:bg-accent-600 group-hover:text-white transition-colors duration-300">
                <FaCheckCircle />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ready for Business</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Receive your official incorporation or compliance certificates instantly upon approval.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-slate-900 font-semibold mb-5 text-lg">Ready to start your compliance journey?</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-primary-600/20 transition-all hover:-translate-y-0.5">
            Get Started Today
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
