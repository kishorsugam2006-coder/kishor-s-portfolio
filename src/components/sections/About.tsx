import React from "react";
import {
  User,
  Compass,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  RefreshCw,
} from "lucide-react";
import {
  personalInfo,
  professionalPositioning,
} from "../../data/portfolioData";
export const About: React.FC = () => {
  const softSkillPillars = [
    {
      icon: <Lightbulb className="w-5 h-5 text-amber-500" />,
      title: "Positive Thinker",
      desc: "Approaching technical challenges with optimism, creative problem solving, and persistence.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-blue-500" />,
      title: "Teamwork & Collaboration",
      desc: "Communicating clearly, supporting team members, and contributing to shared engineering goals.",
    },
    {
      icon: <Compass className="w-5 h-5 text-cyan-500" />,
      title: "Willingness to Learn",
      desc: "Actively exploring emerging web frameworks, mobile design patterns, and AI tools.",
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-emerald-500" />,
      title: "Adaptability",
      desc: "Quickly mastering new programming workflows, tools, and project environments.",
    },
  ];
  return (
    <section id="about" className="py-20 md:py-28 relative">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Section Header */}{" "}
        <div className="flex flex-col items-center text-center mb-16">
          {" "}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            {" "}
            <span className="glass-icon flex items-center justify-center w-6 h-6 rounded-full">
              {" "}
              <User className="w-3.5 h-3.5" />{" "}
            </span>{" "}
            <span>About Kishor</span>{" "}
          </div>{" "}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight about-heading-gradient">
            {" "}
            Background & Work Philosophy{" "}
          </h2>{" "}
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            {" "}
            An aspiring IT professional passionate about web design, software
            development, and modern technologies.{" "}
          </p>{" "}
        </div>{" "}
        {/* Main Grid: Photo 2 + About Story */}{" "}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {" "}
          {/* LEFT: Photo 2 (Secondary Personal Photo) */}{" "}
          <div className="lg:col-span-5 flex items-center justify-center">
            {" "}
            <div className="relative w-full max-w-[420px] lg:max-w-[540px] aspect-[1094/1437] group">
              {" "}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500 to-blue-600 -rotate-2 opacity-20 blur-xl group-hover:opacity-35 transition-opacity duration-300" />{" "}
              <div className="relative w-full h-full rounded-3xl overflow-hidden glass-panel border-2 border-[var(--border-color)] shadow-2xl p-2.5 transition-transform duration-300 ">
                {" "}
                <img
                  src={personalInfo.aboutImageUrl}
                  alt="Kishor S personal portfolio photograph"
                  loading="lazy"
                  className="w-full h-full object-contain rounded-2xl filter contrast-[1.02]"
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* RIGHT: Bio Narrative */}{" "}
          <div className="lg:col-span-7 space-y-6 glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
            {" "}
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {" "}
              Who I Am & What I Build{" "}
            </h3>{" "}
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {" "}
              I am{" "}
              <strong className="text-slate-900 dark:text-slate-100">
                {personalInfo.name}
              </strong>
              , an{" "}
              <strong className="text-slate-900 dark:text-slate-100">
                {professionalPositioning.primaryRole}
              </strong>{" "}
              based in {personalInfo.location}. Currently pursuing my B.Tech in
              Information Technology at M. Kumarasamy College of Engineering, I
              have a strong foundation in web design, software development, and
              database queries.{" "}
            </p>{" "}
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {" "}
              My technical experience spans frontend technologies like{" "}
              <strong className="text-slate-900 dark:text-slate-100">
                HTML, CSS, JavaScript
              </strong>
              , backend languages like{" "}
              <strong className="text-slate-900 dark:text-slate-100">
                PHP & Java
              </strong>
              , and database systems like{" "}
              <strong className="text-slate-900 dark:text-slate-100">
                SQL & MySQL
              </strong>
              . During my internship at Movicloud Labs, I developed responsive
              frontend UI components for web and mobile applications.{" "}
            </p>{" "}
            <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/15 space-y-2">
              {" "}
              <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-semibold text-sm">
                {" "}
                <Compass className="w-4 h-4" />{" "}
                <span>Current Direction</span>{" "}
              </div>{" "}
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {" "}
                <strong>Current Focus:</strong>{" "}
                {professionalPositioning.currentFocus}{" "}
              </p>{" "}
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {" "}
                <strong>Career Goal:</strong>{" "}
                {professionalPositioning.careerGoal}{" "}
              </p>{" "}
            </div>{" "}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {" "}
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                {" "}
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />{" "}
                <span>Responsive Frontend Interfaces</span>{" "}
              </div>{" "}
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                {" "}
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />{" "}
                <span>SQL Database Queries</span>{" "}
              </div>{" "}
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                {" "}
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />{" "}
                <span>Figma UI Layout Design</span>{" "}
              </div>{" "}
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                {" "}
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />{" "}
                <span>Real-Time IoT & AI Projects</span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Soft Skill Pillars */}{" "}
        <div className="space-y-6">
          {" "}
          <h3 className="text-2xl font-bold text-center mb-8 strengths-heading-gradient">
            {" "}
            Personal Strengths & Mindset{" "}
          </h3>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {" "}
            {softSkillPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-slate-800/80 transition-all group shadow-sm flex flex-col justify-between"
              >
                {" "}
                <div className="space-y-3">
                  {" "}
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 w-fit group-hover:scale-105 transition-transform">
                    {" "}
                    {pillar.icon}{" "}
                  </div>{" "}
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-[var(--hover-text)] transition-colors text-base">
                    {" "}
                    {pillar.title}{" "}
                  </h4>{" "}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {" "}
                    {pillar.desc}{" "}
                  </p>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
