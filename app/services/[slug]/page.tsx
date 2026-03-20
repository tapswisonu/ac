import React from 'react';
import ServiceFAQSection from '@/components/sections/ServiceFAQSection';
import LeadForm from '@/components/forms/LeadForm';
import {
  CheckCircle2, ShieldCheck, Clock, Users, Award,
  FileText, Headphones, TrendingUp, ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const dynamic = 'force-dynamic';

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = params.slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  return constructMetadata({
    title: `${title} Services in India`,
    description: `Expert ${title} services in India — handled by qualified CAs and CSs. Fast, transparent, and 100% government-compliant.`,
    url: `/services/${params.slug}`,
  });
}

/* ── Why Choose Us feature cards ── */
const whyUs = [
  {
    icon: ShieldCheck,
    title: 'Expert CA & CS Team',
    desc: 'Our qualified Chartered Accountants and Company Secretaries have 5+ years of experience handling complex compliance and registration cases across India.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    desc: 'We process registrations and filings in the shortest possible time — keeping you informed at every step with real-time status updates.',
  },
  {
    icon: FileText,
    title: 'End-to-End Documentation',
    desc: 'We handle all paperwork, government forms, DSC, DIN, and MCA filings — so you just share the documents and we take care of the rest.',
  },
  {
    icon: TrendingUp,
    title: 'Transparent Pricing',
    desc: 'Fixed, all-inclusive pricing with no hidden fees. Government charges are passed at actuals. You always know exactly what you\'re paying for.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    desc: 'A dedicated compliance manager is assigned to your case from start to finish — reachable by phone, WhatsApp, or email at any time.',
  },
  {
    icon: Award,
    title: 'ISO 9001:2015 Certified',
    desc: 'Our processes follow international quality standards. We\'re ISO 9001:2015 certified with a proven track record of serving 1,000+ businesses pan-India.',
  },
];

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const serviceName = params.slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const dummyFaqs = [
    {
      question: `What documents are required for ${serviceName} in India?`,
      answer: `For ${serviceName}, you typically need PAN card, Aadhaar card, passport-size photograph, address proof (bank statement or utility bill), and registered office proof (NOC + electricity bill). Our team sends a tailored document checklist after your free consultation so you share only what is needed.`,
    },
    {
      question: `How long does ${serviceName} take in India?`,
      answer: `The timeline for ${serviceName} depends on the government authority's processing speed. On average: company registration takes 7–10 working days, GST registration 3–5 days, trademark filing 18–24 months for final approval. We file on Day 1 and follow up proactively — ensuring zero delays from our end.`,
    },
    {
      question: `What are the penalties for not completing ${serviceName} on time?`,
      answer: `Delaying or missing ${serviceName.toLowerCase()} compliance can result in MCA penalties of ₹100–₹500 per day, GST late fees of ₹50/day per return, director disqualification, and in severe cases, company strike-off under Section 248 of the Companies Act. Early filing protects your business and directors.`,
    },
    {
      question: `Can I do ${serviceName} myself without a CA or CS?`,
      answer: `While technically possible, ${serviceName.toLowerCase()} involves government portals (MCA21, GSTN, IP India), specific forms (SPICe+, RUN, GSTR-1, Form-8), and legal nuances that are easy to get wrong. Errors cause rejection delays and refiling fees. A qualified CA or CS ensures accurate, penalty-free filing the first time.`,
    },
    {
      question: `Is ${serviceName} mandatory for all businesses in India?`,
      answer: `Applicability depends on your business type and turnover. Company registration is mandatory for operating as a legal entity. GST registration is required above ₹40 lakh (goods) or ₹20 lakh (services) turnover. ROC annual filings are mandatory for all registered companies regardless of turnover or activity.`,
    },
    {
      question: `What compliance is required after ${serviceName} is complete?`,
      answer: `After ${serviceName.toLowerCase()}, ongoing compliance includes annual ROC filings (AOC-4, MGT-7), GST return filing (GSTR-1, GSTR-3B monthly, GSTR-9 annually), income tax return (ITR), director KYC (DIR-3 KYC), and board meeting minutes. AJ Accounting offers annual compliance packages to cover all these obligations.`,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* ── 1. Hero ── */}
      <section className="relative bg-[#1E4E8C] pt-28 pb-16 overflow-hidden">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="absolute -top-40 -left-40 w-[460px] h-[460px] bg-[#112a50] rounded-full blur-[130px] opacity-60 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/50 font-medium mb-6">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white/80 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/70">{serviceName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">
            {/* Left: content */}
            <div className="text-white">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.12] tracking-tight mb-5">
                {serviceName}{' '}
                <span className="text-[#4CAF50]">Services</span> in India
              </h1>
              <p className="text-white/75 text-lg leading-relaxed max-w-lg mb-8">
                Expert-led {serviceName.toLowerCase()} services handled by qualified CAs and CSs.
                Fast turnaround, transparent pricing, and 100% government-compliant filings.
              </p>
              <div className="flex flex-wrap gap-3">
                {['100% Online', '7–10 Day Turnaround', 'Expert CA/CS', 'Pan-India Service'].map((tag) => (
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

            {/* Right: sticky form */}
            <div className="lg:mt-0">
              <LeadForm serviceSlug={params.slug} serviceName={serviceName} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Main Content ── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left: Overview + FAQ */}
          <div className="lg:col-span-2 space-y-8">

            {/* Overview */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E4E8C] mb-4">Overview</h2>
              <div className="prose max-w-none text-slate-600 text-[15px] leading-relaxed">
                <p>
                  {serviceName} is an essential compliance step for businesses operating in India.
                  The process involves detailed documentation, government filing with the relevant
                  authority, and constant follow-up. Our team of experts ensures an error-free,
                  penalty-free filing experience.
                </p>
                <h3 className="text-[#1E4E8C] font-bold text-[17px] mt-5 mb-3">Why is it required?</h3>
                <ul className="space-y-2">
                  {[
                    'Grants legal recognition to your entity or filing',
                    'Protects your business from MCA/GST/IT penalties',
                    'Ensures compliance with applicable Indian laws and regulations',
                    'Builds trust with investors, banks, and government authorities',
                  ].map((pt) => (
                    <li key={pt} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4CAF50] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQ */}
            <ServiceFAQSection faqs={dummyFaqs} serviceName={serviceName} />
          </div>

          {/* Right sidebar: repeat form (sticky) */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24" id="lead-form">
              <LeadForm serviceSlug={params.slug} serviceName={serviceName} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Why Choose Us ── */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-[#1E4E8C]/6 border border-[#1E4E8C]/15 rounded-full px-4 py-1.5 mb-5">
              <Users className="w-3.5 h-3.5 text-[#1E4E8C]" />
              <span className="text-[11px] font-bold text-[#1E4E8C] uppercase tracking-widest">
                The Smart Choice
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E4E8C] tracking-tight leading-[1.15] mb-4">
              Why Businesses Choose Our{' '}
              <span className="text-[#4CAF50]">{serviceName}</span> Services
            </h2>
            <p className="text-slate-500 text-[16px] leading-relaxed">
              Over 1,000 businesses across India trust us for compliance, registration, and legal filings
              — because we deliver results, not just promises.
            </p>
          </div>

          {/* Feature cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="group bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-[#1E4E8C]/8 hover:-translate-y-1.5 hover:border-[#1E4E8C]/25 transition-all duration-300"
              >
                <div className="w-13 h-13 w-14 h-14 bg-[#1E4E8C]/6 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1E4E8C] transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-[#1E4E8C] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-[17px] font-extrabold text-[#1E4E8C] mb-2 tracking-tight group-hover:text-[#163665] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-[13.5px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="#lead-form"
              className="inline-flex items-center gap-2 bg-[#4CAF50] hover:bg-[#43A047] text-white font-bold px-10 py-4 rounded-xl shadow-lg shadow-[#4CAF50]/20 hover:shadow-[#4CAF50]/30 hover:-translate-y-0.5 transition-all duration-300 group/btn"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
            <p className="text-slate-400 text-[12px] mt-3">
              No commitment · 100% Confidential · Response in 15 minutes
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
