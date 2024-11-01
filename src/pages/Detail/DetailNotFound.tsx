import { Link } from "react-router-dom";

export const DetailNotFound = () => {
  return (
    <div>
      <h2>Tady nic není</h2>
      <p>Projekt který se snažíš najít neexistuje.</p>
      <Link to="/">Zpět na úvodní stránku</Link>
    </div>
  );
};
