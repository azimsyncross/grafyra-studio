const PrivacyPage = () => {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">Legal</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: March 2026</p>

        <div className="space-y-10 text-sm text-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
            <p className="text-muted-foreground">
              We collect information you provide directly, such as your name, email address, and project details 
              when you submit an inquiry through our contact form. We do not collect information from third-party sources.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Cookies</h2>
            <p className="text-muted-foreground">
              This website uses only essential cookies required for basic functionality. We do not use 
              advertising cookies or cross-site tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Analytics</h2>
            <p className="text-muted-foreground">
              We may use privacy-respecting analytics tools to understand how visitors use our website. 
              These tools do not track individual users across sites and comply with applicable privacy regulations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Data Storage & Protection</h2>
            <p className="text-muted-foreground">
              Your data is stored securely using industry-standard encryption. We retain inquiry data only 
              as long as necessary to respond to your request and maintain our business relationship. 
              We do not sell, rent, or share your personal information with third parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Third-Party Integrations</h2>
            <p className="text-muted-foreground">
              Our website may integrate with third-party services for hosting, email delivery, and analytics. 
              These services are bound by their own privacy policies and are selected for their commitment to data protection.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Client Confidentiality</h2>
            <p className="text-muted-foreground">
              All client project details, business information, and communications are treated as strictly confidential. 
              We do not disclose client relationships or project details without explicit written consent.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Your Rights</h2>
            <p className="text-muted-foreground">
              You have the right to access, correct, or delete your personal information at any time. 
              To exercise these rights, contact us at the email address below.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Contact</h2>
            <p className="text-muted-foreground">
              For privacy-related inquiries, please reach out through our contact page or email us directly. 
              We will respond within 30 days of receiving your request.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPage;
