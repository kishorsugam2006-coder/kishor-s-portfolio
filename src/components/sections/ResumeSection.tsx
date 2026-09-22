import React, { useState } from "react";
import {
  FileText,
  Download,
  GraduationCap,
  Award,
  Printer,
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
              download="Kishor_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              icon={<Download className="w-4 h-4" />}
            >
              {" "}
              Download Resume (PDF){" "}
            </Button>{" "}
            <Button
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
              icon={<Printer className="w-4 h-4" />}
            >
              {" "}
              Print View{" "}
            </Button>{" "}
          </div>{" "}
        </div>{" "}
        {/* CV Preview Box */}{" "}
        {/* CV Preview Box */}{" "}
        <div className="max-w-4xl mx-auto rounded-3xl border border-[rgba(99,102,241,0.15)] shadow-[0_10px_30px_rgba(99,102,241,0.1)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.2)] overflow-hidden transition-all duration-300 hover:-translate-y-1 !bg-[linear-gradient(135deg,#D9EEFF_0%,#E4E4FF_35%,#EBDDFB_70%,#F7DDEB_100%)] hover:!bg-[linear-gradient(135deg,#cbe4ff_0%,#dadcfc_35%,#e2ceff_70%,#fad2eb_100%)]">
          {" "}
          {/* Top Bar with Tabs */}{" "}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/30 bg-white/20 flex-wrap gap-4">
            {" "}
            <div className="flex items-center gap-2">
              {" "}
              <div className="w-3 h-3 rounded-full bg-rose-400 shadow-sm" />{" "}
              <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm" />{" "}
              <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm" />{" "}
              <span className="text-xs !text-[#334155] font-mono ml-2 hidden sm:inline opacity-80">
                {" "}
                Kishor_S_Resume.pdf{" "}
              </span>{" "}
            </div>{" "}
            {/* Nav Tabs */}{" "}
            <div className="flex items-center gap-1 bg-white/40 shadow-sm border border-white/20 p-1 rounded-xl">
              {" "}
              {(["summary", "experience", "skills", "education"] as const).map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 text-xs font-bold capitalize rounded-lg transition-all ${activeTab === tab ? "!bg-[linear-gradient(90deg,#D9EEFF,#EBDDFB)] border border-white/60 !text-[#2563EB] shadow-sm" : "!text-[#334155] hover:!text-[#172033] hover:bg-white/30"}`}
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
                <div className="border-b border-white/40 pb-6">
                  {" "}
                  <h3 className="text-2xl font-bold !text-[#172033]">
                    {personalInfo.name}
                  </h3>{" "}
                  <div className="text-sm font-semibold !text-[#2563EB] mt-1">
                    {personalInfo.title}
                  </div>{" "}
                  <div className="text-xs !text-[#334155] mt-1 opacity-90">
                    {" "}
                    {personalInfo.location} • {personalInfo.email} •{" "}
                    {personalInfo.phone}{" "}
                  </div>{" "}
                </div>{" "}
                <div className="space-y-3">
                  {" "}
                  <h4 className="text-sm font-bold !text-[#1E3A5F] uppercase tracking-wider">
                    Professional Profile
                  </h4>{" "}
                  <p className="text-sm sm:text-base !text-[#334155] leading-relaxed">
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
                <h4 className="text-sm font-bold !text-[#1E3A5F] uppercase tracking-wider">
                  Internship Experience
                </h4>{" "}
                {experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="space-y-2 border-b border-white/40 pb-6 last:border-0"
                  >
                    {" "}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      {" "}
                      <h5 className="font-bold !text-[#172033] text-base">
                        {exp.role}
                      </h5>{" "}
                      <span className="text-xs font-semibold !text-[#2563EB]">
                        {exp.period}
                      </span>{" "}
                    </div>{" "}
                    <div className="text-xs font-semibold !text-[#334155] opacity-90">
                      {exp.company} • {exp.location}
                    </div>{" "}
                    <ul className="space-y-1 text-xs sm:text-sm !text-[#334155] pt-2">
                      {" "}
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          {" "}
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0 opacity-70" />{" "}
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
                <h4 className="text-sm font-bold !text-[#1E3A5F] uppercase tracking-wider">
                  Technical Skills & Achievements
                </h4>{" "}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {" "}
                  {skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/30 border border-white/40 flex items-center justify-between"
                    >
                      {" "}
                      <span className="font-bold text-xs sm:text-sm !text-[#172033]">
                        {skill.name}
                      </span>{" "}
                      <span className="text-xs !text-[#2563EB] font-semibold">
                        {skill.level}
                      </span>{" "}
                    </div>
                  ))}{" "}
                </div>{" "}
                <div className="pt-4 border-t border-white/40">
                  {" "}
                  <h4 className="text-xs font-bold !text-[#1E3A5F] uppercase tracking-wider mb-3">
                    Honors
                  </h4>{" "}
                  {achievements.map((ach) => (
                    <div
                      key={ach.id}
                      className="p-3 rounded-xl bg-white/40 border border-white/50 text-xs sm:text-sm font-medium !text-[#334155] mb-2"
                    >
                      {" "}
                      <strong className="!text-[#172033]">{ach.title}</strong> — {ach.organization}{" "}
                    </div>
                  ))}{" "}
                </div>{" "}
              </div>
            )}{" "}
            {activeTab === "education" && (
              <div className="space-y-6">
                {" "}
                <h4 className="text-sm font-bold !text-[#1E3A5F] uppercase tracking-wider">
                  Education & Certifications
                </h4>{" "}
                <div className="space-y-4">
                  {" "}
                  {education.map((edu) => (
                    <div
                      key={edu.id}
                      className="p-4 rounded-2xl bg-white/30 border border-white/40 space-y-1"
                    >
                      {" "}
                      <div className="flex items-center gap-2 font-bold !text-[#172033] text-sm">
                        {" "}
                        <GraduationCap className="w-4 h-4 text-[#2563EB]" />{" "}
                        <span>{edu.degree}</span>{" "}
                      </div>{" "}
                      <div className="text-xs !text-[#334155] opacity-90">
                        {edu.institution} • {edu.periodOrYear} (
                        {edu.scoreOrStatus})
                      </div>{" "}
                    </div>
                  ))}{" "}
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-4 rounded-2xl bg-white/30 border border-white/40 space-y-1"
                    >
                      {" "}
                      <div className="flex items-center gap-2 font-bold !text-[#172033] text-sm">
                        {" "}
                        <Award className="w-4 h-4 text-[#6D28D9]" />{" "}
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
