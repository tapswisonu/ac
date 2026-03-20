import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export function Button({ children, variant = 'primary', fullWidth = false, className = '', ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold transition-all duration-300 disabled:opacity-70 disabled:pointer-events-none";
  const widthStyles = fullWidth ? "w-full" : "w-auto";
  
  const variants = {
    primary: "bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-600/20 hover:-translate-y-0.5",
    secondary: "bg-secondary-500 hover:bg-secondary-600 text-white shadow-lg shadow-secondary-500/25 hover:-translate-y-0.5",
    outline: "bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50",
    ghost: "bg-transparent text-primary-600 hover:bg-primary-50"
  };

  return (
    <button className={`${baseStyles} ${widthStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
