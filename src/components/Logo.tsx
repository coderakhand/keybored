"use client";

import { BsFillKeyboardFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href={{ pathname: "/" }}
      className="w-full flex justify-start pt-5 items-center"
    >
      <motion.div
        initial={{ filter: "blur(4px)", opacity: 1 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex p-1 text-xl text-white font-semibold font-nosifer text-shadow-2xs text-shadow-white/40"
      >
        <BsFillKeyboardFill className="w-5 h-5 mr-2" />
        KeyBored
      </motion.div>
    </Link>
  );
}
