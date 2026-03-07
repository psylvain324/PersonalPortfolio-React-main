/*
 * Design: Noir Terminal — About page with detailed bio and skills
 * Profile image, timeline-style experience, skills breakdown
 */
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Code2, Globe, BookOpen, Briefcase } from "lucide-react";

const PROFILE_PIC = "/Images/PhilPortrait_1.jpg";

const highlights = [
  {
    icon: Code2,
    title: "Backend Specialist",
    description: "Deep expertise in C# ASP.NET MVC/Core and Java Spring Boot with SQL databases. Passionate about clean architecture and scalable systems.",
  },
  {
    icon: Globe,
    title: "Global Experience",
    description: "Worked internationally and domestically across Malaysia, Singapore, Pittsburgh, St. Petersburg, Boston, Tampa, & more. Bringing diverse perspectives to every project and team.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learner",
    description: "Constantly expanding my skillset and strengthening my existing one — Angular, React, TypeScript, other new modern JavaScript frameworks, as well as modern AI tooling for design and automation.",
  },
  {
    icon: Briefcase,
    title: "Full-Stack Capable",
    description: "While backend is my foundation, I've built complete applications spanning frontend, backend, and database layers. I also have the tools and skillset to work on automation workflows to make a company more efficient and profitable. I have confidence that I can deliver on any type of project when given the proper resources.",
  },
];

const skills = [
  { category: "Backend", items: ["C#", "ASP.NET MVC/Core", "Java", "Spring Boot", "Entity Framework", "Hibernate", "JPA"] },
  { category: "Frontend", items: ["Angular", "React", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "Figma"] },
  { category: "Database", items: ["SQL Server", "Oracle", "MySQL", "MongoDB", "Database Design", "Complex Queries"] },
  { category: "DevOps & Tools", items: ["Git", "Azure", "Docker", "Kubernetes", "Manus/Claude/ChatGPT", "Visual Studio", "Jetbrains Suite"] },
];

export default function About() {
  const { ref: highlightsRef, isInView: highlightsInView } = useInView();
  const { ref: skillsRef, isInView: skillsInView } = useInView();

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-mono text-xs text-primary/60 uppercase tracking-widest mb-3">
            // About Me
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-12">
            About <span className="text-primary">Me</span>
          </h1>
        </motion.div>

        {/* Bio section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24"
        >
          {/* Profile image */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/15 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-64 h-80 md:w-72 md:h-96 overflow-hidden rounded-sm border border-border/50">
                <img
                  src={PROFILE_PIC}
                  alt="Phillip Sylvain"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-br-sm" />
              <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-sm" />
            </div>
          </div>

          {/* Bio text */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold">
              Phillip <span className="text-primary">Sylvain</span>
            </h2>
            <p className="text-lg text-muted-foreground/80 font-mono">
              Software Development, AI Automation, Design
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am a full stack web developer specializing more in backend development,
              but having a passion for front end technologies. Throughout my
              career, I have adapted my skills through a constant continual learning
              mentality. My foundation is in C# ASP.NET with SQL databases, and I
              have expanded into Java Spring Boot, Angular, React, and the broader
              JavaScript ecosystem. Recently I have been pursuing my passion for AI
              Automation creating my own company on the side, specializing in P2P
              sales/healthcare automation, travel agencies, and web design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Working internationally in Malaysia, Singapore, and domestically in Pittsburgh,
              St. Petersburg, and Boston has
              given me a unique perspective on software development. I thrive in
              diverse teams and enjoy the challenge of adapting to new environments
              and technologies. Beyond coding, I'm passionate about travel, writing,
              and exploring the intersection of technology and culture. I also have
              a strong passion for blockchain technologies and Fintech.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {[
                { label: "Years Exp.", value: "10+" },
                { label: "Technologies", value: "15+" },
                { label: "Countries", value: "3" },
                { label: "Projects", value: "20+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-sm border border-border/30 bg-card/30">
                  <div className="text-2xl font-heading font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-mono mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Highlights */}
        <div ref={highlightsRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="font-mono text-xs text-primary/60 uppercase tracking-widest mb-3">
              // What I Bring
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Core <span className="text-primary">Strengths</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="p-6 rounded-sm border border-border/40 bg-card/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-2 rounded-sm bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills breakdown */}
        <div ref={skillsRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="font-mono text-xs text-primary/60 uppercase tracking-widest mb-3">
              // Skills
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Technical <span className="text-primary">Skills</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="p-6 rounded-sm border border-border/40 bg-card/50"
              >
                <h3 className="font-heading font-semibold text-primary mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-mono text-muted-foreground border border-border/40 rounded-sm bg-background/50 hover:border-primary/30 hover:text-primary transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
