import React, { useState } from "react";
import { Wrench, Search, Code, Server, Database, Layout } from "lucide-react";
import { skills } from "../../data/portfolioData";
import { Badge } from "../ui/Badge";
export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const categories = [
    "All",
    "Programming",
    "Web",
    "Database",
    "Tools & Platforms",
  ];
  const filteredSkills = skills.filter((skill) => {
    const matchesCategory =
      selectedCategory === "All" || skill.category === selectedCategory;
    const matchesSearch = skill.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Programming":
        return <Code className="w-4 h-4 text-blue-500" />;
      case "Web":
        return <Server className="w-4 h-4 text-cyan-500" />;
      case "Database":
        return <Database className="w-4 h-4 text-emerald-500" />;
      case "Tools & Platforms":
        return <Layout className="w-4 h-4 text-purple-500" />;
      default:
        return <Wrench className="w-4 h-4 text-slate-500" />;
    }
  };
  const getLevelVariant = (
    level: string,
  ): "primary" | "secondary" | "outline" | "neutral" => {
    if (level === "Tool") {
      return "neutral";
    }
    return "neutral";
  };
  return (
    <section
      id="skills"
      className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-900/30"
    >
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Header */}{" "}
        <div className="flex flex-col items-center text-center mb-12">
          {" "}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            {" "}
            <Wrench className="w-3.5 h-3.5" />{" "}
            <span>Technical Capabilities</span>{" "}
          </div>{" "}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight skills-heading-gradient">
            {" "}
            Technical Skills & Tools{" "}
          </h2>{" "}
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base">
            {" "}
            Categorized technical stack, programming languages, web
            technologies, and design tools.{" "}
          </p>{" "}
        </div>{" "}
        {/* Filter & Search Bar */}{" "}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          {" "}
          {/* Category Tabs */}{" "}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 bg-slate-200/60 dark:bg-slate-800/60 p-1.5 rounded-2xl border border-slate-300/60 dark:border-slate-700/60 w-full md:w-auto">
            {" "}
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${selectedCategory === cat ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-cyan-400 shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"}`}
              >
                {" "}
                {cat}{" "}
              </button>
            ))}{" "}
          </div>{" "}
          {/* Search Box */}{" "}
          <div className="relative w-full md:w-72 md:ml-auto">
            {" "}
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />{" "}
            <input
              type="text"
              placeholder="Search skills (e.g. Java, HTML)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />{" "}
          </div>{" "}
        </div>{" "}
        {/* Skills Cards Grid */}{" "}
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {" "}
            {filteredSkills.map((skill, idx) => (
              <div
                key={idx}
                className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 transition-all flex items-center justify-between group shadow-sm"
              >
                {" "}
                <div className="flex items-center gap-3">
                  {" "}
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:scale-105 transition-transform">
                    {" "}
                    {getCategoryIcon(skill.category)}{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm group-hover:text-[var(--hover-text)] transition-colors">
                      {" "}
                      {skill.name}{" "}
                    </h3>{" "}
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {" "}
                      {skill.category}{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <Badge variant={getLevelVariant(skill.level)} size="sm">
                  {" "}
                  {skill.level}{" "}
                </Badge>{" "}
              </div>
            ))}{" "}
          </div>
        ) : (
          <div className="text-center py-12 glass-panel rounded-3xl p-8 border border-slate-200 dark:border-slate-800">
            {" "}
            <p className="text-slate-500 dark:text-slate-400">
              {" "}
              No skills found matching "
              <strong className="text-slate-700 dark:text-slate-300">
                {searchQuery}
              </strong>
              ".{" "}
            </p>{" "}
          </div>
        )}{" "}
      </div>{" "}
    </section>
  );
};
