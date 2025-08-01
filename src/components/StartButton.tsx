'use client'
import Link from "next/link";

export function StartButton() {
  return (
    <Link
      href={{
        pathname: "/type",
      }}
    >
      <button className="text-white bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:scale-120 transition delay-175 duration-300 ease-in-out p-1 rounded-full w-22 h-8 cursor-pointer font-goldman text-lg flex justify-center items-center">
        <p className="text-shadow-2xs text-shadow-white/40">Start</p>
      </button>
    </Link>
  );
}
