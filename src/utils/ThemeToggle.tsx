"use client";
import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";

const ThemeToggle = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <button
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
    >
      {mode === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
