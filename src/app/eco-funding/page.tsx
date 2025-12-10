import type { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { EcoFundingHero } from "@/components/sections/eco-funding-hero";
import { EcoFundingServices } from "@/components/sections/eco-funding-services";
import { EcoFundingProcess } from "@/components/sections/eco-funding-process";
import { EcoFundingCTA } from "@/components/sections/eco-funding-cta";

export const metadata: Metadata = {
  title: "ECO Funding",
  description:
    "Access free ECO funding for insulation and heating measures. Alpha Energy provides direct access to government-backed ECO funding across the UK.",
};

export default function EcoFundingPage() {
  return (
    <>
      <Header />
      <main>
        <EcoFundingHero />
        <EcoFundingServices />
        <EcoFundingProcess />
        <EcoFundingCTA />
      </main>
      <Footer />
    </>
  );
}
