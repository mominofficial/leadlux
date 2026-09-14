import React, { useState } from 'react';
import { projects, projectFilters } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="section-cream">
      
      {/* Portfolio Header Banner */}
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
            SELECTED WORK & EXPERIENCE
          </span>
          <h1 style={{ color: 'var(--leadlux-cream)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            Selected Digital Work & Experience
          </h1>
          <p style={{ color: 'var(--leadlux-text-light-muted)', fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', lineHeight: 1.7 }}>
            Explore selected Shopify storefronts, social media channels, creative assets, and web applications from our verified project portfolio.
          </p>
        </div>
      </section>

      {/* Projects Visual Banner */}
      <div style={{ backgroundColor: 'var(--leadlux-cream-surface)', borderBottom: '1px solid var(--leadlux-border-light)', padding: '2rem 0' }}>
        <div className="container">
          <div className="aspect-16-9" style={{ borderRadius: '8px', overflow: 'hidden', maxHeight: '380px', border: '1px solid var(--leadlux-border-light)' }}>
            <img
              src="./assets/banners/our-projects-banner.jpg"
              alt="LeadLux Our Projects Portfolio Showcase"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.currentTarget.src = './assets/banners/brand-growth-cover.jpg';
              }}
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs & Real Projects Grid */}
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
            {projectFilters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                style={{
                  padding: '0.75rem 1.4rem',
                  borderRadius: '30px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: activeFilter === filter.id 
                    ? '1px solid var(--leadlux-teal)' 
                    : '1px solid var(--leadlux-border-medium)',
                  backgroundColor: activeFilter === filter.id 
                    ? 'var(--leadlux-teal)' 
                    : '#FFFFFF',
                  color: activeFilter === filter.id 
                    ? 'var(--leadlux-cream)' 
                    : 'var(--leadlux-text-primary)'
                }}
              >
                {filter.label} {filter.id === 'all' ? `(${projects.length})` : ''}
              </button>
            ))}
          </div>

          {/* Projects Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', 
              gap: '2.25rem' 
            }}
          >
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Have a Project in Mind?"
        subheadline="Whether you're looking to launch a bespoke Shopify storefront or scale your social channels, we are ready to partner with you."
        eyebrow="START A PROJECT"
      />

    </div>
  );
}
