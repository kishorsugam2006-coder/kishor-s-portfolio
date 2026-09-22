import React, { useState } from "react";
import {
  FileText,
  Download,
  GraduationCap,
  Award,
} from "lucide-react";
import {
  personalInfo,
  experience,
  education,
  skills,
  certifications,
  achievements,
} from "../../data/portfolioData";
import { Button } from "../ui/Button";
export const ResumeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "summary" | "experience" | "skills" | "education"
  >("summary");
  return (
    <section id="resume" className="py-20 md:py-28 relative">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Header */}{" "}
        <div className="flex flex-col items-center text-center mb-12">
          {" "}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            {" "}
            <FileText className="w-3.5 h-3.5" />{" "}
            <span>Curriculum Vitae</span>{" "}
          </div>{" "}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            {" "}
            Interactive Resume{" "}
          </h2>{" "}
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base">
            {" "}
            Review my qualifications or download a clean print-ready PDF
            version.{" "}
          </p>{" "}
          {/* Action CTAs */}{" "}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {" "}
            <Button
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              icon={<Download className="w-4 h-4" />}
            >
              {" "}
              Download Resume (PDF){" "}
            </Button>{" "}
          </div>{" "}
        </div>{" "}
        {/* CV Preview Box */}{" "}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
          {" "}
          {/* Top Bar with Tabs */}{" "}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/50 flex-wrap gap-4">
            {" "}
            <div className="flex items-center gap-2">
              {" "}
              <div className="w-3 h-3 rounded-full bg-rose-500" />{" "}
              <div className="w-3 h-3 rounded-full bg-amber-500" />{" "}
              <div className="w-3 h-3 rounded-full bg-emerald-500" />{" "}
              <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline">
                {" "}
                Kishor_S_Resume.pdf{" "}
              </span>{" "}
            </div>{" "}
            {/* Nav Tabs */}{" "}
            <div className="flex items-center gap-1 bg-slate-200/80 dark:bg-slate-800/80 p-1 rounded-xl">
              {" "}
              {(["summary", "experience", "skills", "education"] as const).map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 text-xs font-bold capitalize rounded-lg transition-all ${activeTab === tab ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-cyan-400 shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"}`}
                  >
                    {" "}
                    {tab}{" "}
                  </button>
                ),
              )}{" "}
            </div>{" "}
          </div>{" "}
          {/* Tab Content Display */}{" "}
          <div className="p-8 sm:p-10 space-y-8">
            {" "}
            {activeTab === "summary" && (
              <div className="space-y-6">
                {" "}
                <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
                  {" "}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {personalInfo.name}
                  </h3>{" "}
                  <div className="text-sm font-semibold text-blue-600 dark:text-cyan-400 mt-1">
                    {personalInfo.title}
                  </div>{" "}
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {" "}
                    {personalInfo.location} • {personalInfo.email} •{" "}
                    {personalInfo.phone}{" "}
                  </div>{" "}
                </div>{" "}
                <div className="space-y-3">
                  {" "}
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                    Professional Profile
                  </h4>{" "}
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    {" "}
                    Motivated and adaptable Aspiring IT Professional skilled in
                    web design, software development, programming, frontend
                    technologies (HTML, CSS, JavaScript), backend technologies
                    (PHP, Java), database systems (SQL, MySQL), and data
                    analysis. Experienced full-stack intern at Movicloud Labs
                    Private Limited.{" "}
                  </p>{" "}
                </div>{" "}
              </div>
            )}{" "}
            {activeTab === "experience" && (
              <div className="space-y-6">
                {" "}
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                  Internship Experience
                </h4>{" "}
                {experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="space-y-2 border-b border-slate-200 dark:border-slate-800/80 pb-6 last:border-0"
                  >
                    {" "}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      {" "}
                      <h5 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                        {exp.role}
                      </h5>{" "}
                      <span className="text-xs font-semibold text-blue-600 dark:text-cyan-400">
                        {exp.period}
                      </span>{" "}
                    </div>{" "}
                    <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      {exp.company} • {exp.location}
                    </div>{" "}
                    <ul className="space-y-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pt-2">
                      {" "}
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          {" "}
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />{" "}
                          <span>{item}</span>{" "}
                        </li>
                      ))}{" "}
                    </ul>{" "}
                  </div>
                ))}{" "}
              </div>
            )}{" "}
            {activeTab === "skills" && (
              <div className="space-y-6">
                {" "}
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                  Technical Skills & Achievements
                </h4>{" "}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {" "}
                  {skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 flex items-center justify-between"
                    >
                      {" "}
                      <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>{" "}
                      <span className="text-xs text-blue-600 dark:text-cyan-400 font-semibold">
                        {skill.level}
                      </span>{" "}
                    </div>
                  ))}{" "}
                </div>{" "}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  {" "}
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Honors
                  </h4>{" "}
                  {achievements.map((ach) => (
                    <div
                      key={ach.id}
                      className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200"
                    >
                      {" "}
                      <strong>{ach.title}</strong> — {ach.organization}{" "}
                    </div>
                  ))}{" "}
                </div>{" "}
              </div>
            )}{" "}
            {activeTab === "education" && (
              <div className="space-y-6">
                {" "}
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                  Education & Certifications
                </h4>{" "}
                <div className="space-y-4">
                  {" "}
                  {education.map((edu) => (
                    <div
                      key={edu.id}
                      className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/60 space-y-1"
                    >
                      {" "}
                      <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100 text-sm">
                        {" "}
                        <GraduationCap className="w-4 h-4 text-blue-500" />{" "}
                        <span>{edu.degree}</span>{" "}
                      </div>{" "}
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {edu.institution} • {edu.periodOrYear} (
                        {edu.scoreOrStatus})
                      </div>{" "}
                    </div>
                  ))}{" "}
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/60 space-y-1"
                    >
                      {" "}
                      <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100 text-sm">
                        {" "}
                        <Award className="w-4 h-4 text-amber-500" />{" "}
                        <span>{cert.title}</span>{" "}
                      </div>{" "}
                    </div>
                  ))}{" "}
                </div>{" "}
              </div>
            )}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
