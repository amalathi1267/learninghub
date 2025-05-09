'use client';

import { useEffect, useState } from 'react';
import styles from './CourseInquiryForm.module.css';

export default function CourseInquiryForm({
  courseTitle,
  closeForm,
}: {
  courseTitle: string;
  closeForm: () => void;
}) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: courseTitle,
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setForm((prev) => ({ ...prev, course: courseTitle }));
  }, [courseTitle]);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        closeForm();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, closeForm]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/courseinquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setIsSubmitted(true);
      } else {
        alert('Failed to submit inquiry.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    }
  };

  if (isSubmitted) {
    return (
      <div className={styles.popupWrapper}>
        <div className={styles.formBox}>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              ✅ Thank you for your submission!
            </h2>
            <p className="text-gray-700">
              We have received your inquiry and will get back to you shortly.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Closing the form in a few seconds...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.popupWrapper}>
      <div className={styles.formBox}>
        <h2 className="text-2xl font-bold mb-6 text-center">📩 Course Inquiry</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-800">Course</label>
            <input
              type="text"
              name="course"
              value={form.course}
              readOnly
              className={`${styles.inputField} mt-1`}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className={`${styles.inputField} mt-1`}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className={`${styles.inputField} mt-1`}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className={`${styles.inputField} mt-1`}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className={`${styles.inputField} mt-1`}
              placeholder="Write your query here..."
            />
          </div>

          <div className="flex flex-col items-center mt-6 space-y-2">
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-800 text-white py-2 px-6 rounded-md"
            >
              Submit Inquiry
            </button>
            <p className="text-sm text-gray-600 mt-4">
              📞 +91-6478935577 (Available 24x7)
            </p>
          </div>
        </form>

        {/* ❌ Close Button */}
        <button
          onClick={closeForm}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
