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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base">
            Have an opportunity, internship, or project inquiry? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-8 glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Contact Details
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Available for full-stack internships, web development projects, and entry-level IT roles.
            </p>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{personalInfo.email}</div>
                  </div>
                </div>

                <button
                  onClick={copyEmailToClipboard}
                  aria-label="Copy email address"
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{personalInfo.phone}</div>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Message Received!</h3>
                <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto text-sm">
                  Thank you for reaching out. I will respond to your query promptly.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline" size="sm">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
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
                      className={`w-full px-4 py-3 text-sm rounded-2xl bg-white dark:bg-slate-900 border ${
                        errors.name ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800'
                      } text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.name && <span id="contact-name-error" className="text-xs text-rose-500">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
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
                      className={`w-full px-4 py-3 text-sm rounded-2xl bg-white dark:bg-slate-900 border ${
                        errors.email ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800'
                      } text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.email && <span id="contact-email-error" className="text-xs text-rose-500">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. IT Internship Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
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
                    className={`w-full px-4 py-3 text-sm rounded-2xl bg-white dark:bg-slate-900 border ${
                      errors.message ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800'
                    } text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
                  />
                  {errors.message && <span id="contact-message-error" className="text-xs text-rose-500">{errors.message}</span>}
                </div>

                <div className="hidden" aria-hidden="true">
                  <label htmlFor="contact-company">Company</label>
                  <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  size="lg"
                  icon={isSubmitting ? undefined : <Send className="w-4 h-4" />}
                  className="w-full justify-center"
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
