import { Download, Mail, Eye, Star } from "lucide-react";
import { motion } from "framer-motion";
import ImageSwitcher from "@/components/ImageSwitcher";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Home({ setActiveSection }) {
  // Dummy data
  const totalVisits = 0;
  const ratingPercentage = 0;
  const performanceData = [
    { name: "Projects", value: 2 },
    { name: "Consistency", value: 15 },
    { name: "Improvement", value: 5 },
  ];

  const COLORS = ["#84cc16", "#22c55e", "#bbf7d0"];

  return (
    <>
      {/* INTRODUCTION SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-5 py-30 transition-colors duration-500">
        {/* Left side - Text content */}
        <div className="space-y-5 md:w-1/2 transition-colors duration-500">
          <h1 className="text-4xl font-bold text-primary dark:text-green-400 transition-colors duration-500">
            <span className="font-bold text-accent-foreground text-5xl transition-colors duration-500">
              Hi,
            </span>{" "}
            I'm Rance Gabrielle G. Siroy
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-lg text-zinc-800 dark:text-zinc-200 transition-colors duration-500"
          >
            Behind every great program is a person who believed they could turn
            logic into art. Even in a world of ones and zeros, creativity and
            passion remain the most powerful variables.
          </motion.p>

          <div className="flex gap-3">
            {/* Download CV Button */}
            <motion.a
              href="/Rance_Siroy_CV.pdf"
              download="Rance_Siroy_CV.pdf"
              whileHover={{ scale: 1.05 }}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-md border bg-accent-foreground text-accent dark:bg-zinc-800 dark:text-zinc-200 hover:bg-green-400 dark:hover:bg-green-400 transition-colors duration-500"
            >
              <span>Download CV</span>
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Download className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12" />
              </motion.div>
            </motion.a>

            {/* Contact Me Button */}
            <motion.button
              onClick={() => setActiveSection("contact")}
              whileHover={{ scale: 1.05 }}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-md bg-green-500 dark:bg-green-500 text-card dark:text-zinc-200 hover:bg-green-400 dark:hover:bg-green-400 transition-colors duration-500"
            >
              <span>Contact me</span>
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="w-5 h-5 transition-transform duration-500 group-hover:-rotate-12" />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/3 flex justify-center gap-15 transition-colors duration-500">
          <ImageSwitcher />
        </div>
      </section>

      {/* STATS SECTION */}
<section className="mt-20 py-10 border-t border-zinc-300 dark:border-zinc-700 transition-colors duration-500">
  <h2 className="text-2xl font-bold mb-6 text-center text-zinc-800 dark:text-zinc-100 transition-colors duration-500">
    Portfolio Insights
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
    {/* Total Visits */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="p-6 bg-zinc-100 dark:bg-zinc-800 rounded-2xl shadow-md flex flex-col items-center justify-center"
    >
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg font-semibold mb-3 text-zinc-800 dark:text-zinc-100"
      >
        Total Visits
      </motion.h3>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
      >
        <Eye className="w-10 h-10 text-green-500 mb-2" />
      </motion.div>
      <motion.p
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
        className="text-4xl font-bold text-green-600 dark:text-green-400"
      >
        {totalVisits.toLocaleString()}
      </motion.p>
    </motion.div>

    {/* User Rating */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="p-6 bg-zinc-100 dark:bg-zinc-800 rounded-2xl shadow-md flex flex-col items-center justify-center"
    >
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg font-semibold mb-3 text-zinc-800 dark:text-zinc-100"
      >
        User Rating
      </motion.h3>
      <motion.div
        className="flex items-center gap-1 mb-2"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
      >
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-7 h-7 ${
              i < 4 ? "text-green-400 fill-green-400" : "text-zinc-400"
            }`}
          />
        ))}
      </motion.div>
      <motion.p
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
        className="text-3xl font-bold text-green-400"
      >
        {ratingPercentage}%
      </motion.p>
    </motion.div>

    {/* Owner’s Performance */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="p-6 bg-zinc-100 dark:bg-zinc-800 rounded-2xl shadow-md flex flex-col items-center"
    >
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg font-semibold mb-3 text-zinc-800 dark:text-zinc-100 text-center"
      >
        Owner’s Performance
      </motion.h3>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
        className="w-full"
      >
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={performanceData}
              dataKey="value"
              nameKey="name"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={3}
            >
              {performanceData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  </div>
</section>
    </>
  );
}
