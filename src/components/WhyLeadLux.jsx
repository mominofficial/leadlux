import React from 'react';
import { Globe, Layers, Compass, Zap, ShoppingBag, Terminal, MessageSquare } from 'lucide-react';

const differentiators = [
  {
    icon: Globe,
    title: "Remote-First Agility",
    desc: "Seamless international delivery across time zones without traditional agency overhead or slow bureaucratic layers."
  },
  {
    icon: Layers,
    title: "Multi-Disciplinary Mastery",
    desc: "A unified team bridging creative design, performance advertising, technical SEO, and full-stack engineering."
  },
  {
    icon: Compass,
    title: "Strategy Meets Execution",
    desc: "We don't hand you theoretical slide decks. Every strategic recommendation is designed to be built, launched, and tested."
  },
  {
    icon: Zap,
    title: "Creative + Performance",
    desc: "Aesthetic editorial design paired with aggressive conversion rate optimization to ensure your brand looks luxury and sells volume."
  },
  {
    icon: ShoppingBag,
    title: "Deep Ecommerce Capability",
    desc: "Specialized in bespoke Shopify 2.0 theme engineering, Google Merchant Center feed approval, and high-AOV checkout funnels."
  },
  {
    icon: Terminal,
    title: "Modern Tech Architecture",
    desc: "We build fast, scalable web experiences using React, Vite, and clean modular code engineered for blazing load times."
  },
  {
    icon: MessageSquare,
    title: "Direct Founder Communication",
    desc: "No junior account managers acting as telephone games. You collaborate directly with senior growth specialists and engineers."
  }
];

export default function WhyLeadLux() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
      {differentiators.map((item, idx) => {
        const IconComponent = item.icon;
        return (
          <div
            key={idx}
            style={{
              backgroundColor: 'var(--leadlux-teal-medium)',
              border: '1px solid var(--leadlux-border-dark)',
              borderRadius: '8px',
              padding: '2.25rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, border-color 0.3s ease'
            }}
            className="why-card"
          >
            {/* Geometric Minimalist Icon */}
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '8px',
                backgroundColor: 'rgba(200, 157, 92, 0.15)',
                border: '1px solid rgba(200, 157, 92, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--leadlux-taupe)',
                marginBottom: '1.5rem'
              }}
            >
              <IconComponent size={24} />
            </div>

            <h3 style={{ fontSize: '1.35rem', color: 'var(--leadlux-cream)', marginBottom: '0.75rem' }}>
              {item.title}
            </h3>

            <p style={{ fontSize: '0.95rem', color: 'var(--leadlux-text-light-muted)', lineHeight: 1.65, margin: 0 }}>
              {item.desc}
            </p>
          </div>
        );
      })}

      <style>{`
        .why-card:hover {
          transform: translateY(-4px);
          border-color: var(--leadlux-taupe) !important;
        }
      `}</style>
    </div>
  );
}
