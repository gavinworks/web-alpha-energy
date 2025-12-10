"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Leaf, ArrowRight, CheckCircle2, Phone } from "lucide-react";

const benefits = [
  "No upfront costs",
  "Government-backed funding",
  "Reduce energy bills",
  "Lower carbon footprint",
];

export function EcoFundingHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-primary blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-secondary blur-3xl"
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
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-8"
            >
              <Leaf className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">ECO4 Scheme</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              Direct Access to{" "}
              <span className="text-primary">ECO Funding</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl"
            >
              Alpha Energy offers direct access to ECO funding, allowing for the
              installation of all eligible insulation and heating measures. We manage
              the complete process from assessment through to payment.
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid sm:grid-cols-2 gap-3 mb-8"
            >
              {benefits.map((benefit, index) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact-us"
                className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 group"
              >
                Apply for Funding
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:08002343055"
                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-border bg-white px-8 text-base font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
              >
                <Phone className="mr-2 h-5 w-5" />
                0800 234 3055
              </a>
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
                className="col-span-2 aspect-[16/9] rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 flex flex-col justify-end relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800')] bg-cover bg-center opacity-30" />
                <div className="relative">
                  <p className="text-primary-foreground/80 text-sm font-medium mb-2">
                    Energy Company Obligation
                  </p>
                  <p className="text-primary-foreground text-2xl font-bold">
                    ECO4 Funding Available
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-3xl bg-white border-2 border-border p-6 flex flex-col justify-between"
              >
                <Leaf className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-foreground text-2xl font-bold">Insulation</p>
                  <p className="text-muted-foreground text-sm">Fully funded</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-3xl bg-secondary p-6 flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20" />
                <div>
                  <p className="text-secondary-foreground text-2xl font-bold">Heating</p>
                  <p className="text-secondary-foreground/80 text-sm">Systems included</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
