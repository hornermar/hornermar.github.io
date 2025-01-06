import { Link } from "react-router-dom";
import "./Projects.css";
import { map } from "lodash";
import { ProjectType, Note } from "../../types/ProjectType";
import { projects } from "../../data/projects";

type ProjectProps = {
  code: string;
  title: string;
  description: string;
  image: string;
  note?: string;
  url?: string;
};

const Project = ({ code, title, description, image, note }: ProjectProps) => {
  const linkTo = `${code}/info`;
  return (
    <div className="project">
      <div className="project__image">
        <Link to={linkTo}>
          <img src={image} alt={title} />
        </Link>
      </div>

      <div className="project__text">
        <Link to={linkTo}>
          <h3>{`➜ ${title}`}</h3>
        </Link>

        {note && note === Note.inProgress && <p>[{note}]</p>}
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
