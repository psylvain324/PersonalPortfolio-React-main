/*
 * Design: Noir Terminal — Career overview with KL aerial image
 * Profile picture with framed border, two-column text layout
 * Scroll-triggered fade-in animation
 */
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Plane, TrendingUp } from "lucide-react";

const CAREER_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663397693691/EqahBL9rgYR7uMWnFzD7qM/career-bg-EVfnwsFhuqkd2oQ6pAgKXx.webp";

export default function CareerSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="career" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${CAREER_BG})` }}
      />
      <div className="absolute inset-0 bg-background/85" />

      <div ref={ref} className="container relative z-10">
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="font-mono text-xs text-primary/60 uppercase tracking-widest mb-3">
            // Career Overview
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Career <span className="text-primary">Overview</span>
          </h2>
        </motion.div>

        {/* Two text columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 items-start">
          {/* Left column - Backend Foundation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-heading font-semibold text-foreground">
              Backend Foundation
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The majority of my career I have worked primarily as a backend
              developer in ASP.NET in C# with SQL databases. I was originally
              educated and trained in this technology and it remains amongst
              my favorite technologies to implement to this day. I have kept
              up to date with ASP.NET Core and love the changes that have come
              and are coming in the upcoming framework releases.
            </p>
          </motion.div>

          {/* Right column - Global Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-heading font-semibold text-foreground">
              Global Experience
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Most recently I have worked in Java Spring Boot and Angular. I
              worked abroad in Malaysia — which was an amazing experience — as
              well as in Pittsburgh, St. Petersburg, and Boston. I have continued to develop my
              existing skillset while branching into the JavaScript world with
              Angular and React. I have a great passion for Technology, Travel,
              and meeting new people.
            </p>
          </motion.div>
        </div>

        {/* Destinations header — centered, horizontal, compact, wide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 py-2 flex flex-row items-center justify-center gap-4 sm:gap-8 w-full max-w-5xl mx-auto"
        >
          <span className="font-mono text-xs text-primary/70 uppercase tracking-widest">Destinations</span>
          <span className="hidden sm:inline text-border/50">—</span>
          <p className="text-foreground/90 font-heading font-semibold text-lg sm:text-xl">Where I&apos;ve Worked &amp; Traveled</p>
        </motion.div>

        {/* Subtle separator */}
        <div className="mt-4 mb-4 flex justify-center">
          <div className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        {/* Location badges - centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {[
            { city: "Kuala Lumpur", flag: "🇲🇾" },
            { city: "Pittsburgh", flag: "🇺🇸" },
            { city: "St. Petersburg", flag: "🇺🇸" },
            { city: "Boston", flag: "🇺🇸" },
            { city: "Singapore", flag: "🇸🇬" },
            { city: "Tampa", flag: "🇺🇸" },
          ].map((loc) => (
            <span
              key={loc.city}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono text-muted-foreground border border-border/40 rounded-sm bg-card/50 backdrop-blur-sm"
            >
              <span>{loc.flag}</span>
              {loc.city}
            </span>
          ))}
        </motion.div>

        {/* Partner Companies header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-14 mb-6 text-center"
        >
          <h3 className="text-base md:text-lg font-heading font-medium text-muted-foreground">
            Partner Companies Founded By Me
          </h3>
        </motion.div>

        {/* Travel Vision & Sales Vision — evenly spaced, centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {/* Travel Vision */}
          <div className="p-6 rounded-sm border border-border/40 bg-card/50 hover:border-primary/30 transition-all duration-300 group">
            <div className="p-2 rounded-sm bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary/20 transition-colors">
              <Plane className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">Travel Vision</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Turning travel aspirations into reality — helping clients discover destinations and experiences across the globe.
            </p>
          </div>

          {/* Sales Vision */}
          <div className="p-6 rounded-sm border border-border/40 bg-card/50 hover:border-primary/30 transition-all duration-300 group">
            <div className="p-2 rounded-sm bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary/20 transition-colors">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">Sales Vision</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              P2P sales &amp; healthcare automation — streamlining processes and driving growth through smart technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
