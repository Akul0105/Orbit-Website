import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    description: "For businesses ready to explore software solutions.",
    monthlyPrice: "$1,200",
    yearlyPrice: "$960",
    features: [
      "Custom Website or Landing Page",
      "Basic Automation Setup",
      "Monthly Analytics Report",
      "Standard Support",
      "1 Revision Round",
    ],
    popular: false,
  },
  {
    name: "Growth",
    description: "For growing teams expanding automation across systems.",
    monthlyPrice: "$2,800",
    yearlyPrice: "$2,240",
    features: [
      "Full-Stack Web Application",
      "Advanced Workflow Automation",
      "API Integrations",
      "Weekly Reports & Analytics",
      "Priority Support",
      "Dedicated Project Manager",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For organizations with complex needs at scale.",
    monthlyPrice: "$5,500",
    yearlyPrice: "$4,400",
    features: [
      "Custom Software & Mobile Apps",
      "Unlimited Integrations",
      "AI & Predictive Analytics",
      "24/7 Priority Support",
      "Dedicated Engineering Team",
      "SLA Guarantee",
    ],
    popular: false,
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-28 bg-surface relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-6">
            The right plan to power your progress.
          </h2>

          <div className="inline-flex items-center gap-3 bg-muted rounded-full p-1 mt-4">
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer",
                !annual
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer",
                annual
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Annual
              <span className="ml-1.5 text-[10px] font-bold text-primary">
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={cn(
                "relative p-8 rounded-2xl border transition-all duration-300 flex flex-col",
                plan.popular
                  ? "border-primary bg-card shadow-[0_0_40px_rgba(99,102,241,0.1)]"
                  : "border-border bg-card/30 hover:border-primary/20"
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-primary text-white rounded-full">
                  Popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-4xl font-bold text-foreground">
                  {annual ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-muted-foreground text-sm ml-1">
                  / month
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "default" : "outline"}
                className="w-full"
                asChild
              >
                <a href="#contact">Get started</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
