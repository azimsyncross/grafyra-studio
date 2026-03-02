import ContactForm from "@/components/ContactForm";

const checklist = [
  "A brief description of your project or idea",
  "Your target audience or users",
  "Any existing assets (brand guidelines, wireframes, etc.)",
  "Your ideal timeline and budget range",
  "Examples of sites or apps you admire",
];

const ContactPage = () => {
  return (
    <main>
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">Contact</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's talk about your project
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tell us what you're building. We'll respond within 24 hours with an honest assessment of 
            how we can help — or a recommendation for someone better suited.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-card border border-border rounded-lg p-7">
                <h3 className="font-display font-semibold text-foreground mb-4">What happens next?</h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent font-display font-bold">1.</span>
                    We review your inquiry and respond within 24 hours.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-display font-bold">2.</span>
                    If there's a fit, we schedule a 30-minute discovery call.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-display font-bold">3.</span>
                    We deliver a proposal with scope, timeline, and pricing.
                  </li>
                </ol>
              </div>

              <div className="bg-card border border-border rounded-lg p-7">
                <h3 className="font-display font-semibold text-foreground mb-4">Preparation checklist</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  To get the most from our first conversation, have these ready:
                </p>
                <ul className="space-y-2">
                  {checklist.map((item) => (
                    <li key={item} className="text-sm text-foreground flex items-start gap-2">
                      <span className="text-accent mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
