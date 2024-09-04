import React from "react";

const Projects = () => {
  const projectStack: { id: number; name: string }[] = [
    { id: 1, name: "Mausam" },
    { id: 2, name: "Showlicious" },
    { id: 3, name: "Portfolio" },
    { id: 4, name: "Z-Clothing" },
    { id: 5, name: "To-do list" },
    { id: 6, name: "Colour game" },
  ];
  return (
    <div className="mt-10  h-2/4 " id="project">
      <div className=" my-5 ">
        {" "}
        <p className="text-3xl text-brightGray">Projects</p>
      </div>
      <div className=" grid lg:grid-cols-2 mt-10 ">
        {projectStack.map((project) => {
          return (
            <div
              className="cursor-pointer text-center border border-x border-y border-lightGray pl-2  pr-8 pb-4 pt-2 m-2  rounded-md"
              key={project.id}
            >
              {" "}
              <p className="text-xl lg:text-3xl text-amber ">{project.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
