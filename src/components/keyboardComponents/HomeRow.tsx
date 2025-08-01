import { KeyboardRows } from "./KeyboardConfig";
import { Key, RegularKey } from "./Keys";

export default function HomeRow() {
  return (
    <div className="w-full flex justify-end gap-0.5 sm:gap-[3px]">
      <Key
        key={"Capslock"}
        className="relative  flex  justify-start items-end py-0.5 px-1 rounded-xs sm:rounded-sm  flex-grow h-5 sm:h-7.5 text-[4px] sm:text-[6px]"
      >
        <div className="absolute left-1.5 top-2 rounded-full bg-white/60 w-0.5 h-0.5" />
        caps lock
      </Key>
      {KeyboardRows[2].map((keyName) => (
        <RegularKey key={keyName}>
          {keyName.length > 1 ? (
            <div className="py-0.5 flex flex-col items-center justify-start text-[7px] font-bold">
              <div className=" flex items-end">{keyName[0]}</div>
              <p className="flex items-start">{keyName[1]}</p>
            </div>
          ) : (
            <p className="text-[8px] font-bold">{keyName}</p>
          )}
        </RegularKey>
      ))}
      <Key
        key={"Enter"}
        className=" relative flex justify-end items-end px-1 py-0.5  rounded-xs sm:rounded-sm max-sm:w-8.5 h-5 sm:flex-grow sm:h-7.5 text-[5px] sm:text-[6px]"
      >
        return
      </Key>
    </div>
  );
}
