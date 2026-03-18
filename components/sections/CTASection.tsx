import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-primary-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-orange-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 text-primary-600 text-xs font-bold px-4 py-1.5 rounded-full mb-6">
          <Zap className="w-3.5 h-3.5" />
          Limited Time Offer — Code: INDT20 · Get 15% Off
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5">
          Ready to start your business?
        </h2>
        <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto">
          Get expert assistance today and launch your dream business faster than ever.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-orange-500 text-white px-10 py-4 rounded-xl font-bold text-base shadow-lg shadow-primary-500/30 hover:from-primary-600 hover:to-orange-600 transition-all hover:scale-105"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/services/private-limited-company"
            className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:bg-slate-100 text-slate-700 px-10 py-4 rounded-xl font-semibold text-base transition-all"
          >
            Apply Now
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <p className="text-slate-500 text-sm mt-5">No credit card required &nbsp;•&nbsp; Free expert consultation</p>
      </div>
    </section>
  );
}
