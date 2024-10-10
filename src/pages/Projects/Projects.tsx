import { Link } from "react-router-dom";
import "./Projects.css";
import { map } from "lodash";
import { ProjectType } from "../../types/ProjectType";
import { projects } from "../../data/projects";

type ProjectProps = {
  code: string;
  title: string;
  description: string;
  image: string;
  note?: string;
};

const Project = ({ code, title, description, image, note }: ProjectProps) => {
  return (
    <div className="project">
      <div className="project__image">
        <Link to={`/projekty/${code}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className="project__text">
        <h3>
          <Link to={`/projekty/${code}`}>{title}</Link>
        </h3>
        {note && (
          <span>
            <i>{note}</i>
          </span>
        )}
        <p>{description}</p>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <div className="projects">
      {map(projects, (project: ProjectType) => (
        <Project {...project} key={project.code} />
      ))}
    </div>
  );
};
