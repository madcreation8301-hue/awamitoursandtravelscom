import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import heroImage from "@/assets/hero-kaaba.jpg";

export const CTA = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kaaba Background"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-[hsl(151,70%,8%)/95%]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center text-primary-foreground"
        >
          <span className="inline-block text-accent text-base sm:text-lg mb-3 sm:mb-4">
            Ready to Begin Your Journey?
          </span>
          <h2 
            className="font-display font-bold mb-4 sm:mb-6 leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)' }}
          >
            Let Us Help You Fulfill Your Sacred Obligation
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
            Contact us today to discuss your Hajj or Umrah plans. Our team is ready to assist you.
          </p>

          {/* CTA Buttons - Full Width on Mobile */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 max-w-sm sm:max-w-none mx-auto">
            <Link 
              to="/contact" 
              className="btn-gold flex items-center gap-2 justify-center w-full sm:w-auto min-h-[52px] text-base"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${BUSINESS.phone.mobile1.replace(/\s/g, "")}`}
              className="flex items-center gap-2 justify-center w-full sm:w-auto min-h-[52px] bg-transparent border-2 border-primary-foreground/30 text-primary-foreground font-semibold px-6 rounded-xl hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 justify-center w-full sm:w-auto min-h-[52px] font-semibold px-6 rounded-xl text-white transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, hsl(142, 60%, 38%) 0%, hsl(142, 65%, 32%) 100%)',
                boxShadow: '0 4px 15px -3px hsl(142 60% 35% / 0.3)'
              }}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
