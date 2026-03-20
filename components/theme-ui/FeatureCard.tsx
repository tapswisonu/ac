import React from 'react';

export function FeatureCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-primary-100 transition-all group">
      <div className="w-12 h-12 rounded-xl bg-slate-50 text-transparent bg-clip-text text-slate-400 group-hover:bg-primary-600 group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 border border-slate-100 group-hover:border-primary-600 shadow-sm">
        {React.cloneElement(icon as React.ReactElement, { className: "w-5 h-5 text-current" })}
      </div>
      <span className="font-semibold text-slate-800 text-[15px] group-hover:text-primary-600 transition-colors tracking-tight">{title}</span>
    </div>
  );
}
