import MakeCenter from "../components/make-center";
import { data } from "../data/data";
const Hero = () => {
  return (
    <div id="about">
      <MakeCenter>
        <div className="pt-24 pb-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-normal lg:leading-relaxed md:py-30 text-white font-light">
            I'm <span className="font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">{data.name}</span> - an enthusiastic
            <span className="font-medium text-purple-100"> designer & developer</span> based in
            <span className="text-purple-100"> India</span>.
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl leading-normal lg:leading-relaxed pb-5 pt-8 text-purple-100 font-light max-w-4xl">
            {data.aboutMe}
          </p>
        </div>
      </MakeCenter>
    </div>
  );
};

export default Hero;