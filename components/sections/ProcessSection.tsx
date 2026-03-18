import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FaSearch, FaFileUpload, FaUserCheck, FaCertificate } from 'react-icons/fa';

export default function ProcessSection() {
  return (
    <section className="py-20 bg-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
           
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
           How It Works
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
             Simple 4-step process to start and manage your business compliance.
          </p> 
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-[44px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-primary-900 via-primary-500 to-primary-900 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300 relative group">
              <div className="absolute -top-4 -right-2 bg-primary-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold border-4 border-white z-20 shadow-sm transition-transform group-hover:scale-110">
                1
              </div>
              <div className="w-16 h-16 mx-auto bg-primary-50 rounded-full flex items-center justify-center mb-4 text-primary-500 text-3xl group-hover:bg-primary-100 transition-colors">
                <FaSearch />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Choose Service</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Select the service you need such as company registration, GST filing, or trademark registration.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300 relative group">
              <div className="absolute -top-4 -right-2 bg-primary-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold border-4 border-white z-20 shadow-sm transition-transform group-hover:scale-110">
                2
              </div>
              <div className="w-16 h-16 mx-auto bg-primary-50 rounded-full flex items-center justify-center mb-4 text-primary-500 text-3xl group-hover:bg-primary-100 transition-colors">
                <FaFileUpload />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Submit Documents</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Upload the required documents securely through our platform.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300 relative group">
              <div className="absolute -top-4 -right-2 bg-primary-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold border-4 border-white z-20 shadow-sm transition-transform group-hover:scale-110">
                3
              </div>
              <div className="w-16 h-16 mx-auto bg-primary-50 rounded-full flex items-center justify-center mb-4 text-primary-500 text-3xl group-hover:bg-primary-100 transition-colors">
                <FaUserCheck />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Expert Filing</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our professionals review and file your application with the concerned authorities.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl shadow-lg border border-slate-700 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300 relative group">
              <div className="absolute -top-4 -right-2 bg-primary-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold border-4 border-white z-20 shadow-sm transition-transform group-hover:scale-110">
                4
              </div>
              <div className="w-16 h-16 mx-auto bg-primary-50 rounded-full flex items-center justify-center mb-4 text-primary-500 text-3xl group-hover:bg-primary-100 transition-colors">
                <FaCertificate />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Get Certificate</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Receive your registration or compliance certificate quickly and easily.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-900 font-medium mb-4 text-lg">Ready to start your business?</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-primary-500/30 transition-all hover:scale-105">
            Get Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
