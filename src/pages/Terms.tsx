const TermsPage = () => {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">Legal</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-12">Last updated: March 2026</p>

        <div className="space-y-10 text-sm text-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Scope of Services</h2>
            <p className="text-muted-foreground">
              Grafyra Collective provides web development, design, and consulting services as outlined in individual 
              project proposals. Each engagement is governed by a separate Statement of Work (SOW) that defines 
              deliverables, timelines, and pricing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Project Timelines</h2>
            <p className="text-muted-foreground">
              Timelines provided in proposals are estimates based on the agreed scope. Delays caused by client-side 
              feedback, content delivery, or scope changes may extend the timeline. We communicate proactively 
              about any adjustments.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Payment Terms</h2>
            <p className="text-muted-foreground">
              Projects typically require a 50% deposit before work begins, with the remaining balance due upon 
              completion or at agreed milestones. Invoices are payable within 14 days of receipt. Late payments 
              may incur a 1.5% monthly interest charge.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Intellectual Property</h2>
            <p className="text-muted-foreground">
              Upon full payment, the client owns all custom code, designs, and content created specifically for 
              their project. We retain the right to use open-source libraries and general-purpose tools across 
              projects. We may request permission to feature the project in our portfolio.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Revisions</h2>
            <p className="text-muted-foreground">
              Each project phase includes a defined number of revision rounds as specified in the SOW. 
              Additional revisions beyond the agreed scope are billed at our standard hourly rate. 
              We encourage iterative feedback to keep revisions focused and productive.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Confidentiality</h2>
            <p className="text-muted-foreground">
              Both parties agree to keep confidential any proprietary information shared during the engagement. 
              This includes business strategies, technical architecture, user data, and financial information. 
              This obligation survives the termination of the agreement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              Grafyra Collective's total liability for any claim arising from services provided shall not exceed 
              the total amount paid by the client for the specific project in question. We are not liable for 
              indirect, incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Termination</h2>
            <p className="text-muted-foreground">
              Either party may terminate the agreement with 14 days written notice. Upon termination, the client 
              is responsible for payment of all work completed to date. We will deliver all completed work and 
              assets upon receipt of final payment.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Governing Law</h2>
            <p className="text-muted-foreground">
              These terms are governed by and construed in accordance with the laws of the United States. 
              Any disputes arising from these terms shall be resolved through good-faith negotiation, 
              and if necessary, binding arbitration.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsPage;
