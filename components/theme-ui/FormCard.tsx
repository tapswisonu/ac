'use client';

import React, { useState, useEffect } from "react";
import { Loader2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";

export function FormCard({ selectedServiceTitle }: { selectedServiceTitle: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset success state when external service dependency changes magically
  useEffect(() => {
    setIsSuccess(false);
    setIsSubmitting(false);
  }, [selectedServiceTitle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="w-full bg-white/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgba(3,70,151,0.08)] border border-white relative overflow-hidden transition-all duration-300">
      
      {/* Decorative Blob */}
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary-100 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>

      {isSuccess ? (
        <div className="text-center py-10 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10 w-full flex flex-col items-center">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 shrink-0 transition-transform scale-110 border border-green-100 shadow-sm">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
          <p className="text-slate-600 mb-8 mx-auto text-[15px] leading-relaxed">
            Our expert for <span className="font-bold text-primary-600">{selectedServiceTitle}</span> will contact you shortly 🚀
          </p>
          <Button variant="outline" fullWidth onClick={() => setIsSuccess(false)}>
            Send Another Request
          </Button>
        </div>
      ) : (
        <div className="relative z-10 w-full animate-in fade-in duration-500">
          <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Request Consultation</h3>
          <p className="text-sm text-slate-500 mb-8">Fill the form below and we will call you.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[12px] font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Required Service</label>
              <input 
                type="text" 
                value={selectedServiceTitle}
                readOnly
                className="w-full px-4 py-3.5 bg-slate-100/60 border border-slate-200 rounded-xl text-[13px] font-bold text-primary-700 cursor-not-allowed select-none focus:outline-none transition-colors" 
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Full Name <span className="text-red-500">*</span></label>
                <input required type="text" placeholder="John Doe" className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm" />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Phone <span className="text-red-500">*</span></label>
                <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-[12px] font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Message</label>
              <textarea 
                rows={3}
                placeholder={`Tell us about your ${selectedServiceTitle} requirement...`}
                className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-[13px] resize-none"
              ></textarea>
            </div>

            <Button type="submit" disabled={isSubmitting} fullWidth className="mt-2 text-[15px]">
               {isSubmitting ? (
                 <>Processing <Loader2 className="w-5 h-5 animate-spin" /></>
               ) : (
                 <>Get Free Callback <ArrowRight className="w-5 h-5" /></>
               )}
            </Button>
            <p className="text-center text-[11px] text-slate-400 mt-4 pb-1 font-medium">
              100% Secure • We never share your data
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
