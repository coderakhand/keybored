import { KeyboardRows } from "./KeyboardConfig";
import { Key, RegularKey } from "./Keys";

export default function TopLetterRow() {
  return (
    <div className="w-full flex justify-end gap-0.5 sm:gap-[3px]">
      <Key
        key={"tab"}
        className="flex-grow flex items-end justify-start px-1 py-0.5 rounded-xs sm:rounded-sm h-5 sm:h-7.5 text-[5px] sm:text-[6px]"
      >
        tab
      </Key>
      {KeyboardRows[1].map((keyName) => (
        <RegularKey key={keyName}>
          {keyName.length > 1 ? (
            <div className=" flex flex-col gap-[0.3px] text-[5px] sm:text-[7px] font-extrabold">
              <p>{keyName[0]}</p>
              <p>{keyName[1]}</p>
            </div>
          ) : (
            <p className="text-[8px] sm:text-[10px] font-bold">{keyName}</p>
          )}
        </RegularKey>
      ))}
    </div>
  );
}
