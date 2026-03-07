/*
 * Design: Noir Terminal — Tech stack with hover-reveal cards
 * Staggered grid layout, glow hover effects, icon + description reveal
 */
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const ABSTRACT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663397693691/EqahBL9rgYR7uMWnFzD7qM/abstract-tech-f2za3HBFk4Hgy79iru99K9.webp";

interface TechItem {
  name: string;
  color: string;
  skills: string;
  icon: string;
}

const techStack: TechItem[] = [
  {
    name: "C# ASP.NET",
    color: "from-purple-500/20 to-purple-900/10",
    skills: "ASP.NET Core, Entity Framework, Razor Pages, LINQ, XUnit, NUnit",
    icon: "⚙️",
  },
  {
    name: "Java Spring Boot",
    color: "from-green-500/20 to-green-900/10",
    skills: "Hibernate, JPA, JDBC, AOP, Reactive Spring, IntelliJ, Eclipse",
    icon: "🍃",
  },
  {
    name: "Angular",
    color: "from-red-500/20 to-red-900/10",
    skills: "TypeScript, RxJs, NgRx, Reactive Forms, Angular Material, Jasmine",
    icon: "🅰️",
  },
  {
    name: "SQL & Databases",
    color: "from-orange-500/20 to-orange-900/10",
    skills: "SQL Management Studio, Oracle, MySQL, Complex Queries, Database Design",
    icon: "🗄️",
  },
  {
    name: "JavaScript",
    color: "from-yellow-500/20 to-yellow-900/10",
    skills: "ES6+, Ajax, jQuery, Node.js, Visual Studio Code",
    icon: "📜",
  },
  {
    name: "React",
    color: "from-cyan-500/20 to-cyan-900/10",
    skills: "JSX, Hooks, Material UI, Redux, Vite, Tailwind CSS",
    icon: "⚛️",
  },
];

export default function TechStackSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${ABSTRACT_BG})` }}
      />
      <div className="absolute inset-0 bg-background/90" />

      <div ref={ref} className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="font-mono text-xs text-primary/60 uppercase tracking-widest mb-3">
            // Tech Stack
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Proficient <span className="text-primary">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative"
            >
              <div className="relative p-6 md:p-8 rounded-sm border border-border/40 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 h-full">
                {/* Gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="text-3xl mb-4">{tech.icon}</div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                    {tech.skills}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
