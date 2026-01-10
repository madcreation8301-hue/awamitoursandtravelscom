import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${BUSINESS.whatsapp}?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20inquire%20about%20your%20Hajj%20%26%20Umrah%20packages.`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-foreground text-sm font-medium px-4 py-2 rounded-lg shadow-card opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};
