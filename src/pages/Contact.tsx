import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { toast } from "sonner";
import heroImage from "@/assets/hero-kaaba.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Construct WhatsApp message
    const whatsappMessage = `Assalamu Alaikum!%0A%0A*New Inquiry from Website*%0A%0AName: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.phone)}%0AEmail: ${encodeURIComponent(formData.email || "Not provided")}%0AService: ${encodeURIComponent(formData.service || "General Inquiry")}%0A%0AMessage:%0A${encodeURIComponent(formData.message)}`;

    window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${whatsappMessage}`, "_blank");

    toast.success("Opening WhatsApp to send your inquiry!");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
  };

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
            <span className="inline-block text-accent text-lg mb-4">Contact Us</span>
            <h1 className="heading-display mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We're here to help you plan your sacred journey. Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-beige">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Call Us",
                lines: [
                  { text: BUSINESS.phone.mobile1, href: `tel:${BUSINESS.phone.mobile1.replace(/\s/g, "")}` },
                  { text: BUSINESS.phone.mobile2, href: `tel:${BUSINESS.phone.mobile2.replace(/\s/g, "")}` },
                  { text: BUSINESS.phone.landline, href: `tel:${BUSINESS.phone.landline.replace(/-/g, "")}` }
                ]
              },
              {
                icon: <MessageCircle className="w-6 h-6" />,
                title: "WhatsApp",
                lines: [
                  { text: BUSINESS.phone.mobile1, href: `https://wa.me/${BUSINESS.whatsapp}` }
                ],
                external: true
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email Us",
                lines: [
                  { text: BUSINESS.email, href: `mailto:${BUSINESS.email}` }
                ]
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Business Hours",
                lines: [
                  { text: `Mon-Fri: ${BUSINESS.businessHours.weekdays}` },
                  { text: `Saturday: ${BUSINESS.businessHours.saturday}` },
                  { text: `Sunday: ${BUSINESS.businessHours.sunday}` }
                ]
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-premium text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  {card.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {card.title}
                </h3>
                <div className="space-y-1">
                  {card.lines.map((line, i) => (
                    line.href ? (
                      <a
                        key={i}
                        href={line.href}
                        target={card.external ? "_blank" : undefined}
                        rel={card.external ? "noopener noreferrer" : undefined}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {line.text}
                      </a>
                    ) : (
                      <p key={i} className="text-sm text-muted-foreground">{line.text}</p>
                    )
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                subtitle="Send a Message"
                title="Inquiry Form"
                centered={false}
              />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Interested In
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="Hajj Package">Hajj Package</option>
                    <option value="Umrah Package">Umrah Package</option>
                    <option value="Group Umrah">Group Umrah</option>
                    <option value="VIP Umrah">VIP Umrah</option>
                    <option value="Ramadan Umrah">Ramadan Umrah</option>
                    <option value="Custom Package">Custom Package</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                    placeholder="Tell us about your pilgrimage plans..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send via WhatsApp
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Address & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <SectionHeader
                  subtitle="Visit Us"
                  title="Our Office"
                  centered={false}
                />
                <div className="card-premium">
                  <div className="flex gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-1">
                        {BUSINESS.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {BUSINESS.address.line1}<br />
                        {BUSINESS.address.line2}<br />
                        {BUSINESS.address.line3}
                      </p>
                    </div>
                  </div>
                  <a
                    href={BUSINESS.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors"
                  >
                    Get Directions on Google Maps
                    <MapPin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden shadow-card h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c065e3ffffff%3A0x0!2sSomwar%20Peth%2C%20Pune!5e0!3m2!1sen!2sin!4v1704000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Awami Tours & Travels Location"
                />
              </div>

              {/* Quick WhatsApp */}
              <div className="card-premium bg-primary text-primary-foreground text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h4 className="font-display text-xl font-semibold mb-2">
                  Prefer WhatsApp?
                </h4>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Get instant responses to your queries
                </p>
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20inquire%20about%20your%20Hajj%20%26%20Umrah%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#20bd5a] transition-all duration-300 inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
