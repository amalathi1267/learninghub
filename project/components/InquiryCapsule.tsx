'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function EnquiryForm() {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Optional: send to backend/API here
    setSubmitted(true);
    setTimeout(() => {
      router.push('/thank-you');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center bg-gray-800">
        <Image
          src="/images/inquirycapsuleform.jpeg"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
          priority
        />
        <h1 className="text-4xl md:text-5xl font-bold text-white z-10">Inquiry Capsule</h1>
      </div>

      {/* Form Section */}
      <div className="max-w-2xl mx-auto p-6">
        {submitted && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4 border border-green-300">
            ✅ Submitted successfully! Redirecting...
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">
          <div>
            <label className="block mb-1 font-bold">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full border p-2 rounded focus:outline-bold focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-bold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full border p-2 rounded focus:outline-bold focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-bold">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              onChange={handleChange}
              className="w-full border p-2 rounded focus:outline-bold focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-bold">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              onChange={handleChange}
              className="w-full border p-2 rounded focus:outline-bold focus:border-blue-500"
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
