'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShieldCheck, CheckCircle2, ArrowRight, Phone,
  Clock, Award, FileText, Users, Zap
} from 'lucide-react';

const highlights = [
  { icon: CheckCircle2, text: 'BCAS Approved Process' },
  { icon: Clock,        text: 'Fast 30-Day Processing' },
  { icon: Award,        text: 'RA License Experts' },
  { icon: Users,        text: '500+ RA Clients Served' },
];

const steps = [
  { label: 'Document Submission',  desc: 'Share required docs with our team' },
  { label: 'BCAS Application',    desc: 'We file with the aviation authority' },
  { label: 'Inspection Support',   desc: 'CA guidance throughout audit' },
  { label: 'Licence Granted',      desc: 'Receive your RA certification' },
];

export default function RALicenceHeroSection() {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setPhone(''); }, 4000);
  };

  return (
    <section
      id="ra-licence-hero"
      className="relative overflow-hidden bg-gradient-to-br from-[#0e2a50] via-[#1E4E8C] to-[#0a1e3d]"
      aria-label="RA Licence Registration Services India"
    >
      {/* Dot grid bg */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(76,175,80,0.4) 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Gold ambient glow — top left */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 pointer-events-none bg-[#4CAF50]" />
      {/* Blue ambient glow — bottom right */}
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full blur-[120px] opacity-15 pointer-events-none bg-[#0a1e3d]" />

      {/* Gold top border accent */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#4CAF50] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Main copy ── */}
          <div>
            {/* Priority badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#4CAF50]/15 border border-[#4CAF50]/35 rounded-full px-4 py-1.5 mb-8"
            >
              <Zap className="w-3.5 h-3.5 text-[#4CAF50]" />
              <span className="text-xs font-bold text-[#4CAF50] uppercase tracking-widest">
                #1 Priority Service · Government Approved
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.1] tracking-tight text-white mb-5"
            >
              Get Your{' '}
              <span className="text-[#4CAF50]">RA Licence</span>
              <br />
              Quickly &amp; Hassle-Free
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-white/65 text-[17px] leading-relaxed max-w-lg mb-8"
            >
              Government-approved process with expert CA support. We handle every step of your 
              <strong className="text-white"> RA Licence in India</strong> — from documentation to BCAS inspection.
            </motion.p>

            {/* Highlights row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="grid grid-cols-2 gap-3 mb-10"
            >
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-yellow-400/15 border border-yellow-400/25 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-yellow-400" aria-hidden="true" />
                  </div>
                  <span className="text-white/75 text-[13px] font-medium">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/services/ra-license"
                className="inline-flex items-center gap-2 bg-[#4CAF50] hover:bg-[#43A047] text-white font-extrabold text-[15px] px-7 py-3.5 rounded-xl transition-all duration-300 shadow-[0_8px_32px_rgba(76,175,80,0.35)] hover:shadow-[0_12px_40px_rgba(76,175,80,0.5)] hover:-translate-y-0.5 group/cta"
                aria-label="Apply Now for RA Licence Registration"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="tel:+919643862867"
                className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 hover:bg-white/8 font-semibold text-[14px] px-6 py-3.5 rounded-xl transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Expert
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: Process steps + mini form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="flex flex-col gap-5"
          >
            {/* Process card */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-5">
                <ShieldCheck className="w-5 h-5 text-yellow-400" />
                <h2 className="text-white font-bold text-[15px] tracking-tight">How RA Licence Works</h2>
              </div>
              <ol className="space-y-4" aria-label="RA Licence process steps">
                {steps.map((step, i) => (
                  <li key={step.label} className="flex items-start gap-3">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[11px] font-black mt-0.5"
                      style={{ background: 'rgba(250,204,21,0.15)', color: '#facc15', border: '1px solid rgba(250,204,21,0.3)' }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-white font-semibold text-[13px]">{step.label}</p>
                      <p className="text-white/45 text-[12px]">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Quick callback form */}
            <div className="bg-white/[0.04] border border-yellow-400/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1">
                <FileText className="w-4 h-4 text-[#4CAF50]" />
                <h3 className="text-white font-bold text-[14px]">Get a Free RA Licence Consultation</h3>
              </div>
              <p className="text-white/45 text-[12px] mb-4">Expert calls back within 15 minutes</p>

              {submitted ? (
                <div className="flex items-center gap-2 py-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-300 font-semibold text-[14px]">Request received! We&apos;ll call you shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2" aria-label="RA Licence callback request">
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    aria-label="Your phone number for RA Licence consultation"
                    className="flex-1 px-4 py-2.5 bg-white/8 border border-white/15 rounded-xl text-white placeholder-white/30 text-[13px] focus:outline-none focus:border-[#4CAF50]/60 focus:ring-1 focus:ring-[#4CAF50]/30 transition-all"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#4CAF50] hover:bg-[#43A047] text-white font-bold text-[13px] rounded-xl transition-all duration-200 hover:-translate-y-0.5 shrink-0"
                  >
                    Call Me
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom keyword strip (SEO) */}
        <div className="mt-12 pt-8 border-t border-white/8 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {[
            'RA Licence India', 'Regulated Agent Registration', 'BCAS Licence',
            'Aviation Security Compliance', 'RA Licence Renewal',
          ].map(kw => (
            <span key={kw} className="text-white/25 text-[11px] font-medium">{kw}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
