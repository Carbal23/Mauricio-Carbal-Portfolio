"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react"; 

export  default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" aria-label="Switch to light mode" />
      ) : (
        <Moon className="h-5 w-5" aria-label="Switch to dark mode" />
      )}
    </button>
  );
}
