import React from 'react';
import ServiceFAQSection from '@/components/sections/ServiceFAQSection';
import LeadForm from '@/components/forms/LeadForm';
import {
  CheckCircle2, ShieldCheck, Clock, Users, Award,
  FileText, Headphones, TrendingUp, ArrowRight, Play
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'RA Licence Registration in India – BCAS Approved',
  description:
    'Get your Regulated Agent (RA) Licence from BCAS with expert CA support. Fast, transparent, and 100% government-compliant RA licence registration across India.',
  url: '/services/ra-license',
});

/* ── Why Choose Us ── */
const whyUs = [
  {
    icon: ShieldCheck,
    title: 'Expert CA & CS Team',
    desc: 'Our qualified Chartered Accountants have 5+ years of experience handling RA Licence documentation and BCAS compliance across India.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    desc: 'We file your RA Licence application promptly and follow up proactively with BCAS — keeping you informed at every step.',
  },
  {
    icon: FileText,
    title: 'End-to-End Documentation',
    desc: 'We handle all paperwork, security programs, personnel records, and BCAS forms — you just share the documents.',
  },
  {
    icon: TrendingUp,
    title: 'Transparent Pricing',
    desc: 'Fixed, all-inclusive pricing with no hidden fees. Government charges are passed at actuals. You always know what you\'re paying for.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    desc: 'A dedicated compliance manager is assigned from start to finish — reachable by phone, WhatsApp, or email at any time.',
  },
  {
    icon: Award,
    title: 'RA Licensed Professional',
    desc: 'We are officially RA Licensed and approved by the Government of India, providing verified professional services for aviation security compliance.',
  },
];

/* ── FAQs ── */
const faqs = [
  {
    question: 'What is an RA Licence (Regulated Agent Licence) in India?',
    answer:
      'An RA Licence is a mandatory certification issued by the Bureau of Civil Aviation Security (BCAS) to entities that handle, screen, or transport air cargo in India. It ensures all regulated agents comply with aviation security standards set under the Aircraft (Security) Rules, 2023.',
  },
  {
    question: 'Who needs an RA Licence in India?',
    answer:
      'Any freight forwarder, logistics company, air cargo handler, courier company, or supply chain operator that deals with air cargo is required to obtain an RA Licence from BCAS. Without it, entities cannot legally tender cargo to airlines.',
  },
  {
    question: 'What documents are required for RA Licence Registration?',
    answer:
      'Typical documents include: Company PAN & GST certificate, Certificate of Incorporation, list of key personnel, security program, premises lease agreement, background verification reports for staff, and airport entry passes for screeners. Our team sends a tailored checklist after the free consultation.',
  },
  {
    question: 'How long does RA Licence registration take?',
    answer:
      'The BCAS RA Licence process typically takes 30–60 days, depending on the authority\'s processing speed and inspection scheduling. AJ Accounting Group ensures zero delays from our end — we file on Day 1 and pursue follow-ups with BCAS proactively.',
  },
  {
    question: 'What is the validity of an RA Licence?',
    answer:
      'An RA Licence is typically valid for 2 years and must be renewed before expiry. Failure to renew can result in suspension, penalties, and inability to handle air cargo. We also offer RA Licence renewal services.',
  },
  {
    question: 'Can AJ Accounting help with RA Licence renewal and amendments?',
    answer:
      'Yes. We provide complete RA Licence lifecycle services — new registration, renewal, amendment (change of premises, directors, personnel), and compliance audits. Our team ensures your licence remains active and compliant at all times.',
  },
];

