import ProfileDetails from "@/components/ProfileDetails";
import RankingSection from "@/components/RankingSection";
import TopSpeedSection from "@/components/TopSpeedSection";

export default function Profile() {
  return (
    <div className={`flex flex-col items-center h-full w-full overflow-hidden`}>
      <div className="w-full h-full flex flex-col lg:py-10 items-center gap-6">
        <ProfileDetails />
        <RankingSection />
        <TopSpeedSection />
      </div>
    </div>
  );
}
