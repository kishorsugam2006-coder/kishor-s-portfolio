import React from "react";
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle,
  ExternalLink,
  FileCheck2,
  Folder,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { experience, internshipCertificate } from "../../data/portfolioData";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-900/30"
    >
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Header */}{" "}
        <div className="flex flex-col items-center text-center mb-16">
          {" "}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            {" "}
            <span className="glass-icon flex items-center justify-center w-6 h-6 rounded-full">
              {" "}
              <Briefcase className="w-3.5 h-3.5" />{" "}
            </span>{" "}
            <span>Career History</span>{" "}
          </div>{" "}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {" "}
            Professional Experience{" "}
          </h2>{" "}
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base">
            {" "}
            Track record of software engineering roles, team leadership, and
            high-impact deliveries.{" "}
          </p>{" "}
        </div>{" "}
        {/* Timeline List Container */}{" "}
        <div
          className={`relative mx-auto ${experience.length === 1 ? "max-w-5xl" : "max-w-4xl"}`}
        >
          {" "}
          {/* Vertical central line */}{" "}
          <div
            className={`absolute lg:left-[32.6%] left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 ${experience.length === 1 ? "" : "hidden sm:block"}`}
          />{" "}
          <div className="space-y-12">
            {" "}
            {experience.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex items-center ${experience.length === 1 ? "justify-center items-start flex-col pt-12 gap-6 lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] lg:gap-7 lg:items-stretch" : `flex-col sm:flex-row gap-8 ${isEven ? "sm:flex-row-reverse" : ""}`}`}
                >
                  {" "}
                  {/* Timeline Dot Icon */}{" "}
                  <div
                    className={`absolute lg:left-[32.6%] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-sky-500 text-white items-center justify-center shadow-lg shadow-sky-500/30 ring-4 ring-white dark:ring-slate-900 z-10 ${experience.length === 1 ? "top-0 flex" : "hidden sm:flex"}`}
                  >
                    {" "}
                    <Briefcase className="w-4 h-4" />{" "}
                  </div>{" "}
                  {/* Experience Card */}{" "}
                  <div
                    className={`w-full glass-panel card-glow p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 transition-all shadow-md space-y-4 relative z-10 ${experience.length === 1 ? "lg:h-full" : "sm:w-[calc(50%-2.5rem)]"}`}
                  >
                    {" "}
                    {/* Header */}{" "}
                    <div className="space-y-1">
                      {" "}
                      <div className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                        Professional Experience
                      </div>{" "}
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        {" "}
                        <span className="text-xs font-bold text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
                          {" "}
                          <Calendar className="w-3.5 h-3.5" />{" "}
                          <span>{item.period}</span>{" "}
                        </span>{" "}
                        <Badge variant="neutral" size="sm">
                          {item.type}
                        </Badge>{" "}
                      </div>{" "}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        {" "}
                        {item.role}{" "}
                      </h3>{" "}
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm font-semibold">
                        {" "}
                        <span>{item.company}</span>{" "}
                        {item.companyUrl && (
                          <a
                            href={item.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-sky-500 transition-colors"
                          >
                            {" "}
                            <ExternalLink className="w-3.5 h-3.5" />{" "}
                          </a>
                        )}{" "}
                        <span>•</span>{" "}
                        <span className="flex items-center gap-1 text-xs font-normal">
                          {" "}
                          <MapPin className="w-3 h-3 text-slate-400" />{" "}
                          {item.location}{" "}
                        </span>{" "}
                      </div>{" "}
                    </div>{" "}
                    {/* Responsibilities */}{" "}
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {" "}
                      {item.description.map((desc, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          {" "}
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />{" "}
                          <span>{desc}</span>{" "}
                        </li>
                      ))}{" "}
                    </ul>{" "}
                    {/* Key Achievements */}{" "}
                    {item.achievements && item.achievements.length > 0 && (
                      <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                        {" "}
                        <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                          {" "}
                          Key Accomplishments{" "}
                        </div>{" "}
                        {item.achievements.map((ach, aIdx) => (
                          <div
                            key={aIdx}
                            className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300"
                          >
                            {" "}
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />{" "}
                            <span>{ach}</span>{" "}
                          </div>
                        ))}{" "}
                      </div>
                    )}{" "}
                    {/* Tech Badges */}{" "}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {" "}
                      {item.technologies.map((tech, tIdx) => (
                        <Badge key={tIdx} variant="neutral" size="sm">
                          {" "}
                          {tech}{" "}
                        </Badge>
                      ))}{" "}
                    </div>{" "}
                  </div>{" "}
                  {experience.length === 1 && (
                    <aside className="w-full glass-panel card-glow p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800/80 shadow-md flex flex-col gap-5 relative z-10 self-start lg:h-full">
                      {" "}
                      <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400">
                        {" "}
                        <Folder className="w-5 h-5" />{" "}
                        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                          Project &amp; Academic Details
                        </h3>{" "}
                      </div>{" "}
                      <div className="space-y-4">
                        {" "}
                        {item.project && (
                          <div className="flex items-start gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
                            {" "}
                            <Folder className="w-4 h-4 mt-0.5 text-sky-500 shrink-0" />{" "}
                            <div>
                              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Project
                              </div>
                              <div className="font-semibold text-slate-900 dark:text-slate-100">
                                {item.project}
                              </div>
                            </div>{" "}
                          </div>
                        )}{" "}
                        {item.internshipId && (
                          <div className="flex items-start gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
                            {" "}
                            <FileCheck2 className="w-4 h-4 mt-0.5 text-sky-500 shrink-0" />{" "}
                            <div>
                              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Internship ID
                              </div>
                              <div className="font-semibold text-slate-900 dark:text-slate-100">
                                {item.internshipId}
                              </div>
                            </div>{" "}
                          </div>
                        )}{" "}
                        {item.year && (
                          <div className="flex items-start gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
                            {" "}
                            <GraduationCap className="w-4 h-4 mt-0.5 text-sky-500 shrink-0" />{" "}
                            <div>
                              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Academic Year
                              </div>
                              <div className="font-semibold text-slate-900 dark:text-slate-100">
                                {item.year}
                              </div>
                            </div>{" "}
                          </div>
                        )}{" "}
                        {item.college && (
                          <div className="flex items-start gap-3">
                            {" "}
                            <Building2 className="w-4 h-4 mt-0.5 text-sky-500 shrink-0" />{" "}
                            <div>
                              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                College
                              </div>
                              <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm leading-relaxed">
                                {item.college}
                              </div>
                            </div>{" "}
                          </div>
                        )}{" "}
                      </div>{" "}
                      {internshipCertificate.file && (
                        <Button
                          href={internshipCertificate.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outline"
                          size="sm"
                          icon={<FileCheck2 className="w-4 h-4" />}
                          aria-label="View Kishor S Internship Certificate"
                          className="mt-auto self-start"
                        >
                          {" "}
                          View Internship Certificate{" "}
                          <ExternalLink className="w-3.5 h-3.5" />{" "}
                        </Button>
                      )}{" "}
                    </aside>
                  )}{" "}
                </div>
              );
            })}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

