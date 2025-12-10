"use client";

import { motion } from "framer-motion";
import { Shield, Users, FileCheck, Zap, Target, HeartHandshake } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Flexible Eligibility Support",
    description:
      "We help Local Authorities implement LA Flex schemes, identifying and supporting eligible residents who may not qualify under standard ECO criteria.",
  },
  {
    icon: Shield,
    title: "Full Compliance Management",
    description:
      "Our team ensures all installations meet regulatory requirements and compliance standards, reducing risk for Local Authority partners.",
  },
  {
    icon: Zap,
    title: "Expedited Processing",
    description:
      "Fast-track validation and payment processes to ensure efficient delivery of energy efficiency measures to your residents.",
  },
  {
    icon: Users,
    title: "Resident Engagement",
    description:
      "We work directly with residents to explain the scheme, assess eligibility, and coordinate installations with minimal disruption.",
  },
  {
    icon: Target,
    title: "Targeted Delivery",
    description:
      "Focus resources where they&apos;re needed most, prioritising fuel-poor households and hard-to-treat properties.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership Approach",
    description:
      "We work as an extension of your team, aligning with your strategic objectives and reporting requirements.",
  },
];

export function LocalAuthoritiesServices() {
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
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            How We Support{" "}
            <span className="text-secondary">Local Authorities</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive support for delivering energy efficiency measures
            to your residents through ECO Flexible Eligibility.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-muted/30 border-2 border-border hover:border-secondary/30 transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 mb-6">
                  <Icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
