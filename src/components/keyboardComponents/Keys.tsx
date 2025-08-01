import { BsOption } from "react-icons/bs";
import { IoCaretBack, IoCaretDown, IoCaretForward, IoCaretUp } from "react-icons/io5";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";

export function CommandKey() {
  return (
    <Key
      key={"command"}
      className="relative flex  justify-center items-end py-0.5 px-1 rounded-xs sm:rounded-sm  w-6.5 h-5 sm:w-9.5 sm:h-7.5 text-[4px] sm:text-[5px]"
    >
      <MdOutlineKeyboardCommandKey className="absolute left-0.5 top-0.5 sm:left-1 sm:top-1 h-1 w-1 sm:h-2 sm:w-2" />
      command
    </Key>
  );
}

export function OptionKey() {
  return (
    <Key
      key={"option"}
      className="relative flex  justify-center items-end py-0.5 px-1 rounded-xs sm:rounded-sm  w-5 h-5 sm:w-7 sm:h-7.5 text-[4px] sm:text-[5px]"
    >
      <BsOption className="absolute left-0.5 top-0.5 sm:left-1 sm:top-1 h-1 w-1 sm:h-2 sm:w-2 max-sm:stroke-2" />
      <p>option</p>
    </Key>
  );
}

export function ArrowKeys() {
  return (
    <div className="grid grid-rows-2 max-sm:pt-0.5">
      <div className="w-full flex justify-center items-end">
        <ArrowKey className="rounded-t-xs">
          <IoCaretUp className="h-1.5 w-[4.5px] sm:h-2 sm:w-1.5" />
        </ArrowKey>
      </div>
      <div className="flex justify-center items-end gap-[2px] sm:gap-[3px]">
        <ArrowKey className="rounded-xs">
          <IoCaretBack className="h-1.5 w-[4.5px] sm:h-2 sm:w-1.5" />
        </ArrowKey>
        <ArrowKey className="rounded-b-xs">
          <IoCaretDown className="h-1.5 w-[4.5px] sm:h-2 sm:w-1.5" />
        </ArrowKey>
        <ArrowKey className="rounded-xs">
          <IoCaretForward className="h-1.5 w-[4.5px] sm:h-2 sm:w-1.5" />
        </ArrowKey>
      </div>
    </div>
  );
}

export function RegularKey({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Key
      className={`flex justify-center items-center rounded-xs sm:rounded-sm w-5 h-5 sm:w-7.5 sm:h-7.5 ${className}`}
    >
      {children}
    </Key>
  );
}

export function ArrowKey({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Key
      className={`flex justify-center items-center py-0.5 px-1 w-4 h-2 sm:w-5.5 sm:h-3.5 text-[4px]  ${className}`}
    >
      {children}
    </Key>
  );
}

export function Key({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`cursor-pointer shadow-sm shadow-white/50  hover:shadow-black/30 hover:scale-104 bg-black text-white font-extrabold overflow-hidden ${className}`}
    >
      {children}
    </button>
  );
}