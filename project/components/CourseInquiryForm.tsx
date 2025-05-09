'use client';
import { useState, useEffect } from 'react';

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

  const [status, setStatus] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setForm((prev) => ({ ...prev, course: courseTitle }));
  }, [courseTitle]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const res = await fetch('/api/courseinquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setIsSubmitted(true);
        setStatus('Inquiry submitted successfully!');
        setForm({ ...form, name: '', email: '', phone: '', message: '' });
        setTimeout(() => {
            closeForm();
          }, 3000);
      } else {
        setStatus(`Error: ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      setStatus('Failed to submit inquiry.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-blue-200 p-6">
        <div className="bg-white shadow-xl rounded-xl p-8 text-center max-w-md w-full">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            ✅ Thank you for your submission!
          </h2>
          <p className="text-gray-700">
            We have received your inquiry and will get back to you shortly.
          </p>
          <p className="text-sm text-gray-500 mt-4">Closing the form in a few seconds...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Please share your details for contact</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-black-800">
            Course <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="course"
            value={form.course}
            readOnly
            className="mt-1 block w-full border-gray-300 font-serif rounded-md shadow-sm bg-gray-100 text-black-700"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-800">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-800">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-800">
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-800">
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Write your query here..."
          />
        </div>

        {/* Submit and Support Info Section */}
        <div className="flex flex-col items-center mt-6 space-y-2">
          <button
            type="submit"
            className="bg-sky-600 hover:bg-sky-800 text-white py-2 px-6 rounded-md"
          >
            Submit Inquiry
          </button>

          <p className="text-base font-semibold text-gray-700 mt-4 text-center">
            Have Queries? Ask our Experts
          </p>

        <div className="flex items-center space-x-2 text-sm">
          <i className="fa fa-phone text-sky-600 text-lg" aria-hidden="true"></i>
          <a href="tel:+91-6478935577" className="text-sky-600 hover:underline font-medium">
          📞 +91-6478935577
          </a>
        </div>

          <span className="text-sm text-gray-600">Available 24x7 for your queries</span>
        </div>
      </form>

        {status && <p className="mt-4 text-sm text-gray-800 text-center">{status}</p>}
    </div>
  );
}

  