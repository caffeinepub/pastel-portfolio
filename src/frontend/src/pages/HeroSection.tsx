import { Linkedin } from "lucide-react";
import { SiGithub, SiHackerrank, SiLeetcode } from "react-icons/si";
import { personalInfo } from "../data";

export function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Decorative blobs */}
      <div
        className="hero-blob animate-blob"
        style={{
          width: "480px",
          height: "480px",
          top: "-80px",
          left: "-120px",
          background: "var(--pastel-lavender)",
        }}
      />
      <div
        className="hero-blob animate-blob"
        style={{
          width: "360px",
          height: "360px",
          top: "60px",
          right: "-80px",
          background: "var(--pastel-blush)",
          animationDelay: "2s",
        }}
      />
      <div
        className="hero-blob animate-blob"
        style={{
          width: "260px",
          height: "260px",
          bottom: "80px",
          left: "30%",
          background: "var(--pastel-mint)",
          animationDelay: "4s",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        {/* Profile photo */}
        <div
          className="animate-fade-in"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <div className="relative inline-block">
            <img
              src={personalInfo.profileImage}
              alt={`${personalInfo.name} — software developer`}
              className="hero-photo w-40 h-40 sm:w-52 sm:h-52"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/assets/images/placeholder.svg";
              }}
            />
            {/* Floating ring decoration */}
            <div
              className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Name & title */}
        <div
          className="animate-fade-in"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl tracking-tight leading-tight mb-3">
            <span className="text-gradient-hero">{personalInfo.name}</span>
          </h1>
          <p className="text-lg sm:text-xl font-body font-medium text-foreground/70 tracking-widest uppercase">
            {personalInfo.title}
          </p>
          <p className="mt-2 text-base font-body text-muted-foreground">
            {personalInfo.tagline}
          </p>
        </div>

        {/* Social links */}
        <div
          className="flex items-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.35s", opacity: 0 }}
        >
          {[
            { href: personalInfo.github, icon: SiGithub, label: "GitHub" },
            { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
            {
              href: personalInfo.leetcode,
              icon: SiLeetcode,
              label: "LeetCode",
            },
            {
              href: personalInfo.hackerrank,
              icon: SiHackerrank,
              label: "HackerRank",
            },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-xl bg-card border border-border/60 shadow-soft flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/40 hover:shadow-elevated hover:-translate-y-0.5 transition-smooth"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          <button
            type="button"
            data-ocid="hero-cta-about"
            onClick={() => handleScroll("#about")}
            className="button-soft bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft"
          >
            About Me
          </button>
          <button
            type="button"
            data-ocid="hero-cta-projects"
            onClick={() => handleScroll("#projects")}
            className="button-soft bg-card text-foreground border border-border/60 hover:border-primary/40 hover:bg-primary/5"
          >
            View Projects
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
