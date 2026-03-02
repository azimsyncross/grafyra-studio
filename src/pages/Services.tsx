import { Code, Layout, Palette, ShoppingCart, Gauge, Wrench } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";

const services = [
  {
    icon: Code,
    title: "Custom Website Development",
    description: "Bespoke websites built from scratch. No page builders, no bloat — just clean code tailored to your brand and goals.",
    includes: ["Custom design implementation", "Responsive across all devices", "SEO-optimized structure", "CMS integration if needed", "Performance benchmarking"],
    bestFor: "Startups and growing businesses that have outgrown templates.",
    results: "A fast, polished website that reflects your brand and converts visitors into customers.",
  },
  {
    icon: Layout,
    title: "Web Application Development",
    description: "Complex web apps with real-time features, user authentication, dashboards, and integrations — architected for reliability.",
    includes: ["Full-stack development", "Database design & optimization", "API development & integration", "Authentication & authorization", "Automated testing"],
    bestFor: "SaaS companies, internal tools, and products requiring custom logic.",
    results: "A scalable, maintainable application that your team can build on for years.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Interface design grounded in user research and best practices. We design systems, not just screens.",
    includes: ["User research & personas", "Wireframes & prototyping", "Design system creation", "Usability testing", "Handoff-ready specs"],
    bestFor: "Teams launching a new product or redesigning an existing one.",
    results: "Interfaces that feel intuitive from the first tap, reducing support load and increasing engagement.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description: "Storefronts engineered for speed and conversion. We build commerce experiences that earn revenue, not just visits.",
    includes: ["Custom storefront development", "Payment gateway integration", "Inventory & order management", "Analytics & tracking setup", "Mobile-optimized checkout"],
    bestFor: "Brands ready to sell online with a premium experience.",
    results: "Higher conversion rates, faster page loads, and a checkout flow that customers trust.",
  },
  {
    icon: Gauge,
    title: "Website Performance Optimization",
    description: "Audit, diagnose, and fix. We identify bottlenecks and implement targeted improvements that measurably impact speed.",
    includes: ["Core Web Vitals audit", "Image & asset optimization", "Code splitting & lazy loading", "CDN & caching strategy", "Before/after benchmarks"],
    bestFor: "Existing sites suffering from slow load times or poor Lighthouse scores.",
    results: "Measurably faster load times, better SEO rankings, and improved user experience.",
  },
  {
    icon: Wrench,
    title: "Ongoing Maintenance & Support",
    description: "Proactive care for your digital products. We keep things running, updated, and secure so you don't have to think about it.",
    includes: ["Security patches & updates", "Uptime monitoring", "Bug fixes & minor improvements", "Monthly performance reports", "Priority support access"],
    bestFor: "Teams without dedicated in-house developers.",
    results: "Peace of mind. Your site stays fast, secure, and current without distracting your team.",
  },
];

const ServicesPage = () => {
  return (
    <main>
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">Services</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What we build
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Six core services, each delivered with the same standard of craft. We don't do everything — 
            we do these things exceptionally well.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        headline="Have a project in mind?"
        description="Tell us what you're building and we'll outline how we can help."
        buttonText="Start a conversation"
      />
    </main>
  );
};

export default ServicesPage;
