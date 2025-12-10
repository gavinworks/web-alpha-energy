"use client";

import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight, MapPin, Clock } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6">
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              Start Your{" "}
              <span className="text-primary">Funding Journey</span>{" "}
              Today
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Ready to reduce your energy bills and carbon footprint? Get in touch with our
              expert team to check your eligibility for free ECO funding. No obligation,
              no pressure — just honest advice.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              <motion.a
                href="tel:08002343055"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-primary/5 border-2 border-primary/20 hover:border-primary transition-colors group"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Call us free</p>
                  <p className="text-xl font-bold text-foreground">0800 234 3055</p>
                </div>
                <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <motion.a
                href="mailto:info@alphaenergyltd.co.uk"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-secondary/5 border-2 border-secondary/20 hover:border-secondary transition-colors group"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Email us</p>
                  <p className="text-xl font-bold text-foreground">info@alphaenergyltd.co.uk</p>
                </div>
                <ArrowRight className="h-5 w-5 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50"
                >
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Coverage</p>
                    <p className="font-semibold text-foreground">UK Nationwide</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50"
                >
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Response Time</p>
                    <p className="font-semibold text-foreground">Within 24 Hours</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-foreground to-foreground/90 text-white">
              <h3 className="text-2xl font-bold mb-2">Check Your Eligibility</h3>
              <p className="text-white/70 mb-8">
                Fill in the form below and we&apos;ll get back to you within 24 hours.
              </p>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="07123 456789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Postcode
                  </label>
                  <input
                    type="text"
                    className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="SW1A 1AA"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    How can we help?
                  </label>
                  <select className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                    <option value="" className="text-foreground">Select an option...</option>
                    <option value="eco-funding" className="text-foreground">ECO Funding Enquiry</option>
                    <option value="insulation" className="text-foreground">Insulation</option>
                    <option value="heating" className="text-foreground">Heating Systems</option>
                    <option value="other" className="text-foreground">Other</option>
                  </select>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-14 rounded-xl bg-primary text-primary-foreground font-semibold text-lg shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors"
                >
                  Submit Application
                </motion.button>

                <p className="text-xs text-white/50 text-center">
                  By submitting this form, you agree to our privacy policy.
                  We&apos;ll never share your information with third parties.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
