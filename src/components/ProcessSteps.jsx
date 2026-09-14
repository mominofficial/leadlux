import React from 'react';

const defaultSteps = [
  {
    step: "01",
    title: "Discover",
    desc: "We analyze your existing metrics, target customer avatars, competitors, and commercial unit economics to establish clear growth benchmarks."
  },
  {
    step: "02",
    title: "Plan",
    desc: "We architect an omnichannel strategy—mapping creative angles, technical funnels, keyword opportunities, and conversion pathways."
  },
  {
    step: "03",
    title: "Create",
    desc: "Our senior designers, copywriters, and engineers develop bespoke storefronts, thumb-stopping ad creatives, and high-performance assets."
  },
  {
    step: "04",
    title: "Launch",
    desc: "We deploy campaigns and web experiences with meticulous tracking, automated workflows, and conversion verification intact."
  },
  {
    step: "05",
    title: "Optimize",
    desc: "Through continuous A/B testing, search term pruning, and CRO adjustments, we scale winning channels to maximize return on investment."
  }
];

export default function ProcessSteps({ customSteps = null, theme = "cream" }) {
  const steps = customSteps || defaultSteps;
  const isTeal = theme === "teal";

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      
      {/* Steps Grid */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', 
          gap: '1.5rem',
          position: 'relative'
        }}
        className="process-grid"
      >
        {steps.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: isTeal ? 'rgba(15, 53, 52, 0.6)' : '#FFFFFF',
              border: isTeal ? '1px solid rgba(247, 244, 236, 0.1)' : '1px solid var(--leadlux-border-light)',
              borderRadius: '8px',
              padding: '2rem 1.5rem',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, border-color 0.3s ease'
            }}
            className="process-step-card"
          >
            {/* Step Number */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <span style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '2rem', 
                fontWeight: 800, 
                color: 'var(--leadlux-taupe)',
                lineHeight: 1
              }}>
                {item.step}
              </span>
              <span style={{ 
                width: '8px', 
                height: '8px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--leadlux-taupe)',
                opacity: 0.6 
              }} />
            </div>

            {/* Step Title */}
            <h4 style={{ 
              fontSize: '1.25rem', 
              color: isTeal ? 'var(--leadlux-cream)' : 'var(--leadlux-teal)', 
              marginBottom: '0.75rem' 
            }}>
              {item.title}
            </h4>

            {/* Step Description */}
            <p style={{ 
              fontSize: '0.92rem', 
              color: isTeal ? 'var(--leadlux-text-light-muted)' : 'var(--leadlux-text-secondary)',
              lineHeight: 1.6,
              margin: 0
            }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .process-step-card:hover {
          transform: translateY(-4px);
          border-color: var(--leadlux-taupe) !important;
        }
      `}</style>
    </div>
  );
}
