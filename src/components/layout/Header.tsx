import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/contact", label: "Contact" }
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <div 
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105"
              style={{ 
                background: scrolled 
                  ? 'linear-gradient(135deg, hsl(151, 60%, 14%) 0%, hsl(151, 70%, 10%) 100%)' 
                  : 'linear-gradient(135deg, hsl(151, 60%, 20%) 0%, hsl(151, 60%, 14%) 100%)',
                boxShadow: '0 4px 15px -3px hsl(151 60% 14% / 0.4)'
              }}
            >
              <span className="text-white font-display text-lg sm:text-xl lg:text-2xl font-bold">A</span>
            </div>
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
                  scrolled ? "text-muted-foreground" : "text-white/70"
                }`}
              >
                & Travels
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link py-2 ${
                  scrolled 
                    ? location.pathname === link.href
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                    : location.pathname === link.href
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                } ${location.pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${BUSINESS.phone.mobile1.replace(/\s/g, "")}`}
              className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                scrolled 
                  ? "text-foreground/70 hover:text-primary" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{BUSINESS.phone.mobile1}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center gap-2 text-sm !px-6 !py-3"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2.5 sm:p-3 rounded-xl transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
              scrolled 
                ? "hover:bg-muted text-foreground" 
                : "hover:bg-white/10 text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-16 sm:top-20 bg-card/98 backdrop-blur-xl"
            style={{ height: 'calc(100vh - 4rem)' }}
          >
            <nav className="container px-5 py-6 h-full flex flex-col">
              {/* Navigation Links */}
              <div className="space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center py-4 px-5 text-lg font-medium rounded-2xl transition-all duration-300 min-h-[56px] ${
                        location.pathname === link.href
                          ? "text-primary bg-primary/8 border-l-4 border-accent"
                          : "text-foreground/80 hover:text-primary hover:bg-muted/50"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {index < navLinks.length - 1 && (
                      <div className="h-px bg-border/50 mx-4" />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="mt-auto pt-6 border-t border-border/50 space-y-3">
                <a
                  href={`tel:${BUSINESS.phone.mobile1.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 py-4 px-5 text-foreground/80 hover:text-primary rounded-2xl hover:bg-muted/50 transition-all min-h-[56px]"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium block">{BUSINESS.phone.mobile1}</span>
                    <span className="text-sm text-muted-foreground">Tap to call</span>
                  </div>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-semibold text-white min-h-[56px]"
                  style={{
                    background: 'linear-gradient(135deg, hsl(142, 60%, 38%) 0%, hsl(142, 65%, 32%) 100%)',
                    boxShadow: '0 4px 15px -3px hsl(142 60% 35% / 0.4)'
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
