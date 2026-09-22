import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "explosive";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
}
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  children,
  className = "",
  href,
  target,
  rel,
  download,
  "aria-label": ariaLabel,
  title,
  ...props
}) => {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs font-medium rounded-lg",
    md: "px-4 py-2 text-sm font-medium rounded-xl",
    lg: "px-6 py-3 text-base font-semibold rounded-xl",
  };
  const variantClasses = {
    primary:
      "bg-[var(--accent-primary)] text-slate-950 dark:text-slate-950 hover:brightness-110 shadow-[0_0_0_1px_rgba(var(--accent-rgb),0.18),0_12px_24px_rgba(var(--accent-rgb),0.22)] hover:shadow-[0_0_0_1px_var(--hover-border),0_0_30px_var(--hover-glow)] font-semibold transition-all",
    secondary:
      "bg-[var(--accent-secondary)]/90 text-white hover:brightness-110 shadow-[0_0_0_1px_rgba(var(--accent-rgb),0.18),0_12px_24px_rgba(var(--accent-rgb),0.18)] hover:shadow-[0_0_0_1px_var(--hover-border),0_0_30px_var(--hover-glow)] font-semibold transition-all",
    outline:
      "border border-[rgba(var(--accent-rgb),0.22)] hover:border-[var(--hover-border)] bg-white/10 dark:bg-slate-900/20 hover:bg-[rgba(var(--hover-rgb),0.08)] hover:shadow-[0_0_25px_var(--hover-glow)] text-slate-800 dark:text-slate-100 backdrop-blur-sm transition-all",
    ghost:
      "bg-transparent hover:bg-[rgba(var(--hover-rgb),0.08)] hover:shadow-[0_0_20px_var(--hover-glow)] text-slate-700 dark:text-slate-200 transition-all",
    explosive: "btn-explosive",
  };
  const combinedClasses = `inline-flex items-center justify-center gap-2 cursor-pointer transition-all ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        aria-label={ariaLabel}
        title={title}
        className={combinedClasses}
      >
        {" "}
        {icon && iconPosition === "left" && (
          <span className="inline-flex shrink-0">{icon}</span>
        )}{" "}
        <span>{children}</span>{" "}
        {icon && iconPosition === "right" && (
          <span className="inline-flex shrink-0">{icon}</span>
        )}{" "}
      </a>
    );
  }
  return (
    <button className={combinedClasses} {...props}>
      {" "}
      {icon && iconPosition === "left" && (
        <span className="inline-flex shrink-0">{icon}</span>
      )}{" "}
      <span>{children}</span>{" "}
      {icon && iconPosition === "right" && (
        <span className="inline-flex shrink-0">{icon}</span>
      )}{" "}
    </button>
  );
};
