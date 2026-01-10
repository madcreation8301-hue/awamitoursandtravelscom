import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-kaaba.jpg";
import { BUSINESS } from "@/lib/constants";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="The Holy Kaaba at Masjid al-Haram"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(151,70%,6%)/70%] via-[hsl(151,60%,10%)/60%] to-[hsl(151,70%,8%)/85%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(151,70%,6%)/80%] via-transparent to-[hsl(151,70%,6%)/30%]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container min-h-screen flex items-center justify-center text-center py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Bismillah - Subtle & Elegant */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-10 md:mb-14"
          >
            <p 
              className="arabic-spiritual text-lg md:text-xl"
              style={{ 
                color: 'hsl(38, 45%, 75%)',
                textShadow: '0 2px 10px hsl(0 0% 0% / 0.3)'
              }}
            >
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </p>
          </motion.div>

          {/* Main Heading - Bold & Premium */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="heading-display text-white mb-8"
            style={{ textShadow: '0 4px 20px hsl(0 0% 0% / 0.4)' }}
          >
            Your Trusted Partner for{" "}
            <span 
              className="block mt-2"
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

          {/* Subheading - Clear & Readable */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 font-light tracking-wide"
            style={{ textShadow: '0 2px 15px hsl(0 0% 0% / 0.3)' }}
          >
            Serving the Guests of Allah with Care
          </motion.p>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-14 leading-relaxed"
          >
            Experience a blessed journey with over 15 years of excellence in Hajj and Umrah services. 
            We take care of every detail so you can focus on your spiritual journey.
          </motion.p>

          {/* CTA Buttons - Improved Hierarchy */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          >
            <Link 
              to="/packages" 
              className="btn-gold flex items-center gap-3 text-base md:text-lg w-full sm:w-auto justify-center"
            >
              View Packages
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="btn-secondary-outline flex items-center gap-3 text-base md:text-lg w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </Link>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center gap-3 text-base md:text-lg w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </motion.div>

          {/* Trust Badges - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-20 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-10"
          >
            {[
              "15+ Years Experience",
              "10,000+ Happy Pilgrims",
              "100% Visa Success"
            ].map((text, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 text-white/70 text-sm md:text-base"
              >
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ background: 'linear-gradient(135deg, hsl(38, 50%, 75%), hsl(38, 35%, 62%))' }}
                />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-7 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1.5 h-3 rounded-full mt-2"
            style={{ background: 'linear-gradient(180deg, hsl(38, 50%, 75%), hsl(38, 35%, 62%))' }}
          />
        </div>
      </motion.div>
    </section>
  );
};
