import type { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { LocalAuthoritiesHero } from "@/components/sections/local-authorities-hero";
import { LocalAuthoritiesServices } from "@/components/sections/local-authorities-services";
import { LocalAuthoritiesPartnership } from "@/components/sections/local-authorities-partnership";
import { LocalAuthoritiesCTA } from "@/components/sections/local-authorities-cta";

export const metadata: Metadata = {
  title: "Local Authorities",
  description:
    "Alpha Energy provides national coverage to support Local Authorities in delivering energy efficiency measures through Flexible Eligibility schemes.",
};

export default function LocalAuthoritiesPage() {
  return (
    <>
      <Header />
      <main>
        <LocalAuthoritiesHero />
        <LocalAuthoritiesServices />
        <LocalAuthoritiesPartnership />
        <LocalAuthoritiesCTA />
      </main>
      <Footer />
    </>
  );
}
