import "./Footer.css";

function Footer() {
  return (
    <footer className="custom-footer text-center py-4 mt-5">

      <div className="container">
             <p className="mb-0">© 2026 KrizAWSDBA | All Rights Reserved</p>

        <div className="footer-links mb-3">

          <a
            href="https://linkedin.com/in/krishnan-thiruvengadam-598258186/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>

          <span className="mx-3">|</span>

          <a
            href="mailto:kriz1111@gmail.com"
            className="footer-link"
          >
            Email
          </a>

          <span className="mx-3">|</span>

          <span className="footer-location">Sydney, Australia</span>

        </div>
      </div>

    </footer>
  );
}

export default Footer;