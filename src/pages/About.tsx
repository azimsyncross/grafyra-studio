import CTA from "@/components/CTA";

const values = [
  {
    title: "Design is engineering",
    desc: "We don't treat design as decoration. Every visual decision serves a functional purpose — guiding attention, reducing friction, and building trust.",
  },
  {
    title: "Engineering is craft",
    desc: "We write code for humans first, machines second. Clean architecture, meaningful abstractions, and thorough documentation are non-negotiable.",
  },
  {
    title: "Quality over velocity",
    desc: "We'd rather ship one thing well than three things poorly. Our clients come to us because they've been burned by 'fast and cheap' — and they're done with that.",
  },
  {
    title: "Long-term partnerships",
    desc: "We're not a vendor. We're a partner. We invest in understanding your business because the best technical decisions come from deep context.",
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We learn your business, your users, and your goals before writing a single line of code." },
  { step: "02", title: "Strategy", desc: "We define scope, architecture, and milestones together. No surprises." },
  { step: "03", title: "Build", desc: "Iterative development with regular check-ins. You see progress weekly." },
  { step: "04", title: "Launch & Support", desc: "We don't disappear after launch. We monitor, optimize, and iterate." },
];

const AboutPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">About</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            We exist because good enough isn't.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Grafyra Collective is a boutique web engineering studio for teams that refuse to settle. 
            We build digital products with the same care and precision that our clients bring to their own work.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-2">Philosophy</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What we believe
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-background border border-border rounded-lg p-7">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-2">Process</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              How we work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.step}>
                <span className="text-accent font-display text-3xl font-bold">{p.step}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        headline="Let's build something together."
        description="We're selective about the projects we take on — because that's how we deliver exceptional work."
      />
    </main>
  );
};

export default AboutPage;
