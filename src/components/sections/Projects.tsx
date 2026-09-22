import React, { useState } from "react";
import { FolderGit2, ArrowRight, Star } from "lucide-react";
import { projects } from "../../data/portfolioData";
import type { Project } from "../../types/portfolio";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { ProjectModal } from "./ProjectModal";
import { GithubIcon } from "../ui/SocialIcons";
export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectGlowStyle = (idx: number) => {
    const glows = [
      // Blue + Cyan + Violet
      "linear-gradient(135deg, rgba(59,130,246,0.18) 0%, rgba(139,92,246,0.14) 100%), radial-gradient(circle at 0% 0%, rgba(6,182,212,0.3) 0%, transparent 80%), radial-gradient(circle at 100% 100%, rgba(139,92,246,0.3) 0%, transparent 80%)",
      // Purple + Blue + Pink
      "linear-gradient(135deg, rgba(139,92,246,0.18) 0%, rgba(236,72,153,0.14) 100%), radial-gradient(circle at 0% 0%, rgba(139,92,246,0.3) 0%, transparent 80%), radial-gradient(circle at 100% 100%, rgba(59,130,246,0.3) 0%, transparent 80%)",
      // Cyan + Blue + Violet
      "linear-gradient(135deg, rgba(6,182,212,0.18) 0%, rgba(59,130,246,0.14) 100%), radial-gradient(circle at 0% 0%, rgba(6,182,212,0.3) 0%, transparent 80%), radial-gradient(circle at 100% 100%, rgba(139,92,246,0.3) 0%, transparent 80%)",
      // Gold + Pink + Blue
      "linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(236,72,153,0.15) 100%), radial-gradient(circle at 0% 0%, rgba(245,158,11,0.3) 0%, transparent 80%), radial-gradient(circle at 100% 100%, rgba(59,130,246,0.3) 0%, transparent 80%)"
    ];
    return glows[idx % glows.length];
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Header */}{" "}
        <div className="flex flex-col items-center text-center mb-12">
          {" "}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            {" "}
            <span className="glass-icon flex items-center justify-center w-6 h-6 rounded-full">
              {" "}
              <FolderGit2 className="w-3.5 h-3.5" />{" "}
            </span>{" "}
            <span>Featured Portfolio</span>{" "}
          </div>{" "}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight projects-heading-gradient">
            {" "}
            Key Projects & Case Studies{" "}
          </h2>{" "}
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base">
            {" "}
            Select a project to explore the overview, problem statement,
            solution approach, and technical features.{" "}
          </p>{" "}
        </div>{" "}
        {/* Projects Cards Grid */}{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {" "}
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group glass-panel card-glow relative rounded-3xl border border-slate-200 dark:border-slate-800/80 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-md "
            >
              {" "}
              {/* Subtle Ambient Glow Layer */}
              <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-90 group-hover:opacity-100"
                style={{ background: getProjectGlowStyle(idx) }}
              />
              {/* Thumbnail Header */}{" "}
              <div className="relative z-10 overflow-hidden aspect-video bg-slate-900">
                {" "}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />{" "}
                {/* Top Badges */}{" "}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  {" "}
                  <Badge variant="primary" size="sm">
                    {project.category}
                  </Badge>{" "}
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/90 text-slate-950 text-xs font-bold shadow-sm">
                      {" "}
                      <Star className="w-3 h-3 fill-slate-950" /> Featured{" "}
                    </span>
                  )}{" "}
                </div>{" "}
              </div>{" "}
              {/* Body Content */}{" "}
              <div className="relative z-10 p-6 space-y-4 flex-1 flex flex-col justify-between">
                {" "}
                <div className="space-y-2">
                  {" "}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-[var(--hover-text)] transition-colors">
                    {" "}
                    {project.title}{" "}
                  </h3>{" "}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {" "}
                    {project.description}{" "}
                  </p>{" "}
                </div>{" "}
                {/* Tech stack pills */}{" "}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {" "}
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <Badge key={idx} variant="neutral" size="sm">
                      {" "}
                      {tech}{" "}
                    </Badge>
                  ))}{" "}
                </div>{" "}
                {/* Footer CTAs */}{" "}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-2">
                  {" "}
                  <Button
                    onClick={() => setSelectedProject(project)}
                    variant="projectDetails"
                    size="sm"
                    icon={<ArrowRight className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    {" "}
                    View Details{" "}
                  </Button>{" "}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      {" "}
                      <GithubIcon className="w-4 h-4" />{" "}
                    </a>
                  )}{" "}
                </div>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
      {/* Case Study Modal Trigger */}{" "}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />{" "}
    </section>
  );
};

