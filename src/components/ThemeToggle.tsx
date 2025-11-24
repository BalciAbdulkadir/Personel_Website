"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
  onClick={() => setDark(!dark)}
  className="px-4 py-2 rounded-lg border bg-card text-foreground transition-colors absolute top-4 right-4 z-50"
>
  {dark ? "🌙 Dark" : "☀️ Light"}
</button>

  );
}
