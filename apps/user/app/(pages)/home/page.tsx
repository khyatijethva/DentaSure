import { HeroSection } from "@/components/sections/hero/hero";
import { ServicesSection } from "@/components/sections/services/services";
import { DoctorsSection } from "@/components/sections/doctors/doctors";
import { MissionSection } from "@/components/sections/mission/mission";
import { TestimonialsSection } from "@/components/sections/testimonials/testimonials";
import { CtaSection } from "@/components/sections/cta/cta";
import { WhyTrustSection } from "@/components/sections/why-trust/why-trust";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <DoctorsSection />
      <MissionSection />
      <TestimonialsSection />
      <CtaSection />
      <WhyTrustSection />
    </>
  );
}
