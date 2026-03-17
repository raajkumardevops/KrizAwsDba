import "./Footer.css";

function Footer() {
  return (
    <footer className="custom-footer text-center py-4 mt-5">
      <div className="container"
      // data-aos="fade-up"
      // data-aos-delay="50"
      >

        <p className="footer-copy mb-3">
          © 2026 KrizAWSDBA | All Rights Reserved
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

          <span className="footer-divider">|</span>

          <a
            href="mailto:kriz1111@gmail.com"
            className="footer-link"
          >
            Email
          </a>

          <span className="footer-divider">|</span>

          <span className="footer-location">Sydney, Australia</span>

        </div>
      </div>
    </footer>
  );
}

export default Footer;