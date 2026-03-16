import React from 'react';
import { Shield, Zap, Globe } from 'lucide-react';

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-center">
          <div className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow group">
            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-orange-500 transition-colors">
              <Shield className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Domain Experts</h3>
            <p className="text-slate-600 leading-relaxed">Our network of CAs, CSs, and Lawyers ensures perfection in every step.</p>
          </div>
          <div className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow group">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-amber-500 transition-colors">
              <Zap className="w-7 h-7 text-amber-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Lightning Fast</h3>
            <p className="text-slate-600 leading-relaxed">Tech-enabled processes to deliver your registrations in record time.</p>
          </div>
          <div className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow group">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-500 transition-colors">
              <Globe className="w-7 h-7 text-blue-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Pan-India & Global</h3>
            <p className="text-slate-600 leading-relaxed">Serving clients across all Indian states and 20+ international markets.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
