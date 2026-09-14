import React from 'react';
import { createWhatsAppLink } from '../utils/whatsapp';
import { siteConfig } from '../data/siteConfig';
import { Check, MessageSquare, Calendar } from 'lucide-react';

export default function PricingCard({ pkg, serviceName }) {
  const isRecommended = pkg.recommended;

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: isRecommended ? 'var(--leadlux-teal)' : '#FFFFFF',
        color: isRecommended ? 'var(--leadlux-text-light)' : 'var(--leadlux-text-primary)',
        border: isRecommended ? '2px solid var(--leadlux-taupe)' : '1px solid var(--leadlux-border-light)',
        borderRadius: '8px',
        padding: '2.5rem 2rem',
        boxShadow: isRecommended ? '0 16px 40px rgba(10, 38, 37, 0.2)' : 'var(--leadlux-shadow-sm)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      className="pricing-card"
    >
      {/* Recommended Tag */}
      {isRecommended && (
        <span
          style={{
            position: 'absolute',
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'var(--leadlux-taupe)',
            color: '#FFFFFF',
            fontSize: '0.72rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            padding: '0.35rem 1rem',
            borderRadius: '20px',
            boxShadow: '0 4px 12px rgba(200, 157, 92, 0.4)'
          }}
        >
          Most Popular
        </span>
      )}

      {/* Package Header */}
      <div style={{ marginBottom: '1.75rem', paddingBottom: '1.5rem', borderBottom: isRecommended ? '1px solid rgba(247, 244, 236, 0.12)' : '1px solid rgba(10, 38, 37, 0.08)' }}>
        <h3 style={{ 
          fontSize: '1.6rem', 
          marginBottom: '0.5rem', 
          color: isRecommended ? 'var(--leadlux-cream)' : 'var(--leadlux-teal)' 
        }}>
          {pkg.name}
        </h3>
        
        <p style={{ 
          fontSize: '0.9rem', 
          color: isRecommended ? 'var(--leadlux-text-light-muted)' : 'var(--leadlux-text-secondary)',
          minHeight: '44px',
          lineHeight: 1.5
        }}>
          {pkg.description}
        </p>

        {/* Price placeholder */}
        <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
          <span style={{ 
            fontSize: '1.25rem', 
            fontWeight: 800, 
            letterSpacing: '0.05em', 
            color: isRecommended ? 'var(--leadlux-taupe)' : 'var(--leadlux-teal)',
            textTransform: 'uppercase'
          }}>
            {pkg.price}
          </span>
        </div>
      </div>

      {/* Feature List */}
      <div style={{ flex: 1, marginBottom: '2rem' }}>
        <p style={{ 
          fontSize: '0.8rem', 
          fontWeight: 700, 
          textTransform: 'uppercase', 
          letterSpacing: '0.08em', 
          marginBottom: '1rem',
          color: isRecommended ? 'var(--leadlux-taupe)' : 'var(--leadlux-text-muted)' 
        }}>
          What's Included:
        </p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', padding: 0 }}>
          {pkg.features.map((feature, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem' }}>
              <Check 
                size={18} 
                style={{ 
                  color: isRecommended ? 'var(--leadlux-taupe)' : 'var(--leadlux-teal)', 
                  flexShrink: 0,
                  marginTop: '0.15rem' 
                }} 
              />
              <span style={{ color: isRecommended ? 'var(--leadlux-text-light)' : 'var(--leadlux-text-secondary)' }}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Conversion CTAs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <a
          href={createWhatsAppLink(serviceName, pkg.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
          style={{ width: '100%', justifyContent: 'center' }}
        >
          <MessageSquare size={17} />
          <span>WhatsApp Us</span>
        </a>

        <a
          href={siteConfig.contact.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn ${isRecommended ? 'btn-outline-cream' : 'btn-secondary'}`}
          style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}
        >
          <Calendar size={16} />
          <span>Book a Call</span>
        </a>
      </div>
    </div>
  );
}
