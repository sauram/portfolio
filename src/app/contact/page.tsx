'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Set form to submitting state
    setFormStatus('submitting');
    
    // Simulate form submission - in a real app, you would send the data to an API
    setTimeout(() => {
      // This is just a simulation - in a real app, check the API response
      if (Math.random() > 0.2) { // 80% success rate for demo
        setFormStatus('success');
        // Reset form after success
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setFormStatus('error');
      }
    }, 1500);
  };

  return (
    <PageLayout>
      <Section className="pt-24 md:pt-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
        <SectionHeader
          title={<>Get in <span className="gradient-text">Touch</span></>}
          subtitle="Have a question or want to work together? Feel free to reach out!"
          centered
          data-aos="fade-up"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div data-aos="fade-right" className="space-y-8">
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start glass-effect p-4 rounded-lg">
                <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-3 rounded-full mr-4">
                  <FaEnvelope className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a 
                    href="mailto:hello@saurabhsinghgautam.com" 
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    hello@saurabhsinghgautam.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start glass-effect p-4 rounded-lg">
                <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-3 rounded-full mr-4">
                  <FaPhone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a 
                    href="tel:+1234567890" 
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start glass-effect p-4 rounded-lg">
                <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-foreground/70">
                    San Francisco, California
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">Connect With Me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/saurabhsinghgautam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-primary/20 to-accent/20 p-3 rounded-full hover:from-primary/30 hover:to-accent/30 transition-all"
                >
                  <FaLinkedin className="h-5 w-5 text-primary" />
                </a>
                <a 
                  href="https://github.com/saurabhsinghgautam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-primary/20 to-accent/20 p-3 rounded-full hover:from-primary/30 hover:to-accent/30 transition-all"
                >
                  <FaGithub className="h-5 w-5 text-primary" />
                </a>
                <a 
                  href="https://twitter.com/saurabhsgautam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-primary/20 to-accent/20 p-3 rounded-full hover:from-primary/30 hover:to-accent/30 transition-all"
                >
                  <FaTwitter className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-left" className="glass-effect p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Send Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                ></textarea>
              </div>
              
              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full"
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
              
              {formStatus === 'success' && (
                <div className="bg-green-500/20 text-green-600 p-3 rounded-md">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="bg-red-500/20 text-red-600 p-3 rounded-md">
                  There was an error sending your message. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
} 