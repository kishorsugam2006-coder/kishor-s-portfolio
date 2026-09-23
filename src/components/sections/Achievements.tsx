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
              className="glass-panel p-8 rounded-3xl border border-slate-200/60 dark:border-indigo-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all shadow-[0_0_15px_rgba(221,214,254,0.4)] hover:shadow-[0_0_25px_rgba(233,213,255,0.6)] dark:shadow-[0_0_15px_rgba(49,46,129,0.4)] dark:hover:shadow-[0_0_25px_rgba(76,29,79,0.6)] hover:-translate-y-1 !bg-[linear-gradient(135deg,#BFDBFE_0%,#A5F3FC_25%,#C4B5FD_50%,#D8B4FE_75%,#F9A8D4_100%)] dark:!bg-[linear-gradient(135deg,#0F172A_0%,#083344_25%,#1E1B4B_50%,#312E81_75%,#4C1D4F_100%)]"
            >
              {" "}
              <div className="flex items-start gap-4">
                {" "}
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 text-[#D97706] dark:text-[#FBBF24] flex items-center justify-center shrink-0 border border-amber-500/20 dark:border-amber-500/30 dark:shadow-[0_0_10px_rgba(251,191,36,0.2)]">
                  {" "}
                  <ShieldCheck className="w-8 h-8" />{" "}
                </div>{" "}
                <div className="space-y-1">
                  {" "}
                  <div className="flex items-center gap-2">
                    {" "}
                    <Badge variant="secondary" size="sm" className="!bg-amber-500/10 dark:!bg-amber-500/20 !border-amber-500/20 dark:!border-amber-500/30">
                      <span className="text-[#D97706] dark:text-[#FBBF24]">Silver Badge</span>
                    </Badge>{" "}
                    <span className="text-xs font-semibold text-[#334155] dark:text-[#CBD5E1]">
                      {ach.organization}
                    </span>{" "}
                  </div>{" "}
                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                    {" "}
                    {ach.title}{" "}
                  </h3>{" "}
                  <p className="text-xs sm:text-sm text-[#334155] dark:text-[#CBD5E1] leading-relaxed">
                    {" "}
                    {ach.details}{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex items-center gap-1 font-bold text-sm bg-gradient-to-r from-amber-100 to-orange-100 text-[#C2410C] border border-amber-300 dark:from-orange-900 dark:to-amber-900 dark:text-[#FBBF24] dark:border-amber-500/40 px-4 py-2 rounded-xl shrink-0 self-start sm:self-center shadow-[0_0_10px_rgba(251,191,36,0.2)] dark:shadow-[0_0_10px_rgba(251,191,36,0.3)]">
                {" "}
                <Star className="w-4 h-4 fill-[#C2410C] dark:fill-[#FBBF24]" />{" "}
                <span>NPTEL Award</span>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

