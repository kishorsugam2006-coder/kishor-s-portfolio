import React from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { education } from "../../data/portfolioData";
import { Badge } from "../ui/Badge";
export const Education: React.FC = () => {
  const getEducationGlowStyle = (idx: number) => {
    const glows = [
      // CARD 1: soft cyan/blue + lavender
      "linear-gradient(135deg, rgba(6,182,212,0.20) 0%, rgba(59,130,246,0.18) 50%, rgba(139,92,246,0.16) 100%)",
      // CARD 2: lavender/purple + soft pink
      "linear-gradient(135deg, rgba(139,92,246,0.20) 0%, rgba(168,85,247,0.18) 50%, rgba(236,72,153,0.16) 100%)",
      // CARD 3: mint/green + cyan/blue
      "linear-gradient(135deg, rgba(16,185,129,0.16) 0%, rgba(6,182,212,0.18) 50%, rgba(59,130,246,0.16) 100%)"
    ];
    return glows[idx % glows.length];
  };

  return (
    <section id="education" className="py-20 md:py-28 relative">
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
              <GraduationCap className="w-3.5 h-3.5" />{" "}
            </span>{" "}
            <span>Academic Background</span>{" "}
          </div>{" "}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight education-heading-gradient">
            {" "}
            Education Journey{" "}
          </h2>{" "}
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base">
            {" "}
            Academic qualifications and ongoing technical education.{" "}
          </p>{" "}
        </div>{" "}
        {/* Education Cards Grid */}{" "}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {" "}
          {education.map((edu, idx) => (
            <div
              key={edu.id}
              className="glass-panel card-glow relative overflow-hidden p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 transition-all flex flex-col justify-between group shadow-md space-y-6"
            >
              {" "}
              <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-90 group-hover:opacity-100"
                style={{ background: getEducationGlowStyle(idx) }}
              />
              <div className="relative z-10 space-y-4">
                {" "}
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {" "}
                  <GraduationCap className="w-6 h-6" />{" "}
                </div>{" "}
                <div className="space-y-1">
                  {" "}
                  <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                    {" "}
                    <Calendar className="w-3.5 h-3.5" /> {edu.periodOrYear}{" "}
                  </span>{" "}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-[var(--hover-text)] transition-colors">
                    {" "}
                    {edu.degree}{" "}
                  </h3>{" "}
                </div>{" "}
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {" "}
                  {edu.institution}{" "}
                </p>{" "}
              </div>{" "}
              <div className="relative z-10 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                {" "}
                <Badge variant="primary" size="md">
                  {" "}
                  {edu.scoreOrStatus}{" "}
                </Badge>{" "}
                <Award className="w-4 h-4 text-slate-400" />{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

