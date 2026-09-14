import React from 'react';
import { Sparkles, ShoppingBag, Heart, Home, User, Video, MapPin, Rocket, Cpu, Briefcase } from 'lucide-react';

const industries = [
  { name: "Fashion & Apparel", icon: Sparkles, desc: "Luxury labels, seasonal collections, streetwear, and footwear." },
  { name: "Beauty & Skincare", icon: Heart, desc: "Clean beauty, cosmetics, hair extensions, and dermatological care." },
  { name: "Ecommerce & D2C", icon: ShoppingBag, desc: "Fast-growing Shopify storefronts and multi-product retail brands." },
  { name: "Health & Wellness", icon: Heart, desc: "Nutritional supplements, organic wellness lines, and health products." },
  { name: "Home & Lifestyle", icon: Home, desc: "Architectural lighting, luxury home decor, and modern furnishings." },
  { name: "Personal Brands & Founders", icon: User, desc: "High-ticket consultants, industry authorities, and creators." },
  { name: "Content Creators & Media", icon: Video, desc: "YouTube channels, animation creators, and digital publications." },
  { name: "Local & Regional Businesses", icon: MapPin, desc: "Clinics, specialty studios, retail salons, and regional services." },
  { name: "Startups & Emerging Brands", icon: Rocket, desc: "Venture-backed products and innovative market disruptors." },
  { name: "Technology & SaaS", icon: Cpu, desc: "Web tools, AI-enabled applications, and digital platforms." },
  { name: "B2B Enterprises", icon: Briefcase, desc: "Manufacturers, suppliers, wholesale brokers, and service agencies." }
];

export default function IndustriesGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
      {industries.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--leadlux-border-light)',
              borderRadius: '8px',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              transition: 'transform 0.25s ease, border-color 0.25s ease'
            }}
            className="industry-card"
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '6px',
                backgroundColor: 'rgba(10, 38, 37, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--leadlux-taupe)',
                flexShrink: 0
              }}
            >
              <Icon size={20} />
            </div>

            <div>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--leadlux-teal)', marginBottom: '0.35rem' }}>
                {item.name}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--leadlux-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}

      <style>{`
        .industry-card:hover {
          transform: translateY(-3px);
          border-color: var(--leadlux-taupe) !important;
        }
      `}</style>
    </div>
  );
}
