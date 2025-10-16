import React, { useState, useEffect } from "react";
import { Mail, User, MessageSquare, Github, Facebook, Send } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Loader from "@/components/Loader";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect dark mode
  useEffect(() => {
    const html = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDarkMode(html.classList.contains("dark"));
    });
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    setIsDarkMode(html.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  // Validate form
  function validate() {
    const e = {};
    if (!form.name) e.name = "Required";
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      e.email = "Valid email required";
    if (!form.message) e.message = "Required";
    return e;
  }

  // Submit form via EmailJS
  const onSubmit = async (ev) => {
    ev.preventDefault();
    const eValidation = validate();
    setErrors(eValidation);

    if (Object.keys(eValidation).length === 0) {
      setLoading(true);
      try {
        await emailjs.send(
          'service_p2kwvgu',   // replace with your EmailJS Service ID
           'template_p2inql9',  // replace with your EmailJS Template ID
          form,                // form data object
          '9TsDbSwb7tMrBW_Sm'    // replace with your EmailJS Public Key
        );
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("Error sending email:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const lightColors = "primary:#000000,secondary:#16a34a";
  const darkColors = "primary:#ffffff,secondary:#16a34a";

  if (sent)
    return (
      <section className="py-50 text-center flex flex-col items-center transition-colors duration-500">
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
        <lord-icon
          src="https://cdn.lordicon.com/dhzbkemf.json"
          trigger="loop"
          delay="1500"
          stroke="regular"
          colors={isDarkMode ? darkColors : lightColors}
          style={{ width: "120px", height: "120px", marginBottom: "10px" }}
        ></lord-icon>

        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 transition-colors duration-500">
          Thanks — message sent!
        </h2>
        <p className="mt-2 text-accent-foreground dark:text-green-400 transition-colors duration-500">
          I'll get back to you shortly.
        </p>

        <button
          onClick={() => setSent(false)}
          className="mt-4 px-4 py-2 border rounded bg-accent-foreground dark:bg-green-600 text-card dark:text-zinc-100 hover:bg-primary dark:hover:bg-green-500 transition-colors duration-500"
        >
          Send another
        </button>
      </section>
    );

  return (
    <section className="pt-25 transition-colors duration-500">
      <h2 className="text-2xl font-bold mb-2 text-zinc-800 dark:text-zinc-100 transition-colors duration-500">
        Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center transition-colors duration-500">
        <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
          {/* Name */}
          <label className="grid">
            <span className="flex items-center gap-2 text-sm font-medium mb-[5px] text-zinc-800 dark:text-zinc-100 transition-colors duration-500">
              <User size={16} /> Name
            </span>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="px-3 py-2 rounded bg-sidebar dark:bg-zinc-900 border border-transparent outline-1 outline-black dark:outline-white focus:outline-2 focus:outline-primary transition-colors duration-500"
            />
            {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
          </label>

          {/* Email */}
          <label className="grid">
            <span className="flex items-center gap-2 text-sm font-medium mb-[5px] text-zinc-800 dark:text-zinc-100 transition-colors duration-500">
              <Mail size={16} /> Email
            </span>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="px-3 py-2 rounded bg-sidebar dark:bg-zinc-900 border border-transparent outline-1 outline-black dark:outline-white focus:outline-2 focus:outline-primary transition-colors duration-500"
            />
            {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
          </label>

          {/* Message */}
          <label className="grid">
            <span className="flex items-center gap-2 text-sm font-medium mb-[5px] text-zinc-800 dark:text-zinc-100 transition-colors duration-500">
              <MessageSquare size={16} /> Message
            </span>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={6}
              className="px-3 py-2 rounded bg-sidebar dark:bg-zinc-900 border border-transparent outline-1 outline-black dark:outline-white focus:outline-2 focus:outline-primary transition-colors duration-500"
            />
            {errors.message && <span className="text-xs text-red-500">{errors.message}</span>}
          </label>

          <div>
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 rounded border bg-primary dark:bg-green-500 text-card dark:text-zinc-100 flex items-center gap-2 hover:bg-green-700 dark:hover:bg-green-400 transition-colors duration-500"
            >
              <span>{loading ? "Sending..." : "Send"}</span>
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Send size={18} />
              </motion.div>
            </motion.button>
          </div>
        </form>

        <div className="flex justify-center items-center min-h-[300px]">
          <Loader />
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-zinc-800 dark:text-zinc-100 transition-colors duration-500">
          Or find me:
        </h3>
        <div className="flex gap-5 mt-2 transition-colors duration-500">
          <a
            href="https://github.com/CookieBunnyy"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 underline hover:text-green-400 transition-colors duration-500"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://www.facebook.com/Gabbyy.io"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 underline hover:text-green-400 transition-colors duration-500"
          >
            <Facebook size={18} /> Facebook
          </a>
        </div>
      </div>
    </section>
  );
}