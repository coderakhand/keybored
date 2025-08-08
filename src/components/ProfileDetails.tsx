import Image from "next/image";

export default function ProfileDetails() {
  return (
    <div className="w-full flex bg-gray-800/50 py-4 gap-10 px-8 rounded-lg max-w-[1000px]">
      <div className="flex gap-4">
        <Image
          src="https://api.dicebear.com/9.x/thumbs/svg?seed=Sadie"
          height={140}
          width={140}
          alt=""
          className="md:w-26 md:h-26 rounded-full"
        />
        <div className="h-full flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold">akhand</h1>
          <p>Joined 30 Jan 2025</p>
        </div>
      </div>
      <div className="h-full w-1.5 rounded-full bg-gray-700/60" />
      <div className="grid grid-rows-2">
        <div>
          <p>typing time</p>
          <p className="text-2xl">200</p>
        </div>
        <div>
          <p>tests completed</p>
          <p className="text-2xl">200</p>
        </div>
      </div>
      <div className="h-full w-1.5 rounded-full bg-gray-700/60" />
      <div className="grid grid-rows-2">
        <div>
          <label>Bio</label>
          <div></div>
        </div>
        <div>
          <label>Keyboard</label>
          <div></div>
        </div>
      </div>
    </div>
  );
}
