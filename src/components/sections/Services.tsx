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
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="w-6 h-6 text-sky-500" />;
      case "Layout":
        return <Layout className="w-6 h-6 text-indigo-500" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-amber-500" />;
      default:
        return <Layers className="w-6 h-6 text-emerald-500" />;
    }
  };
  return (
    <section id="services" className="py-20 md:py-28 relative">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Header */}{" "}
        <div className="flex flex-col items-center text-center mb-16">
          {" "}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            {" "}
            <Layers className="w-3.5 h-3.5" />{" "}
            <span>Services & Solutions</span>{" "}
          </div>{" "}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            {" "}
            How I Can Help Your Team{" "}
          </h2>{" "}
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base">
            {" "}
            Tailored software development, architectural design, and
            optimization services.{" "}
          </p>{" "}
        </div>{" "}
        {/* Services Grid */}{" "}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {" "}
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-panel card-glow p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 transition-all flex flex-col justify-between group shadow-md space-y-6"
            >
              {" "}
              <div className="space-y-4">
                {" "}
                {/* Icon Box */}{" "}
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                  {" "}
                  {getIcon(service.icon)}{" "}
                </div>{" "}
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-sky-500 transition-colors">
                  {" "}
                  {service.title}{" "}
                </h3>{" "}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {" "}
                  {service.shortDesc}{" "}
                </p>{" "}
                {/* Deliverables List */}{" "}
                <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                  {" "}
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Key Deliverables
                  </span>{" "}
                  <ul className="space-y-2">
                    {" "}
                    {service.deliverables.map((del, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                      >
                        {" "}
                        <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />{" "}
                        <span>{del}</span>{" "}
                      </li>
                    ))}{" "}
                  </ul>{" "}
                </div>{" "}
              </div>{" "}
              {/* Action Button */}{" "}
              <Button
                href="#contact"
                variant="outline"
                size="sm"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="w-full justify-between group-hover:bg-sky-500 group-hover:text-white dark:group-hover:text-slate-950 group- transition-colors"
              >
                {" "}
                Inquire Service{" "}
              </Button>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

