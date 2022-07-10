import { Link } from "react-router-dom";

import "./Navbar.scss";

export default function Navbar({ routes }) {
  return (
    <div className="navbar">
      <Link to="/" className="navbar__brand">
        Jofresh
      </Link>

      <div className="navbar__center">
        {routes.map((route, i) => (
          <Link to={route.path} key={i}>
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
