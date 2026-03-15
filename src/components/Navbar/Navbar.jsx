import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg px-4 py-3 sticky-top custom-navbar" data-aos="fade-down"data-aos-delay="100">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary" href="#">
          KrizAWSDBA
        </a>

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
              <a className="nav-link d-inline-block" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-inline-block" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-inline-block" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-inline-block" href="#">Expertise</a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-inline-block" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;