"use client";

import { useState } from "react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "Corporate Uniforms",
    quantity: "100-500 units",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-line">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-tint text-navy flex items-center justify-center hover:bg-line transition-colors cursor-pointer"
          aria-label="Close quote modal"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-tint rounded-full flex items-center justify-center mx-auto text-blue text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-navy">Quote Request Received!</h3>
            <p className="text-muted text-sm sm:text-base max-w-md mx-auto">
              Thank you, <span className="font-semibold text-ink">{formData.name}</span>. Our apparel merchandising team will review your specifications and contact you within 24 business hours.
            </p>
            <div className="pt-4">
              <button onClick={handleReset} className="btn-primary cursor-pointer">
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="eyebrow block">Direct Factory Merchandising</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
                Request a Custom Quote
              </h3>
              <p className="text-xs sm:text-sm text-muted mt-1">
                Tell us about your team or project requirements. We offer competitive factory pricing with low sample turnarounds.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Silva"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-line bg-bg text-ink text-sm focus:outline-none focus:border-blue transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-line bg-bg text-ink text-sm focus:outline-none focus:border-blue transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-line bg-bg text-ink text-sm focus:outline-none focus:border-blue transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
                    Estimated Quantity
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-line bg-bg text-ink text-sm focus:outline-none focus:border-blue transition-colors"
                  >
                    <option value="50-100 units">50 - 100 units</option>
                    <option value="100-500 units">100 - 500 units</option>
                    <option value="500-2,000 units">500 - 2,000 units</option>
                    <option value="2,000+ units">2,000+ units (Bulk Export)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
                  Product Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-line bg-bg text-ink text-sm focus:outline-none focus:border-blue transition-colors"
                >
                  <option value="Corporate Uniforms">Corporate & Executive Uniforms</option>
                  <option value="Industrial Workwear">Industrial & Safety Workwear</option>
                  <option value="Hospitality & Culinary">Hospitality & Culinary Apparel</option>
                  <option value="Medical & Scrubs">Healthcare & Hospital Scrubs</option>
                  <option value="Custom OEM">Custom OEM / Private Label Apparel</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
                  Project Notes & Fabric Specifications
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention color preferences, embroidery/branding, fabric blends, or deadline..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-line bg-bg text-ink text-sm focus:outline-none focus:border-blue transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-semibold text-muted hover:text-ink transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-quote cursor-pointer">
                  Submit Quote Request →
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
