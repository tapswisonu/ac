import React from 'react';

export function SectionWrapper({ children, bgColor = 'bg-white', id, className = '' }: { children: React.ReactNode; bgColor?: string; id?: string; className?: string }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${bgColor} ${className}`}>
      {children}
    </section>
  );
}
