import React from "react";
interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "neutral";
  size?: "sm" | "md";
  className?: string;
}
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "neutral",
  size = "md",
  className = "",
}) => {
  const sizeClasses =
    size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-xs sm:text-sm";
  const variantClasses = {
    primary:
      "bg-[rgba(var(--accent-rgb),0.10)] text-[var(--text-accent)] border border-[rgba(var(--accent-rgb),0.24)] font-medium shadow-[0_0_18px_rgba(var(--accent-rgb),0.08)]",
    secondary:
      "bg-[rgba(var(--accent-rgb),0.10)] text-[var(--text-accent)] border border-[rgba(var(--accent-rgb),0.24)] font-medium shadow-[0_0_18px_rgba(var(--accent-rgb),0.08)]",
    outline:
      "border border-[rgba(var(--accent-rgb),0.2)] text-slate-700 dark:text-slate-200 bg-white/10 dark:bg-slate-900/20 backdrop-blur-sm",
    neutral:
      "bg-[rgba(0,0,0,0.03)] dark:bg-[rgba(255,255,255,0.04)] text-slate-700 dark:text-slate-300 border border-[rgba(0,0,0,0.10)] dark:border-[rgba(255,255,255,0.12)] shadow-none transition-all duration-200 hover:bg-[rgba(0,0,0,0.06)] dark:hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(0,0,0,0.15)] dark:hover:border-[rgba(255,255,255,0.16)] hover:text-slate-900 dark:hover:text-white",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full transition-colors ${sizeClasses} ${variantClasses[variant]} ${className}`}
    >
      {" "}
      {children}{" "}
    </span>
  );
};
