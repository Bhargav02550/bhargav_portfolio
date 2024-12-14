import MakeCenter from "../components/make-center";
import { data } from "../data/data";
const Hero = () => {
  console.log(screen.width);
  return (
    <div id="about">
      <MakeCenter>
        <div className="pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl  leading-normal lg:leading-relaxed md:py-30">
            I’m <span className="font-bold">{data.name}</span> - an enthusiastic
            <span className="font-medium"> designer & developer</span> based in
            India.
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl leading-normal lg:leading-relaxed pb-5 pt-5">
            {data.aboutMe}
          </p>
        </div>
      </MakeCenter>
    </div>
  );
};

export default Hero;
