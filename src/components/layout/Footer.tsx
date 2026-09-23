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
    <footer className="relative pt-16 pb-12 border-t border-[var(--border-color)] footer-ambient z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-6 space-y-5">
            <div className="flex items-center gap-3">
              <img src="/assets/sk-logo-transparent.png" alt="SK Logo" className="w-10 h-10 object-contain drop-shadow-sm" />
              <span className="text-2xl font-extrabold bg-[linear-gradient(90deg,#2563EB,#06B6D4,#7C3AED)] dark:bg-[linear-gradient(90deg,#3B82F6,#22D3EE,#A78BFA)] bg-clip-text text-transparent">
                {personalInfo.displayName}
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm leading-relaxed">
              {personalInfo.tagline}
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.github && (
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="Visit Kishor S GitHub profile" title="GitHub" className="p-2.5 rounded-xl footer-social-btn">
                  <GithubIcon className="w-5 h-5" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit Kishor S LinkedIn profile" title="LinkedIn" className="p-2.5 rounded-xl footer-social-btn">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              )}
              {socialLinks.figma && (
                <a href={socialLinks.figma} target="_blank" rel="noopener noreferrer" aria-label="Visit Kishor S Figma profile" title="Figma" className="p-2.5 rounded-xl footer-social-btn">
                  <FigmaIcon className="w-5 h-5" />
                </a>
              )}
              {socialLinks.leetcode && (
                <a href={socialLinks.leetcode} target="_blank" rel="noopener noreferrer" aria-label="Visit Kishor S LeetCode profile" title="LeetCode" className="p-2.5 rounded-xl footer-social-btn">
                  <LeetCodeIcon className="w-5 h-5" />
                </a>
              )}
              {socialLinks.hackerrank && (
                <a href={socialLinks.hackerrank} target="_blank" rel="noopener noreferrer" aria-label="Visit Kishor S HackerRank profile" title="HackerRank" className="p-2.5 rounded-xl footer-social-btn">
                  <HackerRankIcon className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-5">
            <div className="inline-block relative">
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wider">
                Navigation
              </h4>
              <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 rounded-full"></div>
            </div>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="text-slate-600 dark:text-slate-400 footer-link font-medium">About Me</a></li>
              <li><a href="#skills" className="text-slate-600 dark:text-slate-400 footer-link font-medium">Technical Skills</a></li>
              <li><a href="#projects" className="text-slate-600 dark:text-slate-400 footer-link font-medium">Projects</a></li>
              <li><a href="#experience" className="text-slate-600 dark:text-slate-400 footer-link font-medium">Experience</a></li>
              <li><a href="#education" className="text-slate-600 dark:text-slate-400 footer-link font-medium">Education</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="md:col-span-3 space-y-5">
            <div className="inline-block relative">
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wider">
                Quick Links
              </h4>
              <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 rounded-full"></div>
            </div>
            <ul className="space-y-3 text-sm">
              <li><a href="#achievements" className="text-slate-600 dark:text-slate-400 footer-link font-medium">Achievements</a></li>
              <li><a href="#resume" className="text-slate-600 dark:text-slate-400 footer-link font-medium">Curriculum Vitae</a></li>
              <li><a href="#contact" className="text-slate-600 dark:text-slate-400 footer-link font-medium">Contact Kishor</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider w-full mb-8"></div>

        {/* Bottom copyright & Scroll To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
          <p className="text-slate-600 dark:text-slate-400 font-medium text-center sm:text-left">
            © {currentYear} {personalInfo.name}. All rights reserved. Aspiring IT Professional Portfolio.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-slate-800 dark:text-slate-100 font-semibold btn-back-to-top"
          >
            <span>Back to top</span> <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
