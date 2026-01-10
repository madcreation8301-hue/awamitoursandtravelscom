import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Target, Heart, Eye, Users, Award, Shield } from "lucide-react";
import medinaImage from "@/assets/medina-mosque.jpg";
import heroImage from "@/assets/hero-kaaba.jpg";
import { CTA } from "@/components/home/CTA";
import { Stats } from "@/components/home/Stats";

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Care & Compassion",
    description: "We treat every pilgrim as family, ensuring their comfort and well-being throughout the journey."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Trust & Integrity",
    description: "Transparent dealings and honest service have been our foundation for over 15 years."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Service Excellence",
    description: "We strive for perfection in every aspect of our service, leaving no detail overlooked."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Spiritual Focus",
    description: "We understand the sacred nature of your journey and prioritize your spiritual experience."
  }
];

const About = () => {
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
            <span className="inline-block text-accent text-lg mb-4">About Us</span>
            <h1 className="heading-display mb-6">
              Serving the Guests of Allah Since 2009
            </h1>
            <p className="text-xl text-primary-foreground/80">
              A trusted name in Hajj and Umrah services, dedicated to making your pilgrimage comfortable, meaningful, and blessed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-beige">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader
                subtitle="Who We Are"
                title="Your Trusted Partner for Sacred Journeys"
                centered={false}
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Awami Tours & Travels was established in 2009 with a single mission: to serve the guests 
                  of Allah with the utmost care, respect, and dedication. Based in Pune, Maharashtra, we have 
                  grown to become one of the most trusted names in Hajj and Umrah services in the region.
                </p>
                <p>
                  Our founders understood that Hajj and Umrah are not just trips—they are profound spiritual 
                  journeys that require careful planning, genuine care, and deep understanding. This philosophy 
                  has guided every aspect of our service from the very beginning.
                </p>
                <p>
                  Over the past 15 years, we have had the honor of facilitating the sacred journeys of over 
                  10,000 pilgrims. Each pilgrim is special to us, and we take personal responsibility for 
                  ensuring their journey is as comfortable and spiritually fulfilling as possible.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={medinaImage}
                  alt="Masjid an-Nabawi"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-premium"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional Hajj and Umrah services that enable pilgrims to focus entirely 
                on their spiritual journey. We handle every logistical detail with care and precision, 
                ensuring that each pilgrim's experience is comfortable, safe, and deeply meaningful.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-premium"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center text-accent mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and respected Hajj & Umrah service provider, known for our 
                unwavering commitment to excellence, integrity, and the spiritual well-being of every 
                pilgrim we serve. We aspire to make sacred travel accessible and hassle-free for all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-beige">
        <div className="container">
          <SectionHeader
            subtitle="Our Values"
            title="The Principles That Guide Us"
            description="Every decision we make is guided by these core values that define who we are."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-premium text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-5">
                  {value.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="section-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                subtitle="Why Trust Us"
                title="Experience You Can Rely On"
                centered={false}
              />
              <ul className="space-y-4">
                {[
                  "Government approved Hajj & Umrah operator",
                  "Over 15 years of trusted service",
                  "10,000+ satisfied pilgrims served",
                  "100% visa success rate",
                  "Partnerships with premium hotels near Haram",
                  "Experienced multilingual guides",
                  "24/7 support throughout your journey",
                  "Transparent pricing with no hidden costs"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link to="/contact" className="btn-gold inline-flex items-center gap-2 mt-8">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={heroImage}
                  alt="Kaaba"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Stats />
      <CTA />
    </Layout>
  );
};

export default About;
