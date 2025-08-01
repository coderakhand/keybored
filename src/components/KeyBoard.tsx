import FunctionRow from "./keyboardComponents/FunctionRow";
import NumberRow from "./keyboardComponents/NumberRow";
import TopLetterRow from "./keyboardComponents/TopLetterRow";
import HomeRow from "./keyboardComponents/HomeRow";
import BottomLetterRow from "./keyboardComponents/BottomLetterRow";
import SpacebarRow from "./keyboardComponents/SpacebarRow";

export default function KeyBoard() {
  return (
    <div className="shadow-lg shadow-gray-400/40 h-32 w-82 sm:h-50 sm:w-124  bg-gray-400/80 rounded-md flex flex-col justify-center items-center gap-[2px] sm:gap-[3px] px-1 sm:px-2">
      <FunctionRow />
      <NumberRow />
      <TopLetterRow />
      <HomeRow />
      <BottomLetterRow />
      <SpacebarRow />
    </div>
  );
}
