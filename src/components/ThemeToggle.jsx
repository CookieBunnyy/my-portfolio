import React, { useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle({ dark, setDark }) {
  // ✅ Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, [setDark]);

  // ✅ Save theme to localStorage and apply class
  const toggleTheme = () => {
    setDark((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.1, rotate: 20 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.10, ease: "easeOut" }}
        className="p-2 rounded-full outline-2 outline-black dark:outline-white bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all shadow-md"
        aria-label="Toggle theme"
      >
        <motion.div
          key={dark ? "sun" : "moon"}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          {dark ? (
            <Sun className="text-yellow-400" size={20} />
          ) : (
            <Moon className="text-blue-700" size={20} />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}
