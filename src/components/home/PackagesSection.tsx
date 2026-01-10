import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Star } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { PACKAGES } from "@/lib/constants";

export const PackagesSection = () => {
  const displayedPackages = PACKAGES.slice(0, 3);

  return (
    <section className="section-beige">
      <div className="container">
        <SectionHeader
          subtitle="Our Packages"
          title="Choose Your Perfect Pilgrimage Package"
          description="Carefully crafted packages to suit every budget and preference, ensuring a comfortable and blessed journey."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 ${
                pkg.featured ? "ring-2 ring-accent" : ""
              }`}
            >
              {pkg.featured && (
                <div className="absolute top-4 right-4 bg-accent text-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Popular
                </div>
              )}

              <div className="p-6 lg:p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground text-sm">/ person</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-muted-foreground">Hotel:</span>
                    <span className="font-medium">{pkg.hotel}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-muted-foreground">Distance:</span>
                    <span className="font-medium">{pkg.distance}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-muted-foreground">Transport:</span>
                    <span className="font-medium">{pkg.transport}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-6 mb-6">
                  <p className="text-sm font-semibold text-foreground mb-3">Inclusions:</p>
                  <ul className="space-y-2">
                    {pkg.inclusions.slice(0, 5).map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                    {pkg.inclusions.length > 5 && (
                      <li className="text-sm text-accent font-medium">
                        +{pkg.inclusions.length - 5} more
                      </li>
                    )}
                  </ul>
                </div>

                <Link
                  to={`/packages#${pkg.id}`}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.featured
                      ? "btn-gold"
                      : "bg-primary text-primary-foreground hover:bg-green-dark"
                  }`}
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/packages" className="btn-primary-gradient inline-flex items-center gap-2">
            View All Packages
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
