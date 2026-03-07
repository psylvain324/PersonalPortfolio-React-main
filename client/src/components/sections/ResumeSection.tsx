/*
 * Design: Noir Terminal — Resume section with Pittsburgh night skyline
 * Asymmetric layout with image on one side, content on the other
 * Timeline experience + download resume
 */
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { FileText, Briefcase, Download } from "lucide-react";
import ResumeTimeline from "./ResumeTimeline";

const PITTSBURGH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663397693691/EqahBL9rgYR7uMWnFzD7qM/pittsburgh-night-ayZN7hbnCiXvJMZG4WNUbB.webp";

export default function ResumeSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="resume" className="py-24 md:py-32 relative overflow-hidden">
      <div ref={ref} className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative group order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={PITTSBURGH_IMG}
                alt="Pittsburgh skyline at night"
                className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 font-mono text-xs text-primary/60">
                40.4406°N, 79.9959°W — Pittsburgh, PA
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="font-mono text-xs text-primary/60 uppercase tracking-widest mb-3">
              // Resume &amp; Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              <span className="text-primary">Resume</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Here you will find my up-to-date Resume and Portfolio showcasing my work
              across multiple technologies and industries.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Recently I have worked for companies in cities like Pittsburgh,
              St. Petersburg, Boston, Singapore, and Kuala Lumpur, Malaysia. I have worked in multiple
              technologies on both the front and back end in several different
              programming languages. I have a great passion for Technology, Travel,
              and meeting new people.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Phillip-Sylvain-Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-border text-foreground rounded-sm hover:border-primary/50 hover:text-primary transition-all duration-200"
              >
                <FileText className="w-4 h-4" />
                About Me
              </a>
              <a
                href="https://github.com/psylvain324"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-border text-foreground rounded-sm hover:border-primary/50 hover:text-primary transition-all duration-200"
              >
                <Briefcase className="w-4 h-4" />
                Portfolio
              </a>
            </div>
          </motion.div>
        </div>

        {/* Timeline section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 md:mt-32"
        >
          <div className="font-mono text-xs text-primary/60 uppercase tracking-widest mb-3">
            // Experience Timeline
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-12">
            Work <span className="text-primary">History</span>
          </h3>
          <ResumeTimeline />
        </motion.div>
      </div>
    </section>
  );
}
