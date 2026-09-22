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
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-slate-800 group transition-all shadow-sm flex flex-col"
            >
              {" "}
              <div className="flex items-center gap-2 text-blue-500 mb-4">
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
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 text-lg group-hover:text-[var(--hover-text)] transition-colors">
                      {cert.title}
                    </h4>{" "}
                  </a>
                ) : (
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 text-lg">
                    {cert.title}
                  </h4>
                )}{" "}
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {cert.issuer}
                </p>{" "}
                <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
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
                        className="text-blue-500 hover:underline"
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
                  variant="primary"
                  size="sm"
                  icon={<ExternalLink className="w-4 h-4" />}
                  aria-label={`View ${cert.title} certificate`}
                  className="mt-5 w-full"
                >
                  {" "}
                  View Certificate{" "}
                </Button>
              ) : (
                <p className="mt-5 text-center text-xs text-slate-500 dark:text-slate-400">
                  Certificate file is currently unavailable.
                </p>
              )}{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
