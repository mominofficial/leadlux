import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const globalFaqs = [
  {
    q: "What services does LeadLux offer?",
    a: "LeadLux provides complete remote digital growth solutions spanning Social Media Marketing & Management, Paid Advertising (Meta & Google Ads), SEO, Short-Form Video & Reels Editing, Graphic Design, Content Creation, WhatsApp & SMS Campaigns, bespoke Shopify 2.0 Storefront Design, Google Merchant Center Feeds, Full-Stack Web Development, B2B Lead Generation, and Analytics."
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. LeadLux operates as a global remote agency collaborating seamlessly with clients across the United States, United Kingdom, Europe, the Middle East, and Asia with asynchronous project management and clear communication windows."
  },
  {
    q: "Do you build custom Shopify stores or just modify templates?",
    a: "We develop custom Shopify 2.0 storefronts with native Liquid programming, custom section architectures, slide-out drawer carts, and conversion rate optimization tailored specifically to your catalog."
  },
  {
    q: "Can I hire LeadLux for only one specific service?",
    a: "Absolutely. While many clients partner with us as their complete remote growth team, you can engage LeadLux for single specialized projects such as a Shopify storefront build, Google Merchant Center disapproval resolution, or a dedicated advertising campaign."
  },
  {
    q: "Do you offer monthly social media management?",
    a: "Yes, we offer ongoing monthly social media management packages encompassing content strategy, graphic and video production, post scheduling, community moderation, and growth reporting."
  },
  {
    q: "Do you run paid advertising on Meta and Google?",
    a: "Yes, we engineer full-funnel paid advertising on Facebook, Instagram, Google Search, and Performance Max Shopping, handling tracking verification (CAPI/GTM), creative production, and continuous bid management."
  },
  {
    q: "How does the WhatsApp consultation work?",
    a: "Clicking any WhatsApp button opens a direct chat with our team with your service interest pre-filled. We'll review your website, goals, and project requirements promptly, then propose an actionable project scope."
  },
  {
    q: "How do I start a project with LeadLux?",
    a: "You can start by reaching out directly via WhatsApp at +880 1792 872188, emailing us at leadluxteam@gmail.com, or submitting a brief through our Contact page. We will review your requirements and outline next steps."
  },
  {
    q: "Do you provide custom tailored packages?",
    a: "Yes. In addition to our Starter, Growth, and Premium tiers, we craft custom scopes tailored to unique enterprise requirements, multi-store brands, and specific technical development needs."
  },
  {
    q: "Do you work 100% remotely?",
    a: "Yes, LeadLux was architected as a remote-first agency from day one. This enables us to maintain rapid execution speed, flexible collaboration, and competitive pricing without bloated overhead."
  }
];

export default function FAQAccordion({ items = null, theme = "cream" }) {
  const faqList = items || globalFaqs;
  const [openIndex, setOpenIndex] = useState(null);
  const isTeal = theme === "teal";

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '840px', margin: '0 auto' }}>
      {faqList.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            style={{
              backgroundColor: isTeal ? 'var(--leadlux-teal-medium)' : '#FFFFFF',
              border: isTeal 
                ? (isOpen ? '1px solid var(--leadlux-taupe)' : '1px solid rgba(247, 244, 236, 0.1)') 
                : (isOpen ? '1px solid var(--leadlux-taupe)' : '1px solid var(--leadlux-border-light)'),
              borderRadius: '8px',
              overflow: 'hidden',
              transition: 'border-color 0.2s ease'
            }}
          >
            <button
              onClick={() => toggle(idx)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.5rem 1.75rem',
                background: 'transparent',
                border: 'none',
                textAlign: 'left',
                cursor: 'pointer',
                gap: '1rem'
              }}
              aria-expanded={isOpen}
            >
              <span style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1.15rem', 
                fontWeight: 600, 
                color: isTeal ? 'var(--leadlux-cream)' : 'var(--leadlux-teal)' 
              }}>
                {item.q}
              </span>

              <span style={{ color: 'var(--leadlux-taupe)', display: 'flex', alignItems: 'center' }}>
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>

            {isOpen && (
              <div style={{ padding: '0 1.75rem 1.5rem 1.75rem', borderTop: isTeal ? '1px solid rgba(247, 244, 236, 0.05)' : '1px solid rgba(10, 38, 37, 0.05)' }}>
                <p style={{ 
                  color: isTeal ? 'var(--leadlux-text-light-muted)' : 'var(--leadlux-text-secondary)', 
                  fontSize: '0.98rem', 
                  lineHeight: 1.7,
                  margin: '1rem 0 0 0'
                }}>
                  {item.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