export default function RALicencePage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* ── 1. Hero ── */}
      <section className="relative bg-[#1E4E8C] pt-28 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="absolute -top-40 -left-40 w-[460px] h-[460px] bg-[#4CAF50]/20 rounded-full blur-[130px] opacity-60 pointer-events-none" />
        <div className="absolute -bottom-20 right-0 w-[360px] h-[360px] bg-[#4CAF50]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">
            <div className="text-white">
              {/* Priority badge */}
              <div className="inline-flex items-center gap-2 bg-[#4CAF50]/20 border border-[#4CAF50]/40 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
                <span className="text-xs font-bold text-[#4CAF50] uppercase tracking-widest">#1 Priority Service · BCAS Approved</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.12] tracking-tight mb-5">
                RA Licence Registration{' '}
                <span className="text-[#4CAF50]">in India</span>
              </h1>
              <p className="text-white/75 text-lg leading-relaxed max-w-lg mb-8">
                Expert-led <strong className="text-white">Regulated Agent Licence</strong> services handled by qualified CAs and aviation security consultants.
                Fast turnaround, transparent pricing, and full BCAS compliance.
              </p>
              <div className="flex flex-wrap gap-3">
                {['BCAS Approved Process', '30-Day Turnaround', 'Expert CA/CS', 'Pan-India Service'].map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-xs font-semibold text-white/85"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#4CAF50]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <LeadForm serviceSlug="ra-license" serviceName="RA Licence Registration" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Client Video Section ── */}
      <section
        className="py-16 bg-white border-b border-slate-100"
        aria-labelledby="video-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#1E4E8C]/8 border border-[#1E4E8C]/15 rounded-full px-4 py-1.5 mb-5">
              <Play className="w-3.5 h-3.5 text-[#1E4E8C]" />
              <span className="text-[11px] font-bold text-[#1E4E8C] uppercase tracking-widest">How We Work – RA Licence</span>
            </div>
            <h2 id="video-heading" className="text-3xl sm:text-4xl font-extrabold text-[#1E4E8C] tracking-tight leading-[1.15] mb-3">
              Watch Our{' '}
              <span className="text-[#4CAF50]">RA Licence Process</span>{' '}in Action
            </h2>
            <p className="text-slate-500 text-[16px] max-w-lg mx-auto">
              See our step-by-step RA Licence registration process — from documentation to BCAS approval — handled end-to-end by AJ Accounting Group experts.
            </p>
          </div>

          {/* YouTube embed */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(30,78,140,0.15)] border border-slate-200">
            {/* 16:9 aspect ratio wrapper */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/-wXqCqzHy0Y?rel=0&modestbranding=1"
                title="RA Licence Client Success Story – AJ Accounting Group"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              // https://share.google/Q7IlTOBy0cWA23NYq
              />
            </div>
          </div>

          {/* Below-video trust strip */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { value: '500+', label: 'RA Licences Processed' },
              { value: '30 Days', label: 'Average Completion Time' },
              { value: '100%', label: 'BCAS Compliance Rate' },
            ].map(stat => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center p-4 rounded-xl border border-slate-200 bg-slate-50"
              >
                <span className="text-2xl font-extrabold text-[#1E4E8C]">{stat.value}</span>
                <span className="text-[13px] text-slate-500 font-medium mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Overview + FAQ ── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E4E8C] mb-4">What is an RA Licence?</h2>
              <div className="prose max-w-none text-slate-600 text-[15px] leading-relaxed">
                <p>
                  A <strong>Regulated Agent (RA) Licence</strong> is a mandatory BCAS certification for all entities
                  that handle, screen, or tender air cargo in India. Under the Aircraft (Security) Rules, 2023,
                  operating as a regulated agent without a valid RA Licence is a legal offence.
                </p>
                <h3 className="text-[#1E4E8C] font-bold text-[17px] mt-5 mb-3">Why is RA Licence required?</h3>
                <ul className="space-y-2">
                  {[
                    'Mandatory for all air cargo handlers and freight forwarders in India',
                    'Required to legally tender cargo to airlines at Indian airports',
                    'Ensures compliance with ICAO and BCAS aviation security standards',
                    'Builds credibility with clients, airlines, and customs authorities',
                  ].map(pt => (
                    <li key={pt} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4CAF50] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ServiceFAQSection faqs={faqs} serviceName="RA Licence" />
          </div>

          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24" id="lead-form">
              <LeadForm serviceSlug="ra-license" serviceName="RA Licence Registration" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Why Choose Us ── */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-[#1E4E8C]/6 border border-[#1E4E8C]/15 rounded-full px-4 py-1.5 mb-5">
              <Users className="w-3.5 h-3.5 text-[#1E4E8C]" />
              <span className="text-[11px] font-bold text-[#1E4E8C] uppercase tracking-widest">The Smart Choice</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E4E8C] tracking-tight leading-[1.15] mb-4">
              Why Businesses Choose Our{' '}
              <span className="text-[#4CAF50]">RA Licence</span> Services
            </h2>
            <p className="text-slate-500 text-[16px] leading-relaxed">
              Over 500 businesses across India trust us for RA Licence registration, renewal, and compliance — because we deliver results, not just promises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {whyUs.map(item => (
              <div
                key={item.title}
                className="group bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-[#1E4E8C]/8 hover:-translate-y-1.5 hover:border-[#1E4E8C]/25 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#1E4E8C]/6 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1E4E8C] transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-[#1E4E8C] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-[17px] font-extrabold text-[#1E4E8C] mb-2 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-[13.5px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="#lead-form"
              className="inline-flex items-center gap-2 bg-[#4CAF50] hover:bg-[#43A047] text-white font-bold px-10 py-4 rounded-xl shadow-lg shadow-[#4CAF50]/20 hover:shadow-[#4CAF50]/30 hover:-translate-y-0.5 transition-all duration-300 group/btn"
            >
              Get Free RA Licence Consultation
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
            <p className="text-slate-400 text-[12px] mt-3">No commitment · 100% Confidential · Response in 15 minutes</p>
          </div>
        </div>
      </section>

    </div>
  );
}
