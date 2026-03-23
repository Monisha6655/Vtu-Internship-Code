import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="nav">
      {/* LOGO */}
      <h2 className="logo">Monisha BR</h2>

      {/* LINKS */}
      <div className="nav-links">

        <Link 
          to="/" 
          onClick={() => window.scrollTo(0, 0)}
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </Link>

        <Link 
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          About
        </Link>

        <Link 
          to="/projects"
          className={location.pathname === "/projects" ? "active" : ""}
        >
          Projects
        </Link>

        <Link 
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact
        </Link>

        <Link 
          to="/dashboard"
          className={location.pathname === "/dashboard" ? "active" : ""}
        >
          Dashboard
        </Link>

        {/* THEME TOGGLE */}
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;