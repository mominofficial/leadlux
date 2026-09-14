/**
 * Central Real Projects Data for LeadLux Agency
 * Strictly uses the 19 verified client and portfolio projects provided by the user.
 * Categories: Shopify, Social Media, Creative, Development
 */

export const projectFilters = [
  { id: "all", label: "All Work" },
  { id: "shopify", label: "Shopify Storefronts" },
  { id: "social", label: "Social Media" },
  { id: "creative", label: "Creative & Video" },
  { id: "development", label: "Web & AI Apps" }
];

export const projects = [
  // 1. Modeflo
  {
    id: 1,
    name: "Modeflo",
    slug: "modeflo",
    category: "shopify",
    categoryLabel: "Shopify Storefront",
    description: "Monochrome Handbag & Tote Storefront engineered for seamless mobile browsing, high visual minimalism, and frictionless checkout.",
    specialization: "Liquid & CRO",
    image: "./assets/projects/modeflo.png",
    projectUrl: "https://modeflo.store/",
    featured: true,
    tags: ["Shopify 2.0", "Liquid", "CRO", "Minimalist D2C"],
    challenge: "Deliver a modern monochrome aesthetic for fashion accessories with high performance scores and intuitive collection navigation.",
    approach: "Built custom Liquid sections with editorial product card hover states, instant swatch filtering, and a lightweight slide-out drawer cart."
  },

  // 2. Caspier
  {
    id: 2,
    name: "Caspier",
    slug: "caspier",
    category: "shopify",
    categoryLabel: "Shopify Storefront",
    description: "Premium Architectural Lighting Storefront featuring immersive room-by-room navigation, warm lighting aesthetics, and custom product bundles.",
    specialization: "Liquid & CRO",
    image: "./assets/projects/caspier.png",
    projectUrl: "https://caspier.com/",
    featured: true,
    tags: ["Shopify", "Architectural", "Luxury UX", "Liquid"],
    challenge: "Showcase high-ticket architectural lighting with sophisticated ambiance and detailed product specifications.",
    approach: "Engineered room-context preview galleries, dimensional specification accordions, and high-trust buyer reassurance badges."
  },

  // 3. Zalivia
  {
    id: 3,
    name: "Zalivia",
    slug: "zalivia",
    category: "shopify",
    categoryLabel: "Shopify Storefront",
    description: "Women's Fashion & Swimwear Storefront with editorial imagery, size recommendation guides, and fast summer sale promotional banners.",
    specialization: "Theme Development",
    image: "./assets/projects/zalivia.png",
    projectUrl: "https://zalivia.com/",
    featured: true,
    tags: ["Shopify", "Fashion D2C", "Mobile First", "Swimwear"],
    challenge: "Handle high-traffic seasonal sales drops while maintaining instantaneous mobile page loads and fluid collection filtering.",
    approach: "Streamlined asset loading, integrated sticky add-to-cart on mobile, and built dynamic promotional banner sections."
  },

  // 4. Chez Provence
  {
    id: 4,
    name: "Chez Provence",
    slug: "chez-provence",
    category: "shopify",
    categoryLabel: "Shopify Storefront",
    description: "Home Décor & Faux-Floral Storefront capturing European rustic elegance, seasonal collections, and gift bundling features.",
    specialization: "Theme Development",
    image: "./assets/projects/chez-provence.png",
    projectUrl: "https://chez-provence.co.uk/",
    featured: false,
    tags: ["Shopify", "Home Decor", "Editorial UK", "Liquid"],
    challenge: "Communicate tactile warmth and craftsmanship for luxury home decor products to UK consumers.",
    approach: "Designed a warm, subdued ivory layout with serif typography, bespoke collection lookbooks, and gift note checkout options."
  },

  // 5. Saltline
  {
    id: 5,
    name: "Saltline",
    slug: "saltline",
    category: "shopify",
    categoryLabel: "Shopify Storefront",
    description: "Premium Footwear Storefront with clean geometric branding, honest pricing positioning, and fast delivery messaging.",
    specialization: "Custom Brand Architecture",
    image: "./assets/projects/saltline.png",
    projectUrl: "https://mitech14.myshopify.com/",
    featured: false,
    tags: ["Shopify", "Footwear", "Custom Brand", "Sneakers"],
    challenge: "Position an emerging footwear line with authority and clear size selection parameters.",
    approach: "Built modular shoe showcase displays, interactive 3D-inspired product angles, and trust-focused checkout reassurance."
  },

  // 6. ReviveBerry
  {
    id: 6,
    name: "ReviveBerry",
    slug: "reviveberry",
    category: "shopify",
    categoryLabel: "Shopify Storefront",
    description: "Supplements & Wellness Storefront built with clinical dosage transparency, family wellness storytelling, and subscription upsells.",
    specialization: "Trust & Conversion",
    image: "./assets/projects/reviveberry.png",
    projectUrl: "https://reviveberry.com/",
    featured: false,
    tags: ["Shopify", "Health & Wellness", "Supplements", "CRO"],
    challenge: "Build immediate scientific trust and overcome consumer skepticism around wellness formulations.",
    approach: "Placed clinical proof points, ingredient breakdowns, and verified consumer testimonials directly into the viewport."
  },

  // 7. De_Bellas
  {
    id: 7,
    name: "De_Bellas",
    slug: "de-bellas",
    category: "shopify",
    categoryLabel: "Shopify Storefront",
    description: "Beauty & Cosmetics Storefront featuring localized cash-on-delivery ordering, vibrant cosmetic shades, and fast checkout for regional shoppers.",
    specialization: "Localized E-Commerce",
    image: "./assets/projects/de-bellas.png",
    projectUrl: "https://www.debellasbd.com/",
    featured: false,
    tags: ["Shopify", "Beauty & Makeup", "Regional D2C", "COD Checkout"],
    challenge: "Optimize ecommerce buying flow for regional consumers accustomed to rapid one-click Cash on Delivery (COD).",
    approach: "Integrated a custom lightweight COD quick-order modal, shade selector swatches, and WhatsApp order inquiry support."
  },

  // 8. Thames Glow Beauty
  {
    id: 8,
    name: "Thames Glow Beauty",
    slug: "thames-glow-beauty",
    category: "shopify",
    categoryLabel: "Shopify Storefront",
    description: "Clean Beauty & Skincare Storefront with editorial London aesthetic, thoughtful ingredient sourcing, and 30-day guarantee features.",
    specialization: "Editorial D2C",
    image: "./assets/projects/thames-glow.png",
    projectUrl: "https://a9v3sr-qf.myshopify.com/",
    featured: false,
    tags: ["Shopify", "Clean Beauty", "Skincare", "Editorial D2C"],
    challenge: "Create a serene, high-end skincare buying experience emphasizing clean ingredients.",
    approach: "Engineered subtle hover reveals, ingredient glossary drawers, and transparent customer guarantee badges."
  },

  // 9. Coco Beans
  {
    id: 9,
    name: "Coco Beans",
    slug: "coco-beans",
    category: "social",
    categoryLabel: "Social Media Management",
    description: "YouTube Channel Management & Content Production delivering high-clickthrough custom thumbnail designs and engaging animated children's video stories.",
    specialization: "YouTube Video Creation & Growth",
    image: "./assets/projects/smm-coco-beans-youtube.jpg",
    projectUrl: "https://www.youtube.com/@cocbeans",
    featured: false,
    tags: ["YouTube", "Video Production", "Thumbnail Design", "Channel Management"],
    challenge: "Scale channel viewership in a competitive kids' entertainment space through click-optimized packaging.",
    approach: "Designed vibrant, high-contrast custom 3D thumbnails, optimized video titles for search discovery, and managed release scheduling."
  },

  // 10. Royal Hair Wigs (Facebook)
  {
    id: 10,
    name: "Royal Hair Wigs (Facebook)",
    slug: "royal-hair-wigs-facebook",
    category: "social",
    categoryLabel: "Social Media Management",
    description: "Full Facebook Page Management for an international wig manufacturer and cosmetic hair brand, driving daily inquiries and appointment bookings.",
    specialization: "Facebook B2C & Inquiries",
    image: "./assets/projects/smm-royal-hair-wigs-facebook.jpg",
    projectUrl: "https://www.facebook.com/profile.php?id=61566429023079",
    featured: true,
    tags: ["Facebook", "Social Management", "Beauty & Hair", "Lead Generation"],
    challenge: "Build authentic community trust for personal cosmetic hair solutions while managing high inquiry volume.",
    approach: "Produced before-and-after transformation galleries, managed daily customer queries, and ran engagement-focused posting cadences."
  },

  // 11. LeadLux Agency (Facebook)
  {
    id: 11,
    name: "LeadLux Agency (Facebook)",
    slug: "leadlux-agency-facebook",
    category: "social",
    categoryLabel: "Social Media Management",
    description: "Official agency Facebook presence showcasing digital marketing insights, Shopify breakdowns, and remote growth client strategies.",
    specialization: "B2B Agency Positioning",
    image: "./assets/projects/smm-leadlux-agency-facebook.jpg",
    projectUrl: "https://www.facebook.com/profile.php?id=100091055157800",
    featured: false,
    tags: ["Facebook", "B2B Marketing", "Agency Social", "Lead Growth"],
    challenge: "Position the agency as an authoritative remote growth partner for ecommerce and tech clients.",
    approach: "Curated in-depth case study breakdowns, agency updates, and high-converting direct message funnels."
  },

  // 12. RoyLux (Facebook)
  {
    id: 12,
    name: "RoyLux (Facebook)",
    slug: "roylux-facebook",
    category: "social",
    categoryLabel: "Social Media Management",
    description: "Facebook Page Management for modern lifestyle & luxury fashion brand RoyLux, driving catalog awareness and style engagement.",
    specialization: "Fashion Brand Social",
    image: "./assets/projects/smm-roylux-facebook.jpg",
    projectUrl: "https://www.facebook.com/profile.php?id=61573311937684",
    featured: true,
    tags: ["Facebook", "Fashion Social", "Community Building", "Apparel"],
    challenge: "Establish a cohesive luxury apparel presence with seasonal lookbooks and audience interactions.",
    approach: "Designed sophisticated feed layouts, launched seasonal collection announcements, and maintained active comment responses."
  },

  // 13. বউয়ের রাজত্ব (Bouyer Rajjotto)
  {
    id: 13,
    name: "বউয়ের রাজত্ব (Bouyer Rajjotto)",
    slug: "bouyer-rajjotto",
    category: "social",
    categoryLabel: "Social Media Management",
    description: "Facebook Cartoon Content Management and animated family storytelling page, building an engaged audience across Bengali entertainment circles.",
    specialization: "Entertainment & Cartoon Content",
    image: "./assets/projects/smm-bouyer-rajjotto-facebook.jpg",
    projectUrl: "https://www.facebook.com/profile.php?id=61594057897009",
    featured: false,
    tags: ["Facebook", "Bengali Content", "Animation", "Viral Audience"],
    challenge: "Maximize organic shareability and family engagement for animated cartoon series with native cultural resonance.",
    approach: "Managed publication schedules, monitored viewer sentiments, and optimized viral hook clips to maximize organic algorithm spread."
  },

  // 14. LeadLux Agency (Instagram)
  {
    id: 14,
    name: "LeadLux Agency (Instagram)",
    slug: "leadlux-agency-instagram",
    category: "social",
    categoryLabel: "Social Media Management",
    description: "Official Instagram presence for LeadLux Agency featuring design breakdowns, ecommerce insights, and client milestone updates.",
    specialization: "Instagram B2B",
    image: "./assets/projects/smm-leadlux-instagram.jpg",
    projectUrl: "https://www.instagram.com/leadluxofficial/",
    featured: false,
    tags: ["Instagram", "Visual Branding", "Agency Growth", "Reels"],
    challenge: "Maintain a flawless visual grid that proves our aesthetic design caliber to prospective high-paying clients.",
    approach: "Developed cohesive teal and cream carousel decks, highlighted real work in stories, and linked direct WhatsApp booking."
  },

  // 15. Royal Hair Wigs (Instagram)
  {
    id: 15,
    name: "Royal Hair Wigs (Instagram)",
    slug: "royal-hair-wigs-instagram",
    category: "social",
    categoryLabel: "Social Media Management",
    description: "Instagram Profile Management showcasing real customer transformations, wig care routines, and product showcase reels.",
    specialization: "Instagram D2C Community",
    image: "./assets/projects/smm-royal-hair-wigs-instagram.jpg",
    projectUrl: "https://www.instagram.com/royal_hair_wigs/",
    featured: false,
    tags: ["Instagram", "Hair & Beauty", "Reels", "Community"],
    challenge: "Deliver relatable, high-touch video content that encourages private direct messages and custom wig inquiries.",
    approach: "Organized Instagram Highlights for easy catalog browsing, curated educational hair care reels, and actively handled DMs."
  },

  // 16. RoyLux Fashion Branding & Video
  {
    id: 16,
    name: "RoyLux Branding & Creative",
    slug: "roylux-creative",
    category: "creative",
    categoryLabel: "Branding & Creative Content",
    description: "Fashion Brand Content & Promotional Video Assets combining high-end editorial photography with AI-assisted product promo video generation.",
    specialization: "Fashion Branding & AI Video",
    image: "./assets/projects/roylux-fashion-promo.jpg",
    projectUrl: null, // External asset link
    driveUrl: "https://drive.google.com/", // Placeholder for Drive folder
    featured: true,
    tags: ["Creative Direction", "AI Video", "Fashion Promo", "Brand Guidelines"],
    challenge: "Produce luxury fashion promotional assets rapidly while maintaining editorial runway quality.",
    approach: "Blended cinematic video clips with AI-generated motion graphics, cohesive brand typography, and tailored social cuts."
  },

  // 17. UGC Short-Form Videos
  {
    id: 17,
    name: "UGC Product Promotions",
    slug: "ugc-promotions",
    category: "creative",
    categoryLabel: "UGC & Video Design",
    description: "Product Promotion Short-Form Videos engineered for TikTok, Instagram Reels, and YouTube Shorts that boost conversion across apparel and skincare.",
    specialization: "Short-Form Product Videos",
    image: "./assets/projects/ugc-short-form-videos.jpg",
    projectUrl: null,
    driveUrl: "https://drive.google.com/", // Placeholder for Drive folder
    featured: false,
    tags: ["UGC", "Reels Editing", "TikTok Ads", "Direct Response"],
    challenge: "Create authentic creator-style video hooks that bypass ad fatigue and hold viewer attention through the checkout call to action.",
    approach: "Scripted relatable problem-solution arcs, integrated dynamic subtitle overlays, and edited fast-paced pacing cuts."
  },

  // 18. FAIR PRICES (ন্যায্য মূল্য)
  {
    id: 18,
    name: "FAIR PRICES (ন্যায্য মূল্য)",
    slug: "fair-prices",
    category: "development",
    categoryLabel: "Mobile & AI Web Application",
    description: "AI Market & Grocery Budgeting App designed to help everyday families compare commodity prices, calculate smart budgets, and combat price gouging.",
    specialization: "AI & Flutter / Web App",
    image: "./assets/projects/fair-prices.jpg",
    projectUrl: null,
    githubUrl: "https://github.com/mominofficial",
    featured: true,
    tags: ["AI Web App", "Flutter / Web", "Budgeting", "Bengali AI"],
    challenge: "Provide real-time market price estimations and budget planning with an intuitive bilingual (Bengali/English) interface.",
    approach: "Engineered clean data structures for commodity tracking, AI budget optimization logic, and responsive mobile-first views."
  },

  // 19. DeshBrief
  {
    id: 19,
    name: "DeshBrief",
    slug: "deshbrief",
    category: "development",
    categoryLabel: "Full-Stack Web Application",
    description: "Real-Time Bangladesh News Aggregator Portal delivering breaking headlines, topic clustering, and lightning-fast reader views.",
    specialization: "React & Vite Web Architecture",
    image: "./assets/projects/deshbrief.png",
    projectUrl: "https://mominofficial.github.io/deshbrief/",
    githubUrl: "https://github.com/mominofficial/deshbrief",
    featured: true,
    tags: ["React", "Vite", "News Portal", "Web App"],
    challenge: "Deliver an instant-loading news aggregation portal capable of categorizing rapid real-time articles without server lag.",
    approach: "Built with React and Vite, utilizing client-side caching, dark/light theme switching, and instant search filtering."
  }
];
