"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us Free",
    value: "0800 234 3055",
    href: "tel:08002343055",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@alphaenergyltd.co.uk",
    href: "mailto:info@alphaenergyltd.co.uk",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Suite 307, The Tad Centre, Ormesby Road, Middlesbrough, TS3 7SF",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 Hours",
    href: null,
  },
];

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-primary blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Contact Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Contact Us Today on{" "}
              <span className="text-primary">Free Phone</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to discuss your ECO funding options? Get in touch with our
              expert team today. We&apos;re here to help you every step of the way.
            </p>

            {/* Large Phone CTA */}
            <motion.a
              href="tel:08002343055"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-4 p-6 rounded-2xl bg-primary text-primary-foreground mb-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
                <Phone className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm opacity-80">Call us free</p>
                <p className="text-3xl font-bold">0800 234 3055</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Right Content - Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-2xl bg-white border-2 border-border hover:border-primary/30 transition-all shadow-sm ${
                    item.href ? "cursor-pointer" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-semibold text-foreground text-sm leading-relaxed">
                    {item.value}
                  </p>
                </motion.div>
              );

              if (item.href) {
                return (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                );
              }
              return content;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
