import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Star } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { PACKAGES } from "@/lib/constants";

export const PackagesSection = () => {
  const displayedPackages = PACKAGES.slice(0, 3);

  return (
    <section className="section-beige" id="packages">
      <div className="container px-4 sm:px-6">
        <SectionHeader
          subtitle="Our Packages"
          title="Choose Your Perfect Pilgrimage Package"
          description="Carefully crafted packages to suit every budget and preference, ensuring a comfortable and blessed journey."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {displayedPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className={`relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 ${
                pkg.featured ? "ring-2 ring-accent" : ""
              }`}
            >
              {pkg.featured && (
                <div className="absolute top-4 right-4 bg-accent text-foreground text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Star className="w-3.5 h-3.5" />
                  Popular
                </div>
              )}

              <div className="p-5 sm:p-6 lg:p-8">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-2xl sm:text-3xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground text-sm">/ person</span>
                </div>

                <div className="space-y-2.5 mb-5 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-semibold text-foreground">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Hotel:</span>
                    <span className="font-semibold text-foreground">{pkg.hotel}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Distance:</span>
                    <span className="font-semibold text-foreground">{pkg.distance}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Transport:</span>
                    <span className="font-semibold text-foreground">{pkg.transport}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-5 mb-5">
                  <p className="text-sm font-bold text-foreground mb-3">Inclusions:</p>
                  <ul className="space-y-2">
                    {pkg.inclusions.slice(0, 5).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                    {pkg.inclusions.length > 5 && (
                      <li className="text-sm text-primary font-semibold pl-6">
                        +{pkg.inclusions.length - 5} more inclusions
                      </li>
                    )}
                  </ul>
                </div>

                <Link
                  to="/packages"
                  onClick={() => window.scrollTo(0, 0)}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold transition-all duration-300 min-h-[52px] ${
                    pkg.featured
                      ? "btn-gold"
                      : "btn-primary-gradient"
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
          className="text-center mt-10 sm:mt-12"
        >
          <Link to="/packages" onClick={() => window.scrollTo(0, 0)} className="btn-gold inline-flex items-center gap-2">
            View All Packages
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
