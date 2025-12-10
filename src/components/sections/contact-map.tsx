"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock } from "lucide-react";

export function ContactMap() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/40 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <MapPin className="h-4 w-4" />
            Find Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Visit Our Office
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-[28px] blur opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[480px] rounded-3xl overflow-hidden bg-white shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.8774557693286!2d-1.1873693!3d54.5545392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487eeb2d7a64a4e5%3A0x4b0e8c0e8c0e8c0e!2sOrmesby%20Rd%2C%20Middlesbrough!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Alpha Energy Location"
                className="absolute inset-0"
              />
            </div>
          </motion.div>

          {/* Info Cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg shadow-black/5 border border-border/50 flex-1"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/25">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Our Office
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Company No. 12082507
                  </p>
                </div>
              </div>
              <address className="not-italic text-muted-foreground leading-relaxed pl-16 space-y-0.5">
                <p className="font-medium text-foreground">Suite 307, The Tad Centre</p>
                <p>Ormesby Road</p>
                <p>Middlesbrough, England</p>
                <p className="font-medium">TS3 7SF</p>
              </address>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg shadow-black/5 border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 shadow-lg shadow-secondary/25">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium text-foreground">9:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Saturday - Sunday</span>
                      <span className="font-medium text-foreground">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="https://maps.google.com/?q=Suite+307+The+Tad+Centre+Ormesby+Road+Middlesbrough+TS3+7SF"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex h-14 items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-primary/90 px-8 text-base font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 gap-3"
            >
              <Navigation className="h-5 w-5 transition-transform group-hover:-rotate-12" />
              Get Directions
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
