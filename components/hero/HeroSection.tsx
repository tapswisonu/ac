import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, CheckCircle, TrendingUp, FileText, Building2, Award, ShieldCheck } from 'lucide-react';
import { FaStar, FaBuilding, FaUtensils, FaFileInvoiceDollar, FaTrademark } from 'react-icons/fa';

const serviceHighlights = [
  { icon: <Building2 className="w-4 h-4 text-accent-400 shrink-0" />, label: "Company Registration" },
  { icon: <FileText className="w-4 h-4 text-accent-400 shrink-0" />, label: "GST Compliance" },
  { icon: <Award className="w-4 h-4 text-accent-400 shrink-0" />, label: "Licenses" },
  { icon: <TrendingUp className="w-4 h-4 text-accent-400 shrink-0" />, label: "Income Tax Filing" },
];

function FloatingServiceCards() {
  const cards = [
    { title: "GST Registration", icon: <FaFileInvoiceDollar className="text-secondary-500 text-xl" />, col: "lg:-translate-y-4" },
    { title: "Trademark Filing", icon: <FaTrademark className="text-primary-500 text-xl" />, col: "lg:translate-y-4" },
    { title: "Company Setup", icon: <FaBuilding className="text-primary-500 text-xl" />, col: "lg:-translate-y-4" },
    { title: "FSSAI License", icon: <FaUtensils className="text-secondary-500 text-xl" />, col: "lg:translate-y-4" }
  ];

  return (
    <div className="relative w-full max-w-md mx-auto lg:ml-auto lg:mr-0 mt-8 lg:mt-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary-600/20 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="relative grid grid-cols-2 gap-4 lg:gap-5 animate-float" style={{ animationDuration: '6s' }}>
        {cards.map((card, idx) => (
          <div 
            key={idx} 
            className={`bg-white rounded-2xl p-5 flex flex-col justify-center items-center text-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100/50 transition-transform duration-500 hover:-translate-y-1 ${card.col}`}
          >
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm">
              {card.icon}
            </div>
            <p className="text-slate-900 font-bold tracking-tight text-sm leading-tight">{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 flex flex-col justify-center min-h-[calc(100vh-90px)] border-b border-primary-900/30">
      {/* Background patterns and glowing orbs */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[100px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary-500/10 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-4 flex-grow flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10 items-center">
          
          {/* Text Content */}
          <div className="text-white flex flex-col justify-center w-full max-w-2xl lg:pr-8">
            <h1 className="animate-fade-in-up-d1 text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.12] tracking-tight text-white mb-5">
              India&apos;s Most Trusted <br className="hidden sm:block" />
              <span className="text-primary-400">
               Corporate Compliance
              </span>
              <br />
              Platform
            </h1>
            
            <p className="animate-fade-in-up-d2 text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg mb-6">
              Expert-led support, fast turnaround, secure processing, and transparent pricing. Focus on your business while we handle the legalities.
            </p>

            <div className="animate-fade-in-up-d2 flex flex-wrap gap-x-3 gap-y-2 mb-8">
              {serviceHighlights.map((s, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-300 font-medium bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800 shadow-sm backdrop-blur-sm">
                  {s.icon}
                  {s.label}
                </div>
              ))}
            </div>

            <div className="animate-fade-in-up-d3 flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-primary-600/20 transition-all hover:shadow-primary-600/40 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Get a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:9643862867"
                className="inline-flex items-center justify-center gap-2 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 text-slate-400" />
                Talk to an Expert
              </a>
            </div>

            {/* Hyper-Compact Trust Proof */}
            <div className="animate-fade-in-up-d4 flex flex-wrap items-center gap-5 bg-slate-900/40 p-3.5 sm:px-5 sm:py-3.5 rounded-2xl border border-slate-800/60 w-fit backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <Image key={i} className="w-8 h-8 rounded-full border-2 border-slate-950" src={`https://i.pravatar.cc/100?img=${i + 15}`} alt={`User ${i}`} width={32} height={32} />
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-3.5 h-3.5 text-secondary-500" />
                    ))}
                  </div>
                  <div className="text-xs font-bold text-slate-200 mt-0.5">100,000+ <span className="text-slate-400 font-medium">Businesses</span></div>
                </div>
              </div>

              <div className="hidden sm:block w-px h-8 bg-slate-700"></div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-slate-300">
                   <CheckCircle className="w-3.5 h-3.5 text-accent-500" /> ISO 9001:2015 Target
                </div>
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-slate-300">
                   <ShieldCheck className="w-3.5 h-3.5 text-accent-500" /> CA & CS Experts
                </div>
              </div>
            </div>
          </div>

          {/* Right side graphic */}
          <div className="w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
            <FloatingServiceCards />
          </div>
        </div>
      </div>
    </section>
  );
}
