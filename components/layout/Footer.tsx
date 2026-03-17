import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="col-span-1 md:col-span-1 border-gray-700">
          <Link href="/" className="mb-6 inline-block">
            <div className="relative w-48 h-12">
              <Image 
                src="/logo.png" 
                alt="Aj Accounting Group Logo" 
                fill 
                className="object-contain object-left" 
              />
            </div>
          </Link>
          <p className="text-gray-400 mb-6 leading-relaxed text-sm">
            Ajaccounting-Group is an ISO 9001:2015 Certified accounting and finance firm with operations in Noida and Delhi. We operate with over 5 years of experience helping customers with their accounting and financial needs.
          </p>
        </div>

        {/* Popular Services */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-gray-100 tracking-wide uppercase">Popular Services</h4>
          <ul className="space-y-4">
            <li><Link href="/services/ca-services" className="text-gray-400 hover:text-orange-500 transition-colors">CA Services</Link></li>
            <li><Link href="/services/cfo-services" className="text-gray-400 hover:text-orange-500 transition-colors">CFO Services</Link></li>
            <li><Link href="/services/account-outsourcing" className="text-gray-400 hover:text-orange-500 transition-colors">Account Outsourcing</Link></li>
            <li><Link href="/services/certifications" className="text-gray-400 hover:text-orange-500 transition-colors">Certifications (ISO, IATA)</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-gray-100 tracking-wide uppercase">Resources</h4>
          <ul className="space-y-4">
            <li><Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</Link></li>
            <li><Link href="/blog" className="text-gray-400 hover:text-orange-500 transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-gray-100 tracking-wide uppercase">Contact</h4>
          <ul className="space-y-4">
            <li className="text-gray-400 text-sm leading-relaxed">
              <a 
                href="https://www.bing.com/maps/search?q=Office+No+G+16+Ground+Floor+Dharmpali+Palace+Bhoja+Market+Near+Vinayak+Hospital+Sector+27+Noida%2C+Bhoja+Market%2C+Noida%2C+Uttar+Pradesh+201301%2C+IN&cp=28.525282%7E77.397499&lvl=11.1&style=r" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
                title="Get directions to our office"
              >
                Office No G 16, Ground Floor, Dharmpali Palace, Bhoja Market, Near Vinayak Hospital, Sector 27 Noida, UP 201301
              </a>
            </li>
            <li className="text-gray-400 text-sm">Phone: 9643862867</li>
            <li className="text-gray-400 text-sm">Web: www.ajaccountinggroup.com</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Aj Accounting-Group. All rights reserved.</p>
      </div>
    </footer>
  );
}
