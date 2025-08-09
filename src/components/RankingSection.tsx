export default function RankingSection() {
  return (
    <div className="w-full max-w-[1200px] bg-gray-800/50 rounded-lg p-8 grid grid-cols-[30%_70%]">
      <span className="text-xl font-medium text-gray-400">LeaderBoard Rankings</span>
      <div className="w-full grid grid-cols-2">
        <div className="flex">
          <label className="text-lg text-gray-400">15 seconds</label>
          <div></div>
        </div>
        <div className="flex">
          <label className="text-lg text-gray-400">60 seconds</label>
          <div></div>
        </div>
      </div>
    </div>
  );
}
