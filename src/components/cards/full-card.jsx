import { techData } from "../../data/tech-data";
import TechChip from "../tech-chip";

const FullCard = ({ project }) => {
  return (
    <div className="full-card w-80vw md:w-60vw smooth-trasnsition">
      <div className="   flex justify-between items-center">
        <h1 className="text-2xl font-medium p-4 text-white">{project.title}</h1>
        <a
          target="_blank"
          rel="noreferrer"
          className="hidden md:block smooth-trasnsition font-bold text-white hover:text-purple-200 text-2xl bg-white bg-opacity-20 px-4 py-2 rounded-full transition-all duration-300 hover:bg-opacity-30"
          href={project.link}
        >
          Visit
        </a>
      </div>
      <p className="p-4 text-purple-100">{project.description}</p>
      <div className="p-4 flex flex-wrap gap-3">
        {project.techUsed &&
          project.techUsed.map((tech) => {
            return (
              <TechChip
                key={tech}
                tech={techData.filter((td) => td.name == tech)[0]}
              />
            );
          })}
      </div>
      <div className=" py-4 md:hidden flex justify-center items-center">
        <a
          target="_blank"
          rel="noreferrer"
          className="smooth-trasnsition font-bold text-white hover:text-purple-200 text-2xl bg-white bg-opacity-20 px-4 py-2 rounded-full transition-all duration-300 hover:bg-opacity-30"
          href={project.link}
        >
          Visit ↗
        </a>
      </div>
    </div>
  );
};

export default FullCard;
