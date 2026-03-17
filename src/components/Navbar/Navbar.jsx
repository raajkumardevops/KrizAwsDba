import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg px-4 py-3 sticky-top custom-navbar"
      data-aos="fade-down"
      data-aos-delay="100"
    >
      <div className="container">

        <Link className="navbar-brand fw-bold text-primary custom-brand" to="/">
          KrizAWSDBA
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">

            <li className="nav-item">
              <Link className="nav-link d-inline-block" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link d-inline-block" to="/blog">
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link d-inline-block" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link d-inline-block" to="/expertise">
                Expertise
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link d-inline-block" to="/contact">
                Contact
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;