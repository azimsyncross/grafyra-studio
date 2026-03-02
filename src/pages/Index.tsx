import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Gauge } from "lucide-react";
import CTA from "@/components/CTA";

const services = [
  { title: "Custom Websites", desc: "Handcrafted sites built for speed, clarity, and conversion." },
  { title: "Web Applications", desc: "Complex tools and platforms engineered for scale." },
  { title: "UI/UX Design", desc: "Interfaces that feel intuitive from the first interaction." },
  { title: "E-commerce", desc: "Storefronts optimized for performance and revenue." },
  { title: "Performance", desc: "Speed audits and optimizations that move the needle." },
  { title: "Maintenance", desc: "Ongoing support so you can focus on your business." },
];

const highlights = [
  { icon: Zap, title: "Speed", desc: "Sub-second load times. Every millisecond earns trust." },
  { icon: Shield, title: "Security", desc: "Built with security-first thinking at every layer." },
  { icon: Gauge, title: "Scalability", desc: "Architecture that grows with your business." },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-6 animate-fade-in">
            Web Engineering Studio
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.08] mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            We build digital products<br />
            <span className="text-gradient">that perform.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Grafyra Collective is a boutique studio for teams that value craft over compromise. 
            No templates. No shortcuts. Just precise engineering and considered design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-medium px-8 py-3 rounded-md hover:opacity-90 transition-opacity text-sm"
            >
              Book a Consultation <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-medium px-8 py-3 rounded-md hover:bg-secondary transition-colors text-sm"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-accent text-sm font-medium tracking-wider uppercase mb-2">What We Do</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Core Services</h2>
            </div>
            <Link to="/services" className="hidden md:inline-flex items-center gap-1 text-sm text-accent hover:underline">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                to="/services"
                className="group bg-background border border-border rounded-lg p-7 hover:border-accent/40 transition-colors duration-300"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-2">Why It Matters</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Engineering with intent
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default Index;
