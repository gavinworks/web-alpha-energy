import type { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { ContactHero } from "@/components/sections/contact-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { ContactMap } from "@/components/sections/contact-map";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Alpha Energy Ltd. Call us free on 0800 234 3055 or email info@alphaenergyltd.co.uk to discuss your ECO funding options.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactMap />
      </main>
      <Footer />
    </>
  );
}
