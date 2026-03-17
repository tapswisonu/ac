"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown, Menu, X, Building2, Landmark, Globe,
  FileText, Receipt, Users, Award, Briefcase, Banknote, Building,
  Star, ShieldCheck, Zap, TrendingUp
} from "lucide-react";

/* ─────────────────────────────────────────
   MEGA MENU DATA
───────────────────────────────────────── */
const megaMenuData = [
  {
    name: "Startup",
    columns: [
      {
        title: "Company Registration",
        icon: <Building2 className="w-4 h-4" />,
        links: [
          { title: "Private Limited Company", url: "/services/private-limited-company" },
          { title: "One Person Company (OPC)", url: "/services/one-person-company" },
          { title: "LLP Registration", url: "/services/llp-registration" },
          { title: "Public Limited Company", url: "/services/public-limited-company" },
          { title: "Partnership Firm", url: "/services/partnership-firm" },
          { title: "Sole Proprietorship", url: "/services/sole-proprietorship" },
        ],
      },
      {
        title: "Special Entities",
        icon: <Landmark className="w-4 h-4" />,
        links: [
          { title: "Section 8 Company", url: "/services/section-8-company" },
          { title: "Nidhi Company", url: "/services/nidhi-company" },
          { title: "Producer Company", url: "/services/producer-company" },
          { title: "Trust Registration", url: "/services/trust-registration" },
          { title: "Society Registration", url: "/services/society-registration" },
          { title: "Indian Subsidiary", url: "/services/indian-subsidiary" },
        ],
      },
      {
        title: "Government Schemes",
        icon: <ShieldCheck className="w-4 h-4" />,
        links: [
          { title: "Startup India Registration", url: "/services/startup-india" },
          { title: "Udyam (MSME) Registration", url: "/services/udyam-msme" },
        ],
      },
      {
        title: "Trade & Shop",
        icon: <FileText className="w-4 h-4" />,
        links: [
          { title: "Trade License", url: "/services/trade-license" },
          { title: "Shop & Establishment", url: "/services/shop-act" },
        ],
      },
    ],
    popular: ["Private Limited Company", "LLP Registration", "Udyam (MSME) Registration"],
  },
  {
    name: "Trademark & IP",
    columns: [
      {
        title: "Trademark",
        icon: <ShieldCheck className="w-4 h-4" />,
        links: [
          { title: "Trademark Registration", url: "/services/trademark-registration" },
          { title: "Trademark Objection Reply", url: "/services/trademark-objection" },
          { title: "Trademark Opposition", url: "/services/trademark-opposition" },
          { title: "Trademark Renewal", url: "/services/trademark-renewal" },
          { title: "Trademark Transfer", url: "/services/trademark-transfer" },
          { title: "Trademark Rectification", url: "/services/trademark-rectification" },
          { title: "Trademark Hearing", url: "/services/trademark-hearing" },
        ],
      },
      {
        title: "Copyright & Patent",
        icon: <FileText className="w-4 h-4" />,
        links: [
          { title: "Copyright Registration", url: "/services/copyright-registration" },
          { title: "Copyright Objection", url: "/services/copyright-objection" },
          { title: "Patent Registration", url: "/services/patent" },
          { title: "Design Registration", url: "/services/design-registration" },
        ],
      },
      {
        title: "Brand & International",
        icon: <Globe className="w-4 h-4" />,
        links: [
          { title: "Logo Design", url: "/services/logo-design" },
          { title: "International Trademark", url: "/services/international-trademark" },
        ],
      },
      {
        title: "Popular",
        icon: <Star className="w-4 h-4" />,
        links: [
          { title: "Trademark Registration", url: "/services/trademark-registration" },
          { title: "Copyright Registration", url: "/services/copyright-registration" },
        ],
      },
    ],
    popular: ["Trademark Registration", "Patent Registration"],
  },
  {
    name: "Licenses",
    columns: [
      {
        title: "Food & Export",
        icon: <Award className="w-4 h-4" />,
        links: [
          { title: "FSSAI License", url: "/services/fssai-registration" },
          { title: "FSSAI Renewal", url: "/services/fssai-renewal" },
          { title: "Import Export Code (IEC)", url: "/services/iec-registration" },
          { title: "IEC Modification", url: "/services/iec-modification" },
          { title: "APEDA Registration", url: "/services/apeda" },
          { title: "Spice Board Registration", url: "/services/spice-board" },
        ],
      },
      {
        title: "Certifications",
        icon: <ShieldCheck className="w-4 h-4" />,
        links: [
          { title: "BIS Certification", url: "/services/bis-certification" },
          { title: "CE Certification", url: "/services/ce-certification" },
          { title: "Halal Certification", url: "/services/halal-certification" },
          { title: "NSIC Registration", url: "/services/nsic" },
          { title: "RCMC Registration", url: "/services/rcmc" },
        ],
      },
      {
        title: "Drug & Medical",
        icon: <FileText className="w-4 h-4" />,
        links: [
          { title: "Cosmetic License", url: "/services/cosmetic-license" },
          { title: "Drug License", url: "/services/drug-license" },
          { title: "CDSCO Registration", url: "/services/cdsco" },
        ],
      },
      {
        title: "Recruitment & Travel",
        icon: <Users className="w-4 h-4" />,
        links: [
          { title: "IATA Registration", url: "/services/iata" },
          { title: "RA License", url: "/services/ra-license" },
          { title: "Overseas Recruitment Agent", url: "/services/overseas-recruitment" },
        ],
      },
    ],
    popular: ["FSSAI License", "IEC Registration", "Drug License"],
  },
  {
    name: "GST",
    columns: [
      {
        title: "Registration",
        icon: <FileText className="w-4 h-4" />,
        links: [
          { title: "GST Registration", url: "/services/gst-registration" },
          { title: "GST for Foreigners", url: "/services/gst-foreigners" },
          { title: "Virtual Office + GSTIN", url: "/services/virtual-office-gst" },
          { title: "GST Amendment", url: "/services/gst-amendment" },
          { title: "GST Revocation", url: "/services/gst-revocation" },
        ],
      },
      {
        title: "Return Filing",
        icon: <Receipt className="w-4 h-4" />,
        links: [
          { title: "GST Return Filing", url: "/services/gst-return" },
          { title: "GST Nil Return", url: "/services/gst-nil-return" },
          { title: "GSTR-9 Annual Filing", url: "/services/gstr-9" },
          { title: "GST LUT Filing", url: "/services/gst-lut" },
        ],
      },
      {
        title: "Compliance",
        icon: <ShieldCheck className="w-4 h-4" />,
        links: [
          { title: "GST Notice Reply", url: "/services/gst-notice" },
          { title: "GST E-Way Bill", url: "/services/gst-eway" },
        ],
      },
      {
        title: "Popular",
        icon: <Star className="w-4 h-4" />,
        links: [
          { title: "GST Registration", url: "/services/gst-registration" },
          { title: "GST Return Filing", url: "/services/gst-return" },
        ],
      },
    ],
    popular: ["GST Registration", "GST Return Filing"],
  },
  {
    name: "Income Tax",
    columns: [
      {
        title: "ITR Filing",
        icon: <Receipt className="w-4 h-4" />,
        links: [
          { title: "Income Tax Return Filing", url: "/services/itr-filing" },
          { title: "Business Tax Filing", url: "/services/business-itr" },
          { title: "Partnership ITR", url: "/services/partnership-itr" },
          { title: "Company ITR Filing", url: "/services/company-itr" },
          { title: "Trust / NGO Tax Filing", url: "/services/ngo-itr" },
          { title: "Revised ITR Filing", url: "/services/revised-itr" },
        ],
      },
      {
        title: "TDS",
        icon: <FileText className="w-4 h-4" />,
        links: [
          { title: "TDS Return Filing", url: "/services/tds-return" },
          { title: "TAN Registration", url: "/services/tan-registration" },
          { title: "15CA-15CB Filing", url: "/services/15ca-15cb" },
        ],
      },
      {
        title: "Notices & Advisory",
        icon: <ShieldCheck className="w-4 h-4" />,
        links: [
          { title: "Income Tax Notice Handling", url: "/services/it-notice" },
        ],
      },
      {
        title: "Popular",
        icon: <Star className="w-4 h-4" />,
        links: [
          { title: "ITR Filing", url: "/services/itr-filing" },
          { title: "TDS Return", url: "/services/tds-return" },
        ],
      },
    ],
    popular: ["Income Tax Return Filing", "TDS Return Filing"],
  },
  {
    name: "MCA / ROC",
    columns: [
      {
        title: "Director Changes",
        icon: <Users className="w-4 h-4" />,
        links: [
          { title: "Director DIN eKYC", url: "/services/din-ekyc" },
          { title: "Director Change", url: "/services/director-change" },
          { title: "Remove Director", url: "/services/remove-director" },
          { title: "Appointment of Director", url: "/services/appoint-director" },
        ],
      },
      {
        title: "Company Changes",
        icon: <Building2 className="w-4 h-4" />,
        links: [
          { title: "Registered Office Change", url: "/services/office-change" },
          { title: "Company Name Change", url: "/services/name-change" },
          { title: "MOA Amendment", url: "/services/moa-amendment" },
          { title: "AOA Amendment", url: "/services/aoa-amendment" },
          { title: "Authorized Capital Increase", url: "/services/capital-increase" },
          { title: "Share Transfer", url: "/services/share-transfer" },
        ],
      },
      {
        title: "ROC Filings",
        icon: <FileText className="w-4 h-4" />,
        links: [
          { title: "ADT-1 Filing", url: "/services/adt-1" },
          { title: "DPT-3 Filing", url: "/services/dpt-3" },
          { title: "LLP Form 11 Filing", url: "/services/llp-form-11" },
          { title: "Dormant Status Filing", url: "/services/dormant-status" },
        ],
      },
      {
        title: "Annual Compliance",
        icon: <ShieldCheck className="w-4 h-4" />,
        links: [
          { title: "Company Annual Compliance", url: "/services/company-compliance" },
          { title: "LLP Compliance", url: "/services/llp-compliance" },
          { title: "OPC Compliance", url: "/services/opc-compliance" },
        ],
      },
    ],
    popular: ["Company Annual Compliance", "Director DIN eKYC"],
  },
  {
    name: "HR & Payroll",
    columns: [
      {
        title: "PF & ESIC",
        icon: <Users className="w-4 h-4" />,
        links: [
          { title: "PF Registration", url: "/services/pf-registration" },
          { title: "PF Return Filing", url: "/services/pf-return" },
          { title: "ESIC Registration", url: "/services/esic-registration" },
          { title: "ESIC Return Filing", url: "/services/esic-return" },
        ],
      },
      {
        title: "Payroll & Labour",
        icon: <Banknote className="w-4 h-4" />,
        links: [
          { title: "Payroll Management", url: "/services/payroll" },
          { title: "HR Compliance", url: "/services/hr-compliance" },
          { title: "Labour Law Compliance", url: "/services/labour-law" },
          { title: "Professional Tax Registration", url: "/services/professional-tax" },
        ],
      },
      {
        title: "Popular",
        icon: <Star className="w-4 h-4" />,
        links: [
          { title: "PF Registration", url: "/services/pf-registration" },
          { title: "Payroll Management", url: "/services/payroll" },
        ],
      },
      {
        title: "Quick Links",
        icon: <Zap className="w-4 h-4" />,
        links: [
          { title: "ESIC Registration", url: "/services/esic-registration" },
          { title: "PF Return Filing", url: "/services/pf-return" },
        ],
      },
    ],
    popular: ["PF Registration", "ESIC Registration"],
  },
  {
    name: "ISO & Certs",
    columns: [
      {
        title: "Quality & Environment",
        icon: <Award className="w-4 h-4" />,
        links: [
          { title: "ISO 9001 – Quality Management", url: "/services/iso-9001" },
          { title: "ISO 14001 – Environment", url: "/services/iso-14001" },
          { title: "ISO 45001 – Safety", url: "/services/iso-45001" },
        ],
      },
      {
        title: "Food Safety",
        icon: <ShieldCheck className="w-4 h-4" />,
        links: [
          { title: "ISO 22000 – Food Safety", url: "/services/iso-22000" },
          { title: "HACCP Certification", url: "/services/haccp" },
          { title: "FSSC 22000", url: "/services/fssc-22000" },
        ],
      },
      {
        title: "Information Security",
        icon: <ShieldCheck className="w-4 h-4" />,
        links: [
          { title: "ISO 27001 – InfoSec", url: "/services/iso-27001" },
        ],
      },
      {
        title: "Popular",
        icon: <Star className="w-4 h-4" />,
        links: [
          { title: "ISO 9001 Certification", url: "/services/iso-9001" },
          { title: "ISO 22000 Certification", url: "/services/iso-22000" },
        ],
      },
    ],
    popular: ["ISO 9001", "ISO 22000", "HACCP"],
  },
  {
    name: "Consulting",
    columns: [
      {
        title: "Accounting",
        icon: <Briefcase className="w-4 h-4" />,
        links: [
          { title: "Accounting Services", url: "/services/accounting" },
          { title: "Bookkeeping", url: "/services/bookkeeping" },
          { title: "CA Support", url: "/services/ca-support" },
          { title: "Tax Planning", url: "/services/tax-planning" },
        ],
      },
      {
        title: "Business Advisory",
        icon: <TrendingUp className="w-4 h-4" />,
        links: [
          { title: "Business Plan Preparation", url: "/services/business-plan" },
          { title: "Project Report", url: "/services/project-report" },
          { title: "Vendor Assessment", url: "/services/vendor-assessment" },
          { title: "Due Diligence", url: "/services/due-diligence" },
          { title: "Mergers & Acquisitions", url: "/services/mergers-acquisitions" },
        ],
      },
      {
        title: "Audits",
        icon: <ShieldCheck className="w-4 h-4" />,
        links: [
          { title: "Cyber Security Audit", url: "/services/cyber-audit" },
          { title: "EHS Audit", url: "/services/ehs-audit" },
        ],
      },
      {
        title: "Popular",
        icon: <Star className="w-4 h-4" />,
        links: [
          { title: "Accounting Services", url: "/services/accounting" },
          { title: "Tax Planning", url: "/services/tax-planning" },
        ],
      },
    ],
    popular: ["Accounting Services", "Due Diligence"],
  },
  {
    name: "Finance",
    columns: [
      {
        title: "Business Loans",
        icon: <Banknote className="w-4 h-4" />,
        links: [
          { title: "Business Loan", url: "/services/business-loan" },
          { title: "Working Capital Loan", url: "/services/working-capital" },
          { title: "Term Loan", url: "/services/term-loan" },
          { title: "Loan Against Property", url: "/services/lap" },
        ],
      },
      {
        title: "Structured Finance",
        icon: <Building className="w-4 h-4" />,
        links: [
          { title: "Bank Guarantee", url: "/services/bank-guarantee" },
          { title: "Project Finance", url: "/services/project-finance" },
        ],
      },
      {
        title: "Popular",
        icon: <Star className="w-4 h-4" />,
        links: [
          { title: "Business Loan", url: "/services/business-loan" },
          { title: "Working Capital Loan", url: "/services/working-capital" },
        ],
      },
      {
        title: "Quick Links",
        icon: <Zap className="w-4 h-4" />,
        links: [
          { title: "Term Loan", url: "/services/term-loan" },
          { title: "Bank Guarantee", url: "/services/bank-guarantee" },
        ],
      },
    ],
    popular: ["Business Loan", "Working Capital"],
  },
  {
    name: "Global Setup",
    columns: [
      {
        title: "Company Formation",
        icon: <Globe className="w-4 h-4" />,
        links: [
          { title: "UAE Company Formation", url: "/services/uae-company" },
          { title: "USA Company Formation", url: "/services/usa-company-registration" },
          { title: "UK Company Formation", url: "/services/uk-company" },
          { title: "Singapore Company Formation", url: "/services/singapore-company" },
        ],
      },
      {
        title: "International IP & License",
        icon: <ShieldCheck className="w-4 h-4" />,
        links: [
          { title: "International Trademark", url: "/services/international-trademark" },
          { title: "UAE eCommerce License", url: "/services/uae-ecommerce" },
          { title: "UAE Embassy Attestation", url: "/services/uae-attestation" },
        ],
      },
      {
        title: "Popular",
        icon: <Star className="w-4 h-4" />,
        links: [
          { title: "USA Company Formation", url: "/services/usa-company-registration" },
          { title: "UAE Company Formation", url: "/services/uae-company" },
        ],
      },
      {
        title: "Quick Links",
        icon: <Zap className="w-4 h-4" />,
        links: [
          { title: "Singapore Company", url: "/services/singapore-company" },
          { title: "International Trademark", url: "/services/international-trademark" },
        ],
      },
    ],
    popular: ["USA Company", "UAE Company"],
  },
];

