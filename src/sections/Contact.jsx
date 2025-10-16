import React, { useState, useEffect } from "react";
import { Mail, User, MessageSquare, Github, Facebook, Send } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null, "success", "error"
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

  // Handle form submission
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
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("Email send error:", error);
        setStatus("error");
      } finally {
        setLoading(false);
      }
    }
  };

  const lightColors = "primary:#000000,secondary:#16a34a";
  const darkColors = "primary:#ffffff,secondary:#16a34a";

  return (
    <section className="pt-10 transition-colors duration-500 max-w-3xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-zinc-100 transition-colors duration-500">
        Contact
      </h2>

      {status === "success" && (
        <div className="mb-6 text-center p-4 rounded bg-green-100 dark:bg-green-600 text-green-800 dark:text-white">
          Your message has been sent! I'll get back to you shortly.
          <button
            onClick={() => setStatus(null)}
            className="ml-4 underline hover:text-green-500 dark:hover:text-green-200"
          >
            Send another
          </button>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 text-center p-4 rounded bg-red-100 dark:bg-red-600 text-red-800 dark:text-white">
          Oops! Something went wrong. Please try again.
          <button
            onClick={() => setStatus(null)}
            className="ml-4 underline hover:text-red-500 dark:hover:text-red-200"
          >
            Try Again
          </button>
        </div>
      )}

      <form onSubmit={onSubmit} className="grid gap-4">
        <label className="grid">
          <span className="flex items-center gap-2 text-sm font-medium mb-1 text-zinc-800 dark:text-zinc-100">
            <User size={16} /> Name
          </span>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="px-3 py-2 rounded bg-sidebar dark:bg-zinc-900 border border-transparent outline-1 outline-black dark:outline-white focus:outline-2 focus:outline-primary transition-colors duration-500"
          />
          {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
        </label>

        <label className="grid">
          <span className="flex items-center gap-2 text-sm font-medium mb-1 text-zinc-800 dark:text-zinc-100">
            <Mail size={16} /> Email
          </span>
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="px-3 py-2 rounded bg-sidebar dark:bg-zinc-900 border border-transparent outline-1 outline-black dark:outline-white focus:outline-2 focus:outline-primary transition-colors duration-500"
          />
          {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
        </label>

        <label className="grid">
          <span className="flex items-center gap-2 text-sm font-medium mb-1 text-zinc-800 dark:text-zinc-100">
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
      </form>

      {/* Social Links */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-zinc-800 dark:text-zinc-100">
          Or find me:
        </h3>
        <div className="flex gap-5 mt-2">
          <a
            href="https://github.com/CookieBunnyy"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 underline hover:text-green-400 dark:hover:text-green-200"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://www.facebook.com/Gabbyy.io"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 underline hover:text-green-400 dark:hover:text-green-200"
          >
            <Facebook size={18} /> Facebook
          </a>
        </div>
      </div>
    </section>
  );
}