import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import medinaImage from "@/assets/medina-mosque.jpg";

const features = [
  "Government Approved Hajj & Umrah Operator",
  "15+ Years of Trusted Service",
  "Complete End-to-End Arrangements",
  "Experienced and Caring Staff",
  "Hotels Near Haram in Makkah & Madinah",
  "24/7 Support Throughout Your Journey"
];

export const AboutSection = () => {
  return (
    <section className="section-beige overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={medinaImage}
                alt="Masjid an-Nabawi in Madinah"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 lg:right-8 bg-card rounded-2xl p-6 shadow-elevated"
            >
              <div className="text-center">
                <span className="block text-4xl font-display font-bold text-primary">15+</span>
                <span className="text-sm text-muted-foreground">Years of Excellence</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              subtitle="About Us"
              title="Serving the Guests of Allah Since 2009"
              centered={false}
            />

            <p className="text-muted-foreground leading-relaxed mb-6">
              Awami Tours & Travels is a trusted name in Hajj and Umrah services, based in Pune, India. 
              For over 15 years, we have been helping pilgrims fulfill their sacred obligations with 
              comfort, dignity, and peace of mind.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of experienced professionals understands the spiritual significance of these 
              journeys and ensures that every aspect of your pilgrimage is carefully planned and 
              executed with the utmost care.
            </p>

            {/* Features List */}
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              to="/about"
              className="btn-primary-gradient inline-flex items-center gap-2"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
