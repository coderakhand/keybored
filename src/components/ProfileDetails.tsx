import Image from "next/image";
import { MdModeEditOutline } from "react-icons/md";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";

export default function ProfileDetails() {
  return (
    <div className="w-full flex bg-gray-800/50 py-8 gap-8 pl-8 rounded-lg max-w-[1200px]">
      <div className="flex gap-4">
        <Image
          src="https://api.dicebear.com/9.x/thumbs/svg?seed=Sadie"
          height={140}
          width={140}
          alt=""
          className="md:w-26 md:h-26 rounded-full selection:bg-transparent"
        />
        <div className="h-full flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold">akhand</h1>
          <p className="text-gray-400 text-xs font-medium">
            Joined 30 Jan 2025
          </p>
        </div>
      </div>
      <div className="h-full w-1.5 rounded-full bg-gray-700/60" />
      <div className="grid grid-rows-2">
        <div>
          <p className="text-gray-400 text-sm font-medium">typing time</p>
          <p className="text-2xl">200</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm font-medium">tests completed</p>
          <p className="text-2xl">200</p>
        </div>
      </div>
      <div className="h-full w-1.5 rounded-full bg-gray-700/60" />
      <div className="flex-grow grid grid-rows-2">
        <div>
          <label className="text-gray-400 text-sm font-medium">Bio</label>
          <div></div>
        </div>
        <div>
          <label className="text-gray-400 text-sm font-medium">Keyboard</label>
          <div></div>
        </div>
      </div>
      <div className="h-full w-1.5 rounded-full bg-gray-700/60" />
      <div className="h-full grid grid-rows-3 gap-4 justify-center items-center">
        <ExternalPlatform link={""}>
          <FaGithub className="text-gray-400 w-6 h-6" />
        </ExternalPlatform>
        <ExternalPlatform link={""}>
          <BsTwitterX className="text-gray-400 w-6 h-6" />
        </ExternalPlatform>
        <ExternalPlatform link={""}>
          <FaGlobe className="text-gray-400 w-6 h-6" />
        </ExternalPlatform>
      </div>
      <div className="grid grid-rows-2 w-10 h-full items-center justify-center">
        <div className="h-full flex items-start">
          <MdModeEditOutline className="w-6 h-6  text-gray-700/60" />
        </div>
        <div className="h-full flex items-end">
          <FaLink className="w-6 h-6  text-gray-700/60" />
        </div>
      </div>
    </div>
  );
}

function ExternalPlatform({
  link,
  children,
}: {
  link: string;
  children?: React.ReactNode;
}) {
  return <a href={link}>{children}</a>;
}
