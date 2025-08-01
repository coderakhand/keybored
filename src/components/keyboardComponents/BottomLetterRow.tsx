import { KeyboardRows } from "./KeyboardConfig";
import { Key, RegularKey } from "./Keys";

export default function BottomLetterRow() {
  return (
    <div className="w-full flex justify-end gap-0.5 sm:gap-[3px]">
      <Key
        key={"leftShift"}
        className="flex  justify-start items-end py-0.5 px-1 rounded-xs sm:rounded-sm  flex-grow h-5 sm:h-7.5 text-[4px] sm:text-[6px]"
      >
        shift
      </Key>
      {KeyboardRows[3].map((keyName) => (
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
        key={"rightShift"}
        className="flex-grow flex justify-end items-end px-1 py-0.5 font-bold rounded-xs sm:rounded-sm h-5 sm:h-7.5 text-[5px] sm:text-[6px]"
      >
        shift
      </Key>
    </div>
  );
}
