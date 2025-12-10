"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, ArrowRight, MapPin } from "lucide-react";

export function LocalAuthoritiesHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/5" />
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-secondary blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-primary blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 mb-8"
            >
              <Building2 className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Local Authority Partners</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              Supporting{" "}
              <span className="text-secondary">Local Authorities</span>{" "}
              Nationwide
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl"
            >
              Alpha Energy provides national coverage to support Local Authorities
              in delivering energy efficiency measures to domestic housing stock
              through Flexible Eligibility schemes.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact-us"
                className="inline-flex h-14 items-center justify-center rounded-full bg-secondary px-8 text-base font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 transition-all hover:bg-secondary/90 hover:shadow-xl hover:-translate-y-0.5 group"
              >
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/eco-funding"
                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-border bg-white px-8 text-base font-semibold text-foreground transition-all hover:border-secondary hover:text-secondary"
              >
                Learn About ECO
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="col-span-2 aspect-[16/9] rounded-3xl bg-gradient-to-br from-secondary to-secondary/80 p-8 flex flex-col justify-end relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800')] bg-cover bg-center opacity-20" />
                <div className="relative">
                  <p className="text-secondary-foreground/80 text-sm font-medium mb-2">
                    Flexible Eligibility
                  </p>
                  <p className="text-secondary-foreground text-2xl font-bold">
                    LA Flex Scheme Support
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-3xl bg-white border-2 border-border p-6 flex flex-col justify-between"
              >
                <MapPin className="h-8 w-8 text-secondary" />
                <div>
                  <p className="text-foreground text-2xl font-bold">National</p>
                  <p className="text-muted-foreground text-sm">UK Coverage</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-3xl bg-primary/10 p-6 flex flex-col justify-between"
              >
                <Building2 className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-foreground text-2xl font-bold">Domestic</p>
                  <p className="text-muted-foreground text-sm">Housing Focus</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
