import { Link } from "react-router-dom";
import "./About.css";

export const About = () => {
  return (
    <div className="about">
      <p>
        Mám <Link to="https://www.instagram.com/marketa_hajek">Instagram</Link>,{" "}
        <Link to="mailto:hornerova.m@gmail.com">Email</Link>, ...
      </p>
      <p></p>
    </div>
  );
};
