import React, { useEffect } from "react";
import { CheckCircle, AlertCircle, Info, X } from "lucide-react";
interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}
export const Toast: React.FC<ToastProps> = ({
  message,
  type = "success",
  isOpen,
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);
  if (!isOpen) return null;
  const icons = {
    success: <CheckCircle className="w-5 h-5 text-emerald-500" />,
    error: <AlertCircle className="w-5 h-5 text-rose-500" />,
    info: <Info className="w-5 h-5 text-sky-500" />,
  };
  const bgClasses = {
    success:
      "border-emerald-500/30 bg-emerald-50/90 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200",
    error:
      "border-rose-500/30 bg-rose-50/90 dark:bg-rose-950/80 text-rose-900 dark:text-rose-200",
    info: "border-sky-500/30 bg-sky-50/90 dark:bg-sky-950/80 text-sky-900 dark:text-sky-200",
  };
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl border shadow-xl backdrop-blur-md animate-in slide-in-from-bottom-5 duration-300">
      {" "}
      <div
        className={`flex items-center gap-3 ${bgClasses[type]} px-3 py-2 rounded-lg border`}
      >
        {" "}
        {icons[type]} <span className="text-sm font-medium">{message}</span>{" "}
        <button
          onClick={onClose}
          aria-label="Dismiss toast notification"
          className="p-1 hover:opacity-70 transition-opacity ml-2"
        >
          {" "}
          <X className="w-4 h-4" />{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};
