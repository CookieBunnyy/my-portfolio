import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  Code,
  Braces,
  Paintbrush,
  Database,
  FileCode2,
  PenTool,
  Video,
  Palette,
  Layout,
  Cloud,
  Terminal,
} from "lucide-react";

export default function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const skills = [
    { name: "React", icon: <Code /> },
    { name: "JavaScript", icon: <Braces /> },
    { name: "TailwindCSS", icon: <Layout /> },
    { name: "SQL", icon: <Database /> },
    { name: "Python", icon: <Terminal /> },
    { name: "Java", icon: <FileCode2 /> },
    { name: "HTML", icon: <Layout /> },
    { name: "CSS", icon: <Palette /> },
    { name: "Figma", icon: <PenTool /> },
    { name: "Adobe Photoshop", icon: <Paintbrush /> },
    { name: "Adobe Premiere Pro", icon: <Video /> },
    { name: "MongoDB", icon: <Cloud /> },
  ];

  // ✅ Detect theme change dynamically
  useEffect(() => {
    const root = document.documentElement;
    const checkDark = () => setIsDarkMode(root.classList.contains("dark"));
    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // ✅ Load Lordicon script once
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden transition-colors duration-500">
      {/* Fade-in heading and paragraph */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-4 text-zinc-800 dark:text-zinc-100"
      >
        About
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="mb-4 leading-relaxed text-justify text-zinc-700 dark:text-zinc-200"
      >
        Hey there! I’m{" "}
        <span className="font-semibold text-primary dark:text-green-400 transition-colors duration-500">
          Rance Gabrielle G. Siroy
        </span>
        , born on{" "}
        <span className="font-semibold text-primary dark:text-green-400 transition-colors duration-500">
          July 25, 2003
        </span>{" "}
        — a{" "}
        <span className="font-semibold text-primary dark:text-green-400 transition-colors duration-500">
          Computer Science
        </span>{" "}
        student and aspiring front-end developer with a deep passion for
        creating meaningful and engaging digital experiences. I love building
        responsive, accessible, and visually appealing websites that blend
        creativity with functionality. Aside from coding, I’m also into{" "}
        <span className="font-semibold text-primary dark:text-green-400 transition-colors duration-500">
          photo editing
        </span>
        ,{" "}
        <span className="font-semibold text-primary dark:text-green-400 transition-colors duration-500">
          video editing
        </span>
        , and{" "}
        <span className="font-semibold text-primary dark:text-green-400 transition-colors duration-500">
          graphic design
        </span>
        , which help me bring a creative edge to my projects. I enjoy crafting
        designs that feel alive — where every color, layout, and animation has
        purpose. My journey into{" "}
        <span className="font-semibold text-primary dark:text-green-400 transition-colors duration-500">
          Computer Science
        </span>{" "}
        began with a simple curiosity: how things work behind the screen. That
        curiosity grew into a passion for web and app development,
        problem-solving, and logical thinking. My main languages are{" "}
        <span className="font-semibold text-primary dark:text-green-400 transition-colors duration-500">
          Python
        </span>
        ,{" "}
        <span className="font-semibold text-primary dark:text-green-400 transition-colors duration-500">
          JavaScript
        </span>
        ,{" "}
        <span className="font-semibold text-primary dark:text-green-400 transition-colors duration-500">
          HTML
        </span>
        ,{" "}
        <span className="font-semibold text-primary dark:text-green-400 transition-colors duration-500">
          CSS
        </span>
        ,{" "}
        <span className="font-semibold text-primary dark:text-green-400 transition-colors duration-500">
          Java
        </span>
        , and{" "}
        <span className="font-semibold text-primary dark:text-green-400 transition-colors duration-500">
          React
        </span>
        , and I’m always exploring new technologies to improve my craft and stay
        up-to-date in the tech world. For me, coding isn’t just a skill — it’s a
        creative outlet, a way to express ideas, and a path toward building a
        future where innovation meets imagination.
      </motion.p>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-4 py-5 text-zinc-800 dark:text-zinc-100"
      >
        Skills
      </motion.h3>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* ✅ Lordicon Animated DaVinci (Dynamic Colors) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 70 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center"
        >
          <lord-icon
            src="https://cdn.lordicon.com/chnoodbu.json"
            trigger="in"
            stroke="light"
            colors={`primary:#00C753,secondary:${
              isDarkMode ? "#ffffff" : "#000000"
            }`}
            style={{ width: "250px", height: "250px" }}
          ></lord-icon>
        </motion.div>

        {/* Animated Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {skills.map(({ name, icon }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.01, duration: 0.1 },
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08, rotate: 2 }}
              transition={{ ease: "easeInOut", duration: 0.1 }}
              className="group flex items-center gap-2 p-3 border rounded-md bg-card dark:bg-zinc-800 hover:bg-primary dark:hover:bg-green-500 cursor-default outline-1 outline-zinc-400 dark:outline-zinc-700 transition-all duration-500"
            >
              <motion.div
                whileHover={{ y: -3, rotate: -10 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="text-primary dark:text-green-400 group-hover:text-white dark:group-hover:text-white"
              >
                {icon}
              </motion.div>
              <span className="font-medium group-hover:text-white">{name}</span>
            </motion.div>
          ))}
        </div>e
      </div>
    </section>
  );
}