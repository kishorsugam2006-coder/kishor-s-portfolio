import React from "react";
import {
  Layers,
  Code,
  Layout,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { services } from "../../data/portfolioData";
import { Button } from "../ui/Button";

export const Services: React.FC = () => {
  const getIcon = (iconName: string, index: number) => {
    const iconColors = [
      "text-blue-600 dark:text-blue-400",
      "text-violet-600 dark:text-violet-400",
      "text-cyan-600 dark:text-cyan-400"
    ];
    const colorClass = iconColors[index % 3];

    switch (iconName) {
      case "Code":
        return <Code className={`w-6 h-6 ${colorClass}`} />;
      case "Layout":
        return <Layout className={`w-6 h-6 ${colorClass}`} />;
      case "Zap":
        return <Zap className={`w-6 h-6 ${colorClass}`} />;
      default:
        return <Layers className={`w-6 h-6 ${colorClass}`} />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Services & Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-500 via-pink-500 to-cyan-500 dark:from-blue-400 dark:via-violet-400 dark:via-pink-400 dark:to-cyan-400 tracking-tight">
            How I Can Help Your Team
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base">
            Tailored software development, architectural design, and
            optimization services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const cardGradients = [
              "bg-gradient-to-br from-blue-200/80 via-violet-200/80 to-cyan-200/80 dark:from-blue-900/60 dark:via-violet-900/60 dark:to-cyan-900/60 shadow-[0_0_30px_rgba(59,130,246,0.3)] dark:shadow-[0_0_30px_rgba(59,130,246,0.2)] border-blue-300/30 dark:border-blue-700/30",
              "bg-gradient-to-br from-violet-200/80 via-pink-200/80 to-blue-200/80 dark:from-violet-900/60 dark:via-pink-900/60 dark:to-blue-900/60 shadow-[0_0_30px_rgba(139,92,246,0.3)] dark:shadow-[0_0_30px_rgba(139,92,246,0.2)] border-violet-300/30 dark:border-violet-700/30",
              "bg-gradient-to-br from-cyan-200/80 via-blue-200/80 to-violet-200/80 dark:from-cyan-900/60 dark:via-blue-900/60 dark:to-violet-900/60 shadow-[0_0_30px_rgba(6,182,212,0.3)] dark:shadow-[0_0_30px_rgba(6,182,212,0.2)] border-cyan-300/30 dark:border-cyan-700/30"
            ];
            
            const checkColors = [
              "text-blue-600 dark:text-blue-400",
              "text-violet-600 dark:text-violet-400",
              "text-cyan-600 dark:text-cyan-400"
            ];

            const glowClass = cardGradients[index % 3];
            const checkColor = checkColors[index % 3];

            return (
              <div
                key={service.id}
                className={`glass-panel p-8 rounded-3xl border transition-all flex flex-col justify-between group space-y-6 ${glowClass}`}
              >
                <div className="space-y-4">
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-white/60 dark:bg-slate-800/60 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                    {getIcon(service.icon, index)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 pt-2 border-t border-slate-300/50 dark:border-slate-600/50">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Key Deliverables
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.map((del, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium"
                        >
                          <CheckCircle2 className={`w-4 h-4 shrink-0 ${checkColor}`} />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  href="#contact"
                  variant="ghost"
                  size="sm"
                  icon={<ArrowRight className="w-4 h-4 text-white" />}
                  iconPosition="right"
                  className="w-full justify-between !bg-gradient-to-r !from-blue-900 !via-violet-900 !to-purple-900 hover:!from-blue-800 hover:!via-violet-800 hover:!to-purple-800 !text-white !border-0 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(139,92,246,0.8)] hover:-translate-y-1 transition-all duration-300 dark:!from-blue-950 dark:!via-violet-950 dark:!to-purple-950 dark:hover:!from-blue-900 dark:hover:!via-violet-900 dark:hover:!to-purple-900"
                >
                  Inquire Service
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
