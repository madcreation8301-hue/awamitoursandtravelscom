import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Car, FileCheck, Headphones, MapPin, Plane, Star, Users, MessageCircle } from "lucide-react";
import { SERVICES, BUSINESS } from "@/lib/constants";
import { CTA } from "@/components/home/CTA";
import heroImage from "@/assets/hero-kaaba.jpg";

const iconMap: Record<string, React.ReactNode> = {
  kaaba: <div className="text-2xl">🕋</div>,
  mosque: <div className="text-2xl">🕌</div>,
  users: <Users className="w-8 h-8" />,
  star: <Star className="w-8 h-8" />,
  "file-check": <FileCheck className="w-8 h-8" />,
  plane: <Plane className="w-8 h-8" />,
  building: <Building className="w-8 h-8" />,
  car: <Car className="w-8 h-8" />,
  map: <MapPin className="w-8 h-8" />,
  headphones: <Headphones className="w-8 h-8" />
};

const Services = () => {
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
            <span className="inline-block text-accent text-lg mb-4">Our Services</span>
            <h1 className="heading-display mb-6">
              Comprehensive Hajj & Umrah Services
            </h1>
            <p className="text-xl text-primary-foreground/80">
              From visa processing to comfortable accommodations, we handle every aspect of your sacred journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-beige">
        <div className="container">
          <SectionHeader
            subtitle="What We Offer"
            title="Complete End-to-End Solutions"
            description="Every service you need for a comfortable and blessed pilgrimage, all under one roof."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card-premium flex gap-6 group scroll-mt-32"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {iconMap[service.icon]}
                </div>
                <div className="flex-1">
                  <h3 className="heading-card text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <a
                    href={`https://wa.me/${BUSINESS.whatsapp}?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20inquire%20about%20your%20${encodeURIComponent(service.title)}%20service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors"
                  >
                    Inquire Now
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="section-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-section text-foreground mb-4">
                Need a Custom Service?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We understand that every pilgrim has unique needs. Contact us to discuss 
                custom arrangements tailored specifically for you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="btn-gold flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/packages" className="btn-primary-gradient flex items-center gap-2">
                  View Packages
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </Layout>
  );
};

export default Services;
