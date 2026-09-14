import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { createWhatsAppLink } from '../utils/whatsapp';
import { MessageSquare, Mail, Phone, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--leadlux-teal-deep)', color: 'var(--leadlux-text-light)', borderTop: '1px solid rgba(247, 244, 236, 0.08)' }}>
      {/* Top Banner Callout */}
      <div style={{ borderBottom: '1px solid rgba(247, 244, 236, 0.08)', padding: 'clamp(2.5rem, 5vw, 3.5rem) 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
          <div>
            <span className="eyebrow" style={{ color: 'var(--leadlux-taupe)', marginBottom: '0.5rem' }}>LEADLUX COLLABORATION</span>
            <h3 style={{ color: 'var(--leadlux-cream)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Let's build something that grows.</h3>
            <p style={{ color: 'var(--leadlux-text-light-muted)', marginTop: '0.4rem', maxWidth: '540px' }}>
              From custom Shopify storefronts to multi-channel performance marketing and full-stack web applications.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageSquare size={18} />
              <span>WhatsApp Direct</span>
            </a>
            <Link to="/contact" className="btn btn-taupe">
              <span>Start a Project</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="section-spacing-sm">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(2rem, 4vw, 3.5rem)' }}>
          
          {/* Brand Col */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none', marginBottom: '1.25rem' }}>
              <img
                src="./assets/brand/leadlux-logo.png"
                alt="LeadLux"
                style={{ height: '42px', width: 'auto', borderRadius: '4px' }}
              />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--leadlux-cream)', letterSpacing: '0.04em' }}>
                LEADLUX
              </span>
            </Link>
            <p style={{ color: 'var(--leadlux-text-light-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Your Remote Growth Partners. We engineer high-converting digital storefronts, performance ad funnels, and modern web applications for ambitious brands worldwide.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--leadlux-taupe)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Phone size={15} />
                <span>+880 1792 872188</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                style={{ color: 'var(--leadlux-text-light-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Mail size={15} />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 style={{ color: 'var(--leadlux-cream)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
              {siteConfig.navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    style={{ color: 'var(--leadlux-text-light-muted)', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}
                    onMouseOver={(e) => (e.currentTarget.style.color = 'var(--leadlux-taupe)')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'var(--leadlux-text-light-muted)')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 style={{ color: 'var(--leadlux-cream)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
              Growth Solutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
              {[
                { name: 'Shopify Storefront Design', slug: 'shopify-design' },
                { name: 'Facebook & Instagram Ads', slug: 'facebook-instagram-ads' },
                { name: 'Google Ads & Search', slug: 'google-ads' },
                { name: 'Google Merchant Center', slug: 'google-merchant-center' },
                { name: 'Search Engine Optimization', slug: 'seo' },
                { name: 'Website Design & Dev', slug: 'website-design-development' }
              ].map((svc) => (
                <li key={svc.slug}>
                  <Link
                    to={`/services/${svc.slug}`}
                    style={{ color: 'var(--leadlux-text-light-muted)', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}
                    onMouseOver={(e) => (e.currentTarget.style.color = 'var(--leadlux-taupe)')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'var(--leadlux-text-light-muted)')}
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Social Channels & Founder Link */}
          <div>
            <h4 style={{ color: 'var(--leadlux-cream)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
              Official Channels
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--leadlux-text-light-muted)', textDecoration: 'none', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'var(--leadlux-taupe)')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'var(--leadlux-text-light-muted)')}
              >
                <span>LeadLux Facebook Official</span>
                <ArrowUpRight size={14} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--leadlux-text-light-muted)', textDecoration: 'none', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'var(--leadlux-taupe)')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'var(--leadlux-text-light-muted)')}
              >
                <span>LeadLux Instagram (@leadluxofficial)</span>
                <ArrowUpRight size={14} />
              </a>
              <a
                href={siteConfig.founder.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--leadlux-taupe)', textDecoration: 'none', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, marginTop: '0.5rem' }}
              >
                <span>Agency Founder Portfolio</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div style={{ borderTop: '1px solid rgba(247, 244, 236, 0.06)', padding: '1.5rem 0', fontSize: '0.85rem', color: 'var(--leadlux-text-light-muted)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <span>{siteConfig.copyright}</span>
          <span>Remote Digital Growth Agency • Worldwide Execution</span>
        </div>
      </div>
    </footer>
  );
}
