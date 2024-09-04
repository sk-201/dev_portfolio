import React from "react";

const Skills = () => {
  const techStack: { id: number; name: string }[] = [
    { id: 1, name: "React" },
    { id: 2, name: "Next" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "TypeScript" },
    { id: 5, name: "NodeJS" },
    { id: 6, name: "VueJS" },
    { id: 7, name: "NuxtJS" },
    { id: 8, name: "C++" },
    { id: 9, name: "C" },
  ];
  return (
    <div className="mt-10  h-2/4 " id="skills">
      <div className=" my-5 ">
        {" "}
        <p className="text-3xl text-brightGray">Skills</p>
      </div>
      <div className=" grid  lg:grid-cols-2 mt-10 ">
        {techStack.map((skill) => {
          return (
            <div
              className=" cursor-pointer text-center border border-x border-y border-lightGray pl-2  pr-8 pb-4 pt-2 m-2  rounded-md"
              key={skill.id}
            >
              {" "}
              <p className=" text-xl lg:text-3xl text-amber ">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
