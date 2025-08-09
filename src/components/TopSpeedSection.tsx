"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function TopSpeedSection() {
  return (
    <div className="w-full h-full max-w-[1200px] md:grid grid-cols-2 gap-6 max-h-[146px]">
      <div className="grid grid-cols-4 bg-gray-800/50 rounded-lg p-4">
        <RecordHighlight
          name={"15 seconds"}
          speed={200}
          accuracy={100}
          date={"2 Jan 2025"}
        ></RecordHighlight>
      </div>
      <div className="grid grid-cols-4 bg-gray-800/50 rounded-lg p-4">
        <RecordHighlight
          name={"15 seconds"}
          speed={200}
          accuracy={100}
          date={"2 Jan 2025"}
        ></RecordHighlight>
      </div>
    </div>
  );
}

function useHover() {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return { isHovered, onMouseEnter, onMouseLeave };
}

function RecordHighlight({
  date,
  name,
  speed,
  accuracy,
}: {
  name: string;
  speed: number;
  accuracy: number;
  date: string;
}) {
  const { onMouseEnter, onMouseLeave, isHovered } = useHover();

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="h-full w-full flex flex-col justify-center items-center gap-1 realtive"
    >
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full flex flex-col justify-center items-center gap-1 realtive"
          >
            <label className="text-gray-400">{name}</label>
            <h1 className="text-4xl font-semibold">{speed}</h1>
            <h3 className="text-xl font-semibold text-gray-500">
              {accuracy}%
            </h3>{" "}
          </motion.div>
        )}
        {isHovered && (
          <RecordDescription
            name={name}
            speed={speed}
            accuracy={accuracy}
            date={date}
          ></RecordDescription>
        )}
      </AnimatePresence>
    </div>
  );
}

function RecordDescription({
  name,
  date,
  speed,
  accuracy,
}: {
  name: string;
  date: string;
  speed: number;
  accuracy: number;
}) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute flex flex-col justify-center items-center text-white"
    >
      <label className="text-gray-400">{name}</label>
      <div>{speed} wpm</div>
      <div>{accuracy} acc</div>
      <div className="text-gray-400">{date}</div>
    </motion.div>
  );
}
