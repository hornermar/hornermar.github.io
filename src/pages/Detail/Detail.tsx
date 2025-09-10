import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { useParams } from "react-router-dom";
import "./Detail.css";
import { find } from "lodash";
import { DetailNotFound } from "./DetailNotFound";

export const Detail = () => {
  const { project } = useParams<{ project: string }>();

  const detailData = find(projects, { code: project });

  if (!detailData) return <DetailNotFound />;

  const { code, title, description, why, technology, image, url } = detailData;

  const linkOnline = url ? url : `https://marketahajek.cz/${code}`;

  return (
    <div className="detail">
      <div className="detail__image">
        <img src={image} alt={title} />
      </div>

      <div className="detail__text">
        <h2>{title}</h2>
        {
          <Link to={linkOnline} reloadDocument className="online">
            ➜ Online tady
          </Link>
        }
        <h3>Popis</h3>
        <p>{description}</p>
        <p>{why}</p>
        <p>{technology}</p>
        {/* <h3>Tisková zpráva</h3>
        <p>{press ?? "Není. Měla by být?"}</p> */}
        <h3>Dokumentace</h3>
        <ul>
          <li>
            Podívej se na kód v{" "}
            <Link to={`https://github.com/hornermar/${code}`}>repozitáři</Link>.
          </li>
        </ul>
      </div>
    </div>
  );
};
