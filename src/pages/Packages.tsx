import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Check, Star, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { PACKAGES, BUSINESS } from "@/lib/constants";
import { CTA } from "@/components/home/CTA";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-kaaba.jpg";

const Packages = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-primary-foreground"
          >
            <span className="inline-block text-accent text-lg mb-4">Our Packages</span>
            <h1 className="heading-display mb-6">
              Choose Your Perfect Pilgrimage Package
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Carefully crafted packages to suit every budget and preference, ensuring a comfortable and blessed journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section-beige">
        <div className="container">
          <SectionHeader
            subtitle="Available Packages"
            title="Premium Hajj & Umrah Packages"
            description="All packages include visa assistance, flight bookings, hotel accommodations, and dedicated support throughout your journey."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                id={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 scroll-mt-32 ${
                  pkg.featured ? "ring-2 ring-accent lg:scale-105" : ""
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 left-0 right-0 bg-accent text-foreground text-center text-sm font-bold py-2 flex items-center justify-center gap-2">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                <div className={`p-6 lg:p-8 ${pkg.featured ? "pt-12" : ""}`}>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-muted-foreground text-sm">/ person</span>
                  </div>

                  <div className="space-y-4 mb-6 pb-6 border-b border-border">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-semibold">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Accommodation</span>
                      <span className="font-semibold">{pkg.hotel}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Distance to Haram</span>
                      <span className="font-semibold">{pkg.distance}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Transport</span>
                      <span className="font-semibold">{pkg.transport}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-4">What's Included:</p>
                    <ul className="space-y-3">
                      {pkg.inclusions.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Check className="w-5 h-5 text-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/${BUSINESS.whatsapp}?text=Assalamu%20Alaikum!%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20(${pkg.price}).%20Please%20share%20more%20details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-semibold transition-all duration-300 ${
                        pkg.featured
                          ? "btn-gold"
                          : "bg-primary text-primary-foreground hover:bg-green-dark"
                      }`}
                    >
                      <MessageCircle className="w-5 h-5" />
                      Book via WhatsApp
                    </a>
                    <a
                      href={`tel:${BUSINESS.phone.mobile1.replace(/\s/g, "")}`}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Phone className="w-4 h-4" />
                      Call to Book
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package */}
      <section className="section-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-3">
                Custom Packages
              </span>
              <h2 className="heading-section text-foreground mb-4">
                Need a Tailored Package?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We understand that every pilgrim has unique requirements. Contact us to create 
                a custom package that perfectly fits your needs, preferences, and budget.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="btn-gold flex items-center gap-2">
                  Request Custom Package
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20discuss%20a%20custom%20package%20for%20my%20pilgrimage.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#20bd5a] transition-all duration-300 flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Discuss on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </Layout>
  );
};

export default Packages;
