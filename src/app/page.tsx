import InfoSection from "@/components/InfoSection";
import ProfileSection from "@/components/ProfileSection";

export default function Home() {
  return (
    <div className="bg-[#0b0e21] h-full py-20 px-10 flex  ">
      <ProfileSection />
      <InfoSection />
    </div>
  );
}
export const metadata = {
  title: "Mohd Salar Khan|Portfolio",
  description: "Porfolio for Mohd Salar Khan",
};
