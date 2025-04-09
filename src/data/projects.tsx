import { Link } from "react-router-dom";

import { ProjectType, Note } from "../types/ProjectType";
import vymazSiPamatkuImage from "../assets/vymaz-si-pamatku-banner.png";
import systemSykoraImage from "../assets/system-sykora-banner.png";
import dumVannyVenturioveImage from "../assets/dum-vanny-venturiove-banner.png";

export enum ProjectNote {
  inProgress = "(In progress)",
}

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
    note: Note.done,
  },
  {
    code: "dum-vanny-venturiove",
    title: "Dům Vanny Venturive",
    description: "Jaký je příběh prvního postmoderního domu vůbec? To zjistíš.",
    image: dumVannyVenturioveImage,
    note: Note.done,
  },
  {
    code: "system-sykora",
    title: "Systém Sýkora",
    description: "Vyzkoušej si algoritmus Zdeňka Sýkory a zjisti, jak funguje.",
    image: systemSykoraImage,
    note: Note.inProgress,
  },
];
