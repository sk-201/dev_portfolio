import { rajdhani } from "@/app/fonts";

const InfoSection = () => {
  const profile_items: { id: number; name: string }[] = [
    { id: 1, name: "About" },
    { id: 2, name: "Skills" },
    { id: 3, name: "Contact" },
    { id: 4, name: "Project" },
  ];
  return (
    <div
      className={`${rajdhani.className} w-3/4 mx-10 h-screen border-2 border-red-600 pt-5 px-10 `}
    >
      <div className="mt-10 border-2 rounded border-blue-600">
        {profile_items.map((item) => {
          return (
            <div
              className="border-2 border-green-600 px-5 my-20 mx-20"
              key={item.id}
            >
              {" "}
              <p className="text-3xl text-white">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoSection;
