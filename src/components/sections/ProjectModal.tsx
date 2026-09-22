import React from "react";
import type { Project } from "../../types/portfolio";
import { Modal } from "../ui/Modal";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import {
  ExternalLink,
  CheckCircle,
  Target,
  Layers,
  Zap,
  Trophy,
} from "lucide-react";
import { GithubIcon } from "../ui/SocialIcons";
interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}
export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;
  const { caseStudy } = project;
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="4xl">
      {" "}
      <div className="space-y-8">
        {" "}
        {/* Header Metadata */}{" "}
        <div className="space-y-4">
          {" "}
          <div className="flex flex-wrap items-center gap-2">
            {" "}
            <Badge variant="primary">{project.category}</Badge>{" "}
            <Badge variant="neutral">{project.status}</Badge>{" "}
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {" "}
              {project.date} • Role: {project.role}{" "}
            </span>{" "}
          </div>{" "}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
            {" "}
            {project.title}{" "}
          </h2>{" "}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium">
            {" "}
            {project.tagline}{" "}
          </p>{" "}
          {/* Action CTAs */}{" "}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {" "}
            {project.liveDemoUrl ? (
              <Button
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                {" "}
                Live Demo{" "}
              </Button>
            ) : null}{" "}
            {project.githubUrl ? (
              <Button
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                icon={<GithubIcon className="w-4 h-4" />}
              >
                {" "}
                View Repository{" "}
              </Button>
            ) : (
              <span className="text-xs text-slate-400 font-medium italic self-center">
                Demo / Code link coming soon
              </span>
            )}{" "}
          </div>{" "}
        </div>{" "}
        {/* Featured Image */}{" "}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl max-h-96">
          {" "}
          <img
            src={project.featuredImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />{" "}
        </div>{" "}
        {/* Tech Badges */}{" "}
        <div className="space-y-2">
          {" "}
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Technologies Used
          </h4>{" "}
          <div className="flex flex-wrap gap-2">
            {" "}
            {project.technologies.map((tech, idx) => (
              <Badge key={idx} variant="secondary">
                {" "}
                {tech}{" "}
              </Badge>
            ))}{" "}
          </div>{" "}
        </div>{" "}
        {/* Breakdown Sections */}{" "}
        <div className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800">
          {" "}
          {/* 01 Overview */}{" "}
          <div className="space-y-2">
            {" "}
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              {" "}
              <Layers className="w-5 h-5 text-blue-500" />{" "}
              <span>01 Overview</span>{" "}
            </h3>{" "}
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {" "}
              {caseStudy.overview}{" "}
            </p>{" "}
          </div>{" "}
          {/* 02 Problem */}{" "}
          <div className="space-y-2">
            {" "}
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              {" "}
              <Target className="w-5 h-5 text-indigo-500" />{" "}
              <span>02 Problem Statement</span>{" "}
            </h3>{" "}
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {" "}
              {caseStudy.problem}{" "}
            </p>{" "}
          </div>{" "}
          {/* 03 Solution & Architecture */}{" "}
          <div className="space-y-2">
            {" "}
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              {" "}
              <Zap className="w-5 h-5 text-amber-500" />{" "}
              <span>03 Technical Solution</span>{" "}
            </h3>{" "}
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {" "}
              {caseStudy.solution}{" "}
            </p>{" "}
            {caseStudy.architecture && (
              <ul className="space-y-1.5 pt-2 pl-2">
                {" "}
                {caseStudy.architecture.map((arch, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                  >
                    {" "}
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />{" "}
                    <span>{arch}</span>{" "}
                  </li>
                ))}{" "}
              </ul>
            )}{" "}
          </div>{" "}
          {/* 04 Outcome */}{" "}
          <div className="space-y-2">
            {" "}
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              {" "}
              <Trophy className="w-5 h-5 text-emerald-500" />{" "}
              <span>04 Key Outcome</span>{" "}
            </h3>{" "}
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {" "}
              {caseStudy.outcome}{" "}
            </p>{" "}
          </div>{" "}
          {/* Key Features */}{" "}
          {caseStudy.keyFeatures && (
            <div className="space-y-2 pt-2">
              {" "}
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Key Features Delivered
              </h4>{" "}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {" "}
                {caseStudy.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-center gap-2"
                  >
                    {" "}
                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />{" "}
                    <span>{feat}</span>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
            </div>
          )}{" "}
        </div>{" "}
      </div>{" "}
    </Modal>
  );
};
