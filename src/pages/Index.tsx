import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Gauge } from "lucide-react";
import { useState } from "react";
import CTA from "@/components/CTA";
import BookingModal from "@/components/BookingModal";

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
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

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
            <button
              onClick={() => setBookingModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-medium px-8 py-3 rounded-md hover:opacity-90 transition-opacity text-sm"
            >
              Book a Consultation <ArrowRight size={16} />
            </button>
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

      {/* Our Process */}
      <section className="py-24 px-6 border-y border-border/50 bg-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-2">The Methodology</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-xl">
              A structured approach designed for precision, clarity, and collaborative success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We begin by deeply understanding your business objectives and technical requirements to ensure absolute alignment."
              },
              {
                step: "02",
                title: "Strategy",
                desc: "We architect a tailored technical roadmap and design system, eliminating ambiguity and setting a clear path."
              },
              {
                step: "03",
                title: "Design",
                desc: "Our process focuses on high-fidelity interfaces that balance aesthetic excellence with functional clarity."
              },
              {
                step: "04",
                title: "Engineering",
                desc: "We build with a focus on performance, security, and maintainable code to ensure your infrastructure is resilient."
              },
              {
                step: "05",
                title: "Launch & Support",
                desc: "Rigorous quality assurance followed by strategic post-launch support to ensure peak performance."
              },
            ].map((item, idx) => (
              <div key={item.title} className="relative">
                <div className="mb-6 flex items-baseline gap-2">
                  <span className="text-accent/40 font-display text-xs font-bold tracking-widest">{item.step}</span>
                  <div className="h-px bg-border flex-1 hidden md:block"></div>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
                {/* Visual connecting line for desktop */}
                {idx < 4 && (
                  <div className="hidden lg:block absolute top-[10px] left-[100%] w-full h-[1px] bg-border -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <p className="text-accent text-sm font-medium tracking-wider uppercase mb-2">Portfolio</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Selected Work</h2>
              <p className="text-muted-foreground leading-relaxed">
                We prioritize quality over quantity. By partnering with a limited number of clients,
                we ensure every line of code and every pixel serves a strategic purpose.
              </p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
              View all capabilities <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Lumina Labs",
                industry: "Biotech",
                impact: "Digitizing complex data sets into an intuitive, high-performance platform for global research teams.",
                gradient: "from-blue-500/10 to-transparent"
              },
              {
                name: "Arca Strategy",
                industry: "Fintech",
                impact: "A secure, architecture-first dashboard providing real-time capital oversight for venture-backed startups.",
                gradient: "from-emerald-500/10 to-transparent"
              },
              {
                name: "Ovidian Home",
                industry: "Modular Living",
                impact: "Translating sophisticated physical craftsmanship into a precision-engineered e-commerce experience.",
                gradient: "from-amber-500/10 to-transparent"
              }
            ].map((project) => (
              <div
                key={project.name}
                className="group relative flex flex-col bg-background border border-border rounded-xl p-8 hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">{project.industry}</div>
                  <h3 className="font-display text-xl font-bold mb-4 group-hover:text-foreground transition-colors">{project.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                    {project.impact}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-tight opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                    Read Case Study <ArrowRight size={12} />
                  </div>
                </div>
              </div>
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

      {/* Technology Stack */}
      <section className="py-24 px-6 bg-card border-y border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mb-16">
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-2">Our Stack</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Engineered for Resilience
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We select tools based on technical merit and architectural requirements, not passing trends.
              Our stack is curated for sub-second performance, airtight security, and long-term maintainability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "React", "Next.js", "Node.js", "Tailwind CSS",
              "Supabase", "PostgreSQL", "Vercel", "Cloudflare"
            ].map((tech) => (
              <div
                key={tech}
                className="flex items-center justify-center p-6 bg-background border border-border rounded-lg grayscale hover:grayscale-0 transition-all duration-300 hover:border-accent/40"
              >
                <span className="font-display font-bold text-foreground/70 group-hover:text-foreground">{tech}</span>
              </div>
            ))}
          </div>

          <p className="mt-12 text-xs text-muted-foreground text-center uppercase tracking-[0.2em]">
            Precision tools for ambitious products
          </p>
        </div>
      </section>

      {/* Investment Preview */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2">
              <p className="text-accent text-sm font-medium tracking-wider uppercase mb-2">Engagement</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Invest in quality digital infrastructure
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We don&apos;t sell websites; we engineer business solutions. Our pricing reflects a
                zero-compromise approach to performance, security, and design. Every project is
                individually scoped based on technical complexity and strategic objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="inline-flex items-center justify-center bg-foreground text-background font-medium px-8 py-3 rounded-md hover:bg-foreground/90 transition-colors text-sm"
                >
                  Book a Consultation
                </button>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center gap-2 text-foreground font-medium px-8 py-3 rounded-md hover:bg-secondary transition-colors text-sm border border-border"
                >
                  View Full Pricing <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 w-full grid gap-4">
              {[
                { title: "Professional Websites", price: "Starting at $3,000" },
                { title: "Advanced Builds", price: "Starting at $7,500" },
                { title: "Custom Applications", price: "Custom Quote" },
              ].map((tier) => (
                <div
                  key={tier.title}
                  className="flex justify-between items-center p-6 bg-card border border-border rounded-xl"
                >
                  <span className="font-display font-semibold text-foreground">{tier.title}</span>
                  <span className="text-sm font-bold text-accent">{tier.price}</span>
                </div>
              ))}
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-2 px-2">
                * All projects include comprehensive testing and launch support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-2">Partnerships</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by founders and engineering teams
            </h2>
            <p className="text-muted-foreground">
              We build long-term relationships through technical excellence and transparent communication.
              Real results for ambitious products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The technical depth Grafyra brought to our platform was exceptional. They didn't just write code; they architected a solution that truly scaled with our user base.",
                author: "Sarah Chen",
                title: "CTO at Lumina Labs"
              },
              {
                quote: "Communication was seamless throughout the entire build. We always knew exactly where the project stood, and the quality of the final interface exceeded our expectations.",
                author: "Marcus Thorne",
                title: "Founder of Arca Strategy"
              },
              {
                quote: "Working with a boutique studio that prioritizes quality over volume made a significant difference. Their attention to detail in the engineering phase saved us months of rework.",
                author: "Elena Rossi",
                title: "Director at Ovidian Home"
              }
            ].map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-background border border-border p-8 rounded-xl flex flex-col hover:border-accent/30 transition-colors"
              >
                <div className="mb-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <div key={s} className="w-1.5 h-1.5 rounded-full bg-accent/40"></div>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-auto pt-6 border-t border-border/50">
                  <div className="font-display font-bold text-foreground text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground mt-1">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        buttonText="Book a Consultation"
        onClick={() => setBookingModalOpen(true)}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
      />
    </main >
  );
};

export default Index;
