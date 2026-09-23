import React from "react";
import { Award, ShieldCheck, Star } from "lucide-react";
import { achievements } from "../../data/portfolioData";
import { Badge } from "../ui/Badge";
export const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
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
              <Award className="w-3.5 h-3.5" />{" "}
            </span>{" "}
            <span>Honors & Badges</span>{" "}
          </div>{" "}
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
            style={{ background: "linear-gradient(90deg, #2563eb 0%, #06b6d4 30%, #8b5cf6 65%, #ec4899 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}
          >
            {" "}
            Key Achievements{" "}
          </h2>{" "}
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base">
            {" "}
            Recognized academic and technical accomplishments.{" "}
          </p>{" "}
        </div>{" "}
        {/* Achievement Cards */}{" "}
        <div className="max-w-3xl mx-auto">
          {" "}
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="glass-panel card-glow p-8 rounded-3xl border border-slate-200 dark:border-indigo-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all shadow-lg hover:shadow-xl dark:shadow-[0_0_15px_rgba(79,70,229,0.15)] bg-[linear-gradient(120deg,rgba(213,233,255,0.85)_0%,rgba(213,243,244,0.85)_25%,rgba(221,213,255,0.85)_55%,rgba(241,216,240,0.85)_80%,rgba(246,220,229,0.85)_100%)] dark:bg-[linear-gradient(120deg,#0F172A_0%,#1E1B4B_50%,#312E81_100%)]"
            >
              {" "}
              <div className="flex items-start gap-4">
                {" "}
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 dark:bg-[rgba(245,158,11,0.12)] text-amber-500 dark:text-amber-400 flex items-center justify-center shrink-0 border border-transparent dark:border-[rgba(245,158,11,0.25)] dark:shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                  {" "}
                  <ShieldCheck className="w-8 h-8" />{" "}
                </div>{" "}
                <div className="space-y-1">
                  {" "}
                  <div className="flex items-center gap-2">
                    {" "}
                    <Badge variant="secondary" size="sm" className="!bg-amber-500/10 dark:!bg-amber-500/20 !border-amber-500/20 dark:!border-amber-500/30">
                      <span className="text-amber-600 dark:text-amber-400">Silver Badge</span>
                    </Badge>{" "}
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {ach.organization}
                    </span>{" "}
                  </div>{" "}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                    {" "}
                    {ach.title}{" "}
                  </h3>{" "}
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-300 leading-relaxed">
                    {" "}
                    {ach.details}{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-bold text-sm bg-amber-500/15 dark:bg-[linear-gradient(90deg,#78350F_0%,#92400E_100%)] px-4 py-2 rounded-xl border border-amber-500/30 dark:border-[rgba(251,191,36,0.45)] shrink-0 self-start sm:self-center shadow-sm dark:shadow-[0_0_10px_rgba(251,191,36,0.2)]">
                {" "}
                <Star className="w-4 h-4 fill-amber-500 dark:fill-amber-400" />{" "}
                <span>NPTEL Award</span>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

