import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { Button } from '../ui/Button';
import { Toast } from '../ui/Toast';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please include a message';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setToastMessage('');
    setErrors({});
    const company = new FormData(e.currentTarget as HTMLFormElement).get('company');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          ...formData,
          company
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) {
        throw new Error(typeof result.message === 'string' ? result.message : 'Contact request failed');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setToastType('success');
      setToastMessage('Thanks! Your message has been sent successfully.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setIsSubmitting(false);
      setToastType('error');
      setToastMessage(error instanceof Error && error.message === 'Email service is not configured.'
        ? 'Email service is not configured. Please contact me directly for now.'
        : 'Unable to send your message right now. Please try again or contact me directly.');
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setToastMessage('Email address copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
            style={{
              background:
                "linear-gradient(90deg, #2563EB 0%, #06B6D4 25%, #7C3AED 50%, #A855F7 75%, #EC4899 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Get In Touch
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base">
            Have an opportunity, internship, or project inquiry? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-8 p-8 rounded-3xl border border-[rgba(99,102,241,0.15)] shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 !bg-[linear-gradient(135deg,#BFDBFE_0%,#C4B5FD_50%,#A5F3FC_100%)] dark:!bg-[linear-gradient(135deg,#0B1120_0%,#083344_50%,#312E81_100%)] hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_10px_30px_rgba(49,46,129,0.5)]">
            <h3 className="text-2xl font-bold !text-[#0F172A] dark:!text-[#F8FAFC]">
              Contact Details
            </h3>

            <p className="text-sm !text-[#334155] dark:!text-[#CBD5E1] leading-relaxed">
              Available for full-stack internships, web development projects, and entry-level IT roles.
            </p>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[rgba(255,255,255,0.35)] dark:bg-[rgba(0,0,0,0.25)] shadow-sm flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[rgba(255,255,255,0.5)] dark:bg-[rgba(255,255,255,0.1)] !text-[#2563EB] dark:!text-[#38BDF8]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold !text-[#334155] dark:!text-[#CBD5E1] uppercase tracking-wider">Email</div>
                    <div className="text-sm font-semibold !text-[#0F172A] dark:!text-[#F8FAFC]">{personalInfo.email}</div>
                  </div>
                </div>

                <button
                  onClick={copyEmailToClipboard}
                  aria-label="Copy email address"
                  className="p-2 rounded-xl border border-[rgba(99,102,241,0.18)] dark:border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.6)] dark:hover:bg-[rgba(255,255,255,0.15)] !text-[#334155] dark:!text-[#CBD5E1] transition-colors"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-[rgba(255,255,255,0.35)] dark:bg-[rgba(0,0,0,0.25)] shadow-sm flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[rgba(255,255,255,0.5)] dark:bg-[rgba(255,255,255,0.1)] !text-[#0891B2] dark:!text-[#22D3EE]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold !text-[#334155] dark:!text-[#CBD5E1] uppercase tracking-wider">Phone</div>
                  <div className="text-sm font-semibold !text-[#0F172A] dark:!text-[#F8FAFC]">{personalInfo.phone}</div>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[rgba(255,255,255,0.35)] dark:bg-[rgba(0,0,0,0.25)] shadow-sm flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[rgba(255,255,255,0.5)] dark:bg-[rgba(255,255,255,0.1)] !text-[#7C3AED] dark:!text-[#A855F7]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold !text-[#334155] dark:!text-[#CBD5E1] uppercase tracking-wider">Location</div>
                  <div className="text-sm font-semibold !text-[#0F172A] dark:!text-[#F8FAFC]">{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl border border-[rgba(99,102,241,0.15)] shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 !bg-[linear-gradient(135deg,#DDD6FE_0%,#F9A8D4_50%,#BFDBFE_100%)] dark:!bg-[linear-gradient(135deg,#1E1B4B_0%,#4C1D4F_50%,#172554_100%)] hover:shadow-[0_10px_30px_rgba(139,92,246,0.3)] dark:hover:shadow-[0_10px_30px_rgba(76,29,79,0.5)]">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold !text-[#0F172A] dark:!text-[#F8FAFC]">Message Received!</h3>
                <p className="!text-[#334155] dark:!text-[#CBD5E1] max-w-md mx-auto text-sm">
                  Thank you for reaching out. I will respond to your query promptly.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline" size="sm" className="bg-white/50 dark:bg-black/20 hover:bg-white dark:hover:bg-black/40 border-[rgba(99,102,241,0.18)] dark:border-white/10 !text-[#0F172A] dark:!text-[#F8FAFC]">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-xs font-bold !text-[#334155] dark:!text-[#CBD5E1] uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className={`w-full px-4 py-3 text-sm rounded-2xl bg-[rgba(255,255,255,0.55)] dark:bg-[rgba(15,23,42,0.65)] border ${
                        errors.name ? 'border-rose-400 dark:border-rose-500' : 'border-[rgba(99,102,241,0.25)] dark:border-[rgba(129,140,248,0.35)]'
                      } !text-[#0F172A] dark:!text-[#F8FAFC] placeholder:text-[#64748B] dark:placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#2563EB] dark:focus:border-[#818CF8] transition-colors`}
                    />
                    {errors.name && <span id="contact-name-error" className="text-xs text-rose-500 dark:text-rose-400">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs font-bold !text-[#334155] dark:!text-[#CBD5E1] uppercase tracking-wider">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className={`w-full px-4 py-3 text-sm rounded-2xl bg-[rgba(255,255,255,0.55)] dark:bg-[rgba(15,23,42,0.65)] border ${
                        errors.email ? 'border-rose-400 dark:border-rose-500' : 'border-[rgba(99,102,241,0.25)] dark:border-[rgba(129,140,248,0.35)]'
                      } !text-[#0F172A] dark:!text-[#F8FAFC] placeholder:text-[#64748B] dark:placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#2563EB] dark:focus:border-[#818CF8] transition-colors`}
                    />
                    {errors.email && <span id="contact-email-error" className="text-xs text-rose-500 dark:text-rose-400">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-xs font-bold !text-[#334155] dark:!text-[#CBD5E1] uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. IT Internship Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-2xl bg-[rgba(255,255,255,0.55)] dark:bg-[rgba(15,23,42,0.65)] border border-[rgba(99,102,241,0.25)] dark:border-[rgba(129,140,248,0.35)] !text-[#0F172A] dark:!text-[#F8FAFC] placeholder:text-[#64748B] dark:placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#2563EB] dark:focus:border-[#818CF8] transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-xs font-bold !text-[#334155] dark:!text-[#CBD5E1] uppercase tracking-wider">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Hi Kishor, I saw your portfolio and would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    className={`w-full px-4 py-3 text-sm rounded-2xl bg-[rgba(255,255,255,0.55)] dark:bg-[rgba(15,23,42,0.65)] border ${
                      errors.message ? 'border-rose-400 dark:border-rose-500' : 'border-[rgba(99,102,241,0.25)] dark:border-[rgba(129,140,248,0.35)]'
                    } !text-[#0F172A] dark:!text-[#F8FAFC] placeholder:text-[#64748B] dark:placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#2563EB] dark:focus:border-[#818CF8] resize-none transition-colors`}
                  />
                  {errors.message && <span id="contact-message-error" className="text-xs text-rose-500 dark:text-rose-400">{errors.message}</span>}
                </div>

                <div className="hidden" aria-hidden="true">
                  <label htmlFor="contact-company">Company</label>
                  <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="ghost"
                  size="lg"
                  icon={isSubmitting ? undefined : <Send className="w-4 h-4 text-white" />}
                  className="w-full justify-center !bg-[linear-gradient(90deg,#2563EB_0%,#6366F1_50%,#7C3AED_100%)] hover:!bg-[linear-gradient(90deg,#1d4ed8_0%,#4f46e5_50%,#6d28d9_100%)] !text-white !border-0 shadow-[0_4px_10px_rgba(37,99,235,0.2)] hover:shadow-[0_4px_15px_rgba(124,58,237,0.4)] transition-all duration-300"
                >
                  {isSubmitting ? 'Sending...' : "Send Message"}
                </Button>
              </form>
            )}
          </div>

        </div>

      </div>

      <Toast
        isOpen={!!toastMessage}
        message={toastMessage}
        type={toastType}
        onClose={() => setToastMessage('')}
      />
    </section>
  );
};
