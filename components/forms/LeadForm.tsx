"use client";

import React, { useState } from 'react';

export default function LeadForm({ serviceSlug = "general-inquiry", serviceName = "this service" }: { serviceSlug?: string, serviceName?: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      entityType: formData.get('entityType'),
      serviceSlug,
    };

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setSuccess(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200 text-center">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h3>
        <p className="text-gray-600">Our legal expert will contact you shortly to discuss {serviceName}.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Expert Assistance</h3>
      <p className="text-gray-600 mb-6 text-sm">Fill the form to get a free consultation for {serviceName}.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input required type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input required type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input required type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="+91 98765 43210" />
        </div>

        <div>
          <label htmlFor="entityType" className="block text-sm font-medium text-gray-700 mb-1">Business Entity (Optional)</label>
          <select id="entityType" name="entityType" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white">
            <option value="">Select Entity Type</option>
            <option value="Private Limited Company">Private Limited Company</option>
            <option value="LLP">LLP</option>
            <option value="Partnership">Partnership</option>
            <option value="Sole Proprietorship">Sole Proprietorship</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button 
          disabled={loading}
          type="submit" 
          className="w-full bg-primary-500 text-white font-bold py-4 rounded-lg hover:bg-primary-600 transition-colors shadow-md disabled:bg-primary-400 disabled:cursor-not-allowed mt-4"
        >
          {loading ? 'Submitting...' : 'Request Consultation'}
        </button>
      </form>
      <p className="text-xs text-gray-500 text-center mt-4">By submitting this form, you agree to our Terms and Privacy Policy.</p>
    </div>
  );
}
