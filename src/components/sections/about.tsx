"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Lightbulb, Target, Award } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Expert Knowledge",
    description: "Years of experience navigating ECO schemes and energy efficiency regulations.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "Focused on securing funding and delivering measurable energy savings.",
  },
  {
    icon: Award,
    title: "Fully Compliant",
    description: "100% compliance rate with all regulatory requirements and industry standards.",
  },
];

const benefits = [
  "No upfront costs for eligible homeowners",
  "Nationwide coverage across the UK",
  "End-to-end project management",
  "Certified and accredited installers",
  "Full aftercare and support",
  "Fast-track funding applications",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6">
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              Powering Homes with{" "}
              <span className="text-secondary">Purpose</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Alpha Energy Ltd are industry leaders with years of knowledge and experience in
              successfully delivering ECO and similar energy schemes across the UK. We&apos;re dedicated
              to helping homeowners and businesses reduce their energy costs and carbon emissions.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="inline-flex h-12 items-center justify-center rounded-full bg-secondary px-8 text-base font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 transition-all hover:bg-secondary/90 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5"
            >
              Start Your Application
            </motion.a>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex gap-6 p-6 rounded-2xl bg-white border-2 border-border hover:border-primary/50 transition-colors shadow-sm"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 flex-shrink-0">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Decorative Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
            >
              <p className="text-3xl font-bold mb-2">Ready for a Greener Future?</p>
              <p className="text-primary-foreground/80">
                Join thousands of UK homeowners benefiting from ECO funding.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
