import React from 'react';
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive?: boolean;
  onClick?: () => void;
  badge?: string;
}

export function ServiceCard({ icon, title, description, isActive = false, onClick, badge }: ServiceCardProps) {
  return (
    <div 
      onClick={(e) => { e.preventDefault(); onClick?.(); }}
      className={`group bg-white rounded-3xl p-6 sm:p-7 flex flex-col transition-all duration-300 relative overflow-hidden block cursor-pointer ${
        isActive 
         ? 'border-2 border-primary-500 shadow-[0_8px_30px_rgba(3,70,151,0.12)] scale-[1.02] z-10' 
         : 'border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2'
      }`}
    >
      <div className={`absolute top-0 left-0 w-full h-[3px] bg-secondary-500 transform transition-transform origin-left duration-300 z-10 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
      
      {badge && (
        <div className="absolute top-4 right-4 bg-primary-50 text-primary-600 text-[10px] font-bold px-2.5 py-1 rounded border border-primary-100 uppercase tracking-wider">
          {badge}
        </div>
      )}

      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 shadow-sm ${isActive ? 'bg-primary-600 text-white' : 'bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white'}`}>
        {icon}
      </div>
      
      <h3 className={`text-lg font-bold transition-colors mb-2.5 tracking-tight pr-4 ${isActive ? 'text-primary-600' : 'text-slate-900 group-hover:text-primary-600'}`}>
        {title}
      </h3>
      
      <p className="text-[13px] text-slate-500 leading-relaxed flex-grow mb-8 line-clamp-2">
        {description}
      </p>
      
      <span className={`mt-auto inline-flex items-center text-[13px] font-bold gap-1.5 transition-all ${isActive ? 'text-secondary-500' : 'text-primary-600 group-hover:text-primary-700 group-hover:gap-2.5'}`}>
        {isActive ? 'Currently Viewing' : 'Select Service'} <ArrowRight className="w-4 h-4" />
      </span>
    </div>
  );
}
