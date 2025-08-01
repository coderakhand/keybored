import { KeyboardRows } from "./KeyboardConfig";
import { Key, RegularKey } from "./Keys";

export default function NumberRow() {
  return (
    <div className="w-full flex justify-end gap-0.5 sm:gap-[3px]">
      {KeyboardRows[0].map((keyName) => (
        <RegularKey key={keyName}>
          <div className="py-1 flex flex-col items-center justify-start text-[6px] sm:text-[8px] font-bold">
            <div className=" flex items-end">{keyName[0]}</div>
            <p className="flex items-start">{keyName[1]}</p>
          </div>
        </RegularKey>
      ))}
      <Key
        key={"delete"}
        className="flex-grow flex justify-end items-end px-1 py-0.5  rounded-xs sm:rounded-sm h-5 sm:h-7.5 text-[4px] sm:text-[6px]"
      >
        delete
      </Key>
    </div>
  );
}
