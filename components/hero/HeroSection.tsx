import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, CheckCircle, TrendingUp, FileText, Building2, Award } from 'lucide-react';
import { FaStar, FaUsers, FaCheckCircle, FaFileInvoiceDollar, FaTrademark, FaBuilding, FaUtensils } from 'react-icons/fa';

const serviceHighlights = [
  { icon: <Building2 className="w-4 h-4 text-primary-400" />, label: "Company Registration" },
  { icon: <FileText className="w-4 h-4 text-primary-400" />, label: "GST Compliance" },
  { icon: <Award className="w-4 h-4 text-primary-400" />, label: "MCA Filing" },
  { icon: <TrendingUp className="w-4 h-4 text-primary-400" />, label: "Income Tax Filing" },
];

function FloatingServiceCards() {
  const cards = [
    { title: "GST Registration", icon: <FaFileInvoiceDollar className="text-primary-500 text-xl" />, col: "translate-y-0 xl:-translate-y-4 shadow-xl" },
    { title: "Trademark Filing", icon: <FaTrademark className="text-primary-500 text-xl" />, col: "translate-y-8 xl:translate-y-6 shadow-xl" },
    { title: "Company Registration", icon: <FaBuilding className="text-primary-500 text-xl" />, col: "translate-y-8 xl:translate-y-6 shadow-xl" },
    { title: "FSSAI License", icon: <FaUtensils className="text-primary-500 text-xl" />, col: "translate-y-0 xl:-translate-y-4 shadow-xl" }
  ];

  return (
    <div className="relative w-full max-w-[500px] mx-auto mt-12 lg:mt-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-r from-primary-500/30 to-yellow-500/20 rounded-full blur-[60px] pointer-events-none" />
      
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 animate-float" style={{ animationDuration: '4s' }}>
        <div className="flex flex-col gap-4 lg:gap-6">
          <div className={`bg-white rounded-xl px-6 py-5 flex flex-col justify-center items-center sm:items-start text-center sm:text-left gap-3 ${cards[0].col}`}>
            <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center shadow-inner">
              {cards[0].icon}
            </div>
            <p className="text-gray-800 font-bold tracking-tight text-sm/5">{cards[0].title}</p>
          </div>
          <div className={`bg-white rounded-xl px-6 py-5 flex flex-col justify-center items-center sm:items-start text-center sm:text-left gap-3 ${cards[1].col}`}>
            <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center shadow-inner">
              {cards[1].icon}
            </div>
            <p className="text-gray-800 font-bold tracking-tight text-sm/5">{cards[1].title}</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 lg:gap-6 pt-0 sm:pt-6">
          <div className={`bg-white rounded-xl px-6 py-5 flex flex-col justify-center items-center sm:items-start text-center sm:text-left gap-3 ${cards[2].col}`}>
            <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center shadow-inner">
              {cards[2].icon}
            </div>
            <p className="text-gray-800 font-bold tracking-tight text-sm/5">{cards[2].title}</p>
          </div>
          <div className={`bg-white rounded-xl px-6 py-5 flex flex-col justify-center items-center sm:items-start text-center sm:text-left gap-3 ${cards[3].col}`}>
            <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center shadow-inner">
              {cards[3].icon}
            </div>
            <p className="text-gray-800 font-bold tracking-tight text-sm/5">{cards[3].title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617] min-h-[640px]">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 left-0 w-[480px] h-[480px] bg-primary-600/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-24 lg:pt-10 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h1 className="animate-fade-in-up-d1 text-4xl sm:text-4xl xl:text-5xl font-extrabold leading-[1.1] tracking-tight">
              All-in-One {" "}
              <span className="bg-gradient-to-r from-primary-400 via-amber-400 to-primary-300 bg-clip-text text-transparent">
               Corporate
              </span>
              <br />
              Platform{" "}
              <span className="bg-gradient-to-r from-primary-400 to-amber-300 bg-clip-text text-transparent">
               for Indian
              </span>{" "}
              Businesses
            </h1>

            <div className="animate-fade-in-up-d2 flex flex-wrap gap-x-6 gap-y-3 mt-7">
              {serviceHighlights.map((s, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <FaCheckCircle className="w-4 h-4 text-primary-400 shrink-0" />
                  {s.label}
                </div>
              ))}
            </div>

            <div className="animate-fade-in-up-d3 flex flex-col sm:flex-row gap-4 mt-9">
              <Link
                href="/services/private-limited-company"
                className="animate-pulse-glow inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-sm shadow-lg shadow-primary-500/30 transition-all hover:scale-105"
              >
                Start Your Business
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:9643862867"
                className="inline-flex items-center justify-center gap-2 border border-gray-500 text-white px-8 py-4 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-all"
              >
                <Phone className="w-4 h-4 text-primary-400" />
                Talk to an Expert
              </a>
            </div>

            <div className="animate-fade-in-up-d4 flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <FaUsers className="w-4 h-4 text-blue-400" />
                <span>Trusted by <span className="font-bold text-white">1L+ Entrepreneurs</span></span>
              </div>
            </div>

            <div className="animate-fade-in-up-d4 flex flex-wrap gap-3 mt-5">
              {["ISO 9001:2015 Certified", "Govt. of India Approved", "CA & CS Professionals"].map((badge, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                  <CheckCircle className="w-3 h-3 text-green-400 shrink-0" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="block lg:flex justify-end items-center lg:pr-8 xl:pr-0">
            <FloatingServiceCards />
          </div>
        </div>
      </div>
    </section>
  );
}
