import React from 'react';

export const metadata = {
  title: 'About Us | Aj Accounting-Group',
  description: 'Learn about Aj Accounting-Group, an ISO 9001:2015 Certified accounting and finance firm with operations in Noida and Delhi.',
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8 text-center font-serif">
          About <span className="text-orange-500">Aj</span> Accounting-Group
        </h1>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Making Accounting Marvels</h2>
          
          <p className="text-lg leading-relaxed text-slate-600 mb-6">
            Aj Accounting-Group is an ISO 9001:2015 Certified and approved by Government of India. We are providing professional accounting services. We encompass a group of professionals that strive to provide highly customized and efficient deliverables on CA services, CFO services, and Account Outsourcing services and Certification ( IATA, RA's licence, ISO Certification etc) services.
          </p>

          <p className="text-lg leading-relaxed text-slate-600 mb-8">
            Ajaccounting-Group is a reputed accounting and finance firm with operations in Noida and Delhi. We operate with over 5 years of experience helping customers with their accounting and financial needs. We are able to help you with your big or small ideas with financial backing and help you to grow and prosper.
          </p>

          <hr className="my-8 border-slate-200" />

          <h3 className="text-xl font-bold text-slate-800 mb-4">Company Overview</h3>
          <ul className="space-y-3 text-slate-600 list-none pl-0">
            <li><strong className="text-slate-800">Industry:</strong> Accounting</li>
            <li><strong className="text-slate-800">Company size:</strong> 2-10 employees</li>
            <li><strong className="text-slate-800">Headquarters:</strong> Noida, Uttar Pradesh</li>
            <li><strong className="text-slate-800">Founded:</strong> 2016</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">Locations</h3>
          <p className="text-slate-600">
            <strong>Primary Office:</strong><br />
            <a
              href="https://www.bing.com/maps/search?q=Office+No+G+16+Ground+Floor+Dharmpali+Palace+Bhoja+Market+Near+Vinayak+Hospital+Sector+27+Noida%2C+Bhoja+Market%2C+Noida%2C+Uttar+Pradesh+201301%2C+IN&cp=28.525282%7E77.397499&lvl=11.1&style=r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:underline"
            >
              Office No G 16 Ground Floor Dharmpali Palace Bhoja Market Near Vinayak Hospital Sector 27 Noida, Bhoja Market, Noida, Uttar Pradesh 201301, IN
            </a>
          </p>
          <p className="mt-4">
            <a
              href="https://www.bing.com/maps/search?q=Office+No+G+16+Ground+Floor+Dharmpali+Palace+Bhoja+Market+Near+Vinayak+Hospital+Sector+27+Noida%2C+Bhoja+Market%2C+Noida%2C+Uttar+Pradesh+201301%2C+IN&cp=28.525282%7E77.397499&lvl=11.1&style=r"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors"
            >
              🗺️ Get Directions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
