import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Info,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { SITE_ASSETS, SITE_CONFIG } from '../data/siteConfig';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';

interface ContactFormValues {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactFormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const INITIAL_VALUES: ContactFormValues = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export const ContactPage: React.FC = () => {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (form: ContactFormValues): ContactFormErrors => {
    const next: ContactFormErrors = {};
    if (!form.fullName.trim()) {
      next.fullName = 'Full name is required.';
    }
    if (!form.email.trim()) {
      next.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim()) {
      next.subject = 'Subject is required.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      next.message = 'Please enter a message of at least 10 characters.';
    }
    return next;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 650));
      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong while validating your message. Please retry.');
    } finally {
      setSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: MapPin,
      title: 'HEADQUARTERS',
      detail: SITE_CONFIG.contact.fullAddress,
    },
    {
      icon: Phone,
      title: 'PHONE',
      detail: SITE_CONFIG.contact.phone,
    },
    {
      icon: Mail,
      title: 'EMAIL',
      detail: SITE_CONFIG.contact.email,
    },
    {
      icon: Clock,
      title: 'OPENING HOURS',
      detail: SITE_CONFIG.contact.hours,
    },
  ];

  return (
    <div className="bg-[#F6F6F6]">
      <SeoHead
        title="Contact Us – FUELMAX Gas Station"
        description="Get in touch with FUELMAX Gas Station for customer support, fleet inquiries, station feedback, or store questions."
      />

      <PageHero
        eyebrow="GET IN TOUCH"
        titleWhite="CONTACT"
        titleGold="FUELMAX"
        description="Have questions about station amenities, rewards points, or commercial fleet cards? Reach out to our customer support team."
        image={SITE_ASSETS.heroCanopy}
        imageAlt="FUELMAX station exterior"
      />

      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-14 lg:py-20">
        {/* 4 Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white rounded-[10px] border border-[#E8E8E8] p-6 shadow-sm"
              >
                <div className="w-11 h-11 rounded-[8px] bg-[#101318] text-[#FFB900] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="font-display text-[11px] font-bold tracking-[0.08em] uppercase text-[#656565]">
                  {card.title}
                </div>
                <div className="mt-1.5 text-[14.5px] font-semibold text-[#111318]">
                  {card.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Form Container */}
        <div className="bg-white rounded-[12px] border border-[#E8E8E8] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 bg-[#101318] text-white p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="font-display text-[12px] font-bold tracking-[0.14em] uppercase text-[#FFB900]">
                DIRECT INQUIRY
              </div>
              <h2 className="mt-2 font-display font-extrabold text-[28px] uppercase leading-tight">
                WE&apos;RE HERE TO HELP
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.7] text-[#D5D5D5]/85">
                Whether you&apos;re asking about station hours, reporting a card issue,
                or setting up corporate fuel cards, our support desk responds promptly
                during business hours.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-3 text-[13px] text-[#D5D5D5]/75">
              <Info className="w-4 h-4 text-[#FFB900] shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                Demo Notice: This interface demonstrates client-side form
                validation and confirmation feedback; no live external email is
                dispatched.
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-10">
            {submitted ? (
              <div className="py-10 text-center max-w-md mx-auto">
                <CheckCircle2
                  className="w-12 h-12 text-[#279B54] mx-auto mb-4"
                  aria-hidden="true"
                />
                <h3 className="font-display font-extrabold text-[22px] uppercase text-[#111318]">
                  MESSAGE VALIDATED (DEMO)
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[#656565]">
                  Thank you, <strong className="text-[#111318]">{values.fullName}</strong>.
                  Your inquiry regarding &ldquo;{values.subject}&rdquo; passed all
                  validation checks in this frontend preview.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setValues(INITIAL_VALUES);
                    setSubmitted(false);
                  }}
                  className="mt-6 bg-[#101318] hover:bg-[#20242B] text-white font-display font-bold text-[12px] uppercase px-6 py-3 rounded-[6px] cursor-pointer transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {submitError && (
                  <div className="flex items-center gap-2.5 p-4 rounded-[6px] bg-red-50 border border-red-200 text-red-700 text-[14px]">
                    <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-fullName"
                      className="block font-display text-[12px] font-bold uppercase tracking-wide text-[#111318] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-fullName"
                      name="fullName"
                      type="text"
                      value={values.fullName}
                      onChange={handleChange}
                      placeholder="Alex Morgan"
                      aria-invalid={Boolean(errors.fullName)}
                      className={`w-full px-4 py-3 rounded-[6px] bg-[#F6F6F6] border text-[14px] text-[#111318] focus:outline-none focus:ring-2 focus:ring-[#FFB900] ${
                        errors.fullName ? 'border-red-500' : 'border-[#E8E8E8]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-[12.5px] text-red-600">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-display text-[12px] font-bold uppercase tracking-wide text-[#111318] mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      aria-invalid={Boolean(errors.email)}
                      className={`w-full px-4 py-3 rounded-[6px] bg-[#F6F6F6] border text-[14px] text-[#111318] focus:outline-none focus:ring-2 focus:ring-[#FFB900] ${
                        errors.email ? 'border-red-500' : 'border-[#E8E8E8]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-[12.5px] text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block font-display text-[12px] font-bold uppercase tracking-wide text-[#111318] mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      className="w-full px-4 py-3 rounded-[6px] bg-[#F6F6F6] border border-[#E8E8E8] text-[14px] text-[#111318] focus:outline-none focus:ring-2 focus:ring-[#FFB900]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block font-display text-[12px] font-bold uppercase tracking-wide text-[#111318] mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={values.subject}
                      onChange={handleChange}
                      placeholder="Rewards or Station Inquiry"
                      aria-invalid={Boolean(errors.subject)}
                      className={`w-full px-4 py-3 rounded-[6px] bg-[#F6F6F6] border text-[14px] text-[#111318] focus:outline-none focus:ring-2 focus:ring-[#FFB900] ${
                        errors.subject ? 'border-red-500' : 'border-[#E8E8E8]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-[12.5px] text-red-600">{errors.subject}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-display text-[12px] font-bold uppercase tracking-wide text-[#111318] mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={handleChange}
                    placeholder="How can our station team help?"
                    aria-invalid={Boolean(errors.message)}
                    className={`w-full px-4 py-3 rounded-[6px] bg-[#F6F6F6] border text-[14px] text-[#111318] focus:outline-none focus:ring-2 focus:ring-[#FFB900] ${
                      errors.message ? 'border-red-500' : 'border-[#E8E8E8]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-[12.5px] text-red-600">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 bg-[#FFB900] hover:bg-[#FFC21A] disabled:opacity-70 text-[#080B0F] font-display font-bold text-[12px] tracking-[0.06em] uppercase px-7 py-3.5 rounded-[6px] transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>{submitting ? 'VALIDATING...' : 'SEND MESSAGE'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
