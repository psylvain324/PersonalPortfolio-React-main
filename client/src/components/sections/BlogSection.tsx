/*
 * Design: Noir Terminal — Blog section with Singapore night skyline
 * Reversed asymmetric layout (image right, content left)
 */
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { BookOpen, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const SINGAPORE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663397693691/EqahBL9rgYR7uMWnFzD7qM/singapore-night-A5GPEmbXJQrCFL87gZUCSk.webp";

export default function BlogSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div ref={ref} className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="font-mono text-xs text-primary/60 uppercase tracking-widest mb-3">
              // Blog
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              <span className="text-primary">Blog</span>
            </h2>
            <p className="text-lg text-muted-foreground/80 mb-4">
              Learn more about Technology, Travel, and many things in between.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              As an avid writer and lover of technology I have begun to blog on
              relevant topics related to my career, travel, nutrition, and many other
              topics of interest. I would love to get as much feedback as possible
              and provide help or information on any requested topics.
            </p>

            <button
              onClick={() => toast("Blog coming soon! Stay tuned for articles on tech, travel, and more.")}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-all duration-200 group"
            >
              <BookOpen className="w-4 h-4" />
              Visit Blog
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={SINGAPORE_IMG}
                alt="Singapore skyline at night"
                className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 font-mono text-xs text-primary/60">
                1.3521°N, 103.8198°E — Singapore
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
