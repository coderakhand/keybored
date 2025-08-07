"use client";

import { useEffect, useState } from "react";
import { PiCursorFill } from "react-icons/pi";

const sentence =
  "hello world ioreirioer ipeprneinren irnernie roenirneorn eoejoiereir nioenorine eoirein roeno irne inrann eihier eorieirheoir nenroe ioroienroie";

interface letterInfoType {
  letter: string;
  typedCorrectly: boolean | null;
}

export default function TypingBox() {
  const [sentenceInfo, setSentenceInfo] = useState<letterInfoType[]>([]);
  const [cursorIdx, setCursorIdx] = useState(3);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    setSentenceInfo(
      sentence.split("").map((s) => ({ letter: s, typedCorrectly: null }))
    );
  });
  return (
    <div className="relative w-full h-12 cursor-default">
      {!focus && (
        <div className="absolute w-full h-full text-lg text-white flex justify-center items-center gap-2">
          <PiCursorFill className="rotate-12" />
          <p>Click here or presss any key to focus</p>
        </div>
      )}
      <div
        className={`w-full grid grid-cols-2 text-4xl relative h-full ${
          focus ? "" : "blur-sm"
        }`}
        onFocus={() => setFocus(true)}
        onClick={() => setFocus(true)}
      >
        <div className="text-white flex justify-end overflow-x-auto">
          {sentence
            .slice(0, cursorIdx + 1)
            .split("")
            .map((ch, idx) => (
              <p key={idx}>{ch}</p>
            ))}
        </div>
        <div className="text-gray-400 flex overflow-hidden">
          <span
            key={"cursor"}
            className=" bg-indigo-500 w-1 h-8 z-100 rounded-full"
          />
          {sentence
            .slice(cursorIdx + 1)
            .split("")
            .map((ch, idx) => (
              <p key={idx}>{ch}</p>
            ))}
        </div>
      </div>
    </div>
  );
}
