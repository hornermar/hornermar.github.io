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
    code: "dum-vanny-venturiove",
    title: "Dům Vanny Venturivé",
    description:
      "Dům Vanny Venturiové byl postaven v roce 1964, architekt Robert Venturi na něm ale pracoval už od roku 1959. Po jeho dokončení jej popsal ve své knize Složitosti a protiklady v architektuře. Jaký je příběh tohoto domu? To můžeš zjistit zde.",
    why: "Na Roberta Venturiho a jeho knihu Learning from Las Vegas jsem narazila před 8 lety na Erasmu ve Vídni. Až nedávno jsem ale zjistila, že vedle teoretických spisů byl také architektem. Vymezoval se vůči modernismu a je autorem výroku 'Less is a bore'. Dům pro jeho matku je jedním z prvních postmoderních domů vůbec. Chtěla jsem se do tohoto tématu ponořit o něco víc a zároveň jsem si chtěla vyzkoušet tvorbu svg obrázků.",
    technology: (
      <>
        Stránka je napsaná pomocí JavaScriptu. Písmo je{" "}
        <Link to="https://fonts.google.com/specimen/Roboto+Mono?query=roboto+mono">
          Roboto Mono
        </Link>
        . Pro tvorbu svg jsem použila online editor{" "}
        <Link to="https://editor.method.ac/">Method Draw</Link>
      </>
    ),
    image: dumVannyVenturioveImage,
    note: Note.done,
  },
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
    code: "system-sykora",
    title: "Systém Sýkora",
    description:
      "Wokin v Jindřišské není jen restaurací. Uvnitř se nachází mozaika významného českého umělce Zdeňka Sýkory, kterou vytvořil pomocí algoritmu. Vyzkoušej si a prozkoumej, jak tento algoritmus funguje.",
    image: systemSykoraImage,
    note: Note.inProgress,
  },
];
