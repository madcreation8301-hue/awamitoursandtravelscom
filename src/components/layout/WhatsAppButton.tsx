import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${BUSINESS.whatsapp}?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20inquire%20about%20your%20Hajj%20%26%20Umrah%20packages.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-40 group bottom-6 right-4 sm:right-6 p-3.5 sm:p-4 rounded-full text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
      style={{
        background: 'linear-gradient(135deg, hsl(142, 70%, 42%) 0%, hsl(142, 65%, 35%) 100%)',
        boxShadow: '0 6px 24px -4px hsl(142, 60%, 35% / 0.6)'
      }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-foreground text-sm font-semibold px-4 py-2.5 rounded-xl shadow-card opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
        Chat with us
      </span>
    </a>
  );
};
