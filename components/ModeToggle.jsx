"use client";

import { useTheme } from "next-themes";
import "./ModeToggle.css";
import { useEffect } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    // Apply the theme class to the body element
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);

  return (
    <input
      onClick={handleToggle}
      className="ThemeToggle"
      type="checkbox"
      checked={theme === "dark"}
    />
  );
}
