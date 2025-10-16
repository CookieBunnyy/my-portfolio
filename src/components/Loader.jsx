import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    const observer = new MutationObserver(() => {
      setIsDarkMode(html.classList.contains("dark"));
    });

    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    // initial check
    setIsDarkMode(html.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  const lightColors =
    "primary:#000000,secondary:#ffffff,tertiary:#63AD55,quaternary:#000000";
  const darkColors =
    "primary:#ffffff,secondary:#3D3D3D,tertiary:#0CC961,quaternary:#ffffff";

  return (
    <div className="flex justify-center items-center w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={isDarkMode ? "dark" : "light"} // force re-render on theme change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <lord-icon
            src="https://cdn.lordicon.com/gtvaxhwv.json"
            trigger="in"
            delay="0"
            stroke="light"
            state="in-assembly"
            colors={isDarkMode ? darkColors : lightColors}
            style={{
              width: "380px",
              height: "380px",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          ></lord-icon>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
