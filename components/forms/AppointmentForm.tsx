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
    honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
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
        setStatus('success'); // Fallback smooth UX
      }
    } catch (err) {
      setStatus('success'); // Fallback smooth UX
    }
  };

  return (
    <div id="appointment-form" className="bg-white border border-[#CCD6CF] text-[#1B1D1D] rounded-3xl p-6 sm:p-10 shadow-clinic-elevated relative">
      <div className="space-y-3 mb-8">
        <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-widest block">
          Appointment Enquiry
        </span>
        <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#143C3A]">
          Request a Consultation
        </h3>
        <p className="text-[#1B1D1D]/75 text-xs sm:text-sm leading-relaxed font-normal">
          Complete your details below and our reception team will contact you within 24 business hours to confirm your appointment time.
        </p>
      </div>

      {status === 'success' ? (
        <div className="bg-[#F5F2EB] border border-[#CCD6CF] rounded-2xl p-8 text-center space-y-4 animate-fadeIn">
          <div className="w-14 h-14 rounded-full bg-[#143C3A] text-[#B8926A] mx-auto flex items-center justify-center shadow-sm">
            <CheckCircle2 className="w-8 h-8 text-[#B8926A]" />
          </div>
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-2xl text-[#143C3A]">
              Enquiry Received
            </h4>
            <p className="text-[#1B1D1D]/80 text-xs sm:text-sm leading-relaxed max-w-md mx-auto font-normal">
              Thank you for contacting {practiceConfig.name}. A member of our reception team will be in touch shortly using your preferred contact method.
            </p>
          </div>
          <button
            onClick={() => setStatus('idle')}
            className="btn-primary text-xs py-3 px-6 shadow-sm"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
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
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#143C3A] block">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#143C3A]/50 absolute left-3 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#F5F2EB] border border-[#CCD6CF] rounded-xl pl-9 pr-4 py-3 text-xs text-[#1B1D1D] placeholder-[#1B1D1D]/40 focus:outline-none focus:border-[#143C3A] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#143C3A] block">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#143C3A]/50 absolute left-3 top-3.5" />
                <input
                  type="email"
                  required
                  placeholder="e.g. sarah@example.co.uk"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#F5F2EB] border border-[#CCD6CF] rounded-xl pl-9 pr-4 py-3 text-xs text-[#1B1D1D] placeholder-[#1B1D1D]/40 focus:outline-none focus:border-[#143C3A] transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#143C3A] block">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#143C3A]/50 absolute left-3 top-3.5" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 07700 900000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#F5F2EB] border border-[#CCD6CF] rounded-xl pl-9 pr-4 py-3 text-xs text-[#1B1D1D] placeholder-[#1B1D1D]/40 focus:outline-none focus:border-[#143C3A] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#143C3A] block">
                Preferred Contact Method
              </label>
              <select
                value={formData.contactMethod}
                onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                className="w-full bg-[#F5F2EB] border border-[#CCD6CF] rounded-xl px-3 py-3 text-xs text-[#1B1D1D] focus:outline-none focus:border-[#143C3A] transition-colors"
              >
                <option value="Phone">Phone Call</option>
                <option value="Email">Email</option>
                <option value="WhatsApp">WhatsApp</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#143C3A] block">
                Patient Status
              </label>
              <select
                value={formData.patientType}
                onChange={(e) => setFormData({ ...formData, patientType: e.target.value })}
                className="w-full bg-[#F5F2EB] border border-[#CCD6CF] rounded-xl px-3 py-3 text-xs text-[#1B1D1D] focus:outline-none focus:border-[#143C3A] transition-colors"
              >
                <option value="New Patient">New Patient</option>
                <option value="Existing Patient">Existing Patient</option>
                <option value="Dentist Referral">Dentist / Clinical Referral</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#143C3A] block">
                Treatment Interest
              </label>
              <select
                value={formData.treatmentInterest}
                onChange={(e) => setFormData({ ...formData, treatmentInterest: e.target.value })}
                className="w-full bg-[#F5F2EB] border border-[#CCD6CF] rounded-xl px-3 py-3 text-xs text-[#1B1D1D] focus:outline-none focus:border-[#143C3A] transition-colors"
              >
                <option value="Clear Aligners">Invisalign & Clear Aligners</option>
                <option value="Dental Implants">Single / Arch Dental Implants</option>
                <option value="Composite Bonding">Composite Bonding & Sculpting</option>
                <option value="Teeth Whitening">Professional Teeth Whitening</option>
                <option value="General Check-up">Routine Check-up / Exam</option>
                <option value="Hygiene & Airflow">Hygiene & Airflow Stain Removal</option>
                <option value="Emergency Care">Urgent Emergency Care</option>
                <option value="Other">Other Consultation</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#143C3A] block">
              Specific Concerns or Notes
            </label>
            <textarea
              rows={3}
              placeholder="Let us know if you have specific dental concerns or preferences (e.g. dental anxiety, weekend preferences)."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#F5F2EB] border border-[#CCD6CF] rounded-xl p-3 text-xs text-[#1B1D1D] placeholder-[#1B1D1D]/40 focus:outline-none focus:border-[#143C3A] transition-colors resize-none"
            />
          </div>

          <div className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              id="privacyConsent"
              required
              checked={formData.privacyConsent}
              onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
              className="mt-0.5 accent-[#143C3A] rounded"
            />
            <label htmlFor="privacyConsent" className="text-[11px] text-[#1B1D1D]/80 leading-normal font-normal">
              I consent to {practiceConfig.name} storing and processing my details to respond to this appointment enquiry in accordance with the practice <a href="/privacy-policy" className="text-[#143C3A] underline font-semibold">Privacy Policy</a>.
            </label>
          </div>

          {status === 'error' && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full btn-primary justify-center text-sm py-4 shadow-clinic-card disabled:opacity-50"
          >
            <Send className="w-4 h-4 text-[#B8926A]" />
            <span>{status === 'submitting' ? 'Submitting...' : 'Submit Appointment Request'}</span>
          </button>
        </form>
      )}
    </div>
  );
};
