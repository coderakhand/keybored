"use client";
import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";
import { GiKeyboard } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";

export default function TopBar() {
  return (
    <div className="w-full flex items-center relative max-w-[1200px] text-gray-700/80">
      <div className="absoluter left-0 flex gap-4 items-center">
        <Logo />
        <Link href={{ pathname: "/type" }}>
          <GiKeyboard className="w-10 h-10 cursor-pointer hover:text-white" />
        </Link>
        <MdLeaderboard className="w-6 h-6 pb-0.5 cursor-pointer hover:text-white" />
      </div>
      <div className="absolute right-0 ">
        <Link href={{ pathname: "/" }}>
          <div className="flex gap-2 text-sm items-center justify-center font-medium">
            <Image
              src={`https://api.dicebear.com/9.x/thumbs/svg?seed=Sadie`}
              alt=""
              height={40}
              width={40}
              className="rounded-full sm:w-6 sm:h-6"
            />
            <p>coderakhand</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
