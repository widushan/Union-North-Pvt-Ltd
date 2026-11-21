"use client";

import { useState } from "react";
import { contactUsData } from "@/data/contactUs";

export default function ContactFormAndInfo() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    productInterest: "Tops & T-shirts",
    message: "",
  });

  const { form, companyInfo } = contactUsData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-line shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mb-2">
            {form.title}
          </h2>
          <p className="text-xs sm:text-sm text-muted mb-6">
            Direct communication with our Dankotuwa manufacturing & merchandising desk.
          </p>

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-tint rounded-full flex items-center justify-center mx-auto text-blue text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-navy">
                Thank you for reaching out!
              </h3>
              <p className="text-muted text-sm max-w-md mx-auto">
                We have received your inquiry. One of our apparel merchandisers will get back to you shortly with fabric specs and pricing.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-primary mt-4"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-2xl border border-line bg-bg text-ink text-sm focus:outline-none focus:border-blue transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company name"
                    className="w-full px-4 py-3 rounded-2xl border border-line bg-bg text-ink text-sm focus:outline-none focus:border-blue transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
                    Country *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="Country"
                    className="w-full px-4 py-3 rounded-2xl border border-line bg-bg text-ink text-sm focus:outline-none focus:border-blue transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-2xl border border-line bg-bg text-ink text-sm focus:outline-none focus:border-blue transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
                  Product Interest
                </label>
                <select
                  value={formData.productInterest}
                  onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-line bg-bg text-ink text-sm focus:outline-none focus:border-blue transition-colors"
                >
                  {form.productOptions.map((opt, idx) => (
                    <option key={idx} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your order quantities, target ship dates, or tech specifications..."
                  className="w-full px-4 py-3 rounded-2xl border border-line bg-bg text-ink text-sm focus:outline-none focus:border-blue transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-quote w-full sm:w-auto px-8 py-3.5 shadow-sm hover:shadow cursor-pointer"
                >
                  {form.buttonText}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Company Info & Map */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-line shadow-sm space-y-4">
            <h3 className="font-heading font-extrabold text-xl text-navy">
              {companyInfo.name}
            </h3>

            <div className="space-y-3 text-sm text-ink font-medium">
              <p className="text-muted leading-relaxed">
                {companyInfo.address}
              </p>
              <p>
                <span className="text-muted text-xs block uppercase">Phone</span>
                <a href={`tel:${companyInfo.phone}`} className="text-navy font-bold hover:text-blue">
                  {companyInfo.phone}
                </a>
              </p>
              <p>
                <span className="text-muted text-xs block uppercase">Email</span>
                <a href={`mailto:${companyInfo.email}`} className="text-navy font-bold hover:text-blue">
                  {companyInfo.email}
                </a>
              </p>
              <p>
                <span className="text-muted text-xs block uppercase">Working Hours</span>
                <span className="text-muted">{companyInfo.workingHours}</span>
              </p>
            </div>
          </div>

          {/* Map box */}
          <div className="w-full aspect-[4/3] rounded-3xl bg-tint border border-line flex flex-col items-center justify-center p-6 text-center relative overflow-hidden shadow-inner">
            <span className="text-3xl mb-2">📍</span>
            <span className="font-heading font-bold text-navy text-base">
              Dankotuwa Factory Campus
            </span>
            <span className="text-xs text-muted mt-1 max-w-xs">
              Industrial Zone, North Western Province, Sri Lanka.
            </span>
            <a
              href={companyInfo.googleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-xs font-bold text-blue hover:underline uppercase tracking-wider"
            >
              Open Google Maps ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
