import React from 'react';

export function Badge({ children, variant = 'primary' }: { children: React.ReactNode; variant?: 'primary' | 'secondary' | 'success' | 'outline' }) {
  const styles = {
    primary: "bg-primary-50 text-primary-600 border-primary-100",
    secondary: "bg-secondary-50 text-secondary-600 border-secondary-100",
    success: "bg-green-50 text-green-600 border-green-100",
    outline: "bg-transparent text-slate-600 border-slate-200"
  };
  return (
    <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${styles[variant]} shadow-sm`}>
      {children}
    </div>
  );
}
