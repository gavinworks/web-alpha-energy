"use client";

import { motion } from "framer-motion";
import { Home, Flame, Wind, ThermometerSun, Droplets, BrickWall } from "lucide-react";

const measures = [
  {
    icon: BrickWall,
    title: "Cavity Wall Insulation",
    description: "Reduce heat loss through your walls with professional cavity wall insulation.",
  },
  {
    icon: Home,
    title: "Loft Insulation",
    description: "Keep your home warmer with effective loft insulation installation.",
  },
  {
    icon: Wind,
    title: "External Wall Insulation",
    description: "Improve thermal efficiency with external solid wall insulation.",
  },
  {
    icon: ThermometerSun,
    title: "Internal Wall Insulation",
    description: "Internal wall insulation for properties where external isn't suitable.",
  },
  {
    icon: Flame,
    title: "Boiler Replacement",
    description: "Upgrade to a modern, efficient heating system with ECO funding.",
  },
  {
    icon: Droplets,
    title: "Underfloor Insulation",
    description: "Reduce heat loss through floors and improve comfort.",
  },
];

export function EcoFundingServices() {
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
            <span className="text-sm font-medium text-secondary">Eligible Measures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Insulation & Heating{" "}
            <span className="text-primary">Measures</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            ECO funding covers a wide range of energy efficiency improvements.
            Check your eligibility for these fully-funded measures.
          </p>
        </motion.div>

        {/* Measures Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {measures.map((measure, index) => {
            const Icon = measure.icon;
            return (
              <motion.div
                key={measure.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 rounded-3xl bg-muted/30 border-2 border-border hover:border-primary/30 transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{measure.title}</h3>
                <p className="text-muted-foreground">{measure.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-border text-center"
        >
          <p className="text-lg text-foreground">
            <span className="font-semibold">Not sure if you qualify?</span>{" "}
            Contact us for a free eligibility assessment. There&apos;s no obligation and we&apos;ll
            guide you through the process.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
