import React from 'react';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/team';
import { siteConfig } from '../data/siteConfig';
import { createWhatsAppLink } from '../utils/whatsapp';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { ExternalLink, Github, MessageSquare, Check, Sparkles, ArrowRight, Award } from 'lucide-react';

export default function Team() {
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
            THE MINDS BEHIND LEADLUX
          </span>
          <h1 style={{ color: 'var(--leadlux-cream)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            The People Who Make It Happen
          </h1>
          <p style={{ color: 'var(--leadlux-text-light-muted)', fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', lineHeight: 1.7 }}>
            Meet the leadership, engineering minds, and digital growth specialists behind every LeadLux client success story.
          </p>
        </div>
      </section>

      {/* Main Team Showcase */}
      <section className="section-spacing">
        <div className="container">
          
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            {teamMembers.map(member => (
              <div
                key={member.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid var(--leadlux-border-light)',
                  boxShadow: 'var(--leadlux-shadow-lg)',
                  overflow: 'hidden',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  alignItems: 'center'
                }}
              >
                {/* Member Portrait */}
                <div style={{ position: 'relative', height: '100%', minHeight: '380px' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      backgroundColor: 'rgba(10, 38, 37, 0.9)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--leadlux-cream)',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      border: '1px solid rgba(200, 157, 92, 0.3)'
                    }}
                  >
                    <Award size={15} style={{ color: 'var(--leadlux-taupe)' }} />
                    <span>Executive Leadership</span>
                  </div>
                </div>

                {/* Member Details */}
                <div style={{ padding: 'clamp(2rem, 4vw, 3.5rem)', display: 'flex', flexDirection: 'column' }}>
                  
                  <span className="badge badge-taupe" style={{ width: 'fit-content', marginBottom: '0.85rem' }}>
                    {member.role}
                  </span>

                  <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'var(--leadlux-teal)', marginBottom: '0.35rem', lineHeight: 1.2 }}>
                    {member.name}
                  </h2>

                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--leadlux-taupe)', marginBottom: '1.25rem' }}>
                    {member.title}
                  </div>

                  <p style={{ fontSize: '1rem', color: 'var(--leadlux-text-secondary)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                    {member.bio}
                  </p>

                  {/* Core Specialties */}
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--leadlux-teal)', marginBottom: '0.75rem' }}>
                      Core Expertise & Focus:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem', padding: 0 }}>
                      {member.specialties.map((spec, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--leadlux-text-secondary)' }}>
                          <Check size={16} style={{ color: 'var(--leadlux-taupe)', flexShrink: 0 }} />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action CTAs */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(10, 38, 37, 0.08)' }}>
                    <a
                      href={member.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-taupe btn-sm"
                    >
                      <span>Founder Portfolio</span>
                      <ExternalLink size={14} />
                    </a>

                    <a
                      href={member.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <Github size={15} />
                      <span>GitHub</span>
                    </a>

                    <a
                      href={createWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm"
                    >
                      <MessageSquare size={15} />
                      <span>Direct WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Growing Specialist Network Banner */}
          <div 
            style={{ 
              maxWidth: '1080px', 
              margin: '3rem auto 0 auto', 
              padding: '2rem', 
              backgroundColor: 'var(--leadlux-cream-surface)', 
              borderRadius: '8px', 
              border: '1px solid var(--leadlux-border-light)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            <div>
              <span className="eyebrow eyebrow-teal" style={{ marginBottom: '0.4rem' }}>GLOBAL COLLABORATORS</span>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--leadlux-teal)', marginBottom: '0.35rem' }}>
                Want to Join the LeadLux Growth Network?
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--leadlux-text-secondary)', margin: 0 }}>
                We collaborate with top-tier remote media buyers, Liquid developers, and motion graphic designers worldwide.
              </p>
            </div>

            <Link to="/careers" className="btn btn-primary">
              <span>View Career Opportunities</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Ready to Work With the Minds Behind LeadLux?"
        subheadline="Connect directly with our team to discuss your project requirements and digital growth targets."
        eyebrow="DIRECT COLLABORATION"
      />

    </div>
  );
}
