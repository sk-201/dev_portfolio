"use client";
import Image from "next/image";
const ProfileSection = () => {
  const profile_items: { id: number; name: string; s_id: string }[] = [
    { id: 1, name: "About", s_id: "about" },
    { id: 2, name: "Skills", s_id: "skills" },
    { id: 3, name: "Projects", s_id: "project" },
    { id: 4, name: "Contact", s_id: "contact" },
  ];
  const scrollToSection = (s_id: string) => {
    if (typeof window !== "undefined") {
      document.getElementById(s_id)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className=" w-72  h-[550px] mb-20 px-10 border-2 border-lightGray  rounded-xl  ">
      <div>
        <div className=" mt-10 border-2 border-slate-200  text-center w-full py-10">
          <Image
            src="/favicon.ico"
            width={45}
            height={45}
            alt="profile-logo"
            className="m-auto"
          />
        </div>
        <h1 className="text-brightGray font-bold  text-2xl mt-2 text-center ">
          Mohd Salar Khan
        </h1>
        <h2 className="text-brightGray  font-medium text-center">
          Software Developer
        </h2>
      </div>
      <div className="mt-10">
        {profile_items.map((item) => {
          return (
            <p
              key={item.id}
              className="text-amber lg:hover:bg-white lg:hover:font-bold lg:hover:text-xl cursor-pointer rounded-md mt-4 border-2 border-lightGray text-center py-2"
              onClick={() => scrollToSection(item.s_id)}
            >
              {item.name}
              {/* <a href={`#${item.s_id}`}> {item.name}</a> */}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileSection;
