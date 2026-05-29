'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function isValidEmail(email) {
  return email.includes('@') && email.includes('.');
}

export default function ContactForm({ submitLabel = 'Request Appointment' }) {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    setShowSuccess(false);
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowSuccess(false);

    const newErrors = {
      name: fields.name.trim() === '',
      email: fields.email.trim() === '' || !isValidEmail(fields.email),
      message: fields.message.trim() === '',
    };

    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setShowSuccess(true);
    setFields({ name: '', email: '', message: '' });
    setErrors({ name: false, email: false, message: false });
  };

  const inputClass = (hasError) =>
    `w-full border-0 border-b bg-transparent py-3 font-sans-dm text-sm text-cream transition-colors focus:border-gold focus:outline-none ${
      hasError ? 'border-red-600' : 'border-charcoal'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div className="mb-8">
        <label htmlFor="name" className="label mb-2 block">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={fields.name}
          onChange={handleChange}
          className={inputClass(errors.name)}
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-2 font-sans-dm text-xs text-red-500"
            >
              Please enter your full name
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="mb-8">
        <label htmlFor="email" className="label mb-2 block">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={fields.email}
          onChange={handleChange}
          className={inputClass(errors.email)}
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-2 font-sans-dm text-xs text-red-500"
            >
              Please enter a valid email address
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="label mb-2 block">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={fields.message}
          onChange={handleChange}
          className={`${inputClass(errors.message)} resize-none`}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-2 font-sans-dm text-xs text-red-500"
            >
              Please enter a message
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-gold w-full disabled:opacity-60"
      >
        {submitting ? 'Sending...' : submitLabel}
      </button>

      <AnimatePresence>
        {showSuccess && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="label mt-6 text-center text-gold"
          >
            Thank you! We will be in touch shortly.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
