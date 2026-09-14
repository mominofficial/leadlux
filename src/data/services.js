/**
 * Central Services Data for LeadLux Agency
 * All 15 services with full deliverables, 5-step process, editable pricing placeholders, and FAQs.
 */

export const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "marketing", label: "Marketing & Growth" },
  { id: "creative", label: "Creative & Media" },
  { id: "ecommerce", label: "Ecommerce & Shopping" },
  { id: "technology", label: "Technology & Web" },
  { id: "communication", label: "Direct Communication" }
];

export const services = [
  {
    id: 1,
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    category: "marketing",
    categoryLabel: "Marketing",
    shortDescription: "Strategic brand building and organic social distribution designed to capture attention and convert audiences into loyal advocates.",
    overview: "We construct organic social distribution engines for modern brands. From brand positioning to hyper-engaging viral campaigns, we turn social channels into predictable client acquisition funnels.",
    image: "./assets/services/social-media-marketing.jpg",
    startingPrice: "Starting from [PRICE]",
    whoThisIsFor: [
      "Brands wanting consistent, organic inbound customer inquiries",
      "Founders seeking to build authority and personal brand influence",
      "Companies launching new products looking for multi-channel reach"
    ],
    deliverables: [
      "Monthly Editorial Content Calendar",
      "Brand Tone of Voice & Copywriting Style Guide",
      "Organic Engagement & Audience Cultivation Protocols",
      "Cross-Platform Distribution (Instagram, LinkedIn, Facebook)",
      "Monthly Performance Breakdown & Optimization Report"
    ],
    process: [
      { step: "01", title: "Discover", desc: "Audit existing social presence, target demographics, and brand positioning." },
      { step: "02", title: "Plan", desc: "Develop the content pillars, aesthetic direction, and distribution schedule." },
      { step: "03", title: "Create", desc: "Produce high-impact graphics, carousel decks, and persuasive copy." },
      { step: "04", title: "Launch", desc: "Publish across target channels with synchronized community engagement." },
      { step: "05", title: "Optimize", desc: "Analyze engagement metrics to double down on winning content themes." }
    ],
    packages: [
      {
        name: "Starter",
        price: "PRICE TO BE UPDATED",
        description: "Essential organic foundation for startups and emerging personal brands.",
        features: [
          "12 Custom Designed Posts / Month",
          "Copywriting & Hashtag Research",
          "Management on 2 Channels",
          "Monthly Performance Overview",
          "Direct WhatsApp Support"
        ],
        recommended: false
      },
      {
        name: "Growth",
        price: "PRICE TO BE UPDATED",
        description: "Comprehensive multi-channel expansion package for growing businesses.",
        features: [
          "20 Custom Posts + 4 Short Videos / Month",
          "Stories & Community Engagement Strategy",
          "Management on 3 Channels",
          "Bi-Weekly Analytics Review",
          "Dedicated Social Account Manager"
        ],
        recommended: true
      },
      {
        name: "Premium",
        price: "PRICE TO BE UPDATED",
        description: "Aggressive omnipresence and thought leadership for established brands.",
        features: [
          "Daily High-End Content Across All Platforms",
          "Short-Form Video Production & Reels Repurposing",
          "Active Community & Inbound DM Filtering",
          "Weekly Growth Review & Strategic Pivots",
          "Priority 24/7 Remote Communication"
        ],
        recommended: false
      }
    ],
    faq: [
      {
        q: "What social platforms do you manage?",
        a: "We actively manage Instagram, Facebook, LinkedIn, YouTube, TikTok, and X (Twitter), selecting the exact platforms that align with your buyer persona."
      },
      {
        q: "Do you supply the post graphics and captions?",
        a: "Yes, LeadLux delivers full end-to-end creative execution including research, copy, custom graphic design, and video editing."
      }
    ]
  },
  {
    id: 2,
    slug: "social-media-management",
    name: "Social Media Management",
    category: "marketing",
    categoryLabel: "Marketing",
    shortDescription: "End-to-end account management, scheduling, community nurturing, and brand presence maintenance.",
    overview: "Free up your team's valuable time while maintaining a polished, active, and responsive social media presence. We manage daily posting, monitor sentiment, engage followers, and handle page administration.",
    image: "./assets/services/social-media-management.jpg",
    startingPrice: "Starting from [PRICE]",
    whoThisIsFor: [
      "Busy founders who want a turnkey social management solution",
      "E-commerce stores needing active daily community interaction",
      "Service providers requiring consistent brand touchpoints"
    ],
    deliverables: [
      "Complete Day-to-Day Channel Administration",
      "Active Inbound Comments & Message Moderation",
      "Scheduling & Multi-Platform Publishing",
      "Profile & Bio Optimization for Conversions",
      "Monthly Channel Health & Growth Audits"
    ],
    process: [
      { step: "01", title: "Discover", desc: "Profile security review, branding audit, and voice alignment." },
      { step: "02", title: "Plan", desc: "Build scheduling cadence, escalation protocols, and response guidelines." },
      { step: "03", title: "Create", desc: "Prepare templates, highlight covers, and communication responses." },
      { step: "04", title: "Launch", desc: "Take over daily channel execution and community monitoring." },
      { step: "05", title: "Optimize", desc: "Monthly refinement based on follower feedback and engagement peaks." }
    ],
    packages: [
      {
        name: "Starter",
        price: "PRICE TO BE UPDATED",
        description: "Standard daily management for a single core brand channel.",
        features: [
          "1 Primary Social Account Managed",
          "3 Scheduled Posts / Week",
          "Daily Comment & DM Monitoring",
          "Profile Grid Aesthetic Maintenance",
          "Monthly Health Summary"
        ],
        recommended: false
      },
      {
        name: "Growth",
        price: "PRICE TO BE UPDATED",
        description: "Active multi-platform management with priority response time.",
        features: [
          "Up to 3 Social Accounts Managed",
          "5 Scheduled Posts / Week + Daily Stories",
          "Fast Community Response Protocol",
          "Active Brand Outreach & Tag Management",
          "Bi-Weekly Status Updates"
        ],
        recommended: true
      },
      {
        name: "Premium",
        price: "PRICE TO BE UPDATED",
        description: "Enterprise tier community building and executive channel representation.",
        features: [
          "Full Omni-Channel Management (Up to 5 Accounts)",
          "Daily Posting & Continuous Story Updates",
          "High-Touch Community Moderation & Lead Routing",
          "Custom Crisis Communication Protocols",
          "Direct WhatsApp Line with Strategy Director"
        ],
        recommended: false
      }
    ],
    faq: [
      {
        q: "Do I need to hand over my master passwords?",
        a: "No, we utilize Meta Business Suite, partner access, and secure delegated permissions whenever possible to keep your credentials safe."
      },
      {
        q: "How quickly do you respond to comments or inquiries?",
        a: "Depending on your package tier, our team monitors channels throughout the day during standard operational windows."
      }
    ]
  },
  {
    id: 3,
    slug: "facebook-instagram-ads",
    name: "Facebook & Instagram Ads",
    category: "marketing",
    categoryLabel: "Marketing",
    shortDescription: "High-ROI paid social campaigns designed to acquire customers and scale ecommerce revenue with surgical targeting.",
    overview: "Stop burning ad budget on boosted posts. We engineer full-funnel Meta advertising architectures—leveraging high-performing creative hooks, laser-focused audience segmentation, and algorithmic machine learning optimization.",
    image: "./assets/services/facebook-instagram-ads.jpg",
    startingPrice: "Starting from [PRICE]",
    whoThisIsFor: [
      "Shopify & D2C brands ready to scale monthly revenue",
      "Service businesses needing high-intent inbound lead flow",
      "Brands with proven products seeking predictable paid acquisition"
    ],
    deliverables: [
      "Meta Pixel, CAPI (Conversions API) & Domain Verification Setup",
      "Full Funnel Campaign Architecture (TOFU, MOFU, BOFU)",
      "High-Converting Ad Copy & Hook Variations",
      "Continuous A/B Testing of Creatives & Audiences",
      "Real-Time ROAS & CPA Performance Dashboards"
    ],
    process: [
      { step: "01", title: "Discover", desc: "Analyze historical ad account data, unit economics, and customer avatars." },
      { step: "02", title: "Plan", desc: "Formulate campaign budgets, audience funnels, and creative angles." },
      { step: "03", title: "Create", desc: "Design high-converting image & video ad creatives with thumb-stopping hooks." },
      { step: "04", title: "Launch", desc: "Deploy structured campaigns with Conversion API tracking intact." },
      { step: "05", title: "Optimize", desc: "Cut unprofitable ad sets, scale winning angles, and iterate variations." }
    ],
    packages: [
      {
        name: "Starter",
        price: "PRICE TO BE UPDATED",
        description: "Ad account foundation and launch for brands testing paid acquisition.",
        features: [
          "Pixel & CAPI Tracking Verification",
          "Up to 2 Active Campaign Funnels",
          "4 Custom Ad Creatives Included",
          "Weekly Budget & Bid Management",
          "WhatsApp Campaign Support"
        ],
        recommended: false
      },
      {
        name: "Growth",
        price: "PRICE TO BE UPDATED",
        description: "Aggressive customer acquisition for scaling stores and lead generation.",
        features: [
          "Full Funnel Architecture (Cold, Warm, Retargeting)",
          "Up to 5 Active Campaigns",
          "8 Fresh Creative Iterations / Month",
          "Retargeting & Dynamic Product Ads (DPA)",
          "Live Performance Dashboard & Weekly Reviews"
        ],
        recommended: true
      },
      {
        name: "Premium",
        price: "PRICE TO BE UPDATED",
        description: "High-volume ad management for established enterprise brands.",
        features: [
          "Unlimited Campaign Management & Scaling",
          "Continuous Creative Production (UGC + Motion Graphics)",
          "Deep Funnel Attribution & LTV Cohort Tracking",
          "Daily Bid Adjustments & Rapid Scaling Protocols",
          "Dedicated Media Buyer & WhatsApp VIP Access"
        ],
        recommended: false
      }
    ],
    faq: [
      {
        q: "Does your pricing include ad spend?",
        a: "No, our fee covers professional agency management, creative production, and optimization. Ad spend is billed directly by Meta to your credit card."
      },
      {
        q: "How do you track conversions post-iOS14?",
        a: "We configure server-side tracking via Meta Conversions API (CAPI) with high event match quality to capture accurate attribution."
      }
    ]
  },
  {
    id: 4,
    slug: "google-ads",
    name: "Google Ads",
    category: "marketing",
    categoryLabel: "Marketing",
    shortDescription: "High-intent search, Performance Max, and shopping campaigns that capture buyers at the exact moment of search.",
    overview: "Put your business in front of customers when they are actively searching for what you sell. We build hyper-targeted Google Search, Shopping, Performance Max, and Display campaigns that maximize conversion value.",
    image: "./assets/services/google-ads.jpg",
    startingPrice: "Starting from [PRICE]",
    whoThisIsFor: [
      "Companies with high-intent search volume in their industry",
      "Ecommerce merchants seeking automated Google Shopping revenue",
      "Local and international service providers wanting qualified inquiries"
    ],
    deliverables: [
      "Keyword Research, Match Type Planning & Negative Keyword List",
      "Performance Max & Smart Bidding Setup",
      "Conversion Tracking via Google Tag Manager & GA4",
      "Compelling Ad Copywriting with Responsive Search Ads",
      "Ongoing Search Term Pruning & Quality Score Optimization"
    ],
    process: [
      { step: "01", title: "Discover", desc: "Analyze competitor bidding, search volumes, and unit economics." },
      { step: "02", title: "Plan", desc: "Design campaign structure, target keywords, and negative keyword buffers." },
      { step: "03", title: "Create", desc: "Write responsive ad copy, sitelink extensions, and callout assets." },
      { step: "04", title: "Launch", desc: "Activate campaigns with enhanced conversion tracking configured." },
      { step: "05", title: "Optimize", desc: "Prune wasteful search queries and adjust bids for target CPA/ROAS." }
    ],
    packages: [
      {
        name: "Starter",
        price: "PRICE TO BE UPDATED",
        description: "Google Search foundation for targeted local or niche terms.",
        features: [
          "1 Core Search Campaign",
          "Negative Keyword Scrubbing",
          "Conversion Action Setup via GTM",
          "Bi-Weekly Bid Adjustments",
          "Monthly Performance Overview"
        ],
        recommended: false
      },
      {
        name: "Growth",
        price: "PRICE TO BE UPDATED",
        description: "Multi-campaign search + shopping setup for ecommerce & lead gen.",
        features: [
          "Search + Performance Max Campaigns",
          "Continuous Negative Keyword Expansion",
          "Dynamic Sitelinks & Callout Extensions",
          "Weekly Optimization & Quality Score Tuning",
          "Dedicated Account Manager on WhatsApp"
        ],
        recommended: true
      },
      {
        name: "Premium",
        price: "PRICE TO BE UPDATED",
        description: "Full enterprise Google Ads management across all networks.",
        features: [
          "Search, PMax, YouTube Ads & Display Retargeting",
          "Custom GTM Scripting & Offline Conversion Imports",
          "Competitor Conquesting & Brand Defense",
          "Daily Spend Optimization",
          "Weekly Strategy Video Call & Real-Time Reporting"
        ],
        recommended: false
      }
    ],
    faq: [
      {
        q: "What is Performance Max (PMax)?",
        a: "Performance Max is Google's AI-driven campaign type that buys ads across YouTube, Display, Search, Discover, Gmail, and Maps from a single campaign."
      }
    ]
  },
  {
    id: 5,
    slug: "seo",
    name: "Search Engine Optimization (SEO)",
    category: "marketing",
    categoryLabel: "Marketing",
    shortDescription: "Sustainable organic rankings, technical website health, and high-authority search visibility that brings free traffic for years.",
    overview: "Build an enduring organic traffic moat. We combine rigorous technical SEO audits, site speed optimization, keyword architecture, and content clustering to rank your pages at the top of Google results.",
    image: "./assets/services/seo.jpg",
    startingPrice: "Starting from [PRICE]",
    whoThisIsFor: [
      "Brands wanting to reduce dependence on expensive paid ads",
      "Ecommerce stores needing category & product page rankings",
      "B2B and local businesses targeting long-term customer acquisition"
    ],
    deliverables: [
      "Comprehensive Technical Site Health Audit",
      "High-Intent Commercial Keyword Mapping",
      "On-Page Optimization (Metadata, Headers, Schema Markup)",
      "Core Web Vitals & Speed Recommendations",
      "Monthly Keyword Ranking & Organic Traffic Reports"
    ],
    process: [
      { step: "01", title: "Discover", desc: "Audit indexation, crawl errors, backlink health, and keyword baselines." },
      { step: "02", title: "Plan", desc: "Map commercial search queries to target URLs and content gaps." },
      { step: "03", title: "Create", desc: "Optimize title tags, meta descriptions, alt tags, and internal linking." },
      { step: "04", title: "Launch", desc: "Submit clean XML sitemaps and implement structured JSON-LD schema." },
      { step: "05", title: "Optimize", desc: "Monitor search console clicks, impressions, and ranking progressions." }
    ],
    packages: [
      {
        name: "Starter",
        price: "PRICE TO BE UPDATED",
        description: "Technical health & foundational on-page fixes for up to 10 core pages.",
        features: [
          "Technical Error & Indexation Audit",
          "On-Page Optimization for 10 Key Pages",
          "Schema Markup Implementation",
          "Google Search Console Verification",
          "Monthly Keyword Movement Report"
        ],
        recommended: false
      },
      {
        name: "Growth",
        price: "PRICE TO BE UPDATED",
        description: "Ongoing organic expansion with content strategy & site authority building.",
        features: [
          "Continuous Technical SEO Monitoring",
          "On-Page Optimization for 25 Pages",
          "Content Cluster & Blog Strategy",
          "Core Web Vitals Tuning",
          "Bi-Weekly Analytics Tracking"
        ],
        recommended: true
      },
      {
        name: "Premium",
        price: "PRICE TO BE UPDATED",
        description: "Comprehensive enterprise search domination for competitive verticals.",
        features: [
          "Full Store/Site-Wide SEO Management",
          "International / Multi-Region SEO Setup",
          "Programmatic Schema & Rich Snippet Engineering",
          "Competitor Rank Takeover Strategy",
          "Direct Consultation with Senior SEO Engineer"
        ],
        recommended: false
      }
    ],
    faq: [
      {
        q: "How long does SEO take to produce results?",
        a: "Technical fixes can show crawl improvements within 2 to 4 weeks, while measurable organic rank gains typically mature over 3 to 6 months."
      }
    ]
  },
  {
    id: 6,
    slug: "video-reels-editing",
    name: "Video & Reels Editing",
    category: "creative",
    categoryLabel: "Creative",
    shortDescription: "Fast-paced, hook-driven short-form reels and promotional video edits that stop thumbs and drive viral watch time.",
    overview: "Short-form video is the #1 organic growth driver today. We transform raw mobile or camera footage into highly engaging Reels, TikToks, Shorts, and product ads with crisp captions, dynamic sound design, and color grading.",
    image: "./assets/services/video-reels-editing.jpg",
    startingPrice: "Starting from [PRICE]",
    whoThisIsFor: [
      "Content creators needing scalable post-production",
      "Brands running TikTok, Instagram Reels, and YouTube Shorts",
      "Ecommerce businesses requiring product showcase video ads"
    ],
    deliverables: [
      "Dynamic 9:16 Vertical Video Edits (Reels / TikTok / Shorts)",
      "Animated Kinetic Typography & Captions",
      "Sound Design, SFX, and Trend-Aligned Music Selection",
      "Color Grading & Visual Hook Optimization",
      "Exported in High Bitrate 4K / 1080p for Maximum Quality"
    ],
    process: [
      { step: "01", title: "Discover", desc: "Review footage, brand aesthetic, and target platform formats." },
      { step: "02", title: "Plan", desc: "Script or outline opening 3-second visual and auditory hooks." },
      { step: "03", title: "Create", desc: "Assemble edit, kinetic captions, pacing cuts, and sound layering." },
      { step: "04", title: "Launch", desc: "Deliver ready-to-post vertical assets with thumbnail frames." },
      { step: "05", title: "Optimize", desc: "Analyze retention curves and refine editing pacing for next batch." }
    ],
    packages: [
      {
        name: "Starter",
        price: "PRICE TO BE UPDATED",
        description: "Introductory pack of 4 edited short-form videos.",
        features: [
          "4 High-Quality Reels / Shorts (up to 60s)",
          "Dynamic Captions & Sound Effects",
          "Color Correction & Brand Logo Placement",
          "2 Revision Rounds per Video",
          "Fast Turnaround via Cloud Delivery"
        ],
        recommended: false
      },
      {
        name: "Growth",
        price: "PRICE TO BE UPDATED",
        description: "Consistent monthly pipeline of 12 edited videos for active channels.",
        features: [
          "12 Edited Vertical Videos / Month",
          "Hook Testing Variations (2 Hooks per Video)",
          "Advanced Motion Graphics & Zoom Cuts",
          "Trending Audio Curation",
          "Dedicated Video Editor on WhatsApp"
        ],
        recommended: true
      },
      {
        name: "Premium",
        price: "PRICE TO BE UPDATED",
        description: "Heavy production volume of 24 videos for aggressive daily publishing.",
        features: [
          "24 High-Production Short Videos / Month",
          "Custom Motion Brand Templates & Intros",
          "Priority 48-Hour Delivery Pipeline",
          "Unlimited Minor Polish Revisions",
          "Creative Strategy & Hook Brainstorming Included"
        ],
        recommended: false
      }
    ],
    faq: [
      {
        q: "What software do you edit with?",
        a: "We use Adobe Premiere Pro, DaVinci Resolve, and After Effects to ensure broadcast-level audio, color, and motion design."
      }
    ]
  },
  {
    id: 7,
    slug: "graphic-design",
    name: "Graphic Design",
    category: "creative",
    categoryLabel: "Creative",
    shortDescription: "Luxury visual branding, editorial layouts, marketing collateral, and high-converting commercial banners.",
    overview: "First impressions dictate your pricing power. We craft bespoke visual assets that elevate your brand from amateur to high-end luxury, ensuring every piece of collateral communicates authority.",
    image: "./assets/services/graphic-design.jpg",
    startingPrice: "Starting from [PRICE]",
    whoThisIsFor: [
      "Companies refreshing their outdated visual brand language",
      "Ecommerce stores needing hero banners, badges, and packaging",
      "Businesses needing premium marketing decks and social graphics"
    ],
    deliverables: [
      "Brand Identity Systems (Logos, Color Palettes, Typography)",
      "Website Hero Banners & Promotional Graphics",
      "Pitch Decks, Brand Guidelines & Presentation Materials",
      "Packaging, Mockups & Print Collateral",
      "Source Files Delivered (Figma / AI / PSD)"
    ],
    process: [
      { step: "01", title: "Discover", desc: "Briefing session on brand mood, target audience, and inspirations." },
      { step: "02", title: "Plan", desc: "Moodboards, typographic pairing, and compositional direction." },
      { step: "03", title: "Create", desc: "Draft high-fidelity design concepts with refined geometric details." },
      { step: "04", title: "Launch", desc: "Collaborative review and final file export in all web/print formats." },
      { step: "05", title: "Optimize", desc: "Create reusable design system tokens for ongoing asset generation." }
    ],
    packages: [
      {
        name: "Starter",
        price: "PRICE TO BE UPDATED",
        description: "Essential graphic package for brand updates or promotional campaigns.",
        features: [
          "Up to 6 Custom Digital Graphics",
          "Hero Banners or Social Post Sets",
          "Web-Optimized & High-Res Formats",
          "2 Iteration Rounds",
          "Direct WhatsApp Collaboration"
        ],
        recommended: false
      },
      {
        name: "Growth",
        price: "PRICE TO BE UPDATED",
        description: "Comprehensive monthly creative retainer for scaling brands.",
        features: [
          "Up to 18 Custom Designed Assets / Month",
          "Website Banners, Ad Creatives & Pitch Decks",
          "Figma Component Library Maintenance",
          "Priority 72-Hour Turnaround",
          "Dedicated Senior Graphic Designer"
        ],
        recommended: true
      },
      {
        name: "Premium",
        price: "PRICE TO BE UPDATED",
        description: "Full brand identity overhaul and unlimited graphic production support.",
        features: [
          "Complete Brand Book (Logos, Typography, Guidelines)",
          "Unlimited Creative Asset Requests (Active Queue)",
          "Packaging & Merchandise Design",
          "Expedited 24-48 Hour Turnaround",
          "Direct Creative Director Access"
        ],
        recommended: false
      }
    ],
    faq: [
      {
        q: "Do you supply the source design files?",
        a: "Yes, all vector source files (Figma, AI, EPS) and high-resolution exports are included upon project completion."
      }
    ]
  },
  {
    id: 8,
    slug: "content-creation",
    name: "Content Creation",
    category: "creative",
    categoryLabel: "Creative",
    shortDescription: "Compelling written narratives, SEO blogs, persuasive sales copy, and omnichannel story assets.",
    overview: "Words that sell, educate, and convert. We write authoritative content tailored to your ideal customer profile—from thought-leadership articles to high-converting product descriptions and email newsletters.",
    image: "./assets/services/content-creation.jpg",
    startingPrice: "Starting from [PRICE]",
    whoThisIsFor: [
      "Brands wanting consistent, authoritative storytelling",
      "Founders needing ghostwritten thought leadership content",
      "Stores requiring persuasive, benefit-driven product copy"
    ],
    deliverables: [
      "SEO-Optimized Long-Form Articles & Case Studies",
      "High-Converting Landing Page & Website Copy",
      "Email Marketing Broadcasts & Welcome Flows",
      "Thought Leadership Articles for LinkedIn & Medium",
      "Comprehensive Content Style Guide"
    ],
    process: [
      { step: "01", title: "Discover", desc: "Research brand voice, customer pain points, and target messaging." },
      { step: "02", title: "Plan", desc: "Content calendar roadmap with keyword intent and conversion targets." },
      { step: "03", title: "Create", desc: "Draft engaging, well-researched copy with clear calls-to-action." },
      { step: "04", title: "Launch", desc: "Publish or handoff formatted copy ready for CMS deployment." },
      { step: "05", title: "Optimize", desc: "Review reader engagement and refine copy hooks based on feedback." }
    ],
    packages: [
      {
        name: "Starter",
        price: "PRICE TO BE UPDATED",
        description: "Foundational content pack of 4 SEO articles or newsletters.",
        features: [
          "4 Thoroughly Researched Articles (1,000 words each)",
          "Primary & Secondary Keyword Integration",
          "Meta Titles & Descriptions Included",
          "Internal Linking Recommendations",
          "Fast Editorial Review"
        ],
        recommended: false
      },
      {
        name: "Growth",
        price: "PRICE TO BE UPDATED",
        description: "Monthly content engine for regular audience education and organic traffic.",
        features: [
          "8 SEO Articles or Bi-Weekly Newsletters",
          "Landing Page Copywriting Support",
          "Social Post Repurposing Snippets",
          "Full Editorial Planning & Research",
          "Dedicated Content Strategist on WhatsApp"
        ],
        recommended: true
      },
      {
        name: "Premium",
        price: "PRICE TO BE UPDATED",
        description: "High-volume content ecosystem for authority brands and publishing leaders.",
        features: [
          "16 Comprehensive Articles / Month",
          "Full Website Copy Overhaul Included",
          "Whitepapers, Ebooks & Downloadable Guides",
          "Ghostwriting for Founders & Executives",
          "Priority Communication & Weekly Editorial Sync"
        ],
        recommended: false
      }
    ],
    faq: [
      {
        q: "Is your content original and plagiarism-free?",
        a: "100%. Every piece is written by human copywriters, edited for clarity, and verified for originality."
      }
    ]
  },
  {
    id: 9,
    slug: "whatsapp-sms-campaigns",
    name: "WhatsApp & SMS Campaigns",
    category: "communication",
    categoryLabel: "Communication",
    shortDescription: "Direct conversational marketing with up to 98% open rates that drives instant sales and booking confirmations.",
    overview: "Cut through crowded email inboxes. We design automated, compliant WhatsApp Business and SMS broadcast workflows that re-engage inactive customers, announce flash sales, and automate order notifications.",
    image: "./assets/services/whatsapp-sms-campaigns.jpg",
    startingPrice: "Starting from [PRICE]",
    whoThisIsFor: [
      "Ecommerce stores wanting instant revenue from customer lists",
      "Service providers needing automated appointment confirmations",
      "Brands wanting conversational direct customer support"
    ],
    deliverables: [
      "WhatsApp Business API / Twilio Infrastructure Integration",
      "Automated Abandoned Cart & Post-Purchase WhatsApp Triggers",
      "Promotional Broadcast Campaigns with Interactive CTA Buttons",
      "Contact Segmentation & Opt-In List Compliance",
      "Click-Through & Direct Sales Conversion Reports"
    ],
    process: [
      { step: "01", title: "Discover", desc: "Audit contact list hygiene, opt-in status, and brand messaging." },
      { step: "02", title: "Plan", desc: "Build automated messaging flows and promotional calendar." },
      { step: "03", title: "Create", desc: "Draft high-converting message templates with quick-reply buttons." },
      { step: "04", title: "Launch", desc: "Submit templates for WhatsApp approval and deploy automated triggers." },
      { step: "05", title: "Optimize", desc: "Monitor delivery, response rates, and revenue generated per send." }
    ],
    packages: [
      {
        name: "Starter",
        price: "PRICE TO BE UPDATED",
        description: "Essential WhatsApp setup for automated order & recovery triggers.",
        features: [
          "WhatsApp Business Profile Configuration",
          "Abandoned Cart WhatsApp Recovery Flow",
          "Welcome Series Message Template",
          "Integration with Shopify / Website",
          "Initial Delivery Testing"
        ],
        recommended: false
      },
      {
        name: "Growth",
        price: "PRICE TO BE UPDATED",
        description: "Active conversational marketing engine with 4 monthly broadcasts.",
        features: [
          "Full Automated Lifecycle Sequences (Cart, Shipping, Win-Back)",
          "4 Segmented Promotional Broadcasts / Month",
          "Interactive Quick-Reply Button Flows",
          "Audience List Segmentation & Clean Up",
          "Dedicated Campaign Manager on WhatsApp"
        ],
        recommended: true
      },
      {
        name: "Premium",
        price: "PRICE TO BE UPDATED",
        description: "Enterprise conversational commerce with automated live chatbot routing.",
        features: [
          "Unlimited Automated Triggers & Webhook Syncing",
          "Weekly Broadcast Campaigns & VIP Early Access Drops",
          "Multi-Agent Support Inbox Routing",
          "Deep CRM & Klaviyo/Shopify Synchronization",
          "Priority 24/7 Strategic Support"
        ],
        recommended: false
      }
    ],
    faq: [
      {
        q: "Are these campaigns compliant with WhatsApp anti-spam rules?",
        a: "Yes, we exclusively build compliant opt-in campaigns adhering to Meta's WhatsApp Commerce Policies to protect your business phone number from bans."
      }
    ]
  },
  {
    id: 10,
    slug: "shopify-design",
    name: "Shopify Design & Development",
    category: "ecommerce",
    categoryLabel: "Ecommerce",
    shortDescription: "Bespoke, high-converting Liquid storefronts engineered for blazing speed, editorial aesthetics, and high average order value.",
    overview: "Your store shouldn't look like an off-the-shelf theme template. We build bespoke Shopify experiences with custom Liquid code, conversion-rate optimization (CRO), high-converting mobile checkouts, and clean brand storytelling.",
    image: "./assets/services/shopify-design.jpg",
    startingPrice: "Starting from [PRICE]",
    whoThisIsFor: [
      "D2C brands launching a new flagship online store",
      "Existing Shopify merchants suffering from low conversion rates",
      "Retailers needing bespoke Liquid code, upsell carts, and custom sections"
    ],
    deliverables: [
      "Custom Shopify 2.0 Theme Architecture (Liquid & JSON)",
      "High-Converting Slide-Out Drawer Cart with In-Cart Upsells",
      "Mobile-First Responsive Layouts & Sticky Add-to-Cart",
      "Product Page Layouts with Trust Badges & Accordion Specs",
      "Blazing Fast Page Speeds & Clean App Stack Integration"
    ],
    process: [
      { step: "01", title: "Discover", desc: "Catalog review, competitor analysis, and customer buying journey mapping." },
      { step: "02", title: "Plan", desc: "Wireframing UX flows, header layout, collection hierarchy, and cart funnel." },
      { step: "03", title: "Create", desc: "Custom Liquid development, typography pairing, and visual branding." },
      { step: "04", title: "Launch", desc: "Domain connection, payment gateway verification, and live test orders." },
      { step: "05", title: "Optimize", desc: "Post-launch speed check, heatmaps review, and checkout micro-tweaks." }
    ],
    packages: [
      {
        name: "Starter",
        price: "PRICE TO BE UPDATED",
        description: "Essential Shopify store setup for launching a single product or small catalog.",
        features: [
          "Complete Shopify 2.0 Theme Customization",
          "Up to 10 Products Added & Configured",
          "Essential Pages (Home, Catalog, About, Contact, Policy)",
          "Payment Gateway & Shipping Setup",
          "Mobile Responsive Testing"
        ],
        recommended: false
      },
      {
        name: "Growth",
        price: "PRICE TO BE UPDATED",
        description: "Custom conversion-focused storefront with advanced Liquid features.",
        features: [
          "Bespoke Section Development (Liquid / CSS)",
          "Slide-Out Slide Cart with Free Shipping Bar & Upsells",
          "Sticky Add to Cart & Color Swatch Pickers",
          "Up to 30 Products Configured",
          "Speed Optimization & App Stack Streamlining"
        ],
        recommended: true
      },
      {
        name: "Premium",
        price: "PRICE TO BE UPDATED",
        description: "Flagship luxury ecommerce build for established high-volume brands.",
        features: [
          "Fully Custom Architecture with Tailored Theme Sections",
          "Advanced Filtering, Bundle Builders & Subscription Logic",
          "International Multi-Currency & Localization Setup",
          "Comprehensive CRO Audit & Post-Launch Support",
          "Direct WhatsApp Line with Founder / Lead Engineer"
        ],
        recommended: false
      }
    ],
    faq: [
      {
        q: "Do you work with custom Liquid code or just pre-made themes?",
        a: "We write clean, lightweight native Liquid, CSS, and vanilla JS directly into your Shopify theme, ensuring maximum speed without relying on heavy plugins."
      },
      {
        q: "Can you help migrate our store from WooCommerce or Wix to Shopify?",
        a: "Yes, we handle complete product, customer, and order data migrations with zero loss of SEO rankings."
      }
    ]
  },
  {
    id: 11,
    slug: "google-merchant-center",
    name: "Google Merchant Center",
    category: "ecommerce",
    categoryLabel: "Ecommerce",
    shortDescription: "Approved, fully compliant Google Shopping feeds, resolving disapprovals and maximizing product visibility on Google.",
    overview: "Get your products shown across Google Shopping, Google Images, and YouTube. We build optimized data feeds, resolve complex policy disapprovals (such as misrepresentation issues), and ensure 100% feed compliance.",
    image: "./assets/services/google-merchant-center.jpg",
    startingPrice: "Starting from [PRICE]",
    whoThisIsFor: [
      "Stores struggling with Google Merchant Center account suspensions",
      "Retailers wanting automated product feeds synced directly from Shopify",
      "Merchants seeking free Google Shopping organic listings"
    ],
    deliverables: [
      "GMC Account Creation, Domain Claiming & Verification",
      "Policy Compliance Audit (Shipping, Returns, Terms, Checkout)",
      "Automated Product Feed Architecture with Custom Labels",
      "Resolution of Product Disapprovals & GTIN/MPN Warnings",
      "Linking with Google Ads for Performance Max Shopping"
    ],
    process: [
      { step: "01", title: "Discover", desc: "Audit GMC diagnostic tab, website compliance policies, and feed errors." },
      { step: "02", title: "Plan", desc: "Map website terms to Google's strict merchant guidelines." },
      { step: "03", title: "Create", desc: "Construct structured XML/API feed with rich product attributes." },
      { step: "04", title: "Launch", desc: "Submit feed for Google review and request account re-evaluations." },
      { step: "05", title: "Optimize", desc: "Maintain feed hygiene and add seasonal promotion attributes." }
    ],
    packages: [
      {
        name: "Starter",
        price: "PRICE TO BE UPDATED",
        description: "Initial GMC setup and feed sync for clean new stores.",
        features: [
          "GMC Account Setup & Verification",
          "Primary Product Feed Integration",
          "Store Policy Check & Recommendation",
          "Google Ads Account Link",
          "Initial Approval Verification"
        ],
        recommended: false
      },
      {
        name: "Growth",
        price: "PRICE TO BE UPDATED",
        description: "Feed optimization and policy troubleshooting for active catalogs.",
        features: [
          "Complete Feed Attribute Optimization (Titles, Category IDs)",
          "Resolution of Item-Level Disapprovals",
          "Custom Labels for Margin & Bestseller Bidding",
          "Shipping & Tax Table Accurate Configuration",
          "Direct WhatsApp Support"
        ],
        recommended: true
      },
      {
        name: "Premium",
        price: "PRICE TO BE UPDATED",
        description: "Suspension recovery & enterprise multi-country feed architecture.",
        features: [
          "Account-Level Suspension (Misrepresentation) Appeal Management",
          "Multi-Country Currency & Language Feeds",
          "Supplemental Feed Rules & Automated Tagging",
          "Continuous Feed Error Monitoring",
          "Priority Technical Assistance"
        ],
        recommended: false
      }
    ],
    faq: [
      {
        q: "Can you fix the 'Misrepresentation' suspension on Google Merchant Center?",
        a: "Yes, we perform a deep technical audit of your store's legal disclosures, contact details, pricing consistency, and shipping policies to ensure full compliance before appealing to Google."
      }
    ]
  },
  {
    id: 12,
    slug: "website-design-development",
    name: "Website Design & Development",
    category: "technology",
    categoryLabel: "Technology",
    shortDescription: "Fast, modern web applications and agency websites built with React, Vite, clean code, and flawless responsiveness.",
    overview: "Modern businesses need lightning-fast, bespoke websites that reflect their true caliber. We build ultra-responsive web applications and landing pages using React, modern CSS, and scalable static frontends engineered for instant page loads.",
    image: "./assets/services/website-design-development.jpg",
    startingPrice: "Starting from [PRICE]",
    whoThisIsFor: [
      "Agencies, startups, and enterprises wanting a high-end web presence",
      "Businesses replacing sluggish WordPress or builder sites",
      "Founders needing custom web tools, aggregators, or calculators"
    ],
    deliverables: [
      "Custom React / Vite / Modern CSS Component Architecture",
      "100% Mobile & Desktop Responsive Layouts (Zero Overflow)",
      "Technical SEO Foundation, Meta Tags & Open Graph Cards",
      "GitHub Pages or Vercel Deployment-Ready Configuration",
      "Clean, Modular, Maintainable Codebase"
    ],
    process: [
      { step: "01", title: "Discover", desc: "Requirements gathering, user journey planning, and technical scope." },
      { step: "02", title: "Plan", desc: "Information architecture, wireframing, and component breakdowns." },
      { step: "03", title: "Create", desc: "Modern frontend development with responsive styling and smooth interactions." },
      { step: "04", title: "Launch", desc: "Cross-device testing, build optimization, and production deployment." },
      { step: "05", title: "Optimize", desc: "Lighthouse performance tuning and responsive audits." }
    ],
    packages: [
      {
        name: "Starter",
        price: "PRICE TO BE UPDATED",
        description: "High-converting single-page application or lead generation landing page.",
        features: [
          "Single-Page Responsive Application",
          "Hero, Services, About, Contact & FAQ Sections",
          "Direct WhatsApp & Email Integration",
          "SEO & Meta Tag Configuration",
          "GitHub Pages / Netlify Deployment"
        ],
        recommended: false
      },
      {
        name: "Growth",
        price: "PRICE TO BE UPDATED",
        description: "Full multi-page agency or corporate website with dynamic routing.",
        features: [
          "Up to 8 Dedicated Pages with Router",
          "Interactive Filtering & Reusable Components",
          "Modern Animations & Micro-Interactions",
          "Contact Conversion Triggers & Interactive Modals",
          "Dedicated Frontend Engineer on WhatsApp"
        ],
        recommended: true
      },
      {
        name: "Premium",
        price: "PRICE TO BE UPDATED",
        description: "Custom web platform with bespoke interactivity and architecture.",
        features: [
          "Bespoke Web Application / Portal Architecture",
          "Custom Client-Side Data Processing & Filters",
          "PWA (Progressive Web App) Capabilities if required",
          "Full Source Code Ownership & Documentation",
          "Direct Technical Consultation with Founder"
        ],
        recommended: false
      }
    ],
    faq: [
      {
        q: "What tech stack do you recommend?",
        a: "We love React with Vite and modern CSS because it produces blazing fast static bundles with zero server costs and instantaneous load speeds."
      }
    ]
  },
  {
    id: 13,
    slug: "lead-generation",
    name: "B2B & B2C Lead Generation",
    category: "marketing",
    categoryLabel: "Marketing",
    shortDescription: "Targeted outbound prospecting and inbound lead funnels that fill your sales pipeline with qualified decision-makers.",
    overview: "Never run out of sales conversations. We build targeted prospecting databases, scrape high-accuracy verified business contacts, and deploy automated outreach sequences that book calls directly into your calendar.",
    image: "./assets/services/lead-generation.jpg",
    startingPrice: "Starting from [PRICE]",
    whoThisIsFor: [
      "B2B service agencies looking for corporate clients",
      "Sales teams needing clean, verified lead lists with emails & phone numbers",
      "Local businesses seeking high-ticket customer appointments"
    ],
    deliverables: [
      "Target Market ICP (Ideal Customer Profile) Definition",
      "Verified B2B Contact Lists (Name, Title, Email, Phone, Company)",
      "Data Hygiene, Bounce Rate Verification & Duplicate Removal",
      "Cold Outreach Copywriting Frameworks",
      "Organized Delivery in Excel / Google Sheets"
    ],
    process: [
      { step: "01", title: "Discover", desc: "Define precise industry verticals, employee sizes, and geographic targets." },
      { step: "02", title: "Plan", desc: "Build prospecting filters across LinkedIn, Google Maps, and business directories." },
      { step: "03", title: "Create", desc: "Mine, cleanse, and verify contact data points with high accuracy." },
      { step: "04", title: "Launch", desc: "Deliver structured spreadsheets with direct WhatsApp/email triggers." },
      { step: "05", title: "Optimize", desc: "Iterate search criteria based on outreach conversion and response rates." }
    ],
    packages: [
      {
        name: "Starter",
        price: "PRICE TO BE UPDATED",
        description: "Targeted lead list of 250 verified business decision-makers.",
        features: [
          "250 Verified B2B Contacts",
          "Full Contact Details (Email, Phone, Title, URL)",
          "Zero-Bounce Email Verification",
          "1 Targeted Geographic Region",
          "Delivery in Excel / Google Sheets"
        ],
        recommended: false
      },
      {
        name: "Growth",
        price: "PRICE TO BE UPDATED",
        description: "1,000 verified leads with custom outreach messaging scripts.",
        features: [
          "1,000 Verified B2B / B2C Leads",
          "Multi-Criteria Filtering & Industry Segmentation",
          "Cold Outreach Email & WhatsApp Script Templates",
          "Phone Number & Social Profile Enrichment",
          "Dedicated Data Specialist on WhatsApp"
        ],
        recommended: true
      },
      {
        name: "Premium",
        price: "PRICE TO BE UPDATED",
        description: "Ongoing monthly pipeline of 2,500+ verified prospects.",
        features: [
          "2,500+ Fresh Verified Leads / Month",
          "Custom Multi-Channel Outreach Playbook",
          "CRM Import Assistance (HubSpot / Notion)",
          "Competitor Customer Mining",
          "Priority Bi-Weekly Data Refreshes"
        ],
        recommended: false
      }
    ],
    faq: [
      {
        q: "How do you verify email and phone accuracy?",
        a: "We run multi-step verification including MX record checks, SMTP pings, and syntax validation to guarantee industry-low bounce rates."
      }
    ]
  },
  {
    id: 14,
    slug: "analytics-reporting",
    name: "Analytics & Growth Reporting",
    category: "technology",
    categoryLabel: "Technology",
    shortDescription: "Unified performance dashboards, GA4 tracking, conversion audits, and actionable data-backed business insights.",
    overview: "You can't improve what you don't measure. We configure crystal-clear GA4 events, Meta Pixel CAPI, Google Search Console, and custom Looker Studio dashboards so you always know your exact cost per acquisition and customer lifetime value.",
    image: "./assets/services/analytics-reporting.jpg",
    startingPrice: "Starting from [PRICE]",
    whoThisIsFor: [
      "Companies with messy or broken Google Analytics 4 setups",
      "Merchants who don't know which marketing channels are truly profitable",
      "Executive teams requiring automated monthly KPI dashboards"
    ],
    deliverables: [
      "Google Analytics 4 (GA4) Custom Event & Ecommerce Tracking",
      "Google Tag Manager (GTM) Container Clean Up",
      "Custom Looker Studio Executive Dashboard",
      "Multi-Touch Channel Attribution Auditing",
      "Monthly Executive Summary with Strategic Recommendations"
    ],
    process: [
      { step: "01", title: "Discover", desc: "Audit existing analytics tags, tracking scripts, and data discrepancies." },
      { step: "02", title: "Plan", desc: "Define core business KPIs, conversion funnels, and reporting views." },
      { step: "03", title: "Create", desc: "Implement custom GTM triggers, GA4 parameters, and data layers." },
      { step: "04", title: "Launch", desc: "Deploy live dashboard connecting ads, website, and sales data." },
      { step: "05", title: "Optimize", desc: "Bi-weekly review of conversion bottlenecks and drop-off points." }
    ],
    packages: [
      {
        name: "Starter",
        price: "PRICE TO BE UPDATED",
        description: "Standard GA4 and GTM ecommerce conversion tracking audit & fix.",
        features: [
          "GA4 Property Setup & Verification",
          "Essential Event Tracking (Form, Purchase, Cart)",
          "Google Search Console Integration",
          "Basic Looker Studio Dashboard",
          "Single Verification Call"
        ],
        recommended: false
      },
      {
        name: "Growth",
        price: "PRICE TO BE UPDATED",
        description: "Comprehensive multi-channel attribution and live executive dashboard.",
        features: [
          "Advanced GTM & Server-Side Tagging Configuration",
          "Multi-Platform Dashboard (Meta + Google + Shopify)",
          "Conversion Funnel Drop-off Analysis",
          "Bi-Weekly Metric Walkthroughs",
          "Direct WhatsApp Support"
        ],
        recommended: true
      },
      {
        name: "Premium",
        price: "PRICE TO BE UPDATED",
        description: "Enterprise analytics engineering with predictive cohort analysis.",
        features: [
          "Custom Data Pipeline Integration",
          "Customer Lifetime Value (LTV) & Churn Tracking",
          "Continuous Tag Management & CRO Experiment Tracking",
          "Weekly Strategic Video Consultation",
          "Priority Analytics Architect Access"
        ],
        recommended: false
      }
    ],
    faq: [
      {
        q: "Why is GA4 showing different numbers than Shopify?",
        a: "Discrepancies often stem from ad-blockers, timezone mismatches, or missing server-side conversions. We reconcile these tracking layers to get your numbers within 95%+ accuracy."
      }
    ]
  },
  {
    id: 15,
    slug: "social-media-strategy",
    name: "Social Media Strategy",
    category: "creative",
    categoryLabel: "Creative",
    shortDescription: "Holistic growth roadmaps, competitor intelligence, content architecture, and brand authority positioning.",
    overview: "Before you create a single post, you need an ironclad strategy. We deliver full-scale social roadmaps covering competitor reverse-engineering, viral hook formats, brand positioning, and customer acquisition playbooks.",
    image: "./assets/services/social-media-strategy.jpg",
    startingPrice: "Starting from [PRICE]",
    whoThisIsFor: [
      "Companies launching a new brand needing an unfair market advantage",
      "Brands stuck at an engagement plateau needing a fresh direction",
      "In-house teams needing an expert roadmap to execute internally"
    ],
    deliverables: [
      "In-Depth Competitor Reverse-Engineering Report",
      "Audience Persona & Pain Point Blueprint",
      "Core Content Pillars & 90-Day Campaign Playbook",
      "High-Converting Visual Aesthetic & Feed Style Guide",
      "Key Metric Benchmarks & Milestone Timeline"
    ],
    process: [
      { step: "01", title: "Discover", desc: "Deep dive into your market landscape, competitor angles, and brand vision." },
      { step: "02", title: "Plan", desc: "Identify white space opportunities where competitors are weak." },
      { step: "03", title: "Create", desc: "Develop the 90-day master content pillars and creative playbook." },
      { step: "04", title: "Launch", desc: "Present the strategy deck to your executive or internal team." },
      { step: "05", title: "Optimize", desc: "Quarterly reviews to refine strategy against new platform algorithms." }
    ],
    packages: [
      {
        name: "Starter",
        price: "PRICE TO BE UPDATED",
        description: "Essential 30-day social media roadmap for emerging brands.",
        features: [
          "Competitor Social Audit (Top 3 Competitors)",
          "3 Core Content Pillars Defined",
          "30-Day Content Idea Bank with Hooks",
          "Profile Bio & Visual Refresh Guide",
          "Strategy Presentation Deck"
        ],
        recommended: false
      },
      {
        name: "Growth",
        price: "PRICE TO BE UPDATED",
        description: "Comprehensive 90-day multi-channel roadmap with creative guidelines.",
        features: [
          "Full 90-Day Omnichannel Growth Playbook",
          "Detailed Competitor Creative Breakdown",
          "Hook Scripts for Short-Form Video",
          "Community Engagement Playbook for In-House Teams",
          "Dedicated Strategy Consultation on WhatsApp"
        ],
        recommended: true
      },
      {
        name: "Premium",
        price: "PRICE TO BE UPDATED",
        description: "Complete brand authority positioning blueprint with quarterly advisory.",
        features: [
          "Full Brand Positioning & Viral Architecture",
          "Executive Personal Branding Framework",
          "Quarterly Strategy Refreshes & Trend Briefings",
          "Team Training & Review Workshops",
          "Direct Advisory with Agency Founder"
        ],
        recommended: false
      }
    ],
    faq: [
      {
        q: "Can our in-house team execute the strategy you create?",
        a: "Yes! Our strategy deliverables are engineered with crystal-clear guidelines, hook scripts, and templates so your internal team can execute effortlessly."
      }
    ]
  }
];
