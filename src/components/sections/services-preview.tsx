"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Coins, Building2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Coins,
    title: "ECO Funding",
    description:
      "Direct access to ECO funding for all eligible insulation and heating measures. We manage the complete process from assessment through to payment.",
    href: "/eco-funding",
    color: "primary",
  },
  {
    icon: Building2,
    title: "Local Authorities",
    description:
      "National coverage to support Local Authorities in delivering energy efficiency measures through Flexible Eligibility schemes.",
    href: "/local-authorities",
    color: "secondary",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 mb-6">
            <span className="text-sm font-medium text-secondary">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Energy Efficiency{" "}
            <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Industry leaders with years of knowledge and experience of successfully
            delivering ECO and similar energy schemes across the UK.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isPrimary = service.color === "primary";

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="h-full"
              >
                <Link href={service.href} className="block group h-full">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className={`p-10 rounded-3xl border-2 transition-all h-full ${
                      isPrimary
                        ? "bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:border-primary/40"
                        : "bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20 hover:border-secondary/40"
                    }`}
                  >
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl mb-6 ${
                        isPrimary ? "bg-primary/10" : "bg-secondary/10"
                      }`}
                    >
                      <Icon
                        className={`h-8 w-8 ${isPrimary ? "text-primary" : "text-secondary"}`}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div
                      className={`inline-flex items-center gap-2 font-semibold transition-all group-hover:gap-3 ${
                        isPrimary ? "text-primary" : "text-secondary"
                      }`}
                    >
                      Learn more
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            We also provide Managing Agent Services and full Survey to Installation support.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex h-12 items-center justify-center rounded-full border-2 border-border px-8 text-base font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
          >
            Discuss Your Needs
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
