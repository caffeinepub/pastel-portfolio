import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, ExternalLink, Github } from "lucide-react";
import { projects } from "../data";
import type { Project } from "../types";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="card-pastel p-6 flex flex-col gap-4 group"
      data-ocid={`project-card-${project.id}`}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display font-semibold text-base text-foreground leading-snug group-hover:text-primary transition-smooth">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub — ${project.title}`}
              className="text-foreground/40 hover:text-foreground transition-smooth"
            >
              <Github size={15} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo — ${project.title}`}
              className="text-foreground/40 hover:text-primary transition-smooth"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      {project.company && (
        <div className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
          <Building2 size={12} />
          <span>{project.company}</span>
          {project.duration && (
            <>
              <span className="text-border">•</span>
              <Calendar size={11} />
              <span>{project.duration}</span>
            </>
          )}
        </div>
      )}

      <p className="text-sm font-body text-foreground/65 leading-relaxed line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-border/40">
        {project.tech.map((t) => (
          <Badge
            key={t}
            variant="secondary"
            className="text-xs font-mono px-2 py-0.5 bg-primary/8 text-primary/80 border-primary/20 hover:bg-primary/15 transition-smooth"
          >
            {t}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const internshipProjects = projects.filter(
    (p) => p.category === "internship",
  );
  const miniProjects = projects.filter((p) => p.category === "mini");

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-mono font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/10">
            Portfolio
          </span>
          <h2 className="section-heading">Projects</h2>
          <p className="section-subheading max-w-md mx-auto">
            From internship deliverables to personal side projects
          </p>
        </div>

        {/* Internship Projects */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: "var(--pastel-blush)" }}
            >
              <Building2 size={16} className="text-foreground/70" />
            </div>
            <h3 className="font-display font-semibold text-xl text-foreground">
              Internship Projects
            </h3>
            <span className="text-xs font-mono text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-full">
              {internshipProjects.length}
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {internshipProjects.map((project, i) => (
              <div
                key={project.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Mini Projects */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: "var(--pastel-mint)" }}
            >
              <span className="text-sm">⚡</span>
            </div>
            <h3 className="font-display font-semibold text-xl text-foreground">
              Mini Projects
            </h3>
            <span className="text-xs font-mono text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-full">
              {miniProjects.length}
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {miniProjects.map((project, i) => (
              <div
                key={project.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
