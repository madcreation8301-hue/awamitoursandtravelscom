import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { PackagesSection } from "@/components/home/PackagesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { Stats } from "@/components/home/Stats";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <Stats />
      <FAQ />
      <CTA />
    </Layout>
  );
};

export default Index;
