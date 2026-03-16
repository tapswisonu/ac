import React from "react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const ContactBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a] text-white text-xs px-4 sm:px-6 lg:px-8 h-9 flex items-center border-b border-white/5">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        {/* Left: Phone & Email */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="tel:9643862867"
            className="flex items-center gap-1.5 hover:text-orange-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="hidden sm:inline">9643862867</span>
            <span className="sm:hidden">Call Us</span>
          </a>
          <a
            href="mailto:info@ajaccountinggroup.com"
            className="flex items-center gap-1.5 hover:text-orange-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="hidden md:inline">info@ajaccountinggroup.com</span>
            <span className="md:hidden">Email Us</span>
          </a>
        </div>

        {/* Right: Login + Register */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-slate-400 text-xs">Already registered?</span>
          <Link
            href="/login"
            className="text-slate-300 hover:text-white transition-colors font-medium"
          >
            Login
          </Link>
          <span className="text-slate-600">|</span>
          <Link
            href="/register"
            className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-0.5 rounded font-semibold transition-colors"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
