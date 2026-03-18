'use client';

import React from 'react';
import { ArrowRight, Shield, Zap, BarChart, CheckCircle2 } from 'lucide-react';

export default function ConnectedSections() {
  return (
    <section className="relative w-full flex flex-col">
      {/* --- Section 1: Dark Background --- */}
      <div className="relative w-full bg-slate-950 text-white pt-24 pb-32 overflow-hidden">
        {/* Soft Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl translate-y-1/2"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold text-secondary-400 uppercase tracking-wider mb-2">Premium Experience</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              Built for high-performance teams
            </h3>
            <p className="text-lg text-slate-300">
              Transform the way you work with our powerful, intuitive tools designed to help your business scale effortlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dark Card 1 */}
            <div className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-secondary-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-secondary-400" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Enterprise Security</h4>
              <p className="text-slate-400 mb-6 line-clamp-3">
                Bank-level encryption and advanced security protocols keep your data safe, always.
              </p>
              <a href="#" className="inline-flex items-center text-secondary-400 font-medium group-hover:text-secondary-300 transition-colors">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* Dark Card 2 */}
            <div className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-secondary-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-secondary-400" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Lightning Fast</h4>
              <p className="text-slate-400 mb-6 line-clamp-3">
                Optimized infrastructure ensures your workflows never slow down, no matter the scale.
              </p>
              <a href="#" className="inline-flex items-center text-secondary-400 font-medium group-hover:text-secondary-300 transition-colors">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* Dark Card 3 */}
            <div className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-secondary-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart className="w-6 h-6 text-secondary-400" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Advanced Analytics</h4>
              <p className="text-slate-400 mb-6 line-clamp-3">
                Deep insights and real-time reporting give you the edge you need to grow faster.
              </p>
              <a href="#" className="inline-flex items-center text-secondary-400 font-medium group-hover:text-secondary-300 transition-colors">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Transition SVG Curve to match light section color bg-slate-50 (#f8fafc) */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-0 translate-y-[1px]">
          <svg className="relative block w-full h-[60px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.06,155.45,116.82,321.39,56.44Z" className="fill-slate-50"></path>
          </svg>
        </div>
      </div>

      {/* --- Section 2: Light Background --- */}
      <div className="relative w-full bg-slate-50 text-slate-900 pt-16 pb-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image / Content Block */}
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-slate-200/50 flex flex-col items-center">
                <div className="w-full space-y-6">
                  {/* Mock UI Rows */}
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                      <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mr-4">
                        <CheckCircle2 className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-slate-200 rounded-md w-3/4"></div>
                        <div className="h-3 bg-slate-100 rounded-md w-1/2"></div>
                      </div>
                    </div>
                  ))}
                  <div className="pt-6 mt-4 border-t border-slate-100 flex justify-between items-center w-full">
                    <div className="h-8 w-24 bg-slate-100 rounded-lg"></div>
                    <div className="h-10 w-32 bg-secondary-500 rounded-lg shadow-md hover:shadow-lg transition-shadow shadow-secondary-500/20"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Block */}
            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">Seamless Integration</h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900">
                A workflow that feels like magic
              </h3>
              <p className="text-lg text-slate-600 mb-8">
                Connect your favorite tools and automate processes in minutes. Our platform brings everything together in one unified workspace, saving your team hours every week.
              </p>

              <div className="space-y-4">
                {[
                  "One-click syncing with native applications",
                  "Automated reporting and intelligent alerts",
                  "Unified dashboards for entire departments"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-secondary-500" />
                    </div>
                    <p className="ml-3 text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <button className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-primary-600/20 flex items-center">
                  Start your free trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
