import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Description */}
          <div>
            <Link to="/" className="font-display text-xl font-bold tracking-tight text-foreground">
              Grafyra<span className="text-accent">.</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Boutique web engineering studio crafting high-performance websites and applications for businesses that value craft over compromise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
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

          {/* Contact Information */}
          <div>
            <h4 className="text-sm font-display font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="font-medium text-foreground">Nolan Prescott</li>
              <li>
                <a href="mailto:Pagludev33@outlook.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail size={14} className="text-accent shrink-0" />
                  Pagludev33@outlook.com
                </a>
              </li>
              <li>
                <a href="tel:+12138347151" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone size={14} className="text-accent shrink-0" />
                  +1 213-834-7151
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
                <span>
                  2204 Apple Spring Dr<br />
                  Deer Park, TX 77536<br />
                  United States
                </span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-sm font-display font-semibold text-foreground mb-4">Location</h4>
            <div className="rounded-lg overflow-hidden border border-border">
              <iframe
                title="Grafyra Collective Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.0!2d-95.12!3d29.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z2204+Apple+Spring+Dr%2C+Deer+Park%2C+TX+77536!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Grafyra Collective. All rights reserved.
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
