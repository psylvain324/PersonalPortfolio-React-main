/*
 * Design: Noir Terminal — Contact call-to-action section
 * Centered layout with amber glow, links to contact page
 */
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ArrowRight, Mail } from "lucide-react";

export default function ContactCTA() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 md:py-32 relative">
      <div ref={ref} className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="font-mono text-xs text-primary/60 uppercase tracking-widest mb-3">
            // Get in Touch
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Whether you're looking for a developer for your next project, want to
            discuss technology, or just want to say hello — I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-all duration-200 amber-glow group"
            >
              <Mail className="w-4 h-4" />
              Contact Me
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:psylvain324@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium border border-border text-foreground rounded-sm hover:border-primary/50 hover:text-primary transition-all duration-200"
            >
              psylvain324@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
