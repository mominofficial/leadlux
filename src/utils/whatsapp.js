/**
 * Central WhatsApp Conversion Engine
 * Formats international WhatsApp links with dynamic, service-specific pre-filled intent messages.
 */

import { siteConfig } from '../data/siteConfig';

export const createWhatsAppLink = (serviceName = null, packageName = null) => {
  const number = siteConfig.contact.whatsappNumber;
  let text = "Hi LeadLux, I'd like to discuss a digital growth project for my business.";

  if (serviceName && packageName) {
    text = `Hi LeadLux, I'm interested in your ${serviceName} (${packageName} Package). I'd like to discuss the service, pricing, and project requirements.`;
  } else if (serviceName) {
    text = `Hi LeadLux, I'm interested in your ${serviceName} service. I'd like to discuss the service, pricing, and project requirements.`;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};

export const createProjectWhatsAppLink = (projectName) => {
  const number = siteConfig.contact.whatsappNumber;
  const text = `Hi LeadLux, I reviewed your work on ${projectName} and would like to discuss building something similar for my brand.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};
