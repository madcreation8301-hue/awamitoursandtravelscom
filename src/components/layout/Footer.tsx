import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Youtube, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import logoImage from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-16 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3">
              <img 
                src={logoImage}
                alt="Awami Tours & Travels Logo"
                className="w-14 h-14 rounded-full object-cover shadow-lg"
              />
              <div>
                <h3 className="font-display text-lg font-bold">Awami Tours</h3>
                <p className="text-sm text-primary-foreground/70">& Travels</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for Hajj and Umrah services since 1998. Serving the guests of Allah with care, 
              dedication, and over 25 years of experience.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/packages", label: "Packages" },
                { href: "/contact", label: "Contact" }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Hajj Packages", href: "/packages" },
                { label: "Umrah Packages", href: "/packages" },
                { label: "Group Umrah", href: "/services" },
                { label: "VIP Umrah", href: "/services" },
                { label: "Visa Assistance", href: "/services" },
                { label: "Ziyarat Tours", href: "/services" }
              ].map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={BUSINESS.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>
                    {BUSINESS.address.line1}<br />
                    {BUSINESS.address.line2}<br />
                    {BUSINESS.address.line3}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS.phone.mobile1.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  {BUSINESS.phone.mobile1}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS.phone.mobile2.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  {BUSINESS.phone.mobile2}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  WhatsApp: {BUSINESS.phone.mobile1}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-primary-foreground/80">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span>
                  Mon-Fri: {BUSINESS.businessHours.weekdays}<br />
                  Sat: {BUSINESS.businessHours.saturday}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© {currentYear} {BUSINESS.name}. All rights reserved.</p>
          <p className="text-center md:text-right">
            Serving the Guests of Allah with Care & Dedication
          </p>
        </div>
      </div>
    </footer>
  );
};
