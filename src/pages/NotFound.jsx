import React from 'react';
import { Link } from 'react-router-dom';
import { createWhatsAppLink } from '../utils/whatsapp';
import { ArrowLeft, Home, MessageSquare } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="section-cream" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5rem 0' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
        
        {/* Creative visual indicator */}
        <div style={{ marginBottom: '2rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(5rem, 12vw, 8rem)',
              fontWeight: 800,
              color: 'var(--leadlux-taupe)',
              lineHeight: 1,
              letterSpacing: '-0.04em'
            }}
          >
            404
          </span>
        </div>

        <span className="eyebrow eyebrow-teal" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
          PAGE NOT FOUND
        </span>

        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '1rem', color: 'var(--leadlux-teal)' }}>
          Looks like this page took a wrong turn.
        </h1>

        <p style={{ fontSize: '1.15rem', color: 'var(--leadlux-text-secondary)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Let's get you back to LeadLux. The page you're searching for might have moved or is no longer available.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={18} />
            <span>Back Home</span>
          </Link>

          <Link to="/services" className="btn btn-secondary">
            <span>Explore Services</span>
          </Link>

          <a
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageSquare size={17} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
