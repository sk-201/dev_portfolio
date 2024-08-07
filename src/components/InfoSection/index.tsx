import { rajdhani } from "@/app/fonts";
import About from "../About";
import Skills from "../Skills";

const InfoSection = () => {
  return (
    <div
      className={`${rajdhani.className} w-3/4 mx-10 h-full border-l-2 border-lightGray  pt-5 px-10 `}
    >
      <About />
      <Skills />
    </div>
  );
};

export default InfoSection;