/* ─────────────────────────────────────────
   MEGA MENU DROPDOWN
───────────────────────────────────────── */
function MegaMenuDropdown({ menu, alignment = "center" }: { menu: typeof megaMenuData[0]; alignment?: "left" | "center" | "right" }) {
  const alignmentClass =
    alignment === "left"
      ? "left-0"
      : alignment === "right"
      ? "right-0"
      : "left-1/2 -translate-x-1/2";

  return (
    <div className={`absolute top-full ${alignmentClass} w-[720px] xl:w-[820px] bg-white border border-gray-100 shadow-2xl rounded-xl overflow-hidden z-50 mt-1`}>
      {/* Popular strip */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-100 px-6 py-3 flex items-center gap-3">
        <Star className="w-4 h-4 text-orange-500 shrink-0" />
        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider mr-2">Popular:</span>
        {menu.popular.map((p, i) => (
          <span key={i} className="text-xs bg-white border border-orange-200 text-orange-700 px-3 py-1 rounded-full font-medium hover:bg-orange-500 hover:text-white hover:border-orange-500 cursor-pointer transition-colors">
            {p}
          </span>
        ))}
      </div>

      {/* 4-column grid */}
      <div className="grid grid-cols-4 gap-0 p-6">
        {menu.columns.map((col, idx) => (
          <div key={idx} className={`flex flex-col ${idx < menu.columns.length - 1 ? "border-r border-gray-100 pr-4 mr-4" : ""}`}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-orange-500">{col.icon}</span>
              <h3 className="text-xs font-bold tracking-wider text-gray-500 uppercase">{col.title}</h3>
            </div>
            <ul className="space-y-2">
              {col.links.map((link, lidx) => (
                <li key={lidx}>
                  <Link
                    href={link.url}
                    className="text-sm text-gray-700 hover:text-orange-500 transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-orange-400 transition-colors shrink-0" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN HEADER
───────────────────────────────────────── */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  return (
    <header className="fixed w-full top-[88px] bg-white z-40 border-b border-gray-200 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-40 h-12 sm:w-48 sm:h-14">
                <Image 
                  src="/biglogo.png" 
                  alt="Aj Accounting Group Logo" 
                  fill 
                  className="object-contain object-left" 
                  priority 
                />
              </div>
            </Link>
          </div>

          {/* Desktop Mega Nav */}
          <nav className="hidden xl:flex items-center h-full relative">
            {megaMenuData.map((menu, index) => {
              let alignment: "left" | "center" | "right" = "center";
              if (index < 4) alignment = "left";
              else if (index > 6) alignment = "right";

              return (
              <div
                key={menu.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter(menu.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-0.5 px-1.5 py-2 text-xs font-medium whitespace-nowrap transition-colors ${activeMenu === menu.name ? "text-orange-500" : "text-gray-700 hover:text-orange-500"}`}>
                  {menu.name}
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeMenu === menu.name ? "rotate-180" : ""}`} />
                </button>

                {/* Active indicator bar */}
                {activeMenu === menu.name && (
                  <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-500 rounded-full" />
                )}

                {/* Mega menu */}
                {activeMenu === menu.name && <MegaMenuDropdown menu={menu} alignment={alignment} />}
              </div>
            );
            })}
          </nav>

          {/* CTA (desktop) */}
          <div className="hidden lg:flex items-center gap-2">
            {/* CTA */}
            <Link
              href="/contact"
              className="hidden 2xl:flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-1.5 rounded-full font-semibold text-[13px] hover:from-orange-600 hover:to-amber-600 transition-all shadow-sm"
            >
              Free Consultation
            </Link>
          </div>


          {/* Mobile: hamburger */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 absolute w-full max-h-[80vh] overflow-y-auto z-40 shadow-xl">
          <div className="px-4 py-2 flex flex-col">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 border-b border-gray-50 text-sm font-semibold text-gray-900">Home</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 border-b border-gray-50 text-sm font-semibold text-gray-900">About</Link>

            {megaMenuData.map((menu) => (
              <div key={menu.name} className="border-b border-gray-50">
                <button
                  onClick={() => setMobileCategoryOpen(mobileCategoryOpen === menu.name ? null : menu.name)}
                  className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-gray-900"
                >
                  {menu.name}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileCategoryOpen === menu.name ? "rotate-180 text-orange-500" : "text-gray-400"}`} />
                </button>
                {mobileCategoryOpen === menu.name && (
                  <div className="pl-4 pb-3">
                    {menu.columns.map((col, idx) => (
                      <div key={idx} className="mb-3">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 mb-1">{col.title}</p>
                        {col.links.map((link, lidx) => (
                          <Link key={lidx} href={link.url} onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm text-gray-700 hover:text-orange-500">
                            {link.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="p-4">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-full font-semibold text-sm">
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
