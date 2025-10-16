import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function RatingStars() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(null);

  const handleRating = (value) => setRating(value);

  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5].map((index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.2, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleRating(index)}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className="focus:outline-none"
        >
          <Star
            className={`w-6 h-6 transition-colors duration-300 ${
              (hovered || rating) >= index
                ? "fill-yellow-400 text-yellow-400"
                : "text-zinc-400 dark:text-zinc-500"
            }`}
          />
        </motion.button>
      ))}

      {rating > 0 && (
        <motion.span
          key={rating}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-medium text-zinc-700 dark:text-zinc-300 ml-1"
        >
          {rating}/5
        </motion.span>
      )}
    </div>
  );
}
