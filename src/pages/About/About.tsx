import { Link } from "react-router-dom";
import "./About.css";

export const About = () => {
  return (
    <div className="about">
      {/* <p>
        Ahoj, jsem Markéta, kunsthistorička, co se rozhodla přejít do IT. Bavím
        se propojováním těchto dvou oborů skrz web development. Mám instagram,
        email.
      </p>

      <table>
        <tr>
          <th>2015 – 2021</th>
          <td>Muzeum umění a designu Benešov | MUD</td>
        </tr>
      </table> */}

      <p className="link">
        <Link to="https://www.instagram.com/marketa_hajek">➜ Instagram</Link>
      </p>
      <p className="link">
        <Link to="mailto:hornerova.m@gmail.com">➜ Email</Link>
      </p>
    </div>
  );
};
