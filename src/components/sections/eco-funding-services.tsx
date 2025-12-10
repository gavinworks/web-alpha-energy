"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const measures = [
  {
    title: "Cavity Wall Insulation",
    tag: "Most Popular",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
  },
  {
    title: "Loft Insulation",
    tag: "Quick Install",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop",
  },
  {
    title: "External Wall Insulation",
    tag: "High Impact",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop",
  },
  {
    title: "Internal Wall Insulation",
    tag: "Space Saving",
    image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&h=600&fit=crop",
  },
  {
    title: "Boiler Replacement",
    tag: "Energy Saver",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&h=600&fit=crop",
  },
];

export function EcoFundingServices() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Funded{" "}
              <span className="text-primary">Measures</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden sm:block"
          >
            <span className="text-sm font-medium text-muted-foreground tracking-wide">[ELIGIBLE]</span>
          </motion.div>
        </div>

        {/* Measures Grid - Asymmetric Layout */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {measures.slice(0, 2).map((measure, index) => (
            <motion.div
              key={measure.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={measure.image}
                  alt={measure.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{measure.title}</h3>
                  <p className="text-sm text-muted-foreground">ECO4 Funded</p>
                </div>
                <span className="text-sm font-medium text-primary">{measure.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row - Card + CTA */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Third Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
              <Image
                src={measures[2].image}
                alt={measures[2].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-foreground">{measures[2].title}</h3>
                <p className="text-sm text-muted-foreground">ECO4 Funded</p>
              </div>
              <span className="text-sm font-medium text-primary">{measures[2].tag}</span>
            </div>
          </motion.div>

          {/* CTA Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <p className="text-2xl sm:text-3xl font-medium text-foreground mb-6">
              Explore all eligible measures and see{" "}
              <span className="text-primary">how ECO funding transforms homes</span>{" "}
              across the UK.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all w-fit group"
            >
              <span className="px-5 py-2.5 rounded-full border-2 border-primary group-hover:bg-primary group-hover:text-white transition-colors flex items-center gap-2">
                Check Your Eligibility
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            {/* Additional Measures List */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Also available:</p>
              <div className="flex flex-wrap gap-2">
                {measures.slice(3).map((measure) => (
                  <span
                    key={measure.title}
                    className="px-3 py-1.5 rounded-full bg-muted text-sm font-medium text-foreground"
                  >
                    {measure.title}
                  </span>
                ))}
                <span className="px-3 py-1.5 rounded-full bg-muted text-sm font-medium text-foreground">
                  Underfloor Insulation
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
