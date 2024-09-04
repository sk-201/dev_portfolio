const About = () => {
  return (
    <div className="mt-10  h-2/4 " id="about">
      <div className=" my-5 ">
        {" "}
        <p className="text-3xl text-brightGray">About</p>
      </div>
      <div className=" grid  lg:grid-cols-2 mt-10 text-center ">
        <div className=" border cursor-pointer border-x border-y border-lightGray pl-2  pr-8 pb-4 pt-2 m-2  rounded-md">
          {" "}
          <p className=" text-lg lg:text-3xl text-brightGray ">Name</p>
          <p className=" text-xl lg:text-2xl text-amber ">Mohd Salar Khan</p>
        </div>
        <div className=" border cursor-pointer border-x border-y border-lightGray  pl-2  pr-8 pb-4 pt-2 m-2  rounded-md ">
          {" "}
          <p className="text-lg lg:text-3xl text-brightGray ">
            Work Experience
          </p>
          <p className="text-xl lg:text-2xl text-amber ">2.5 years</p>
        </div>
        <div className=" border cursor-pointer border-x border-y border-lightGray  pl-2  pr-8 pb-4 pt-2 m-2  rounded-md ">
          {" "}
          <p className="text-lg lg:text-3xl text-brightGray ">Languages</p>
          <p className="text-xl lg:text-2xl text-amber ">English,Hindi</p>
        </div>
        <div className=" border cursor-pointer border-x border-y border-lightGray  pl-2  pr-8 pb-4 pt-2  m-2  rounded-md ">
          {" "}
          <p className="text-lg lg:text-3xl text-brightGray">Resume</p>
          <p className="text-xl lg:text-2xl text-amber">
            Click here for Resume
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
