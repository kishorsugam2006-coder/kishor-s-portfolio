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
      "!text-blue-200",
      "!text-pink-200",
      "!text-cyan-200"
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 dark:from-blue-400 dark:via-violet-400 dark:to-purple-400 tracking-tight drop-shadow-[0_0_15px_rgba(139,92,246,0.3)] dark:drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
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
              "!bg-gradient-to-br from-[#172554] via-[#2563EB] to-[#6D28D9] hover:from-[#1e3380] hover:via-[#3b82f6] hover:to-[#7c3aed] !shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:!shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-1.5 border-white/10 backdrop-blur-md",
              "!bg-gradient-to-br from-[#2E1065] via-[#7C3AED] to-[#DB2777] hover:from-[#3b1582] hover:via-[#8b5cf6] hover:to-[#ec4899] !shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:!shadow-[0_0_40px_rgba(124,58,237,0.6)] hover:-translate-y-1.5 border-white/10 backdrop-blur-md",
              "!bg-gradient-to-br from-[#083344] via-[#0891B2] to-[#4F46E5] hover:from-[#0b4861] hover:via-[#06b6d4] hover:to-[#6366f1] !shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:!shadow-[0_0_40px_rgba(8,145,178,0.6)] hover:-translate-y-1.5 border-white/10 backdrop-blur-md"
            ];
            
            const checkColors = [
              "!text-blue-200",
              "!text-pink-200",
              "!text-cyan-200"
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
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                    {getIcon(service.icon, index)}
                  </div>
                  <h3 className="text-xl font-bold !text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm !text-slate-200 leading-relaxed font-medium">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 pt-2 border-t border-white/20">
                    <span className="text-xs font-bold !text-slate-300 uppercase tracking-wider">
                      Key Deliverables
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.map((del, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-center gap-2 text-xs sm:text-sm !text-slate-200 font-medium"
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
                  className="w-full justify-between !bg-gradient-to-r !from-[#0B1120] !via-[#172033] !to-[#1e1b4b] hover:!from-[#0f172a] hover:!via-[#1e293b] hover:!to-[#312e81] !text-white !border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:-translate-y-1 transition-all duration-300"
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
