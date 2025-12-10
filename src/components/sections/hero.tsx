"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Leaf, Shield, Zap, Home, Flame, Wind } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const floatingIcons = [
  { Icon: Leaf, delay: 0, x: "10%", y: "20%" },
  { Icon: Home, delay: 0.5, x: "85%", y: "15%" },
  { Icon: Shield, delay: 1, x: "75%", y: "70%" },
  { Icon: Flame, delay: 1.5, x: "15%", y: "75%" },
  { Icon: Wind, delay: 2, x: "90%", y: "45%" },
  { Icon: Zap, delay: 2.5, x: "5%", y: "45%" },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Compliance" },
  { value: "UK", label: "Wide Coverage" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Disable parallax effect on mobile for better performance
  const y = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, isMobile ? 1 : 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-28 md:pb-0"
    >
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />

        {/* Gradient orbs - static on mobile for performance, animated on desktop */}
        {isMobile ? (
          <>
            {/* Static, smaller, less blurry orbs for mobile */}
            <div className="absolute -top-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl will-change-transform" />
            <div className="absolute -bottom-1/4 -right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-secondary/15 to-secondary/5 blur-2xl will-change-transform" />
          </>
        ) : (
          <>
            {/* Animated gradient orbs for desktop */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/30 to-primary/5 blur-3xl will-change-transform"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -30, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-secondary/25 to-secondary/5 blur-3xl will-change-transform"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-2xl will-change-transform"
            />
          </>
        )}
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y: yPos }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1, delay }}
          style={{ left: x, top: yPos }}
          className="absolute hidden lg:block"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="h-12 w-12 text-primary" />
          </motion.div>
        </motion.div>
      ))}

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div style={{ y, opacity }} className="relative w-full will-change-transform">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          <div className="text-center max-w-5xl mx-auto">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-5 py-2.5 mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Leaf className="h-4 w-4 text-primary" />
              </motion.div>
              <span className="text-sm font-semibold text-primary">
                UK&apos;s Trusted ECO Funding Experts
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-primary"
              />
            </motion.div>

            {/* Main Headline with Staggered Animation */}
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground"
              >
                Unlock{" "}
                <span className="relative">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
                    Free ECO
                  </span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute bottom-2 left-0 h-4 bg-primary/20 -z-0"
                  />
                </span>
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground"
              >
                Funding Today
              </motion.h1>
            </div>

            {/* Animated Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Industry leaders delivering{" "}
              <span className="text-foreground font-medium">energy efficiency solutions</span>{" "}
              across the UK. Reduce your bills and carbon footprint with{" "}
              <span className="text-primary font-medium">government-backed funding</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link href="/contact-us">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative inline-flex h-16 items-center justify-center rounded-full bg-primary px-10 text-lg font-semibold text-primary-foreground shadow-2xl shadow-primary/30">
                    Get Free Funding
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              </Link>
              <motion.a
                href="tel:08002343055"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-16 items-center justify-center rounded-full border-2 border-border bg-white/90 md:bg-white/80 md:backdrop-blur-sm px-10 text-lg font-semibold text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                0800 234 3055
              </motion.a>
            </motion.div>

            {/* Animated Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-3xl" />
              <div className="relative grid grid-cols-3 gap-8 p-8 rounded-3xl border border-border/50 bg-white/80 md:bg-white/50 md:backdrop-blur-sm max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <motion.p
                      className="text-3xl sm:text-4xl font-bold text-primary mb-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap justify-center gap-8 mt-12"
            >
              {[
                { icon: Shield, text: "100% Compliant" },
                { icon: Zap, text: "Fast Processing" },
                { icon: Leaf, text: "Eco Certified" },
              ].map(({ icon: Icon, text }, index) => (
                <motion.div
                  key={text}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
