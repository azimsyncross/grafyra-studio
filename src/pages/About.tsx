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

      {/* Meet the Founder */}
      <section className="py-24 px-6 border-y border-border/50">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-2/3">
              <p className="text-accent text-sm font-medium tracking-wider uppercase mb-2">Leadership</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                Meet the Founder
              </h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Nolan Prescott founded Grafyra Collective with a singular focus: to bridge the gap between
                  sophisticated design and high-performance engineering. As a technical expert and
                  detail-oriented builder, Nolan brings over a decade of experience in architecting
                  scalable digital solutions for ambitious startups and established enterprises alike.
                </p>
                <p>
                  His approach is rooted in the belief that digital products should be built with the same
                  level of craftsmanship as physical ones. By combining a design-focused mindset with
                  rigorous engineering standards, he ensures that every project not only looks exceptional
                  but is also built on a foundation of clean, maintainable, and resilient code.
                </p>
                <p>
                  At Grafyra, Nolan prioritizes quality over quantity, personally overseeing every engagement
                  to ensure absolute alignment with client objectives. He views himself not just as a
                  service provider, but as a long-term technology partner committed to the sustainable
                  growth and technical excellence of every business he works with.
                </p>
              </div>

              <div className="mt-12 p-8 bg-secondary/30 rounded-xl border border-border/50">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">The Philosophy</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  &ldquo;I believe that the best digital infrastructure is invisible. It should empower
                  growth without friction, combining sub-second performance with an intuitive aesthetic.
                  My goal is to eliminate technical debt before it starts, through intentional design
                  and defensive architecture.&rdquo;
                </p>
              </div>
            </div>

            <div className="md:w-1/3 w-full bg-card border border-border rounded-2xl p-8 sticky top-24">
              <div className="mb-8">
                <div className="text-foreground font-display text-2xl font-bold mb-1">Nolan Prescott</div>
                <div className="text-accent text-sm font-medium tracking-wide uppercase">Founder</div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Email</span>
                  <a href="mailto:Pagludev33@outlook.com" className="text-foreground hover:text-accent transition-colors font-medium">
                    Pagludev33@outlook.com
                  </a>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Phone</span>
                  <a href="tel:+12138347151" className="text-foreground hover:text-accent transition-colors font-medium">
                    +1 213-834-7151
                  </a>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Office</span>
                  <address className="not-italic text-muted-foreground text-sm leading-relaxed font-medium">
                    2204 Apple Spring Dr<br />
                    Deer Park, TX 77536<br />
                    United States
                  </address>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border/50">
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] leading-relaxed">
                  Handcrafted in Texas.<br />
                  Deploying Worldwide.
                </p>
              </div>
            </div>
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
