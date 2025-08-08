import ProfileDetails from "@/components/ProfileDetails";
import RankingSection from "@/components/RankingSection";
import TopSpeedSection from "@/components/TopSpeedSection";

export default function Profile() {
  return (
    <div
      className={`flex flex-col items-center h-full w-full overflow-hidden px-8`}
    >
      <div className="w-full h-full flex flex-col justify-center items-center gap-4">
        <ProfileDetails />
        <RankingSection />
        <TopSpeedSection />
      </div>
    </div>
  );
}
