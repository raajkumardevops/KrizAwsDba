import "./Footer.css";

function Footer() {
  return (
    <footer className="custom-footer">

      <div className="container footer-container">

        <p className="footer-copy">
          © 2026 <span className="brand">KrizAWSDBA</span> | All Rights Reserved
        </p>

        <div className="footer-links">

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/krishnan-thiruvengadam-598258186/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>

          <span className="footer-divider">•</span>

          {/* EMAIL (FIXED) */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kriz1111@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Email
          </a>

          <span className="footer-divider">•</span>

          {/* LOCATION */}
          <span className="footer-location">
            Sydney, Australia
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;