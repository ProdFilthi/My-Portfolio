import {
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoYoutube,
} from "react-icons/bi";
import image from "../assets/Filthi.png";

const Hero = () => {
  const hoverClass = "hover:scale-150 transition-all duration-300";
  const cursorClass =
    "cursor-pointer hover:text-[#3322E5] transition-all duration-300";
  return (
    <section className="items-center justify-center w-full my-10 flex-col flex">
      <img
        src={image}
        className="w-[300px] h-[300px] rounded-full shadow-md shadow-[#3322E5]"
      />
      <div className="my-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold">
          Programmer <span className="text-[#3322E5]">Filthi</span>
        </h1>
        <h3 className="text-6xl py-2 font-bold">
          <span className="text-[#3322E5]">Front-End</span> Engineer
        </h3>
        <div className="flex flex-col items-center text-xl">
          <p>I make Websites & Web Apps </p>
          <p>I also make music as a music producer</p>
          <p>I am also a passionate computer science student</p>
        </div>
        <div className="flex items-center justify-center my-8">
          <button className="bg-[#3322E5] text-white w-32 h-10 rounded shadow-md shadow-[#3322E5]">
            Download CV
          </button>
          <div className="flex items-center justify-between gap-2 ml-4 text-3xl">
            <BiLogoGithub className={`${cursorClass} ${hoverClass}`} />
            <BiLogoLinkedin className={`${cursorClass} ${hoverClass}`} />
            <BiLogoYoutube className={`${cursorClass} ${hoverClass}`} />
            <BiLogoInstagram className={`${cursorClass} ${hoverClass}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
