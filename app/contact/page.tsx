import React from 'react';
import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left Column (Brand & Content) */}
      <div className="w-full lg:w-5/12 bg-primary-950 text-white flex flex-col justify-between relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-primary-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 bg-secondary-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="p-8 lg:p-14 xl:p-20 relative z-10 flex flex-col h-full">
          {/* Logo / Back Link */}
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white transition-colors group mb-16 lg:mb-auto w-fit">
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>

          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Expert corporate compliance, <span className="text-secondary-400 relative inline-block">
                done right.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent" />
                </svg>
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-primary-100 mb-12 max-w-lg">
              Partner with India's most trusted legal advisors. Get personalized solutions for your business registration, taxation, and compliance needs.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Fast Turnaround</h3>
                  <p className="text-primary-200 text-sm">We process your requests within 24-48 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Transparent Pricing</h3>
                  <p className="text-primary-200 text-sm">No hidden fees. You pay exactly what you see.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Dedicated Expert</h3>
                  <p className="text-primary-200 text-sm">A personalized manager handles your end-to-end process.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto hidden lg:block">
            <div className="flex items-center gap-4 bg-primary-900/50 p-4 rounded-2xl border border-primary-800/50 backdrop-blur-sm">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-primary-900" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`User ${i}`} />
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 text-sm">
                  {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <p className="text-xs font-medium text-primary-100 mt-0.5">Trusted by 5,000+ Indian Businesses</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column (Form) */}
      <div className="w-full lg:w-7/12 bg-slate-50 flex items-center justify-center p-6 sm:p-8 lg:p-16 xl:p-24 min-h-[600px] relative">
         <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
         {/* Subtle Grid Pattern */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         
         <div className="w-full max-w-xl relative z-10 animate-in slide-in-from-bottom-5 duration-700 ease-out fade-in">
           <ContactForm />
         </div>
      </div>
    </div>
  );
}
