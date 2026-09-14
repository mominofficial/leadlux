import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  theme = 'cream' // 'cream' (dark text) or 'teal' (light text)
}) {
  const isTeal = theme === 'teal';

  return (
    <div className={`section-heading ${centered ? 'text-center' : ''}`} style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: centered ? '800px' : '720px', marginLeft: centered ? 'auto' : '0', marginRight: centered ? 'auto' : '0' }}>
      {eyebrow && (
        <span className={`eyebrow ${isTeal ? '' : 'eyebrow-teal'}`} style={{ color: 'var(--leadlux-taupe)' }}>
          {eyebrow}
        </span>
      )}
      
      {title && (
        <h2 style={{ 
          color: isTeal ? 'var(--leadlux-cream)' : 'var(--leadlux-teal)',
          marginBottom: '1rem',
          lineHeight: 1.15
        }}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p style={{ 
          color: isTeal ? 'var(--leadlux-text-light-muted)' : 'var(--leadlux-text-secondary)',
          fontSize: '1.125rem',
          lineHeight: 1.7
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
