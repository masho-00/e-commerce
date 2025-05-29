import React, { useState } from 'react';

const Contact: React.FC = () => {
  // Simple form state (for demo)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! Thank you.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-16 bg-white ">
      <div className="max-w-3xl mx-auto px-6">
        <h3  data-aos="zoom-in" className="text-4xl font-semibold mb-8 text-center text-gray-800 ">
          Contact Us
        </h3>
        <form  data-aos="fade-up-down" onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
