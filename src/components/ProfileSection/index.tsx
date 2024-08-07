import Image from "next/image";
const ProfileSection = () => {
  const profile_items: { id: number; name: string }[] = [
    { id: 1, name: "About" },
    { id: 2, name: "Skills" },
    { id: 3, name: "Contact" },
    { id: 4, name: "Project" },
  ];
  return (
    <div className=" w-72  h-full pt-20 px-10  ">
      <div>
        <div className="border-2 border-slate-200  text-center w-full py-10">
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
              className="text-brightGray rounded-md mt-4 border-2 border-lightGray text-center py-2"
            >
              {item.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileSection;
