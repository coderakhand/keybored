import TypingBox from "@/components/TypingBox";

export default function Type() {
  return (
    <div className="relative flex-grow flex w-full justify-center py-40">
      <TypingBox />
      <div className="absolute bottom-6 flex w-full h-6 justify-center items-center gap-2 text-xs text-gray-400">
        <span className="bg-gray-400 px-1 text-gray-900 rounded-[1px]">
          tab
        </span>
        <p>+</p>
        <span className="bg-gray-400 px-1 text-gray-900 rounded-[1px]">
          enter
        </span>
        <p>-</p>
        <p>restart test</p>
      </div>
    </div>
  );
}
