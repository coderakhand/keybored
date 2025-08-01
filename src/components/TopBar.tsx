"use client";
import { motion } from "framer-motion";

export default function TopBar() {
  return (
    <div className="w-full flex px-2">
      <motion.div
        initial={{ filter: "blur(4px)", opacity: 1 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex p-1 text-4xl text-white font-semibold font-nosifer"
      >
        KeyBored
      </motion.div>
    </div>
  );
}
