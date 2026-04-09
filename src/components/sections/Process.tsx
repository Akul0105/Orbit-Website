import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    description:
      "We sit down (or hop on a call) and figure out what you actually need. No 40-page brief — just an honest conversation about your goals and what's getting in the way.",
  },
  {
    num: "02",
    title: "Plan & Design",
    description:
      "We map out the technical approach and put together designs you can see and feel before a single line of code is written. No surprises later.",
  },
  {
    num: "03",
    title: "Build & Ship",
    description:
      "This is where it comes together. We build in sprints, share progress regularly, and get things into your hands as quickly as possible.",
  },
  {
    num: "04",
    title: "Support & Iterate",
    description:
      "Launch isn't the finish line. We stick around to fix bugs, handle updates, and help you evolve the product as your needs change.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-5">
            How it works
          </p>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight max-w-3xl mb-8">
            From idea to live product, step by step.
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed">
            No mystery. No jargon. Here's what working with us actually looks like.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative p-10 rounded-2xl border border-border bg-card/30 hover:bg-card/60 hover:border-primary/20 transition-all duration-300"
            >
              <span className="text-5xl font-bold text-border group-hover:text-primary/30 transition-colors font-mono mb-6 block">
                {step.num}
              </span>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
