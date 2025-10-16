import ThemeToggle from "./ThemeToggle";
import { Home, User, FolderKanban, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar({ dark, setDark, active, setActive }) {
  const links = [
    { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
    { id: "about", label: "About", icon: <User className="w-5 h-5" /> },
    { id: "projects", label: "Projects", icon: <FolderKanban className="w-5 h-5" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
  ];

  const [hovered, setHovered] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(dark);

  useEffect(() => {
    setIsDarkMode(dark);
  }, [dark]);

  const lightColors = "primary:#121331,secondary:#109121";
  const darkColors = "primary:#ffffff,secondary:#16a34a";

  return (
    <nav
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        z-50 border backdrop-blur-lg
        bg-white/70 dark:bg-zinc-900/70
        border-zinc-200 dark:border-zinc-800
        rounded-full shadow-md
        px-8 md:px-16 py-4
        flex items-center justify-between
        w-[90%] md:w-[80%] lg:w-[70%]
        transition-colors duration-500
        outline-1 outline-zinc-400 dark:outline-zinc-700
      "
    >
      {/* --- Left: Logo --- */}
      <div className="flex items-center ">
        <lord-icon
          src="https://cdn.lordicon.com/srupsmbe.json"
          trigger="in"
          delay="2000"
          state="in-reveal"
          stroke="semibold"
          colors={isDarkMode ? darkColors : lightColors}
          style={{
            width: "40px",
            height: "40px",
            maxWidth: "100%",
            transition: "filter 0.5s ease",
          }}
        ></lord-icon>
        <div className="font-bold text-xl italic text-primary dark:text-green-400 transition-colors duration-500">
          <span className="font-semibold text-2xl text-primary dark:text-green-400">
            My
          </span>
          Portfolio.
        </div>
      </div>

      {/* --- Center: Navigation Links --- */}
      <div className="hidden sm:flex gap-11 items-center justify-center">
        {links.map((l) => (
          <div
            key={l.id}
            onMouseEnter={() => setHovered(l.id)}
            onMouseLeave={() => setHovered(null)}
            className="relative flex flex-col items-center"
          >
            <motion.button
              onClick={() => setActive(l.id)}
              initial={{ scale: 1 }}
              animate={{
                scale: hovered === l.id || active === l.id ? 1.3 : 1,
              }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className={`transition-all duration-300 ${
                active === l.id
                  ? "text-primary dark:text-green-400"
                  : "text-foreground dark:text-zinc-200 hover:text-primary dark:hover:text-green-400"
              }`}
            >
              {l.icon}
            </motion.button>

            <AnimatePresence>
              {hovered === l.id && (
                <motion.span
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="
                    absolute top-8 text-xs font-bold px-2 py-1 rounded-lg shadow-md
                    bg-white text-zinc-800 border border-zinc-300
                    dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700
                    transition-colors duration-500
                  "
                >
                  {l.label}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* --- Right: Theme Toggle + Mobile Dropdown --- */}
      <div className="flex items-center gap-3">
        <ThemeToggle dark={dark} setDark={setDark} />
        <div className="sm:hidden">
          <select
            value={active}
            onChange={(e) => setActive(e.target.value)}
            className="bg-transparent border rounded p-2 text-sm dark:bg-zinc-900 dark:text-white"
          >
            {links.map((l) => (
              <option key={l.id} value={l.id}>
                {l.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}
