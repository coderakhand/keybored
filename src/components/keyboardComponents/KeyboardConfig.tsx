import { LuSunDim, LuSunMedium } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { PiPlayPause, PiSpeakerSimpleNone } from "react-icons/pi";
import {
  IoMicOutline,
  IoMoonOutline,
  IoPlayBackOutline,
  IoPlayForwardOutline,
} from "react-icons/io5";
import { RxSpeakerModerate, RxSpeakerLoud } from "react-icons/rx";

export const functionKeys = [
  <LuSunDim key="f1" className="w-1 h-1 sm:w-2 sm:h-2" />,
  <LuSunMedium key="f2" className="w-1 h-1 sm:w-2 sm:h-2" />,
  <div key="f3" className="flex gap-[1px]">
    <div className="flex flex-col items-end gap-[1px]">
      <div className="mr-[0.5px] h-[2.5px] w-[5px] border-[0.5px] border-white rounded-[0.7px]" />
      <div className="h-[2.5px] w-1 border-[0.5px] border-white rounded-[0.7px]" />
    </div>
    <div className="flex justify-center items-center border-[0.5px] border-white h-[5.5px] w-[3.5px] rounded-[1px]" />
  </div>,
  <IoIosSearch key="f4" className="w-1 h-1 sm:w-2 sm:h-2" />,
  <IoMicOutline key="f5" className="w-1 h-1 sm:w-2 sm:h-2" />,
  <IoMoonOutline
    key="f6"
    className="w-1 h-1 mb-[0.5px] sm:mb-[1px] sm:h-[6.5px] sm:w-2"
  />,
  <IoPlayBackOutline key="f7" className="w-1 h-1 sm:w-2 sm:h-2" />,
  <PiPlayPause key="f8" className="w-1 h-1 sm:w-2 sm:h-2" />,
  <IoPlayForwardOutline key="f9" className="w-1 h-1 sm:w-2 sm:h-2" />,
  <PiSpeakerSimpleNone
    key="f10"
    className="w-1 h-1 mb-[0.5px] ml-[0.8px] sm:ml-[1px] sm:mb-[1px] sm:h-[6.5px] sm:w-2"
  />,
  <RxSpeakerModerate
    key="f11"
    className="w-1 h-1 mb-[0.5px] ml-[0.8px] sm:mb-[1px] sm:h-[6.5px] sm:w-2"
  />,
  <RxSpeakerLoud
    key="f12"
    className="w-1 h-1 mb-[0.5px] ml-[0.8px] sm:ml-[2px] sm:mb-[1px] sm:h-1.5 sm:w-1.5"
  />,
];

export const KeyboardRows = [
  [
    "~`",
    "!1",
    "@2",
    "#3",
    "$4",
    "%5",
    "^6",
    "&7",
    "*8",
    "(9",
    ")0",
    "_-",
    "+=",
  ],
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{[", "}]", "|\\"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", ":;", "\"'"],
  ["Z", "X", "C", "V", "B", "N", "M", "<,", ">.", "?/"],
];
