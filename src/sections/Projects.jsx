import React, { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Eye } from "lucide-react";

// Custom playing card SVG icon
const CardIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="2" width="18" height="20" rx="3" ry="3" />
    <path d="M7 6h.01M17 18h.01M15 9l-6 6" />
  </svg>
);

const PROJECTS = [
  {
    id: "proj-1",
    title: "EasySched (Scheduler)",
    description:
      "A desktop-like scheduling app built with Java Swing. Demonstrates OOP, calendar UI, and save/load features.",
    tags: ["java", "swing"],
    icon: "calendar",
    href: "https://github.com/CookieBunnyy/EasySched-Scheduler-",
  },
  {
    id: "proj-2",
    title: "Nightmare Cards",
    description:
      "A website where you can explore random nightmare cards, uncover their dark lore, and shuffle the deck to reveal the nightmare destined for you.",
    tags: ["html", "javascript", "css"],
    icon: "card",
    href: "https://github.com/CookieBunnyy/Nightmare-Web",
  },
];

export default function Projects() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("all");

  const tags = ["all", ...new Set(PROJECTS.flatMap((p) => p.tags))];
  const filtered = PROJECTS.filter(
    (p) =>
      (tag === "all" || p.tags.includes(tag)) &&
      p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="py-25 transition-colors duration-500">
      <h2 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100 transition-colors duration-500">
        Projects
      </h2>

      {/* Search + Filter */}
      <div className="flex gap-2 mb-4 transition-colors duration-500">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects..."
          className="flex-1 px-3 py-2 border rounded-md text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 outline-1 outline-black dark:outline-white transition-colors duration-500"
        />
        <select
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="px-3 py-2 border rounded-md text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 outline-1 outline-black dark:outline-white transition-colors duration-500"
        >
          {tags.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Project Cards */}
      <div className="grid gap-4 transition-colors duration-500">
        {filtered.map((p) => (
          <motion.article
            key={p.id}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative p-4 border rounded-md bg-card dark:bg-zinc-800 border-black dark:border-white overflow-hidden group transition-colors duration-500"
          >
            {/* Text Content */}
            <div className="pr-12">
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 transition-colors duration-500">
                {p.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 my-2 transition-colors duration-500">
                {p.description}
              </p>

              <div className="flex gap-2 flex-wrap">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 border rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 transition-colors duration-500"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-3 flex gap-2">
                <motion.a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-1 border rounded bg-primary text-white dark:text-zinc-100 dark:bg-green-500 hover:bg-green-800 dark:hover:bg-green-400 flex items-center gap-2 transition-colors duration-500"
                  whileHover={{ scale: 1 }}
                >
                  View
                  <motion.div
                    className="w-5 h-5"
                    initial={{ scaleY: 1 }}
                    whileHover={{
                      scaleY: [1, 0.1, 1], // simple blink effect
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <Eye className="w-5 h-5" />
                  </motion.div>
                </motion.a>
              </div>
            </div>

            {/* Animated Icon */}
            <motion.div
              className="absolute right-4 top-1/2 -translate-y-1/2 opacity-70 group-hover:opacity-100 text-primary dark:text-green-400 transition-colors duration-500"
              animate={
                p.icon === "calendar"
                  ? { rotate: [0, 10, -10, 0] }
                  : { rotateY: [0, 180, 0] }
              }
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              {p.icon === "calendar" ? (
                <CalendarDays className="w-8 h-8" />
              ) : (
                <CardIcon className="w-8 h-8" />
              )}
            </motion.div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
