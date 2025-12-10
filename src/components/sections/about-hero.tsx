"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5" />
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-secondary blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 mb-6">
            <Users className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">About Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Industry Leaders in{" "}
            <span className="text-primary">ECO Funding</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Alpha Energy Ltd operates as a leading Managing Agent within the ECO
            (Energy Company Obligation) scheme, maintaining strong and secure ECO
            funding contracts across the UK.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
