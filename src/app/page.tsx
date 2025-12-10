import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { Stats } from "@/components/sections/stats";
import { HomeCTA } from "@/components/sections/home-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesPreview />
        <Stats />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
