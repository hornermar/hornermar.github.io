import { NavLink, useLocation } from "react-router-dom";
import { map } from "lodash";
import "./Header.css";

const Separator = () => <span>,</span>;

const links = [
  { to: "/", label: "Markéta Hájková" },
  { to: "/o-mne", label: "O mně" },
  { to: "/projekty", label: "Projekty" },
];

export const Header = () => {
  const location = useLocation();

  const getBasePath = (path: string) => {
    const segments = path.split("/");
    return `/${segments[1]}`;
  };

  return (
    <header>
      <div className="nav">
        {map(links, (link) => {
          if (link.to === getBasePath(location.pathname) || link.to === "/") {
            return (
              <div key={link.to}>
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  {link.label}
                </NavLink>
                <Separator />
              </div>
            );
          }
        })}
      </div>
    </header>
  );
};
