import { motion } from "framer-motion";
import { Phone, FileText, Plane, Heart } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";

const steps = [
  {
    number: "01",
    icon: <Phone className="w-8 h-8" />,
    title: "Get in Touch",
    description: "Contact us via phone, WhatsApp, or visit our office to discuss your pilgrimage plans and preferences."
  },
  {
    number: "02",
    icon: <FileText className="w-8 h-8" />,
    title: "Choose Your Package",
    description: "Select from our range of carefully designed packages or let us create a custom itinerary for you."
  },
  {
    number: "03",
    icon: <Plane className="w-8 h-8" />,
    title: "Document & Book",
    description: "Submit your documents, complete the booking, and we handle all visa processing and arrangements."
  },
  {
    number: "04",
    icon: <Heart className="w-8 h-8" />,
    title: "Begin Your Journey",
    description: "Embark on your blessed pilgrimage with our complete support and guidance every step of the way."
  }
];

export const HowItWorks = () => {
  return (
    <section className="section-white">
      <div className="container">
        <SectionHeader
          subtitle="How It Works"
          title="Your Path to a Blessed Pilgrimage"
          description="We've simplified the entire process so you can focus on preparing spiritually for your sacred journey."
        />

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-full bg-card shadow-card flex items-center justify-center text-primary relative z-10">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-foreground text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
