import { useState } from "react";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import BookingModal from "@/components/BookingModal";
import CTA from "@/components/CTA";

const packages = [
    {
        name: "Professional Website",
        description: "Ideal for growth-focused businesses requiring a distinct digital presence.",
        price: "$5,000 – $8,500",
        features: [
            "5–8 Unique Page Templates",
            "Custom Design System",
            "Responsive Engineering",
            "On-page SEO Optimization",
            "CMS Implementation",
            "Performance Tuning",
        ],
        cta: "Select Professional",
    },
    {
        name: "Advanced Business Website",
        description: "Complex solutions for established brands needing advanced functionality.",
        price: "$10,000 – $25,000",
        features: [
            "10–20 Unique Page Templates",
            "Advanced UI/UX Motion Design",
            "E-commerce or Booking Modules",
            "Custom API Integrations",
            "Advanced Content Strategy",
            "Priority Technical Support",
            "Comprehensive Analytics",
        ],
        cta: "Select Advanced",
        popular: true,
    },
    {
        name: "Custom Web Application",
        description: "Tailored software solutions built with scalable architectures.",
        price: "Custom Quote",
        features: [
            "Custom Application Architecture",
            "User Dashboards & Auth Layers",
            "State-of-the-art Tech Stack",
            "Scalable Database Design",
            "Third-party API Ecosystems",
            "Long-term Strategic Support",
        ],
        cta: "Discuss Your Project",
    },
];

const faqs = [
    {
        question: "How long does a typical project take?",
        answer: "A Professional Website usually takes 4–6 weeks. Advanced Business sites range from 8–12 weeks. Custom applications are scoped individually, typically starting at 12 weeks for a minimum viable product.",
    },
    {
        question: "Do you offer payment plans?",
        answer: "Yes. Projects are typically split into three milestones: a commencement deposit (40%), a design approval milestone (30%), and a final delivery payment (30%). Custom arrangements are possible for long-term partnerships.",
    },
    {
        question: "Do you provide hosting and domain management?",
        answer: "While we are not a hosting provider, we manage the technical setup, deployment, and performance configuration on premium clouds like Vercel, AWS, or Netlify to ensure maximum uptime and speed.",
    },
    {
        question: "Do you offer ongoing maintenance and support?",
        answer: "Absolutely. Most of our clients opt for our Strategic Maintenance plans which cover security updates, performance monitoring, and continuous minor improvements to keep the product at peak performance.",
    },
];

