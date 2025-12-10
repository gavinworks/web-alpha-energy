"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Reduce Fuel Poverty",
    description:
      "Help vulnerable residents reduce their energy bills and improve their quality of life.",
  },
  {
    title: "Meet Carbon Targets",
    description:
      "Support your local area&apos;s carbon reduction commitments through improved housing efficiency.",
  },
  {
    title: "Improve Housing Stock",
    description:
      "Upgrade domestic housing with insulation and heating measures at no cost to the authority.",
  },
  {
    title: "Streamlined Administration",
    description:
      "We handle all paperwork, compliance, and coordination so you can focus on residents.",
  },
];

const partnershipFeatures = [
  "Dedicated account management",
  "Regular progress reporting",
  "Resident communication support",
  "Full regulatory compliance",
  "Quality-assured installations",
  "Post-installation aftercare",
];

export function LocalAuthoritiesPartnership() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 mb-6">
              <span className="text-sm font-medium text-secondary">Partnership Benefits</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
              Why Partner With{" "}
              <span className="text-primary">Alpha Energy?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We&apos;re committed to supporting Local Authorities in achieving their
              energy efficiency and fuel poverty reduction goals.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-10 rounded-3xl bg-white border-2 border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                What&apos;s Included
              </h3>
              <div className="space-y-4 mb-8">
                {partnershipFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-secondary/10">
                <p className="text-secondary font-semibold mb-2">National Coverage</p>
                <p className="text-muted-foreground text-sm">
                  We work with Local Authorities across England, delivering consistent
                  quality and service wherever you&apos;re located.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
