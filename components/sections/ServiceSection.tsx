import React from 'react';
import Link from 'next/link';
import {
  Building2, FileText, Receipt, BookOpen, Scale,
  ArrowRight, CheckCircle2, ChevronRight, TrendingUp
} from 'lucide-react';

const services = [
  {
    id: 'company-registration',
    keyword: 'Company Registration Services',
    title: 'Company Registration',
    seoDesc:
      'Register your Private Limited, LLP, or OPC with expert CA guidance, DSC, DIN, and government-approved incorporation certificates — delivered in days.',
    highlights: ['Pvt Ltd / LLP / OPC', 'DSC & DIN Included', '7–10 Day Delivery'],
    icon: Building2,
    href: '/services/private-limited-company',
    badge: 'Most Popular',
    featured: true,
  },
  {
    id: 'roc-filing',
    keyword: 'ROC / MCA Filing Services',
    title: 'ROC Filing',
    seoDesc:
      'Stay 100% compliant with ROC / MCA annual filing requirements. We handle AOC-4, MGT-7, director KYC, and all MCA secretarial filings on time.',
    highlights: ['AOC-4 & MGT-7', 'Director KYC', 'Penalty-Free Filing'],
    icon: FileText,
    href: '/services/company-compliance',
    badge: null,
    featured: false,
  },
  {
    id: 'gst-filing',
    keyword: 'GST Registration & Filing Services',
    title: 'GST Registration & Filing',
    seoDesc:
      'Get your GSTIN fast and ensure timely GSTR-1, GSTR-3B, and annual GSTR-9 filings. Avoid notices, penalties, and compliance gaps with our expert GST team.',
    highlights: ['GSTIN in 3–5 Days', 'GSTR-1, 3B, 9', 'Notice Reply Support'],
    icon: Receipt,
    href: '/services/gst-registration',
    badge: 'High Demand',
    featured: false,
  },
  {
    id: 'income-tax',
    keyword: 'Income Tax Filing Services',
    title: 'Income Tax Filing',
    seoDesc:
      'Accurate ITR filing for individuals, companies, LLPs, and trusts by qualified CAs. We handle TDS returns, Form 15CA, advance tax, and IT notice replies.',
    highlights: ['All ITR Forms', 'TDS & Advance Tax', 'IT Notice Handling'],
    icon: BookOpen,
    href: '/services/itr-filing',
    badge: null,
    featured: false,
  },
  {
    id: 'legal-compliance',
    keyword: 'Legal Compliance Services',
    title: 'Legal Compliance',
    seoDesc:
      'End-to-end annual legal compliance for companies and LLPs — board meetings, statutory registers, secretarial audit, and labour law compliance across India.',
    highlights: ['Board Meeting Support', 'Secretarial Audit', 'Labour Law Compliance'],
    icon: Scale,
    href: '/services/business-compliance',
    badge: null,
    featured: false,
  },
];

