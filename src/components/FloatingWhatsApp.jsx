import React from 'react';
import { createWhatsAppLink } from '../utils/whatsapp';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href={createWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      title="Chat on WhatsApp with LeadLux"
      aria-label="Chat on WhatsApp with LeadLux"
    >
      <MessageSquare size={22} />
      <span>Chat with us</span>
    </a>
  );
}
