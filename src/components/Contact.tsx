import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        'service_y8coonq',
        'template_n8re39s',
        e.currentTarget,
        'hKT4_q6OR7BMWEM1v'
      );
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
        <div>
  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
  <input
    type="text"
    name="name"
    id="name"
    required
    className="p-2 mt-1 block w-full rounded-md border-2 border-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
  />
</div>
<div>
  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
  <input
    type="email"
    name="email"
    id="email"
    required
    className="p-2 mt-1 block w-full rounded-md border-2 border-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
  />
</div>
<div>
  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
  <textarea
    name="message"
    id="message"
    rows={4}
    required
    className="p-2 mt-1 block w-full rounded-md border-2 border-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
  />
</div>

          <div className="text-center">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </div>
          {status === 'success' && (
            <p className="text-green-600 text-center">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}