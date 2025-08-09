"use client";

import { useEffect, useRef, useState } from "react";
import { PiCursorFill } from "react-icons/pi";
import { motion } from "motion/react";
import { useTextStore } from "@/store/store";

const sentence =
  "Hello world good part is when men should know how to fight in roeno irne inrann eihier eorieirheoir nenroe ioroienroie";

interface letterInfoType {
  letter: string;
  typedCorrectly: boolean | null;
}

export default function TypingBox() {
  const [sentenceInfo, setSentenceInfo] = useState<letterInfoType[]>([]);
  const isTyping = useTextStore((s) => s.isTyping);
  const setIsTyping = useTextStore((s) => s.setIsTyping);
  const selectedCategory = useTextStore((s) => s.selectedCategory);
  const selectedRange = useTextStore((s) => s.selectedRange);
  const [cursorIdx, setCursorIdx] = useState(0);
  const [focus, setFocus] = useState(false);
  const [typedString, setTypedString] = useState("");
  const counter = useRef(selectedRange);

  useEffect(() => {
    setSentenceInfo(
      sentence.split("").map((s) => ({
        letter: s,
        typedCorrectly: null,
      }))
    );
  }, []);

  useEffect(() => {
    counter.current = selectedRange;
  }, [selectedRange]);

  const typeLetter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key.length > 1) return;
    const currentLetter = sentence[cursorIdx];

    const correct = e.key === currentLetter;

    setSentenceInfo((prev) => {
      const updated = [...prev];
      updated[cursorIdx] = {
        letter: currentLetter,
        typedCorrectly: correct,
      };
      return updated;
    });
    console.log("typed: ", sentence[cursorIdx]);

    if (cursorIdx <= sentence.length - 1) {
      setCursorIdx((prev) => prev + 1);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTyping && selectedCategory == "time") {
      interval = setInterval(() => {
        if (counter.current <= 0) return;
        counter.current--;
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTyping]);

  return (
    <div className="relative w-full h-12 cursor-default">
      {isTyping && (
        <div className="absolute -top-16 w-full flex justify-center text-indigo-500 text-4xl">
          {counter.current}
        </div>
      )}

      {!isTyping && (
        <div className="absolute w-full h-full text-lg text-white flex justify-center items-center gap-2">
          <PiCursorFill className="rotate-12" />
          <p>Click here or presss any key to focus</p>
        </div>
      )}
      <div
        className={`relative w-full grid grid-cols-2 text-4xl h-full bordern-none outline-none ${
          isTyping ? "" : "blur-sm"
        }`}
        tabIndex={0}
        onFocus={() => setIsTyping(true)}
        onBlur={() => {
          setTimeout(() => {
            setIsTyping(false);
          }, 800);
        }}
        onClick={() => setIsTyping(true)}
        onKeyDown={typeLetter}
      >
        <div className="text-white flex justify-end overflow-x-auto pr-0.5">
          {sentenceInfo.slice(0, cursorIdx).map((obj, idx) => (
            <motion.p
              key={idx}
              animate={{
                color:
                  obj.typedCorrectly === null
                    ? "#9CA3AF"
                    : obj.typedCorrectly
                    ? "#FFFFFF"
                    : "#EF4444",
              }}
              transition={{ duration: 0.1 }}
            >
              {obj.letter == " " ? "\u00A0" : obj.letter}
            </motion.p>
          ))}
        </div>
        {isTyping && (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            key={"cursor"}
            className="absolute bottom-2 inset-x-1/2 bg-indigo-500 w-[3px] h-10 rounded-full"
          />
        )}
        <div className="pl-1 text-gray-400 flex overflow-hidden">
          {sentenceInfo.slice(cursorIdx).map((obj, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              {obj.letter == " " ? "\u00A0" : obj.letter}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
}
