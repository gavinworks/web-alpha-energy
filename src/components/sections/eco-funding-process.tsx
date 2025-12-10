"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Search, Wrench, BadgeCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Eligibility Check",
    description:
      "We assess your eligibility for ECO funding based on your property type, location, and circumstances.",
  },
  {
    number: "02",
    icon: Search,
    title: "Property Survey",
    description:
      "Our qualified surveyors visit your property to assess what measures are suitable and needed.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Installation",
    description:
      "Certified installers carry out the work to the highest standards with minimal disruption.",
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Validation & Completion",
    description:
      "We handle all paperwork, validation, and ensure everything meets compliance standards.",
  },
];

export function EcoFundingProcess() {
  return (
    <section className="py-24 bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            From Survey to{" "}
            <span className="text-primary">Installation</span>
          </h2>
          <p className="text-lg text-white/70">
            We manage the entire ECO funding journey for you. From initial assessment
            through installation, validation, and payment.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+3rem)] w-[calc(100%-3rem)] h-0.5 bg-white/10" />
                )}

                <div className="text-center">
                  <div className="relative inline-flex mb-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 border border-white/20">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
