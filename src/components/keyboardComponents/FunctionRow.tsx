import { functionKeys } from "./KeyboardConfig";
import { Key } from "./Keys";


export default function FunctionRow(){
    return <div className="w-full flex justify-end gap-[3px]">
        <Key
          key={"escape"}
          className="flex-grow  justify-start items-center py-0.5 px-0.5 rounded-xs sm:rounded-sm  h-3 sm:h-5 text-[4px] sm:text-[6px]"
        >
          esc
        </Key>
        {functionKeys.map((Logo, idx) => (
          <Key
            key={idx}
            className="flex  justify-center items-end py-0.5 px-1 rounded-xs sm:rounded-sm  w-5 h-3 sm:h-5 sm:w-[32px] text-[3px] sm:text-[5px]"
          >
            <div className="flex flex-col sm:gap-[0.5px]">
              {Logo}
              <p>{"F" + (idx + 1)}</p>
            </div>
          </Key>
        ))}
        <button
          key={"touchId"}
          className="flex  justify-center items-end py-0.5 px-1 bg-black text-white rounded-xs sm:rounded-sm  w-3 h-3 sm:w-5 sm:h-5 text-[4px] font-extrabold overflow-hidden"
        />
      </div>
}