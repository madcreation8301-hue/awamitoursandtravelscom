import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, Home, Info, Briefcase, Package, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS } from "@/lib/constants";
import logoImage from "@/assets/logo.png";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/packages", label: "Packages", icon: Package },
  { href: "/contact", label: "Contact", icon: Mail }
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    navigate(href);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "navbar-glass shadow-soft"
          : "navbar-transparent"
      }`}
    >
      <div className="container px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={logoImage}
              alt="Awami Tours & Travels Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover transition-transform duration-300 group-hover:scale-105 shadow-lg"
              style={{ 
                boxShadow: scrolled 
                  ? '0 4px 15px -3px hsl(0 0% 0% / 0.15)' 
                  : '0 4px 15px -3px hsl(0 0% 0% / 0.3)'
              }}
            />
            <div className="hidden sm:block">
              <h1 
                className={`font-display text-lg lg:text-xl font-bold leading-tight transition-colors duration-300 ${
                  scrolled ? "text-primary" : "text-white"
                }`}
              >
                Awami Tours
              </h1>
              <p 
                className={`text-xs lg:text-sm transition-colors duration-300 ${
                  scrolled ? "text-muted-foreground" : "text-white/80"
                }`}
              >
                & Travels
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`nav-link py-2 font-medium ${
                  scrolled 
                    ? location.pathname === link.href
                      ? "text-primary font-semibold"
                      : "text-foreground hover:text-primary"
                    : location.pathname === link.href
                      ? "text-white font-semibold"
                      : "text-white/90 hover:text-white"
                } ${location.pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS.phone.mobile1.replace(/\s/g, "")}`}
              className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                scrolled 
                  ? "text-foreground hover:text-primary hover:bg-primary/5" 
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{BUSINESS.phone.mobile1}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center gap-2 text-sm !px-5 !py-2.5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center ${
              scrolled 
                ? "hover:bg-muted text-foreground active:bg-muted/80" 
                : "hover:bg-white/15 text-white active:bg-white/20"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay with Better Visibility */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden fixed inset-0 top-16 sm:top-20 z-40"
            style={{ 
              height: 'calc(100vh - 4rem)',
              background: 'hsl(30, 33%, 96%)'
            }}
          >
            {/* Close Button - Prominent */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-3 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-all min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="container px-5 py-8 h-full flex flex-col overflow-y-auto">
              {/* Navigation Links - High Contrast */}
              <div className="space-y-2 mt-8">
                {navLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.3 }}
                    >
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className={`w-full flex items-center gap-4 py-5 px-6 text-lg font-semibold rounded-2xl transition-all duration-300 min-h-[64px] ${
                          location.pathname === link.href
                            ? "text-white bg-primary shadow-lg"
                            : "text-foreground bg-card hover:bg-primary/10 active:bg-primary/15"
                        }`}
                      >
                        <IconComponent className="w-5 h-5 flex-shrink-0" />
                        {link.label}
                      </button>
                    </motion.div>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-border" />

              {/* Bottom Actions - Clear CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="space-y-3"
              >
                <a
                  href={`tel:${BUSINESS.phone.mobile1.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 py-4 px-6 bg-card text-foreground rounded-2xl transition-all min-h-[64px] active:bg-muted shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-bold block text-foreground">{BUSINESS.phone.mobile1}</span>
                    <span className="text-sm text-muted-foreground">Tap to call now</span>
                  </div>
                </a>
                
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-bold text-white min-h-[64px] text-lg active:scale-[0.98] transition-transform"
                  style={{
                    background: 'linear-gradient(135deg, hsl(142, 70%, 42%) 0%, hsl(142, 65%, 35%) 100%)',
                    boxShadow: '0 6px 20px -4px hsl(142 60% 35% / 0.5)'
                  }}
                >
                  <MessageCircle className="w-6 h-6" />
                  Chat on WhatsApp
                </a>
              </motion.div>

              {/* Footer in Menu */}
              <div className="mt-auto pt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  {BUSINESS.name}
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
