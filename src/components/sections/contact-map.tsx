"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export function ContactMap() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 aspect-[16/9] lg:aspect-auto lg:h-[400px] rounded-3xl overflow-hidden bg-secondary/10 relative"
          >
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
          </motion.div>

          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border-2 border-border flex flex-col justify-between"
          >
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Office
              </h3>
              <address className="not-italic text-muted-foreground leading-relaxed mb-6">
                Suite 307<br />
                The Tad Centre<br />
                Ormesby Road<br />
                Middlesbrough<br />
                England<br />
                TS3 7SF
              </address>
              <p className="text-sm text-muted-foreground mb-6">
                Company Number: <span className="font-semibold text-foreground">12082507</span>
              </p>
            </div>

            <motion.a
              href="https://maps.google.com/?q=Suite+307+The+Tad+Centre+Ormesby+Road+Middlesbrough+TS3+7SF"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-12 items-center justify-center rounded-full bg-secondary px-6 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 hover:bg-secondary/90 transition-colors gap-2"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
