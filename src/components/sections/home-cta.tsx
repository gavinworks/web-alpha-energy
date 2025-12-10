"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function HomeCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/90 p-12 sm:p-16 overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground mb-6">
                Ready to Reduce Your Energy Bills?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Check your eligibility for free ECO funding today. Our expert team is
                ready to guide you through the process with no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-semibold text-primary shadow-lg hover:bg-white/90 transition-all group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="tel:08002343055"
                  className="inline-flex h-14 items-center justify-center rounded-full border-2 border-primary-foreground/30 px-8 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-all"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  0800 234 3055
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-white/10 border border-white/20"
              >
                <p className="text-4xl font-bold text-primary-foreground mb-1">100%</p>
                <p className="text-primary-foreground/70 text-sm">Compliance Rate</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-white/10 border border-white/20"
              >
                <p className="text-4xl font-bold text-primary-foreground mb-1">UK</p>
                <p className="text-primary-foreground/70 text-sm">Wide Coverage</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-white/10 border border-white/20"
              >
                <p className="text-4xl font-bold text-primary-foreground mb-1">10+</p>
                <p className="text-primary-foreground/70 text-sm">Years Experience</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-white/10 border border-white/20"
              >
                <p className="text-4xl font-bold text-primary-foreground mb-1">Free</p>
                <p className="text-primary-foreground/70 text-sm">Assessment</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
