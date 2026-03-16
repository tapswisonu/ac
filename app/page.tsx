import React from 'react';
import Link from 'next/link';
import ServiceCard from '@/components/ui/ServiceCard';
import LeadForm from '@/components/forms/LeadForm';
import { ArrowRight, CheckCircle, Phone, Star, Zap, Shield, Globe } from 'lucide-react';

/* ─── Stats shown in the hero right panel ────────── */
const stats = [
  { label: "Companies Registered", value: "50,000+" },
  { label: "Trademarks Filed", value: "12,000+" },
  { label: "GST Registrations", value: "35,000+" },
  { label: "Happy Clients", value: "98,000+" },
];

const trustBadges = [
  "ISO 9001:2015 Certified",
  "Govt. of India Approved",
  "CA & CS Professionals",
];

const popularServices = [
  {
    title: "Private Limited Company",
    slug: "private-limited-company",
    description: "Register your startup as a Private Limited Company. Get CIN, DIN, PAN & TAN in 10-14 days.",
    features: ["Name Approval", "MOA & AOA Drafting", "DSC & DIN"],
  },
  {
    title: "GST Registration",
    slug: "gst-registration",
    description: "Expert assisted GST Registration complete with filing guidelines.",
    features: ["Document Verification", "Application Filing", "ARN Generation"],
  },
  {
    title: "Trademark Registration",
    slug: "trademark-registration",
    description: "Protect your brand identity from misuse with prompt Trademark Registration.",
    features: ["TM Search", "Application Filing", "Brand Protection"],
  },
  {
    title: "USA Company Incorporation",
    slug: "usa-company-registration",
    description: "Expand to the US. Delaware/Wyoming company setup made easy.",
    features: ["C-Corp / LLC Setup", "EIN Number", "Registered Agent"],
  },
];

export default function Home() {
  return (
    <div className="bg-white">

      {/* ─── HERO SECTION ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0f172a] min-h-[580px]">

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Gradient blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT: Headline + CTA */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                <Zap className="w-3.5 h-3.5" />
                India&apos;s #1 Business Compliance Platform
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight">
                India&apos;s Smart{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Business Compliance
                </span>{" "}
                Platform
              </h1>

              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-lg">
                Register companies, obtain licenses, file GST returns, and manage compliance
                — all in one powerful platform backed by CA, CS & legal experts.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mt-6">
                {trustBadges.map((badge, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                    <CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services/private-limited-company"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full font-bold text-sm shadow-lg shadow-orange-500/30 hover:from-orange-600 hover:to-amber-600 transition-all hover:scale-105"
                >
                  Start Business
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:9643862867"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/20 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Talk to Expert
                </a>
              </div>
            </div>

            {/* RIGHT: Dashboard card */}
            <div className="mx-auto w-full max-w-md">
              {/* Lead form card */}
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-2xl blur opacity-25" />
                <div className="relative bg-[#1e293b] border border-white/10 rounded-2xl p-6 shadow-2xl">
                  <LeadForm serviceName="Starting a Business" serviceSlug="general-startup" />

                  {/* Stat pills */}
                  <div className="grid grid-cols-2 gap-3 mt-5">
                    {stats.map((s, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                        <div className="text-orange-400 font-extrabold text-lg leading-none">{s.value}</div>
                        <div className="text-slate-400 text-xs mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── POPULAR SERVICES ─────────────────────────────── */}
      <section id="popular-services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4">
              <Star className="w-3.5 h-3.5" />
              Most Popular
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Popular Services
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Handpicked services to help you start, manage, and grow your business seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularServices.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/startup-services" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ───────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-center">
            <div className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Shield className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Domain Experts</h3>
              <p className="text-slate-600 leading-relaxed">Our network of CAs, CSs, and Lawyers ensures perfection in every step.</p>
            </div>
            <div className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Zap className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Lightning Fast</h3>
              <p className="text-slate-600 leading-relaxed">Tech-enabled processes to deliver your registrations in record time.</p>
            </div>
            <div className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Globe className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Pan-India & Global</h3>
              <p className="text-slate-600 leading-relaxed">Serving clients across all Indian states and 20+ international markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA CONVERSION BAR ──────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold px-4 py-1.5 rounded-full mb-6">
            <Zap className="w-3.5 h-3.5" />
            Limited Time Offer — Code: INDT20
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Ready to start your business?
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
            Get expert assistance today and launch your dream business faster than ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-4 rounded-full font-bold text-base shadow-lg shadow-orange-500/30 hover:from-orange-600 hover:to-amber-600 transition-all hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services/private-limited-company"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-semibold text-base hover:bg-white/20 transition-all"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
