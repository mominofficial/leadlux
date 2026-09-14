/**
 * LeadLux Agency Central Site Configuration
 * All global agency details, contact channels, and conversion links are managed here.
 */

export const siteConfig = {
  agencyName: "LeadLux",
  tagline: "Your Remote Growth Partners",
  eyebrow: "REMOTE DIGITAL GROWTH AGENCY",
  heroHeadline: "Turn Your Digital Presence Into Real Growth.",
  heroSubheadline: "LeadLux helps ambitious brands grow through social media, performance marketing, SEO, ecommerce, creative content, and technology — all from one remote growth partner.",
  heroPillars: "Strategy • Creative • Performance • Technology",
  
  // Direct Contact & Conversion
  contact: {
    phoneDisplay: "01792872188",
    whatsappNumber: "8801792872188",
    email: "leadluxteam@gmail.com",
    bookingUrl: "https://calendly.com/leadluxteam/growth-consultation", // Replaceable booking platform placeholder
    location: "Global Remote Agency (Dhaka / Worldwide)",
    officeHours: "Sunday – Thursday: 10:00 AM – 8:00 PM (GMT+6)"
  },

  // Official Company Social Profiles
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100091055157800",
    instagram: "https://www.instagram.com/leadluxofficial/",
    github: "https://github.com/mominofficial"
  },

  // Agency Founder
  founder: {
    name: "MD Momin Ali",
    role: "Agency Founder & Lead Engineer",
    portfolioUrl: "https://mominofficial.me",
    shortBio: "Shopify Developer, Full-Stack Web Engineer, and Digital Growth Strategist with real-world experience scaling ecommerce storefronts, driving high-converting campaigns, and building modern web applications."
  },

  // Navigation Links
  navLinks: [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Founder", path: "/owner" },
    { label: "Contact", path: "/contact" }
  ],

  // Service Pillars / Trust Strip
  positioningPillars: [
    "Social Media",
    "Performance Marketing",
    "SEO & Search",
    "Shopify & Ecommerce",
    "Creative & Video",
    "Full-Stack Technology"
  ],

  // Copyright
  copyright: `© ${new Date().getFullYear()} LeadLux Agency. All rights reserved.`
};