const Pricing = () => {
    const [bookingModalOpen, setBookingModalOpen] = useState(false);

    return (
        <main className="pt-24 pb-12">
            {/* Hero Section */}
            <section className="px-6 py-20 bg-background border-b border-border/50">
                <div className="container mx-auto max-w-4xl text-center">
                    <p className="text-accent text-sm font-medium tracking-wider uppercase mb-6 animate-fade-in">
                        Investment & Value
                    </p>
                    <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                        Invest in digital infrastructure <br />
                        <span className="text-gradient">built for performance.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        We provide transparent pricing for scalable web solutions.
                        No surprises, just precise engineering and measurable ROI.
                    </p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-display text-3xl font-bold mb-6">Our Pricing Philosophy</h2>
                            <div className="space-y-6 text-muted-foreground leading-relaxed">
                                <p>
                                    At Grafyra Collective, we don&apos;t build generic websites. Every project is a
                                    tailored piece of digital engineering designed to solve specific business problems.
                                </p>
                                <p>
                                    We are not the cheapest choice—and we have no desire to be. We focus on
                                    <strong> durability, performance, and long-term value</strong>. Cheap software
                                    is expensive in the long run.
                                </p>
                                <p>
                                    Our pricing reflects the depth of our research, the precision of our code,
                                    and our commitment to your product&apos;s success years after launch.
                                </p>
                            </div>
                        </div>
                        <div className="bg-muted/30 border border-border p-8 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                            <h3 className="font-semibold text-xl mb-4">What you invest in:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Direct access to senior engineers",
                                    "Proprietary performance optimization",
                                    "Scalable, maintainable codebases",
                                    "Design that drives conversion",
                                    "Zero boilerplate or template shortcuts"
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm">
                                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section className="py-24 px-6 bg-secondary/30">
                <div className="container mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Strategic Solutions</h2>
                        <p className="text-muted-foreground">Select a framework that aligns with your current business objectives.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {packages.map((pkg) => (
                            <div
                                key={pkg.name}
                                className={`relative flex flex-col bg-background border rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${pkg.popular ? "border-accent ring-1 ring-accent/20" : "border-border"
                                    }`}
                            >
                                {pkg.popular && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                        Most Selected
                                    </span>
                                )}
                                <div className="mb-8">
                                    <h3 className="font-display text-xl font-bold mb-3">{pkg.name}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed h-12 mb-6">
                                        {pkg.description}
                                    </p>
                                    <div className="text-2xl font-bold text-foreground">
                                        {pkg.price}
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-10 flex-1">
                                    {pkg.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm border-b border-border/40 pb-3 last:border-0">
                                            <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className={`w-full h-11 transition-all ${pkg.popular ? "bg-accent hover:bg-accent/90" : "variant-outline border-border hover:border-accent hover:text-accent"
                                        }`}
                                    onClick={() => setBookingModalOpen(true)}
                                >
                                    {pkg.cta}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Add-Ons & Maintenance Section */}
            <section className="py-24 px-6 border-y border-border/50">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center text-accent text-sm">1</span>
                                Project Add-Ons
                            </h2>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { name: "E-commerce Integration", price: "from $2,500" },
                                    { name: "Advanced Analytics Dashboard", price: "from $1,500" },
                                    { name: "Multilingual Support", price: "from $1,000" },
                                    { name: "Automated Booking Systems", price: "from $1,200" },
                                    { name: "Custom Content Photography", price: "Custom" },
                                ].map((addon) => (
                                    <div key={addon.name} className="flex justify-between items-center p-4 border border-border/50 rounded-lg hover:bg-muted/50 transition-colors">
                                        <span className="font-medium text-sm">{addon.name}</span>
                                        <span className="text-xs font-semibold text-accent uppercase">{addon.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center text-accent text-sm">2</span>
                                Maintenance & Support
                            </h2>
                            <div className="bg-muted/20 border border-border rounded-xl p-8">
                                <p className="text-sm text-muted-foreground mb-6">
                                    Maintain peak performance with shared responsibility. Our plans provide peace of mind
                                    and technical continuity.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-end border-b border-border pb-4">
                                        <div>
                                            <h4 className="font-bold">Essential Support</h4>
                                            <p className="text-xs text-muted-foreground">Security & core updates</p>
                                        </div>
                                        <span className="font-bold text-accent">$290/mo</span>
                                    </div>
                                    <div className="flex justify-between items-end border-b border-border pb-4">
                                        <div>
                                            <h4 className="font-bold">Growth Partner</h4>
                                            <p className="text-xs text-muted-foreground">Performance + 5h development</p>
                                        </div>
                                        <span className="font-bold text-accent">$750/mo</span>
                                    </div>
                                    <div className="flex justify-between items-end pb-2">
                                        <div>
                                            <h4 className="font-bold">Scale Managed</h4>
                                            <p className="text-xs text-muted-foreground">Full technical oversight</p>
                                        </div>
                                        <span className="font-bold text-accent">$1,800/mo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-6 bg-secondary/10">
                <div className="container mx-auto max-w-3xl">
                    <div className="text-center mb-16">
                        <HelpCircle className="w-10 h-10 text-accent mx-auto mb-4 opacity-50" />
                        <h2 className="font-display text-3xl font-bold">Frequently Asked Questions</h2>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                                <AccordionTrigger className="text-left font-semibold hover:text-accent py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA Section */}
            <CTA
                headline="Ready to define your digital infrastructure?"
                description="Every partnership begins with a conversation. Let's discuss your custom requirements and how we can achieve your objectives."
                buttonText="Book a Consultation"
                onClick={() => setBookingModalOpen(true)}
            />

            <BookingModal
                isOpen={bookingModalOpen}
                onOpenChange={setBookingModalOpen}
            />
        </main>
    );
};

export default Pricing;
