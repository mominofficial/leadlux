import React from 'react';
import { Link } from 'react-router-dom';
import { createWhatsAppLink } from '../utils/whatsapp';
import { ArrowUpRight, MessageSquare } from 'lucide-react';

export default function ServiceCard({ service }) {
  return (
    <div 
      className="leadlux-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--leadlux-border-light)',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
    >
      {/* 16:9 Dedicated Cover Image with Smooth Hover */}
      <Link 
        to={`/services/${service.slug}`}
        style={{ display: 'block', textDecoration: 'none' }}
        className="aspect-16-9"
      >
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
          onError={(e) => {
            // Fallback gracefully if image fails
            e.currentTarget.src = './assets/banners/brand-growth-cover.jpg';
          }}
        />
      </Link>

      {/* Card Content Area */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        
        {/* Category Badge & Price Tag */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
          <span className="badge badge-taupe">
            {service.categoryLabel}
          </span>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--leadlux-text-muted)' }}>
            {service.startingPrice}
          </span>
        </div>

        {/* Service Title */}
        <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', lineHeight: 1.25 }}>
          <Link
            to={`/services/${service.slug}`}
            style={{ color: 'var(--leadlux-teal)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--leadlux-taupe)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--leadlux-teal)')}
          >
            {service.name}
          </Link>
        </h3>

        {/* Short Description */}
        <p style={{ fontSize: '0.95rem', color: 'var(--leadlux-text-secondary)', marginBottom: '1.5rem', flex: 1, lineHeight: 1.6 }}>
          {service.shortDescription}
        </p>

        {/* Card CTA Actions */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(10, 38, 37, 0.06)' }}>
          <Link
            to={`/services/${service.slug}`}
            className="btn btn-secondary btn-sm"
            style={{ flex: 1, justifyContent: 'center' }}
          >
            <span>View Service</span>
            <ArrowUpRight size={15} />
          </Link>

          <a
            href={createWhatsAppLink(service.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
            title={`Chat on WhatsApp regarding ${service.name}`}
            style={{ padding: '0.65rem 0.85rem' }}
          >
            <MessageSquare size={16} />
            <span style={{ fontSize: '0.82rem' }}>WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
