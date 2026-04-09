import { ExternalLink, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { SiGithub, SiHackerrank, SiLeetcode } from "react-icons/si";
import { personalInfo } from "../data";

const skills = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "Data Analytics",
  "TensorFlow",
  "Pandas",
  "NumPy",
  "SQL",
  "React",
  "Git",
  "Scikit-learn",
  "Power BI",
];

const platformLinks = [
  { href: personalInfo.github, icon: SiGithub, label: "GitHub" },
  { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: personalInfo.leetcode, icon: SiLeetcode, label: "LeetCode" },
  { href: personalInfo.hackerrank, icon: SiHackerrank, label: "HackerRank" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — bio */}
          <div>
            <span className="inline-block text-xs font-mono font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/10">
              About Me
            </span>
            <h2 className="section-heading">
              Hello, I'm {personalInfo.name} 👋
            </h2>

            <div className="space-y-4 mb-8">
              {personalInfo.bio.map((para) => (
                <p
                  key={para.slice(0, 30)}
                  className="text-foreground/75 font-body leading-relaxed text-base"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="font-display font-semibold text-base text-foreground mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="tag-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Platform links */}
            <div>
              <h3 className="font-display font-semibold text-base text-foreground mb-3">
                Find me on
              </h3>
              <div className="flex flex-wrap gap-3">
                {platformLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/60 shadow-soft text-sm font-body font-medium text-foreground/70 hover:text-primary hover:border-primary/40 hover:shadow-elevated transition-smooth"
                  >
                    <Icon size={15} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — personal details card */}
          <div className="lg:pt-8">
            <div className="card-pastel p-8">
              <h3 className="font-display font-semibold text-lg text-foreground mb-6 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center text-sm">
                  📋
                </span>
                Personal Details
              </h3>
              <dl className="space-y-5">
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <dt className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-0.5">
                      Email
                    </dt>
                    <dd>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-body text-foreground/80 hover:text-primary transition-smooth"
                      >
                        {personalInfo.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <dt className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-0.5">
                      Phone
                    </dt>
                    <dd className="text-sm font-body text-foreground/80">
                      {personalInfo.phone}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <dt className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-0.5">
                      Location
                    </dt>
                    <dd className="text-sm font-body text-foreground/80">
                      {personalInfo.location}
                    </dd>
                  </div>
                </div>
                <div className="border-t border-border/40 pt-5 flex flex-col gap-3">
                  {[
                    {
                      label: "GitHub",
                      href: personalInfo.github,
                      icon: SiGithub,
                    },
                    {
                      label: "LinkedIn",
                      href: personalInfo.linkedin,
                      icon: Linkedin,
                    },
                  ].map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group"
                    >
                      <span className="flex items-center gap-2 text-sm font-body text-foreground/70">
                        <Icon size={14} />
                        {label}
                      </span>
                      <ExternalLink
                        size={13}
                        className="text-muted-foreground group-hover:text-primary transition-smooth"
                      />
                    </a>
                  ))}
                </div>
              </dl>
            </div>

            {/* Availability badge */}
            <div className="mt-4 flex items-center gap-2 px-4 py-3 rounded-xl bg-chart-2/20 border border-chart-2/30">
              <span className="w-2 h-2 rounded-full bg-chart-2 animate-pulse" />
              <span className="text-sm font-body text-foreground/70">
                Open to internships & opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
