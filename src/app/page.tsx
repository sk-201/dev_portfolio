import InfoSection from "@/components/InfoSection";
import ProfileSection from "@/components/ProfileSection";

export default function Home() {
  return (
    <div className="bg-background h-full py-20 px-10  ">
      <div className="border-2 border-lightGray flex rounded-xl">
        <ProfileSection />
        <InfoSection />
      </div>
    </div>
  );
}
export const metadata = {
  title: "Mohd Salar Khan|Portfolio",
  description: "Porfolio for Mohd Salar Khan",
};
