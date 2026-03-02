import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-xl font-bold tracking-tight text-foreground">
              Grafyra<span className="text-accent">.</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Boutique web engineering for teams that value craft over compromise.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {["Custom Websites", "Web Applications", "UI/UX Design", "E-commerce", "Performance", "Maintenance"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
                { to: "/privacy", label: "Privacy Policy" },
                { to: "/terms", label: "Terms & Conditions" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-display font-semibold text-foreground mb-4">Get Started</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ready to build something exceptional? Let's talk about your project.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-4 text-sm font-medium text-accent hover:underline transition-colors"
            >
              Book a consultation →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Grafyra Collective. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-accent transition-colors">Privacy</Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-accent transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
