"use client";

import { motion } from "framer-motion";
import { Target, Shield, Zap, CheckCircle2 } from "lucide-react";

const strengths = [
  {
    icon: Target,
    title: "Scheme Expertise",
    description:
      "Comprehensive understanding of scheme delivery, regulatory changes, standards, and compliance requirements.",
  },
  {
    icon: Shield,
    title: "Compliance Focus",
    description:
      "We prioritize ensuring all measures meet compliance standards with meticulous attention to detail.",
  },
  {
    icon: Zap,
    title: "Prompt Payments",
    description:
      "We process payments promptly to support supply chain sustainability and growth for our partners.",
  },
];

const values = [
  "Quality service delivery",
  "Regulatory compliance excellence",
  "Partnership sustainability",
  "Industry-leading expertise",
  "Transparent processes",
  "Continuous improvement",
];

export function Mission() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
              Our Mission is to Provide a{" "}
              <span className="text-secondary">Quality Service</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our leadership and management team brings extensive expertise that
              enables installer partnerships through comprehensive understanding of
              scheme delivery, regulatory changes, standards, and compliance
              requirements.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Strength Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex gap-6 p-6 rounded-2xl bg-muted/30 border-2 border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 flex-shrink-0">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {strength.title}
                    </h3>
                    <p className="text-muted-foreground">{strength.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
