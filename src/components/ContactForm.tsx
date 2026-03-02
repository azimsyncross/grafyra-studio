import { useState } from "react";
import { toast } from "sonner";

const budgetOptions = ["Under $5K", "$5K – $15K", "$15K – $50K", "$50K+", "Not sure yet"];
const timelineOptions = ["ASAP", "1–2 months", "3–6 months", "6+ months", "Flexible"];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
    timeline: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      toast.success("Thank you! We'll be in touch within 24 hours.");
      setFormData({ name: "", email: "", message: "", budget: "", timeline: "" });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={255}
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">Budget Range</label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
          >
            <option value="">Select a range</option>
            {budgetOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">Timeline</label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
          >
            <option value="">Select a timeline</option>
            {timelineOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Tell us about your project <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={2000}
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
          placeholder="What are you building? What problem does it solve? Any technical requirements?"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="bg-accent text-accent-foreground font-medium px-8 py-3 rounded-md hover:opacity-90 transition-opacity text-sm disabled:opacity-50"
      >
        {submitting ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
};

export default ContactForm;
