"use client";

import { motion } from "framer-motion";
import { Coins, Users, Building2, ClipboardCheck, ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: 1,
    icon: Coins,
    title: "ECO Funding Provider",
    description:
      "Direct access to ECO (Energy Company Obligation) funding for eligible insulation and heating measures. We help you navigate the funding landscape and secure the support you need.",
    features: ["Free eligibility assessment", "No upfront costs", "Government-backed funding"],
  },
  {
    id: 2,
    icon: Users,
    title: "Managing Agent Services",
    description:
      "Comprehensive support ensuring 100% compliance, risk reduction, and expedited validation and payment processes. We manage the entire journey for you.",
    features: ["Full compliance management", "Risk mitigation", "Fast-track payments"],
  },
  {
    id: 3,
    icon: Building2,
    title: "Local Authorities Support",
    description:
      "National coverage for delivering energy efficiency measures to domestic housing through Flexible Eligibility schemes. Partner with us to serve your community.",
    features: ["National coverage", "Flexible eligibility", "Community focused"],
  },
  {
    id: 4,
    icon: ClipboardCheck,
    title: "Survey to Installation",
    description:
      "Complete end-to-end process assistance from initial assessment through installation, validation, and payment. One seamless experience from start to finish.",
    features: ["Full project management", "Quality assurance", "Aftercare support"],
  },
];

export function Services() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 mb-6">
            <span className="text-sm font-medium text-secondary">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Our Sustainable{" "}
            <span className="text-primary">ECO Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive energy efficiency solutions tailored to your needs.
            From funding to installation, we&apos;re with you every step of the way.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              const isExpanded = expandedId === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`rounded-2xl border-2 transition-all duration-300 ${
                    isExpanded
                      ? "border-primary bg-primary/5"
                      : "border-border bg-white hover:border-primary/50"
                  }`}
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : service.id)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                          isExpanded ? "bg-primary text-primary-foreground" : "bg-muted text-primary"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground font-medium">
                          0{service.id}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                      </div>
                    </div>
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                        isExpanded ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {isExpanded ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                            <ArrowRight className="h-4 w-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="sticky top-32">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-secondary/20 to-primary/20 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white/80 text-sm font-medium mb-2">Professional Installation</p>
                  <p className="text-white text-2xl font-bold mb-4">
                    Quality workmanship backed by industry certifications
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
