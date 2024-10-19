import { Link } from "react-router-dom";
import { ProjectType } from "../../types/ProjectType";
import "./Detail.css";

type DetailProps = ProjectType;

export const Detail = ({
  title,
  description,
  image,
  code,
  why,
  technology,
  url,
}: DetailProps) => {
  const linkOnline = url ? url : code;

  return (
    <div className="detail">
      <div className="detail__image">
        <img src={image} alt={title} />
      </div>

      <div className="detail__text">
        <h2>{title}</h2>
        <Link to={linkOnline} reloadDocument className="online">
          <i>Online tady!</i>
        </Link>
        <h3>Popis</h3>
        <p>{description}</p>
        <p>{why}</p>
        <p>{technology}</p>
        {/* <h3>Tisková zpráva</h3>
        <p>{press ?? "Není. Měla by být?"}</p> */}
        <h3>Dokumentace</h3>
        <ul>
          <li>
            <Link to={`https://github.com/hornermar/${code}`}>Zdrojvý kód</Link>
          </li>
          ...
        </ul>
      </div>
    </div>
  );
};
