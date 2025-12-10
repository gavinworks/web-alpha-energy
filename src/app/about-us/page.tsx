import type { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { AboutHero } from "@/components/sections/about-hero";
import { Leadership } from "@/components/sections/leadership";
import { Mission } from "@/components/sections/mission";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Alpha Energy Ltd - industry leaders in ECO funding and energy efficiency with years of experience delivering schemes across the UK.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <Mission />
        <Leadership />
      </main>
      <Footer />
    </>
  );
}
