import React from "react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const ContactBar = () => {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a] text-white"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div
        className="max-w-[1400px] mx-auto flex items-center justify-between"
        style={{ padding: "8px 24px", fontSize: "13px", letterSpacing: "0.2px" }}
      >
        {/* Left: Phone & Email */}
        <div className="flex items-center" style={{ gap: "20px" }}>
          <a
            href="tel:9643862867"
            className="flex items-center gap-2 text-slate-300 hover:text-orange-400 transition-colors duration-200"
          >
            <Phone className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="hidden sm:inline">9643862867</span>
            <span className="sm:hidden">Call Us</span>
          </a>
          <a
            href="mailto:info@ajaccountinggroup.com"
            className="flex items-center gap-2 text-slate-300 hover:text-orange-400 transition-colors duration-200"
          >
            <Mail className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="hidden md:inline">info@ajaccountinggroup.com</span>
            <span className="md:hidden">Email Us</span>
          </a>
        </div>

        {/* Right: Already registered + Login + Register */}
        <div className="flex items-center" style={{ gap: "16px" }}>
          <span className="hidden sm:inline text-slate-400">Already registered?</span>
          <Link
            href="/login"
            className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-200"
            style={{
              padding: "6px 16px",
              borderRadius: "6px",
              fontWeight: 500,
            }}
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
