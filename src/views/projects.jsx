import FullCard from "../components/cards/full-card";
import MakeCenter from "../components/make-center";
import { data } from "../data/data";
const Work = () => {
  return (
    <div id="work">
      <MakeCenter>
        <h1 className="heading">Recent Works</h1>
        <div className="flex flex-col gap-10 w-full">
          {data.projects.map((project, index) => (
            <div 
              key={project.id} 
              className="fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <FullCard project={project} />
            </div>
          ))}
        </div>
      </MakeCenter>
    </div>
  );
};

export default Work;
