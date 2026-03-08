/*
 * Design: Noir Terminal — Full-viewport hero with circuit-board background
 * Inspired by Next.js Developer Portfolio: portrait + text split layout
 * Left-aligned name, terminal cursor blink on subtitle, social share button
 * Scroll indicator at bottom
 */
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663397693691/EqahBL9rgYR7uMWnFzD7qM/hero-bg-PyJ3nrJSteuTRvXVJnJCeA.webp";
const PORTRAIT = "/Images/PhilPortrait_1.jpg";

export default function HeroSection() {
  const scrollToCareer = () => {
    document.getElementById("career")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      {/* Scanline effect */}
      <div className="absolute inset-0 scanline-overlay pointer-events-none" />

      <div className="container relative z-10 pt-6 md:pt-8 flex flex-col justify-center min-h-[calc(100vh-4rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Text content - slightly shifted right toward center */}
          <div className="lg:col-span-6 lg:col-start-1 max-w-3xl">
          {/* Terminal prompt label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-base text-primary/70 mb-4"
          >
            ~/portfolio<span className="cursor-blink text-primary">_</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tight leading-[0.95]"
          >
            <span className="text-foreground">Phillip</span>
            <br />
            <span className="text-primary">Sylvain</span>
          </motion.h1>

          {/* Subtitle with terminal cursor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 md:mt-8"
          >
            <p className="text-2xl md:text-3xl text-foreground/80 font-light">
              Web Developer &amp; Automation Specialist &amp; Designer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mt-2 font-mono">
              ASP.NET | Angular | Java Spring Boot | React | AI Automation | Blockchain
              <span className="cursor-blink text-primary ml-1">|</span>
            </p>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            {["Coder", "Traveler", "Writer"].map((tag) => (
              <span
                key={tag}
                className="px-5 py-2 text-base font-mono text-primary/80 border border-primary/20 rounded-sm bg-primary/5 hover:bg-primary/10 hover:border-primary/40 transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-all duration-200 amber-glow"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/psylvain324"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-sm font-medium border border-border text-foreground rounded-sm hover:border-primary/50 hover:text-primary transition-all duration-200"
            >
              View GitHub
            </a>
          </motion.div>
        </div>

          {/* Portrait - slightly shifted left toward center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-5 lg:col-start-8 flex justify-center lg:justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] overflow-hidden rounded-sm border border-border/50 shadow-2xl">
                <img
                  src={PORTRAIT}
                  alt="Phillip Sylvain"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-14 h-14 border-b-2 border-r-2 border-primary/30 rounded-br-sm" />
              <div className="absolute -top-2 -left-2 w-14 h-14 border-t-2 border-l-2 border-primary/30 rounded-tl-sm" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        onClick={scrollToCareer}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to content"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
