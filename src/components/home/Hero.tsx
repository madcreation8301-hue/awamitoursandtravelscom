import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-kaaba.jpg";
import { BUSINESS } from "@/lib/constants";

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Background Image - Mobile Optimized */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="The Holy Kaaba at Masjid al-Haram"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Darker overlay for better mobile contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(151,70%,5%)/85%] via-[hsl(151,60%,8%)/75%] to-[hsl(151,70%,6%)/95%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(151,70%,5%)/90%] via-transparent to-[hsl(151,70%,5%)/40%]" />
      </div>

      {/* Content - Mobile First */}
      <div className="relative z-10 container min-h-[100svh] flex items-center justify-center text-center px-5 sm:px-6 py-24 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl mx-auto"
        >
          {/* Bismillah - Subtle, Smaller on Mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 md:mb-10"
          >
            <p 
              className="arabic-spiritual text-sm md:text-lg lg:text-xl"
              style={{ 
                color: 'hsl(38, 40%, 70%)',
                textShadow: '0 2px 8px hsl(0 0% 0% / 0.4)'
              }}
            >
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </p>
          </motion.div>

          {/* Main Heading - Responsive Scaling */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white mb-6 md:mb-8 font-display font-bold leading-[1.15] md:leading-[1.1]"
            style={{ 
              fontSize: 'clamp(1.75rem, 6vw, 4.5rem)',
              textShadow: '0 4px 25px hsl(0 0% 0% / 0.5)',
              letterSpacing: '-0.02em'
            }}
          >
            Your Trusted Partner for{" "}
            <span 
              className="block mt-1 md:mt-2"
              style={{ 
                background: 'linear-gradient(135deg, hsl(38, 50%, 75%) 0%, hsl(38, 35%, 62%) 50%, hsl(38, 45%, 70%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Hajj & Umrah
            </span>
          </motion.h1>

          {/* Subheading - Responsive */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/90 mb-4 md:mb-6 font-light tracking-wide leading-relaxed"
            style={{ 
              fontSize: 'clamp(1rem, 3vw, 1.75rem)',
              textShadow: '0 2px 12px hsl(0 0% 0% / 0.4)'
            }}
          >
            Serving the Guests of Allah with Care
          </motion.p>

          {/* Description - Constrained Width on Mobile */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm md:text-base lg:text-lg text-white/70 max-w-xl lg:max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed px-2"
          >
            Experience a blessed journey with over 15 years of excellence in Hajj and Umrah services.
          </motion.p>

          {/* CTA Buttons - Full Width on Mobile, Stacked */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 max-w-sm sm:max-w-none mx-auto"
          >
            <Link 
              to="/packages"
              onClick={() => window.scrollTo(0, 0)}
              className="btn-gold flex items-center gap-3 justify-center w-full sm:w-auto min-h-[52px] text-base"
            >
              View Packages
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="btn-secondary-outline flex items-center gap-3 justify-center w-full sm:w-auto min-h-[52px] text-base"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </Link>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center gap-3 justify-center w-full sm:w-auto min-h-[52px] text-base"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </motion.div>

          {/* Trust Badges - Compact on Mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8"
          >
            {[
              "15+ Years Experience",
              "10,000+ Pilgrims",
              "100% Visa Success"
            ].map((text, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-white/60 text-xs sm:text-sm"
              >
                <div 
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, hsl(38, 50%, 75%), hsl(38, 35%, 62%))' }}
                />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on Mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/25 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1 h-2.5 rounded-full mt-2"
            style={{ background: 'linear-gradient(180deg, hsl(38, 50%, 75%), hsl(38, 35%, 62%))' }}
          />
        </div>
      </motion.div>
    </section>
  );
};
