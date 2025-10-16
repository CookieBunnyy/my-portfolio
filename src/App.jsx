import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className={`relative min-h-screen overflow-hidden`}>
      {/* Sliding Background Animation */}
     <AnimatePresence mode="wait">
  <motion.div
    key={dark ? "dark" : "light"}
    initial={{ x: dark ? "-100%" : "100%" }} // slide in from left if dark, from right if light
    animate={{ x: 0 }}
    exit={{ x: dark ? "100%" : "-100%" }} // slide out opposite direction
    transition={{ duration: 1, ease: "easeInOut" }}
    className="absolute inset-0 -z-10"
    style={{
      background: dark
        ? "linear-gradient(135deg, #212121 0%, #1c1c1c 50%, #3a3a3a 100%)"
        : "linear-gradient(135deg, #f9f9f9 0%, #E6E6E6 50%, #FFFFFF 100%)",
    }}
  />
</AnimatePresence>

      {/* Content */}
      <div
        className={`relative min-h-screen transition-colors duration-500 ${
          dark ? "text-zinc-100" : "text-zinc-800"
        }`}
      >
        <Navbar
          dark={dark}
          setDark={setDark}
          active={activeSection}
          setActive={setActiveSection}
        />

        <main className="max-w-5xl mx-auto px-6 py-10 transition-all duration-300">
          {activeSection === "home" && (
            <Home setActiveSection={setActiveSection} />
          )}
          {activeSection === "about" && <About />}
          {activeSection === "projects" && <Projects />}
          {activeSection === "contact" && <Contact />}
        </main>

        <footer className="text-center py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} · Rance Gabrielle G. Siroy · Built with React + TailwindCSS + shadcn/UI
        </footer>
      </div>
    </div>
  );
}