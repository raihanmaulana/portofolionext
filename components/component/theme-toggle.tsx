"use client";

import * as React from "react";
import { useTheme } from "next-themes";

const ThemeToggle = ({ children }: { children: React.ReactNode }) => {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {children}
    </button>
  );
};

export default ThemeToggle;
