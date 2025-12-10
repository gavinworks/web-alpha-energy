"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Heart } from "lucide-react";

const footerLinks = {
  services: [
    { label: "ECO Funding", href: "/eco-funding" },
    { label: "Local Authorities", href: "/local-authorities" },
  ],
  company: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">Alpha Energy</span>
                <span className="text-xs text-white/60">Experts In Eco Funding</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Industry leaders delivering ECO funding and energy efficiency solutions across the UK.
              Helping homeowners and businesses reduce energy costs and carbon emissions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-primary hover:text-white transition-all"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-primary hover:text-white transition-all"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-primary hover:text-white transition-all"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:08002343055"
                  className="flex items-center gap-3 text-white/70 hover:text-primary text-sm transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  0800 234 3055
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@alphaenergyltd.co.uk"
                  className="flex items-center gap-3 text-white/70 hover:text-primary text-sm transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  info@alphaenergyltd.co.uk
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Suite 307, The Tad Centre, Ormesby Road, Middlesbrough, TS3 7SF</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Alpha Energy Ltd. Company No. 12082507. All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-white/50 text-sm">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by{" "}
              <a
                href="https://www.build76.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Build 76
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
