import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  includes: string[];
  bestFor: string;
  results: string;
}

const ServiceCard = ({ icon: Icon, title, description, includes, bestFor, results }: ServiceCardProps) => {
  return (
    <div className="group bg-card border border-border rounded-lg p-8 hover:border-accent/40 transition-colors duration-300">
      <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{description}</p>

      <div className="space-y-4">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">What's Included</h4>
          <ul className="space-y-1">
            {includes.map((item) => (
              <li key={item} className="text-sm text-foreground flex items-start gap-2">
                <span className="text-accent mt-1 text-xs">●</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Best For</h4>
          <p className="text-sm text-foreground">{bestFor}</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Expected Results</h4>
          <p className="text-sm text-foreground">{results}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
