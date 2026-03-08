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
    title: "Software Engineer",
    company: "Aciss Systems",
    location: "Oldsmar, FL (Hybrid)",
    period: "March 2022 – Present",
    description:
      "Developing features and converting codebase for VNext-architected MVC C# government investigative tracking application. React & .NET development for Dispatch module (live patrol tracking, resource assignment), JavaScript for core UI, and legacy ASP/SOAP API support. Custom queries, ETL, and interface integration for external data sources.",
    technologies: ["C#", "ASP.NET Core", "React", "JavaScript", "SQL", "ETL"],
  },
  {
    id: "2",
    title: "Full Stack Engineer",
    company: "National General Insurance",
    location: "Remote",
    period: "November 2020 – March 2022",
    description:
      "Developed Workflow Manager features for agents (quotes, policies, billing). Built auto-indexing feature with enhanced business logic, REST APIs in ASP.NET Core with JWT, and Angular components in TypeScript. Performance improvements via parallel processing, batching, and caching. XUnit testing, SCRUM planning, and ADO.",
    technologies: ["C#", "ASP.NET Core", "Angular", "TypeScript", "SQL", "XUnit"],
  },
  {
    id: "3",
    title: "Contract Full Stack Engineer",
    company: "PNC Bank",
    location: "Pittsburgh, PA",
    period: "February 2020 – August 2020",
    description:
      "Frontend development for Fastrack Angular UI tracking contract/employee data for organization-wide remote transition. REST APIs in Java Spring Boot with JPA, JDBC, Swagger, Oracle & MySQL. Jenkins/OpenShift/Docker/Kubernetes pipeline onboarding. Minor features in internal HR React applications.",
    technologies: ["Java", "Spring Boot", "Angular", "React", "Oracle", "MySQL", "Kubernetes"],
  },
  {
    id: "4",
    title: "Contract Backend Developer",
    company: "The Mobile Life",
    location: "Kuala Lumpur, Malaysia",
    period: "January 2019 – June 2019",
    description:
      "Backend development with Kotlin and Java Spring Boot. New CMS for SATS Ready to Travel mobile app via RESTful web services. TDD, caching, performance improvements. Integrated Stripe, FlightStats APIs. JUnit & Mockito unit tests. Stakeholder and frontend developer collaboration.",
    technologies: ["Java", "Spring Boot", "Kotlin", "MySQL", "Swagger", "JUnit", "Mockito"],
  },
  {
    id: "5",
    title: "Programmer Analyst",
    company: "N'ware Technologies",
    location: "Dover, NH",
    period: "September 2017 – August 2018",
    description:
      "Customizations in C# and VBScript for LisaWMS/LisaWeb warehouse management system integrating with SAP Business One. Requirements analysis, XML/SQL scripts, Hana Studio, database management. Application support and troubleshooting. SAP Business One plugin installations.",
    technologies: ["C#", "VBScript", "SQL", "SAP Business One", "Hana Studio"],
  },
  {
    id: "6",
    title: "Applications Developer",
    company: "Fairpoint Communications",
    location: "Manchester, NH",
    period: "August 2012 – July 2017",
    description:
      "Maintained and built features for internal sales, network engineer, and technician applications. Developed SOAP & REST web service endpoints in C# with SQL Server for networking equipment and dispatchers. Crystal Reports, Service-Now/Remedy tickets, QA/test plans, database configuration.",
    technologies: ["C#", "VB.NET", "SQL Server", "SOAP", "REST", "Crystal Reports"],
  },
  {
    id: "7",
    title: "Quality Assurance Intern",
    company: "Bid2Win",
    location: "Portsmouth, NH",
    period: "October 2011 – May 2012",
    description:
      "Implemented features in C# Silverlight applications with senior developer mentorship. Wrote test plans and unit tests in Visual Studio and Microsoft Test Manager. Ran automated tests, reported bugs, improved code coverage. Participated in code reviews and Scrum sprint planning.",
    technologies: ["C#", "Silverlight", "Visual Studio", "Microsoft Test Manager"],
  },
];

export default function ResumeTimeline() {
  return (
    <div className="relative">
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
        {[...TIMELINE_ENTRIES].reverse().map((entry, index) => {
          const isLeft = index % 2 === 0;

          return (
            <TimelineItem
              key={entry.id}
              entry={entry}
              isLeft={isLeft}
            />
          );
        })}
      </div>
    </div>
  );
}

function TimelineItem({
  entry,
  isLeft,
}: {
  entry: TimelineEntry;
  isLeft: boolean;
}) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, x: isLeft ? -24 : 24 }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex md:grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 pb-12 last:pb-0 items-start"
    >
      {/* Left slot */}
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

      {/* Center: Dot */}
      <div className="relative z-10 flex shrink-0 items-center justify-center w-6 md:w-auto order-1 md:order-2">
        <div
          className={`h-[22px] w-[22px] rounded-full border-2 bg-background shadow-[0_0_12px_oklch(0.82_0.17_75/0.3)] ${
            isLeft ? "border-primary" : "border-primary/80"
          }`}
        />
      </div>

      {/* Right slot */}
      <div
        className={`flex-1 min-w-0 pt-0.5 order-2 ${
          !isLeft ? "md:pl-8" : "hidden md:block"
        }`}
      >
        {!isLeft && <TimelineCard entry={entry} side="right" />}
      </div>
    </motion.div>
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
