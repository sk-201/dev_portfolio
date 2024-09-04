import React from "react";

const Contact = () => {
  const contactStack: { id: number; name: string }[] = [
    { id: 1, name: "Email" },
    { id: 2, name: "Phone" },
    { id: 3, name: "X" },
    { id: 4, name: "Github" },
    { id: 5, name: "LinkedIn" },
  ];
  return (
    <div className="mt-10  h-2/4 " id="contact">
      <div className=" my-5 ">
        {" "}
        <p className="text-3xl text-brightGray">Contact</p>
      </div>
      <div className=" grid lg:grid-cols-2 mt-10 ">
        {contactStack.map((contact) => {
          return (
            <div
              className=" cursor-pointer text-center border border-x border-y border-lightGray pl-2  pr-8 pb-4 pt-2 m-2  rounded-md"
              key={contact.id}
            >
              {" "}
              <p className="text-xl lg:text-3xl text-amber ">{contact.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
