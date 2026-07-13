"use client";
import { useTheme } from "@/context/ThemeContext";

export function ThemeToggle() {
  const { dark, toggleDark } = useTheme();

  return (
    <button
      onClick={toggleDark}
      aria-label="Toggle dark mode"
      className="px-3 py-1 rounded-md text-sm font-medium bg-gray-400 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    >
      {dark ? "Light mode" : "Dark mode"}
    </button>
  );
}