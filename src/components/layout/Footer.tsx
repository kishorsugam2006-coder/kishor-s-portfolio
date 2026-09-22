import React from "react";
import { ArrowUp } from "lucide-react";
import { personalInfo, socialLinks } from "../../data/portfolioData";
import {
  GithubIcon,
  LinkedinIcon,
  HackerRankIcon,
  FigmaIcon,
  LeetCodeIcon,
} from "../ui/SocialIcons";
export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative bg-[var(--bg-surface)] text-[var(--text-secondary)] pt-16 pb-12 border-t border-[var(--border-color)]">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[var(--border-color)]">
          {" "}
          {/* Col 1: Brand Info */}{" "}
          <div className="md:col-span-2 space-y-4">
            {" "}
            <div className="flex items-center gap-3">
              {" "}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-600/20">
                {" "}
                {personalInfo.name.charAt(0)}{" "}
              </div>{" "}
              <span className="text-xl font-bold text-[var(--text-primary)]">
                {personalInfo.displayName}
              </span>{" "}
            </div>{" "}
            <p className="text-[var(--text-secondary)] text-sm max-w-sm leading-relaxed">
              {" "}
              {personalInfo.tagline}{" "}
            </p>{" "}
            <div className="flex items-center gap-3 pt-2">
              {" "}
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Kishor S GitHub profile"
                  title="GitHub"
                  className="p-2.5 rounded-xl bg-[var(--bg-surface-hover)] hover:bg-[rgba(var(--hover-rgb),0.10)] text-[var(--text-secondary)] hover:text-[var(--hover-text)] transition-colors"
                >
                  {" "}
                  <GithubIcon className="w-4 h-4" />{" "}
                </a>
              )}{" "}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Kishor S LinkedIn profile"
                  title="LinkedIn"
                  className="p-2.5 rounded-xl bg-[var(--bg-surface-hover)] hover:bg-[rgba(var(--hover-rgb),0.10)] text-[var(--text-secondary)] hover:text-[var(--hover-text)] transition-colors"
                >
                  {" "}
                  <LinkedinIcon className="w-4 h-4" />{" "}
                </a>
              )}{" "}
              {socialLinks.figma && (
                <a
                  href={socialLinks.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Kishor S Figma profile"
                  title="Figma"
                  className="p-2.5 rounded-xl bg-[var(--bg-surface-hover)] hover:bg-[rgba(var(--hover-rgb),0.10)] text-[var(--text-secondary)] hover:text-[var(--hover-text)] transition-colors"
                >
                  {" "}
                  <FigmaIcon className="w-4 h-4" />{" "}
                </a>
              )}{" "}
              {socialLinks.leetcode && (
                <a
                  href={socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Kishor S LeetCode profile"
                  title="LeetCode"
                  className="p-2.5 rounded-xl bg-[var(--bg-surface-hover)] hover:bg-[rgba(var(--hover-rgb),0.10)] text-[var(--text-secondary)] hover:text-[var(--hover-text)] transition-colors"
                >
                  {" "}
                  <LeetCodeIcon className="w-4 h-4" />{" "}
                </a>
              )}{" "}
              {socialLinks.hackerrank && (
                <a
                  href={socialLinks.hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Kishor S HackerRank profile"
                  title="HackerRank"
                  className="p-2.5 rounded-xl bg-[var(--bg-surface-hover)] hover:bg-[rgba(var(--hover-rgb),0.10)] text-[var(--text-secondary)] hover:text-[var(--hover-text)] transition-colors"
                >
                  {" "}
                  <HackerRankIcon className="w-4 h-4" />{" "}
                </a>
              )}{" "}
            </div>{" "}
          </div>{" "}
          {/* Col 2: Navigation Links */}{" "}
          <div>
            {" "}
            <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
              {" "}
              Navigation{" "}
            </h4>{" "}
            <ul className="space-y-2 text-sm">
              {" "}
              <li>
                <a
                  href="#about"
                  className="text-[var(--text-secondary)] hover:text-[var(--hover-text)] transition-colors"
                >
                  About Me
                </a>
              </li>{" "}
              <li>
                <a
                  href="#skills"
                  className="text-[var(--text-secondary)] hover:text-[var(--hover-text)] transition-colors"
                >
                  Technical Skills
                </a>
              </li>{" "}
              <li>
                <a
                  href="#projects"
                  className="text-[var(--text-secondary)] hover:text-[var(--hover-text)] transition-colors"
                >
                  Projects
                </a>
              </li>{" "}
              <li>
                <a
                  href="#experience"
                  className="text-[var(--text-secondary)] hover:text-[var(--hover-text)] transition-colors"
                >
                  Experience
                </a>
              </li>{" "}
              <li>
                <a
                  href="#education"
                  className="text-[var(--text-secondary)] hover:text-[var(--hover-text)] transition-colors"
                >
                  Education
                </a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          {/* Col 3: Quick Links */}{" "}
          <div>
            {" "}
            <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
              {" "}
              Quick Links{" "}
            </h4>{" "}
            <ul className="space-y-2 text-sm">
              {" "}
              <li>
                <a
                  href="#achievements"
                  className="text-[var(--text-secondary)] hover:text-[var(--hover-text)] transition-colors"
                >
                  Achievements
                </a>
              </li>{" "}
              <li>
                <a
                  href="#resume"
                  className="text-[var(--text-secondary)] hover:text-[var(--hover-text)] transition-colors"
                >
                  Curriculum Vitae
                </a>
              </li>{" "}
              <li>
                <a
                  href="#contact"
                  className="text-[var(--text-secondary)] hover:text-[var(--hover-text)] transition-colors"
                >
                  Contact Kishor
                </a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        {/* Bottom copyright & Scroll To Top */}{" "}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          {" "}
          <p>
            © {currentYear} {personalInfo.name}. All rights reserved. Aspiring
            IT Professional Portfolio.
          </p>{" "}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-surface-hover)] hover:bg-[rgba(var(--hover-rgb),0.10)] text-[var(--text-primary)] transition-colors"
          >
            {" "}
            <span>Back to top</span> <ArrowUp className="w-4 h-4" />{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};
