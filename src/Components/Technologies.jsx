import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";

const Technologies = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-6xl font-bold">Technologies</h1>
      <div className="flex items-center justify-between gap-4 py-8 text-8xl">
        <BiLogoHtml5 className="text-orange-600" />
        <BiLogoCss3 className="text-blue-600" />
        <BiLogoJavascript className="text-yellow-500" />
        <BiLogoJava />
        <BiLogoTailwindCss className="text-blue-600" />
        <BiLogoReact className="text-blue-400" />
      </div>
    </div>
  );
};

export default Technologies;
