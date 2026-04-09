import { ExternalLink } from "lucide-react";
import { certifications } from "../data";
import type { Certification } from "../types";

const accentClasses: Record<Certification["accent"], string> = {
  lavender: "card-pastel-lavender",
  blush: "card-pastel-blush",
  sky: "card-pastel-sky",
  mint: "card-pastel-mint",
};

function CertCard({ cert }: { cert: Certification }) {
  return (
    <div
      className={`${accentClasses[cert.accent]} p-5 flex flex-col gap-3 group`}
      data-ocid={`cert-card-${cert.id}`}
    >
      <div className="flex items-start justify-between">
        <span className="text-2xl">{cert.icon}</span>
        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${cert.title} certificate`}
            className="opacity-0 group-hover:opacity-100 transition-smooth text-foreground/50 hover:text-primary"
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>
      <div>
        <h3 className="font-display font-semibold text-sm text-foreground leading-snug line-clamp-2">
          {cert.title}
        </h3>
        <p className="text-xs font-body text-foreground/60 mt-1 leading-snug">
          {cert.issuer}
        </p>
      </div>
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-foreground/10">
        <span className="text-xs font-mono text-foreground/50">
          {cert.date}
        </span>
        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-body font-medium text-primary/80 hover:text-primary transition-smooth"
          >
            View →
          </a>
        )}
      </div>
    </div>
  );
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-mono font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/10">
            Achievements
          </span>
          <h2 className="section-heading">Certifications</h2>
          <p className="section-subheading max-w-md mx-auto">
            Continuous learning through recognized online platforms and
            institutions
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <div
              key={cert.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 0.07}s`, opacity: 0 }}
            >
              <CertCard cert={cert} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
