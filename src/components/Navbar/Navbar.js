import { Link, useLocation } from "react-router-dom";

import "./Navbar.scss";

export default function Navbar({ routes }) {
  const current = useLocation();

  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/">Jofresh</Link>
      </div>

      <div className="navbar__center">
        {routes.map((route, i) => (
          <Link
            to={route.path}
            key={i}
            className={`navbar__center-item${
              route.path === current.pathname ? "--current" : ""
            }`}
          >
            {route.name}
          </Link>
        ))}
      </div>

      <div className="navbar__right">
        <a
          href="https://github.com/Jofresh/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
}
