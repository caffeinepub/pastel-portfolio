import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { SiGithub, SiHackerrank, SiLeetcode } from "react-icons/si";
import { personalInfo } from "../data";

const socialLinks = [
  {
    href: personalInfo.github,
    icon: SiGithub,
    label: "GitHub",
    username: "@akshaya249",
  },
  {
    href: personalInfo.linkedin,
    icon: Linkedin,
    label: "LinkedIn",
    username: "akshaya-marimuthu-54b3142a1",
  },
  {
    href: personalInfo.leetcode,
    icon: SiLeetcode,
    label: "LeetCode",
    username: "akshaya_37",
  },
  {
    href: personalInfo.hackerrank,
    icon: SiHackerrank,
    label: "HackerRank",
    username: "makshaya160",
  },
];

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = form;
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-mono font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/10">
            Get In Touch
          </span>
          <h2 className="section-heading">Contact Me</h2>
          <p className="section-subheading max-w-md mx-auto">
            Have an opportunity or just want to say hello? I'd love to hear from
            you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact form */}
          <div className="card-pastel p-8">
            <h3 className="font-display font-semibold text-lg text-foreground mb-6 flex items-center gap-2">
              <Mail size={18} className="text-primary" />
              Send a Message
            </h3>

            {sent ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <CheckCircle2 size={40} className="text-chart-2" />
                <p className="font-display font-semibold text-foreground text-lg">
                  Message composed!
                </p>
                <p className="text-sm text-muted-foreground font-body">
                  Your email client is opening. Click send there to complete
                  delivery.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="contact-name"
                    className="text-sm font-body text-foreground/70"
                  >
                    Name
                  </Label>
                  <Input
                    id="contact-name"
                    data-ocid="contact-name-input"
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-background/60 border-border/60 focus:border-primary/60 rounded-xl font-body"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="contact-email"
                    className="text-sm font-body text-foreground/70"
                  >
                    Email
                  </Label>
                  <Input
                    id="contact-email"
                    data-ocid="contact-email-input"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="bg-background/60 border-border/60 focus:border-primary/60 rounded-xl font-body"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="contact-message"
                    className="text-sm font-body text-foreground/70"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    data-ocid="contact-message-input"
                    required
                    placeholder="What would you like to say?"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    rows={5}
                    className="bg-background/60 border-border/60 focus:border-primary/60 rounded-xl font-body resize-none"
                  />
                </div>
                <button
                  type="submit"
                  data-ocid="contact-submit-btn"
                  className="button-soft bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft flex items-center justify-center gap-2 w-full"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Social links side */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                Let's connect
              </h3>
              <p className="text-sm font-body text-muted-foreground mb-6">
                Find me on these platforms or reach out directly via email.
              </p>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-card border border-border/60 shadow-soft hover:border-primary/40 hover:shadow-elevated transition-smooth mb-6 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide">
                    Email
                  </p>
                  <p className="text-sm font-body font-medium text-foreground group-hover:text-primary transition-smooth">
                    {personalInfo.email}
                  </p>
                </div>
              </a>
            </div>

            <div className="flex flex-col gap-3">
              {socialLinks.map(({ href, icon: Icon, label, username }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`social-link-${label.toLowerCase()}`}
                  className="flex items-center gap-4 px-5 py-3.5 rounded-2xl bg-card border border-border/60 shadow-xs hover:border-primary/40 hover:shadow-soft hover:translate-x-1 transition-smooth group"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--pastel-lavender)" }}
                  >
                    <Icon size={16} className="text-foreground/70" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-body font-medium text-foreground group-hover:text-primary transition-smooth">
                      {label}
                    </p>
                    <p className="text-xs font-mono text-muted-foreground truncate">
                      {username}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
