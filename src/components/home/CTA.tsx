import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import heroImage from "@/assets/hero-kaaba.jpg";

export const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kaaba Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center text-primary-foreground"
        >
          <span className="inline-block text-accent text-lg mb-4">
            Ready to Begin Your Journey?
          </span>
          <h2 className="heading-display mb-6">
            Let Us Help You Fulfill Your Sacred Obligation
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Contact us today to discuss your Hajj or Umrah plans. Our team is ready to assist 
            you in planning the most blessed journey of your life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-gold flex items-center gap-2 text-lg">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${BUSINESS.phone.mobile1.replace(/\s/g, "")}`}
              className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary-foreground/10 transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#20bd5a] transition-all duration-300 flex items-center gap-2"
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
