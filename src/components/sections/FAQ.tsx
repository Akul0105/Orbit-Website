import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Anything from a simple landing page to a full-blown SaaS product. We also handle automations, mobile apps, and system integrations. If it involves code, there's a good chance we can help.",
  },
  {
    q: "How long does a project usually take?",
    a: "Depends on the scope. A marketing site might take 2–3 weeks. A custom web app or mobile project is more like 2–4 months. We'll give you a realistic timeline before we start — not an optimistic one.",
  },
  {
    q: "Do I need to be technical?",
    a: "Nope. Most of our clients aren't. We handle all the technical decisions and explain things in plain language. You focus on the business side, we handle the rest.",
  },
  {
    q: "What happens after launch?",
    a: "We don't disappear. We offer ongoing support for bug fixes, updates, and new features. Most clients keep us on retainer because things always come up after launch.",
  },
  {
    q: "Can you work with tools we already use?",
    a: "That's actually one of the things we're best at. CRMs, payment systems, databases, third-party APIs — we've integrated with most of them and can connect whatever you're running.",
  },
  {
    q: "How is Orbit different from a freelancer or a big agency?",
    a: "Freelancers are great until they get busy with another client. Big agencies charge you for a project manager who emails you once a week. We're in between — senior people doing the work, direct communication, and we actually care if the thing works.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-32 relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-5">
            Questions
          </p>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-4">
            Things people ask us.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
