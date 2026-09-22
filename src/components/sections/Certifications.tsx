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
              "!bg-gradient-to-br from-[#172554] via-[#2563EB] to-[#7C3AED] hover:from-[#1e3380] hover:via-[#3b82f6] hover:to-[#8b5cf6] !shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:!shadow-[0_0_40px_rgba(37,99,235,0.6)] border-white/10 backdrop-blur-md",
              "!bg-gradient-to-br from-[#2E1065] via-[#7C3AED] to-[#DB2777] hover:from-[#3b1582] hover:via-[#8b5cf6] hover:to-[#ec4899] !shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:!shadow-[0_0_40px_rgba(124,58,237,0.6)] border-white/10 backdrop-blur-md",
              "!bg-gradient-to-br from-[#083344] via-[#0891B2] to-[#4F46E5] hover:from-[#0b4861] hover:via-[#06b6d4] hover:to-[#6366f1] !shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:!shadow-[0_0_40px_rgba(8,145,178,0.6)] border-white/10 backdrop-blur-md",
              "!bg-gradient-to-br from-[#3B0764] via-[#A855F7] to-[#2563EB] hover:from-[#4c1d95] hover:via-[#c084fc] hover:to-[#3b82f6] !shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:!shadow-[0_0_40px_rgba(168,85,247,0.6)] border-white/10 backdrop-blur-md",
              "!bg-gradient-to-br from-[#172554] via-[#4F46E5] to-[#06B6D4] hover:from-[#1e3380] hover:via-[#6366f1] hover:to-[#22d3ee] !shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:!shadow-[0_0_40px_rgba(79,70,229,0.6)] border-white/10 backdrop-blur-md"
            ];
            
            const iconColors = [
              "!text-blue-200",
              "!text-pink-200",
              "!text-cyan-200",
              "!text-purple-200",
              "!text-cyan-200"
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
                    <h4 className="font-bold !text-white text-lg transition-colors">
                      {cert.title}
                    </h4>{" "}
                  </a>
                ) : (
                  <h4 className="font-bold !text-white text-lg">
                    {cert.title}
                  </h4>
                )}{" "}
                <p className="text-sm font-semibold !text-slate-200">
                  {cert.issuer}
                </p>{" "}
                <div className="space-y-1 text-xs !text-slate-300">
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
                        className="text-blue-300 hover:text-blue-100 hover:underline"
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
                  className="mt-5 w-full justify-center !bg-gradient-to-r !from-[#111827] !to-[#312E81] hover:!from-[#1f2937] hover:!to-[#4338ca] !text-white !border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(49,46,129,0.8)] hover:-translate-y-1 transition-all duration-300"
                >
                  {" "}
                  View Certificate{" "}
                </Button>
              ) : (
                <p className="mt-5 text-center text-xs !text-slate-300">
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

