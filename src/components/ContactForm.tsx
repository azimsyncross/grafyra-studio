import { useState } from "react";
import { toast } from "sonner";

const budgetOptions = ["Under $5K", "$5K – $15K", "$15K – $50K", "$50K+", "Not sure yet"];
const projectTypes = ["Custom Website", "Web Application", "E-commerce", "UI/UX Design", "Performance Optimization", "Maintenance & Support", "Other"];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
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
    setTimeout(() => {
      toast.success("Thank you! We'll be in touch within 24 hours.");
      setFormData({ name: "", email: "", company: "", projectType: "", budget: "", message: "" });
      setSubmitting(false);
    }, 1000);
  };

  const inputClass = "w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Full Name <span className="text-accent">*</span>
          </label>
          <input id="name" name="name" type="text" required maxLength={100} value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email <span className="text-accent">*</span>
          </label>
          <input id="email" name="email" type="email" required maxLength={255} value={formData.email} onChange={handleChange} className={inputClass} placeholder="you@company.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">Company Name</label>
          <input id="company" name="company" type="text" maxLength={100} value={formData.company} onChange={handleChange} className={inputClass} placeholder="Your company" />
        </div>
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">Project Type</label>
          <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} className={inputClass}>
            <option value="">Select a type</option>
            {projectTypes.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">Budget Range</label>
        <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className={inputClass}>
          <option value="">Select a range</option>
          {budgetOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message <span className="text-accent">*</span>
        </label>
        <textarea id="message" name="message" required maxLength={2000} rows={5} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Tell us about your project — goals, requirements, timeline..." />
      </div>

      <button type="submit" disabled={submitting} className="bg-accent text-accent-foreground font-medium px-8 py-3 rounded-md hover:opacity-90 transition-opacity text-sm disabled:opacity-50">
        {submitting ? "Sending..." : "Start Your Project"}
      </button>
    </form>
  );
};

export default ContactForm;
