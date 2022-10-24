import { React } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import "./script";

function Nav() {
  return (
    <div className="Nav">
      <div className="Brand-Name">Béla Noé</div>
      <Link href="#" className="toggle-button">
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </Link>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projekte</Link>
          </li>
          <li>
            <Link to="/about">Über</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
