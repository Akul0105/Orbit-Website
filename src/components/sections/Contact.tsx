import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-5">
              Say hello
            </p>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
              Let's talk about
              <br />
              <span className="italic text-muted-foreground">your project.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Drop us a message with what you're working on.
              No forms, no funnels — just a real reply from a real person.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <a
                href="mailto:hello@orbitlabs.com"
                className="text-lg text-foreground hover:text-primary transition-colors"
              >
                hello@orbitlabs.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-10 rounded-2xl border border-border bg-card/50 backdrop-blur-sm space-y-6"
            >
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3.5 rounded-lg bg-muted border border-border text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3.5 rounded-lg bg-muted border border-border text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Company{" "}
                  <span className="text-muted-foreground font-normal">
                    (optional)
                  </span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3.5 rounded-lg bg-muted border border-border text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground"
                  placeholder="Your company"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  What do you need?
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-3.5 rounded-lg bg-muted border border-border text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-y min-h-[130px] placeholder:text-muted-foreground"
                  placeholder="Tell us a bit about your project..."
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                {submitted ? "Sent!" : "Send message"}
                {!submitted && <ArrowRight className="w-4 h-4" />}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
