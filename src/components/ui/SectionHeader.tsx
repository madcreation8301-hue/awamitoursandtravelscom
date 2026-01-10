import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeader = ({
  subtitle,
  title,
  description,
  centered = true,
  light = false
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 lg:mb-16 ${centered ? "text-center max-w-3xl mx-auto" : ""}`}
    >
      {subtitle && (
        <span className={`inline-block text-sm font-semibold tracking-wider uppercase mb-3 ${
          light ? "text-accent" : "text-accent"
        }`}>
          {subtitle}
        </span>
      )}
      <h2 className={`heading-section ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
      <div className={`gold-line mt-6 ${centered ? "mx-auto" : ""}`} />
    </motion.div>
  );
};
