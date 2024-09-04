import { rajdhani } from "@/app/fonts";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";

const InfoSection = () => {
  return (
    <div
      className={`${rajdhani.className} w-72 lg:w-3/4 mx-10 h-full border-2 border-lightGray  rounded-xl  pt-5 px-10 `}
    >
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default InfoSection;
