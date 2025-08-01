import { IoGlobeOutline } from "react-icons/io5"
import { ArrowKeys, CommandKey, Key, OptionKey } from "./Keys"
import { MdKeyboardControlKey } from "react-icons/md"


export default function SpacebarRow(){
    return (
        <div className="w-full flex justify-end gap-0.5 sm:gap-[3px]">
        <Key
          key="fn"
          className="relative flex  justify-center items-end py-0.5 px-1 rounded-xs sm:rounded-sm  w-5 h-5 sm:w-7 sm:h-7.5 text-[4px] sm:text-[6px]"
        >
          <p className="absolute right-0.5 top-0.5 sm:right-1 sm:top-1">fn</p>
          <IoGlobeOutline className="absolute left-0.5 bottom-0.5 sm:left-1 sm:bottom-1 w-1 h-1 sm:w-2 sm:h-2" />
        </Key>
        <Key className="relative flex justify-end items-end py-0.5 px-1 rounded-xs sm:rounded-sm sm:w-7 sm:h-7.5 text-[4px] sm:text-[5px]">
          <MdKeyboardControlKey className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 h-1.5 w-1.5 sm:h-2 sm:w-2" />
          control
        </Key>
        <OptionKey />
        <CommandKey />
        <button className="cursor-pointer shadow-sm shadow-white/50  hover:shadow-black/30 hover:scale-102 bg-black text-white font-extrabold overflow-hidden flex-grow  justify-center items-end py-0.5 px-1 rounded-xs sm:rounded-sm h-5 sm:h-7.5 text-[4px]" />
        <CommandKey />
        <OptionKey />
        <ArrowKeys />
      </div>
    )
}