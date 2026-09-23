import React from "react";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { certifications } from "../../data/portfolioData";
import { Button } from "../ui/Button";
export const Certifications: React.FC = () => {
  return (
    <section className="py-16 relative border-y border-slate-200 dark:border-slate-800/80">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Header */}{" "}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          {" "}
          <div className="flex items-center gap-3">
            {" "}
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
              {" "}
              <ShieldCheck className="w-5 h-5" />{" "}
            </div>{" "}
            <div>
              {" "}
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                {" "}
                Certifications{" "}
              </h3>{" "}
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {" "}
                Professional certifications and continuous learning{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Cards Grid */}{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {" "}
          {certifications.map((cert, index) => {
            const cardGradients = [
              "!bg-[linear-gradient(135deg,#BFDBFE_0%,#A5F3FC_50%,#C4B5FD_100%)] dark:!bg-[linear-gradient(135deg,#0F172A_0%,#083344_50%,#312E81_100%)] hover:shadow-[0_0_20px_rgba(191,219,254,0.4)] dark:hover:shadow-[0_0_25px_rgba(15,23,42,0.6)] !border-slate-200/50 dark:!border-slate-700/50",
              "!bg-[linear-gradient(135deg,#C4B5FD_0%,#D8B4FE_50%,#F9A8D4_100%)] dark:!bg-[linear-gradient(135deg,#1E1B4B_0%,#312E81_50%,#4C1D4F_100%)] hover:shadow-[0_0_20px_rgba(196,181,253,0.4)] dark:hover:shadow-[0_0_25px_rgba(30,27,75,0.6)] !border-slate-200/50 dark:!border-slate-700/50",
              "!bg-[linear-gradient(135deg,#A5F3FC_0%,#BFDBFE_50%,#C4B5FD_100%)] dark:!bg-[linear-gradient(135deg,#083344_0%,#172554_50%,#312E81_100%)] hover:shadow-[0_0_20px_rgba(165,243,252,0.4)] dark:hover:shadow-[0_0_25px_rgba(8,51,68,0.6)] !border-slate-200/50 dark:!border-slate-700/50",
              "!bg-[linear-gradient(135deg,#F9A8D4_0%,#E9D5FF_50%,#C4B5FD_100%)] dark:!bg-[linear-gradient(135deg,#4C1D4F_0%,#3B0764_50%,#312E81_100%)] hover:shadow-[0_0_20px_rgba(249,168,212,0.4)] dark:hover:shadow-[0_0_25px_rgba(76,29,79,0.6)] !border-slate-200/50 dark:!border-slate-700/50",
              "!bg-[linear-gradient(135deg,#BFDBFE_0%,#DDD6FE_50%,#A5F3FC_100%)] dark:!bg-[linear-gradient(135deg,#0F172A_0%,#312E81_50%,#083344_100%)] hover:shadow-[0_0_20px_rgba(191,219,254,0.4)] dark:hover:shadow-[0_0_25px_rgba(15,23,42,0.6)] !border-slate-200/50 dark:!border-slate-700/50"
            ];
            
            const iconColors = [
              "!text-[#3B82F6] dark:!text-[#60A5FA]",
              "!text-[#8B5CF6] dark:!text-[#A78BFA]",
              "!text-[#06B6D4] dark:!text-[#22D3EE]",
              "!text-[#EC4899] dark:!text-[#F472B6]",
              "!text-[#6366F1] dark:!text-[#818CF8]"
            ];

            const glowClass = cardGradients[index % 5];
            const iconColor = iconColors[index % 5];

            return (
            <div
              key={cert.id}
              className={`glass-panel p-5 rounded-2xl border transition-all shadow-sm flex flex-col group hover:-translate-y-1.5 ${glowClass}`}
            >
              {" "}
              <div className={`flex items-center gap-2 mb-4 ${iconColor}`}>
                {" "}
                <Award className="w-5 h-5 shrink-0" />{" "}
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Certification
                </span>{" "}
              </div>{" "}
              <div className="flex-1 space-y-3">
                {" "}
                {cert.file ? (
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${cert.title} certificate`}
                    className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg"
                  >
                    {" "}
                    <h4 className="font-bold !text-[#0F172A] dark:!text-[#F8FAFC] text-lg transition-colors">
                      {cert.title}
                    </h4>{" "}
                  </a>
                ) : (
                  <h4 className="font-bold !text-[#0F172A] dark:!text-[#F8FAFC] text-lg">
                    {cert.title}
                  </h4>
                )}{" "}
                <p className="text-sm font-semibold !text-[#334155] dark:!text-[#E2E8F0]">
                  {cert.issuer}
                </p>{" "}
                <div className="space-y-1 text-xs !text-[#475569] dark:!text-[#CBD5E1]">
                  {" "}
                  {cert.period && <p>{cert.period}</p>}{" "}
                  {cert.courseDuration && <p>{cert.courseDuration}</p>}{" "}
                  {cert.achievement && <p>Achievement: {cert.achievement}</p>}{" "}
                  {cert.score && <p>Score: {cert.score}</p>}{" "}
                  {cert.credits && <p>{cert.credits}</p>}{" "}
                  {cert.certificateNumber && (
                    <p>Certificate number: {cert.certificateNumber}</p>
                  )}{" "}
                  {cert.recipient && <p>Recipient: {cert.recipient}</p>}{" "}
                  {cert.validUntil && <p>Valid until: {cert.validUntil}</p>}{" "}
                  {cert.verificationUrl && (
                    <p>
                      {" "}
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline"
                      >
                        {" "}
                        Verify Credential{" "}
                      </a>{" "}
                    </p>
                  )}{" "}
                  {cert.role && <p>{cert.role}</p>}{" "}
                  {cert.project && <p>Project: {cert.project}</p>}{" "}
                  {cert.internshipId && (
                    <p>Internship ID: {cert.internshipId}</p>
                  )}{" "}
                </div>{" "}
              </div>{" "}
              {cert.file ? (
                <Button
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  size="sm"
                  icon={<ExternalLink className="w-4 h-4 text-white" />}
                  aria-label={`View ${cert.title} certificate`}
                  className="mt-5 w-full justify-center !bg-gradient-to-r !from-[#2563EB] !to-[#6D28D9] hover:!from-[#1d4ed8] hover:!to-[#5b21b6] !text-white !border-0 shadow-[0_4px_10px_rgba(37,99,235,0.2)] hover:shadow-[0_4px_15px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  {" "}
                  View Certificate{" "}
                </Button>
              ) : (
                <p className="mt-5 text-center text-xs !text-[#475569] dark:!text-[#CBD5E1]">
                  Certificate file is currently unavailable.
                </p>
              )}{" "}
            </div>
            );
          })}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

