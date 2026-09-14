import React, { useState } from 'react';
import { services, serviceCategories } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="section-cream">
      
      {/* Services Header Banner */}
      <section 
        className="section-teal" 
        style={{ 
          paddingTop: 'clamp(4rem, 7vw, 6rem)', 
          paddingBottom: 'clamp(3.5rem, 6vw, 5rem)',
          borderBottom: '1px solid rgba(247, 244, 236, 0.08)' 
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '860px' }}>
          <span className="eyebrow" style={{ color: 'var(--leadlux-taupe)', justifyContent: 'center' }}>
            COMPLETE GROWTH SPECTRUM
          </span>
          <h1 style={{ color: 'var(--leadlux-cream)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            Digital Services Built Around Growth
          </h1>
          <p style={{ color: 'var(--leadlux-text-light-muted)', fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', lineHeight: 1.7 }}>
            From social media and paid advertising to Shopify, SEO, creative production and technology, LeadLux brings the pieces of your digital presence together.
          </p>
        </div>
      </section>

      {/* Services Visual Strip */}
      <div style={{ backgroundColor: 'var(--leadlux-cream-surface)', borderBottom: '1px solid var(--leadlux-border-light)', padding: '2rem 0' }}>
        <div className="container">
          <div className="aspect-16-9" style={{ borderRadius: '8px', overflow: 'hidden', maxHeight: '380px', border: '1px solid var(--leadlux-border-light)' }}>
            <img
              src="./assets/banners/leadlux-services.png"
              alt="LeadLux Services Overview"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.currentTarget.src = './assets/banners/brand-growth-cover.jpg';
              }}
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs & 15 Services Grid */}
      <section className="section-spacing">
        <div className="container">
          
          {/* Category Filter Pills */}
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.75rem', 
              justifyContent: 'center', 
              marginBottom: '3.5rem' 
            }}
          >
            {serviceCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.75rem 1.4rem',
                  borderRadius: '30px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: activeCategory === cat.id 
                    ? '1px solid var(--leadlux-teal)' 
                    : '1px solid var(--leadlux-border-medium)',
                  backgroundColor: activeCategory === cat.id 
                    ? 'var(--leadlux-teal)' 
                    : '#FFFFFF',
                  color: activeCategory === cat.id 
                    ? 'var(--leadlux-cream)' 
                    : 'var(--leadlux-text-primary)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Services Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', 
              gap: '2.25rem' 
            }}
          >
            {filteredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        headline="Need a Custom Growth Scope?"
        subheadline="Talk directly with our growth specialists on WhatsApp to architect a multi-service package tailored to your exact roadmap."
        eyebrow="CUSTOM PACKAGES AVAILABLE"
      />

    </div>
  );
}
