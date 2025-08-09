"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const words = ["Touch Typing", "Fast Typing", "Accurate Typing"];

export function AnimatedWords() {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (letterIndex < currentWord.length) {
            setDisplayed(currentWord.slice(0, letterIndex + 1));
            setLetterIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 800);
          }
        } else {
          if (letterIndex > 0) {
            setDisplayed(currentWord.slice(0, letterIndex - 1));
            setLetterIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 40 : 160
    );

    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting, wordIndex]);

  return (
    <p className="text-white flex whitespace-pre">
      {displayed.split("").map((ch, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
      <motion.span
        className="ml-1 py-1 w-[2px] h-full bg-indigo-500 rounded-full"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
      ></motion.span>
    </p>
  );
}
