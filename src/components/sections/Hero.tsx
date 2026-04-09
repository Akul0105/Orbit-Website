import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <FlickeringGrid className="absolute inset-0 w-full h-full z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-[1]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tight mb-10"
          >
            We build the
            <br />
            <span className="italic text-muted-foreground">
              software,
            </span>{" "}
            you
            <br />
            grow the business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-12"
          >
            Websites, apps, automations, and everything in between.
            We take the technical stuff off your plate so you can
            do what you're actually good at.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" asChild>
              <a href="#contact">
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#services">What we do</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
