"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

const eligibilityCriteria = [
  "Homeowners or private tenants (with landlord permission)",
  "Recipients of certain benefits (e.g., Universal Credit, Pension Credit)",
  "Properties with an EPC rating of D, E, F, or G",
  "Living in a low-income area (LA Flex scheme)",
  "High energy costs relative to income",
];

export function EcoFundingCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
              Who Can Get{" "}
              <span className="text-primary">ECO Funding?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              ECO funding is available to a wide range of households. You may be eligible
              if you meet any of the following criteria:
            </p>

            <div className="space-y-4 mb-8">
              {eligibilityCriteria.map((criteria, index) => (
                <motion.div
                  key={criteria}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{criteria}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-muted-foreground mb-8">
              Even if you&apos;re not sure, get in touch — we can check your eligibility
              for free with no obligation.
            </p>
          </motion.div>

          {/* Right Content - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-10 rounded-3xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Check Your Eligibility?
              </h3>
              <p className="text-primary-foreground/80 mb-8">
                Contact our team today for a free, no-obligation eligibility assessment.
                We&apos;ll guide you through the process and help you access the funding
                you deserve.
              </p>

              <div className="space-y-4">
                <Link
                  href="/contact-us"
                  className="flex items-center justify-center gap-2 h-14 rounded-full bg-white text-primary font-semibold shadow-lg hover:bg-white/90 transition-colors group"
                >
                  Apply Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="tel:08002343055"
                  className="flex items-center justify-center gap-2 h-14 rounded-full bg-white/20 text-primary-foreground font-semibold border border-white/30 hover:bg-white/30 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call Free: 0800 234 3055
                </a>
              </div>

              <p className="text-center text-sm text-primary-foreground/60 mt-6">
                No upfront costs • Free assessment • Expert guidance
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
