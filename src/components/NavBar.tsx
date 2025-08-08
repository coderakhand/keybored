"use client";
import React from "react";
import { CiAt } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { TbClockHour4Filled } from "react-icons/tb";
import { TbAlphabetLatin } from "react-icons/tb";
import { RiDoubleQuotesL } from "react-icons/ri";
import { BsTools } from "react-icons/bs";
import { FaWrench } from "react-icons/fa6";
import { useTextStore } from "@/store/store";

export default function NavBar() {
  const selectedCategory = useTextStore((s) => s.selectedCategory);
  const selectedRange = useTextStore((s) => s.selectedRange);
  const feedPunctuation = useTextStore((s) => s.feedPunctuation);
  const feedNumber = useTextStore((s) => s.feedNumber);
  const setSelectedCategory = useTextStore((s) => s.setSelectedCategory);
  const setSelectedRange = useTextStore((s) => s.setSelectedRange);
  const toggleFeedPunctuation = useTextStore((s) => s.toggleFeedPunctuation);
  const toggleFeedNumber = useTextStore((s) => s.toggleFeedNumber);

  return (
    <div className="py-1.5 px-4 flex items-center justify-center gap-6 max-w-[900px] h-10 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white">
      <div className="flex justify-center items-center gap-6">
        <NavButton
          name={"punctuation"}
          logo={<CiAt className="stroke-2" />}
          selected={feedPunctuation}
          onClickFn={toggleFeedPunctuation}
        />
        <NavButton
          name={"numbers"}
          logo={<CiHashtag className="stroke-2" />}
          selected={feedNumber}
          onClickFn={toggleFeedNumber}
        />
      </div>

      <div className="h-full w-1 bg-gray-700/60 rounded-full" />
      <div className="flex justify-center items-center gap-8">
        <NavButton
          name="time"
          logo={<TbClockHour4Filled className="h-4 w-4" />}
          selected={selectedCategory == "time"}
          onClickFn={() => setSelectedCategory("time")}
        />
        <NavButton
          name={"words"}
          logo={<TbAlphabetLatin className="w-5 h-5" />}
          selected={selectedCategory == "words"}
          onClickFn={() => setSelectedCategory("words")}
        />
        <NavButton
          name={"quote"}
          logo={<RiDoubleQuotesL className="w-4 h-4" />}
          selected={selectedCategory == "quote"}
          onClickFn={() => setSelectedCategory("quote")}
        />
        <NavButton
          name={"custom"}
          logo={<FaWrench className="w-3 h-3" />}
          selected={selectedCategory == "custom"}
          onClickFn={() => setSelectedCategory("custom")}
        />
      </div>
      <div className="h-full w-1 bg-gray-700/60 rounded-full" />
      <div className="flex gap-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <NavButton
            key={idx}
            logo={15 * (idx + 1)}
            selected={15 * (idx + 1) == selectedRange}
            onClickFn={() => setSelectedRange(15 * (idx + 1))}
          />
        ))}
        <div className="flex justify-center items-center text-gray-400 cursor-pointer hover:text-white">
          <BsTools className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
}

function NavButton({
  name,
  logo,
  onClickFn,
  selected,
}: {
  name?: string;
  logo?: React.ReactNode;
  onClickFn?: () => void;
  selected?: boolean;
}) {
  return (
    <div
      onClick={onClickFn}
      className={`flex justify-center items-center text-sm gap-1 hover:text-white p-0.5 ${
        selected ? " text-indigo-500" : "text-gray-400"
      } cursor-pointer font-medium`}
    >
      {logo}
      <p className="font-medium">{name}</p>
    </div>
  );
}
