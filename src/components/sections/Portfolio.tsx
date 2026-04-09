import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface PortfolioItem {
  title: string;
  client: string;
  description: string;
  tags: string[];
  stats: { label: string; value: string }[];
  image?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "E-Commerce Platform Rebuild",
    client: "RetailFlow",
    description:
      "We rebuilt RetailFlow's legacy e-commerce platform into a modern, headless architecture — improving load times by 60% and enabling seamless multi-channel selling.",
    tags: ["Web Development", "E-Commerce", "API Integration"],
    stats: [
      { label: "Faster load times", value: "60%" },
      { label: "Increase in conversions", value: "35%" },
    ],
  },
  {
    title: "Workflow Automation Suite",
    client: "FinOps Group",
    description:
      "Automated 80% of FinOps Group's manual reporting workflows, connecting disparate tools into a unified dashboard that saves 20+ hours per week.",
    tags: ["Automation", "Data Integration", "Dashboard"],
    stats: [
      { label: "Manual work reduced", value: "80%" },
      { label: "Hours saved weekly", value: "20+" },
    ],
  },
  {
    title: "Mobile App for Field Teams",
    client: "UrbanGrid",
    description:
      "Designed and delivered a cross-platform mobile app for UrbanGrid's field service teams — enabling real-time job tracking, reporting, and communication.",
    tags: ["Mobile", "React Native", "Real-Time"],
    stats: [
      { label: "Faster job completion", value: "45%" },
      { label: "Team adoption rate", value: "98%" },
    ],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-28 bg-surface relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[length:64px_64px]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight max-w-2xl mb-6">
            Results that move businesses forward.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            From startups to established companies, our clients trust Orbit to
            build solutions that create efficiency and long-term value.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-primary mb-2">
                      {item.client}
                    </p>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-10 pt-6 border-t border-border/50">
                  {item.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-3xl font-bold text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            More projects coming soon — we're always building.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
