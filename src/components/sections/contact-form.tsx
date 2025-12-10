"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Send Us a Message
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill in the form below and we&apos;ll get back to you within 24 hours.
            All enquiries are handled with complete confidentiality.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-muted/30 rounded-3xl p-8 sm:p-12 border-2 border-border"
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-foreground mb-2"
              >
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full h-12 px-4 rounded-xl bg-white border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="John"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full h-12 px-4 rounded-xl bg-white border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full h-12 px-4 rounded-xl bg-white border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full h-12 px-4 rounded-xl bg-white border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="07123 456789"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="postcode"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Postcode
            </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              className="w-full h-12 px-4 rounded-xl bg-white border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="TS3 7SF"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="w-full h-12 px-4 rounded-xl bg-white border-2 border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              <option value="">Select a subject...</option>
              <option value="eco-funding">ECO Funding Enquiry</option>
              <option value="managing-agent">Managing Agent Services</option>
              <option value="local-authority">Local Authority Partnership</option>
              <option value="installer">Installer Partnership</option>
              <option value="general">General Enquiry</option>
            </select>
          </div>

          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-white border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
              placeholder="Tell us how we can help..."
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              * Required fields. We respect your privacy.
            </p>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors gap-2"
            >
              <Send className="h-5 w-5" />
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
