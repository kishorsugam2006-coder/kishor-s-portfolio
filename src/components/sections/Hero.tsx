import React from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  MapPin,
  Phone,
} from "lucide-react";
import { personalInfo, socialLinks, stats } from "../../data/portfolioData";
import { Button } from "../ui/Button";
import {
  GithubIcon,
  LinkedinIcon,
  HackerRankIcon,
  FigmaIcon,
  LeetCodeIcon,
} from "../ui/SocialIcons";
export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
    >
      {" "}
      {/* Ambient background glow */}{" "}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />{" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {" "}
          {/* LEFT COLUMN: Content */}{" "}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {" "}
            {/* Availability Pill */}{" "}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-medium">
              {" "}
              <span className="relative flex h-2 w-2">
                {" "}
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>{" "}
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>{" "}
              </span>{" "}
              <span>{personalInfo.availability.message}</span>{" "}
            </div>{" "}
            {/* Name & Title Header */}{" "}
            <div className="space-y-2">
              {" "}
              <div className="flex items-center justify-center lg:justify-start gap-4 text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-semibold tracking-wide uppercase flex-wrap">
                {" "}
                <span className="flex items-center gap-1">
                  {" "}
                  <MapPin className="w-4 h-4 text-blue-500" />{" "}
                  {personalInfo.location}{" "}
                </span>{" "}
                <span>•</span>{" "}
                <span className="flex items-center gap-1">
                  {" "}
                  <Phone className="w-4 h-4 text-cyan-500" />{" "}
                  {personalInfo.phone}{" "}
                </span>{" "}
              </div>{" "}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.1]">
                {" "}
                Hello, I'm{" "}
                <span className="hero-name-gradient">{personalInfo.name}</span>{" "}
              </h1>{" "}
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
                {" "}
                {personalInfo.title}{" "}
              </p>{" "}
            </div>{" "}
            {/* Tagline / Value Proposition */}{" "}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {" "}
              {personalInfo.tagline}{" "}
            </p>{" "}
            {/* Action Buttons */}{" "}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              {" "}
              <Button
                href="#projects"
                variant="explosive"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                {" "}
                Explore My Work{" "}
              </Button>{" "}
              <Button
                href={personalInfo.resumeUrl}
                download="Kishor_S_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                icon={<Download className="w-5 h-5" />}
              >
                {" "}
                Download Resume{" "}
              </Button>{" "}
              <Button
                href="#contact"
                variant="ghost"
                size="lg"
                icon={<Mail className="w-5 h-5" />}
              >
                {" "}
                Let's Connect{" "}
              </Button>{" "}
            </div>{" "}
            {/* Social Links Bar */}{" "}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex-wrap">
              {" "}
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Profiles:
              </span>{" "}
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Kishor S GitHub profile"
                  title="GitHub"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-[var(--hover-text)] transition-colors"
                >
                  {" "}
                  <GithubIcon className="w-5 h-5" />{" "}
                </a>
              )}{" "}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Kishor S LinkedIn profile"
                  title="LinkedIn"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-[var(--hover-text)] transition-colors"
                >
                  {" "}
                  <LinkedinIcon className="w-5 h-5" />{" "}
                </a>
              )}{" "}
              {socialLinks.figma && (
                <a
                  href={socialLinks.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Kishor S Figma profile"
                  title="Figma"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-[var(--hover-text)] transition-colors"
                >
                  {" "}
                  <FigmaIcon className="w-5 h-5" />{" "}
                </a>
              )}{" "}
              {socialLinks.leetcode && (
                <a
                  href={socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Kishor S LeetCode profile"
                  title="LeetCode"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-[var(--hover-text)] transition-colors"
                >
                  {" "}
                  <LeetCodeIcon className="w-5 h-5" />{" "}
                </a>
              )}{" "}
              {socialLinks.hackerrank && (
                <a
                  href={socialLinks.hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Kishor S HackerRank profile"
                  title="HackerRank"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-[var(--hover-text)] transition-colors"
                >
                  {" "}
                  <HackerRankIcon className="w-5 h-5" />{" "}
                </a>
              )}{" "}
            </div>{" "}
          </div>{" "}
          {/* RIGHT COLUMN: Photo 1 (Primary Profile Photo) */}{" "}
          <div className="lg:col-span-5 flex justify-center">
            {" "}
            <div className="relative w-72 h-80 sm:w-88 sm:h-[420px] group">
              {" "}
              {/* Subtle ambient glow behind photo */}{" "}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600 to-cyan-500 rotate-3 opacity-25 blur-xl group-hover:opacity-40 transition-opacity duration-300" />{" "}
              {/* Photo 1 Container */}{" "}
              <div className="relative w-full h-full rounded-3xl overflow-hidden glass-panel border-2 border-[var(--border-color)] shadow-2xl p-2.5 transition-transform duration-300 ">
                {" "}
                <img
                  src={personalInfo.avatarUrl}
                  alt="Kishor S professional profile photograph"
                  loading="eager"
                  className="w-full h-full object-cover object-top rounded-2xl filter contrast-[1.03]"
                />{" "}
              </div>{" "}
              {/* Floating Badge */}{" "}
              <div className="absolute -bottom-4 -left-4 glass-panel p-3.5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                {" "}
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">
                  {" "}
                  <Sparkles className="w-5 h-5" />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    B.Tech IT
                  </div>{" "}
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    CGPA: 6.9
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Dynamic Stats Bar */}{" "}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl glass-panel border border-slate-200/80 dark:border-slate-800/80">
          {" "}
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1 text-center md:text-left">
              {" "}
              <div className="text-2xl sm:text-4xl font-extrabold gradient-text">
                {stat.value}
              </div>{" "}
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {stat.label}
              </div>{" "}
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {stat.description}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
