import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { createWhatsAppLink } from '../utils/whatsapp';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import ProcessSteps from '../components/ProcessSteps';
import WhyLeadLux from '../components/WhyLeadLux';
import IndustriesGrid from '../components/IndustriesGrid';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import { ArrowUpRight, MessageSquare, Sparkles, ShieldCheck, Zap, ArrowRight, ExternalLink } from 'lucide-react';

export default function Home() {
  // Featured projects recommended by user: Modeflo, Caspier, Zalivia, Royal Hair Wigs, RoyLux, FAIR PRICES, DeshBrief
  const featuredProjects = projects.filter(p => p.featured);
  
  // Showcase 6 representative services across Marketing, Creative, Ecommerce & Tech
  const featuredServices = services.slice(0, 6);

  return (
    <div>
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Desktop: LEFT Image 48% / RIGHT Text 52%, Mobile: Image first) */}
      {/* ========================================================================= */}
      <section 
        className="section-teal" 
        style={{ 
          paddingTop: 'clamp(3rem, 6vw, 5.5rem)', 
          paddingBottom: 'clamp(4rem, 8vw, 6.5rem)',
          borderBottom: '1px solid rgba(247, 244, 236, 0.08)' 
        }}
      >
        <div className="container">
          <div 
            className="hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 48%) minmax(0, 52%)',
              gap: 'clamp(2rem, 5vw, 4.5rem)',
              alignItems: 'center'
            }}
          >
            
            {/* HERO VISUAL (LEFT SIDE on Desktop, FIRST on Mobile) */}
            <div className="hero-visual-col" style={{ position: 'relative' }}>
              <div 
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(200, 157, 92, 0.35)',
                  boxShadow: '0 24px 60px rgba(5, 22, 21, 0.6)',
                  backgroundColor: 'var(--leadlux-teal-deep)',
                  aspectRatio: '16 / 9'
                }}
              >
                <img
                  src="./assets/hero/hero-visual.png"
                  alt="LeadLux Remote Digital Growth Workstation and Analytics"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />

                {/* Subtle Framed Tag Accents - Positioned strictly inside the empty left half of the visual */}
                <div
                  className="hero-left-overlay"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '5%',
                    transform: 'translateY(-50%)',
                    maxWidth: '42%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                    pointerEvents: 'none',
                    zIndex: 3
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgba(10, 38, 37, 0.88)',
                      backdropFilter: 'blur(12px)',
                      color: 'var(--leadlux-cream)',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(200, 157, 92, 0.4)',
                      boxShadow: '0 12px 28px rgba(5, 22, 21, 0.5)'
                    }}
                  >
                    <div style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--leadlux-taupe)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                      Remote Growth Partners
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--leadlux-cream)', lineHeight: 1.3 }}>
                      Scale Your Brand Worldwide
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <span
                      style={{
                        backgroundColor: 'rgba(10, 38, 37, 0.82)',
                        backdropFilter: 'blur(10px)',
                        color: 'var(--leadlux-taupe)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '0.35rem 0.65rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(200, 157, 92, 0.25)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        width: 'fit-content'
                      }}
                    >
                      ✦ Digital Growth
                    </span>
                    <span
                      style={{
                        backgroundColor: 'rgba(10, 38, 37, 0.82)',
                        backdropFilter: 'blur(10px)',
                        color: 'var(--leadlux-cream)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '0.35rem 0.65rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(247, 244, 236, 0.15)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        width: 'fit-content'
                      }}
                    >
                      ✦ Creative & Video
                    </span>
                    <span
                      style={{
                        backgroundColor: 'rgba(10, 38, 37, 0.82)',
                        backdropFilter: 'blur(10px)',
                        color: 'var(--leadlux-cream)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '0.35rem 0.65rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(247, 244, 236, 0.15)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        width: 'fit-content'
                      }}
                    >
                      ✦ Performance & Code
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO CONTENT (RIGHT SIDE on Desktop, SECOND on Mobile) */}
            <div className="hero-content-col" style={{ display: 'flex', flexDirection: 'column' }}>
              
              {/* Small Eyebrow */}
              <span className="eyebrow" style={{ color: 'var(--leadlux-taupe)', marginBottom: '1.25rem' }}>
                {siteConfig.eyebrow}
              </span>

              {/* Main Headline */}
              <h1 
                style={{ 
                  color: 'var(--leadlux-cream)', 
                  marginBottom: '1.5rem',
                  lineHeight: 1.12,
                  letterSpacing: '-0.02em'
                }}
              >
                {siteConfig.heroHeadline}
              </h1>

              {/* Supporting Copy */}
              <p 
                style={{ 
                  color: 'var(--leadlux-text-light-muted)', 
                  fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', 
                  lineHeight: 1.7,
                  marginBottom: '2rem'
                }}
              >
                {siteConfig.heroSubheadline}
              </p>

              {/* 3 Conversion CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem', marginBottom: '2.5rem' }}>
                <Link to="/services" className="btn btn-taupe">
                  <span>Explore Services</span>
                  <ArrowRight size={17} />
                </Link>

                <Link to="/contact" className="btn btn-outline-cream">
                  <span>Start a Conversation</span>
                  <ArrowUpRight size={17} />
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

              {/* Small Supporting Statement */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  paddingTop: '1.5rem', 
                  borderTop: '1px solid rgba(247, 244, 236, 0.1)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--leadlux-taupe)'
                }}
              >
                <Zap size={15} />
                <span>{siteConfig.heroPillars}</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ATTRACTIVE KEY POINTS / TRUST STRIP (One Line in PC & Mobile Responsive) */}
      {/* ========================================================================= */}
      <div 
        className="keypoints-wrapper"
        style={{ 
          backgroundColor: 'var(--leadlux-teal-deep)', 
          borderTop: '1px solid rgba(200, 157, 92, 0.25)',
          borderBottom: '1px solid rgba(200, 157, 92, 0.25)',
          padding: '1.1rem 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Desktop View: Guaranteed ONE LINE across entire container */}
        <div className="keypoints-desktop container">
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              gap: '1rem',
              whiteSpace: 'nowrap',
              width: '100%'
            }}
          >
            {siteConfig.positioningPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="keypoint-pill"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.45rem 0.95rem',
                  borderRadius: '24px',
                  backgroundColor: 'rgba(247, 244, 236, 0.04)',
                  border: '1px solid rgba(200, 157, 92, 0.2)',
                  transition: 'all 0.3s ease'
                }}
              >
                <span style={{ color: 'var(--leadlux-taupe)', fontSize: '0.8rem', lineHeight: 1 }}>✦</span>
                <span style={{ 
                  color: 'var(--leadlux-cream)', 
                  fontSize: 'clamp(0.74rem, 0.85vw, 0.88rem)',
                  fontWeight: 700, 
                  letterSpacing: '0.08em', 
                  textTransform: 'uppercase' 
                }}>
                  {pillar}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet View: Continuous Infinite Marquee so it never wraps into multiple lines */}
        <div className="keypoints-mobile">
          <div className="marquee-track">
            {[...siteConfig.positioningPillars, ...siteConfig.positioningPillars].map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(247, 244, 236, 0.05)',
                  border: '1px solid rgba(200, 157, 92, 0.2)',
                  marginRight: '1rem',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                <span style={{ color: 'var(--leadlux-taupe)', fontSize: '0.75rem' }}>✦</span>
                <span style={{ 
                  color: 'var(--leadlux-cream)', 
                  fontSize: '0.78rem',
                  fontWeight: 700, 
                  letterSpacing: '0.08em', 
                  textTransform: 'uppercase' 
                }}>
                  {pillar}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. WHAT WE DO (Positioning & Agency Clarity) */}
      {/* ========================================================================= */}
      <section className="section-cream section-spacing">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: ' clamp(2rem, 5vw, 4rem)', alignItems: 'center' }}>
            <div>
              <span className="eyebrow eyebrow-teal">WHAT WE DO</span>
              <h2 style={{ marginBottom: '1.5rem', lineHeight: 1.2 }}>
                We are not just a social agency.<br />
                We are your complete remote growth partner.
              </h2>
              <p style={{ marginBottom: '1.25rem' }}>
                Most agencies focus on isolated fragments: one team runs ads that don't match your brand tone, another builds a store that loads slowly, and a freelancer posts random quotes without a sales strategy.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                LeadLux unites creative storytelling, high-ROI paid media, custom Shopify engineering, and full-stack web technology under one cohesive remote growth ecosystem.
              </p>
              <Link to="/about" className="btn btn-secondary">
                <span>Discover How We Work</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Visual Cover Accent */}
            <div className="aspect-16-9" style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--leadlux-border-light)' }}>
              <img
                src="./assets/banners/brand-growth-cover.jpg"
                alt="LeadLux Digital Growth Ecosystem"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CORE SERVICES PREVIEW (15 Services Catalog Preview) */}
      {/* ========================================================================= */}
      <section className="section-surface section-spacing" style={{ borderTop: '1px solid var(--leadlux-border-light)', borderBottom: '1px solid var(--leadlux-border-light)' }}>
        <div className="container">
          
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3rem' }}>
            <SectionHeading
              eyebrow="GROWTH CAPABILITIES"
              title="Digital Services Built Around Growth"
              subtitle="From performance ads and custom Shopify builds to SEO, content, and technology, every service is engineered for measurable commercial impact."
            />
            <Link to="/services" className="btn btn-secondary" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
              <span>View All 15 Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/services" className="btn btn-primary">
              <span>Explore Complete 15 Services Directory</span>
              <ArrowRight size={17} />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHY LEADLUX (7 Differentiators) */}
      {/* ========================================================================= */}
      <section className="section-teal section-spacing">
        <div className="container">
          <SectionHeading
            eyebrow="THE LEADLUX DIFFERENCE"
            title="Why Ambitious Brands Partner With Us"
            subtitle="We eliminated agency bloat, rigid long-term retainers, and junior delegate layers to deliver direct senior collaboration."
            theme="teal"
            centered={true}
          />

          <WhyLeadLux />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SELECTED REAL PROJECTS (7 Featured) */}
      {/* ========================================================================= */}
      <section className="section-cream section-spacing">
        <div className="container">
          
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3rem' }}>
            <SectionHeading
              eyebrow="SELECTED WORK"
              title="Real Projects. Verified Experience."
              subtitle="Explore selected Shopify storefronts, social media channels, creative assets, and web applications from our portfolio history."
            />
            <Link to="/projects" className="btn btn-secondary" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
              <span>View Full Portfolio ({projects.length})</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Featured Projects Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/projects" className="btn btn-primary">
              <span>Browse All {projects.length} Real Projects</span>
              <ArrowRight size={17} />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. RESULTS & CAPABILITIES BANNER */}
      {/* ========================================================================= */}
      <section className="section-surface section-spacing-sm" style={{ borderTop: '1px solid var(--leadlux-border-light)', borderBottom: '1px solid var(--leadlux-border-light)' }}>
        <div className="container">
          <div className="aspect-16-9" style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--leadlux-border-light)', boxShadow: 'var(--leadlux-shadow-md)' }}>
            <img
              src="./assets/banners/results-that-speak.jpg"
              alt="LeadLux Results That Speak"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. 5-STEP GROWTH PROCESS */}
      {/* ========================================================================= */}
      <section className="section-cream section-spacing">
        <div className="container">
          <SectionHeading
            eyebrow="OUR METHODOLOGY"
            title="How We Execute Your Growth"
            subtitle="A systematic, battle-tested 5-step framework ensuring zero wasted budget and maximum conversion alignment."
            centered={true}
          />

          <ProcessSteps />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. INDUSTRIES WE SUPPORT */}
      {/* ========================================================================= */}
      <section className="section-surface section-spacing" style={{ borderTop: '1px solid var(--leadlux-border-light)', borderBottom: '1px solid var(--leadlux-border-light)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="MARKET VERTICALS"
            title="Industries & Businesses We Elevate"
            subtitle="Tailored digital growth playbooks calibrated for the unique economics and customer journeys of each vertical."
            centered={true}
          />

          <IndustriesGrid />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FOUNDER SPOTLIGHT TEASER */}
      {/* ========================================================================= */}
      <section className="section-teal section-spacing">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center' }}>
            
            <div className="aspect-16-9" style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(200, 157, 92, 0.4)' }}>
              <img
                src="./assets/brand/founder-portrait.jpg"
                alt="LeadLux Founder Profile"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div>
              <span className="eyebrow" style={{ color: 'var(--leadlux-taupe)' }}>LEADERSHIP</span>
              <h2 style={{ color: 'var(--leadlux-cream)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                Meet the Founder
              </h2>
              <h4 style={{ color: 'var(--leadlux-taupe)', marginBottom: '1rem', fontSize: '1.15rem' }}>
                {siteConfig.founder.name} — {siteConfig.founder.role}
              </h4>
              <p style={{ color: 'var(--leadlux-text-light-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                {siteConfig.founder.shortBio}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link to="/owner" className="btn btn-taupe">
                  <span>View Founder Profile</span>
                  <ArrowRight size={17} />
                </Link>
                <a
                  href={siteConfig.founder.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-cream"
                >
                  <span>mominofficial.me</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. FAQ ACCORDION */}
      {/* ========================================================================= */}
      <section className="section-cream section-spacing">
        <div className="container">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Clear Answers About Working With LeadLux"
            subtitle="Transparent explanations regarding our remote collaboration model, WhatsApp workflows, and service delivery."
            centered={true}
          />

          <FAQAccordion />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. STRONG FINAL CTA */}
      {/* ========================================================================= */}
      <CTASection />

      {/* Responsive Styles for Homepage Hero */}
      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-visual-col {
            order: 1;
          }
          .hero-content-col {
            order: 2;
          }
        }
      `}</style>

    </div>
  );
}
