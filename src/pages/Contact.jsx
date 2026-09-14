import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { services } from '../data/services';
import { createWhatsAppLink } from '../utils/whatsapp';
import SectionHeading from '../components/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';
import { MessageSquare, Mail, Phone, Calendar, Clock, MapPin, Send, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [selectedService, setSelectedService] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Clean mailto formulation - 100% frontend compatible, zero fake backend
  const handleMailtoSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${name || 'Prospective Client'} (${selectedService || 'General Growth'})`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService Interested: ${selectedService || 'General Consultation'}\n\nProject Scope:\n${message}`);
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  // Quick WhatsApp trigger with current form data
  const handleWhatsAppSubmit = () => {
    const text = `Hi LeadLux, my name is ${name || 'there'}. I'm interested in ${selectedService || 'a digital growth project'}. ${message ? `Project details: ${message}` : ''}`;
    window.open(`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="section-cream">
      
      {/* Header Banner */}
      <section 
        className="section-teal" 
        style={{ 
          paddingTop: 'clamp(4rem, 7vw, 6rem)', 
          paddingBottom: 'clamp(3.5rem, 6vw, 5rem)',
          borderBottom: '1px solid rgba(247, 244, 236, 0.08)' 
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <span className="eyebrow" style={{ color: 'var(--leadlux-taupe)', justifyContent: 'center' }}>
            GET IN TOUCH
          </span>
          <h1 style={{ color: 'var(--leadlux-cream)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            Start Your Growth Conversation
          </h1>
          <p style={{ color: 'var(--leadlux-text-light-muted)', fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', lineHeight: 1.7 }}>
            Connect directly via WhatsApp, email, or schedule a discovery call. We respond promptly with zero sales fluff.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section-spacing">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            
            {/* Left: Contact Channels & Immediate CTAs */}
            <div>
              <span className="eyebrow eyebrow-teal">DIRECT CONVERSION</span>
              <h2 style={{ marginBottom: '1.25rem', lineHeight: 1.2 }}>
                We're ready to review your project.
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                For the fastest response, reach out on WhatsApp. We typically review initial briefs and URLs within minutes during working windows.
              </p>

              {/* 3 Main Conversion Channels Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                
                {/* 1. WhatsApp Card (PRIMARY) */}
                <a
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.5rem',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    border: '2px solid #128C7E',
                    textDecoration: 'none',
                    boxShadow: 'var(--leadlux-shadow-sm)',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#128C7E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#128C7E' }}>
                        Primary Channel • Fast Response
                      </div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--leadlux-teal)' }}>
                        Chat on WhatsApp
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--leadlux-text-muted)' }}>
                        +880 1792 872188
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight size={20} style={{ color: '#128C7E' }} />
                </a>

                {/* 2. Email Card */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.5rem',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    border: '1px solid var(--leadlux-border-light)',
                    textDecoration: 'none',
                    boxShadow: 'var(--leadlux-shadow-sm)',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(10, 38, 37, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--leadlux-teal)' }}>
                      <Mail size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--leadlux-taupe)' }}>
                        Formal RFPs & Documents
                      </div>
                      <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--leadlux-teal)' }}>
                        Email LeadLux Team
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--leadlux-text-muted)' }}>
                        {siteConfig.contact.email}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight size={20} style={{ color: 'var(--leadlux-teal)' }} />
                </a>

                {/* 3. Book a Call Card */}
                <a
                  href={siteConfig.contact.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.5rem',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    border: '1px solid var(--leadlux-border-light)',
                    textDecoration: 'none',
                    boxShadow: 'var(--leadlux-shadow-sm)',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(200, 157, 92, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--leadlux-taupe)' }}>
                      <Calendar size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--leadlux-taupe)' }}>
                        Video Consultation
                      </div>
                      <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--leadlux-teal)' }}>
                        Book Discovery Call
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--leadlux-text-muted)' }}>
                        Choose your preferred time slot
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight size={20} style={{ color: 'var(--leadlux-teal)' }} />
                </a>

              </div>

              {/* Office hours & location */}
              <div style={{ padding: '1.25rem', backgroundColor: 'var(--leadlux-cream-surface)', borderRadius: '6px', border: '1px solid var(--leadlux-border-light)', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--leadlux-text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={16} style={{ color: 'var(--leadlux-taupe)' }} />
                  <span>{siteConfig.contact.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={16} style={{ color: 'var(--leadlux-taupe)' }} />
                  <span>{siteConfig.contact.officeHours}</span>
                </div>
              </div>

            </div>

            {/* Right: Direct Client Message Form (No fake backend, sends via Mailto or WhatsApp) */}
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                border: '1px solid var(--leadlux-border-light)',
                padding: '2.5rem 2rem',
                boxShadow: 'var(--leadlux-shadow-md)'
              }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--leadlux-teal)' }}>
                Send a Direct Project Brief
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--leadlux-text-secondary)', marginBottom: '1.75rem' }}>
                Fill out your details below. You can send this inquiry directly via email or transfer it instantly to WhatsApp.
              </p>

              <form onSubmit={handleMailtoSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--leadlux-teal)', marginBottom: '0.4rem' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '6px',
                      border: '1px solid var(--leadlux-border-medium)',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: 'var(--leadlux-cream)'
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--leadlux-teal)', marginBottom: '0.4rem' }}>
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. sarah@company.com"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '6px',
                      border: '1px solid var(--leadlux-border-medium)',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: 'var(--leadlux-cream)'
                    }}
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--leadlux-teal)', marginBottom: '0.4rem' }}>
                    Primary Service of Interest
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '6px',
                      border: '1px solid var(--leadlux-border-medium)',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: 'var(--leadlux-cream)'
                    }}
                  >
                    <option value="">Select a service (Optional)</option>
                    {services.map(s => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>

                {/* Message / Scope */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--leadlux-teal)', marginBottom: '0.4rem' }}>
                    Project Goals or Questions
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your brand, current challenges, target timeline, or website URL..."
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '6px',
                      border: '1px solid var(--leadlux-border-medium)',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: 'var(--leadlux-cream)',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Submission Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <Send size={16} />
                    <span>Send via Email ({siteConfig.contact.email})</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="btn btn-whatsapp"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <MessageSquare size={17} />
                    <span>Send via WhatsApp (+880 1792 872188)</span>
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ on Contact */}
      <section className="section-surface section-spacing" style={{ borderTop: '1px solid var(--leadlux-border-light)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="BEFORE YOU REACH OUT"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about initiating a partnership with LeadLux."
            centered={true}
          />

          <FAQAccordion />
        </div>
      </section>

    </div>
  );
}
