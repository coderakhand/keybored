'use client'
import Link from "next/link";

export function StartButton() {
  return (
    <Link
      href={{
        pathname: "/type",
      }}
    >
      <button className="group relative text-white bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:brightness-90 hover:shadow-none p-1 rounded-full w-28 h-10 cursor-pointer font-goldman text-xl flex justify-center items-center">
        <div className="absolute left-0 group-hover:bg-black/60 transition-all duration-100 w-2/3 h-full rounded-l-full"/>
        <p className="text-shadow-2xs text-shadow-white/40 z-10">Start</p>
      </button>
    </Link>
  );
}
