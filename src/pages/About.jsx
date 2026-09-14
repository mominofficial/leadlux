import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import SectionHeading from '../components/SectionHeading';
import WhyLeadLux from '../components/WhyLeadLux';
import ProcessSteps from '../components/ProcessSteps';
import CTASection from '../components/CTASection';
import { ArrowRight, ShieldCheck, Target, Layers, Globe } from 'lucide-react';

export default function About() {
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
        <div className="container" style={{ textAlign: 'center', maxWidth: '860px' }}>
          <span className="eyebrow" style={{ color: 'var(--leadlux-taupe)', justifyContent: 'center' }}>
            ABOUT LEADLUX
          </span>
          <h1 style={{ color: 'var(--leadlux-cream)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            One Remote Partner for Your Digital Growth
          </h1>
          <p style={{ color: 'var(--leadlux-text-light-muted)', fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', lineHeight: 1.7 }}>
            We bridge strategy, creative design, paid media, and full-stack engineering to build scalable digital engines for modern businesses.
          </p>
        </div>
      </section>

      {/* Visual Banner */}
      <div style={{ backgroundColor: 'var(--leadlux-cream-surface)', borderBottom: '1px solid var(--leadlux-border-light)', padding: '2rem 0' }}>
        <div className="container">
          <div className="aspect-16-9" style={{ borderRadius: '8px', overflow: 'hidden', maxHeight: '420px', border: '1px solid var(--leadlux-border-light)' }}>
            <img
              src="./assets/banners/about-leadlux-banner.jpg"
              alt="About LeadLux Agency Team and Global Collaboration"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.currentTarget.src = './assets/banners/brand-growth-cover.jpg';
              }}
            />
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <section className="section-spacing">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(2rem, 5vw, 4.5rem)', alignItems: 'center' }}>
            <div>
              <span className="eyebrow eyebrow-teal">WHO WE ARE</span>
              <h2 style={{ marginBottom: '1.5rem', lineHeight: 1.2 }}>
                Built to solve the fragmented agency problem.
              </h2>
              <p style={{ marginBottom: '1.25rem', fontSize: '1.05rem', lineHeight: 1.75 }}>
                LeadLux was founded on a simple observation: modern businesses struggle when working with fragmented contractors. When your social media team doesn't understand your Shopify checkout funnel, or your developer doesn't understand conversion psychology, growth stalls.
              </p>
              <p style={{ marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 1.75 }}>
                We operate as a single, multi-disciplinary remote team. By aligning creative storytelling, paid media acquisition, technical SEO, and modern code under one roof, we eliminate miscommunication and execute with speed.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link to="/services" className="btn btn-primary">
                  <span>Explore Capabilities</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/owner" className="btn btn-secondary">
                  <span>Meet Founder</span>
                </Link>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--leadlux-border-light)' }}>
                <div style={{ color: 'var(--leadlux-taupe)', marginBottom: '0.75rem' }}><Globe size={28} /></div>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Remote-First</h4>
                <p style={{ fontSize: '0.88rem', margin: 0 }}>International collaboration with lean operations and zero unnecessary overhead.</p>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--leadlux-border-light)' }}>
                <div style={{ color: 'var(--leadlux-taupe)', marginBottom: '0.75rem' }}><Layers size={28} /></div>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Multi-Disciplinary</h4>
                <p style={{ fontSize: '0.88rem', margin: 0 }}>Full-stack technical chops paired with high-ticket brand aesthetics.</p>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--leadlux-border-light)' }}>
                <div style={{ color: 'var(--leadlux-taupe)', marginBottom: '0.75rem' }}><Target size={28} /></div>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Commercial Focus</h4>
                <p style={{ fontSize: '0.88rem', margin: 0 }}>Every deliverable is measured by its impact on real revenue and customer acquisition.</p>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--leadlux-border-light)' }}>
                <div style={{ color: 'var(--leadlux-taupe)', marginBottom: '0.75rem' }}><ShieldCheck size={28} /></div>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Direct Access</h4>
                <p style={{ fontSize: '0.88rem', margin: 0 }}>Collaborate directly with lead specialists via WhatsApp and fast video syncs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe (Core Philosophy) */}
      <section className="section-teal section-spacing">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT WE BELIEVE"
            title="Our Operating Philosophy"
            subtitle="The core principles that guide how we treat every client project, campaign, and line of code."
            theme="teal"
            centered={true}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: 'var(--leadlux-teal-medium)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--leadlux-border-dark)' }}>
              <h3 style={{ color: 'var(--leadlux-cream)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Aesthetics Drive Pricing Power</h3>
              <p style={{ color: 'var(--leadlux-text-light-muted)', fontSize: '0.95rem', margin: 0, lineHeight: 1.65 }}>
                Cheap-looking websites force price wars. Premium design creates perceived value, builds instant trust, and enables healthy profit margins.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--leadlux-teal-medium)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--leadlux-border-dark)' }}>
              <h3 style={{ color: 'var(--leadlux-cream)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Data Over Assumptions</h3>
              <p style={{ color: 'var(--leadlux-text-light-muted)', fontSize: '0.95rem', margin: 0, lineHeight: 1.65 }}>
                We test creatives, inspect heatmaps, monitor search query logs, and let real user behavior guide design and advertising iterations.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--leadlux-teal-medium)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--leadlux-border-dark)' }}>
              <h3 style={{ color: 'var(--leadlux-cream)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Speed is a Feature</h3>
              <p style={{ color: 'var(--leadlux-text-light-muted)', fontSize: '0.95rem', margin: 0, lineHeight: 1.65 }}>
                Whether it's the load speed of a Shopify storefront or how fast we respond on WhatsApp, speed builds confidence and drives conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work (5-Step Framework) */}
      <section className="section-cream section-spacing">
        <div className="container">
          <SectionHeading
            eyebrow="EXECUTION CADENCE"
            title="How We Collaborate"
            subtitle="Transparent milestones, continuous communication, and clear deliverables from day one."
            centered={true}
          />

          <ProcessSteps />
        </div>
      </section>

      {/* Why Clients Work With Us */}
      <section className="section-surface section-spacing" style={{ borderTop: '1px solid var(--leadlux-border-light)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="WHY CHOOSE US"
            title="Why Clients Choose LeadLux"
            subtitle="Explore the key agency differentiators that make us the preferred growth partner for modern brands."
            centered={true}
          />

          <WhyLeadLux />
        </div>
      </section>

      {/* CTA */}
      <CTASection />

    </div>
  );
}
