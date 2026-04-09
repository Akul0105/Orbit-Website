import { motion } from "framer-motion";
import { ArrowRight, Globe, Zap, Smartphone, Database, Bot } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Globe,
    title: "Websites & Web Apps",
    description:
      "Whether it's a landing page or a full product — we design and build for the web. Clean code, fast load times, and something you'll actually want to show people.",
    tags: ["React", "Next.js", "Full-Stack"],
  },
  {
    num: "02",
    icon: Zap,
    title: "Automation & Integration",
    description:
      "If you're copying data between spreadsheets or switching between five tools to do one thing, we can fix that. We connect your systems and let them talk to each other.",
    tags: ["Workflow Design", "API Integration", "Process Automation"],
  },
  {
    num: "03",
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "iOS, Android, or both. We build apps that feel native, load fast, and don't make your users want to throw their phone.",
    tags: ["iOS", "Android", "Cross-Platform"],
  },
  {
    num: "04",
    icon: Database,
    title: "Data & Infrastructure",
    description:
      "Your data is probably scattered across a dozen places. We bring it together, clean it up, and make it actually useful.",
    tags: ["Data Pipelines", "Cloud", "Analytics"],
  },
  {
    num: "05",
    icon: Bot,
    title: "AI & Smart Tools",
    description:
      "From chatbots to recommendation engines — we build AI that does something useful, not just something trendy.",
    tags: ["Machine Learning", "NLP", "Chatbots"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.06)_1px,transparent_0)] bg-[length:32px_32px]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-5">
            What we do
          </p>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight max-w-3xl mb-8">
            The full stack, handled.
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mb-20 leading-relaxed">
            We're a small team that builds software for businesses who'd rather
            focus on their work than worry about their tech. Here's where we help.
          </p>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.a
              key={service.num}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[60px_40px_1fr_auto] gap-4 md:gap-6 items-center py-8 border-b border-border hover:bg-muted/30 px-4 -mx-4 rounded-lg transition-all cursor-pointer"
            >
              <span className="text-base font-bold text-primary font-mono">
                {service.num}
              </span>
              <service.icon className="hidden md:block w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-3 max-w-xl">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-muted group-hover:bg-primary group-hover:text-white text-muted-foreground transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
