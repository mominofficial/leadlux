import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { createWhatsAppLink } from '../utils/whatsapp';
import { siteConfig } from '../data/siteConfig';
import PricingCard from '../components/PricingCard';
import ProcessSteps from '../components/ProcessSteps';
import ProjectCard from '../components/ProjectCard';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import { ArrowLeft, MessageSquare, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const service = services.find(s => s.slug === serviceSlug);

  // If service not found, redirect to 404
  if (!service) {
    return <Navigate to="/404" replace />;
  }

  // Find relevant projects based on category or service
  const relevantProjects = projects.filter(p => {
    if (service.category === 'ecommerce' && p.category === 'shopify') return true;
    if (service.category === 'marketing' && (p.category === 'social' || p.category === 'marketing')) return true;
    if (service.category === 'creative' && (p.category === 'creative' || p.category === 'social')) return true;
    if (service.category === 'technology' && p.category === 'development') return true;
    return false;
  }).slice(0, 3);

  return (
    <div className="section-cream">
      
      {/* Back Navigation Bar */}
      <div style={{ backgroundColor: 'var(--leadlux-teal-deep)', padding: '0.85rem 0', borderBottom: '1px solid rgba(247, 244, 236, 0.08)' }}>
        <div className="container">
          <Link 
            to="/services" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: 'var(--leadlux-taupe)', 
              textDecoration: 'none', 
              fontSize: '0.88rem', 
              fontWeight: 600 
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to All Services</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-teal" style={{ paddingTop: 'clamp(3rem, 5vw, 4.5rem)', paddingBottom: 'clamp(3.5rem, 6vw, 5rem)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center' }}>
            
            {/* Left: 16:9 Dedicated Cover Image */}
            <div className="aspect-16-9" style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(200, 157, 92, 0.35)', boxShadow: 'var(--leadlux-shadow-teal)' }}>
              <img
                src={service.image}
                alt={service.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.currentTarget.src = './assets/banners/brand-growth-cover.jpg';
                }}
              />
            </div>

            {/* Right: Content & Dual CTAs */}
            <div>
              <span className="badge badge-taupe" style={{ marginBottom: '1rem' }}>
                {service.categoryLabel}
              </span>
              
              <h1 style={{ color: 'var(--leadlux-cream)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
                {service.name}
              </h1>

              <p style={{ color: 'var(--leadlux-text-light-muted)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                {service.shortDescription}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <a
                  href={createWhatsAppLink(service.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageSquare size={18} />
                  <span>Discuss on WhatsApp</span>
                </a>

                <a
                  href={siteConfig.contact.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-cream"
                >
                  <Calendar size={18} />
                  <span>Book Consultation</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Overview & Deliverables */}
      <section className="section-spacing">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(2rem, 5vw, 4.5rem)' }}>
            
            {/* Left: Detailed Overview */}
            <div>
              <span className="eyebrow eyebrow-teal">SERVICE OVERVIEW</span>
              <h2 style={{ marginBottom: '1.5rem', lineHeight: 1.2 }}>
                Strategic execution engineered for measurable growth.
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                {service.overview}
              </p>
              
              <div style={{ marginTop: '2rem', padding: '1.75rem', backgroundColor: '#FFFFFF', borderRadius: '8px', border: '1px solid var(--leadlux-border-light)' }}>
                <h4 style={{ color: 'var(--leadlux-teal)', marginBottom: '1rem' }}>Who This Is For:</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
                  {service.whoThisIsFor.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem' }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--leadlux-taupe)', flexShrink: 0, marginTop: '0.15rem' }} />
                      <span style={{ color: 'var(--leadlux-text-secondary)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: What's Included / Deliverables */}
            <div>
              <span className="eyebrow eyebrow-teal">WHAT'S INCLUDED</span>
              <h3 style={{ marginBottom: '1.5rem', lineHeight: 1.25 }}>
                Key Deliverables & Specifications
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {service.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      padding: '1.25rem',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '8px',
                      border: '1px solid var(--leadlux-border-light)'
                    }}
                  >
                    <span
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(200, 157, 92, 0.15)',
                        color: 'var(--leadlux-taupe)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        flexShrink: 0
                      }}
                    >
                      {idx + 1}
                    </span>
                    <span style={{ fontSize: '1rem', color: 'var(--leadlux-text-primary)', fontWeight: 500, lineHeight: 1.5 }}>
                      {deliv}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5-Step Process for this service */}
      <section className="section-surface section-spacing" style={{ borderTop: '1px solid var(--leadlux-border-light)', borderBottom: '1px solid var(--leadlux-border-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
            <span className="eyebrow eyebrow-teal" style={{ justifyContent: 'center' }}>STEP-BY-STEP EXECUTION</span>
            <h2 style={{ marginBottom: '1rem' }}>Our Process for {service.name}</h2>
            <p>Every phase is calibrated for rapid turnaround and maximum quality assurance.</p>
          </div>

          <ProcessSteps customSteps={service.process} />
        </div>
      </section>

      {/* 3 Pricing Packages: Starter, Growth, Premium */}
      <section className="section-spacing">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
            <span className="eyebrow eyebrow-teal" style={{ justifyContent: 'center' }}>TRANSPARENT TIERS</span>
            <h2 style={{ marginBottom: '1rem' }}>Pricing Packages</h2>
            <p>Select the service level that aligns with your current scale. All packages can be further customized during our discovery call.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {service.packages.map((pkg, idx) => (
              <PricingCard key={idx} pkg={pkg} serviceName={service.name} />
            ))}
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.88rem', color: 'var(--leadlux-text-muted)', marginTop: '2.5rem' }}>
            * Pricing packages are customizable based on specific project requirements, catalog size, or multi-platform scope.
          </p>
        </div>
      </section>

      {/* Relevant Real Projects */}
      {relevantProjects.length > 0 && (
        <section className="section-surface section-spacing" style={{ borderTop: '1px solid var(--leadlux-border-light)', borderBottom: '1px solid var(--leadlux-border-light)' }}>
          <div className="container">
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3rem' }}>
              <div>
                <span className="eyebrow eyebrow-teal">PROVEN EXPERIENCE</span>
                <h2>Relevant Work in This Domain</h2>
              </div>
              <Link to="/projects" className="btn btn-secondary">
                <span>View Full Portfolio</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {relevantProjects.map(proj => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service-Specific FAQ */}
      {service.faq && service.faq.length > 0 && (
        <section className="section-spacing">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
              <span className="eyebrow eyebrow-teal" style={{ justifyContent: 'center' }}>COMMON QUESTIONS</span>
              <h2 style={{ marginBottom: '1rem' }}>Questions About {service.name}</h2>
            </div>

            <FAQAccordion items={service.faq} />
          </div>
        </section>
      )}

      {/* Final Service CTA */}
      <CTASection
        headline={`Ready to Launch ${service.name}?`}
        subheadline="Connect directly with our remote specialists to review your goals, timeline, and deliverables."
        eyebrow="GET STARTED TODAY"
      />

    </div>
  );
}
