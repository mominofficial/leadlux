import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { createWhatsAppLink } from '../utils/whatsapp';
import { MessageSquare, Calendar, ArrowUpRight } from 'lucide-react';

export default function CTASection({
  headline = "Ready to Grow Your Digital Presence?",
  subheadline = "Let's build a digital growth system designed around your business.",
  eyebrow = "START YOUR PROJECT"
}) {
  return (
    <section className="section-teal section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative Subtle Geometry */}
      <div 
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200, 157, 92, 0.08) 0%, rgba(10, 38, 37, 0) 70%)',
          pointerEvents: 'none'
        }}
      />
      
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '820px' }}>
        
        {eyebrow && (
          <span className="eyebrow" style={{ color: 'var(--leadlux-taupe)', justifyContent: 'center' }}>
            {eyebrow}
          </span>
        )}

        <h2 style={{ 
          fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', 
          color: 'var(--leadlux-cream)', 
          marginBottom: '1.25rem',
          lineHeight: 1.15 
        }}>
          {headline}
        </h2>

        <p style={{ 
          fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', 
          color: 'var(--leadlux-text-light-muted)', 
          marginBottom: '2.5rem',
          lineHeight: 1.7 
        }}>
          {subheadline}
        </p>

        {/* 3 Prominent Brand Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/contact" className="btn btn-taupe">
            <span>Start Your Project</span>
            <ArrowUpRight size={18} />
          </Link>

          <a
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageSquare size={18} />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={siteConfig.contact.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-cream"
          >
            <Calendar size={18} />
            <span>Book a Call</span>
          </a>
        </div>

        {/* Subtext reassurance */}
        <p style={{ fontSize: '0.85rem', color: 'rgba(247, 244, 236, 0.5)', marginTop: '2rem' }}>
          Direct communication with our growth partners • WhatsApp response typically within minutes
        </p>

      </div>
    </section>
  );
}
