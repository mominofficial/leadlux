import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { createWhatsAppLink } from '../utils/whatsapp';
import { MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          backgroundColor: scrolled ? 'rgba(10, 38, 37, 0.95)' : 'rgba(10, 38, 37, 0.98)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid rgba(247, 244, 236, 0.12)' : '1px solid rgba(247, 244, 236, 0.08)',
          transition: 'all 0.3s ease',
          padding: scrolled ? '0.75rem 0' : '1.1rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Brand Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
            <img
              src="./assets/brand/leadlux-logo.png"
              alt="LeadLux Agency Logo"
              style={{
                height: '42px',
                width: 'auto',
                objectFit: 'contain',
                borderRadius: '4px'
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1.35rem', 
                fontWeight: 800, 
                color: 'var(--leadlux-cream)', 
                letterSpacing: '0.04em',
                lineHeight: 1
              }}>
                LEADLUX
              </span>
              <span style={{ 
                fontSize: '0.65rem', 
                fontWeight: 600, 
                color: 'var(--leadlux-taupe)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.12em',
                marginTop: '0.2rem'
              }}>
                Remote Growth Partners
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.85rem, 1.2vw, 1.35rem)' }} className="desktop-nav">
            {siteConfig.navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  color: isActive(item.path) ? 'var(--leadlux-taupe)' : 'var(--leadlux-cream)',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: isActive(item.path) ? 700 : 500,
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  padding: '0.25rem 0'
                }}
              >
                {item.label}
                {isActive(item.path) && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: 'var(--leadlux-taupe)',
                      borderRadius: '2px'
                    }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="desktop-actions">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              title="Chat with LeadLux on WhatsApp"
            >
              <MessageSquare size={16} />
              <span>WhatsApp Us</span>
            </a>

            <Link
              to="/contact"
              className="btn btn-taupe btn-sm"
            >
              <span>Start a Project</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: 'var(--leadlux-cream)',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '68px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--leadlux-teal-deep)',
            zIndex: 899,
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1.5rem',
            overflowY: 'auto'
          }}
          className="mobile-drawer"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
            {siteConfig.navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '1.35rem',
                  fontFamily: 'var(--font-display)',
                  color: isActive(item.path) ? 'var(--leadlux-taupe)' : 'var(--leadlux-cream)',
                  textDecoration: 'none',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid rgba(247, 244, 236, 0.08)'
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageSquare size={18} />
              <span>WhatsApp Us (01792872188)</span>
            </a>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-taupe"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Start a Project</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      )}

      {/* Responsive Styles for Navbar */}
      <style>{`
        @media (max-width: 1060px) {
          .desktop-nav, .desktop-actions {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
