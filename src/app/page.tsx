import ProfileSection from "@/components/ProfileSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#3b3b3b] h-screen">
      <ProfileSection />
    </div>
  );
}
export const metadata = {
  title: "Mohd Salar Khan|Portfolio",
  description: "Porfolio for Mohd Salar Khan",
};
