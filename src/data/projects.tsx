import { ProjectType } from "../types/ProjectType";
import { Link } from "react-router-dom";
import vymazSiPamatkuImage from "../assets/vymaz-si-pamatku-banner.png";
import systemSykoraImage from "../assets/system-sykora-banner.png";

export const projects: ProjectType[] = [
  {
    code: "vymaz-si-pamatku",
    title: "Vymaž si památku",
    description: "Užij si bourání památek. Aspoň na chvilku!",
    why: "Po zbourání Transgasu a hotelu Praha ve mně začala narůstat frustrace. Když se objevily zprávy, že má zmizet i železniční most a Chemapol, potřebovala jsem si v tom najít nějakou formu uspokojení. Tak z toho vznikla tahle hříčka. Tadá!",
    technology: (
      <>
        Hra je napsaná v JavaScriptu. Použité písmo je{" "}
        <Link to="https://fonts.google.com/specimen/Micro+5">Micro 5</Link>.
      </>
    ),
    image: vymazSiPamatkuImage,
    url: "/vymaz-si-pamatku/index.html",
  },
  {
    code: "system-sykora",
    title: "Systém Sýkora",
    description: "Vyzkoušej si algoritmus Zdeňka Sýkory a zjisti, jak funguje.",
    image: systemSykoraImage,
    note: "(In Progress)",
  },
];
