import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Car, FileCheck, Headphones, MapPin, Plane, Star, Users, MessageCircle } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { SERVICES, BUSINESS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  kaaba: <div className="w-6 h-6 font-display font-bold text-lg">🕋</div>,
  mosque: <div className="w-6 h-6 font-display font-bold text-lg">🕌</div>,
  users: <Users className="w-6 h-6" />,
  star: <Star className="w-6 h-6" />,
  "file-check": <FileCheck className="w-6 h-6" />,
  plane: <Plane className="w-6 h-6" />,
  building: <Building className="w-6 h-6" />,
  car: <Car className="w-6 h-6" />,
  map: <MapPin className="w-6 h-6" />,
  headphones: <Headphones className="w-6 h-6" />
};

export const ServicesSection = () => {
  const displayedServices = SERVICES.slice(0, 6);

  return (
    <section className="section-white" id="services">
      <div className="container px-4 sm:px-6">
        <SectionHeader
          subtitle="Our Services"
          title="Comprehensive Hajj & Umrah Services"
          description="From visa processing to comfortable accommodations, we handle every aspect of your sacred journey with care and expertise."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {displayedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <Link
                to={`/services#${service.id}`}
                className="card-premium block h-full group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {iconMap[service.icon]}
                </div>
                <h3 className="heading-card text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-accent transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <Link to="/services" className="btn-gold inline-flex items-center gap-2 w-full sm:w-auto justify-center">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={`https://wa.me/${BUSINESS.whatsapp}?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};
