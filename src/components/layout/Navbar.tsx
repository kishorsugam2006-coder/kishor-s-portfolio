import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { professionalPositioning } from "../../data/portfolioData";
const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
export const Navbar: React.FC = () => {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 200) {
        setActiveSection("hero");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "py-3 glass-panel shadow-lg shadow-slate-900/10" : "py-5 bg-transparent"}`}
    >
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {" "}
        {/* Brand Logo */}{" "}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
        >
          {" "}
            <img
              src="/assets/sk-logo-transparent.png"
              alt="SK Logo"
              className="navbar-logo w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain transition-all duration-300"
            />
          <div className="flex flex-col ml-1">
            {" "}
            <span className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-[var(--hover-text)] transition-colors">
              {" "}
              KISHOR S{" "}
            </span>{" "}
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {" "}
              {professionalPositioning.primaryRole}{" "}
            </span>{" "}
          </div>{" "}
        </a>{" "}
        {/* Desktop Navigation Links */}{" "}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/80 backdrop-blur-md">
          {" "}
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all overflow-hidden ${
                  isActive
                    ? 'bg-[rgba(var(--hover-rgb),0.15)] text-[var(--hover-text)] shadow-[0_0_20px_var(--hover-glow)] border border-[var(--hover-border)]'
                    : 'text-slate-600 dark:text-slate-400 hover:text-[var(--hover-text)] hover:shadow-[0_0_18px_var(--hover-glow)] hover:border-[rgba(var(--hover-rgb),0.5)] border border-transparent'
                }`}
              >
                {" "}
                {item.label}{" "}
              </a>
            );
          })}{" "}
        </nav>{" "}
        {/* Controls */}{" "}
        <div className="flex items-center gap-2 sm:gap-3">
          {" "}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm"
          >
            {" "}
            {resolvedTheme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}{" "}
          </button>{" "}
          <a
            href="/assets/resume/Kishor_S_Resume.pdf"
            download="Kishor_S_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white dark:bg-blue-600 dark:hover:bg-blue-500 dark:text-white transition-all active:scale-95 shadow-sm"
          >
            {" "}
            <FileText className="w-4 h-4" /> <span>Resume</span>{" "}
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />{" "}
          </a>{" "}
          {/* Mobile menu toggle */}{" "}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300"
          >
            {" "}
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      {/* Mobile Drawer */}{" "}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] z-50 glass-panel border-b border-slate-200 dark:border-slate-800 p-6 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          {" "}
          <nav className="flex flex-col gap-3">
            {" "}
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium rounded-xl text-slate-700 dark:text-slate-300 hover:bg-[rgba(var(--hover-rgb),0.1)] hover:text-[var(--hover-text)] transition-colors border border-transparent hover:border-[rgba(var(--hover-rgb),0.4)] hover:shadow-[0_0_20px_var(--hover-glow)]"
              >
                {" "}
                {item.label}{" "}
              </a>
            ))}{" "}
            <a
              href="/assets/resume/Kishor_S_Resume.pdf"
              download="Kishor_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md"
            >
              {" "}
              <FileText className="w-4 h-4" /> <span>Download Resume</span>{" "}
            </a>{" "}
          </nav>{" "}
        </div>
      )}{" "}
    </header>
  );
};
