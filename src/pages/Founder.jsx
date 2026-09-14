import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { createWhatsAppLink } from '../utils/whatsapp';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { ExternalLink, Github, MessageSquare, Terminal, ShoppingCart, Globe, Award } from 'lucide-react';

export default function Founder() {
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
            AGENCY FOUNDER & ARCHITECT
          </span>
          <h1 style={{ color: 'var(--leadlux-cream)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            Meet the Founder
          </h1>
          <p style={{ color: 'var(--leadlux-text-light-muted)', fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', lineHeight: 1.7 }}>
            The engineering mindset and digital growth strategy behind LeadLux Agency.
          </p>
        </div>
      </section>

      {/* Main Profile Showcase */}
      <section className="section-spacing">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(2.5rem, 5vw, 5rem)', alignItems: 'center' }}>
            
            {/* Left: Founder Portrait / Mockup */}
            <div style={{ position: 'relative' }}>
              <div 
                style={{ 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  border: '1px solid rgba(10, 38, 37, 0.12)',
                  boxShadow: 'var(--leadlux-shadow-lg)',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <img
                  src="./assets/brand/founder-portrait.jpg"
                  alt="MD Momin Ali - Agency Founder & Engineer"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>

              {/* Verified Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '20px',
                  backgroundColor: 'var(--leadlux-teal)',
                  color: 'var(--leadlux-cream)',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  boxShadow: '0 6px 20px rgba(10, 38, 37, 0.25)',
                  border: '1px solid var(--leadlux-taupe)'
                }}
              >
                <Award size={16} style={{ color: 'var(--leadlux-taupe)' }} />
                <span>Verified Agency Founder</span>
              </div>
            </div>

            {/* Right: Bio & Professional Experience */}
            <div>
              <span className="eyebrow eyebrow-teal">LEADERSHIP & ENGINEERING</span>
              <h2 style={{ marginBottom: '0.5rem', lineHeight: 1.2 }}>
                {siteConfig.founder.name}
              </h2>
              <h4 style={{ color: 'var(--leadlux-taupe)', marginBottom: '1.5rem', fontWeight: 600 }}>
                {siteConfig.founder.role}
              </h4>

              <p style={{ fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                MD Momin Ali is a Shopify Developer, Full-Stack Web Engineer, and Digital Growth Strategist. With a rigorous background in Computer Science & Engineering, he founded LeadLux to bridge the gap between technical web development and high-converting performance marketing.
              </p>

              <p style={{ fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                Having developed bespoke Shopify storefronts, full-stack portals like DeshBrief, and managed multi-platform social channels across international markets, Momin oversees architecture, code standards, and strategic execution for all LeadLux client engagements.
              </p>

              {/* Focus Pillars */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
                <div style={{ padding: '1rem', backgroundColor: '#FFFFFF', borderRadius: '6px', border: '1px solid var(--leadlux-border-light)' }}>
                  <ShoppingCart size={20} style={{ color: 'var(--leadlux-taupe)', marginBottom: '0.35rem' }} />
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Shopify & CRO</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--leadlux-text-muted)' }}>Custom Liquid Theme Dev</div>
                </div>

                <div style={{ padding: '1rem', backgroundColor: '#FFFFFF', borderRadius: '6px', border: '1px solid var(--leadlux-border-light)' }}>
                  <Terminal size={20} style={{ color: 'var(--leadlux-taupe)', marginBottom: '0.35rem' }} />
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Full-Stack Web</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--leadlux-text-muted)' }}>React, Vite, Clean Code</div>
                </div>
              </div>

              {/* Action Links */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <a
                  href={siteConfig.founder.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-taupe"
                >
                  <span>View Founder Portfolio</span>
                  <ExternalLink size={16} />
                </a>

                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <Github size={17} />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageSquare size={17} />
                  <span>Connect Directly</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Portfolio Showcase Mockup Banner */}
      <section className="section-surface section-spacing" style={{ borderTop: '1px solid var(--leadlux-border-light)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="PORTFOLIO REFERENCE"
            title="Explore mominofficial.me"
            subtitle="Visit the personal engineering & portfolio archive of LeadLux's founder for full project case studies and technical credentials."
            centered={true}
          />

          <div style={{ maxWidth: '980px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--leadlux-border-light)', boxShadow: 'var(--leadlux-shadow-md)' }}>
            <img
              src="./assets/brand/founder-portfolio-2.png"
              alt="Momin Official Portfolio Overview"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              onError={(e) => {
                e.currentTarget.src = './assets/brand/founder-portfolio-1.png';
              }}
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a
              href={siteConfig.founder.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>Visit mominofficial.me</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        headline="Ready to Work Directly With Our Team?"
        subheadline="Schedule an introductory discovery call or connect via WhatsApp to review your business goals."
        eyebrow="DIRECT ACCESS"
      />

    </div>
  );
}
