import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { createWhatsAppLink } from '../utils/whatsapp';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { Briefcase, Bell, Mail, MessageSquare, ArrowUpRight, Globe, Laptop, Zap } from 'lucide-react';

export default function Careers() {
  const openApplicationMailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent('Open Application — LeadLux Talent Network')}&body=${encodeURIComponent('Hi LeadLux Team,\n\nI would like to introduce myself for future remote career opportunities.\n\nName:\nRole / Discipline:\nPortfolio / GitHub URL:\nYears of Experience:\n\nLooking forward to staying in touch!')}`;

  const careerWhatsApp = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent("Hi LeadLux, I'd like to share my portfolio and introduce myself for future remote career opportunities.")}`;

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
        <div className="container" style={{ textAlign: 'center', maxWidth: '840px' }}>
          <span className="eyebrow" style={{ color: 'var(--leadlux-taupe)', justifyContent: 'center' }}>
            CAREER OPPORTUNITIES
          </span>
          <h1 style={{ color: 'var(--leadlux-cream)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            Join Our Remote Growth Network
          </h1>
          <p style={{ color: 'var(--leadlux-text-light-muted)', fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', lineHeight: 1.7 }}>
            We collaborate with ambitious digital specialists worldwide to build high-converting storefronts, performance ad funnels, and modern web applications.
          </p>
        </div>
      </section>

      {/* Main Status & Announcement Card */}
      <section className="section-spacing">
        <div className="container" style={{ maxWidth: '920px' }}>
          
          {/* Status Box */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid var(--leadlux-border-light)',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              boxShadow: 'var(--leadlux-shadow-md)',
              textAlign: 'center',
              marginBottom: '3.5rem'
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(200, 157, 92, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--leadlux-taupe)',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <Bell size={28} />
            </div>

            <span className="badge badge-taupe" style={{ marginBottom: '1rem' }}>
              CURRENT RECRUITMENT STATUS
            </span>

            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: 'var(--leadlux-teal)', marginBottom: '1rem', lineHeight: 1.2 }}>
              No Active Openings Right Now
            </h2>

            <p style={{ fontSize: '1.1rem', color: 'var(--leadlux-text-secondary)', lineHeight: 1.75, maxWidth: '720px', margin: '0 auto 1.75rem auto' }}>
              We do not have open roles active at this exact moment. However, as LeadLux continues to expand its client portfolio, new positions for <strong>Shopify Developers</strong>, <strong>Performance Media Buyers</strong>, <strong>Video Editors</strong>, and <strong>Copywriters</strong> will be announced immediately across our official social media channels and right here on our website.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <span>Follow on Facebook</span>
                <ArrowUpRight size={15} />
              </a>

              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <span>Follow on Instagram</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Open Application / Talent Pool */}
          <div
            style={{
              backgroundColor: 'var(--leadlux-teal)',
              color: 'var(--leadlux-text-light)',
              borderRadius: '12px',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
              border: '1px solid rgba(200, 157, 92, 0.3)'
            }}
          >
            <div>
              <span className="eyebrow" style={{ color: 'var(--leadlux-taupe)', marginBottom: '0.75rem' }}>
                TALENT POOL
              </span>
              <h3 style={{ color: 'var(--leadlux-cream)', fontSize: '1.8rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Submit an Open Application
              </h3>
              <p style={{ color: 'var(--leadlux-text-light-muted)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                Are you an exceptional developer, creative editor, or growth marketer? Send us your portfolio and credentials. When a matching project or full-time role opens, our team reaches out to pre-vetted talent first.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a
                href={openApplicationMailto}
                className="btn btn-taupe"
                style={{ justifyContent: 'center' }}
              >
                <Mail size={18} />
                <span>Email Portfolio & Resume</span>
              </a>

              <a
                href={careerWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ justifyContent: 'center' }}
              >
                <MessageSquare size={18} />
                <span>Introduce Yourself on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Why Build With LeadLux (Culture) */}
          <div style={{ marginTop: '5rem' }}>
            <SectionHeading
              eyebrow="REMOTE CULTURE"
              title="What It's Like to Collaborate With LeadLux"
              subtitle="We operate with high autonomy, direct communication, and zero corporate politics."
              centered={true}
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '8px', border: '1px solid var(--leadlux-border-light)' }}>
                <Globe size={26} style={{ color: 'var(--leadlux-taupe)', marginBottom: '1rem' }} />
                <h4 style={{ color: 'var(--leadlux-teal)', marginBottom: '0.5rem' }}>100% Remote Freedom</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--leadlux-text-secondary)', margin: 0 }}>Work from anywhere in the world with flexible asynchronous workflows.</p>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '8px', border: '1px solid var(--leadlux-border-light)' }}>
                <Laptop size={26} style={{ color: 'var(--leadlux-taupe)', marginBottom: '1rem' }} />
                <h4 style={{ color: 'var(--leadlux-teal)', marginBottom: '0.5rem' }}>Real Client Impact</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--leadlux-text-secondary)', margin: 0 }}>Build for real international brands across Shopify, paid ads, and web applications.</p>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '8px', border: '1px solid var(--leadlux-border-light)' }}>
                <Zap size={26} style={{ color: 'var(--leadlux-taupe)', marginBottom: '1rem' }} />
                <h4 style={{ color: 'var(--leadlux-teal)', marginBottom: '0.5rem' }}>Merit & Speed</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--leadlux-text-secondary)', margin: 0 }}>We value clean craftsmanship, punctuality, and problem solvers above all else.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        headline="Have a Client Project in Mind Instead?"
        subheadline="Let's build a digital growth system tailored around your brand's specific roadmap."
        eyebrow="CLIENT SERVICES"
      />

    </div>
  );
}
