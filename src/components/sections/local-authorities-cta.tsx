"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Mail, Building2 } from "lucide-react";

export function LocalAuthoritiesCTA() {
  return (
    <section className="py-24 bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 mb-6">
              <Building2 className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Get Started</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Ready to Discuss a{" "}
              <span className="text-secondary">Partnership?</span>
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Contact our Local Authority team to discuss how we can support your
              energy efficiency and fuel poverty reduction objectives. We&apos;ll work
              with you to develop a tailored approach for your area.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                className="inline-flex h-14 items-center justify-center rounded-full bg-secondary px-8 text-base font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 transition-all hover:bg-secondary/90 hover:shadow-xl hover:-translate-y-0.5 group"
              >
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:08002343055"
                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-white/20 px-8 text-base font-semibold text-white hover:border-white/40 hover:bg-white/5 transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                0800 234 3055
              </a>
            </div>
          </motion.div>

          {/* Right Content - Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-bold mb-8">Local Authority Enquiries</h3>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Local Authority *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="Authority name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="email@authority.gov.uk"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="Contact number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-14 rounded-xl bg-secondary text-secondary-foreground font-semibold text-lg shadow-lg shadow-secondary/25 hover:bg-secondary/90 transition-colors"
                >
                  Submit Enquiry
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
