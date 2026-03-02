import { Link } from "react-router-dom";

interface CTAProps {
  headline?: string;
  description?: string;
  buttonText?: string;
  buttonTo?: string;
  onClick?: () => void;
}

const CTA = ({
  headline = "Ready to build something exceptional?",
  description = "We partner with teams that care about quality. If that's you, let's talk.",
  buttonText = "Start a conversation",
  buttonTo = "/contact",
  onClick,
}: CTAProps) => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          {headline}
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          {description}
        </p>
        {onClick ? (
          <button
            onClick={onClick}
            className="inline-block bg-accent text-accent-foreground font-medium px-8 py-3 rounded-md hover:opacity-90 transition-opacity text-sm"
          >
            {buttonText}
          </button>
        ) : (
          <Link
            to={buttonTo}
            className="inline-block bg-accent text-accent-foreground font-medium px-8 py-3 rounded-md hover:opacity-90 transition-opacity text-sm"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default CTA;
