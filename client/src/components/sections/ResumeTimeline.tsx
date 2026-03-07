/*
 * Noir Terminal — Vertical timeline with alternating sides, centered dots
 */
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { MapPin, Briefcase } from "lucide-react";

export interface TimelineEntry {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies?: string[];
}

const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: "1",
    title: "Full Stack Developer",
    company: "Global Tech Company",
    location: "Kuala Lumpur, Malaysia",
    period: "2022 – Present",
    description:
      "Building full-stack applications with Java Spring Boot and Angular. Delivered cross-functional features across frontend and backend.",
    technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL"],
  },
  {
    id: "2",
    title: "Backend Developer",
    company: "Enterprise Solutions",
    location: "Pittsburgh, PA",
    period: "2019 – 2022",
    description:
      "Developed and maintained ASP.NET Core APIs and SQL databases. Designed scalable backend services for enterprise clients.",
    technologies: ["C#", "ASP.NET Core", "SQL Server", "Azure"],
  },
  {
    id: "3",
    title: "Software Engineer",
    company: "Tech Startup",
    location: "St. Petersburg, FL",
    period: "2016 – 2019",
    description:
      "Full lifecycle development of web applications. Collaborated across teams in Boston and Singapore.",
    technologies: ["C#", "JavaScript", "React", "ASP.NET"],
  },
  {
    id: "4",
    title: "Software Developer",
    company: "Software Agency",
    location: "Singapore",
    period: "2015 – 2016",
    description:
      "International assignment developing web applications. Worked with distributed teams across time zones.",
    technologies: ["C#", "ASP.NET", "SQL Server", "JavaScript"],
  },
  {
    id: "5",
    title: "Junior Developer",
    company: "Software Agency",
    location: "Boston, MA",
    period: "2014 – 2015",
    description:
      "Started career in backend development. Trained in C#, ASP.NET, and SQL databases.",
    technologies: ["C#", "ASP.NET", "SQL Server"],
  },
  {
    id: "6",
    title: "Intern / Trainee",
    company: "Software Agency",
    location: "Tampa, FL",
    period: "2013 – 2014",
    description:
      "Entry-level development and training. Gained foundational skills in backend technologies.",
    technologies: ["C#", "SQL Server", "Visual Studio"],
  },
];

export default function ResumeTimeline() {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className="relative">
      {/* Vertical line — centered on desktop */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent hidden md:block"
        aria-hidden
      />

      {/* Mobile: single vertical line on left */}
      <div
        className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent md:hidden"
        aria-hidden
      />

      <div className="space-y-0">
        {TIMELINE_ENTRIES.map((entry, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative flex md:grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 pb-12 last:pb-0 items-start"
            >
              {/* Left slot — content on desktop when isLeft; on mobile, dot comes first via order */}
              <div
                className={`flex-1 min-w-0 pt-0.5 order-2 ${
                  isLeft ? "md:pr-8 md:text-right" : "hidden md:block"
                }`}
              >
                {isLeft && (
                  <TimelineCard
                    entry={entry}
                    side="left"
                    className="md:ml-auto"
                  />
                )}
              </div>

              {/* Center: Dot — order 1 on mobile so it appears first */}
              <div className="relative z-10 flex shrink-0 items-center justify-center w-6 md:w-auto order-1 md:order-2">
                <div
                  className={`h-[22px] w-[22px] rounded-full border-2 bg-background shadow-[0_0_12px_oklch(0.82_0.17_75/0.3)] ${
                    isLeft ? "border-primary" : "border-primary/80"
                  }`}
                />
              </div>

              {/* Right slot — content on desktop when !isLeft; on mobile when isRight we need content after dot */}
              <div
                className={`flex-1 min-w-0 pt-0.5 order-2 ${
                  !isLeft ? "md:pl-8" : "hidden md:block"
                }`}
              >
                {!isLeft && <TimelineCard entry={entry} side="right" />}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function TimelineCard({
  entry,
  side,
  className = "",
}: {
  entry: TimelineEntry;
  side: "left" | "right";
  className?: string;
}) {
  const isLeft = side === "left";
  return (
    <div
      className={`rounded-sm p-4 md:p-5 backdrop-blur-sm transition-all duration-300 ${
        isLeft
          ? "border border-primary/25 bg-card/50 hover:border-primary/40"
          : "border border-border/50 bg-muted/30 hover:border-primary/30"
      } ${className}`}
    >
      <div className="font-mono text-xs text-primary/70 mb-1">{entry.period}</div>
      <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
        {entry.title}
      </h3>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground mb-2 md:flex-nowrap">
        <span className="inline-flex items-center gap-1.5">
          <Briefcase className="w-3.5 h-3.5 shrink-0" />
          {entry.company}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          {entry.location}
        </span>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
        {entry.description}
      </p>
      {entry.technologies && entry.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {entry.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-block px-2.5 py-0.5 text-xs font-mono rounded border border-border/50 text-muted-foreground bg-muted/30"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