export default function ServiceSection() {
  return (
    <section id="services" className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1E4E8C]/6 border border-[#1E4E8C]/15 rounded-full px-4 py-1.5 mb-5">
            <TrendingUp className="w-3.5 h-3.5 text-[#1E4E8C]" />
            <span className="text-[11px] font-bold text-[#1E4E8C] uppercase tracking-widest">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1E4E8C] tracking-tight leading-[1.15] mb-4">
            Compliance Services for<br className="hidden sm:block" /> Indian Businesses
          </h2>
          <p className="text-slate-500 text-[16px] leading-relaxed max-w-xl mx-auto">
            From company formation to annual ROC filings, GST returns, and income tax — one platform handles all your corporate compliance needs.
          </p>
        </div>

        {/* ── Services Grid ── */}
        {/* Top row: featured card full-width on md+, plus 2 cards */}
        <div className="space-y-6">

          {/* Row 1: Featured + 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((svc) => (
              <ServiceCard key={svc.id} svc={svc} />
            ))}
          </div>

          {/* Row 2: Remaining 2 + CTA banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(3).map((svc) => (
              <ServiceCard key={svc.id} svc={svc} />
            ))}

            {/* View All CTA Card */}
            <div className="relative bg-[#1E4E8C] rounded-2xl p-8 flex flex-col justify-between overflow-hidden border border-[#1a4279]">
              {/* Subtle pattern */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)',
                  backgroundSize: '18px 18px',
                }}
              />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-6 h-6 text-[#4CAF50]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">100+ Services Available</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Trademark, FSSAI, ISO, IEC, PF, ESIC, payroll, and more — all under one roof.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-white text-[#1E4E8C] font-bold text-sm px-5 py-3 rounded-xl hover:bg-slate-100 transition-all group/link"
                >
                  Browse All Services
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Trust Strip ── */}
        <div className="mt-14 pt-10 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: '1,000+', label: 'Companies Registered' },
            { value: 'Expert CAs', label: 'Dedicated Professionals' },
            { value: 'Pan-India', label: 'Nationwide Service' },
            { value: 'ISO Certified', label: 'ISO 9001:2015 Quality' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-extrabold text-[#1E4E8C] mb-1">{stat.value}</p>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Individual Service Card ── */
function ServiceCard({ svc }: { svc: typeof services[0] }) {
  return (
    <article
      className={`group relative bg-white rounded-2xl p-7 flex flex-col border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#1E4E8C]/8 ${
        svc.featured
          ? 'border-[#4CAF50] shadow-[0_2px_20px_rgba(76,175,80,0.12)]'
          : 'border-slate-200 shadow-sm hover:border-[#1E4E8C]/30'
      }`}
    >
      {/* Green top accent bar on featured */}
      {svc.featured && (
        <div className="absolute top-0 left-6 right-6 h-[3px] bg-[#4CAF50] rounded-b-full" />
      )}

      {/* Badge */}
      {svc.badge && (
        <div
          className={`absolute top-5 right-5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
            svc.featured
              ? 'bg-[#4CAF50]/10 text-[#4CAF50] border border-[#4CAF50]/30'
              : 'bg-[#1E4E8C]/8 text-[#1E4E8C] border border-[#1E4E8C]/15'
          }`}
        >
          {svc.badge}
        </div>
      )}

      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
          svc.featured
            ? 'bg-[#4CAF50]/10 text-[#4CAF50] group-hover:bg-[#4CAF50] group-hover:text-white'
            : 'bg-[#1E4E8C]/6 text-[#1E4E8C] group-hover:bg-[#1E4E8C] group-hover:text-white'
        }`}
      >
        <svc.icon className="w-7 h-7" />
      </div>

      {/* SEO Keyword Title */}
      <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
        {svc.keyword}
      </h2>

      {/* Display Title */}
      <h3 className="text-[19px] font-extrabold text-[#1E4E8C] mb-3 tracking-tight pr-10 group-hover:text-[#163665] transition-colors">
        {svc.title}
      </h3>

      {/* SEO Description */}
      <p className="text-slate-500 text-[13.5px] leading-relaxed mb-5 flex-grow">
        {svc.seoDesc}
      </p>

      {/* Highlights */}
      <ul className="space-y-1.5 mb-6">
        {svc.highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-[13px] text-slate-600 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#4CAF50] shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={svc.href}
        className={`mt-auto inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 group/cta ${
          svc.featured
            ? 'bg-[#4CAF50] hover:bg-[#43A047] text-white shadow-[0_4px_14px_rgba(76,175,80,0.25)] hover:shadow-[0_6px_18px_rgba(76,175,80,0.35)] hover:-translate-y-0.5'
            : 'border border-[#1E4E8C]/25 text-[#1E4E8C] hover:bg-[#1E4E8C] hover:text-white hover:border-[#1E4E8C]'
        }`}
      >
        Get Started
        <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" />
      </Link>
    </article>
  );
}
