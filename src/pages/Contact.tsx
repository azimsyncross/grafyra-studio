import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Building, User } from "lucide-react";

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
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">Contact</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's build something exceptional
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to start your next project? Reach out and we'll respond within 24 hours with an honest assessment of how we can help.
          </p>
        </div>
      </section>

      {/* Contact Info + Business Info */}
      <section className="pb-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Details */}
            <div className="bg-card border border-border rounded-lg p-7 space-y-4">
              <h3 className="font-display font-semibold text-foreground mb-2">Contact Information</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <User size={16} className="text-accent shrink-0" />
                  <span className="text-foreground font-medium">Nolan Prescott</span>
                </div>
                <a href="mailto:Pagludev33@outlook.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Mail size={16} className="text-accent shrink-0" />
                  Pagludev33@outlook.com
                </a>
                <a href="tel:+12138347151" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone size={16} className="text-accent shrink-0" />
                  +1 213-834-7151
                </a>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                  <span>
                    2204 Apple Spring Dr<br />
                    Deer Park, TX 77536<br />
                    United States
                  </span>
                </div>
              </div>
            </div>

            {/* Business Info */}
            <div className="bg-card border border-border rounded-lg p-7 space-y-4">
              <h3 className="font-display font-semibold text-foreground mb-2">Business Information</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Building size={16} className="text-accent shrink-0" />
                  <span className="text-foreground font-medium">Grafyra Collective</span>
                </div>
                <p>Business Type: Sole Proprietorship</p>
                <p>Registered in the United States</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="pb-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-lg overflow-hidden border border-border">
            <iframe
              title="Grafyra Collective Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.0!2d-95.12!3d29.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z2204+Apple+Spring+Dr%2C+Deer+Park%2C+TX+77536!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

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
