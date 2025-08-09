import { AnimatedWords } from "@/components/AnimatedWords";
import KeyBoard from "@/components/KeyBoard";
import Logo from "@/components/Logo";
import { StartButton } from "@/components/StartButton";
export default function Home() {
  return (
    <div className="h-full w-full flex justify-center">
      <div className="relative max-w-[1200px] w-full h-full max-h-[1200px]">
        <Logo />

        <div className="flex flex-col items-center w-full gap-2 mt-15">
          <div className="flex gap-3 w-full justify-center items-center text-white text-5xl font-goldman">
            <div className="flex w-134 gap-4">
              Learn
              <AnimatedWords />
            </div>
          </div>

          <div className="flex w-full justify-center items-center text-2xl text-white font-goldman">
            With Our Typing Lessons
          </div>
        </div>
        <div className="mt-10 mb-10 flex w-full justify-center">
          <StartButton />
        </div>
        <div className="absolute bottom-10 w-full flex justify-center items-center">
          <KeyBoard />
        </div>
      </div>
    </div>
  );
}
