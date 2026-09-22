import React, { useEffect } from "react";
import {
  personalInfo,
  experience,
  education,
  skills,
  achievements,
  certifications,
  projects,
} from "../data/portfolioData";

export const ResumePrint: React.FC = () => {
  useEffect(() => {
    // Only automatically print once
    const timer = setTimeout(() => {
      window.print();
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white text-black min-h-screen font-sans p-8 print:p-0 max-w-4xl mx-auto">
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 12mm;
          }
          body {
            background: #fff;
            color: #000;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
        .print-btn-container {
          text-align: center;
          margin-bottom: 2rem;
        }
        @media print {
          .print-btn-container {
            display: none !important;
          }
        }
      `}</style>

      <div className="print-btn-container">
        <button
          onClick={() => window.print()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold shadow hover:bg-blue-700"
        >
          Print Resume
        </button>
      </div>

      <header className="border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-4xl font-extrabold uppercase tracking-tight text-gray-900">
          {personalInfo.name}
        </h1>
        <h2 className="text-xl font-semibold text-blue-700 mt-1">
          {personalInfo.title}
        </h2>
        <div className="text-sm text-gray-600 mt-2 flex flex-wrap gap-2">
          <span>{personalInfo.location}</span>
          <span>•</span>
          <span>{personalInfo.email}</span>
          <span>•</span>
          <span>{personalInfo.phone}</span>
        </div>
      </header>

      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-bold text-gray-800 uppercase tracking-widest border-b border-gray-300 pb-1 mb-3">
            Professional Profile
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Motivated and adaptable Aspiring IT Professional skilled in web
            design, software development, programming, frontend technologies
            (HTML, CSS, JavaScript), backend technologies (PHP, Java), database
            systems (SQL, MySQL), and data analysis.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold text-gray-800 uppercase tracking-widest border-b border-gray-300 pb-1 mb-3">
            Professional Experience
          </h3>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-gray-900">{exp.role}</h4>
                  <span className="text-sm font-semibold text-gray-600">
                    {exp.period}
                  </span>
                </div>
                <div className="text-sm font-semibold text-blue-700 mb-1">
                  {exp.company} — {exp.location}
                </div>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-1">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-bold text-gray-800 uppercase tracking-widest border-b border-gray-300 pb-1 mb-3">
            Key Projects
          </h3>
          <div className="space-y-3">
            {projects.slice(0, 3).map((proj) => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-gray-900">{proj.title}</h4>
                  <span className="text-xs font-semibold text-gray-500">
                    {proj.date}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{proj.tagline}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Tech: {proj.technologies.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-bold text-gray-800 uppercase tracking-widest border-b border-gray-300 pb-1 mb-3">
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-2 text-sm text-gray-700">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 border border-gray-200 rounded font-medium"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-bold text-gray-800 uppercase tracking-widest border-b border-gray-300 pb-1 mb-3">
            Education
          </h3>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between">
                <div>
                  <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                  <div className="text-sm text-gray-700">{edu.institution}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-600">
                    {edu.periodOrYear}
                  </div>
                  <div className="text-sm text-gray-600">{edu.scoreOrStatus}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="break-inside-avoid">
          <h3 className="text-lg font-bold text-gray-800 uppercase tracking-widest border-b border-gray-300 pb-1 mb-3">
            Achievements & Certifications
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-1">
            {achievements.map((ach) => (
              <li key={ach.id}>
                <span className="font-bold">{ach.title}</span> —{" "}
                {ach.organization}
              </li>
            ))}
            {certifications.map((cert) => (
              <li key={cert.id}>
                <span className="font-bold">{cert.title}</span> — {cert.issuer}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
