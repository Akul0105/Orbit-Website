export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-16">
          <div>
            <a href="#home" className="flex items-center gap-2.5 mb-5">
              <img src="/logo.svg" alt="Orbit" className="h-9 w-9" />
              <span className="text-xl font-bold tracking-tight text-foreground">
                Orbit
              </span>
            </a>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xs">
              We build the software. You grow the business.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-5">
              Navigate
            </h4>
            <div className="space-y-3.5">
              <a href="#home" className="block text-base text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="#services" className="block text-base text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#portfolio" className="block text-base text-muted-foreground hover:text-foreground transition-colors">
                Portfolio
              </a>
              <a href="#faq" className="block text-base text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-5">
              Get in touch
            </h4>
            <div className="space-y-3.5">
              <a href="mailto:hello@orbitlabs.com" className="block text-base text-muted-foreground hover:text-foreground transition-colors">
                hello@orbitlabs.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Orbit Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
