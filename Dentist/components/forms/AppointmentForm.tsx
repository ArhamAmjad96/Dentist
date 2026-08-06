'use me';
'use client';

import React, { useState } from 'react';
import { practiceConfig } from '@/data/practice';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Calendar,
  User,
  Mail,
  Phone,
  MessageSquare,
} from 'lucide-react';

export const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    contactMethod: 'Phone',
    patientType: 'New Patient',
    treatmentInterest: 'General Dentistry',
    preferredDay: 'Any Day',
    preferredTime: 'Morning',
    message: '',
    privacyConsent: false,
    honeypot: '', // anti-spam field
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      // Silent rejection for spam bots
      setStatus('success');
      return;
    }

    if (!formData.privacyConsent) {
      setErrorMessage('Please accept the privacy consent to submit your request.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          contactMethod: 'Phone',
          patientType: 'New Patient',
          treatmentInterest: 'General Dentistry',
          preferredDay: 'Any Day',
          preferredTime: 'Morning',
          message: '',
          privacyConsent: false,
          honeypot: '',
        });
      } else {
        const data = await res.json();
        setErrorMessage(data.message || 'Failed to submit request. Please try calling us directly.');
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network connection error. Please try calling the reception desk.');
    }
  };

  return (
    <div className="bg-navy-900 border border-navy-800 text-ivory rounded-3xl p-6 sm:p-10 shadow-elevated relative">
      <div className="space-y-3 mb-8">
        <span className="text-xs font-semibold text-brass uppercase tracking-widest block">
          Appointment Enquiry
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory">
          Request an Appointment
        </h3>
        <p className="text-sage text-xs leading-relaxed">
          Complete your details below and our reception team will contact you within 24 business hours to confirm your appointment time.
        </p>

        {/* Safety Warning */}
        <div className="p-3 rounded-xl bg-navy-950 border border-brass/30 text-xs text-brass flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>
            Please do not use this form for urgent medical emergencies. For acute out-of-hours emergencies, call 07700 900892 or contact NHS 111.
          </span>
        </div>
      </div>

      {status === 'success' ? (
        <div className="bg-navy-950 border border-brass/40 rounded-2xl p-8 text-center space-y-4 animate-fadeIn">
          <div className="w-14 h-14 rounded-full bg-brass/20 text-brass mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-xl text-ivory">
              Enquiry Received
            </h4>
            <p className="text-sage text-xs leading-relaxed max-w-md mx-auto">
              Thank you for contacting {practiceConfig.name}. A member of our reception team will be in touch shortly using your preferred contact method.
            </p>
          </div>
          <button
            onClick={() => setStatus('idle')}
            className="bg-brass hover:bg-brass-dark text-navy-900 font-bold px-6 py-2.5 rounded-xl text-xs transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Anti-spam honeypot (hidden) */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="website_url"
              tabIndex={-1}
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-sage block">
                Full Name <span className="text-brass">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-sage absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-navy-950 border border-navy-700 rounded-xl pl-9 pr-4 py-2.5 text-xs text-ivory placeholder-navy-500 focus:outline-none focus:border-brass transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-sage block">
                Email Address <span className="text-brass">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-sage absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  placeholder="e.g. sarah@example.co.uk"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-navy-950 border border-navy-700 rounded-xl pl-9 pr-4 py-2.5 text-xs text-ivory placeholder-navy-500 focus:outline-none focus:border-brass transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-sage block">
                Phone Number <span className="text-brass">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-sage absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 07700 900000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-navy-950 border border-navy-700 rounded-xl pl-9 pr-4 py-2.5 text-xs text-ivory placeholder-navy-500 focus:outline-none focus:border-brass transition-colors"
                />
              </div>
            </div>

            {/* Contact Method */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-sage block">
                Preferred Contact Method
              </label>
              <select
                value={formData.contactMethod}
                onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                className="w-full bg-navy-950 border border-navy-700 rounded-xl px-3 py-2.5 text-xs text-ivory focus:outline-none focus:border-brass transition-colors"
              >
                <option value="Phone">Phone Call</option>
                <option value="Email">Email</option>
                <option value="WhatsApp">WhatsApp</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Patient Status */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-sage block">
                Patient Status
              </label>
              <select
                value={formData.patientType}
                onChange={(e) => setFormData({ ...formData, patientType: e.target.value })}
                className="w-full bg-navy-950 border border-navy-700 rounded-xl px-3 py-2.5 text-xs text-ivory focus:outline-none focus:border-brass transition-colors"
              >
                <option value="New Patient">New Patient</option>
                <option value="Existing Patient">Existing Patient</option>
                <option value="Dentist Referral">Dentist / Clinical Referral</option>
              </select>
            </div>

            {/* Treatment Interest */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-sage block">
                Treatment Interest
              </label>
              <select
                value={formData.treatmentInterest}
                onChange={(e) => setFormData({ ...formData, treatmentInterest: e.target.value })}
                className="w-full bg-navy-950 border border-navy-700 rounded-xl px-3 py-2.5 text-xs text-ivory focus:outline-none focus:border-brass transition-colors"
              >
                <option value="General Check-up">Routine Check-up / Exam</option>
                <option value="Hygiene & Airflow">Hygiene & Airflow Therapy</option>
                <option value="Teeth Whitening">Teeth Whitening</option>
                <option value="Clear Aligners">Clear Aligners / Orthodontics</option>
                <option value="Dental Implants">Dental Implants</option>
                <option value="Composite Bonding">Composite Bonding</option>
                <option value="Dentures">Dentures</option>
                <option value="Emergency Care">Emergency Care</option>
                <option value="Other">Other / General Enquiry</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-sage block">
              Additional Details / Specific Concerns
            </label>
            <textarea
              rows={3}
              placeholder="Let us know if you have specific dental concerns or preferences (e.g. dental anxiety, weekend preferences)."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-navy-950 border border-navy-700 rounded-xl p-3 text-xs text-ivory placeholder-navy-500 focus:outline-none focus:border-brass transition-colors resize-none"
            />
          </div>

          {/* Privacy Consent Checkbox */}
          <div className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              id="privacyConsent"
              required
              checked={formData.privacyConsent}
              onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
              className="mt-0.5 accent-brass rounded"
            />
            <label htmlFor="privacyConsent" className="text-[11px] text-sage leading-normal">
              I consent to {practiceConfig.name} storing and processing my contact details to respond to this appointment enquiry in accordance with the practice <a href="/privacy-policy" className="text-brass underline">Privacy Policy</a>.
            </label>
          </div>

          {/* Error Message */}
          {status === 'error' && (
            <div className="p-3 rounded-xl bg-red-900/40 border border-red-700 text-xs text-red-200 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-brass hover:bg-brass-dark text-navy-900 font-bold py-3.5 rounded-xl text-sm transition-all shadow-medium hover:shadow-elevated flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            <span>{status === 'submitting' ? 'Submitting...' : 'Submit Appointment Enquiry'}</span>
          </button>
        </form>
      )}
    </div>
  );
};
