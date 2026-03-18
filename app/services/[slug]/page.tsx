import React from 'react';

import FAQAccordion from '@/components/ui/FAQAccordion';
import LeadForm from '@/components/forms/LeadForm';
import { CheckCircle2 } from 'lucide-react';

import type { Metadata } from 'next';

import { constructMetadata } from '@/lib/seo';

export const dynamic = 'force-dynamic';

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const title = params.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return constructMetadata({
    title: `${title} Service`,
    description: `Expert and fast legal services for ${title}. Complete compliance support and hassle-free registration.`,
    url: `/services/${params.slug}`
  });
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  // In a real app we'd fetch actual service data here:
  // const service = await prisma.service.findUnique(...) 
  // if (!service) notFound();

  // Mocking data for presentation
  const serviceName = params.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');



  const dummyFaqs = [
    { question: `What is the process for ${serviceName}?`, answer: "The process is completely online. You upload documents, we verify and file them with the authorities." },
    { question: "How long does it take?", answer: "Usually between 7 to 15 working days depending on the government department's processing time." },
    { question: "Are there any hidden charges?", answer: "No, our service is transparent. Government fees are charged at actuals." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Service Hero */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">{serviceName} Service</h1>
            <p className="text-xl text-primary-100 mb-8 max-w-xl">
              Get comprehensive, fully-managed assistance for {serviceName}. We handle the complexity so you can focus on building your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#lead-form" className="bg-orange-400 hover:bg-orange-500 text-black font-bold py-4 px-8 rounded-full text-center transition-colors shadow-lg">
                Get Started
              </a>
              <div className="flex items-center text-primary-200 justify-center sm:justify-start mt-4 sm:mt-0">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                <span>100% Online Process</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            {/* Visual element placeholder */}
            <div className="w-full h-80 bg-primary-800/50 rounded-2xl flex items-center justify-center border border-primary-700">
              <span className="text-primary-300 text-lg">Illustration / Service Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Form */}
      <section className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
        <div className="lg:col-span-2 space-y-12">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
            <div className="prose prose-orange max-w-none text-gray-600">
              <p>
                {serviceName} is an essential step for businesses looking to scale and operate legally. The process involves comprehensive documentation, government filing, and constant tracking. Our team of experts ensures an error-free filing.
              </p>
              <h3>Why is it required?</h3>
              <ul>
                <li>Grants legal recognition to your entity</li>
                <li>Protects your brand and intellectual property</li>
                <li>Ensures compliance with local and federal laws</li>
              </ul>
            </div>
          </div>



          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <FAQAccordion targetFaqs={dummyFaqs} />
          </div>

        </div>

        {/* Sticky Sidebar */}
        <div className="lg:col-span-1 relative">
          <div className="sticky top-24" id="lead-form">
            <LeadForm serviceSlug={params.slug} serviceName={serviceName} />
          </div>
        </div>
      </section>

    </div>
  );
}
