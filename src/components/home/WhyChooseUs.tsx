import { motion } from "framer-motion";
import { Award, Heart, Shield, Clock, Users, Headphones } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";

const reasons = [
  {
    icon: <Award className="w-7 h-7" />,
    title: "15+ Years Experience",
    description: "Over a decade and a half of trusted service in organizing blessed pilgrimages."
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Government Approved",
    description: "Fully licensed and authorized Hajj & Umrah operator recognized by authorities."
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Personalized Care",
    description: "Every pilgrim is treated as family with individual attention to their needs."
  },
  {
    icon: <Clock className="w-7 h-7" />,
    title: "Hassle-Free Process",
    description: "Complete end-to-end arrangements so you focus only on your spiritual journey."
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Expert Guides",
    description: "Knowledgeable and caring staff to assist you throughout your pilgrimage."
  },
  {
    icon: <Headphones className="w-7 h-7" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance before, during, and after your journey."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="section-green relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url('/src/assets/islamic-pattern.png')`,
            backgroundSize: "150px"
          }}
        />
      </div>

      <div className="container relative z-10">
        <SectionHeader
          subtitle="Why Choose Us"
          title="Your Journey, Our Commitment"
          description="We understand the sacred nature of Hajj and Umrah. That's why we go above and beyond to ensure your pilgrimage is comfortable, stress-free, and spiritually fulfilling."
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center text-accent mb-5">
                {reason.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
