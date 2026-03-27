import "./Footer.css";

function Footer() {
  return (
    <footer className="custom-footer">

      <div className="container footer-container">

        <p className="footer-copy">
          © 2026 <span className="brand">KrizAWSDBA</span> | All Rights Reserved
        </p>

        <div className="footer-links">

          <a
            href="https://linkedin.com/in/krishnan-thiruvengadam-598258186/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>

          <span className="footer-divider">•</span>

          <a
            href="mailto:kriz1111@gmail.com"
            className="footer-link"
          >
            Email
          </a>

          <span className="footer-divider">•</span>

          <span className="footer-location">
            Sydney, Australia
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;