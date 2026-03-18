"use client";

import React from 'react';
import Image from 'next/image';
import { 
  ArrowRight, Phone, CheckCircle, 
  Settings, User, Lock, Mail, ChevronDown, Check,
  Info, AlertTriangle, XCircle, LayoutGrid,
  Layers, Plus, Minus, Search, Home, FileText
} from 'lucide-react';
import { FaFileArchive, FaUserTie, FaBuilding, FaHandshake, FaStar } from 'react-icons/fa';

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans text-gray-900 border-t-8 border-primary-600">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 p-6 sticky top-0 md:h-screen overflow-y-auto z-10 hidden lg:block shadow-sm">
        <h2 className="text-xl font-bold mb-8 text-primary-900 flex items-center gap-2">
          <Layers className="text-primary-500" /> Design System
        </h2>
        <nav className="space-y-1">
          {[
            "Brand Overview", "Color Palette", "Typography", "Buttons", 
            "Card Design", "Form Elements", "Iconography", "Section Style Blocks",
            "Spacing & Layout", "Effects & UI Rules"
          ].map((item, i) => (
            <a 
              key={i} 
              href={`#section-${i+1}`}
              className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors"
            >
              {i+1}. {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 lg:p-20 overflow-y-auto bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto space-y-24">
          
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">AJ Legal Consultant <span className="text-primary-600">UI System</span></h1>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
              A comprehensive guide to the visual identity, UI components, and design rules used to build our trustworthy, premium corporate platform.
            </p>
          </header>

          {/* Section 1: Brand Overview */}
          <section id="section-1" className="scroll-mt-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold text-sm">1</span>
              <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Brand Overview</h2>
            </div>
            
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-gray-50 p-8 rounded-xl flex items-center justify-center border border-gray-100 h-64">
                   {/* Logo Placeholder - assuming /LOGO.png exists */}
                   <Image src="/LOGO.png" alt="AJ Legal Consultant Logo" width={300} height={100} className="object-contain" />
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-primary-600 uppercase tracking-wider mb-2">Short Intro</h3>
                    <p className="text-gray-700 leading-relaxed">
                      AJ Legal Consultant provides a premium, all-in-one corporate platform for Indian businesses. We simplify complex compliance, registration, and tax filing processes with a window of total compliance.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary-600 uppercase tracking-wider mb-2">Tagline</h3>
                    <p className="text-xl font-semibold text-gray-900 italic">&quot;One Window Total Compliance&quot;</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary-600 uppercase tracking-wider mb-2">Visual Identity Mood</h3>
                    <div className="flex gap-2 flex-wrap">
                      {["Premium", "Trustworthy", "Clean", "Corporate", "Modern SaaS"].map(tag => (
                        <span key={tag} className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Color Palette */}
          <section id="section-2" className="scroll-mt-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold text-sm">2</span>
              <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Color Palette</h2>
            </div>
            
            <div className="space-y-10">
              {/* Primary & Secondary */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ColorCard name="Primary (Brand Blue)" hex="#034697" tailwind="bg-primary" textClass="text-white" usage="Primary Buttons, Headers, Active States" />
                <ColorCard name="Secondary (Brand Orange)" hex="#f07025" tailwind="bg-secondary" textClass="text-white" usage="Secondary elements, highlights" />
                <ColorCard name="Accent (Dark Green)" hex="#2E7D32" tailwind="bg-accent" textClass="text-white" usage="Hover states for secondary, deep accents" />
              </div>

              {/* Backgrounds */}
              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-4 border-b pb-2">Background & Surface Colors</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                  <ColorSwatch tailwind="bg-white" name="Surface (bg-white)" hex="#FFFFFF" border />
                  <ColorSwatch tailwind="bg-gray-50" name="App Bg (bg-gray-50)" hex="#F9FAFB" border />
                  <ColorSwatch tailwind="bg-primary-50" name="Brand Subdued (bg-primary-50)" hex="#EEF4FF" border />
                  <ColorSwatch tailwind="bg-gray-900" name="Dark Surface (bg-gray-900)" hex="#111827" textClass="text-white" />
                  <ColorSwatch tailwind="bg-slate-800" name="Dark Alt (bg-slate-800)" hex="#1E293B" textClass="text-white" />
                </div>
              </div>

              {/* Text Colors */}
              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-4 border-b pb-2">Text & Border Colors</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                  <ColorSwatch tailwind="bg-gray-900" name="Heading (text-gray-900)" hex="#111827" textClass="text-white" />
                  <ColorSwatch tailwind="bg-gray-600" name="Body (text-gray-600)" hex="#4B5563" textClass="text-white" />
                  <ColorSwatch tailwind="bg-gray-400" name="Muted (text-gray-400)" hex="#9CA3AF" textClass="text-white" />
                  <ColorSwatch tailwind="bg-gray-200" name="Border (border-gray-200)" hex="#E5E7EB" border />
                  <ColorSwatch tailwind="bg-primary-600" name="Primary Text (text-primary-600)" hex="#4351E7" textClass="text-white" />
                </div>
              </div>

              {/* Semantic Colors */}
              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-4 border-b pb-2">Semantic Colors (Status)</h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  <ColorCard name="Success" hex="#22C55E" tailwind="bg-green-500" textClass="text-white" usage="Success messages, completed states" />
                  <ColorCard name="Warning" hex="#ec5c0e" tailwind="bg-orange-500" textClass="text-white" usage="Warnings, pending states" />
                  <ColorCard name="Error" hex="#EF4444" tailwind="bg-red-500" textClass="text-white" usage="Errors, destructive actions" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Typography */}
          <section id="section-3" className="scroll-mt-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold text-sm">3</span>
              <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Typography</h2>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-4 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Style</th>
                    <th className="py-4 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Example</th>
                    <th className="py-4 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Specs (Tailwind)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <TypographyRow 
                    name="Heading 1" 
                    example={<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Premium Corporate Solutions</h1>}
                    specs="text-5xl, font-extrabold, tracking-tight"
                  />
                  <TypographyRow 
                    name="Heading 2" 
                    example={<h2 className="text-3xl font-bold tracking-tight text-gray-900">Simplify Your Compliance</h2>}
                    specs="text-3xl, font-bold, tracking-tight"
                  />
                  <TypographyRow 
                    name="Heading 3" 
                    example={<h3 className="text-xl font-semibold text-gray-900">Company Registration Services</h3>}
                    specs="text-xl, font-semibold"
                  />
                  <TypographyRow 
                    name="Body Text" 
                    example={<p className="text-base text-gray-600 leading-relaxed">AJ Legal Consultant provides top-tier business compliance services tailored to help Indian startups grow smoothly and securely.</p>}
                    specs="text-base, leading-relaxed, text-gray-600"
                  />
                  <TypographyRow 
                    name="Small Text" 
                    example={<p className="text-sm text-gray-500">By continuing, you agree to our Terms of Service & Privacy Policy.</p>}
                    specs="text-sm, text-gray-500"
                  />
                  <TypographyRow 
                    name="Button Text" 
                    example={<span className="text-sm font-semibold uppercase tracking-wider">Start Your Business</span>}
                    specs="text-sm, font-semibold, uppercase, tracking-wider"
                  />
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Buttons */}
          <section id="section-4" className="scroll-mt-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold text-sm">4</span>
              <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Buttons</h2>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
               {/* Decorative background element showing glassmorphism capability */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50"></div>
               
               <div className="relative space-y-10">
                 <ButtonStateRow title="Primary Button" description="Main call-to-actions, conversions">
                   <button className="px-6 py-3 bg-primary text-white rounded-xl font-semibold text-sm shadow-md shadow-primary-500/20 transition-all">Default</button>
                   <button className="px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-primary-500/30 transform scale-105 transition-all">Hover</button>
                   <button className="px-6 py-3 bg-primary-800 text-white rounded-xl font-semibold text-sm shadow-inner transition-all">Active</button>
                   <button className="px-6 py-3 bg-gray-200 text-gray-400 rounded-xl font-semibold text-sm cursor-not-allowed">Disabled</button>
                 </ButtonStateRow>

                 <ButtonStateRow title="Secondary Button" description="Alternative actions, secondary paths">
                   <button className="px-6 py-3 bg-white border border-gray-200 text-gray-800 rounded-xl font-semibold text-sm shadow-sm transition-all hover:bg-gray-50 hover:border-gray-300">Default</button>
                   <button className="px-6 py-3 bg-gray-50 border border-gray-300 text-gray-800 rounded-xl font-semibold text-sm shadow outline-none ring-2 ring-gray-100">Hover/Focus</button>
                   <button className="px-6 py-3 bg-gray-100 border border-gray-300 text-gray-800 rounded-xl font-semibold text-sm shadow-inner">Active</button>
                   <button className="px-6 py-3 bg-white border border-gray-100 text-gray-300 rounded-xl font-semibold text-sm cursor-not-allowed">Disabled</button>
                 </ButtonStateRow>

                 <ButtonStateRow title="Ghost Button" description="Less prominent actions, text links">
                   <button className="px-6 py-3 bg-transparent text-primary-600 rounded-xl font-semibold text-sm transition-all hover:bg-primary-50">Default</button>
                   <button className="px-6 py-3 bg-primary-50 text-primary-700 rounded-xl font-semibold text-sm transition-all">Hover</button>
                   <button className="px-6 py-3 bg-primary-100 text-primary-800 rounded-xl font-semibold text-sm transition-all">Active</button>
                   <button className="px-6 py-3 bg-transparent text-gray-300 rounded-xl font-semibold text-sm cursor-not-allowed">Disabled</button>
                 </ButtonStateRow>

                 <ButtonStateRow title="Icon Button" description="For actions best represented visually">
                   <button className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-xl shadow-md shadow-primary-500/20 transition-all hover:scale-105 hover:bg-primary-600"><ArrowRight className="w-5 h-5" /></button>
                   <button className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 text-gray-600 rounded-full shadow-sm transition-all hover:bg-gray-50 hover:text-primary-600"><Settings className="w-5 h-5" /></button>
                   <button className="w-12 h-12 flex items-center justify-center bg-primary-50 text-primary-600 rounded-full transition-all hover:bg-primary-100"><Phone className="w-5 h-5" /></button>
                 </ButtonStateRow>
               </div>
            </div>
          </section>

          {/* Section 5: Card Design */}
          <section id="section-5" className="scroll-mt-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold text-sm">5</span>
              <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Card Design</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 group flex flex-col h-full cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110"></div>
                <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">GST Compliance</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow relative z-10">Complete GST registration, monthly filings, and compliance management for your business without hassle.</p>
                <div className="flex items-center text-sm font-semibold text-primary-600 mt-auto relative z-10 group-hover:text-primary-800">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Pricing/Premium Feature Card */}
              <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-xl flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-blue-300"></div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-300 bg-primary-500/10 border border-primary-500/20 px-3 py-1 rounded-full w-fit mb-6">
                  <FaStar className="w-3 h-3" /> Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Premium Setup</h3>
                <p className="text-gray-400 text-sm mb-6">End-to-end legal compliance for funded startups.</p>
                <div className="space-y-3 flex-grow mb-8">
                  {["Incorporation Certificate", "Director PIN", "GST Registration", "TDS Filing Setup"].map(ft => (
                    <div key={ft} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{ft}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-3.5 bg-primary text-white rounded-xl font-semibold text-sm shadow-md hover:bg-primary-600 transition-colors">Select Plan</button>
              </div>

              {/* Stats/Testimonial Card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col h-full relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <FaStar key={i} className="w-4 h-4 text-orange-400" />)}
                </div>
                <p className="text-gray-700 italic text-sm leading-relaxed mb-6 flex-grow">&quot;AJ Legal Consultant made our company registration a breeze. Their online platform is sleek, and the team is highly professional. Everything was done 4 days earlier than promised!&quot;</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold border border-primary-200">
                    S
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Siddarth Roy</h4>
                    <p className="text-xs text-gray-500">Founder, TechSpace India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-primary"></div> Border Radius: <code className="bg-white px-2 py-1 rounded border border-gray-200">rounded-2xl (1rem)</code></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full border border-gray-300"></div> Border: <code className="bg-white px-2 py-1 rounded border border-gray-200">border-gray-100</code></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-gray-200 shadow-md"></div> Shadow: <code className="bg-white px-2 py-1 rounded border border-gray-200">shadow-sm</code> (default) to <code className="bg-white px-2 py-1 rounded border border-gray-200">shadow-xl shadow-primary-500/5</code> (hover)</div>
            </div>
          </section>

          {/* Section 6: Form Elements */}
          <section id="section-6" className="scroll-mt-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold text-sm">6</span>
              <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Form Elements</h2>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm max-w-3xl">
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Default Input */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input type="text" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all outline-none text-gray-900 placeholder-gray-400" placeholder="John Doe" />
                    </div>
                  </div>
                  
                  {/* Focus/Active Input Simulation */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-primary-500" />
                      </div>
                      <input type="email" className="w-full pl-10 pr-4 py-3 bg-white border border-primary-500 ring-2 ring-primary-500/20 rounded-xl text-sm transition-all outline-none text-gray-900" defaultValue="johndoe@example.com" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Error Input */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-red-500" />
                      </div>
                      <input type="tel" className="w-full pl-10 pr-10 py-3 bg-white border border-red-500 ring-2 ring-red-500/10 rounded-xl text-sm transition-all outline-none text-gray-900" defaultValue="(555)" />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                      </div>
                    </div>
                    <p className="text-xs text-red-500 mt-1 font-medium">Please enter a valid phone number</p>
                  </div>

                  {/* Dropdown Select */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Service Required</label>
                    <div className="relative">
                      <select className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all outline-none text-gray-900 appearance-none">
                        <option>GST Registration</option>
                        <option>Company Registration</option>
                        <option>Trademark</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Textarea */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Additional Details</label>
                  <textarea rows={3} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all outline-none text-gray-900 placeholder-gray-400 resize-none" placeholder="Describe your business needs..."></textarea>
                </div>

                {/* Checkbox & Radio */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Checkboxes</h4>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 rounded border-2 border-primary bg-primary text-white flex items-center justify-center shadow-sm">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900">Subscribe to newsletter</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 rounded border-2 border-gray-300 bg-white group-hover:border-primary-400 transition-colors"></div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900">I agree to Terms & Conditions</span>
                    </label>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Radio Buttons</h4>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 rounded-full border-2 border-primary bg-white flex items-center justify-center shadow-sm">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900">Individual Proprietor</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 bg-white group-hover:border-primary-400 transition-colors"></div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900">Private Limited</span>
                    </label>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-end">
                   <button className="px-8 py-3 bg-primary text-white rounded-xl font-semibold text-sm shadow-md shadow-primary-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all">Submit Details</button>
                </div>
              </form>
            </div>
          </section>

          {/* Section 7: Iconography */}
          <section id="section-7" className="scroll-mt-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold text-sm">7</span>
              <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Iconography</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2"><LayoutGrid className="text-primary" /> Core UI Icons (Line)</h3>
                <div className="flex flex-wrap gap-4">
                   {[Home, Search, Plus, Minus, User, Settings, Lock, CheckCircle, Info, ArrowRight, XCircle].map((Icon, i) => (
                     <div key={i} className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors cursor-pointer">
                       <Icon className="w-5 h-5" />
                     </div>
                   ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2"><FaHandshake className="text-primary" /> Service Icons (Fill/Duo)</h3>
                <div className="flex flex-wrap gap-4">
                   {[FaBuilding, FaUserTie, FaFileArchive, FaHandshake].map((Icon, i) => (
                     <div key={i} className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100/50 border border-primary-100 flex items-center justify-center text-primary transition-all hover:scale-105 hover:shadow-md hover:shadow-primary/10 cursor-pointer">
                       <Icon className="text-2xl" />
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Section Style Blocks */}
          <section id="section-8" className="scroll-mt-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold text-sm">8</span>
              <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Section Style Blocks</h2>
            </div>
            
            <div className="space-y-8">
               {/* Hero Preview */}
               <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col group relative">
                 <div className="absolute top-4 right-4 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full z-20">Hero Section</div>
                 <div className="h-48 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617] relative p-8 flex items-center overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative z-10 w-2/3 space-y-3">
                      <div className="h-6 w-3/4 bg-gray-300 rounded opacity-80"></div>
                      <div className="h-6 w-1/2 bg-gradient-to-r from-primary-400 to-orange-300 rounded"></div>
                      <div className="h-3 w-4/5 bg-gray-500 rounded mt-4 opacity-70"></div>
                      <div className="h-8 w-32 bg-primary-500 rounded-lg mt-6 inline-block"></div>
                    </div>
                 </div>
               </div>

               <div className="grid md:grid-cols-2 gap-8">
                 {/* Services Preview */}
                 <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm relative">
                   <div className="absolute top-4 right-4 bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm">Services Grid</div>
                   <div className="p-8 pb-10 bg-gray-50 h-full">
                     <div className="flex justify-center mb-6">
                       <div className="h-5 w-32 bg-primary-200 rounded-full"></div>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                       {[...Array(4)].map((_, i) => (
                         <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col gap-2">
                           <div className="w-8 h-8 rounded-lg bg-primary-50"></div>
                           <div className="h-3 w-16 bg-gray-300 rounded"></div>
                           <div className="h-2 w-full bg-gray-100 rounded mt-2"></div>
                           <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>

                 {/* CTA Preview */}
                 <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm relative">
                   <div className="absolute top-4 right-4 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm z-20">CTA / Banner</div>
                   <div className="p-8 h-full flex items-center justify-center bg-primary relative overflow-hidden">
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                     <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                     
                     <div className="relative z-10 text-center flex flex-col items-center">
                       <div className="h-6 w-48 bg-white/90 rounded mb-3"></div>
                       <div className="h-3 w-64 bg-primary-200/80 rounded mb-6"></div>
                       <div className="h-10 w-36 bg-white rounded-xl shadow-lg"></div>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </section>

          {/* Section 9: Spacing & Layout System */}
          <section id="section-9" className="scroll-mt-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold text-sm">9</span>
              <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Spacing & Layout System</h2>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-2 gap-12">
                
                {/* Spacing Scale */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-6 border-b pb-2">Padding & Margin Scale</h3>
                  <div className="space-y-4">
                     {[
                       { name: 'xs (4px)', class: 'p-1', size: 'w-8 h-4', tw: 'w-1' },
                       { name: 'sm (8px)', class: 'p-2', size: 'w-16 h-4', tw: 'w-2' },
                       { name: 'md (16px)', class: 'p-4', size: 'w-32 h-4', tw: 'w-4' },
                       { name: 'lg (24px)', class: 'p-6', size: 'w-48 h-4', tw: 'w-6' },
                       { name: 'xl (32px)', class: 'p-8', size: 'w-64 h-4', tw: 'w-8' },
                       { name: '2xl (48px)', class: 'p-12', size: 'w-[12rem] h-4', tw: 'w-12' },
                     ].map((space, i) => (
                       <div key={i} className="flex items-center gap-4">
                         <div className="w-24 text-sm font-medium text-gray-600 font-mono">{space.name}</div>
                         <div className={`bg-primary-200 rounded ${space.size}`}></div>
                         <div className="text-xs text-gray-400 font-mono">{space.tw}</div>
                       </div>
                     ))}
                  </div>
                </div>

                {/* Grid & Radius */}
                <div className="space-y-10">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-6 border-b pb-2">Border Radius Scale</h3>
                    <div className="flex flex-wrap gap-4 items-end">
                      <div className="text-center"><div className="w-12 h-12 bg-gray-200 rounded-sm mb-2 border border-gray-300"></div><span className="text-xs text-gray-500 font-mono">sm</span></div>
                      <div className="text-center"><div className="w-12 h-12 bg-gray-200 rounded mb-2 border border-gray-300"></div><span className="text-xs text-gray-500 font-mono">DEFAULT</span></div>
                      <div className="text-center"><div className="w-12 h-12 bg-primary-100 rounded-lg mb-2 border border-primary-300 relative"><div className="absolute -top-2 -right-2 bg-green-500 w-4 h-4 rounded-full flex items-center justify-center text-[8px] text-white">✓</div></div><span className="text-xs font-bold text-primary-600 font-mono">lg</span></div>
                      <div className="text-center"><div className="w-12 h-12 bg-primary-200 rounded-xl mb-2 border border-primary-400 relative"><div className="absolute -top-2 -right-2 bg-green-500 w-4 h-4 rounded-full flex items-center justify-center text-[8px] text-white">✓</div></div><span className="text-xs font-bold text-primary-600 font-mono">xl</span></div>
                      <div className="text-center"><div className="w-12 h-12 bg-primary-300 rounded-2xl mb-2 border border-primary-500 relative"><div className="absolute -top-2 -right-2 bg-green-500 w-4 h-4 rounded-full flex items-center justify-center text-[8px] text-white">✓</div></div><span className="text-xs font-bold text-primary-600 font-mono">2xl</span></div>
                      <div className="text-center"><div className="w-12 h-12 bg-gray-200 rounded-full mb-2 border border-gray-300"></div><span className="text-xs text-gray-500 font-mono">full</span></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-3 bg-gray-50 p-2 rounded">Note: `rounded-xl` and `rounded-2xl` are primarily used for cards, buttons, and form inputs to create a friendly, premium SaaS feel.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Layout Guide</h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                       <li>• <strong>Max Container:</strong> <code>max-w-7xl</code> (1280px) for desktop pages.</li>
                       <li>• <strong>Section Padding:</strong> <code>py-16 md:py-24</code></li>
                       <li>• <strong>Card Grids:</strong> CSS Grid <code>gap-6</code> or <code>gap-8</code></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Section 10: Effects & UI Rules */}
          <section id="section-10" className="scroll-mt-12 pb-24">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold text-sm">10</span>
              <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Effects & UI Rules</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
                <h3 className="font-bold text-gray-900 mb-4">Shadow System</h3>
                <div className="space-y-4 flex-grow">
                  <div className="h-16 bg-white rounded-xl flex items-center justify-center border border-gray-100 shadow-sm"><span className="text-xs text-gray-500 font-mono">shadow-sm (Cards)</span></div>
                  <div className="h-16 bg-white rounded-xl flex items-center justify-center border border-gray-100 shadow-md"><span className="text-xs text-gray-500 font-mono">shadow-md (Hover cards/Dropdowns)</span></div>
                  <div className="h-16 bg-white rounded-xl flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(30,79,156,0.1)] border border-primary-50"><span className="text-xs text-primary-600 font-mono">Custom Color Shadow</span></div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-blue-400 z-0"></div>
                <h3 className="font-bold text-white mb-4 relative z-10 drop-shadow-sm">Glassmorphism</h3>
                <div className="flex-grow flex items-center justify-center relative z-10 w-full h-full pb-4">
                   <div className="w-full h-24 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl flex items-center justify-center shadow-lg">
                     <span className="text-white font-bold tracking-wider text-sm">backdrop-blur-md</span>
                   </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
                <h3 className="font-bold text-gray-900 mb-4">Hover Animations</h3>
                <div className="space-y-4 text-sm text-gray-600 flex-grow">
                  <p><strong>Cards:</strong> Use <code>transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300</code> mechanism to float elements off the page.</p>
                  <p><strong>Buttons:</strong> Use <code>hover:scale-105 active:scale-95 transition-transform</code> for satisfying clicks.</p>
                  <p><strong>Icons:</strong> Group hover translations (e.g., arrows moving right) using <code>group-hover:translate-x-1</code>.</p>
                </div>
              </div>
            </div>
            
          </section>

        </div>
      </main>
    </div>
  );
}

// Helper Components for the page

function ColorCard({ name, hex, tailwind, textClass, usage }: { name: string, hex: string, tailwind: string, textClass: string, usage: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-white hover:shadow-md transition-shadow">
      <div className={`h-32 flex items-center justify-center ${tailwind} ${textClass}`}>
        <span className="font-mono text-lg font-bold opacity-90">{hex.toUpperCase()}</span>
      </div>
      <div className="p-4">
        <h4 className="font-bold text-gray-900 mb-1">{name}</h4>
        <div className="text-xs font-mono text-gray-500 mb-3">{tailwind}</div>
        <p className="text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3">{usage}</p>
      </div>
    </div>
  );
}

function ColorSwatch({ name, hex, tailwind, textClass = "text-gray-900", border = false }: { name: string, hex: string, tailwind: string, textClass?: string, border?: boolean }) {
  return (
    <div>
      <div className={`h-20 rounded-lg ${tailwind} ${border ? 'border border-gray-200' : ''} mb-3 flex flex-col justify-end p-3 ${textClass} shadow-sm transition-transform hover:scale-105 cursor-pointer`}>
        <span className="font-mono text-sm font-bold opacity-90">{hex.toUpperCase()}</span>
      </div>
      <p className="text-xs font-semibold text-gray-800 break-words leading-tight">{name}</p>
    </div>
  );
}

function TypographyRow({ name, example, specs }: { name: string, example: React.ReactNode, specs: string }) {
  return (
    <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
      <td className="py-6 px-4 align-middle whitespace-nowrap">
        <span className="font-bold text-gray-900">{name}</span>
      </td>
      <td className="py-6 px-4 align-middle min-w-[300px]">
        {example}
      </td>
      <td className="py-6 px-4 align-middle">
        <code className="text-xs font-mono bg-gray-100 text-gray-700 px-2 py-1 rounded">{specs}</code>
      </td>
    </tr>
  );
}

function ButtonStateRow({ title, description, children }: { title: string, description: string, children: React.ReactNode }) {
  return (
    <div className="border-b border-gray-100 pb-8 last:border-0 last:pb-0 relative z-10">
      <div className="mb-4">
        <h3 className="font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="flex flex-wrap gap-6 items-center">
        {children}
      </div>
    </div>
  );
}
