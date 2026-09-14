import React from 'react';
import { createProjectWhatsAppLink } from '../utils/whatsapp';
import { ExternalLink, Github, Folder, MessageSquare } from 'lucide-react';

export default function ProjectCard({ project }) {
  const hasLiveLink = Boolean(project.projectUrl);
  const hasGithub = Boolean(project.githubUrl);
  const hasDrive = Boolean(project.driveUrl);

  return (
    <div
      className="leadlux-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--leadlux-border-light)',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
    >
      {/* 16:9 Project Visual Presentation */}
      <div className="aspect-16-9" style={{ position: 'relative' }}>
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
          onError={(e) => {
            e.currentTarget.src = './assets/banners/our-projects-banner.jpg';
          }}
        />

        {/* Category Overlay Tag */}
        <span
          className="badge badge-taupe"
          style={{
            position: 'absolute',
            top: '0.85rem',
            left: '0.85rem',
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(10, 38, 37, 0.85)',
            color: 'var(--leadlux-cream)',
            border: '1px solid rgba(247, 244, 236, 0.2)'
          }}
        >
          {project.categoryLabel}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        
        {/* Project Header */}
        <div style={{ marginBottom: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
            <h3 style={{ fontSize: '1.35rem', lineHeight: 1.25, color: 'var(--leadlux-teal)' }}>
              {project.name}
            </h3>
            {project.specialization && (
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--leadlux-taupe)', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                {project.specialization}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p style={{ fontSize: '0.95rem', color: 'var(--leadlux-text-secondary)', marginBottom: '1.25rem', flex: 1, lineHeight: 1.6 }}>
          {project.description}
        </p>

        {/* Tags */}
        {project.tags && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
            {project.tags.map((tag, i) => (
              <span
                key={i}
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--leadlux-text-muted)',
                  backgroundColor: 'var(--leadlux-cream-surface)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '3px',
                  fontWeight: 500
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Card Actions / External Links */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(10, 38, 37, 0.06)' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {hasLiveLink && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
                title={`Visit live project: ${project.name}`}
              >
                <span>Live Project</span>
                <ExternalLink size={14} />
              </a>
            )}

            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                title={`View GitHub source for ${project.name}`}
              >
                <Github size={15} />
                <span>Code</span>
              </a>
            )}

            {hasDrive && (
              <a
                href={project.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                title={`View asset archive for ${project.name}`}
              >
                <Folder size={15} />
                <span>Assets</span>
              </a>
            )}
          </div>

          {/* Quick WhatsApp intent for this project */}
          <a
            href={createProjectWhatsAppLink(project.name)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#128C7E',
              color: '#FFFFFF',
              textDecoration: 'none',
              transition: 'transform 0.2s'
            }}
            title={`Discuss project similar to ${project.name}`}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <MessageSquare size={16} />
          </a>
        </div>

      </div>
    </div>
  );
}
